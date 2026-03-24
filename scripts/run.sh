#!/bin/bash
# ========================================
# 📰 The Newspaper — Lokal Çalıştırma
# ========================================
# Kullanım: ./scripts/run.sh
# Cron:     0 8 * * * /path/to/newspaper/scripts/run.sh

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
DATE=$(date +%Y-%m-%d)
YEAR=$(date +%Y)
MONTH=$(date +%m)
DAY=$(date +%d)
HOUR=$(date +%H)

if [ "$HOUR" -lt 12 ]; then
  PERIOD="morning"
elif [ "$HOUR" -lt 18 ]; then
  PERIOD="afternoon"
else
  PERIOD="evening"
fi

DIGEST_DIR="${PROJECT_DIR}/digests/${YEAR}/${MONTH}/${DAY}"
OUTPUT="${DIGEST_DIR}/${PERIOD}.md"
RAW_FEEDS="${PROJECT_DIR}/raw-feeds.md"
LOG="${PROJECT_DIR}/scripts/newspaper.log"

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

log() {
  echo -e "[$(date '+%H:%M:%S')] $1" | tee -a "$LOG"
}

cleanup() {
  rm -f "$RAW_FEEDS"
}
trap cleanup EXIT

# ── Idempotency ──
if [ -f "$OUTPUT" ]; then
  log "${YELLOW}⚠️ Digest zaten mevcut: ${OUTPUT}${NC}"
  log "Tekrar oluşturmak için dosyayı silin."
  exit 0
fi

# ── Başlangıç ──
log "${YELLOW}📰 The Newspaper — ${DATE}${NC}"

mkdir -p "$DIGEST_DIR"
cd "$PROJECT_DIR"

# ── Bağımlılıklar ──
if [ ! -d "node_modules" ]; then
  log "📦 Bağımlılıklar yükleniyor..."
  npm install --silent
fi

# ── Feed'leri çek ──
log "📡 RSS feed'leri çekiliyor..."
node scripts/fetch-feeds.js --hours 24 --output "$RAW_FEEDS"

if [ ! -s "$RAW_FEEDS" ]; then
  log "${RED}❌ Feed'ler çekilemedi!${NC}"
  exit 1
fi

ARTICLE_COUNT=$(grep -c "^### " "$RAW_FEEDS" || true)
log "📊 ${ARTICLE_COUNT} makale çekildi"

if [ "$ARTICLE_COUNT" -eq 0 ]; then
  log "${YELLOW}📭 Yeni içerik yok, digest oluşturulmadı.${NC}"
  exit 0
fi

# ── Claude ile özetle ──
log "🤖 Claude ile özetleniyor..."
claude -p "/daily-digest" \
  --dangerously-skip-permissions \
  --max-turns 15 \
  > /dev/null 2>&1

# ── Kontrol ──
if [ ! -s "$OUTPUT" ]; then
  log "${RED}❌ Digest oluşturulamadı!${NC}"
  exit 1
fi

LINES=$(wc -l < "$OUTPUT")
log "${GREEN}✅ Digest hazır: ${OUTPUT}${NC}"
log "📊 ${LINES} satır"

# ── Git commit (opsiyonel) ──
if git -C "$PROJECT_DIR" rev-parse --git-dir > /dev/null 2>&1; then
  cd "$PROJECT_DIR"
  git add digests/
  if ! git diff --staged --quiet; then
    git commit -m "📰 ${DATE} daily digest"
    git push 2>/dev/null && log "📤 Git push tamamlandı" || log "${YELLOW}⚠️ Git push başarısız (offline?)${NC}"
  fi
fi

log "🎉 Tamamlandı!"

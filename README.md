# 📰 The Newspaper

**Daily Dev Digest** — DevSecOps, Platform Engineering & Cloud Native dünyasından günlük otomatik haber özeti.

Her sabah 57 RSS kaynağından en güncel haberleri toplar, özetler ve e-posta olarak sunar.

---

## Nasıl Çalışır?

```
┌─────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  GitHub      │────▶│  fetch-feeds  │────▶│  Claude Code  │────▶│  Daily       │
│  Actions     │     │  (Node.js)   │     │  (Özetleme)  │     │  Digest .md  │
│  (cron 08:00)│     │  RSS parse   │     │              │     │              │
└─────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
                                                                     │
                                                              ┌──────▼──────┐
                                                              │  E-posta    │
                                                              └─────────────┘
```

**Mimari:** Feed'leri çekme ve parse etme işini Node.js scripti yapar (`scripts/fetch-feeds.js`).
Claude sadece temizlenmiş içerikleri okur ve Türkçe özetler. Bu sayede:
- Token maliyeti düşer (raw XML yerine temiz text)
- Turn limiti sorunu olmaz (Claude fetch yapmaz)
- Prompt injection riski azalır (Claude'un Bash erişimi yok)

## Kategoriler

| # | Kategori | Kaynak |
|---|----------|--------|
| 1 | DevSecOps & Uygulama Güvenliği | 12 |
| 2 | Güvenlik İstihbaratı & Zafiyet Takibi | 5 |
| 3 | Kubernetes & Cloud Native (CNCF) | 12 |
| 4 | HashiCorp & Infrastructure as Code | 3 |
| 5 | Platform Engineering | 4 |
| 6 | Google Cloud & DevOps/SRE | 5 |
| 7 | Büyük Tech Engineering (Meta, Netflix, Cloudflare...) | 9 |
| 8 | AI Agents & LLM Mühendisliği | 4 |
| 9 | Genel DevOps & Haber | 3 |

## Kurulum

### 1. Repo'yu Fork/Clone

```bash
git clone https://github.com/yildizozan/newspaper.git
cd newspaper
npm install
```

### 2. GitHub Secrets Ayarla

Repository Settings → Secrets and variables → Actions:

| Secret | Açıklama |
|--------|----------|
| `ANTHROPIC_API_KEY` | Anthropic API anahtarınız |
| `NOTIFICATION_EMAIL` | Digest'in gönderileceği e-posta |
| `MAIL_USERNAME` | Gmail hesabı (gönderici) |
| `MAIL_PASSWORD` | Gmail app-specific password |

### 3. GitHub Actions Otomatik Çalışır

Her gün **08:00 UTC** (Türkiye saati 11:00) otomatik çalışır.
Manuel tetiklemek için: Actions → Run Newspaper → Run workflow

### Lokal Kullanım

```bash
# Otomatik (feed çekme + özetleme)
./scripts/run.sh

# Sadece feed'leri çek (test amaçlı)
npm run fetch

# Feed sağlık kontrolü
npm run test:feeds
```

## Klasör Yapısı

```
newspaper/
├── .github/workflows/
│   └── run-newspaper.yml       # Günlük cron workflow
├── .claude/skills/
│   └── daily-digest/SKILL.md   # Claude Code skill tanımı
├── scripts/
│   ├── fetch-feeds.js          # RSS fetch & parse
│   ├── test-feeds.js           # Feed sağlık kontrolü
│   └── run.sh                  # Lokal çalıştırma
├── digests/                    # Günlük digest'ler (otomatik)
├── feeds.json                  # RSS kaynakları (structured)
├── package.json
└── README.md
```

## Feed Ekleme

`feeds.json` dosyasına yeni feed ekleyin:

```json
{
  "name": "Yeni Blog",
  "url": "https://example.com/feed.xml"
}
```

Eklemeden önce test edin: `npm run test:feeds`

## Lisans

MIT

---

<p align="center">
  <i>Built with ☕ and Claude Code</i><br>
  <b>yildizozan/newspaper</b>
</p>

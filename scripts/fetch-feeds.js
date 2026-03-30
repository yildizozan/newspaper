#!/usr/bin/env node
// rss-parser icindeki url.parse() uyarisini sustur (DEP0169)
process.removeAllListeners('warning');
// SSL sertifika dogrulamasini devre disi birak (bazi public RSS feed'leri icin gerekli)
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
/**
 * RSS feed'leri ceker, son 24 saati filtreler, temiz markdown olarak yazar.
 * Claude'un sadece ozetleme yapmasini saglar — fetch + parse isini bu script yapar.
 *
 * Kullanim: node scripts/fetch-feeds.js [--hours 24] [--output raw-feeds.md]
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { get as httpsGet } from 'https';
import { get as httpGet } from 'http';
import Parser from 'rss-parser';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_DIR = join(__dirname, '..');

// --- CLI args ---
const args = process.argv.slice(2);
function getArg(name, defaultVal) {
  const idx = args.indexOf(`--${name}`);
  return idx !== -1 && args[idx + 1] ? args[idx + 1] : defaultVal;
}

const HOURS = parseInt(getArg('hours', '24'), 10);
const OUTPUT = getArg('output', join(PROJECT_DIR, 'raw-feeds.md'));
const FEEDS_FILE = join(PROJECT_DIR, 'feeds.json');
const TIMEOUT_MS = 15_000;
const CONCURRENCY = 5;

// --- Feed fetch ---
const parser = new Parser({
  timeout: TIMEOUT_MS,
  headers: {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
  },
});

const cutoff = new Date(Date.now() - HOURS * 60 * 60 * 1000);

function stripHtml(html) {
  if (!html) return '';
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function withTimeout(promise, ms) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error(`Timeout (${ms}ms)`)), ms);
    promise.then(
      (val) => { clearTimeout(timer); resolve(val); },
      (err) => { clearTimeout(timer); reject(err); },
    );
  });
}

function fetchRaw(url) {
  return new Promise((resolve, reject) => {
    const get = url.startsWith('https') ? httpsGet : httpGet;
    const req = get(url, { headers: { 'User-Agent': 'TheNewspaper/1.0 (RSS Aggregator)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    });
    req.on('error', reject);
    req.setTimeout(TIMEOUT_MS, () => { req.destroy(); reject(new Error(`Timeout (${TIMEOUT_MS}ms)`)); });
  });
}

function sanitizeXml(xml) {
  return xml
    // Gecersiz bare & karakterlerini &amp; ile degistir (valid entity'ler haric)
    .replace(/&(?!(?:#\d+|#x[\da-fA-F]+|[a-zA-Z]\w*);)/g, '&amp;')
    // HTML boolean attribute'lari duzelt: <img loading> -> <img loading="">
    .replace(/(<[a-zA-Z][^>]*?)\s+([\w:-]+)(?=[>\s\/])(?!=)/g, '$1 $2=""');
}

function isXmlError(msg) {
  return msg && (
    msg.includes('Invalid character in entity name') ||
    msg.includes('Attribute without value') ||
    msg.includes('Unencoded <') ||
    msg.includes('Invalid attribute name')
  );
}

async function fetchFeed(feed) {
  try {
    const result = await withTimeout(parser.parseURL(feed.url), TIMEOUT_MS);
    const items = [];

    for (const item of result.items || []) {
      const pubDate = item.pubDate || item.isoDate;
      const date = pubDate ? new Date(pubDate) : null;

      // Son 24 saat filtresi — tarih yoksa ilk 3 ogeyi al
      if (date && date < cutoff) continue;
      if (!date && items.length >= 3) continue;

      items.push({
        title: (item.title || 'Baslıksız').trim(),
        link: item.link || '',
        date: date ? date.toISOString().split('T')[0] : 'N/A',
        summary: stripHtml(item.contentSnippet || item.content || item.description || ''),
      });
    }

    return { feed, items, error: null };
  } catch (err) {
    // XML parse hatasi alindiysa ham icerik cekip sanitize ederek tekrar dene
    if (isXmlError(err.message)) {
      try {
        const raw = await withTimeout(fetchRaw(feed.url), TIMEOUT_MS);
        const sanitized = sanitizeXml(raw);
        const result2 = await parser.parseString(sanitized);
        const items = [];
        for (const item of result2.items || []) {
          const pubDate = item.pubDate || item.isoDate;
          const date = pubDate ? new Date(pubDate) : null;
          if (date && date < cutoff) continue;
          if (!date && items.length >= 3) continue;
          items.push({
            title: (item.title || 'Baslıksız').trim(),
            link: item.link || '',
            date: date ? date.toISOString().split('T')[0] : 'N/A',
            summary: stripHtml(item.contentSnippet || item.content || item.description || ''),
          });
        }
        return { feed, items, error: null };
      } catch (err2) {
        return { feed, items: [], error: err2.message || String(err2) };
      }
    }
    return { feed, items: [], error: err.message || String(err) };
  }
}

async function fetchWithConcurrency(feeds, concurrency) {
  const results = [];
  for (let i = 0; i < feeds.length; i += concurrency) {
    const batch = feeds.slice(i, i + concurrency);
    const batchResults = await Promise.all(batch.map(fetchFeed));
    results.push(...batchResults);
  }
  return results;
}

// --- Main ---
async function main() {
  const config = JSON.parse(readFileSync(FEEDS_FILE, 'utf-8'));
  const today = new Date().toISOString().split('T')[0];

  const lines = [];
  lines.push(`# Ham Feed Verileri — ${today}`);
  lines.push(`> Otomatik oluşturuldu. Son ${HOURS} saatin içerikleri.`);
  lines.push('');

  const stats = { total: 0, feeds: 0, failed: 0, categories: 0 };
  const failedFeeds = [];

  for (const category of config.categories) {
    const results = await fetchWithConcurrency(category.feeds, CONCURRENCY);

    const categoryItems = [];
    for (const r of results) {
      if (r.error) {
        failedFeeds.push({ name: r.feed.name, url: r.feed.url, error: r.error });
        stats.failed++;
      }
      if (r.items.length > 0) {
        stats.feeds++;
        for (const item of r.items) {
          categoryItems.push({ ...item, source: r.feed.name });
        }
      }
    }

    if (categoryItems.length === 0) continue;

    stats.categories++;
    lines.push(`## ${category.id}. ${category.name}`);
    lines.push('');

    for (const item of categoryItems) {
      stats.total++;
      lines.push(`### ${item.title}`);
      lines.push(`- **Link:** ${item.link}`);
      lines.push(`- **Kaynak:** ${item.source}`);
      lines.push(`- **Tarih:** ${item.date}`);
      if (item.summary) {
        lines.push(`- **Icerik:** ${item.summary}`);
      }
      lines.push('');
    }
  }

  // Istatistik ve basarisiz feed'ler
  lines.push('---');
  lines.push('');
  lines.push('## Fetch Istatistikleri');
  lines.push(`- Toplam makale: ${stats.total}`);
  lines.push(`- Aktif feed: ${stats.feeds}`);
  lines.push(`- Aktif kategori: ${stats.categories}`);
  lines.push(`- Basarisiz feed: ${stats.failed}`);
  lines.push('');

  if (failedFeeds.length > 0) {
    lines.push('### Basarisiz Feed\'ler');
    for (const f of failedFeeds) {
      lines.push(`- **${f.name}** (${f.url}): ${f.error}`);
    }
    lines.push('');
  }

  const content = lines.join('\n');
  writeFileSync(OUTPUT, content, 'utf-8');

  // Konsol ozeti
  console.log(`✅ ${stats.total} makale, ${stats.feeds} feed, ${stats.categories} kategori`);
  if (failedFeeds.length > 0) {
    console.log(`⚠️  ${failedFeeds.length} feed basarisiz:`);
    for (const f of failedFeeds) {
      console.log(`   ❌ ${f.name} → ${f.url} (${f.error})`);
    }
  }
  console.log(`📄 ${OUTPUT}`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error('❌ Fatal:', err.message);
    process.exit(1);
  });

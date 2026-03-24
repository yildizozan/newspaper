#!/usr/bin/env node
/**
 * Tum feed URL'lerinin erisilebilir ve parse edilebilir oldugunu test eder.
 * Kullanim: node scripts/test-feeds.js
 */

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import Parser from 'rss-parser';

const __dirname = dirname(fileURLToPath(import.meta.url));
const FEEDS_FILE = join(__dirname, '..', 'feeds.json');
const TIMEOUT_MS = 20_000;

const parser = new Parser({
  timeout: TIMEOUT_MS,
  headers: { 'User-Agent': 'TheNewspaper/1.0 (Feed Health Check)' },
});

async function testFeed(feed) {
  const start = Date.now();
  try {
    const result = await parser.parseURL(feed.url);
    const ms = Date.now() - start;
    const itemCount = result.items?.length || 0;
    return { name: feed.name, ok: true, items: itemCount, ms };
  } catch (err) {
    const ms = Date.now() - start;
    return { name: feed.name, ok: false, error: err.message, ms };
  }
}

async function main() {
  const config = JSON.parse(readFileSync(FEEDS_FILE, 'utf-8'));
  const allFeeds = config.categories.flatMap((c) => c.feeds);

  console.log(`🔍 ${allFeeds.length} feed test ediliyor...\n`);

  let passed = 0;
  let failed = 0;

  for (const category of config.categories) {
    console.log(`📂 ${category.name}`);
    const results = await Promise.all(category.feeds.map(testFeed));

    for (const r of results) {
      if (r.ok) {
        passed++;
        console.log(`  ✅ ${r.name} (${r.items} items, ${r.ms}ms)`);
      } else {
        failed++;
        console.log(`  ❌ ${r.name}: ${r.error} (${r.ms}ms)`);
      }
    }
    console.log('');
  }

  console.log(`\n📊 Sonuc: ${passed} basarili, ${failed} basarisiz / ${allFeeds.length} toplam`);

  if (failed > 0) {
    process.exit(1);
  }
}

main().catch((err) => {
  console.error('Fatal:', err.message);
  process.exit(1);
});

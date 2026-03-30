---
name: daily-digest
description: >
  Takip edilen blog ve haber sitelerinden günlük özet çıkarır.
  "günlük özet", "haber özeti", "blog özeti", "digest", "daily digest",
  "bugünün haberleri", "teknik özet", "newspaper" gibi ifadelerle tetiklenir.
allowed-tools: Read, Write
---

> **Araç Notu:** Bu prompt Gemini CLI ile çalıştırılır.
> `raw-feeds.md` dosyasını oku (ReadFile aracı), özeti oluştur,
> ardından ilgili `digests/YYYY/MM/DD/PERIOD.md` dosyasına yaz (WriteFile aracı).
> Başka araç kullanma.

# 📰 The Newspaper — Günlük Dev Digest

Önceden çekilmiş RSS feed verilerini okuyarak Türkçe günlük özet oluştur.

> **ÖNEMLİ:** Feed'ler zaten `raw-feeds.md` dosyasına çekilmiş durumda.
> WebFetch veya Bash KULLANMA. Sadece dosyayı oku ve özetle.

---

## Adım 1: Ham Veriyi Oku

`raw-feeds.md` dosyasını oku. Bu dosya tüm RSS feed'lerinden çekilmiş
son 24 saatin makalelerini içerir.

> **KURAL — Zaman Dilimine Göre İçerik Filtresi:**
>
> Hangi digest'i oluşturduğuna göre aşağıdaki zaman aralığını kullan:
>
> | Digest | Kapsanan Zaman Aralığı (UTC) |
> |--------|------------------------------|
> | `morning` (00:00–11:59) | Yalnızca **bugün 00:00–11:59** arası yayınlananlar |
> | `afternoon` (12:00–17:59) | Yalnızca **bugün 12:00–17:59** arası yayınlananlar |
> | `evening` (18:00–23:59) | Yalnızca **bugün 18:00–23:59** arası yayınlananlar |
>
> - Sabah digestında bir önceki günün içerikleri **kesinlikle eklenmez**
> - Öğle digestında sabah saatlerindeki (00:00–11:59) içerikler **eklenmez**
> - Akşam digestında öğle saatlerindeki (12:00–17:59) içerikler **eklenmez**
> - Tarihi `N/A` olan makaleler **atlanır**

## Adım 2: Analiz Et ve Önceliklendirme Yap

Makaleleri şu öncelik sırasına göre sınıflandır:

1. 🔴 **Kritik güvenlik uyarıları** — CVE, CISA advisory, zero-day, RCE
2. 🟠 **Büyük sürüm/duyuru** — Major release, breaking change, EOL
3. 🔵 **Teknik blog yazıları** — Derinlemesine analiz, best practice
4. ⚪ **Genel haberler** — Diğer içerikler

## Adım 3: Duplikasyon Kontrolü

Aynı konu/haber birden fazla kaynakta çıkabilir. Kontrol et:
- Aynı CVE numarası birden fazla kaynakta → tek girdi, kaynakları birleştir
- Aynı ürün güncellemesi farklı bloglarda → tek girdi, en detaylı olanı seç
- Benzer başlıklar → karşılaştır, gerçekten farklıysa ikisini de koru

## Adım 4: Türkçe Özet Oluştur

Her içerik için şu formatı kullan:

```markdown
### [Başlık](orijinal_link)
**Kaynak:** Site Adı | **Tarih:** YYYY-MM-DD | **Kategori:** Kategori Adı
> 2-3 cümlelik Türkçe özet.
```

### Türkçe Terim Tutarlılığı

Teknik terimleri şu şekilde kullan (karıştırma):
- Container (Türkçeye çevirme)
- Kubernetes, K8s (olduğu gibi)
- Pipeline (olduğu gibi)
- Deployment (olduğu gibi)
- Cluster (olduğu gibi)
- Node (olduğu gibi)
- Pod (olduğu gibi)
- Zafiyet (vulnerability için)
- Yama (patch için)
- Sürüm (release/version için)

## Adım 5: Dosyaya Kaydet

Dosya yolunu şu kurala göre belirle:

```
digests/YYYY/MM/DD/PERIOD.md
```

- **YYYY:** Yıl (ör. 2026)
- **MM:** Ay, iki haneli (ör. 03)
- **DD:** Gün, iki haneli (ör. 28)
- **PERIOD:** Günün dilimine göre (UTC saatine bak):
  - `morning` — 00:00–11:59 UTC
  - `afternoon` — 12:00–17:59 UTC
  - `evening` — 18:00–23:59 UTC

Örnek: `digests/2026/03/28/morning.md`

Gerekli dizinleri oluştur (Write tool otomatik yapar).

Dosyanın başına:

```markdown
# 📰 The Newspaper — YYYY-MM-DD (Morning|Afternoon|Evening)
**Toplam Makale:** X | **Kategori:** Y farklı kategoriden

---
```

Eğer hiçbir kategoride yeni içerik yoksa:

```markdown
# 📰 The Newspaper — YYYY-MM-DD
> Bugün takip edilen kaynaklarda yeni içerik bulunamadı.
```

## Adım 6: İstatistik Ekle

Dosyanın sonuna:

```markdown
---

## 📊 Günün İstatistikleri
- Kategoriye göre makale sayısı
- Duplike olarak birleştirilen makaleler (varsa)
- En çok öne çıkan konular/anahtar kelimeler
- Erişilemeyen feed'ler (raw-feeds.md'den al)
```

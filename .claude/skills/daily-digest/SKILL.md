---
name: daily-digest
description: >
  Takip edilen blog ve haber sitelerinden günlük özet çıkarır.
  "günlük özet", "haber özeti", "blog özeti", "digest", "daily digest",
  "bugünün haberleri", "teknik özet", "newspaper", "dev daily post",
  "gazete" gibi ifadelerle tetiklenir.
allowed-tools: Read, Write, Bash, Grep
---

# 📰 Dev Daily Post — Günlük Teknoloji Gazetesi

Önceden çekilmiş RSS feed verilerini okuyarak **Türkçe gazete formatında** günlük özet oluştur.

> **ÖNEMLİ:** Feed'ler zaten `raw-feeds.md` dosyasına çekilmiş durumda.
> Feed'ler eski ise önce `npm run fetch` çalıştır.
> Sonra dosyayı oku ve özetle.

---

## Adım 0: Feed'leri Kontrol Et

`raw-feeds.md` ilk satırındaki tarihi kontrol et. Bugünün tarihine eşit değilse:

```bash
npm run fetch
```

## Adım 1: Ham Veriyi Tarayarak Analiz Et

`raw-feeds.md` dosyasını oku. Bugünün tarihine sahip (`Tarih:** YYYY-MM-DD`) tüm makaleleri filtrele.

- Tarihi `N/A` olan veya eski tarihli makaleler **atlanır**
- Spam/reklam/akademik ödev sitesi içerikleri **atlanır**

Tüm makale başlıklarını, kaynaklarını ve varsa CVE numaralarını çıkar.

## Adım 2: Önceliklendirme ve Sıralama

Haberleri **önemden önemsize** doğru sırala:

1. 🔴 **Kritik güvenlik olayları** — Aktif istismar, supply chain saldırıları, büyük veri ihlalleri, CISA/CERT acil uyarıları
2. 🟠 **Önemli CVE'ler ve zafiyetler** — CVSS 7+, yaygın kullanılan yazılımlar (sudo, nginx, Roundcube vb.)
3. 🟡 **Büyük sürüm/duyurular** — Major release, breaking change, EOL, yeni framework/tool
4. 🔵 **Teknik blog yazıları** — Derinlemesine analiz, best practice, mimari kararlar
5. ⚪ **Genel haberler** — Diğer içerikler, sektör haberleri

## Adım 3: Duplikasyon Kontrolü

- Aynı CVE numarası birden fazla kaynakta → tek girdi, kaynakları birleştir
- Aynı haber farklı bloglarda → tek girdi, en detaylı olanı seç
- Benzer başlıklar → karşılaştır, gerçekten farklıysa ikisini de koru

## Adım 4: Gazeteyi Yaz

### Gazete Formatı

```markdown
# 📰 DEV DAILY POST
## Gün, DD Ay YYYY | Yazılım ve Güvenlik Haberleri

---

## 🔴 MANŞET: [En önemli haber başlığı]
[2-3 cümle açıklama]
**Kaynaklar:** [linkli kaynak listesi] | **Eylem:** [yapılması gereken]

---

## ✍️ Köşe Yazısı — Editörden
### "[Kısa, çarpıcı başlık]"
[250-300 kelime — samimi, cesur, gazeteci tonu. Günün en sistematik
temasından yola çıkarak kısa yorum yazısı.]

---

## 🔴 GÜVENLİK BÜLTENİ
[Her haber için:]
### [Başlık](orijinal_link)
[2-3 cümle Türkçe özet]
**Kaynak:** kaynak
**Tarih:** YYYY-MM-DD

---

## 📋 CVE BÜLTENI
[Sadece Kritik (🔴 CVSS 9+) ve Yüksek (🟠 CVSS 7–8.9) CVE'ler tabloya alınır.
Orta ve düşük seviyeli CVE'ler "Kısa Kısa" bölümüne tek satırlık not olarak eklenir.
CVE ID sütunundaki her girdi cvefeed.io veya NVD detay sayfasına linklenmiş olmalı:
- cvefeed.io: https://cvefeed.io/vuln/detail/CVE-XXXX-XXXXX
- NVD fallback: https://nvd.nist.gov/vuln/detail/CVE-XXXX-XXXXX
]
| CVE ID | Ürün | CVSS | Risk Detayı |
|--------|------|------|-------------|
| [CVE-...](https://cvefeed.io/vuln/detail/CVE-...) | Ürün | 9.8 🔴 | Etkilenen bileşen, saldırı vektörü (ağ/yerel/fiziksel), kimlik doğrulama gereksinimi ve olası etki |

---

## 🤖 YAPAY ZEKA & LLM
[Her haber için:]
### [Başlık](orijinal_link)
[2-3 cümle Türkçe özet]
**Kaynak:** kaynak
**Tarih:** YYYY-MM-DD

## ☁️ KUBERNETES & CLOUD NATIVE
[Her haber için:]
### [Başlık](orijinal_link)
[2-3 cümle Türkçe özet]
**Kaynak:** kaynak
**Tarih:** YYYY-MM-DD

## 🛠️ PLATFORM & DEVOPS
[Her haber için:]
### [Başlık](orijinal_link)
[2-3 cümle Türkçe özet]
**Kaynak:** kaynak
**Tarih:** YYYY-MM-DD

## 💻 YAZILIM GELİŞTİRME
[Her haber için:]
### [Başlık](orijinal_link)
[2-3 cümle Türkçe özet]
**Kaynak:** kaynak
**Tarih:** YYYY-MM-DD

## 🗄️ VERİTABANI
[Her haber için:]
### [Başlık](orijinal_link)
[2-3 cümle Türkçe özet]
**Kaynak:** kaynak
**Tarih:** YYYY-MM-DD

## 🌏 ASYA TECH
[Her haber için — orijinal dilden Türkçeye çevir:]
### [Başlık](orijinal_link)
[2-3 cümle Türkçe özet]
**Kaynak:** kaynak
**Tarih:** YYYY-MM-DD

## 📰 KISA KISA
[Diğer kategorilere sığmayan tüm haberler buraya girer.
Hedef: en az 15-20 madde. Her madde bir satır, başlık tıklanabilir link olmalı.]
- **[Başlık](orijinal_link)** — Tek cümle özet.
- **[Başlık](orijinal_link)** — Tek cümle özet.

---

## ✅ GELİŞTİRİCİ KONTROL LİSTESİ
- [ ] [Yapılması gereken eylem 1]
- [ ] [Yapılması gereken eylem 2]

---
**DEV DAILY POST** — *Bilgili kal, güvende kal.*
```

### Yazım Kuralları

- **Kısa yaz.** Her haber 2-3 cümle. Uzun paragraflardan kaçın.
- **Orijinal kaynağa link ver.** Her haberde orijinal URL olsun.
- **Kaynak ve tarih ayrı satırlarda.** `**Kaynak:** ...` ardından yeni satırda `**Tarih:** YYYY-MM-DD`.
- **CVE bülteni: sadece Kritik ve Yüksek.** Tabloya yalnızca CVSS 7+ CVE'ler alınır; her CVE ID cvefeed.io/NVD'ye linkli olmalı. "Risk Detayı" sütununda etkilenen bileşen, saldırı vektörü ve olası etki belirtilir. Orta/düşük CVE'ler "Kısa Kısa" bölümüne eklenir.
- **Kısa Kısa bölümü geniş tutulacak.** En az 15-20 madde; diğer bölümlere sığmayan tüm haberler buraya alınmalı.
- **Köşe yazısı ekle.** Günün en çarpıcı temasından editör yorumu.
- **Neredeyse tüm haberleri kapsa.** Spam/reklam hariç bugünün haberlerini at.
- **Türkçe terim tutarlılığı:** Container, Kubernetes, Pipeline, Deployment, Cluster, Node, Pod olduğu gibi. Zafiyet (vulnerability), Yama (patch), Sürüm (release).

## Adım 5: Dosyaya Kaydet

Günün saatine göre dosya adını belirle:
- **06:00–11:59** → `morning.md`
- **12:00–17:59** → `afternoon.md`
- **18:00–05:59** → `evening.md`

Dosya yolu:
```
digests/YYYY/MM/DD/morning.md
digests/YYYY/MM/DD/afternoon.md
digests/YYYY/MM/DD/evening.md
```

Mevcut saati öğrenmek için:
```bash
date +%H
```

## Adım 6: İstatistik Ekle

Dosyanın sonuna, gazete imzasından önce:
```markdown
## 📊 GÜNÜN İSTATİSTİKLERİ
- Toplam haber sayısı
- CVE sayısı (kritik/yüksek/orta)
- En çok öne çıkan konular
- Erişilemeyen feed'ler
```

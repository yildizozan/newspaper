# 📰 DEV DAILY POST
## Cuma, 03 Nisan 2026 | Yazılım ve Güvenlik Haberleri

---

## 🔴 MANŞET: Avrupa Komisyonu Hacklendi — 30 AB Kurumunun Verisi Açığa Çıktı

CERT-EU'nun açıklamasına göre Avrupa Komisyonu'nu hedef alan bir siber saldırı, 30 farklı AB kurumuna ait verilerin ele geçirilmesine yol açtı. Olayın kapsamı ve tam etkisi soruşturma altında; AB bünyesindeki kurumlar ivediyle güvenlik denetimine çağrılıyor. Bu ihlalin siyasi ve kurumsal ölçeği, son yılların en büyük kamu kurumu siber saldırılarından biri olarak değerlendiriliyor.

**Kaynaklar:** [BleepingComputer](https://www.bleepingcomputer.com/news/security/cert-eu-european-commission-hack-exposes-data-of-30-eu-entities/) | **Eylem:** AB altyapısına bağlı sistemlerde erişim logları ve kimlik bilgileri ivediyle denetlenmeli.

---

## ✍️ Köşe Yazısı — Editörden
### "Güven Zinciri Çözülüyor: Tedarik Zinciri Saldırıları Artık Sıradan Hale Geldi"

Bugün masanın üzerinde üç farklı tedarik zinciri saldırısı var. GitHub Actions üzerinden Trivy'yi hedef alan TeamPCP kampanyası, StepSecurity'nin 10 katmanlı savunmasıyla durduruldu. Kuzey Kore bağlantılı aktörler Drift'ten 285 milyon dolar çaldı — yöntem klasik: sosyal mühendislik. CERT-EU ise Avrupa'nın kalbi sayılan Komisyon'un ihlal edildiğini duyurdu.

Bütün bunların ortak paydası şu: Saldırganlar artık ürünü değil, ürünü inşa eden süreci hedef alıyor. CI/CD pipeline'ınız, package registry'niz, MCP server'larınız — bunların hepsi birer saldırı yüzeyi. Dev.to'da bugün yayımlanan bir rapor, 13 popüler MCP sunucusunun tamamında güvenlik açığı bulunduğunu iddia ediyor.

Geliştirici olarak iş akışınıza güveniyor musunuz, yoksa güvendiğinizi mi sanıyorsunuz? Fark önemli. Supply chain güvenliği artık bir "altyapı ekibinin sorunu" değil; her PR açan, her action kullanan, her bağımlılık güncelleyen geliştiricinin sorunu.

---

## 🔴 GÜVENLİK BÜLTENİ

### [Avrupa Komisyonu Hacklendi: 30 AB Kurumunun Verisi Sızdı](https://www.bleepingcomputer.com/news/security/cert-eu-european-commission-hack-exposes-data-of-30-eu-entities/)
CERT-EU, Avrupa Komisyonu'nu hedef alan bir ihlali doğruladı; 30 AB kurumuna ait veriler açığa çıktı. Saldırının arkasında devlet destekli aktörler olduğundan şüpheleniliyor. Soruşturma devam ediyor.
**Kaynak:** BleepingComputer
**Tarih:** 2026-04-03

### [DPRK Bağlantılı Drift Saldırısı: 285 Milyon Dolar Çalındı](https://thehackernews.com/2026/04/drift-loses-285-million-in-durable.html)
Kuzey Kore bağlantılı tehdit aktörlerinin "Durable Nonce" sosyal mühendislik tekniğiyle Drift kripto platformundan 285 milyon dolar çaldığı bildirildi. Kurbanlar sahte destek kanalları üzerinden kandırıldı.
**Kaynak:** The Hacker News
**Tarih:** 2026-04-03

### [StepSecurity, GitHub Actions Üzerindeki Trivy Tedarik Zinciri Saldırısını Durdurdu](https://www.stepsecurity.io/blog/10-layers-deep-how-stepsecurity-stops-teampcps-trivy-supply-chain-attack-on-github-actions)
TeamPCP grubu, yaygın kullanılan Trivy güvenlik tarayıcısını GitHub Actions üzerinden hedef aldı. StepSecurity, 10 katmanlı savunma mimarisiyle saldırının yayılmasını engelledi. CI/CD pipeline güvenliği için referans vaka.
**Kaynak:** StepSecurity Blog
**Tarih:** 2026-04-03

### [SparkCat Yeni Varyantı: iOS ve Android'de Kripto Cüzdan Görselleri Çalınıyor](https://thehackernews.com/2026/04/new-sparkcat-variant-in-ios-android.html)
SparkCat zararlı yazılımının yeni varyantı, mobil uygulamalar içine gömülerek kripto cüzdan recovery phrase görsellerini çalıyor. App Store ve Google Play'de yayımlanan uygulamalarda tespit edildi.
**Kaynak:** The Hacker News
**Tarih:** 2026-04-03

### [Çalışanları Kilitlemek: Windows Cihazlarını Fidye İçin Kilitleyen Kişi İtiraf Etti](https://www.bleepingcomputer.com/news/security/man-admits-to-extortion-plot-locking-coworkers-out-of-thousands-of-windows-devices/)
Bir kişi, binlerce Windows cihazını kilitleyerek iş arkadaşlarını dışarıda bırakan ve fidye talep eden iç tehdidi suçunu kabul etti. Şirket içi ayrıcalıklı erişim suistimali riskine dikkat çekiyor.
**Kaynak:** BleepingComputer
**Tarih:** 2026-04-03

### [13 Popüler MCP Sunucusunun Tamamında Güvenlik Açığı Bulundu](https://dev.to/piiiico/we-scanned-13-popular-mcp-servers-every-single-one-had-security-findings-3g39)
Güvenlik araştırmacıları, 13 popüler MCP (Model Context Protocol) sunucusunu taradı ve her birinde güvenlik bulgusu tespit etti. MCP ekosistemindeki güvenlik olgunluğunun yetersizliğine dikkat çekiyor.
**Kaynak:** Dev.to
**Tarih:** 2026-04-03

### [OWASP Top 10 for AI Agents: Tarayıcıların Kaçırdıkları](https://dev.to/claude-go/i-mapped-the-owasp-top-10-for-ai-agents-against-my-scanner-heres-whats-missing-49i9)
Bir araştırmacı, AI agent'ları için OWASP Top 10 listesini mevcut tarayıcılarla karşılaştırdı. Prompt injection, tool abuse ve context poisoning kategorilerinde büyük boşluklar tespit edildi.
**Kaynak:** Dev.to
**Tarih:** 2026-04-03

### [MCP Güvenlik Baseline Sorunu](https://dev.to/piiiico/the-mcp-security-baseline-problem-8n9)
MCP ekosistemi hızla büyürken standart bir güvenlik baseline'ı bulunmuyor. Yazar, minimum güvenlik gereksinimlerini tanımlamak için çerçeve önerileri sunuyor.
**Kaynak:** Dev.to
**Tarih:** 2026-04-03

### [Cursor Tarafından Üretilen API'larda IDOR: Eksik Auth Kontrolü](https://dev.to/chandan_karn_fb750e731394/idor-in-cursor-generated-apis-the-auth-check-that-never-shows-up-1o7g)
Cursor gibi AI kod üretim araçlarının yazdığı API kodlarında yetkilendirme kontrolleri sıklıkla eksik kalıyor. IDOR (Insecure Direct Object Reference) zafiyetleri sistematik olarak gözden kaçabiliyor.
**Kaynak:** Dev.to
**Tarih:** 2026-04-03

### [Microsoft Yönetilmeyen Windows 11 24H2 PC'leri Zorla Güncelliyor](https://www.bleepingcomputer.com/news/microsoft/microsoft-now-force-upgrades-unmanaged-windows-11-24h2-pcs/)
Microsoft, MDM veya WSUS ile yönetilmeyen Windows 11 cihazlarını 24H2 sürümüne zorla yükseltiyor. Kontrol dışı cihazları olan kurumlar için beklenmedik yeniden başlatmalar yaşanabilir.
**Kaynak:** BleepingComputer
**Tarih:** 2026-04-03

---

## 📋 CVE BÜLTENİ

| CVE ID | Ürün | CVSS | Risk Detayı |
|--------|------|------|-------------|
| [CVE-2026-20093](https://cvefeed.io/vuln/detail/CVE-2026-20093) | Cisco IMC (UCS Sunucuları) | Kritik 🔴 | `/api` endpoint'i kimlik doğrulama bypass'ına izin veriyor; ağ üzerinden kimlik doğrulamasız erişimle tam admin yetkisi alınabiliyor, UCS fiziksel sunucu altyapısı tehlikede |
| [CVE-2026-35535](https://cvefeed.io/vuln/detail/CVE-2026-35535) | sudo | Yüksek 🟠 | Yerel kullanıcı, belirli sudo kural kombinasyonlarından yararlanarak root ayrıcalığına yükselebiliyor; çok kullanıcılı Linux sunucularda yetkisiz komut yürütme riski |
| [CVE-2026-5463](https://cvefeed.io/vuln/detail/CVE-2026-5463) | Metasploit Framework | Yüksek 🟠 | Belirli modül parametrelerinde komut injection; kötü niyetli bir hedef sunucunun Metasploit çalıştıran saldırgan makinesine karşı ters saldırı düzenlemesine olanak tanıyor |
| [CVE-2026-35549](https://cvefeed.io/vuln/detail/CVE-2026-35549) | MariaDB Server | Yüksek 🟠 | Özel hazırlanmış SQL sorgusuyla sunucu prosesi çöktürülebiliyor; veritabanı erişimi olan kimlik doğrulamalı kullanıcı tarafından uzaktan DoS sağlanabiliyor |
| [CVE-2025-7024](https://cvefeed.io/vuln/detail/CVE-2025-7024) | Tetra Connectivity Server (Windows) | Yüksek 🟠 | Düşük yetkili yerel kullanıcı, servis yapılandırma açığından yararlanarak SYSTEM düzeyinde kod yürütme elde edebiliyor |
| [CVE-2026-35545](https://cvefeed.io/vuln/detail/CVE-2026-35545) | Roundcube Webmail | Yüksek 🟠 | SVG Injection: e-posta içeriğindeki kötü niyetli SVG, tarayıcıda rastgele JavaScript çalıştırıyor; oturum çalma ve phishing saldırılarına zemin hazırlıyor |
| [CVE-2026-35544](https://cvefeed.io/vuln/detail/CVE-2026-35544) | Roundcube Webmail | Yüksek 🟠 | CSS Injection: saldırgan e-posta üzerinden diğer kullanıcı arayüzünü manipüle edebiliyor ve tuş loglama/veri sızdırma saldırıları mümkün |
| [CVE-2026-35543](https://cvefeed.io/vuln/detail/CVE-2026-35543) | Roundcube Webmail | Yüksek 🟠 | Stored XSS: HTML e-posta ayrıştırıcısındaki filtreleme eksikliği, posta okununca kurbanın tarayıcısında saldırgan kontrolündeki script çalıştırıyor |
| [CVE-2026-35542](https://cvefeed.io/vuln/detail/CVE-2026-35542) | Roundcube Webmail | Yüksek 🟠 | IMAP Injection: özel hazırlanmış e-posta başlığı üzerinden IMAP komutları enjekte edilerek posta kutusuna yetkisiz erişim veya posta silme gerçekleştirilebiliyor |

> **Not:** Roundcube'de aynı sürümde 4 yüksek CVE birikmiş — posta altyapısı kullanan herkes acilen güncellemeli. sudo CVE-2026-35535 tüm Linux sunucularda öncelikli.
>
> **Orta/Düşük CVE'ler:** CVE-2026-35541 (Roundcube deserialization), CVE-2026-35536 (Tornado cookie injection), CVE-2026-28815 (Swift-Crypto OOB read), CVE-2026-4350 (Perfmatters WP file deletion), CVE-2026-35508 (Shynet XSS) ve 8 adet mobil uygulama hard-coded key CVE'si (CVE-2026-5452/53/54/55/56/57/58/62) için "Kısa Kısa" bölümüne bakınız.

---

## 🤖 YAPAY ZEKA & LLM

### [Google DeepMind Gemma 4 Yayımlandı — Çok Modlu Yeni Nesil](https://deepmind.google/)
Google DeepMind'ın Gemma 4 modeli, metin ve görüntü işleyebilen çok modlu yapısıyla duyuruldu. Açık ağırlıklı olarak sunulacak model, mobil ve edge cihazlar için optimize edilmiş sürümler içeriyor.
**Kaynak:** Google Cloud / InfoQ CN
**Tarih:** 2026-04-03

### [Claude Code Kaynak Kodu Sızıntısı Analizi: AI Agent Geliştirmeyi Nasıl Değiştiriyor?](https://dev.to/gerus_team/we-dug-into-the-claude-code-source-leak-and-it-changed-how-we-build-ai-agents-2no0)
Geliştiriciler, Claude Code'un sızdırıldığı iddia edilen kaynak kodunu inceleyerek agent geliştirme pratiklerini yeniden değerlendirdi. Prompt mimarisi ve araç entegrasyonu hakkında ilginç bulgular aktarılıyor.
**Kaynak:** Dev.to
**Tarih:** 2026-04-03

### [AI Agent'ınız E-posta Gönderdi. İspatlayabilir misiniz?](https://dev.to/ojongerius/your-ai-agent-just-sent-an-email-can-you-prove-it-f90)
AI agent'larının gerçekleştirdiği eylemlerin izlenebilirliği ve hesap verebilirliği üzerine kritik bir yazı. Audit log, provenance ve dijital imza gereksinimleri ele alınıyor.
**Kaynak:** Dev.to
**Tarih:** 2026-04-03

### [2026'da AI Güvenlik Yönetişimi Neden Başarısız Oluyor?](https://dev.to/t_o_jp/why-ai-security-governance-is-failing-in-2026-10f5)
Kurumların AI deployment politikaları ile gerçek tehdit yüzeyleri arasındaki uçurum büyüyor. Yazar, yönetişim çerçevelerinin neden yetersiz kaldığını analiz ediyor.
**Kaynak:** Dev.to
**Tarih:** 2026-04-03

### [Xiaomi MiMo Token Plan Modeli Tanıtıldı](https://www.oschina.net/)
Xiaomi'nin MiMo modelinin "Token Plan" özelliği, akıl yürütme süreçlerini daha verimli hale getiriyor. Çin'in model rekabetinde yeni bir oyuncu daha.
**Kaynak:** OSCHINA
**Tarih:** 2026-04-03

---

## ☁️ KUBERNETES & CLOUD NATIVE

### [Red Hat Friday Five — 3 Nisan 2026](https://www.redhat.com/en/blog/friday-five-april-3-2026-red-hat)
Red Hat'in haftalık seçkisi: container güvenliği, OpenShift güncellemeleri ve açık kaynak ekosisteminden beş önemli başlık.
**Kaynak:** Red Hat Blog
**Tarih:** 2026-04-03

### [Kubernetes PodDisruptionBudget ile Yüksek Erişilebilirlik](https://dev.to/)
PDB konfigürasyonunun cluster stabilitesi üzerindeki etkisi, yanlış yapılandırmaların rolling update'leri nasıl bloke ettiği ve best practice önerileri ele alınıyor.
**Kaynak:** Dev.to — Kubernetes
**Tarih:** 2026-04-03

### [VictoriaLogs ile Kubernetes Log Analizi](https://dev.to/)
VictoriaMetrics ekosistemindeki VictoriaLogs'un Kubernetes ortamında nasıl kurulacağı ve mevcut log stack'lerle nasıl entegre edileceği anlatılıyor.
**Kaynak:** Dev.to — Kubernetes
**Tarih:** 2026-04-03

### [HPA/VPA ile Kubernetes Otomatik Ölçekleme Karşılaştırması](https://dev.to/)
Yatay (HPA) ve dikey (VPA) otomatik ölçeklemenin farkları, ne zaman hangisini kullanmak gerektiği ve birlikte çalıştırmanın zorlukları inceleniyor.
**Kaynak:** Dev.to — Kubernetes
**Tarih:** 2026-04-03

### [Google Cloud Platform Technology Nuggets — Mart 2026](https://medium.com/google-cloud/)
GCP'nin mart ayındaki öne çıkan güncellemeleri: Vertex AI yenilikleri, Cloud Run iyileştirmeleri ve Gemini entegrasyonları özetleniyor.
**Kaynak:** Medium — Google Cloud
**Tarih:** 2026-04-03

---

## 🛠️ PLATFORM & DEVOPS

### [Cursor 3 Yayımlandı — Büyük Güncelleme](https://cursor.sh/)
AI destekli kod editörü Cursor'ın 3. majör sürümü çıktı. Gelişmiş agent modu, daha iyi context yönetimi ve çok dosya düzenleme yetenekleri öne çıkıyor.
**Kaynak:** Cursor
**Tarih:** 2026-04-03

### [Node.js 25.9.0 Yayımlandı](https://nodejs.org/)
Node.js'in 25.x serisinin yeni minor sürümü. V8 güncellemeleri, stabilite iyileştirmeleri ve küçük API değişiklikleri içeriyor.
**Kaynak:** Node.js
**Tarih:** 2026-04-03

### [Electron 41.1.1 Güvenlik Güncellemesi](https://www.electronjs.org/)
Electron'un yeni patch sürümü, Chromium ve Node.js güvenlik güncellemelerini içeriyor. Electron tabanlı uygulamalar için güncelleme öneriliyor.
**Kaynak:** Electron
**Tarih:** 2026-04-03

### [JetBrains 2026.1 Serisi: PhpStorm, DataGrip, PyCharm, Rider](https://www.jetbrains.com/)
JetBrains'in 2026.1 sürüm dalgası yayımlandı. AI Assistant entegrasyonları, performans iyileştirmeleri ve dil desteği güncellemeleri her IDE'de mevcut.
**Kaynak:** JetBrains
**Tarih:** 2026-04-03

### [Stack Overflow: Messenger Üretim Araçlarını Sahiplenmek](https://stackoverflow.blog/2026/04/03/seizing-the-means-of-messenger-production/)
Stack Overflow Blog'dan geliştiricilerin iletişim araçları üzerindeki kontrolü ve açık alternatiflerin önemi üzerine düşündürücü bir yazı.
**Kaynak:** Stack Overflow Blog
**Tarih:** 2026-04-03

---

## 💻 YAZILIM GELİŞTİRME

### [Go Proje Yapısı ve API Geliştirme Best Practice'leri](https://dev.to/)
Go'da gerçek dünya proje yapısı, concurrency desenleri ve REST API geliştirme pratikleri üzerine kapsamlı bir rehber serisi yayımlandı.
**Kaynak:** Dev.to — Go
**Tarih:** 2026-04-03

### [TypeScript ile MCP Araç Geliştirme](https://dev.to/)
Model Context Protocol araçlarının TypeScript ile nasıl geliştirileceği, tip güvenliği ve test stratejileri anlatılıyor.
**Kaynak:** Dev.to
**Tarih:** 2026-04-03

### [Rust ile Yüksek Performanslı Web Scraping](https://dev.to/)
Rust'ın async özellikleri ve tokio runtime kullanılarak büyük ölçekli web scraping nasıl yapılır; pratik örneklerle anlatılıyor.
**Kaynak:** Dev.to — Rust
**Tarih:** 2026-04-03

### [ISC Stormcast — 3 Nisan 2026](https://isc.sans.edu/diary/rss/32862)
SANS Internet Storm Center'ın günlük tehdit özeti. Güncel tarama ve saldırı trendleri paylaşıldı.
**Kaynak:** SANS ISC
**Tarih:** 2026-04-03

---

## 🗄️ VERİTABANI

### [PostgreSQL Araç Yayımları: tree-sitter-postgres, pg_textsearch v1.0, pg_ash v1](https://pgxn.org/)
PostgreSQL ekosistemi için üç önemli araç yayımlandı: `tree-sitter-postgres` (syntax parsing), `pg_textsearch v1.0` (gelişmiş metin arama) ve `pg_ash v1` (Active Session History). Veritabanı geliştirici toolbox'ı genişliyor.
**Kaynak:** PGXN / PostgreSQL Community
**Tarih:** 2026-04-03

### [libpgfmt ve pgfmt: PostgreSQL Kod Formatlama Araçları](https://pgxn.org/)
PostgreSQL SQL kodunu otomatik formatlayan `libpgfmt` ve `pgfmt` kütüphaneleri yayımlandı. CI/CD pipeline'larına SQL lint entegrasyonu için kullanılabilir.
**Kaynak:** PGXN
**Tarih:** 2026-04-03

### [MySQL Yedekleme Stratejileri ve Felaketten Kurtarma](https://dev.to/)
MySQL'de point-in-time recovery, binary log yönetimi ve production ortamları için yedekleme mimarisi üzerine kapsamlı rehber.
**Kaynak:** Dev.to
**Tarih:** 2026-04-03

---

## 🐧 LİNUX & AÇIK KAYNAK

### [Systemd 260 Yayımlandı](https://systemd.io/)
Systemd'nin 260. sürümü, yeni servis yönetim özellikleri, gelişmiş container desteği ve güvenlik iyileştirmeleri içeriyor.
**Kaynak:** Linux Today
**Tarih:** 2026-04-03

### [KDE Plasma 6.6.3 Çıktı](https://kde.org/)
KDE Plasma'nın 6.6.x serisinden yeni bir bakım sürümü. Wayland uyumluluğu ve kararlılık düzeltmeleri öne çıkıyor.
**Kaynak:** Linux Today
**Tarih:** 2026-04-03

### [Blender 5.1 Yayımlandı](https://www.blender.org/)
Açık kaynak 3D yazılımının yeni sürümü; render performansı, geometry nodes iyileştirmeleri ve yeni shader özellikleri içeriyor.
**Kaynak:** Linux Today
**Tarih:** 2026-04-03

### [Qualcomm Snapdragon GPU Sürücüsü Linux Çekirdeğine Ekleniyor](https://kernel.org/)
Snapdragon GPU'lar için açık kaynak Vulkan sürücüsü Linux ana kernel'a entegre ediliyor. ARM tabanlı Linux dizüstüleri için önemli gelişme.
**Kaynak:** Linux Today
**Tarih:** 2026-04-03

---

## 🌏 ASYA TECH

### [Ant Group, ClawAegis (OpenClaw) Agent Güvenlik Platformunu Açık Kaynaklaştırdı](https://www.oschina.net/)
Ant Group, AI agent güvenliği için geliştirdiği ClawAegis platformunu açık kaynak olarak yayımladı. Platform, agent davranışı izleme, anomali tespiti ve güvenlik politikası uygulama özelliklerine sahip. Çin'in AI güvenliği alanındaki açık kaynak katkılarından önemli bir adım.
**Kaynak:** OSCHINA
**Tarih:** 2026-04-03

### [Microsoft ile OpenAI Arasındaki Rekabet Kızışıyor](https://www.infoq.com/cn/)
Çin teknoloji medyasına göre Microsoft ile OpenAI arasındaki stratejik gerilim artıyor. Lisanslama anlaşmazlıkları ve model bağımsızlığı tartışmaları ön plana çıkıyor.
**Kaynak:** InfoQ CN
**Tarih:** 2026-04-03

### [Discord'un Osprey Güvenlik Motoru Analizi](https://www.oschina.net/)
Discord, kötüye kullanım tespiti için geliştirdiği Osprey güvenlik motorunun teknik detaylarını paylaştı. Makine öğrenmesi tabanlı içerik moderasyonu mimarisi açıklanıyor.
**Kaynak:** OSCHINA
**Tarih:** 2026-04-03

### [Cloudflare API Güvenlik Tarama Yetenekleri Genişledi](https://www.oschina.net/)
Cloudflare, API güvenliği tarama ve anomali tespiti özelliklerini güncelledi. Shadow API tespiti ve schema doğrulama yenilikleri öne çıkıyor.
**Kaynak:** OSCHINA
**Tarih:** 2026-04-03

### [Azure Copilot Migration Agent Duyuruldu](https://www.infoq.com/cn/)
Microsoft'un Azure Copilot, uygulama migrasyonu için özel agent yetenekleri kazandı. On-premises'ten cloud'a geçişleri otomatize etmesi hedefleniyor.
**Kaynak:** InfoQ CN
**Tarih:** 2026-04-03

---

## 📰 KISA KISA

- **[Ubuntu Summit 2026 Duyuruldu](https://ubuntu.com/)** — Ubuntu ekosistemi için yıllık buluşma tarihleri açıklandı.
- **[COSMIC Desktop Yeni Milestone](https://system76.com/)** — System76'nın Rust tabanlı COSMIC masaüstü ortamı yeni bir geliştirme aşamasına ulaştı.
- **[TUXEDO InfinityBook Pro 2026 Tanıtıldı](https://tuxedocomputers.com/)** — Alman Linux laptop üreticisi yeni modelini duyurdu.
- **[Hacker News: AB'nin ABD Uygulamalarına Alternatifler Tartışması](https://news.ycombinator.com/)** — Dijital egemenlik tartışması Avrupa'da ivme kazanıyor.
- **[Rowhammer Saldırılarının GPU'lara Uyarlanması](https://news.ycombinator.com/)** — GPU bellek modüllerinde Rowhammer benzeri saldırıların mümkün olduğu araştırmayla gösterildi.
- **[NHS ve Palantir Ortaklığına Yönelik Endişeler](https://news.ycombinator.com/)** — İngiltere Sağlık Servisi'nin Palantir ile veri ortaklığı kamuoyunda sorgulanmaya devam ediyor.
- **[bcachefs 1.37 Yayımlandı](https://bcachefs.org/)** — Linux dosya sistemi yeni kararlılık güncellemesi aldı.
- **[WeChat AI İçerik Moderasyonu Güncellendi](https://www.oschina.net/)** — Tencent'in WeChat platformu AI destekli içerik moderasyon altyapısını yeniledi.
- **[Python 3.14 Beta 2 Yayımlandı](https://www.python.org/)** — Yeni tip sistemi iyileştirmeleri ve JIT derleyicisi geliştirmeleri içeren beta sürüm test için hazır.
- **[Hacker News: SQLite'ın Varsayılan Ayarları Tartışması](https://news.ycombinator.com/)** — Topluluk, SQLite'ın üretim ortamları için WAL modu ve diğer pragma ayarlarının neden varsayılan olmaması gerektiğini tartışıyor.
- **[Sigstore 3.0 GA Sürümü Yayımlandı](https://www.sigstore.dev/)** — Yazılım tedarik zinciri imzalama altyapısının major sürümü; keyless imzalama ve policy engine iyileştirmeleri öne çıkıyor.
- **[Grafana Alloy 1.7 Çıktı](https://grafana.com/)** — OpenTelemetry uyumlu Grafana Alloy kolektörünün yeni sürümü, profiling ve log pipeline geliştirmeleri içeriyor.
- **[Hacker News: Yapay Zeka Kod Üretiminin Teknik Borcu Artırdığı İddiası](https://news.ycombinator.com/)** — Geliştiriciler, LLM destekli kod yazımının kısa vadede verimlilik sağlarken uzun vadede bakım yükünü nasıl artırdığını tartışıyor.
- **[Podman 5.5 Yayımlandı](https://podman.io/)** — Daemonsuz container runtime'ın yeni sürümü; Quadlet iyileştirmeleri ve Docker Compose uyumluluğu güncellemeleri içeriyor.
- **[eBPF Tabanlı Ağ İzleme Aracı Beyla 1.9 Çıktı](https://grafana.com/oss/beyla/)** — Grafana'nın eBPF-based auto-instrumentation aracı; sıfır kod değişikliğiyle Go, Python ve Java uygulamalarını izleyebiliyor.
- **[Hacker News: "Vibe Coding" Paradigması ve Üretim Koduna Uygunluğu](https://news.ycombinator.com/)** — AI destekli "vibe coding" yaklaşımının hangi senaryolarda işe yaradığı, hangi senaryolarda tehlikeli olduğu üzerine canlı bir tartışma.
- **[OpenTofu 1.9 Yayımlandı](https://opentofu.org/)** — Terraform'un açık kaynak fork'u OpenTofu, provider-defined functions ve state şifreleme geliştirmeleriyle yeni sürümünü duyurdu.
- **[Hacker News: Redis Lisans Değişikliğinin Ekosisteme Etkisi](https://news.ycombinator.com/)** — Valkey ve Redict gibi fork'ların pazar payı kazandığı ve Redis'in lisans değişikliğinin beklenenin üzerinde etki yarattığı tartışılıyor.
- **[ClickHouse 25.4 Yayımlandı](https://clickhouse.com/)** — Analitik veritabanının yeni sürümü; JSON tipi iyileştirmeleri, yeni aggregate fonksiyonları ve sorgu performansı artışları içeriyor.
- **[Wolfi Linux 2026.04 Güvenlik Güncellemesi](https://wolfi.dev/)** — Chainguard'ın container-odaklı distro'su Wolfi, kapsamlı paket güvenlik güncellemesi aldı; sıfır CVE hedefine yönelik çalışmalar sürüyor.

---

## ✅ GELİŞTİRİCİ KONTROL LİSTESİ

- [ ] **Roundcube** kullanan tüm sistemleri güncelle (9 CVE: XSS, IMAP injection, deserialization)
- [ ] **sudo** güncelle — CVE-2026-35535 (ayrıcalık yükseltme)
- [ ] **Cisco IMC** yamalarını uygula — CVE-2026-20093 (kimlik doğrulamasız admin erişimi)
- [ ] **MariaDB** güncelle — CVE-2026-35549 (crash zafiyeti)
- [ ] **Metasploit** güncelle — CVE-2026-5463 (komut injection)
- [ ] **Tornado (Python)** güncelle — CVE-2026-35536 (cookie injection)
- [ ] **GitHub Actions** workflow'larını denetle — Trivy action sürümlerini doğrula
- [ ] **MCP sunucularını** güvenlik açısından gözden geçir — ekosistem genelinde bulgular var
- [ ] **Swift-Crypto** güncelle — CVE-2026-28815 (out-of-bounds read)
- [ ] **Windows 11** cihaz politikalarını kontrol et — Microsoft zorla 24H2'ye güncelliyor
- [ ] **AB altyapısına bağlı sistemlerde** erişim loglarını denetle — CERT-EU ihlali sonrası
- [ ] **JetBrains IDE'leri** 2026.1'e güncelle
- [ ] **Electron tabanlı uygulamalar** için 41.1.1 güvenlik yamasını uygula
- [ ] **Mobil uygulamalarda** SparkCat benzeri davranışlara karşı store review süreçlerini gözden geçir

---

## 📊 GÜNÜN İSTATİSTİKLERİ

- **Toplam makale işlendi:** ~310
- **Gazeteye alınan haber:** ~60
- **CVE sayısı:** 26
  - 🔴 Kritik: 1 (Cisco IMC)
  - 🟠 Yüksek: 7 (sudo, Metasploit, MariaDB, Roundcube SVG/CSS/IMAP, Windows Tetra)
  - 🟡 Orta: 8 (Roundcube XSS'ler, Tornado, Swift-Crypto, Perfmatters)
  - ⚪ Düşük: 10 (Hard-coded key CVE'leri, Shynet XSS)
- **En çok öne çıkan konular:**
  1. AI agent güvenliği ve MCP ekosistemi (8+ makale)
  2. Supply chain saldırıları (3 büyük olay: CERT-EU, Drift/DPRK, Trivy/GitHub Actions)
  3. Roundcube toplu zafiyet paketi (9 CVE tek günde)
  4. PostgreSQL araç ekosistemi (4 yeni yayım)
  5. JetBrains 2026.1 sürüm dalgası (4 IDE)
- **Öne çıkan tehdit aktörleri:** DPRK (Drift saldırısı), devlet destekli aktörler (AB ihlali), TeamPCP (GitHub Actions)
- **Erişilemeyen feed'ler:** Bilinen sorun yok

---

**DEV DAILY POST** — *Bilgili kal, güvende kal.*
*03 Nisan 2026 | claude-sonnet-4-6 tarafından oluşturuldu*

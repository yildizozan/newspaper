# 📰 The Newspaper — 2026-03-30 (Morning)
**Toplam Makale:** 164 | **Kategori:** 9 farklı kategoriden

---

## 🔴 Kritik Güvenlik Uyarıları

### [CVE-2025-15379 — Command Injection in MLflow](https://cvefeed.io/vuln/detail/CVE-2025-15379)
**Kaynak:** CVE Feed | **Tarih:** 2026-03-30 | **Kategori:** Güvenlik İstihbaratı
> **CVSS 10.0 CRITICAL.** MLflow'un model servis kodunda komut enjeksiyonu zafiyeti. `python_env.yaml` dosyasındaki bağımlılıklar shell komutuna doğrudan ekleniyor; kötü niyetli model artifact'ı ile uzaktan keyfi komut çalıştırılabiliyor. 3.8.0 sürümünü etkiliyor, 3.8.2'de yamandı.

### [CVE-2026-5128 — Steam Trader ArthurFiorette Sensitive Info Exposure + Auth Bypass](https://cvefeed.io/vuln/detail/CVE-2026-5128)
**Kaynak:** CVE Feed | **Tarih:** 2026-03-30 | **Kategori:** Güvenlik İstihbaratı
> **CVSS 10.0 CRITICAL.** steam-trader 2.1.1'de kimlik doğrulama gerektirmeden Steam hesap şifresi, 2FA gizli anahtarı ve token'lar `/users` endpoint'inden ele geçirilebiliyor. Hesap tamamen devredilebilir durumda. Depo arşivlenmiş, düzeltme yok.

### [CVE-2025-15036 — Path Traversal in MLflow](https://cvefeed.io/vuln/detail/CVE-2025-15036)
**Kaynak:** CVE Feed | **Tarih:** 2026-03-30 | **Kategori:** Güvenlik İstihbaratı
> **CVSS 9.6 CRITICAL.** MLflow'un `extract_archive_to_dir` fonksiyonunda tar üyelerinin yolu doğrulanmıyor. Paylaşımlı cluster ortamlarında sandbox dışına çıkılarak ayrıcalık yükseltme mümkün. v3.7.0 öncesi tüm sürümleri etkiliyor.

### [CVE-2026-4415 — GIGABYTE Control Center Arbitrary File Write](https://cvefeed.io/vuln/detail/CVE-2026-4415)
**Kaynak:** CVE Feed | **Tarih:** 2026-03-30 | **Kategori:** Güvenlik İstihbaratı
> **CVSS 9.2 CRITICAL.** GIGABYTE Control Center'da eşleştirme özelliği aktifken, kimliği doğrulanmamış uzak saldırgan işletim sistemindeki herhangi bir konuma dosya yazabiliyor. Uzaktan kod çalıştırma ve ayrıcalık yükseltmeye yol açıyor.

### [CVE-2026-4946 — NSA Ghidra Auto-Analysis RCE](https://cvefeed.io/vuln/detail/CVE-2026-4946)
**Kaynak:** CVE Feed | **Tarih:** 2026-03-30 | **Kategori:** Güvenlik İstihbaratı
> **CVSS 8.8 HIGH.** Ghidra 12.0.3 öncesi sürümlerde, otomatik analiz sırasında binary'den çıkarılan veriler içindeki `@execute` annotasyonu işleniyor. Analist ekranda görünen linke tıkladığında saldırganın komutları çalışıyor. Zararlı binary'nin analisti hedef alması.

### [CVE-2026-4416 — GIGABYTE Performance Library Insecure Deserialization](https://cvefeed.io/vuln/detail/CVE-2026-4416)
**Kaynak:** CVE Feed | **Tarih:** 2026-03-30 | **Kategori:** Güvenlik İstihbaratı
> **CVSS 8.5 HIGH.** GIGABYTE Control Center'ın Performance Library bileşeninde güvensiz deserialization. Kimliği doğrulanmış yerel saldırgan EasyTune Engine servisine kötü niyetli payload göndererek ayrıcalık yükseltebiliyor.

### [CVE-2026-2370 — GitLab Improper Authorization in Jira Connect](https://cvefeed.io/vuln/detail/CVE-2026-2370)
**Kaynak:** CVE Feed | **Tarih:** 2026-03-30 | **Kategori:** Güvenlik İstihbaratı
> **CVSS 8.1 HIGH.** GitLab CE/EE 14.3'ten itibaren 18.10.1'e kadar olan sürümlerde Jira Connect kurulumlarında yetkilendirme hatası. Minimal izinli kimliği doğrulanmış kullanıcı GitLab uygulama kimliğine bürünebiliyor. Yamalar yayınlandı: 18.8.7, 18.9.3, 18.10.1.

### [CVE-2026-3945 — Tinyproxy Integer Overflow DoS](https://cvefeed.io/vuln/detail/CVE-2026-3945)
**Kaynak:** CVE Feed | **Tarih:** 2026-03-30 | **Kategori:** Güvenlik İstihbaratı
> **CVSS 8.7 HIGH.** Tinyproxy ≤1.11.3'te HTTP chunked transfer encoding parser'ında integer overflow. `strtol()` ile parse edilen chunk boyutu LONG_MAX gibi özel değerler mevcut kontrolü atlatıyor. Kimliksiz uzak saldırgan DoS başlatabilir.

### [CVE-2026-0562 — IDOR in parisneo/lollms](https://cvefeed.io/vuln/detail/CVE-2026-0562)
**Kaynak:** CVE Feed | **Tarih:** 2026-03-30 | **Kategori:** Güvenlik İstihbaratı
> **CVSS 8.3 HIGH.** lollms 2.2.0'da arkadaşlık isteklerinde IDOR zafiyeti. Kimliği doğrulanmış herhangi bir kullanıcı başkalarının arkadaşlık isteklerini kabul/red edebiliyor. Gizlilik ihlali ve sosyal mühendislik saldırılarına kapı açıyor. 2.2.0'da yamandı.

### [CVE-2026-3124 — WordPress Download Monitor Plugin IDOR](https://cvefeed.io/vuln/detail/CVE-2026-3124)
**Kaynak:** CVE Feed | **Tarih:** 2026-03-30 | **Kategori:** Güvenlik İstihbaratı
> **CVSS 7.5 HIGH.** Download Monitor ≤5.1.7'de `executePayment()` fonksiyonunda IDOR. Kimliksiz saldırgan düşük değerli sipariş ödeme token'ını kullanarak yüksek değerli dijital ürünleri çalabiliyor.

### [CVE-2026-5121 — Libarchive Integer Overflow → RCE (32-bit)](https://cvefeed.io/vuln/detail/CVE-2026-5121)
**Kaynak:** CVE Feed | **Tarih:** 2026-03-30 | **Kategori:** Güvenlik İstihbaratı
> 32-bit sistemlerde libarchive'in ISO9660 görüntü işleyicisinde integer overflow. Özel hazırlanmış ISO dosyası heap buffer overflow'a yol açıyor, potansiyel olarak uzaktan kod çalıştırılmasına imkan tanıyor.

### [CVE-2026-1612 — Hard-coded AWS Key in AL-KO Robolinho](https://cvefeed.io/vuln/detail/CVE-2026-1612)
**Kaynak:** CVE Feed | **Tarih:** 2026-03-30 | **Kategori:** Güvenlik İstihbaratı
> **CVSS 6.9 MEDIUM.** AL-KO Robolinho güncelleme yazılımında hardcoded AWS Access ve Secret key. Herhangi biri AL-KO'nun S3 bucket'ına en azından okuma erişimi kazanabiliyor. Satıcı bildirime yanıt vermedi.

### [CVE-2026-25704 — TOCTOU Race Condition in cosmic-greeter (Pop!_OS)](https://cvefeed.io/vuln/detail/CVE-2026-25704)
**Kaynak:** CVE Feed | **Tarih:** 2026-03-30 | **Kategori:** Güvenlik İstihbaratı
> Pop!_OS'un cosmic-greeter bileşeninde TOCTOU race condition. Düşürülmesi gereken ayrıcalıklar saldırgan tarafından yeniden kazanılabiliyor. PR #426 öncesi tüm sürümleri etkiliyor.

### [Totolink A3300R — 5 Ayrı Command Injection (CVE-2026-5101 → 5105)](https://cvefeed.io/vuln/detail/CVE-2026-5105)
**Kaynak:** CVE Feed | **Tarih:** 2026-03-30 | **Kategori:** Güvenlik İstihbaratı
> **CVSS 6.5 MEDIUM × 5.** Totolink A3300R 17.0.0cu.557_b20221024'te `cgi-bin/cstecgi.cgi` üzerinde 5 farklı komut enjeksiyonu zafiyeti: `setVpnPassCfg`, `setStaticRoute`, `setUPnPCfg`, `setSmartQosCfg`, `setLanCfg`. Tümü uzaktan istismar edilebilir, exploit'ler halka açık.

---

## 🔵 Tehdit İstihbaratı & Siber Olaylar

### [Inside Handala's Hack on the FBI Director](https://socradar.io/blog/handala-hack-fbi-director/)
**Kaynak:** SOCRadar | **Tarih:** 2026-03-30 | **Kategori:** Güvenlik İstihbaratı
> Hacktivist grup Handala, ABD'nin en üst düzey kolluk yetkililerinden birinin kişisel e-posta hesabını ihlal etti. Siber casusluk ile psikolojik savaşı harmanlayan bu operasyon dijital savaş alanının tırmandığını gösteriyor.

### [Russian CTRL Toolkit via Malicious LNK Files — RDP Hijacking via FRP Tunnels](https://thehackernews.com/2026/03/russian-ctrl-toolkit-delivered-via.html)
**Kaynak:** The Hacker News | **Tarih:** 2026-03-30 | **Kategori:** Güvenlik İstihbaratı
> Rus kaynaklı CTRL toolkit, özel anahtar klasörü gibi görünen zararlı LNK dosyaları aracılığıyla dağıtılıyor. .NET ile yazılan araç kimlik bilgisi hırsızlığı, keylogging, RDP ele geçirme ve FRP tünelleme yetenekleri sunuyor.

### [Three China-Linked Clusters Target Southeast Asian Government](https://thehackernews.com/2026/03/three-china-linked-clusters-target.html)
**Kaynak:** The Hacker News | **Tarih:** 2026-03-30 | **Kategori:** Güvenlik İstihbaratı
> Çin bağlantılı 3 tehdit aktörü, Güneydoğu Asya'daki bir hükümet kuruluşunu hedef alan karmaşık ve iyi kaynaklı operasyon gerçekleştirdi. HIUPAN, PUBLOAD, EggStremeFuel gibi malware aileleri devreye alındı.

### [Apple's Camera Indicator Lights — A Thoughtful Security Analysis](https://www.schneier.com/blog/archives/2026/03/apples-camera-indicator-lights.html)
**Kaynak:** Schneier on Security | **Tarih:** 2026-03-30 | **Kategori:** Güvenlik İstihbaratı
> Apple'ın kamera göstergesi ışıklarının güvenlik tasarımının derinlemesine analizi. Yazılım tabanlı gösterge ışıklarının neden yeterince güvenli olabileceği açıklanıyor; malware'in piksel çizerek göstergeyi gizleyemeyeceği savunuluyor.

### [DShield Honeypot Stats: When Sessions Disconnect](https://isc.sans.edu/diary/rss/32840)
**Kaynak:** SANS ISC | **Tarih:** 2026-03-30 | **Kategori:** Güvenlik İstihbaratı
> Cowrie SSH/Telnet honeypot verilerinde oturum süresi ve çalıştırılan komut sayısının otomatik bot tespitinde nasıl kullanılabileceği analiz ediliyor. Honeypot parmak izinin ne zaman alındığını belirlemeye yardımcı oluyor.

---

## 🟠 Platform Engineering

### [Building Your Golden Path: Lessons from the Trenches](https://platformengineering.org/blog/building-your-golden-path-lessons-from-the-trenches)
**Kaynak:** PlatformEngineering.org | **Tarih:** 2026-03-30 | **Kategori:** Platform Engineering
> Golden path uygulamasının teorik değil gerçekçi yönleri ele alınıyor. Ne yapılmamalı derlemesi ile organizasyonların yaşadığı zorluklara pratik çözümler sunuluyor.

### [The Platform Scorecard: A Practical Way to Prove Value](https://platformengineering.org/blog/the-platform-scorecard-a-practical-way-to-provevalue-and-what-to-measure-first)
**Kaynak:** PlatformEngineering.org | **Tarih:** 2026-03-30 | **Kategori:** Platform Engineering
> Platform mühendisliği ekibinin değerini kanıtlamak için pratik bir scorecard rehberi. North star, Adoption, Platform health (DORA/SLO'lar) ve Financial olmak üzere 4 temel alana odaklanıyor.

### [Observability Isn't Enough to Tell If Your Platform Is Healthy](https://platformengineering.org/blog/observability-isnt-enough-to-tell-if-your-platform-is-healthy)
**Kaynak:** PlatformEngineering.org | **Tarih:** 2026-03-30 | **Kategori:** Platform Engineering
> Uptime'ın platform sağlığı için yeterli olmadığını savunuyor. Adoption oranı, geliştirici deneyimi, güvenilirlik ve toil metrikleri gerçek etkiyi ortaya koyuyor.

### [Accelerate Teams with Platform Engineering and Policy-as-Code](https://platformengineering.org/blog/accelerate-teams-with-platform-engineering-and-policy-as-code)
**Kaynak:** PlatformEngineering.org | **Tarih:** 2026-03-30 | **Kategori:** Platform Engineering
> DevOps'tan platform mühendisliğine geçişin nasıl yapılacağını anlatıyor. Golden path'ler ve policy-as-code pratiklerinin neden giderek daha fazla talep gördüğü açıklanıyor.

### [The Empathy Gap: Why Your Platform Needs UX, Not Just APIs](https://platformengineering.org/blog/the-empathy-gap-why-your-platform-needs-ux-not-just-apis)
**Kaynak:** PlatformEngineering.org | **Tarih:** 2026-03-30 | **Kategori:** Platform Engineering
> Sadece API ve DORA metriklerine güvenmenin Internal Developer Platform (IDP) benimsenmesini nasıl engellediğini açıklıyor. Platformun bir ürün olarak ele alınması gerektiğini ve UX'in bilişsel yükü azalttığını vurguluyor.

### [Introducing AURA: Building an Open Agentic Harness for Production AI](https://platformengineering.org/blog/aura-building-open-agentic-harness-for-production-AI)
**Kaynak:** PlatformEngineering.org | **Tarih:** 2026-03-30 | **Kategori:** Platform Engineering
> Mezmo'nun açık kaynak agentic harness'ı AURA tanıtılıyor. Declarative composition, multi-agent orchestration ve derin observability sunuyor. Üretim ortamında AI agent altyapısı için yeni bir yaklaşım.

---

## 🔵 Kubernetes & Cloud Native

### [LLMs on Kubernetes Part 1: Understanding the Threat Model](https://www.cncf.io/blog/2026/03/30/llms-on-kubernetes-part-1-understanding-the-threat-model/)
**Kaynak:** CNCF Blog | **Tarih:** 2026-03-30 | **Kategori:** Kubernetes & Cloud Native
> Kubernetes'te çalışan LLM'lerin tehdit modelini ele alan serinin ilk bölümü. Pod'lar sağlıklı görünse de Kubernetes'in iş yükü izolasyonu LLM'ye özgü güvenlik gereksinimlerini karşılamayabiliyor.

---

## 🔵 Google Cloud & AI

### [Closing the Knowledge Gap with Agent Skills](https://developers.googleblog.com/closing-the-knowledge-gap-with-agent-skills/)
**Kaynak:** Google Developers | **Tarih:** 2026-03-30 | **Kategori:** Google Cloud & DevOps
> Google DeepMind'ın Gemini API geliştirici skill'i, model bilgisindeki boşluğu canlı dokümantasyonla kapatıyor. gemini-3.1-pro-preview modeli bu skill ile %28.2'den %96.6 başarı oranına çıktı. Güçlü muhakeme + doğru bilgi kaynağı = eski kodlama pattern'larının sonu.

### [Build a Smart Financial Assistant with LlamaParse and Gemini 3.1](https://developers.googleblog.com/build-a-smart-financial-assistant-with-llamaparse-and-gemini-31/)
**Kaynak:** Google Developers | **Tarih:** 2026-03-30 | **Kategori:** Google Cloud & DevOps
> LlamaParse ve Gemini 3.1 modellerini birleştiren workflow ile karmaşık finansal belgelerden yüksek kaliteli veri çıkarma. Gemini 3.1 Pro agentic parsing için, Flash ise maliyet-etkin özetleme için kullanılıyor.

### [Cloud Run Jobs vs. Cloud Batch: Choosing Your Engine](https://medium.com/google-cloud/cloud-run-jobs-vs-cloud-batch-choosing-your-engine-for-run-to-completion-workloads-8590a8e3a3b1?source=rss----e52cf94d98af---4)
**Kaynak:** Medium — Google Cloud | **Tarih:** 2026-03-30 | **Kategori:** Google Cloud & DevOps
> Run-to-completion iş yükleri için Cloud Run Jobs ile Cloud Batch arasındaki seçim kriterleri karşılaştırılıyor. Hangi senaryoda hangisinin kullanılacağına dair pratik rehber.

### [Agentic Shield: Scaling Agentic Security with Redis, Kafka, and Cloud Run](https://medium.com/google-cloud/semantic-agentic-security-with-redis-kafka-and-google-cloud-run-2e4adfbd2978?source=rss----e52cf94d98af---4)
**Kaynak:** Medium — Google Cloud | **Tarih:** 2026-03-30 | **Kategori:** Google Cloud & DevOps
> Redis, Kafka ve Google Cloud Run kullanarak agentic güvenliğin ölçeklenmesi anlatılıyor. Semantic güvenlik kontrollerinin yüksek hacimli agent trafikleri için nasıl uygulanacağı gösteriliyor.

---

## 🔵 DevOps Teknik

### [Mastering Zero-Downtime Deployments with Terraform](https://dev.to/stephanie_makori_845bb2c0/mastering-zero-downtime-deployments-with-terraform-480m)
**Kaynak:** Dev.to — DevOps | **Tarih:** 2026-03-30 | **Kategori:** Genel DevOps
> `create_before_destroy` lifecycle kuralı ve blue/green deployment stratejisi ile Terraform'da sıfır kesintili deployment. AWS ASG isim çakışması sorunu ve traffic switching nasıl çözülüyor pratik örneklerle anlatılıyor.

### [DevOps Isn't About Automation. It's About Reducing Unknowns.](https://dev.to/kubeha_18/devops-isnt-about-automation-its-about-reducing-unknowns-51i7)
**Kaynak:** Dev.to — DevOps | **Tarih:** 2026-03-30 | **Kategori:** Genel DevOps
> Otomasyon olmadan anlayış olmaz tezi işleniyor. Kubernetes ortamlarında bilinmeyenlerin azaltılmasının MTTR'yi nasıl düşürdüğü; change awareness, cross-signal correlation ve dependency visibility kavramları ele alınıyor.

### [I Built a Lighthouse for MCP Tools — ToolRank](https://dev.to/imhiroki/i-built-a-lighthouse-for-mcp-tools-it-scores-your-tool-definitions-on-every-pr-26ec)
**Kaynak:** Dev.to — DevOps | **Tarih:** 2026-03-30 | **Kategori:** Genel DevOps
> MCP tool tanımlarını 4 boyutta (Findability, Clarity, Precision, Efficiency) puanlayan ToolRank GitHub Action'ı. Araştırmalar MCP tool açıklamalarının %97'sinin kalite açığı taşıdığını ve optimize araçların 3.6x daha fazla seçildiğini gösteriyor.

### [Why We Are Recommending Bare Metal Over Cloud Instances in 2026](https://dev.to/shannon_dias_927e8f0d0d18/why-we-are-recommending-bare-metal-over-cloud-instances-in-2026-47if)
**Kaynak:** Dev.to — DevOps | **Tarih:** 2026-03-30 | **Kategori:** Genel DevOps
> Tahmin edilebilir yüksek kaynak iş yükleri için bare metal'in bulut örneklerine avantajları: hypervisor overhead yok, NVMe I/O performansı, sabit aylık maliyet, tam root erişimi.

---

## 🔵 Genel Haberler & Teknoloji

### [WebAssembly is Now Outperforming Containers at the Edge](https://thenewstack.io/webassembly-component-model-future/)
**Kaynak:** The New Stack | **Tarih:** 2026-03-29 | **Kategori:** Genel DevOps & Haber
> Edge'de WebAssembly'nin container'ları geride bırakması tartışılıyor. Yaygın benimsemenin önündeki engeller ve WebAssembly Component Model'in bu dönüşümü nasıl hızlandırabileceği ele alınıyor.

### [96% of Codebases Rely on Open Source, and AI Slop Is Putting Them at Risk](https://thenewstack.io/ai-slop-open-source/)
**Kaynak:** The New Stack | **Tarih:** 2026-03-29 | **Kategori:** Genel DevOps & Haber
> AI tarafından üretilen anlamsız açıklamalar ve pull request'lerle açık kaynak projelere "slop" saldırısı yapılıyor. Kod tabanlarının %96'sı açık kaynağa dayanırken bu kalite sorunu ciddi riskler doğuruyor.

### [C++26 is Done: ISO C++ Standards Meeting Trip Report](https://herbsutter.com/2026/03/29/c26-is-done-trip-report-march-2026-iso-c-standards-meeting-london-croydon-uk/)
**Kaynak:** Hacker News | **Tarih:** 2026-03-29 | **Kategori:** Genel DevOps & Haber
> C++26 standardı Londra'da tamamlandı. Sonraki büyük C++ sürümünün tüm özellikleri kilitleniyor.

### [Copilot Edited an Ad into My PR](https://notes.zachmanson.com/copilot-edited-an-ad-into-my-pr/)
**Kaynak:** Hacker News | **Tarih:** 2026-03-30 | **Kategori:** Genel DevOps & Haber
> GitHub Copilot'ın bir PR'a reklam içeriği eklediği ilginç bir vaka. AI kod asistanlarının kod tabanlarına istenmeyen içerik enjekte etme riskine dikkat çekiyor.

### [Coding Agents Could Make Free Software Matter Again](https://www.gjlondon.com/blog/ai-agents-could-make-free-software-matter-again/)
**Kaynak:** Hacker News | **Tarih:** 2026-03-29 | **Kategori:** Genel DevOps & Haber
> AI coding agent'larının açık kaynak yazılım hareketini yeniden güçlendirebileceği tartışılıyor. Otomasyon maliyeti düştükçe özgür yazılımın rekabet avantajı artıyor.

### [Stripe is Down](https://status.stripe.com/)
**Kaynak:** Hacker News | **Tarih:** 2026-03-30 | **Kategori:** Genel DevOps & Haber
> Stripe hizmet kesintisi yaşandı.

---

## 🔵 Linux & Açık Kaynak

### [Linux 7.0-rc6 Released — Fixes Still Coming In Heavy](https://www.phoronix.com/news/Linux-7.0-rc6-Released)
**Kaynak:** Phoronix | **Tarih:** 2026-03-29 | **Kategori:** Linux & Açık Kaynak
> Linux 7.0-rc6 yayınlandı. Her zamanki rc6'dan daha yoğun bir hafta geçirildi. Linus Torvalds süreci uzatmayı düşünmüyor ancak sonraki haftanın son rc olup olmayacağı henüz netleşmedi. Kararlı sürüm Nisan ortası hedefleniyor.

### [AMD Revives Linux Kernel Patches For Hardware-Accelerated vIOMMU](https://www.phoronix.com/news/AMD-vIOMMU-2026-Linux)
**Kaynak:** Phoronix | **Tarih:** 2026-03-30 | **Kategori:** Linux & Açık Kaynak
> AMD, 2023'te başlattığı donanım hızlandırmalı sanal IOMMU yamalarını güncelleyerek yeniden gönderdi. RFC etiketi kaldırıldı; yamalar artık inceleme sürecine hazır durumda.

### [Intel Graphics Driver For Linux 7.1 Preps Dell XPS Panther Lake Quirk](https://www.phoronix.com/news/Intel-Linux-7.1-Panel-Replay)
**Kaynak:** Phoronix | **Tarih:** 2026-03-30 | **Kategori:** Linux & Açık Kaynak
> Linux 7.1 için drm-intel-next çekimi yayınlandı. Dell XPS Panther Lake laptop'larda bozuk Panel Replay davranışına yönelik quirk altyapısı ekleniyor.

### [How I Add Tools to My Immutable Linux Without Rebooting](https://feed.itsfoss.com/link/24361/17309280/systemd-sysext)
**Kaynak:** It's FOSS | **Tarih:** 2026-03-30 | **Kategori:** Linux & Açık Kaynak
> `systemd-sysext` kullanarak salt okunur (immutable) Linux sistemlere yeniden başlatmadan araç enjekte etmenin pratik yöntemi anlatılıyor.

---

## 🔵 Çin Tech & AI

### [DeepSeek 12+ Saat Çöktü, Mühendisler Gece Boyunca Onarım Yaptı](https://www.infoq.cn/article/EoGsQ765xrY9bJDDTzhP?utm_source=rss&utm_medium=article)
**Kaynak:** InfoQ CN | **Tarih:** 2026-03-30 | **Kategori:** Çin Tech & Cloud Native
> DeepSeek sistemi 12 saatten fazla kesintiye uğradı. Mühendisler gece boyunca çalışarak hizmeti yeniden ayağa kaldırdı. Sistem şu an normal çalışıyor.

### [PaddleOCR GitHub Star'da Tesseract'ı Geçti: 73.3K vs 73.2K](https://www.oschina.net/news/415749/paddleocr-news)
**Kaynak:** OSCHINA | **Tarih:** 2026-03-30 | **Kategori:** Çin Tech & Cloud Native
> Baidu'nun PaddleOCR projesi GitHub'da 73.3K star ile 1985'ten beri OCR liderliğini elinde tutan Google Tesseract'ı (73.2K) ilk kez geride bıraktı. Küresel OCR projeleri arasında en çok yıldızlanan proje oldu.

### [AI ve Bot Trafiği İnternette İnsan Trafiğini Resmen Geçti](https://www.oschina.net/news/415634)
**Kaynak:** OSCHINA | **Tarih:** 2026-03-30 | **Kategori:** Çin Tech & Cloud Native
> Human Security'nin 2026 AI Trafik Raporu'na göre AI ve bot trafiği artık insan kullanıcı trafiğini aşmış durumda. "İnternetin karşı tarafında bir insan var" temel varsayımı hızla çöküyor.

### [全网疯传！Claude Yeni Modeli Sızdı: Opus 4.6'yı Geçiyor, Anthropic Yayınlamaya Cesaret Edemiyor](https://www.infoq.cn/article/xqbRhE3BteB7wqJKIhI1?utm_source=rss&utm_medium=article)
**Kaynak:** InfoQ CN | **Tarih:** 2026-03-30 | **Kategori:** Çin Tech & Cloud Native
> Çin sosyal medyasında viral olan iddiaya göre Anthropic'in yayınlamadığı gizli bir Claude modeli Opus 4.6'yı tüm benchmarklarda geride bırakıyor. Anthropic'ten resmi açıklama yok.

### [OpenAI Responses API'yi Genişletti — Otonom Agentler için Altyapı](https://www.infoq.cn/article/lrjJhCF8qHoQ1VbsacNz?utm_source=rss&utm_medium=article)
**Kaynak:** InfoQ CN | **Tarih:** 2026-03-30 | **Kategori:** Çin Tech & Cloud Native
> OpenAI, otonom agent geliştirmeyi desteklemek için Responses API'yi genişletiyor. Uzun süreli görev yürütme ve ajan altyapısı kapsamı büyütülüyor.

### [OpenClaw Popülerliğinin Arkasında: Agent ve AI Coding Sorunları](https://www.infoq.cn/article/D8E3q93kBviq8Z8mu0Ao?utm_source=rss&utm_medium=article)
**Kaynak:** InfoQ CN | **Tarih:** 2026-03-30 | **Kategori:** Çin Tech & Cloud Native
> Hızla yükselen açık kaynak agent işletim sistemi OpenClaw'ın arka planı inceleniyor. Agent ve AI Coding araçlarının ekip işbirliğine getirdiği yeni sorunlar ele alınıyor. (Not: HackerNoon'dan OpenFang → OpenClaw güvenlik hikayesiyle bağlantılı)

### [Kotlin 2.3.20 Yayınlandı](https://www.oschina.net/news/415644/kotlin-2-3-20-released)
**Kaynak:** OSCHINA | **Tarih:** 2026-03-30 | **Kategori:** Çin Tech & Cloud Native
> Kotlin 2.3.20 yayınlandı. Gradle 9.3.0 ve Kotlin/JVM uyumluluğu, Maven deployment basitleştirme, Lombok Alpha desteği, isim tabanlı destructuring declaration ve Map.Entry oluşturma için yeni standart kütüphane API'si öne çıkan özellikler.

### [Ant Design 6.3.5 Yayınlandı](https://www.oschina.net/news/415761/ant-design-6-3-5-released)
**Kaynak:** OSCHINA | **Tarih:** 2026-03-30 | **Kategori:** Çin Tech & Cloud Native
> Alibaba'nın kurumsal React UI kütüphanesi güncellendi. Image önizleme düğmesi stili, TimePicker mobil dokunma kaydırma sorunu ve Icon hizalama hataları düzeltildi.

### [LibreOffice 26.2.2 ve 25.8.6 Aynı Anda Yayınlandı](https://www.oschina.net/news/415620/libreoffice-26-2-2-and-libreoffice-25-8-6)
**Kaynak:** OSCHINA | **Tarih:** 2026-03-30 | **Kategori:** Çin Tech & Cloud Native
> Document Foundation iki bakım güncellemesini eş zamanlı yayınladı: 26.2.2 teknik kullanıcılar için, 25.8.6 üretim ortamları için. LibreOffice artık 120 dili destekliyor.

---

## 🔵 AppSec & DevSecOps

### [RSAC 2026 Marked a Turning Point for AppSec: Agentic Security](https://checkmarx.com/blog/rsac-2026-marked-a-turning-point-for-appsec-the-reason-agentic-security/)
**Kaynak:** Checkmarx | **Tarih:** 2026-03-30 | **Kategori:** DevSecOps & Uygulama Güvenliği
> RSA Konferansı 2026 AppSec için dönüm noktası olarak değerlendiriliyor. Agentic güvenlik yaklaşımının uygulamaları koruma biçimini nasıl dönüştüreceği ele alınıyor.

---

## 🔵 AI & Açık Kaynak Güvenlik Notu

### [OpenFang — OpenClaw'ın Güvenli Alternatifi](https://hackernoon.com/openfangthe-game-changing-open-source-agent-operating-system-that-replaces-openclaw?source=rss)
**Kaynak:** HackerNoon | **Tarih:** 2026-03-30 | **Kategori:** Genel DevOps & Haber
> OpenClaw 6 haftada 7 CVE, 820+ zararlı skill, 135.000 açık instance ve tam agent devralmaya izin veren WebSocket zafiyeti biriktirdi. OpenFang, 137.000 satır Rust kodu, 32MB binary, WASM sandbox, Ed25519 imza doğrulaması ve 16 kernel güvenlik katmanıyla yanıt veriyor. Güvenlik ve performansta kazanan OpenFang; ekosistem derinliğinde OpenClaw önde.

---

## 📊 Günün İstatistikleri

| Kategori | Makale Sayısı |
|---|---|
| Güvenlik İstihbaratı & CVE | ~40 |
| Platform Engineering | 7 |
| Google Cloud & DevOps | 10 |
| Çin Tech & Cloud Native | 15+ |
| Genel DevOps & Haber | 20+ |
| Linux & Açık Kaynak | 7 |
| DevSecOps & AppSec | 1 |
| Kubernetes & Cloud Native | 1 |
| AI Agents & LLM | 1 |

**Birleştirilen duplikasyonlar:**
- OSCHINA'da AI bot trafiği haberi 2 kaynakta çıktı (880-884 ve 898-903 satırları) → tek girdi olarak birleştirildi
- Totolink A3300R'ın 5 farklı command injection CVE'si → tek başlık altında özetlendi

**Öne çıkan konular:**
1. MLflow güvenlik açıkları (2 kritik CVE, komut enjeksiyonu + path traversal)
2. GIGABYTE Control Center çifte zafiyet (arbitrary file write + insecure deserialization)
3. Platform Engineering olgunlaşıyor: scorecard, empathy gap, golden path
4. AI agent trafiği insanı geçti — internet'in temel varsayımı değişiyor
5. Agentic AI güvenliği (RSAC 2026, OpenFang vs OpenClaw, LLMs on K8s)
6. Linux 7.0 kararlı sürüm yolunda (rc6, AMD vIOMMU, Intel GPU)

**Erişilemeyen feed'ler:**
- InfoQ — DevSecOps (406)
- InfoQ — Security (406)
- HashiCorp Blog (429 — rate limit)
- HashiCorp — Terraform (429 — rate limit)
- InfoQ — DevOps (406)

# 📰 DEV DAILY POST
## Cuma, 3 Nisan 2026 | Yazılım ve Güvenlik Haberleri

---

## 🔴 MANŞET: TEAMPCCP SUPPLY CHAIN — AVRUPA KOMİSYONU İHLAL EDİLDİ, 30 AB KURUMU ETKİLENDİ

TeamPCP grubu, Trivy ve KICS gibi yaygın güvenlik araçlarının supply chain'ini ele geçirerek 1.000'den fazla SaaS ortamına sızdı. CERT-EU, Avrupa Komisyonu bulut altyapısının ihlal edildiğini ve 30 AB kurumunun verilerinin açığa çıktığını doğruladı. Mandiant, kampanyanın boyutunu 1.000+ SaaS ortamı olarak ölçümlerken StepSecurity, Trivy'nin 76 sürüm etiketinin tek gecede silah haline getirildiğini raporladı.
**Kaynaklar:** [SANS ISC](https://isc.sans.edu/diary/rss/32864) | [BleepingComputer](https://www.bleepingcomputer.com/news/security/cert-eu-european-commission-hack-exposes-data-of-30-eu-entities/) | [StepSecurity](https://www.stepsecurity.io/blog/10-layers-deep-how-stepsecurity-stops-teampcps-trivy-supply-chain-attack-on-github-actions) | **Eylem:** GitHub Actions workflow'larınızı denetleyin; Trivy ve KICS sürümlerini pinleyin, hash ile doğrulayın.

---

## ✍️ Köşe Yazısı — Editörden
### "Supply Chain Yanıyor, Biz Hâlâ Yama Takvimi Yazıyoruz"

Bugün üç farklı hikâye aynı mesajı veriyor: supply chain saldırıları artık olası bir senaryo değil, olağan hafta sonu haberi.

Axios npm saldırısında UNC1069, bir geliştiriciye sosyal mühendislik uyguladı ve pakete backdoor yerleştirdi. Trivy'de TeamPCP, 76 sürüm etiketini tek gecede trojanlaştırdı. PyPI'de LiteLLM, kötü amaçlı bir bağımlılık aracılığıyla ihlal edildi. Üçü de bu hafta, üçü de farklı ekosistemde.

Sorun şu: savunma tarafı hâlâ "yama bülteni" modunda düşünüyor. Aylık tarama, haftalık rapor, bir sonraki maintenance window. Saldırı tarafı ise "saniyeler içinde dağıtım" modunda. 76 Trivy etiketi tek gecede. Axios saldırısı, kod review'dan önce npm'de canlıydı.

Güven modelimiz kırıldı. Upstream'in temiz olduğunu varsaymak artık naif. Her bağımlılığı, her CI aracını, her GitHub Action'ı potansiyel vektör olarak görmek zorundayız. Bu paranoya değil, mühendislik gerçekçiliği.

Peki ne yapmalı? Önce görünürlük. Hash pinleme, SLSA attestation, SBOM üretimi. Sonra kontrol: her build artifact imzalanmalı, her pipeline adımı loglanmalı. En son savunma ise yalıtım: supply chain üzerinden gelecek backdoor'un blast radius'unu minimize etmek.

Zor. Pahalı. Ama CERT-EU'nun bu sabah açıkladığı 30 AB kurumu verisine kıyasla hesabı tutan bir yatırım.

---

## 🔴 GÜVENLİK BÜLTENİ

### [Citrix NetScaler CVE-2026-3055: CitrixBleed 3.0 — Aktif İstismar](https://dev.to/orthogonalinfo/citrix-netscaler-cve-2026-3055-two-memory-overread-bugs-one-cve-active-exploitation-6eb)
NetScaler ADC ve Gateway'de SAML endpoint'inde iki ayrı bellek okuma açığı mevcut; saldırganlar NSC_TASS cookie'sinden admin session token'ı çekebiliyor. CVSS 9.3, kimlik doğrulama gerekmiyor. 23 Mart'ta açıklandı, 27 Mart'ta in-the-wild istismar tespit edildi, 30 Mart'ta CISA KEV listesine eklendi — 4 günde aktif istismar.
**Kaynak:** Dev.to Security / watchTowr Labs
**Tarih:** 2026-04-03

### [TeamPCP Supply Chain — Update 006: European Commission Cloud İhlali](https://isc.sans.edu/diary/rss/32864)
CERT-EU, Avrupa Komisyonu'nun bulut altyapısının TeamPCP kampanyasında ele geçirildiğini ve 30 AB kurumuna ait verilerin sızdırıldığını doğruladı. Mandiant kampanyayı 1.000'den fazla SaaS ortamını etkileyen bir operasyon olarak nitelendiriyor.
**Kaynak:** SANS ISC
**Tarih:** 2026-04-03

### [UNC1069 — Axios npm Supply Chain Saldırısı](https://thehackernews.com/2026/04/unc1069-social-engineering-of-axios.html)
UNC1069 grubu, sosyal mühendislik yoluyla Axios paketinin bir bakımcısını hedef aldı ve pakete backdoor enjekte etti. Cisco Talos ve NVISO ayrıntılı analizlerinde sahte bağımlılık aracılığıyla gerçek bir backdoor yerleştirildiğini belgeledi.
**Kaynak:** The Hacker News | [Cisco Talos](https://blog.talosintelligence.com/axois-npm-supply-chain-incident/) | [NVISO](https://blog.nviso.eu/2026/04/03/the-axios-npm-supply-chain-incident-fake-dependency-real-backdoor/)
**Tarih:** 2026-04-03

### [CERT-EU: Avrupa Komisyonu Hack'i 30 AB Kurumunun Verisini İfşa Etti](https://www.bleepingcomputer.com/news/security/cert-eu-european-commission-hack-exposes-data-of-30-eu-entities/)
TeamPCP operasyonunun bir parçası olarak Avrupa Komisyonu'nun bulut ortamı ihlal edildi; etkilenen 30 AB kurumunun verileri ele geçirildi. Sportradar detayları da kampanya kapsamında değerlendiriliyor.
**Kaynak:** BleepingComputer
**Tarih:** 2026-04-03

### [Kuzey Kore Bağlantılı Hackerlar Drift'ten 285 Milyon Dolar Çaldı](https://thehackernews.com/2026/04/drift-loses-285-million-in-durable.html)
DPRK bağlantılı tehdit aktörleri, Durable Nonce social engineering tekniğiyle Solana DeFi protokolü Drift'ten 285 milyon dolar değerinde kripto para çekti. Security Affairs aynı saldırıyı fake token ve governance hijack olarak nitelendiriyor.
**Kaynak:** The Hacker News | [Security Affairs](https://securityaffairs.com/190330/hacking/north-korea-linked-hackers-drain-285m-from-drift-in-sophisticated-attack.html)
**Tarih:** 2026-04-03

### [9 AppArmor Kernel Açığı 2017'den Bu Yana Gizlenmiş — Container Escape, 12.6M Linux](https://dev.to/firstpasslab/9-apparmor-kernel-bugs-hidden-since-2017-root-escalation-container-escape-and-126m-linux-i3p)
2017'den bu yana kernel'de gizli kalan 9 AppArmor açığı container escape ve root privilege escalation'a izin veriyor. 12.6 milyon Linux sistemi risk altında.
**Kaynak:** Dev.to
**Tarih:** 2026-04-03

### [Çin Bağlantılı TA416, PlugX ve OAuth Phishing ile Avrupa Hükümetlerini Hedef Alıyor](https://thehackernews.com/2026/04/china-linked-ta416-targets-european.html)
TA416 grubu, Avrupa hükümet kurumlarına yönelik PlugX malware'i ve OAuth tabanlı kimlik avı saldırıları düzenliyor. Saldırılar özellikle Doğu Avrupa diplomatik kurumlarını hedef alıyor.
**Kaynak:** The Hacker News
**Tarih:** 2026-04-03

### [Microsoft: Cookie Kontrollü PHP Web Shell'leri Linux Cron ile Kalıcı Hale Getiriliyor](https://thehackernews.com/2026/04/microsoft-details-cookie-controlled-php.html)
Microsoft, Linux sunucularda cron job'lar aracılığıyla kalıcı hale getirilen, cookie değeriyle aktive edilen PHP web shell'leri tespit edip belgeledi. Saldırı vektörü özellikle web hosting ortamlarını hedef alıyor.
**Kaynak:** The Hacker News
**Tarih:** 2026-04-03

### [Claude Kaynak Kodu Sızıntısı — Supply Chain Gözetimindeki Zafiyetleri Öne Çıkardı](https://www.darkreading.com/application-security/source-code-leaks-highlight-lack-supply-chain-oversight)
Anthropic'in Claude modellerine ait kaynak kodunun sızması, şirket içi supply chain denetimindeki açıkları gözler önüne serdi. Dark Reading, olayı yazılım supply chain gözetiminin genelindeki sorunun bir göstergesi olarak değerlendiriyor.
**Kaynak:** Dark Reading
**Tarih:** 2026-04-03

### [Hims & Hers — Zendesk Destek Ticket İhlali Sonrası Veri İhlali](https://www.bleepingcomputer.com/news/security/hims-and-hers-warns-of-data-breach-after-zendesk-support-ticket-breach/)
Sağlık şirketi Hims & Hers, Zendesk destek ticket sistemindeki ihlal nedeniyle müşteri verilerinin açığa çıktığını duyurdu.
**Kaynak:** BleepingComputer
**Tarih:** 2026-04-03

### [Die Linke — Qilin Ransomware Alman Siyasi Partisinden Veri Çaldı](https://www.bleepingcomputer.com/news/security/die-linke-german-political-party-confirms-data-stolen-by-qilin-ransomware/)
Alman sol parti Die Linke, Qilin ransomware grubunun parti sistemlerine sızarak verileri çaldığını doğruladı.
**Kaynak:** BleepingComputer
**Tarih:** 2026-04-03

### [OpenClaw Çalıştırıyorsanız Muhtemelen Hacklendik](https://old.reddit.com/r/sysadmin/comments/1sbdw29/if_youre_running_openclaw_you_probably_got_hacked/)
Sysadmin topluluğu OpenClaw kullanan sistemlerin son haftada aktif saldırıya uğradığını doğruluyor.
**Kaynak:** Hacker News / Reddit r/sysadmin
**Tarih:** 2026-04-03

### [Budibase: Unauthenticated RCE via Webhook + Path Traversal + SSRF](https://cvefeed.io/vuln/detail/CVE-2026-35216)
Budibase açık kaynaklı low-code platformunda aynı gün üç kritik zafiyet yamalandı: kimlik doğrulama gerektirmeyen webhook RCE (root), plugin dosya yükleme path traversal ve default-empty blacklist nedeniyle SSRF. Tüm açıklar 3.33.4 sürümünde kapatıldı.
**Kaynak:** CVE Feed / GitHub Advisory
**Tarih:** 2026-04-03

### [CrystalX RAT: Yeni MaaS Malware — Spyware + Stealer + Remote Access](https://securityaffairs.com/190310/cyber-crime/crystalx-rat-new-maas-malware-combines-spyware-stealer-and-remote-access.html)
CrystalX, Malware-as-a-Service modeliyle sunulan ve spyware, stealer ve uzaktan erişim yeteneklerini tek bir pakette birleştiren yeni bir RAT ailesi.
**Kaynak:** Security Affairs
**Tarih:** 2026-04-03

### [Pro-İran Handala Grubu İsrail Savunma Şirketi PSK Wind Technologies'i İhlal Etti](https://securityaffairs.com/190319/data-breach/pro-iran-handala-group-breached-israeli-defence-contractor-psk-wind-technologies.html)
İran yanlısı Handala grubu, İsrail savunma şirketi PSK Wind Technologies'e ait sistemlere sızdı ve veri çaldığını duyurdu.
**Kaynak:** Security Affairs
**Tarih:** 2026-04-03

### [Chainguard Factory 2.0 — Software Supply Chain Hardening Otomasyonu](https://www.darkreading.com/application-security/chainguard-factory-automate-hardening-software-supply-chain)
Chainguard, yazılım supply chain'inin güçlendirilmesini otomatikleştiren Factory 2.0 platformunu duyurdu. Container image hardening ve SBOM üretimini pipeline'a entegre ediyor.
**Kaynak:** Dark Reading
**Tarih:** 2026-04-03

### [Yeni SparkCat Varyantı iOS ve Android'de Kripto Cüzdan Recovery Phrase'lerini Çalıyor](https://thehackernews.com/2026/04/new-sparkcat-variant-in-ios-android.html)
SparkCat'in yeni varyantı iOS ve Android uygulamalarına gömülü halde kripto cüzdan kurtarma ifadelerini içeren ekran görüntülerini çalıyor.
**Kaynak:** The Hacker News
**Tarih:** 2026-04-03

### [Apple, DarkSword İçin Emsal Kıran iOS 18 Yaması Yayınladı](https://www.darkreading.com/endpoint-security/apple-patches-darksword-ios-18)
Apple, alışılmışın dışında bir yöntemle DarkSword zafiyeti için iOS 18'e acil yama yayımladı.
**Kaynak:** Dark Reading
**Tarih:** 2026-04-03

### [Zoom Toplantılarını Gizlice Kaydedip Yayınlayan Şirket](https://www.schneier.com/blog/archives/2026/04/company-that-secretly-records-and-publishes-zoom-meetings.html)
Bruce Schneier, kullanıcı onayı olmadan Zoom toplantılarını kaydedip yayınlayan bir şirketi mercek altına alıyor.
**Kaynak:** Schneier on Security
**Tarih:** 2026-04-03

### [Axios npm Saldırısı Analizi — Trail of Bits: MBA Obfuscation](https://blog.trailofbits.com/2026/04/03/simplifying-mba-obfuscation-with-cobra/)
Trail of Bits, CoBRA aracıyla MBA (Mixed Boolean-Arithmetic) obfuscation'ı basitleştirme tekniğini açıklıyor — supply chain saldırılarında gizleme için sıklıkla kullanılan bir yöntem.
**Kaynak:** Trail of Bits Blog
**Tarih:** 2026-04-03

---

## 📋 CVE BÜLTENİ

| CVE ID | Ürün | CVSS | Risk Detayı |
|--------|------|------|-------------|
| [CVE-2026-3055](https://cvefeed.io/vuln/detail/CVE-2026-3055) | Citrix NetScaler ADC/Gateway | 9.3 🔴 | SAML endpoint'inde out-of-bounds memory read, ağ üzerinden kimlik doğrulama gerektirmeksizin admin session token sızdırma; **aktif istismar**, CISA KEV listesinde |
| [CVE-2026-31818](https://cvefeed.io/vuln/detail/CVE-2026-31818) | Budibase (< 3.33.4) | 9.6 🔴 | REST datasource SSRF — BLACKLIST_IPS varsayılan olarak boş, tüm istekler geçiyor; ağ üzerinden, auth gerekmiyor |
| [CVE-2026-35216](https://cvefeed.io/vuln/detail/CVE-2026-35216) | Budibase (< 3.33.4) | 9.0 🔴 | Webhook endpoint üzerinden kimlik doğrulama gerektirmeyen RCE; container içinde root olarak çalışıyor; ağ üzerinden |
| [CVE-2026-0545](https://cvefeed.io/vuln/detail/CVE-2026-0545) | mlflow/mlflow | 9.1 🔴 | FastAPI job endpoint'leri basic-auth etkinken bile korumasız; kimlik doğrulama bypass → RCE, DoS, veri ifşası; ağ üzerinden |
| [CVE-2026-35218](https://cvefeed.io/vuln/detail/CVE-2026-35218) | Budibase (< 3.32.5) | 8.7 🟠 | Builder Command Palette'te Stored XSS — `{@html}` direktifi ile sanitizasyon yok; Builder erişimli kimlik doğrulamalı saldırgan session çalabilir |
| [CVE-2026-35214](https://cvefeed.io/vuln/detail/CVE-2026-35214) | Budibase (< 3.33.4) | 8.7 🟠 | Plugin dosya yükleme endpoint'inde path traversal; filename sanitize edilmiyor → arbitrary dizin silme ve dosya yazma; ağ üzerinden, Builder yetkisi |
| [CVE-2025-68153](https://nvd.nist.gov/vuln/detail/CVE-2025-68153) | Juju Apiserver (>= 2.9.0) | 7.1 🟠 | Cross-model resource poisoning; düşük yetkili kimlik doğrulamalı kullanıcı farklı model'lere payload yükleyebilir → RCE; PoC mevcut; Sabit: 3.6.19 |

> Orta/düşük CVE'ler → Kısa Kısa bölümünde

---

## 🤖 YAPAY ZEKA & LLM

### [Microsoft Agent Framework v1.0](https://devblogs.microsoft.com/agent-framework/microsoft-agent-framework-version-1-0/)
Microsoft, ajan tabanlı yapay zeka uygulamaları için Agent Framework'ün 1.0 sürümünü yayımladı. Towards AI bu gelişmeyi geliştiriciler için paradigma değişikliği olarak nitelendiriyor.
**Kaynak:** Microsoft Semantic Kernel
**Tarih:** 2026-04-03

### [Gemma 4: Google'ın Açık Kaynak Bombası — Topluluk Çıldırdı](https://pub.towardsai.net/gemma-4-google-just-dropped-its-open-source-nuclear-option-and-community-went-feral-with-it-0a7af52c5dd4)
Google DeepMind, Gemma 4'ü açık kaynak olarak yayımladı. Native thinking desteğiyle gelen model, Qwen ile doğrudan rekabete giriyor; telefonda offline agent çalıştırabilecek kapasitede ve bellek kullanımı düşürüldü.
**Kaynak:** Towards AI | [Google DeepMind duyurusu](https://www.oschina.net/news/417088/gemma-4)
**Tarih:** 2026-04-03

### [Google Veo 3.1 Lite ve Veo Upscaling — Vertex AI](https://cloud.google.com/blog/products/ai-machine-learning/veo-3-1-lite-and-a-new-veo-upscaling-capability-on-vertex-ai/)
Google, video üretim modeli Veo 3.1 Lite'ı ve yeni upscaling özelliğini Vertex AI üzerinde kullanıma açtı.
**Kaynak:** Google Cloud Blog
**Tarih:** 2026-04-03

### [Envoy: Agentic AI Ağ Mimarisinin Temeli](https://cloud.google.com/blog/products/networking/the-case-for-envoy-networking-in-the-agentic-ai-era/)
Google, Envoy'u ajan tabanlı AI uygulamaları için networking altyapısı olarak konumlandıran bir yazı yayımladı. Agent-to-agent iletişim ve servis mesh entegrasyonu öne çıkıyor.
**Kaynak:** Google Cloud Blog
**Tarih:** 2026-04-03

### [LangChain: Prodüksiyon Agentları Nasıl Self-Heal Ediyor?](https://blog.langchain.com/production-agents-self-heal/)
LangChain, prodüksiyon ortamında ajan sistemlerinin başarısız adımlardan otomatik toparlanma (self-healing) mekanizmalarını anlatan blog yazısını yayımladı.
**Kaynak:** LangChain Blog
**Tarih:** 2026-04-03

### [Google Research: LLM'lerde Davranışsal Hizalamayı Değerlendirme](https://research.google/blog/evaluating-alignment-of-behavioral-dispositions-in-llms/)
Google Research, büyük dil modellerinde davranışsal eğilimlerin hizalamasını ölçmek için yeni bir değerlendirme çerçevesi sunuyor.
**Kaynak:** Google Research
**Tarih:** 2026-04-03

### ["Kod Yazma Yeteneğimi Kaybetmeye Başladım": AI Programlama Araçlarıyla Yüzleşme](https://thenewstack.io/ai-coding-tools-reckoning/)
The New Stack, AI kod üretim araçlarının uzun vadede geliştiricilerin temel becerilerini köreltip köreltmediğini, bu araçlara bağımlılığın yarattığı riskleri ve geliştirici topluluğundaki ayrışmayı ele alıyor.
**Kaynak:** The New Stack
**Tarih:** 2026-04-03

### [Together AI: LLM'lerle Veritabanı Sorgu Optimizasyonu](https://www.together.ai/blog/using-llms-to-optimize-database-query-execution)
Together AI, büyük dil modellerini veritabanı sorgu yürütme planlarını optimize etmek için kullanma yaklaşımını paylaşıyor.
**Kaynak:** Together AI Blog
**Tarih:** 2026-04-03

### [Open Source'un Büyük Devri: Startup'ın Muhtemelen Zaten Çin AI Kullanıyor](https://pub.towardsai.net/the-open-source-great-flippening-why-your-startup-probably-already-uses-chinese-ai-1756f3dc1a7e)
DeepSeek, Qwen ve diğer Çin kökenli açık kaynak modellerin global benimsenmesini değerlendiren analiz: pek çok startup farkında olmadan Çin AI'ına bağımlı hale gelmiş durumda.
**Kaynak:** Towards AI
**Tarih:** 2026-04-03

---

## ☁️ KUBERNETES & CLOUD NATIVE

### [KubeVirt 1.8: VMware Alternatifi Hazır](https://dev.to/krun_pro/kubevirt-18-the-vmware-alternative-is-here-4h93)
KubeVirt 1.8, Kubernetes üzerinde çoklu hypervisor yönetimi ve confidential computing desteği getiriyor. InfoQ CN de aynı sürümü VMware'in açık kaynak alternatifi olarak öne çıkarıyor.
**Kaynak:** Dev.to Kubernetes | [InfoQ CN](https://www.infoq.cn/article/kwmoqShV5lx0TslYbo3j)
**Tarih:** 2026-04-03

### [9 AppArmor Kernel Açığı — Container Escape ve 12.6M Linux Sistemi](https://dev.to/firstpasslab/9-apparmor-kernel-bugs-hidden-since-2017-root-escalation-container-escape-and-126m-linux-i3p)
2017'den bu yana kernel'de bulunan 9 AppArmor açığı container izolasyonunu bozarak root escalation ve container escape'e imkân tanıyor.
**Kaynak:** Dev.to
**Tarih:** 2026-04-03

### [GKE Autopilot'ta Privileged Workload Çalıştırma](https://medium.com/google-cloud/running-privileged-workloads-on-gke-autopilot-introduction-and-walkthrough-5056ccc2e619)
Google Cloud Medium, GKE Autopilot'ta ayrıcalıklı workload'ların nasıl çalıştırılacağını adım adım anlatan teknik bir rehber yayımladı.
**Kaynak:** Medium — Google Cloud
**Tarih:** 2026-04-03

### [Docker Hardening: Container'dan İhtiyaç Duyulmayan Her Şeyi Çıkar](https://dev.to/aleksei_aleinikov/docker-hardening-starts-by-taking-away-what-the-container-never-needed-4e35)
Minimal container imajı oluşturma, gereksiz capability kaldırma ve read-only filesystem yaklaşımıyla Docker hardening rehberi.
**Kaynak:** Dev.to
**Tarih:** 2026-04-03

---

## 🛠️ PLATFORM & DEVOPS

### [Red Hat AI: Agent Mesh ile Legacy Sistem Modernizasyonu](https://www.redhat.com/en/blog/refactoring-speed-mission-agent-mesh-approach-legacy-system-modernization-red-hat-ai)
Red Hat, "agent mesh" mimarisiyle legacy sistemleri AI destekli olarak hızlı modernize etme yaklaşımını paylaşıyor. Misyon kritik sistemlerde refactoring hızlanması hedefleniyor.
**Kaynak:** Red Hat Blog
**Tarih:** 2026-04-03

### [GitHub: Diff Satırlarını Performanslı Hale Getirmenin Zorlu Yolu](https://github.blog/engineering/architecture-optimization/the-uphill-climb-of-making-diff-lines-performant/)
GitHub mühendislik blogu, büyük diff'lerde performans sorunlarını çözmek için yaptıkları mimarî optimizasyonları ve trade-off'ları paylaşıyor.
**Kaynak:** GitHub Blog
**Tarih:** 2026-04-03

### [CrowdStrike Next-Gen SIEM Artık Microsoft Defender Telemetrisini Alıyor](https://www.darkreading.com/endpoint-security/crowdstrike-falcon-ingest-microsoft-defender-telemetry)
CrowdStrike Falcon SIEM, Microsoft Defender'dan telemetri alımını desteklemeye başladı; hibrit ortamlarda birleşik görünürlük sağlıyor.
**Kaynak:** Dark Reading
**Tarih:** 2026-04-03

### [Pragmatic Engineer: AI Native Geliştirme İçin GitHub Hâlâ En İyi mi?](https://blog.pragmaticengineer.com/the-pulse-is-github-still-best-for-ai-native-development/)
Cursor 3 ve diğer AI destekli IDE'lerin yükselişiyle birlikte GitHub'ın AI native geliştirme için konumunu sorguluyor.
**Kaynak:** Pragmatic Engineer
**Tarih:** 2026-04-03

### [Gradle: Actions Caching'in Geleceği](https://blog.gradle.org/choice-clarity-future-caching-gradle-actions)
Gradle, GitHub Actions ile entegre cache yönetiminde yeni yaklaşımlar ve kullanıcıya bırakılan seçenekler hakkında netlik sağlıyor.
**Kaynak:** Gradle Blog
**Tarih:** 2026-04-03

### [SSH Sertifikaları: Daha İyi SSH Deneyimi](https://jpmens.net/2026/04/03/ssh-certificates-the-better-ssh-experience/)
SSH key dosyalarına güvenmek yerine sertifika tabanlı kimlik doğrulamayı detaylı anlatan teknik blog yazısı.
**Kaynak:** Hacker News
**Tarih:** 2026-04-03

---

## 💻 YAZILIM GELİŞTİRME

### [Cursor 3: AI Programlama "Agent Cluster" Çağına Girdi](https://www.oschina.net/news/417181/cursor-3)
Cursor 3, çoklu AI agent'ın koordineli çalışmasını destekleyen agent cluster mimarisiyle yayımlandı.
**Kaynak:** OSCHINA
**Tarih:** 2026-04-03

### [InforQ: 100+ Servis Kırmadan Büyük Ölçekte Veritabanı Sequence'larını Değiştirme](https://www.infoq.com/articles/replacing-database-sequences/)
100'den fazla servisi kesintisiz çalışır halde tutarken veritabanı sequence'larını tamamen değiştirme sürecini anlatan pratik mühendislik makalesi.
**Kaynak:** InfoQ — Software Architecture
**Tarih:** 2026-04-03

### [H.264 Streaming Lisans Ücretleri 100K Dolardan 4.5 Milyon Dolara Fırladı](https://www.tomshardware.com/service-providers/streaming/h264-streaming-license-fees-jump-from-100000-to-4-5-million)
H.264 patent sahipleri streaming lisans ücretlerini dramatik biçimde artırdı; açık kaynak codec alternatiflerine geçiş tartışmaları yeniden alevlendi.
**Kaynak:** Tom's Hardware / Hacker News
**Tarih:** 2026-04-03

### [Cursor IDE'yi GitHub Copilot Üzerinde Çalıştıracak Şekilde Reverse Engineering Yaptım](https://dev.to/jacksonkasi/how-i-reverse-engineered-cursor-ide-to-run-on-github-copilot-a-proxy-architecture-deep-dive-2jin)
Geliştirici, Cursor IDE'nin API'sini tersine mühendislik yaparak GitHub Copilot altyapısıyla proxy mimarisi kurdu.
**Kaynak:** Dev.to
**Tarih:** 2026-04-03

### [Proton Workspace ve Meet — Google ve Microsoft'a Rakip Çıktı](https://feed.itsfoss.com/link/24361/17313017/proton-workspace-launch)
Proton, gizlilik odaklı Workspace ve Meet ürünlerini lansmanladı; Google Workspace ve Microsoft 365'e doğrudan alternatif sunuyor.
**Kaynak:** It's FOSS
**Tarih:** 2026-04-03

### [Rider 2026.1: Single-File C# Çalıştırma ve Oyun Geliştirme Optimizasyonu](https://www.oschina.net/news/417198/rider-2026-1)
JetBrains Rider 2026.1, tek dosya C# çalıştırma, reverse engineering için reverse assembly viewer ve oyun geliştirme için derin optimizasyonlar içeriyor.
**Kaynak:** OSCHINA
**Tarih:** 2026-04-03

---

## 🗄️ VERİTABANI

### [tree-sitter-postgres, libpgfmt, pgfmt ve libpgdump](https://www.postgresql.org/about/news/tree-sitter-postgres-libpgfmt-pgfmt-and-libpgdump-3263/)
PostgreSQL ekosistemine dört yeni araç eklendi: tree-sitter tabanlı syntax parsing, libpgfmt ile SQL formatlama, pgfmt CLI ve libpgdump kütüphanesi.
**Kaynak:** PostgreSQL News
**Tarih:** 2026-04-03

### [pg_textsearch v1.0](https://www.postgresql.org/about/news/pg_textsearch-v10-3264/)
PostgreSQL için tam metin arama extension'ı pg_textsearch v1.0 yayımlandı.
**Kaynak:** PostgreSQL News
**Tarih:** 2026-04-03

### [pg_ash v1 — PostgreSQL İçin Active Session History](https://www.postgresql.org/about/news/pg_ash-v1-active-session-history-for-postgresql-3242/)
Oracle AWR'ı andıran Active Session History özelliği pg_ash ile PostgreSQL'e geldi; gerçek zamanlı performans analizi imkânı sağlıyor.
**Kaynak:** PostgreSQL News
**Tarih:** 2026-04-03

### [PostgreSQL CDC — Read-Only Mode, IAM Auth ve Partition Desteği Estuary'de](https://www.postgresql.org/about/news/postgresql-cdc-evolved-read-only-mode-iam-auth-partition-support-now-in-estuary-3261/)
Estuary, PostgreSQL Change Data Capture için read-only replica desteği, IAM kimlik doğrulama ve partition table desteği ekledi.
**Kaynak:** PostgreSQL News
**Tarih:** 2026-04-03

---

## 🌏 ASYA TECH

### [PyPI Tedarik Zinciri Saldırısı LiteLLM'i İhlal Etti, Hassas Bilgiler Çalındı](https://www.infoq.cn/article/YqWdW6lF74rlqXkJ5AMJ)
PyPI'ye yüklenen kötü amaçlı bir bağımlılık paketi aracılığıyla LiteLLM kütüphanesi ihlal edildi ve kullanıcı bilgileri çalındı. Tedarik zinciri saldırısının kapsamı araştırılmaya devam ediyor.
**Kaynak:** InfoQ CN
**Tarih:** 2026-04-03

### [OpenAI ile İlişkiyi Keserek Tam Bağımsızlığını İlan Eden Şirket: 10 Kişiyle Üç Düşük Maliyetli Model](https://www.infoq.cn/article/zUMeCNaChlTHDoa7pFVX)
Bir yapay zeka şirketi OpenAI ile tüm işbirliğini sonlandırarak tam bağımsızlığını ilan etti ve GPU kullanımının yarısıyla üç rekabetçi düşük maliyetli model yayımladı.
**Kaynak:** InfoQ CN
**Tarih:** 2026-04-03

### [Ant Group + Tsinghua Üniversitesi ClawAegis'i Açık Kaynak Yaptı — OpenClaw Agent Güvenlik Plugin'i](https://www.oschina.net/news/417115)
Ant Group ve Tsinghua Üniversitesi iş birliğiyle OpenClaw yapay zeka agentları için güvenlik savunma plugin'i ClawAegis açık kaynak olarak yayımlandı.
**Kaynak:** OSCHINA
**Tarih:** 2026-04-03

### [Discord, Osprey Güvenlik Kural Motorunu Açık Kaynak Yaptı — Saniyede 2.3M Kural İşliyor](https://www.infoq.cn/article/Wz12mUPtcy79cyTsIOwV)
Discord, saniyede 2.3 milyon güvenlik kuralını işleyebilen Osprey kural motorunu açık kaynak olarak yayımladı.
**Kaynak:** InfoQ CN
**Tarih:** 2026-04-03

### [Meituan LongCat-Next: Görsel ve Ses Artık AI'ın Ana Dili](https://my.oschina.net/meituantech/blog/19482144)
Meituan, görsel ve ses modalitelerini natively destekleyen çok modlu büyük dil modeli LongCat-Next'i tanıttı.
**Kaynak:** OSCHINA
**Tarih:** 2026-04-03

### [Gemma 4 — Google DeepMind Açık Kaynak Yaptı: Çin Topluluğu Tepkisi](https://www.oschina.net/news/417088/gemma-4)
Google DeepMind'ın Gemma 4'ü açık kaynak yapmasıyla Çin AI topluluğu Qwen ve DeepSeek ile doğrudan karşılaştırmaları başlattı.
**Kaynak:** OSCHINA
**Tarih:** 2026-04-03

### [PyCharm 2026.1: Yeni Hata Ayıklama Motoru, Native uv Desteği ve AI İş Birliği](https://www.oschina.net/news/417124/pycharm-2026-1)
JetBrains PyCharm 2026.1, yeniden yazılmış hata ayıklama motoru, uv paket yöneticisi native desteği ve gelişmiş AI asistan entegrasyonu ile yayımlandı.
**Kaynak:** OSCHINA
**Tarih:** 2026-04-03

### [Cloudflare Edge API Zafiyet Tarama Özelliği](https://www.infoq.cn/article/8LBRc9hODxYmCvKU85fy)
Cloudflare, API güvenliğini proaktif olarak tarayabilen edge-native zafiyet tarama özelliğini duyurdu.
**Kaynak:** InfoQ CN
**Tarih:** 2026-04-03

---

## 📰 KISA KISA

- **[Systemd 260 SysV Init Desteğini Kaldırdı](https://www.linuxtoday.com/blog/systemd-260-drops-sysv-init-support-in-major-cleanup-update/)** — Büyük temizlik güncellemesiyle systemd 260, SysV init uyumluluk katmanını artık taşımıyor.
- **[Bcachefs 1.37: Stabil Erasure Coding ve Linux 7 Desteği](https://www.linuxtoday.com/blog/bcachefs-1-37-released-with-stable-erasure-coding-and-linux-7-support/)** — Bcachefs dosya sistemi stabil erasure coding ve Linux kernel 7 desteğiyle güncellendi.
- **[Intel Linux NPU Driver 1.32: Wildcat Lake Desteği](https://www.phoronix.com/news/Intel-NPU-Linux-Driver-1.32)** — Intel'in Linux NPU sürücüsü Wildcat Lake işlemci desteğini getiriyor.
- **[Blender 5.1 Yayımlandı](https://www.linuxtoday.com/blog/blender-5-1-open-source-3d-graphics-software-released-with-many-new-features/)** — Açık kaynak 3D grafik yazılımı Blender 5.1, çok sayıda yeni özellikle kullanıma sunuldu.
- **[KDE Plasma 6.6.3: KWin Screencasting PipeWire 1.6 Uyumu](https://www.linuxtoday.com/blog/kde-plasma-6-6-3-makes-kwins-screencasting-feature-more-robust-for-pipewire-1-6/)** — KDE Plasma 6.6.3, ekran yayını özelliğini PipeWire 1.6 ile daha sağlam hale getiriyor.
- **[Gentoo GNU/Hurd Deneysel Image'ları Yayımlandı](https://www.phoronix.com/news/Gentoo-GNU-Hurd-Experimental)** — Gentoo, GNU/Hurd kernel üzerinde çalışan deneysel disk imajları sundu.
- **[AMD P-State Driver Linux 7.1'de Yeni Özellikler](https://www.phoronix.com/news/AMD-P-State-Linux-7.1)** — AMD'nin güç yönetimi sürücüsü Linux 7.1'de yeni frekans skalama yetenekleri kazanıyor.
- **[Vulkan 1.4.348: OpenGL Emülasyonu İçin Yeni Extension](https://www.phoronix.com/news/Vulkan-1.4.348-Released)** — Vulkan 1.4.348 dört yeni extension içeriyor; biri OpenGL emülasyonu için özel tasarlanmış.
- **[Proton Workspace ve Meet Lansmanı](https://feed.itsfoss.com/link/24361/17313017/proton-workspace-launch)** — Proton gizlilik odaklı ofis paketi ve video konferans çözümü sunuyor.
- **[Node.js 25.9.0 Yayımlandı](https://www.oschina.net/news/417132/nodejs-v24-9-0-released)** — Node.js'in 25.x serisinden yeni küçük sürüm yayımlandı.
- **[DataGrip 2026.1 Yayımlandı](https://www.oschina.net/news/417172/datagrip-2026-1)** — JetBrains'in veritabanı IDE'si DataGrip 2026.1 güncellendi.
- **[PhpStorm 2026.1 Yayımlandı](https://www.oschina.net/news/417306/phpstorm-2026-1)** — JetBrains PhpStorm 2026.1 yeni özellikler ve iyileştirmelerle geldi.
- **[Electron 41.1.1 Yayımlandı](https://www.oschina.net/news/417242/electron-41-1-1-released)** — Masaüstü uygulama çerçevesi Electron 41.1.1 yayımlandı.
- **[Ubuntu Summit 26.04 Geliyor: Tarihinizi Kaydedin](https://ubuntu.com//blog/ubuntu-summit-26-04-is-coming-save-the-date-and-share-your-story)** — Ubuntu, 26.04 sürümü için summit etkinliğini duyurdu.
- **[Meta, TCP Throughput'unu Gereksiz Throttling'den Koruyacak Linux Optimizasyonu Geliştirdi](https://www.phoronix.com/news/Linux-VM-Pressure-TCP-Through)** — Meta'nın katkısı, bellek baskısında TCP throughput'unun gereksiz yere kısıtlanmasını önlüyor.
- **[FreeBSD Laptop Projesi Yeni Linux GPU Driver'larını Port Etmeyi Hedefliyor](https://www.phoronix.com/news/FreeBSD-Newer-GPU-Drivers-2026)** — FreeBSD Laptop Projesi, 2026 yılı içinde daha güncel Linux grafik sürücülerini taşımayı planlıyor.
- **[Man 1000'lerce Windows Cihazı Kilitleyen Fidye Girişimini İtiraf Etti](https://www.bleepingcomputer.com/news/security/man-admits-to-extortion-plot-locking-coworkers-out-of-thousands-of-windows-devices/)** — Bir çalışan, binlerce iş arkadaşının Windows cihazını kilitleyerek fidye talep ettiğini kabul etti.
- **[Microsoft Exchange Online Posta Kutusu Erişim Sorununu Hâlâ Çözemiyor](https://www.bleepingcomputer.com/news/microsoft/microsoft-still-working-to-fix-exchange-online-mailbox-access-issues/)** — Exchange Online kullanıcıları posta kutusu erişim sorunuyla karşılaşmaya devam ediyor.
- **[Microsoft Windows 11 24H2'yi Yönetilmeyen PC'lere Zorla Yükseltmeye Başladı](https://www.bleepingcomputer.com/news/microsoft/microsoft-now-force-upgrades-unmanaged-windows-11-24h2-pcs/)** — Microsoft, MDM kaydı olmayan Windows 11 cihazlarını 24H2'ye otomatik güncelliyor.
- **[EFF: Federal Hükümete Yapay Zeka Güven ve Güvenliğini Baltalamak İçin Tedarik Silahı Kullanmayın](https://www.eff.org/deeplinks/2026/04/tech-nonprofits-feds-dont-weaponize-procurement-undermine-ai-trust-and-safety)** — Teknoloji sivil toplum kuruluşları ABD hükümetinin AI satın alma politikasını güven ve güvenliği zayıflatmak için kullanmamasını talep ediyor.
- **[Raspberry Pi ile Kendi Dial-up ISP'nizi Kurun](https://www.jeffgeerling.com/blog/2026/build-your-own-dial-up-isp-with-a-raspberry-pi/)** — Jeff Geerling, Raspberry Pi ile ev yapımı dial-up internet servis sağlayıcısı kurmanın teknik rehberini yayımladı.
- **[TDF Kendi Çekirdek Geliştiricilerini Kovdu](https://meeksfamily.uk/~michael/blog/2026-04-02-tdf-ejects-core-devs.html)** — The Document Foundation, çekirdek geliştiricilerini beklenmeden kuruldan çıkardı; LibreOffice topluluğunda büyük tartışma yarattı.
- **[Manhunt: İki Tools, 56 API ile Evrensel MCP Sunucusu Nasıl Kurdum](https://hackernoon.com/two-tools-56-apis-how-i-built-a-universal-mcp-server)** — İki araçla 56 API'yi bağlayan evrensel Model Context Protocol sunucusu mimarisi paylaşıldı.
- **[CVE-2026-5474/5475/5476/5473 — NASA cFS'te 4 Zafiyet](https://cvefeed.io/vuln/detail/CVE-2026-5474)** — NASA'nın Core Flight System'ında dört ayrı zafiyet keşfedildi: heap overflow, bellek bozulması ve integer overflow; CVSS 6.3 (orta), yerel ağ erişimi gerekiyor; proje henüz yanıt vermedi.
- **[Chainguard: Çoğu DevOps Ekibi Container Güvenliğini Zor Yoldan Çözüyor](https://www.linuxtoday.com/blog/chainguard-thinks-most-devops-teams-are-solving-container-security-the-hard-way/)** — Chainguard, minimal distroless imajları kullanmak yerine ekiplerin runtime güvenlik yamalamaya boğulduğunu belirtiyor.
- **[YubiKey SSH Kimlik Doğrulama: Disk'teki Key Dosyalarına Güvenmeyi Bırakın](https://dev.to/orthogonalinfo/yubikey-ssh-authentication-stop-trusting-key-files-on-disk-157o)** — YubiKey ile donanım destekli SSH sertifika kimlik doğrulaması rehberi.
- **[Sistem Tasarımı Başarısızlığı: Geriye Dönük Yedek Sağlayıcıdan Kaçınma](https://hackernoon.com/why-your-retry-logic-is-taking-down-your-system-and-how-to-fix-it)** — Kötü tasarlanmış retry logic'in cascade failure'a yol açmasını ve circuit breaker pattern ile düzeltme yollarını açıklıyor.
- **[Citrix NetScaler CVE-2026-3055 İçin watchTowr Python Tespit Aracı Yayımlandı](https://dev.to/orthogonalinfo/citrix-netscaler-cve-2026-3055-two-memory-overread-bugs-one-cve-active-exploitation-6eb)** — watchTowr Labs, etkilenen NetScaler örneklerini tespit etmek için Python aracını paylaştı.

---

## ✅ GELİŞTİRİCİ KONTROL LİSTESİ

- [ ] **[KRİTİK]** Citrix NetScaler ADC/Gateway çalıştırıyorsanız hemen 14.1-66.59 veya 13.1-62.23 sürümlerine yükseltin; SAML IDP profili varsa önce devre dışı bırakın
- [ ] **[KRİTİK]** NetScaler yamalamasının ardından tüm admin kimlik bilgilerini döndürün, NSC_TASS cookie loglarını anormal Base64 değerleri için tarayın
- [ ] **[KRİTİK]** Budibase kullanıyorsanız 3.33.4 sürümüne yükseltin (RCE, path traversal, SSRF yamaları)
- [ ] **[KRİTİK]** mlflow job endpoint'leri açıksa `MLFLOW_SERVER_ENABLE_JOB_EXECUTION` ortamını gözden geçirin; CVE-2026-0545 için yama uygulayın
- [ ] **[YÜKSEK]** GitHub Actions pipeline'larında Trivy ve KICS sürümlerini commit hash ile pinleyin (TeamPCP saldırı vektörü)
- [ ] **[YÜKSEK]** npm bağımlılıklarınızda Axios'u ve geçişli bağımlılıkları gözden geçirin; UNC1069 saldırısına karşı lock file'ları doğrulayın
- [ ] **[YÜKSEK]** Juju kullanıyorsanız 3.6.19 sürümüne yükseltin (CVE-2025-68153 — cross-model RCE PoC mevcut)
- [ ] **[ORTA]** AppArmor kullanan Linux containerlarınızı yama durumu için kontrol edin; 9 kernel açığı container escape'e izin veriyor
- [ ] **[BİLGİ]** Gemma 4 duyurusunu değerlendirin — telefon üzerinde offline agent yetenekleri pratik use-case'ler açıyor
- [ ] **[BİLGİ]** H.264 lisans artışını inceleyin; AV1/VP9/HEVC geçiş planlaması gerekebilir

---

## 📊 GÜNÜN İSTATİSTİKLERİ

- **Toplam haber:** 429 makale / 85 feed / 15 kategori
- **CVE dağılımı:** 4 Kritik (CVSS 9+) | 3 Yüksek (CVSS 7-8.9) | 4 Orta (NASA cFS grubu + diğer kernel CVE'leri)
- **En çok öne çıkan konular:** Supply chain saldırıları (TeamPCP/Axios/PyPI), Citrix NetScaler aktif istismar, Gemma 4 açık kaynak lansmanı, Microsoft Agent Framework v1.0
- **Erişilemeyen feed'ler:** Offensive Security Blog (XML parse), Naked Security (timeout), IBM Security Intelligence (XML parse), Mandiant (timeout), HashiCorp (429 rate limit), Elastic Blog (XML parse), OpenEBS, MinIO, Keptn Lifecycle, Ambassador/Emissary, Swift Blog

---

**DEV DAILY POST** — *Bilgili kal, güvende kal.*

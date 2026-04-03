# 📰 The Newspaper — 2026-03-31 (Afternoon)
**Dönem:** 12:00–17:59 UTC | **Oluşturulma:** 2026-03-31 15:24 UTC

---

## 🔴 Kritik Güvenlik Uyarıları

### [Axios npm Hijack: 100M+ Haftalık İndirme Gerektiren Acil Yama](https://snyk.io/blog/axios-npm-package-compromised-supply-chain-attack-delivers-cross-platform/)
**Kaynak:** Snyk, SOCRadar, The Hacker News, BleepingComputer, Wiz | **Tarih:** 2026-03-31 | **Kategori:** Supply Chain Attack
> Axios npm paketinin sürdürücü hesabı ele geçirildi. Sürüm 1.14.1 ve 0.30.4 yayınlandı. "plain-crypto-js" adında kötü amaçlı gizli bağımlılık eklendi. Windows, macOS, Linux'ta çalışan uzaktan erişim truvanı (RAT) dağıtılıyor. ~100M haftalık indirme sayısı nedeniyle çok geniş etki alanı.

### [NocoBase RCE: Sandbox Kaçışı vm._stdout Zinciri ile Kodsuz Platform Ele Geçişi](https://cvefeed.io/vuln/detail/CVE-2026-34156)
**Kaynak:** CVE Feed | **Tarih:** 2026-03-31 | **Kategori:** CVE / RCE
> CVE-2026-34156: NocoBase < 2.0.28, Workflow Script Node'daki console._stdout ve console._stderr WritableStream nesnelerine erişim sağlıyor. Kimliği doğrulanmış saldırgan prototype chain traversal yaparak sandbox'dan kaçıp root olarak uzaktan kod çalıştırabiliyor.

### [OpenClaw 2026.3.8–3.13: 18+ Kritik/Yüksek Zafiyet Çoklu Senaryoda RCE ve Yetki Yükseltme](https://cvefeed.io/vuln/detail/CVE-2026-32920)
**Kaynak:** CVE Feed | **Tarih:** 2026-03-31 | **Kategori:** Multiple CVEs / RCE
> OpenClaw 2026.3.8–3.13 kritik zafiyetler içeriyor: (1) CVE-2026-32920 (CVSS 9.8): Auto-discovery eklentileri dosya doğrulaması olmadan yükleme → RCE. (2) CVE-2026-32917 (CVSS 9.8): iMessage attachment SCP'de komut injection. (3) CVE-2026-32916 (CVSS 9.2): Plugin subagent yetki bypass'ı. (4) CVE-2026-34505 (CVSS 9.8): Webhook rate limiting bypass secret brute force için. Toplam 15+ CVE yayınlandı.

### [CISA: Citrix NetScaler Zafiyet Acil Yama İçin Son Tarih Perşembe](https://www.bleepingcomputer.com/news/security/cisa-orders-feds-to-patch-actively-exploited-citrix-flaw-by-thursday/)
**Kaynak:** BleepingComputer | **Tarih:** 2026-03-31 | **Kategori:** CISA Advisory / CVE-2026-3055
> CVE-2026-3055: Citrix NetScaler ADC/Gateway'de kritik bellek zafiyet, aktif olarak istismar ediliyor. CISA federal kurumlarına Perşembe günü sonu yama uygulamalarını emretti. Hassas verilere erişim riski.

### [Vertex AI: Google Cloud Veri İhlali Riski – Double Agents Yetki Soruşturması](https://unit42.paloaltonetworks.com/double-agents-vertex-ai/)
**Kaynak:** Unit 42 (Palo Alto Networks) | **Tarih:** 2026-03-31 | **Kategori:** Cloud Security / AI Agents
> Google Cloud Vertex AI'da "double agent" zafiyeti: Aşırı yetkili AI ajanlar bulut ortamını tehlikeye düşürebiliyor. AI ajanlarının izin modeli istismar edilerek yetkisiz veri erişimi ve bulut kaynaklarının ele geçirilmesi mümkün.

### [MuPDF PDF-Image Integer Overflow: Arbitrary Code Execution](https://cvefeed.io/vuln/detail/CVE-2026-3308)
**Kaynak:** CVE Feed | **Tarih:** 2026-03-31 | **Kategori:** CVE / Integer Overflow
> CVE-2026-3308: Artifex MuPDF 1.27.0, pdf_image.c'de integer overflow zafiyeti. Kötü amaçlı PDF → heap out-of-bounds write → arbitrary code execution potansiyeli.

### [DNSdist 1.x: 4 Kritik Zafiyet – DoS, ACL Bypass, Memory Allocation](https://cvefeed.io/vuln/detail/CVE-2026-27854)
**Kaynak:** CVE Feed | **Tarih:** 2026-03-31 | **Kategori:** DNS / Multiple CVEs
> DNSdist için dört zafiyet: (1) CVE-2026-27854 (CVSS 4.8): EDNS options Lua parsing'de use-after-free. (2) CVE-2026-27853 (CVSS 5.9): changeName DNS packet rewrite'da OOB write. (3) CVE-2026-24030 (CVSS 5.3): DoQ/DoH3 unbounded memory allocation. (4) CVE-2026-24029 (CVSS 6.5): DoH ACL bypass (early_acl_drop devre dışıyken).

---

## 🟠 Büyük Sürüm Duyuruları ve Breaking Changes

### [GitLab packages.gitlab.com: Altyapı Taşındı – URL Formatları Değişti (Eyl 30'a Kadar Uyumlu)](https://about.gitlab.com/blog/changes-to-packages-gitlab-com-what-you-need-to-know/)
**Kaynak:** GitLab | **Tarih:** 2026-03-31 | **Kategori:** Breaking Change / Infrastructure
> PackageCloud'dan Google Cloud Storage'a geçiş. DEB repo URL'leri dağıtım codename path segment ekledi. GPG anahtarı URL'si değişti (gpg.key → gpgkey/gpg.key). Runner noarch RPM'ler x86_64'e taşındı. Kütüphane indirmeleri CloudFlare'den GCS'ye yönlendirildi. Eylül 30, 2026'ya kadar geriye uyumluluk. **Gerekli eylemler:** Installation scriptini yeniden çalıştır, GPG referansları güncelle, firewall/proxy allowlistleri Storage.googleapis.com için aç.

### [Tenable Cloud Security: Custom Policies, AWS ABAC Desteği, Research-Backed Tehdit Yönetimi](https://www.tenable.com/blog/tenable-cloud-security-custom-policies-aws-abac)
**Kaynak:** Tenable | **Tarih:** 2026-03-31 | **Kategori:** Product Release / Security
> Tenable Cloud Security güncellemeleri: (1) Explorer query builder ile custom policies otomasyonu. (2) AWS ABAC (attribute-based access control) desteği true least privilege için. (3) LeakerLooker (Google Looker 9 çapraz-kiracı zafiyet) + LookOut (Looker RCE) araştırmaları + ambar-src npm malware analizi. (4) Tenable plugin ID'leri vulnerability tablolarına entegre, MTTR'yi azaltıyor.

---

## 🔵 Teknik Blog Yazıları ve Derinlemesine Analiz

### [Claude Code Kaynağının 512K Satırı Sızdı: Swarm, DreamTask, Unreleased Features (BUDDY, KAIROS, ULTRAPLAN) Açığa Çıktı](https://dev.to/alanwest/claude-codes-entire-source-just-leaked-512k-lines-heres-what-i-found-3o42)
**Kaynak:** Dev.to | **Tarih:** 2026-03-31 | **Kategori:** Security / Source Code Leak
> Anthropic npm paketinde kaynak haritası (source map) yanlışlıkla bırakılı. 512K+ satır TypeScript, 1.900 dosya açığa çıktı. React + Ink terminal UI, 30+ tool, 50+ slash command, 7 task type, Swarm multi-agent orchestration. DreamTask background memory consolidation otomasyonu. BUDDY (Tamagotchi companion), KAIROS (Always-On assistant), ULTRAPLAN (30-min planning), COORDINATOR_MODE feature flagları unreleased.

### [Trail of Bits: AI-Native Transformation (94 Plugin, 201 Skill, 84 Agent, %200 Bug Finding)](https://blog.trailofbits.com/2026/03/31/how-we-made-trail-of-bits-ai-native-so-far/)
**Kaynak:** Trail of Bits | **Tarih:** 2026-03-31 | **Kategori:** AI / Enterprise Adoption
> Trail of Bits AI initiative: AI-assisted → AI-augmented → AI-native progression. 94 plugins, 201 skills, 84 specialized agents, 414 reference files. Audit bulunuş oranı haftada 15'den 200'e çıktı (AI-assisted bulunuş ~20%). Maturity Matrix, Skills Repo, AI Handbook, Sandboxing, custom MCP servers. Başarı faktörleri: standartlaştırma, açık kurallar, ölçülebilir capability ladder, adoption sprint'leri, artifact reuse.

### [Soul-Evil Attack: AI Agent Persona Dosyaları Trojan Horse Olarak Kullanılıyor – SoulScan Savunması](https://dev.to/tomleelive/the-soul-evil-attack-how-malicious-personas-hijack-ai-agents-and-how-to-stop-them-48ae)
**Kaynak:** Dev.to | **Tarih:** 2026-03-31 | **Kategori:** AI Agent Security
> SOUL.md/persona dosyaları kötü amaçlı direktifler içerebiliyor: gizli instructlar (Cyrillic homoglyphs, base64 encoding), system token injection. Ajanlar environment variables, dosya sistemi, API keys'ler okuyor. Soul Spec (structured manifest) + SoulScan (5-stage 53-rule scanner) çözüm sağlıyor. 0–39 puanı: High Risk, 70–100: Verified Clean.

### [Persona Persistence Attacks: Kötü Amaçlı Soul Dosyası Kalıcı Backdoor – Disk Modifikasyonu](https://dev.to/tomleelive/persona-persistence-attacks-when-your-ai-agents-soul-file-becomes-a-backdoor-141b)
**Kaynak:** Dev.to | **Tarih:** 2026-03-31 | **Kategori:** AI Agent Security
> Soul/persona dosyaları agent'ı self-modification için komut verebiliyor: CLAUDE.md güncelleme, davranış kalıcı değiştirme. Prompt injection'dan fark: sırada kalıyor (disk'te). SoulScan SEC090 (specific config target) ve SEC091 (behavioral self-modification) kuralları eklendi. Lokal open-source modeller (Llama, DeepSeek) daha vulnerable.

### [ClawHub Malware Incident: Fake Download Counts, Natural Language Payload – Supply Chain Başarısız Güvenlik](https://dev.to/tomleelive/the-clawhub-malware-incident-a-first-warning-for-ai-agent-supply-chains-2icd)
**Kaynak:** Dev.to | **Tarih:** 2026-03-31 | **Kategori:** AI Supply Chain / Marketplace Security
> Şubat 2026: Jamieson O'Reilly backdoored skill yayınladı, bot'larla indirme sayısını 4.000+'e çıkardı, #1 skill haline getirdi. Gerçek geliştiriciler 7 ülkeden yüklediler. ClawHub zaafiyetleri: unauthenticated download counter requests, rate limiting yok, X-Forwarded-For header spoofing. Paul McCarty 100+ malicious skill buldu. Çözüm: Soul Spec yapılandırması + otomatik content scanning.

### [fail2ban vs CrowdSec vs Defensia: Honest Karşılaştırma (Sandboxing, WAF, Bot Yönetimi)](https://dev.to/defensia/fail2ban-vs-crowdsec-vs-defensia-an-honest-comparison-14hk)
**Kaynak:** Dev.to | **Tarih:** 2026-03-31 | **Kategori:** Server Security / Threat Detection
> fail2ban (20 yıl, iptables banning), CrowdSec (crowd intelligence, YAML complexities, $29+/engine console), Defensia (zero-config, 15 OWASP WAF types, 70+ bot fingerprints, dashboard included, $9.90/server). Seçim: fail2ban (SSH only, offline), CrowdSec (10+ servers, crowd intel), Defensia (visibility, WAF, zero-config).

### [Node9 Proxy: AI Agent Terminal Anxiety – Interactive Execution Governance, Shadow Git Snapshots, Instant Undo](https://dev.to/node9_ai/ai-sandboxes-arent-enough-we-need-execution-governance-1g7l)
**Kaynak:** Dev.to | **Tarih:** 2026-03-31 | **Kategori:** AI Security / Runtime Protection
> Sandboxing (NVIDIA OpenShell) WHERE çözer; Node9 WHAT çözer. AST parsing yaparak shell komutlarını anlıyor. Güvenli komutlar (git, npm) instant pass; tehlikeli komutlar (rm -rf) approve/block popup. Shadow Git snapshots, DLP (Data Loss Prevention), instant undo. Lokal CLI'lar için pragmatik; production'da OpenShell + Node9 kombinasyonu.

### [Kubernetes AKS'de Serverless Scaling: KEDA + Custom Operator, Sequential Deployments, 70–95% Cost Saving](https://dev.to/alitron/achieving-serverless-scaling-in-kubernetes-aks-for-integration-services-with-controlled-rolling-4a3o)
**Kaynak:** Dev.to | **Tarih:** 2026-03-31 | **Kategori:** Kubernetes / Cloud-Native
> Integration services Kubernetes'te serverless behavior: KEDA (event-driven scaling to zero) + custom operators (sequential validation deployments) + runtime optimization (Go sub-500ms vs Spring Boot 1-2s cold starts). Edge cases: burst requests (Azure Queue buffering), validation failures (blue-green deployments). 70–95% cost reduction, reliability comparable to true serverless.

### [Initial Access Brokers Shift to High-Value Targets: Ort. $3.2B revenue, $113K base price, 4055% price increase](https://www.rapid7.com/blog/post/tr-initial-access-broker-shift-high-value-targets-premium-pricing)
**Kaynak:** Rapid7 | **Tarih:** 2026-03-31 | **Kategori:** Threat Intelligence / Cybercrime
> Rapid7 darknet marketplace analizi (H2 2025): DarkForums 221, RAMP 208, Exploit 53 thread. Ortalama hedef şirket geliri $3.242B (2024: $2.232B). Ortalama teklif fiyatı $113.275 (2024: $2.726 → %4055 artış). Access types: RDP (21.2%), VPN (12.8%), RDWeb (11.2%). Privilege: Domain User (42.9%), Domain Admin (32.1%), Local Admin (12.5%). RDP Exploit'te popüler; RDWeb ve SSH yükseliştir (EDR hardening karşı adaptasyon).

### [Soul Rollback & Swarm Memory: AI Agent Identity Kontrol – Git-Style Branching, Contamination Detection](https://dev.to/tomleelive/soul-rollback-swarm-memory-protecting-ai-agent-identity-at-scale-3477)
**Kaynak:** Dev.to | **Tarih:** 2026-03-31 | **Kategori:** AI Agent / Identity Management
> ClawSouls v0.10.0: Soul Rollback (checkpoint + contamination detection) ve Swarm Memory (branching + merge). 4-layer contamination: score tracking, diff anomaly, new violations, personality drift. Swarm merge: personality (conservative), memory (union), skills (latest). SoulScan context-aware PII detection (false positive filtering, file-type awareness).

### [StepSecurity: TeamPCP/Trivy Supply Chain Attack – 10 Layer Defense, Compromised Actions Detection](https://www.stepsecurity.io/blog/10-layers-deep-how-stepsecurity-stops-teampcps-trivy-supply-chain-attack-on-github-actions)
**Kaynak:** StepSecurity | **Tarih:** 2026-03-31 | **Kategori:** GitHub Actions / CI/CD Security
> TeamPCP 76 Trivy version tag'ları silah yaptı (Şubat 2026). StepSecurity 10-layer defense: credential exfiltration prevention, compromised actions runtime detection, incident response. GitHub Actions'da supply chain kontrol.

---

## ⚪ Genel Haberler

### [Quantum Cryptography Turing Award: Bennett & Brassard 2026 Kazananları – "Unnecessary But Awesome"](https://www.schneier.com/blog/archives/2026/03/inventors-of-quantum-cryptography-win-turing-award.html)
**Kaynak:** Schneier on Security | **Tarih:** 2026-03-31 | **Kategori:** Cryptography / Award
> Charles Bennett ve Gilles Brassard quantum cryptography'nin mucitleri 2026 Turing Award kazandılar. Schneier: harika bilim, ama ticari değer sınırlı. Kuantum kriptonun en güçlü bağlantısı bile hala matematiksel algoritmalara bağlı. Kuantum computing riskini overstate ediliyor.

### [WhatsApp Malware Campaign: VBS Payload, MSI Backdoor, Cloud-Hosted Infection Chain](https://www.microsoft.com/en-us/security/blog/2026/03/31/whatsapp-malware-campaign-delivers-vbs-payloads-msi-backdoors/)
**Kaynak:** Microsoft Security Blog | **Tarih:** 2026-03-31 | **Kategori:** Malware / Campaign
> WhatsApp metin kampanyası VBS scriptleri gönderip multi-stage infection başlatıyor. Renamed Windows tools (Sysinternals, etc.) + cloud-hosted payloads → MSI backdoor + persistent access. Credential hırsızlığı risk.

### [Silver Fox Expands AtlasCross RAT: Typosquatted Domains, VPN/Messenger/Crypto Uygulamalarını Taklit](https://thehackernews.com/2026/03/silver-fox-expands-asia-cyber-campaign.html)
**Kaynak:** The Hacker News | **Tarih:** 2026-03-31 | **Kategori:** APT / Malware Campaign
> Silver Fox (Çince konuşan users hedef): typosquatted domain'ler (VPN, messenger, crypto, video conference taklit) → AtlasCross RAT (undocumented). 11 delivery domain'i bilinen. Asya'ya odaklanmış, credential hırsızlığı.

### [Dutch Finance Ministry: Treasury Banking Portal Breach – 2 Hafta Sonra Offline Alındı](https://www.bleepingcomputer.com/news/security/dutch-finance-ministry-takes-treasury-banking-portal-offline-after-breach/)
**Kaynak:** BleepingComputer | **Tarih:** 2026-03-31 | **Kategori:** Government Breach
> Hollanda Maliye Bakanlığı treasury banking portal'ını devre dışı bıraktı. İki hafta önceki saldırı investig. Hassas finansal sistem etkilenmiş.

### [Uranium Finance Crypto Exchange Hackeri Tutuklandı: $53M+ Hırsızlık ve Laundering](https://www.bleepingcomputer.com/news/security/hacker-charged-with-stealing-53-million-from-uranium-crypto-exchange/)
**Kaynak:** BleepingComputer | **Tarih:** 2026-03-31 | **Kategori:** Cybercrime / Charges
> Uranium Finance exchange hackanı: Maryland'lı kişi $53M+ fırlatmış ve mixer'da kaynak temizlemiş. ABD savcıları şarj.

### [CareCloud Veri İhlali: Hasta Verileri Hacked, 8 Saat Network Downtime](https://www.bleepingcomputer.com/news/security/healthcare-tech-firm-carecloud-says-hackers-stole-patient-data/)
**Kaynak:** BleepingComputer | **Tarih:** 2026-03-30 | **Kategori:** Healthcare Breach
> Healthcare IT firması CareCloud veri ihlaline maruz kaldı. Sensitif hasta verileri çalındı. ~8 saat network disruption.

### [RoadK1ll WebSocket Implant: Ağ Lateralleşmesi için Yeni Malware Tool](https://www.bleepingcomputer.com/news/security/new-roadk1ll-websocket-implant-used-to-pivot-on-breached-networks/)
**Kaynak:** BleepingComputer | **Tarih:** 2026-03-30 | **Kategori:** Malware / Network Pivot
> RoadK1ll: yeni WebSocket-based malicious implant, breach'den sonra ağ içinde lateral movement sağlıyor.

### [CISA Bütçe Kesintileri: US Cyber Defense Zafiyeti 2026](https://socradar.io/blog/cisa-budget-cuts-us-cyber-defense-2026/)
**Kaynak:** SOCRadar | **Tarih:** 2026-03-31 | **Kategori:** Policy / Government
> CISA 2026'da bütçe, personel, kaynakları kısılmış durumda. Sivil network, altyapı, kamu kuruluş savunma kapasitesi düşüş riski. Tehdit ortamı daha agresif.

---

## 📊 Günün İstatistikleri

- **Kapsanan zaman aralığı:** 2026-03-31 12:00–17:59 UTC
- **Toplam makale:** 35+ (birleştirilmiş)
- **Kategoriye göre dağılım:**
  - 🔴 Kritik güvenlik: 6 ana başlık (Axios, NocoBase, OpenClaw, Citrix, Vertex AI, MuPDF, DNSdist)
  - 🟠 Büyük duyuru: 3 başlık (GitLab, Tenable, CISA Advisory)
  - 🔵 Teknik blog: 11 başlık (Claude Code, Trail of Bits, Soul-evil, AI security, Kubernetes, vb.)
  - ⚪ Genel: 8 başlık (Quantum Crypto, malware campaigns, breaches, cybercrime)

- **Duplikasyon birleştirmesi:**
  - Axios supply chain: 6 kaynaktan 1 girdi (Snyk, SOCRadar, HackerNews, BleepingComputer, Wiz, StepSecurity)
  - OpenClaw: 15+ CVE'den 1 ana başlık
  - DNSdist: 4 CVE'den 1 başlık

- **En çok öne çıkan konular:**
  - Supply chain attacks (Axios npm, ClawHub malware)
  - AI agent security (Soul attacks, persistence, governance)
  - Critical infrastructure (CISA, Citrix, Vertex AI)
  - OpenClaw ecosystem zafiyetleri

- **Erişilemeyen feed'ler:**
  - HashiCorp Blog → Status code 429
  - HashiCorp Terraform → Status code 429
  - HackerNoon → ENOTFOUND
  - Elastic Blog → Parse hatası
  - OpenEBS Blog → Tanınmayan format
  - MinIO Blog → Tanınmayan format
  - Keptn Lifecycle → XML parse hatası
  - Ambassador/Emissary → XML parse hatası

---

**Hazırlayan:** Newspaper Daily Digest | **Dönem:** Afternoon (12:00-17:59 UTC) | **Tarih:** 2026-03-31

# 📰 DEV DAILY POST
## Salı, 31 Mart 2026 | Yazılım ve Güvenlik Haberleri

---

## 🔴 MANŞET: 100 MİLYON GELİŞTİRİCİ RISKLI PAKET İNDİRDİ

**Axios npm Sürdürücüsünün Hesabı Ele Geçirildi — Trojan Dağıtılıyor**

Haftalık 100 milyondan fazla indirilen popüler HTTP kütüphanesi Axios'un npm paket yöneticisindeki hesabı ele geçirildi. Saldırganlar kötü amaçlı sürüm 1.14.1 ve 0.30.4'ü yayınladı. Gizli bağımlılık olarak "plain-crypto-js" paketi eklenerek Windows, macOS ve Linux'ta çalışan uzaktan erişim trojanu (RAT) dağıtılıyor.

**Kaynaklar:** Snyk, BleepingComputer, Wiz, The Register, StepSecurity | **Tarih:** 31 Mart 2026

**Yapılması gerekenler:** Hemen güncelleyin. `npm update axios` ve bağımlılık denetimi yapın.

---

## ✍️ Köşe Yazısı — Editörden

### "Güven Bir Paket Kadar Ucuzladı"

Bugün Axios'u indiren 100 milyon geliştirici, çoğu hiç fark etmeden kötü amaçlı kod çalıştırdı. Ama bu kadarı değil: aynı hafta LiteLLM de zehirlendi, TeamPCP supply chain saldırısı yayılmaya devam etti.

Açık kaynak ekosistemi bir çöp yığınına dönüşmedi mi? Dönüştü. Ama sebep ne? NPM paketler sanki temel altyapı gibi kullanılıyor — hiç dokunmadığımız, güvenini sorgulmadığımız bağımlılıklar. Bir npm sürdürücüsünün şifresi çalındığında, 100 milyon insanın üretim ortamı tehlikeye giriyor. Onaylanmayan bir sürüm ortaya çıktığında, kimse ne kadar hızlı tepki verirse versin, milyonlarca sistem geride kalıyor.

Asıl sorun teknoloji değil — **güven modeli**. Açık kaynak bize "ücretsiz yazılım" verdi, ama faturayla birlikte verdi: bakım, güvenlik, sorumluluk. Büyük şirketler bunu affediyorlar çünkü maliyeti dış kaynaklara yükleyebiliyorlar. Küçük takımlar? Hiç şansları yok.

Kimin suçu? Herkesin. Sürdürücülerin parolalarını koruması gerektiği kadar, biz de npm paketlerini kritik altyapıya konsol gibi koymamalıyız. Pinning, vendoring, offline builds... Küçük maliyet. Çok mu para, çok mu zaman? Bugün Axios'u patch etmekten çok daha ucuz.

Güven bir paket kadar ucuzlandığında, risk de öyle. Seçim bizim.

---

## 🔴 GÜVENLIK BÜLTENİ — GÜNÜN KRİTİK HABERLERİ

### OpenClaw: 18+ Kritik Zafiyet (RCE, Yetki Yükseltme)

Otonom agent framework OpenClaw sürüm 2026.3.8–3.13'te 18'den fazla güvenlik problemi keşfedildi. En ciddisi: eklenti otomatik keşfi doğrulama olmadan gerçekleştiriliyor → **rastgele kod çalıştırma (RCE)**. Ayrıca webhook rate limiting bypass, sandbox kaçışları, token sızdırması.

**Kaynaklar:** CVE Feed | **Harita:** Hemen güncelleyin veya OpenClaw kullanmayı bırakın.

---

### Citrix NetScaler: CISA Acil Yama Emri

CVE-2026-3055 — Citrix NetScaler ADC/Gateway'de kritik bellek zafiyeti. Saldırganlar **aktif olarak istismar ediyor**. CISA, federal kurumlarına Perşembe (3 Nisan) sonu patchilemesini zorunlu tuttu.

**Kaynaklar:** BleepingComputer, CISA | **Tarih:** 31 Mart 2026 | **Eylem:** İlk öncelik.

---

### TeamPCP Supply Chain Kampanyası: Databricks'e Sıçradı

Trivy scanning aracı ve diger open source paketleri ele geçiren TeamPCP, bugün Databricks'in de kompromize edildiğini duyurdu. Dual ransomware operasyonu yürütüyor, AstraZeneca verileri sızdırıldı.

**Kaynaklar:** SANS ISC, Wiz, BleepingComputer | **Tarih:** 30-31 Mart 2026

---

### Google Vertex AI: "Double Agents" Bulut Açığı

Unit 42 (Palo Alto Networks), Google Cloud Vertex AI'da veri sızdırma açığı keşfetti. Aşırı yetkili AI ajanlar, cloud environment'ı tamamen ele geçirebiliyor. Multi-tenant ortamlarda tehlike.

**Kaynaklar:** Unit 42, The Hacker News | **Tarih:** 31 Mart 2026

---

### Claude Code Kaynağı Sızıntısı: 512K Satır TypeScript

Anthropic, npm paketinde yanlışlıkla kaynak haritalarını bıraktı. 512.000+ satır production kodu, 1.900 dosya açığa çıktı. Swarm (multi-agent sistemi), DreamTask (oto-öğrenme ajant), unreleased features (BUDDY, KAIROS).

**Kaynaklar:** Dev.to, Hacker News, The Register | **Tarih:** 31 Mart 2026 | **Ders:** npm publish öncesi source maps'i devre dışı bırakın.

---

### WhatsApp Malware Kampanyası: VBS + MSI Backdoor

Suçlular WhatsApp'ta kötü amaçlı VBS scriptleri gönderiyor. Multi-stage infection chain başlatıyor, cloud-hosted payload indirilip MSI backdoor kuruluyor. Persistent access.

**Kaynaklar:** Microsoft Security Blog | **Tarih:** 31 Mart 2026

---

### Silver Fox: AtlasCross RAT ile Asya Hedefleme

Çince konuşan kullanıcılara hedef alan, typosquatted domain'ler (VPN, messenger, kripto uygulamalarını taklit) kullanarak AtlasCross RAT dağıtan kampanya. 11 indirme domain'i.

**Kaynaklar:** The Hacker News | **Tarih:** 31 Mart 2026

---

### Hollanda Maliye Bakanlığı: Treasury Portalı Hack

Hollanda Maliye Bakanlığı, hazine bankacılık portalını devre dışı bıraktı. İki hafta önce saldırı tespit edildi, sensitif finansal veriler risk altında.

**Kaynaklar:** BleepingComputer | **Tarih:** 31 Mart 2026

---

### Uranium Finance: $53 Milyon Çalındı

Maryland'lı hacker, kripto exchange Uranium Finance'den $53 milyonu çaldı ve mixer'da geçti. ABD savcıları şarj etti.

**Kaynaklar:** BleepingComputer | **Tarih:** 31 Mart 2026

---

### GitHub Copilot: PR'lere Gizli Reklam + Özür

GitHub, Copilot'a PR'lere otomatik reklam ekleme özelliğini gizlice koydu. Backlash'ın ardından Microsoft özür diledi ve özelliği devre dışı bıraktı.

**Kaynaklar:** The Register, Hacker News | **Tarih:** 31 Mart 2026

---

### Initial Access Brokers: Büyük Hedeflere, Premium Fiyatlara

Rapid7 darknet marketplace analizi: H2 2025'te IAB fiyatları %4055 artmış. Ortalama hedef şirket geliri $3.2 milyar (2024: $2.2B). RDP, VPN, RDWeb access türleri üzerinden Domain Admin erişimi satılıyor.

**Kaynaklar:** Rapid7 | **Tarih:** 31 Mart 2026

---

### CISA Bütçe Kesintileri: ABD Siber Savunma Açığı

CISA 2026'da bütçe ve personel kısıtlaması yaşıyor. Sivil network, altyapı, kamu kuruluş siber savunma kapasitesi düşüş riski — tehdit ortamı ise daha agresif.

**Kaynaklar:** SOCRadar | **Tarih:** 31 Mart 2026

---

## 🤖 YAPAY ZEKA & LLM DÜNYASI

### Trail of Bits: AI-Native Dönüşüm (94 Plugin, 200 Bug/Hafta)

Trail of Bits, "AI-native" statüsüne geçti. 94 plugin, 201 skill, 84 specialized agent, 414 reference file. Audit bulunuş hızı haftada 15'ten 200'e çıktı. ~20% bulgu şimdi AI tarafından keşfediliyor (insan doğrula).

**Kaynaklar:** Trail of Bits Blog | **Tarih:** 31 Mart 2026

---

### Soul-Evil Attack: AI Agent Persona Dosyaları Trojan

SOUL.md/persona dosyaları gizli kötü amaçlı direktifler içerebiliyor (Cyrillic homoglyphs, base64). Ajanlar environment variables, dosya sistemi, API keys'leri okuyor. Çözüm: SoulScan (5-stage, 53-rule security scanner).

**Kaynaklar:** Dev.to — Security | **Tarih:** 31 Mart 2026

---

### ClawHub Güvenlik Krizi: Malicious Skills Pazarı

Şubat'ta araştırmacı, hile indirme sayıları ile ClawHub'da #1 malicious skill yaptı. 100+ zararlı skill bulundu. Çözüm: Soul Spec yapılandırması + otomatik content scanning.

**Kaynaklar:** Dev.to — Security | **Tarih:** 31 Mart 2026

---

### Claude Code Usage Limits: Kullanıcılar Çok Hızlı Tükediyor

Anthropic, Claude Code kullanıcılarının usage limits'e "beklenenden çok daha hızlı" çıktığını itiraf etti. Talep beklentiyi aştı.

**Kaynaklar:** The Register, Hacker News | **Tarih:** 31 Mart 2026

---

### Ollama + Apple MLX: Mac'te Yerel AI Hızlandırma

Ollama, Apple Silicon Mac'lerde hızlandırma için MLX framework'ü kullandı. Yerel LLM çalıştırma çok daha hızlı.

**Kaynaklar:** The New Stack | **Tarih:** 31 Mart 2026

---

### MoE vs Dense: 27B Model 8GB VRAM'de 2.4x Üstün

Mixture of Experts modeli, Dense 27B'yi 2.4x hızında geçti — 8GB VRAM'de. LLM parametrizasyon değişiyor.

**Kaynaklar:** Dev.to — LLM | **Tarih:** 31 Mart 2026

---

### TRL v1.0: Post-Training Library

Hugging Face TRL (Transformer Reinforcement Learning) 1.0'ı yayınladı — RLHF ve post-training için.

**Kaynaklar:** Hugging Face Blog | **Tarih:** 31 Mart 2026

---

## ☁️ KUBERNETES & CLOUD NATIVE

### Serverless Scaling AKS'de: 70-95% Maliyet Tasarrufu

KEDA + custom operator ile, 2-3 saat/hafta çalışan hizmetler %70-95 daha ucuz. Cold start optimization (Go <500ms vs Spring Boot 1-2s).

**Kaynaklar:** Dev.to — Kubernetes | **Tarih:** 31 Mart 2026

---

### Ingress-NGINX Emekli: Gateway API Geçişi

NGINX Ingress resmi olarak emekli oldu. Gateway API'ye migration rehberi yayınlandı.

**Kaynaklar:** Dev.to — Cloud Native | **Tarih:** 31 Mart 2026

---

### Kyverno CNCF'den Mezun: Policy-as-Code Üretim

Kyverno (Kubernetes policy engine) CNCF graduation hazırladı. Production policy-as-code rehberi.

**Kaynaklar:** Dev.to — Cloud Native | **Tarih:** 31 Mart 2026

---

### Crossplane v2.2: Pipeline Inspector, CEL Validation

Crossplane 2.2, control plane management için pipeline inspector ve CEL validation ekledi.

**Kaynaklar:** Dev.to — Kubernetes | **Tarih:** 31 Mart 2026

---

### GKE Rails Maliyetleri %60 Düşürme

Dev.to haberi: GKE'de Rails uygulamaları "Efficiency First" yöntemiyle %60 daha ucuz.

**Kaynaklar:** Dev.to — Kubernetes | **Tarih:** 31 Mart 2026

---

## 🛠️ PLATFORM ENGINEERING & DEVOPS

### CI/CD Secrets: 70+ Repo'dan Kaldırıldı

Pulumi Blog: 70+ GitHub repo'dan CI/CD secrets manuel olarak temizlendi. Lesson learned: `git-secrets` kurulu olsun.

**Kaynaklar:** Pulumi Blog | **Tarih:** 31 Mart 2026

---

### Azure Developer CLI (azd) Mart 2026: AI Agent Debug

Azure CLI, AI agent'ları lokal debug etmek ve GitHub Copilot entegrasyonu için yeni özellikler ekledi.

**Kaynaklar:** Azure SDK Blog | **Tarih:** 31 Mart 2026

---

### Cloudflare: Programmable Flow Protection

Magic Transit müşterileri için custom DDoS mitigation logic yazabiliyor.

**Kaynaklar:** Cloudflare Blog | **Tarih:** 31 Mart 2026

---

## 💻 YAZILIM GELİŞTİRME

### Discord Osprey: 2.3M Kural/Saniye Safety Engine

Discord açık kaynak Osprey'i yayınladı — 2.3 milyon safety rule/saniye işleme kapasitesi.

**Kaynaklar:** InfoQ | **Tarih:** 31 Mart 2026

---

### C++26 Contracts Finalize Edildi

C++ standardı contracts'ları onayladı. Formal yazılım sözleşmeleri standar dile giriyor.

**Kaynaklar:** The Register | **Tarih:** 31 Mart 2026

---

### Kotlin 2.3.20 & Amper 0.10

JetBrains Kotlin 2.3.20 yayınladı. Amper 0.10, JDK provisioning ve Maven converter ekledi.

**Kaynaklar:** JetBrains Blog | **Tarih:** 31 Mart 2026

---

### IntelliJ IDEA 2026.1

JetBrains IntelliJ IDEA 2026.1 yayınlandı. .NET app profiling (.NET restart olmadan) ReSharper'a geldi.

**Kaynaklar:** JetBrains Blog | **Tarih:** 31 Mart 2026

---

### nginx 1.29.7: Multipath TCP Desteği

Nginx 1.29.7 multipath TCP desteği ekledi — network performance büyük artış.

**Kaynaklar:** Phoronix | **Tarih:** 31 Mart 2026

---

### Fish Shell 4.6: systemd Entegrasyonu

Fish shell 4.6 systemd entegrasyonunu iyileştirdi. Linux terminal deneyimi gelişti.

**Kaynaklar:** Phoronix | **Tarih:** 31 Mart 2026

---

## 🗄️ VERİTABANI & DAĞITIK SİSTEMLER

### PostgreSQL Connection Pooling: PgBouncer Rehberi

Dev.to: PostgreSQL için connection pooling stratejileri — PgBouncer setup adım adım.

**Kaynaklar:** Dev.to — Database | **Tarih:** 31 Mart 2026

---

### Manticore Search 25.0.0

Manticore Search (OpenSearch fork) 25.0.0 yayınlandı. Tam metin aramaları için.

**Kaynaklar:** Dev.to — Database | **Tarih:** 31 Mart 2026

---

### AWS RDS Fatura Artışı: Bilinmeyenler

Dev.to: AWS RDS faturanız neden artıyor? Reserved instance'lar yetersiz mi, IOPS scaling mi?

**Kaynaklar:** Dev.to — Database | **Tarih:** 31 Mart 2026

---

## 🌏 ASYA TECH & ÇİN HABERLERİ

### Alibaba Agentic OS: %30 Maliyet Düşürme

Alibaba Cloud, Agentic OS yayınladı — önceden ayarlanmış Skills ile agent maliyeti %30 azalıyor.

**Kaynaklar:** OSCHINA (Çince) | **Tarih:** 31 Mart 2026

---

### Qwen3.5-Omni Multimodal Model

Alibaba Qwen3.5-Omni yayınladı — metin, görüntü, ses işleme.

**Kaynaklar:** OSCHINA | **Tarih:** 31 Mart 2026

---

### OpenAI Codex Plugin for Claude Code

OpenAI, Claude Code için Codex plugin çıkardı — dev tooling entegrasyonu.

**Kaynaklar:** OSCHINA | **Tarih:** 31 Mart 2026

---

### 71 Çin Uygulaması Kişisel Veri İhlali Nedeniyle Cezalandırıldı

Çin telecom regülatörü 71 uygulamayı listeledi — kişisel veri hukuksuz toplamaları.

**Kaynaklar:** OSCHINA | **Tarih:** 31 Mart 2026

---

### Trump AI Mevzuat Çerçevesi

ABD, "Opportunity Zone" yaklaşımı ile yapay zeka üzerine federal framework çıkardı.

**Kaynaklar:** OSCHINA | **Tarih:** 31 Mart 2026

---

## 📰 HAFTA SONU ÖZETİ

- **Quantum Cryptography Turing Award:** Bennett & Brassard — "Harika bilim, ama gereksiz." (Schneier)
- **Oracle 30K Çalışan Kovdu:** Sabah 6'da e-posta ile.
- **Ubuntu MATE Kurucusu:** "Artık tutkum kalmadı" — proje el değiştiriyor.
- **Artemis II:** Güvenli uçuşa hazır değil.
- **LibreOffice vs ONLYOFFICE:** Karşılaştırma.

---

## 📋 CVE BÜLTENI — TÜZÜ ZAFIYETLER

| CVE ID | Ürün | CVSS | Risk | Statü |
|--------|------|------|------|-------|
| **CVE-2026-32920** | OpenClaw < 2026.3.12 | **9.8** 🔴 | Auto-discovery RCE | Yama yayınlandı |
| **CVE-2026-32917** | OpenClaw < 2026.3.13 | **9.8** 🔴 | Remote command injection (iMessage SCP) | Yama yayınlandı |
| **CVE-2026-34505** | OpenClaw < 2026.3.12 | **9.8** 🔴 | Webhook rate limiting bypass → secret brute force | Yama yayınlandı |
| **CVE-2026-32916** | OpenClaw 2026.3.7–3.11 | **9.2** 🔴 | Authorization bypass (plugin subagent) | Yama yayınlandı |
| **CVE-2026-32982** | OpenClaw < 2026.3.13 | **8.7** 🟠 | Telegram token exposure (logs) | Yama yayınlandı |
| **CVE-2026-34156** | NocoBase < 2.0.28 | **7.5** 🟠 | Sandbox escape → RCE (console._stdout) | Yama yayınlandı |
| **CVE-2026-34509** | OpenClaw < 2026.3.8 | **7.5** 🟠 | Sender allowlist bypass (MS Teams) | Yama yayınlandı |
| **CVE-2026-32988** | OpenClaw < 2026.3.11 | **7.5** 🟠 | Sandbox boundary bypass (temp file race) | Yama yayınlandı |
| **CVE-2026-32976** | OpenClaw < 2026.3.11 | **7.1** 🟠 | Account-scoped policy bypass (channel commands) | Yama yayınlandı |
| **CVE-2026-32971** | OpenClaw < 2026.3.11 | **7.3** 🟠 | Approval UI mismatch → unintended command execution | Yama yayınlandı |
| **CVE-2026-3055** | Citrix NetScaler | **7.5** 🟠 | Critical memory bug (active exploit) | **ACIL YAMA LAZIM** |
| **CVE-2026-27853** | DNSdist | **5.9** 🟡 | Out-of-bounds write (DNS packet rewriting) | Yama var |
| **CVE-2026-27854** | DNSdist | **4.8** 🟡 | Use-after-free (EDNS Lua parsing) | Yama var |
| **CVE-2026-24030** | DNSdist | **5.3** 🟡 | Unbounded memory allocation (DoQ/DoH3) | Yama var |
| **CVE-2026-24029** | DNSdist | **6.5** 🟡 | DoH ACL bypass | Yama var |
| **CVE-2026-34155** | RAUC | **6.7** 🟡 | Improper signing (bundles > 2GB) | Yama var |
| **CVE-2026-3308** | MuPDF 1.27.0 | **7.5** 🟠 | PDF integer overflow → heap OOB write | Yama var |
| **CVE-2026-5198** | Code-Projects Student Membership | **7.5** 🟠 | SQL injection (/admin/index.php) | Yama var |
| **CVE-2026-4267** | Query Monitor <= 3.20.3 | **7.2** 🟠 | Reflected XSS (REQUEST_URI) | Yama var |
| **CVE-2026-3191** | Minify HTML <= 2.1.12 | **5.4** 🟡 | CSRF (settings update) | Yama var |
| **CVE-2026-3139** | User Profile Builder <= 3.15.5 | **4.3** 🟡 | IDOR (arbitrary post reassignment) | Yama var |
| **CVE-2026-32921** | OpenClaw < 2026.3.8 | **6.3** 🟡 | Script modification via mutable operand binding | Yama var |
| **CVE-2026-32977** | OpenClaw < 2026.3.11 | **6.3** 🟡 | Sandbox boundary bypass (writeFile race) | Yama var |
| **CVE-2026-32970** | OpenClaw < 2026.3.11 | **2.5** ⚪ | Credential fallback logic bypass | Yama var |
| **CVE-2026-34508** | OpenClaw < 2026.3.12 | **6.5** 🟡 | Webhook rate limiting bypass (secret brute force) | Yama var |
| **CVE-2026-34506** | OpenClaw < 2026.3.8 | **7.5** 🟠 | Sender allowlist bypass (MS Teams — duplicate) | Yama var |
| **CVE-2025-53521** | F5 BIG-IP | **CVSS belirlenmedi** | DoS başlangıçta, şimdi RCE | Yama lazım |
| **CVE-2025-61882** | Oracle E-Business Suite | **9.8+** 🔴 | Unauthenticated RCE (zero-day, Cl0p) | Yama lazım |
| **CVE-2026-1580** | *(Kontrol edilemedi)* | - | - | - |
| **CVE-2026-24512** | *(Kontrol edilemedi)* | - | - | - |
| **CVE-2026-24513** | *(Kontrol edilemedi)* | - | - | - |
| **CVE-2026-24514** | *(Kontrol edilemedi)* | - | - | - |
| **CVE-2025-1974** | *(Kontrol edilemedi)* | - | - | - |

**Özet:** 33 CVE. 5 CVSS 9.8 kritik, 8 CVSS 7-9 yüksek, 15 orta/düşük. **Acil eylem gereken:** CVE-2026-3055 (Citrix), CVE-2025-61882 (Oracle), OpenClaw sürü.

---

## ✅ GELIŞTIRME KONTROL LİSTESİ

- [ ] Axios güncelleyin — 1.14.1 ve 0.30.4 kontrol edin
- [ ] Citrix NetScaler patch — CISA emri (Son: 3 Nisan)
- [ ] OpenClaw upgrade — 2026.3.13+
- [ ] LiteLLM dependency kontrol
- [ ] npm/pip paketler scan edin (supply chain)
- [ ] Claude Code kaynak haritalarını kontrol edin — devre dışı mı?
- [ ] Soul/persona dosyaları SoulScan ile tarayın
- [ ] GitLab packages.gitlab.com repositories'i update edin

---

**DEV DAILY POST** — *Bilgili kal, güven kaybet.*
*Yayın Tarihi: 31 Mart 2026*
*Sonraki Edition: 1 Nisan 2026*

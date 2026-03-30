# 📰 The Newspaper — 2026-03-28 (Afternoon)
**Toplam Makale:** 77 | **Kategori:** 4 farklı kategoriden

---

## 🔴 Kritik Güvenlik Uyarıları

### [CVE-2026-4997 — PandasAI Path Traversal](https://cvefeed.io/vuln/detail/CVE-2026-4997)
**Kaynak:** CVE Feed | **Tarih:** 2026-03-28 | **Kategori:** Güvenlik
> Sinaptik AI PandasAI 3.0.0 ve önceki sürümlerde `sql_sanitizer.py` dosyasındaki `is_sql_query_safe` fonksiyonunda path traversal zafiyeti keşfedildi. Saldırı uzaktan başlatılabilir ve exploit kamuya açıklandı. Satıcı uyarıya yanıt vermedi.

### [CVE-2026-4996 — PandasAI SQL Injection (pandasai-lancedb)](https://cvefeed.io/vuln/detail/CVE-2026-4996)
**Kaynak:** CVE Feed | **Tarih:** 2026-03-28 | **Kategori:** Güvenlik
> PandasAI 0.1.4 ve öncesi `pandasai-lancedb` uzantısında birden fazla fonksiyonda SQL injection zafiyeti mevcut. Uzaktan istismar edilebilir, exploit kamuya açıklandı. PandasAI kullananlar acilen güncelleme yapmalı.

### [CVE-2026-2595 — WordPress Quads Ads Manager XSS (≤2.0.98.1)](https://cvefeed.io/vuln/detail/CVE-2026-2595)
**Kaynak:** CVE Feed | **Tarih:** 2026-03-28 | **Kategori:** Güvenlik
> WordPress için Quads Ads Manager eklentisinde Contributor seviyesi ve üzeri yetkili kullanıcıların birden fazla reklam metadata parametresi üzerinden Stored XSS gerçekleştirebileceği zafiyet tespit edildi. Sürüm 2.0.98.1 dahil tüm sürümler etkileniyor.

### [İran Bağlantılı Hackerlar FBI Direktörünün Kişisel E-postasını İhlal Etti](https://www.reuters.com/world/us/iran-linked-hackers-claim-breach-of-fbi-directors-personal-email-doj-official-2026-03-27/)
**Kaynak:** Hacker News / Reuters | **Tarih:** 2026-03-27 | **Kategori:** Güvenlik
> İran bağlantılı tehdit aktörlerinin FBI Direktörü'nün kişisel e-posta hesabını ele geçirdiği bildirildi. DoJ yetkilisi iddiayı doğruladı. Üst düzey yetkililerin kişisel hesaplarının da kurumsal hesaplar kadar hedef olduğunu bir kez daha gösteriyor.

### [TeamPCP, Aqua Security'nin Trivy Tarayıcısını Milyonlarca Geliştiriciye Karşı Silah Olarak Kullandı](https://thenewstack.io/teampcp-trivy-supply-chain-attack/)
**Kaynak:** The New Stack | **Tarih:** 2026-03-27 | **Kategori:** Supply Chain Saldırısı
> TeamPCP grubunun açık kaynak güvenlik tarayıcısı Trivy'yi bir supply chain saldırısı vektörüne dönüştürdüğü ortaya çıktı. Açık kaynağa yönelik bu dalganın giderek büyüdüğüne dair ciddi bir uyarı.

---

## 🔴 Retroaktif CVE Dalgası (2016–2018 Vintage)

> Bu güncelleme döngüsünde CVE Feed, 2016–2018 yıllarına ait 21 adet eski zafiyet kaydını yayımladı (SIPP, PMS, Crashmail, SC, EChat, Bochs, MAWK, Flat Assembler, JAD, Mapscrn, TiEmu, iSelect, EKG Gadu, zFTP, HNB Organizer, PInfo, NRSS, TRN, Yasr ve MESS). Bunların büyük çoğunluğu legacy/artık aktif olarak geliştirilmeyen araçlara ait stack-based buffer overflow zafiyetleri; CRITICAL (9.8) ve HIGH (8.6) önem derecelerine sahip. Eski sistemler çalıştırıyorsanız listeyi kontrol etmekte fayda var: [CVE Feed](https://cvefeed.io)

---

## 🟠 Büyük Duyurular

### [Anthropic'in Çılgın Mart'ı: 14+ Lansman, 5 Kesinti ve Kazara Claude Mythos Sızıntısı](https://thenewstack.io/anthropic-march-2026-roundup/)
**Kaynak:** The New Stack | **Tarih:** 2026-03-28 | **Kategori:** AI Haberleri
> Mart 2026'da Anthropic 14'ten fazla yeni özellik/ürün duyurdu, 5 servis kesintisi yaşandı ve Claude Mythos kod adlı bir model yanlışlıkla sızdı. Hızlı büyüme döneminde operasyonel istikrara ilişkin önemli sorular gündeme geliyor.

### [Google Yönetimli MCP Sunucularıyla Production-Ready AI Agents Nasıl Kurulur?](https://cloud.google.com/blog/products/ai-machine-learning/how-to-build-ai-agents-with-google-managed-mcp-servers/)
**Kaynak:** Google Cloud Blog | **Tarih:** 2026-03-27 | **Kategori:** AI Agents / MCP
> Google, Google Maps, BigQuery ve diğer Google Cloud servisleriyle konuşabilen tam yönetimli MCP (Model Context Protocol) sunucuları sundu. AI agent'larına enterprise veri ve araç erişimi sağlamak için resmi, güvenli bir yol oluşturuyor.

### [Solo.io, AgentBench ile Agentic AI'ın "En Büyük Çözülmemiş Problemini" Hedefliyor](https://thenewstack.io/soloio-agentbench-evaluates-ai-agents/)
**Kaynak:** The New Stack | **Tarih:** 2026-03-28 | **Kategori:** AI Tooling
> Solo.io, birbirinden farklı onlarca AI agent framework'ünü karşılaştırmalı olarak değerlendirmeye yarayan AgentBench projesini duyurdu. Agent kalitesini ölçmenin standart bir yolu olmadığı sorununu çözmeyi hedefliyor.

### [OpenAI Codex'e Plugin Desteği Geldi](https://thenewstack.io/openais-codex-gets-plugins/)
**Kaynak:** The New Stack | **Tarih:** 2026-03-27 | **Kategori:** AI Tooling
> OpenAI, Codex'e Box, Figma, Linear gibi üçüncü taraf servisler için plugin entegrasyonu ekledi. Kod asistanlarının geliştirme araç ekosistemine daha derin bütünleşmesinin önünü açıyor.

### [Gitleaks Kurucusu Agentic Çağ İçin Betterleaks'i Çıkardı](https://thenewstack.io/betterleaks-open-source-secret-scanner/)
**Kaynak:** The New Stack | **Tarih:** 2026-03-27 | **Kategori:** DevSecOps
> Gitleaks'in yaratıcısı, agent'ların ve karmaşık pipeline'ların yaygınlaştığı ortamda secret sızıntılarını tespit etmek için yeni nesil açık kaynak tarayıcı Betterleaks'i yayımladı. Giderek büyüyen agentic kod tabanlarında gizli bilgi sızıntısını daha iyi ele almak amacıyla tasarlandı.

### [Nvidia NemoClaw'ın Üç Katmanlı Agent Güvenliği Gerçek Sorunu Çözmüyor](https://thenewstack.io/nvidia-nemoclaw-openclaw-security/)
**Kaynak:** The New Stack | **Tarih:** 2026-03-28 | **Kategori:** AI Güvenlik
> Nvidia'nın NemoClaw (ve açık kaynak OpenClaw) ile sunduğu üç katmanlı güvenlik yaklaşımı teknik açıdan yetersiz bulunuyor. LLM benimsemesinin hızının güvenlik çerçevelerinin önüne geçtiğine dair analitik bir eleştiri.

---

## 🔵 Teknik Derinlemesine

### [Agent Skill'leri ile Bilgi Açığını Kapatmak (28.2% → 96.6%)](https://developers.googleblog.com/closing-the-knowledge-gap-with-agent-skills/)
**Kaynak:** Google Developers | **Tarih:** N/A | **Kategori:** LLM Mühendisliği
> Google DeepMind, modellere canlı API dokümantasyonu ve SDK kılavuzlarına erişim sağlayan "Gemini API developer skill" geliştirdi. Skill eklenince gemini-3.1-pro-preview modelinin başarı oranı %28.2'den %96.6'ya fırladı — statik model bilgisinin sınırlarına ve araç erişiminin değerine çarpıcı bir kanıt.

### [Real-Time Agentic RAG: Spark & Iceberg ile Context Rot'u Yok Etmek](https://hackernoon.com/real-time-agentic-rag-eradicating-context-rot-with-spark-and-iceberg?source=rss)
**Kaynak:** HackerNoon | **Tarih:** 2026-03-27 | **Kategori:** AI Mimarisi
> Apache Spark 4.1 Declarative Pipelines ile Apache Iceberg v3 Deletion Vectors kombinasyonunun uzun süreli AI agent'larındaki "Context Rot" problemini nasıl ortadan kaldırdığını anlatan kapsamlı mimari benchmark. Write amplification'ı elimine ederek vektör veritabanlarını gerçek zamanlı senkronize tutuyor.

### [Spec-Driven Development: Büyük Projelerde AI Kodlaması](https://hackernoon.com/introduction-to-spec-driven-development-ai-coding-for-large-projects?source=rss)
**Kaynak:** HackerNoon | **Tarih:** 2026-03-27 | **Kategori:** AI Geliştirme Metodolojisi
> "Vibe coding" büyük projelerde bozuluyor çünkü AI oturumlar arasında bağlamı kaybediyor. Spec Driven Development, kod yazılmadan önce AI agent'lara resmi spesifikasyonlar, mimari kılavuzlar ve kalıcı proje bağlamı vererek bunu düzeltiyor. AI'yı chatbot gibi değil, gerçekten codebase'i bilen bir developer gibi davrandırmak hedefleniyor.

### [Context Bloat: GenAI Bütçelerinin Sessiz Katili](https://hackernoon.com/context-bloat-the-silent-killer-of-genai-budgets?source=rss)
**Kaynak:** HackerNoon | **Tarih:** 2026-03-27 | **Kategori:** LLM Mühendisliği
> GenAI sistemleri bilgiyi biriktiriyor, silemiyor. Token'ların büyük bölümünün gerçek kullanıcı sorusuyla ilgisi yok. Çözüm model tuning'i değil, sistem akışını değiştirmek — bütçe kontrolü için kritik bir gözlem.

### [İzlenebilir AI Workflow'ları: Retry ve DLQ Görünürlüğü ile](https://hackernoon.com/how-to-build-traceable-ai-workflows-with-retry-and-dlq-visibility?source=rss)
**Kaynak:** HackerNoon | **Tarih:** 2026-03-27 | **Kategori:** MLOps
> AI pipeline "bug'larının" çoğunun aslında gözlemlenmemiş dallanma kararları olduğunu savunan makale. Her adımı yapılandırılmış trace node'ları olarak kaydetmek; debug, replay ve önbellek güvenliğini mümkün kılıyor.

### [Self-Healing Java Microservices: Adım Adım Rehber](https://hackernoon.com/building-self-healing-java-microservices-a-step-by-step-guide?source=rss)
**Kaynak:** HackerNoon | **Tarih:** 2026-03-27 | **Kategori:** Backend Mühendisliği
> GraalVM ile JVM startup optimizasyonu, CompletableFuture ile async akışlar, Resilience4j circuit breaker'ları, Spring Cloud Stream ile event-driven iletişim ve Saga pattern'leri kapsayan kapsamlı microservice rehberi.

### [LlamaParse ve Gemini 3.1 ile Akıllı Finansal Asistan](https://developers.googleblog.com/build-a-smart-financial-assistant-with-llamaparse-and-gemini-31/)
**Kaynak:** Google Developers | **Tarih:** N/A | **Kategori:** AI Uygulamaları
> Karmaşık yapılandırılmamış belgelerden yüksek kaliteli veri çıkarmak için LlamaParse + Gemini 3.1 kombinasyonunu kullanan event-driven mimari. Gemini 3.1 Pro yoğun finansal tablolar için, Flash ise maliyet-etkin özetleme için kullanılıyor.

### [Gemini & MediaPipe ile Jump to Play: Hareketle Kontrollü Oyun Geliştirme](https://developers.googleblog.com/jump-to-play-building-with-gemini-mediapipe/)
**Kaynak:** Google Developers | **Tarih:** N/A | **Kategori:** AI Geliştirme
> Gemini Canvas → Google AI Studio → Gemini Code Assist pipeline'ıyla hareket kontrollü oyun prototipini production'a taşıma süreci anlatılıyor. Düşük gecikmeli "lite" modeller ve omuz landmark'ları gibi stabil tracking noktaları öne çıkıyor.

---

## ⚪ Genel Haberler & İlginç Buluntular

### [AMD Ryzen 9 9950X3D2 Dual Edition: Tek Çipte 208MB Cache](https://arstechnica.com/gadgets/2026/03/amds-ryzen-9-9950x3d2-dual-edition-crams-208mb-of-cache-into-a-single-chip/)
**Kaynak:** Hacker News / Ars Technica | **Tarih:** 2026-03-28 | **Kategori:** Donanım
> AMD'nin yeni Ryzen 9 9950X3D2 Dual Edition işlemcisi tek çipe 208MB cache sığdırıyor. Ağır hesaplama iş yükleri için önemli bir performans atılımı.

### [CERN, Gerçek Zamanlı LHC Veri Filtreleme için Silikon Üzerine Yakılmış Küçük AI Modelleri Kullanıyor](https://theopenreader.org/Journalism:CERN_Uses_Tiny_AI_Models_Burned_into_Silicon_for_Real-Time_LHC_Data_Filtering)
**Kaynak:** Hacker News | **Tarih:** 2026-03-28 | **Kategori:** Bilim / AI
> CERN, büyük hadron çarpıştırıcısından gelen muazzam veri akışını gerçek zamanlı filtrelemek için doğrudan silikon üzerine yerleştirilmiş küçük AI modellerini devreye aldı. Uç nokta AI donanımı için ilginç bir use case.

### [8.642 İspanyol Yasasını Git'e Koydum — Her Reform Bir Commit](https://github.com/EnriqueLop/legalize-es)
**Kaynak:** Hacker News | **Tarih:** 2026-03-28 | **Kategori:** Open Source / Yaratıcı Proje
> Bir geliştirici tüm İspanyol mevzuatını Git repository'sine aktardı; her yasal değişiklik bir commit olarak izlenebiliyor. Yasal metinlere versiyon kontrolü uygulamanın özgün bir örneği.

### [.claude/ Klasörünün Anatomisi](https://blog.dailydoseofds.com/p/anatomy-of-the-claude-folder)
**Kaynak:** Hacker News | **Tarih:** 2026-03-27 | **Kategori:** Claude / AI Tooling
> Claude Code'un `.claude/` dizin yapısını derinlemesine inceleyen makale. Claude Code kullanıcıları için konfigürasyon ve proje bağlamının nasıl yönetildiğini anlıyor olmak işe yarayabilir.

### [Cocoa-Way: Linux Uygulamalarını macOS'ta Sorunsuz Çalıştıran Native Wayland Compositor](https://github.com/J-x-Z/cocoa-way)
**Kaynak:** Hacker News | **Tarih:** 2026-03-28 | **Kategori:** Open Source
> macOS için native Wayland compositor: Linux uygulamalarını XQuartz veya VM gerektirmeden macOS üzerinde çalıştırmayı hedefliyor. Erken aşamada ama ilgi çekici bir proje.

### [Vail Resorts, Kişiselleştirilmiş Kayak Önerileri için Google AI Asistanı Kurdu](https://cloud.google.com/blog/products/ai-machine-learning/how-vail-resorts-built-an-ai-assistant-to-automate-personalized-recommendations/)
**Kaynak:** Google Cloud Blog | **Tarih:** 2026-03-27 | **Kategori:** AI Uygulamaları
> Vail Resorts'un "My Epic Assistant" uygulaması 2024-2025 sezonunda kayakçılara gerçek zamanlı kişiselleştirilmiş öneriler sundu. Google Cloud altyapısı üzerinde kurulu enterprise AI kullanım senaryosu.

### [STADLER, 230 Yıllık Şirkette Bilgi İşini Yeniden Şekillendiriyor](https://openai.com/index/stadler)
**Kaynak:** OpenAI Blog | **Tarih:** 2026-03-27 | **Kategori:** Enterprise AI
> Demiryolu araçları üreticisi STADLER, 650 çalışanın üretkenliğini artırmak için ChatGPT'yi bilgi yönetimi süreçlerine entegre etti. Köklü sanayi şirketlerinde AI benimsemesinin somut bir örneği.

---

## 📊 Günün İstatistikleri

| Kategori | Makale Sayısı |
|---|---|
| 🔴 Güvenlik & CVE | 5 (+ 21 retroaktif CVE) |
| 🟠 Büyük Duyurular | 6 |
| 🔵 Teknik Blog | 8 |
| ⚪ Genel Haberler | 7 |
| **Toplam (seçilen)** | **26** |

**Birleştirilen / Atlanan İçerikler:**
- 21 adet 2016–2018 CVE toplu olarak özetlendi (bireysel girdi yerine)
- HackerNoon'daki off-topic içerikler atlandı (Spider-Man kostümleri, Agatha Christie özeti, ticari reklam içerikli yazılar)
- İş ilanları atlandı

**Öne Çıkan Konular / Anahtar Kelimeler:**
- MCP (Model Context Protocol) — Google, Anthropic, agent ekosistemi
- AI Agent güvenliği & değerlendirme
- Supply chain saldırıları
- PandasAI zafiyetleri
- Context yönetimi (bloat, rot, spec-driven)
- Retroaktif stack overflow CVE'leri (legacy araçlar)

**Erişilemeyen Feed'ler (17 adet):**
InfoQ (406), OWASP Blog (404), HashiCorp Blog/Terraform (429), PlatformEngineering.org (404), OpenShift Blog (404), Google DevOps&SRE (XML parse hatası), Netflix Tech Blog (SSL), Anthropic tüm feed'leri (403 × 4), DeepLearning.ai (403), Dev Community (403 × 2), DailyPush (403)

# Workigom Marketing - AI Agent Geliştirme Günlüğü

Bu dosya, Workigom Marketing web sitesi (Next.js App Router) üzerinde AI Agent (Antigravity) ile yapılan geliştirmelerin, alınan mimari kararların ve çözülen hataların kaydını tutar.

## 🚀 Son Geliştirmeler (Temmuz 2026)

### 1. Workigom Flow Sayfası Güncellemeleri (`/flow`)
- "Kusursuz Veri Çıkarımı" OCR bölümündeki yer tutucu arayüz (mockup), gerçek sistem içi `ocr-intelligence.jpg` görseli ile değiştirildi.
- "Yapay Zeka Destekli Sosyal Medya Ekibiniz" yazısının altına sosyal medya dashboard görseli eklendi.
- Sayfanın en üstündeki karşılama bölümündeki "Workigom" metni "Workigom Flow" olarak değiştirildi ve marka renklerine (Beyaz ve Turkuaz `#00E5FF`) uyarlandı.
- Animasyonlu kutu yerine, kullanıcının yüklediği spesifik görsel entegre edildi.

### 2. Workigom Ledger Landing Page İnşası (`/ledger`)
- **Tasarım:** "Otonom Yapay Zeka İstasyonu" vizyonunu yansıtan, koyu uzay temalı (Deep Space Black) ve zengin mor/lila (`#d0bcff`) vurgulara sahip özel bir lüks tasarım HTML'den Next.js App Router'a aktarıldı.
- **WebGL Entegrasyonu:** HTML'de gömülü olan Three.js arka plan animasyonu izole edilerek `components/ledger/LedgerThreeJs.tsx` adlı bağımsız bir React bileşenine dönüştürüldü. Performans optimizasyonları yapıldı.
- **Tailwind Optimizasyonu & Hata Çözümleri:**
  - Kullanıcının sağladığı HTML'deki standart dışı Tailwind boşluk (`gap-md`, `p-xl`, `px-margin-desktop` vb.) ve tipografi (`font-display-lg`, `text-headline-md` vb.) sınıfları, ana tasarım sistemini (design-system) bozmamak adına standart Tailwind utility sınıflarına (`gap-4`, `p-10`, `text-5xl font-bold` vb.) haritalandırıldı.
  - Bu sayede sayfa yerleşiminin bozulması ve metinlerin küçük kalması sorunu tamamen çözüldü. Sayfa ferahlatıldı.
  - Sadece Ledger sayfasına özel olan CSS kuralları `ledger.css` içerisine taşınarak global stillerin etkilenmesi önlendi.

### 3. Navigasyon ve Rotalama
- Tüm sayfaların mimarisini gösteren bir Rota Şeması (Navigation Map) çıkartıldı.
- Ana sayfa (`app/page.tsx`) üzerindeki "Workigom Ledger" butonunun `href` niteliği `/ledger` olarak güncellendi ve doğrudan erişime açıldı.

### 4. Proje Dokümantasyonu
- Projenin kök dizinine çok kapsamlı bir `README.md` oluşturuldu. 
- "Wow" efekti yaratan tasarımların (Neon Turkuaz, Zümrüt Yeşili, Aura Glow efektleri) formülleri ve Turborepo/Next.js komutları bu ana belgede güvence altına alındı.

## 🛠 Mimari Notlar ve Gizli Kurallar
- **İzolasyon:** Flow sayfası (Turkuaz/Yeşil) ve Ledger sayfası (Mor/Lila) tamamen birbirinden izole bir şekilde stillendirilmektedir. Birindeki CSS değişikliğinin diğerini etkilememesi için sayfaya özel `<SayfaAdi>.css` dosyaları ve Inline Tailwind utility'leri kullanılmaktadır.
- **JSX Dönüşümü:** Dışarıdan gelen HTML/Tailwind şablonları React ekosistemine entegre edilirken, `class` nitelikleri `className`'e çevrilmeli, inline `style="..."` etiketleri React obje formatına `style={{...}}` geçirilmelidir. Aksi takdirde Next.js Acorn parser çökmektedir (Maximum call stack size exceeded).

---
*Bu dosya, gelecekteki geliştirmelerde referans alınması amacıyla "agent hafızası" olarak kullanılacaktır.*

## 🚀 Son Gelistirmeler (Agustos 2026)

### 1. Vercel Deployment & Monorepo Ayrismasi
- Vercel'deki Next.js build problemlerini (Orn: 'npm error Unsupported URL Type "workspace:"') cozmek icin projelerin bagimliliklari temizlendi ve package.json dosyalarindan 'workspace:*' ibareleri kaldirildi.
- Vercel'in node_modules ve .next klasorlerini onbellege alip hata firlatmasini onlemek amaciyla .gitignore dosyasi duzeltildi/eklendi.
- flowweb (Eski standalone marketing) projesi pasife cekilme surecine girdi. Vercel'de uygulamalarin (flow ve ledger) ana repolarina (flow.workigom.com vb.) yonlendirilmesi icin domain mimarisi revize edildi.

### 2. Ortak Login Yapisi (Dinamik Branding)
- app/login/page.tsx sayfasi useSearchParams kullanilarak dinamik hale getirildi. 
- Kullanicilar app=ledger parametresi ile geldiklerinde lila/mor (Ledger), app=flow ile geldiklerinde turkuaz (Flow) temali ekranlarla karsilanacak yapi kuruldu.
- Ancak gercek uygulamalarin kendi giris ekranlari (subdomain'ler) oldugu netlesince, Landing page uzerindeki 'Giris Yap' butonlari direkt olarak uygulamalarin https://flow.workigom.com/login adreslerine baglandi.
- Ana sayfadaki (www.workigom.com) genel 'Giris Yap' butonu gereksiz oldugu icin kaldirildi.

### 3. Ana Sayfa (Workigom Marketing) Revizyonlari
- Workigom ana sayfasindaki eski mockup gorselleri silinip yerlerine kullanicidan gelen workigom1.mp4, workigom2.png, workigom3.png medyalari entegre edildi.
- Hero bolumundeki videonun boyutu, alanini tam doldurmasi icin Tailwind siniflari (max-w-[800px], lg:scale-[1.18], lg:h-[600px]) ile detayli olarak ayarlandi ve hizalandi.

### 4. Ekosistem Mimari Dokumantasyonu
- Her bir projenin kok dizinine (workigom, flow, ledger, flowweb) Workigom Ekosistem Mimarisini (# Workigom Ecosystem Architecture) ve Vercel Root Directory + Environment Variables kurallarini aciklayan standart bir dokumantasyon eklendi.
- Ozellikle flow uygulamasinin Vercel'de Internal Server Error (500) vermemesi icin yerel .env dosyasindaki degerlerin manuel olarak Vercel paneline girilmesi gerektigi kayit altina alindi.

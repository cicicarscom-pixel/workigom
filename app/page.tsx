import React from 'react';

export const dynamic = 'force-dynamic';
export const revalidate = 0; // Prevent caching

export default function MarketingPage() {
  return (
    <div className="bg-[#040B16] text-[#F8FAFC] min-h-screen flex flex-col overflow-x-hidden font-sans">
      <style dangerouslySetInnerHTML={{__html: `
        .glass-card {
          background: linear-gradient(145deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.4) 100%);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        }

        .text-gradient {
          background: linear-gradient(to right, #8B5CF6, #3B82F6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .glow-effect {
          position: relative;
        }
        .glow-effect::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 150%;
          height: 150%;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(0,0,0,0) 70%);
          z-index: -1;
          pointer-events: none;
        }
      `}} />

      {/* BEGIN: Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-[#1E293B]/50">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <a className="flex items-center gap-3 group" href="#">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl transform group-hover:scale-105 transition-transform shadow-lg shadow-blue-500/20">
              W
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold leading-tight">Workigom</span>
              <span className="text-[10px] text-[#94A3B8] tracking-wider uppercase">Business Operating System</span>
            </div>
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-[#94A3B8] hover:text-white transition-colors">
                Ürünlerimiz <i className="fa-solid fa-chevron-down text-[10px] mt-0.5 opacity-70 group-hover:opacity-100"></i>
              </button>
            </div>
            <a className="text-sm font-medium text-[#94A3B8] hover:text-white transition-colors" href="#">Çözümler</a>
            <a className="text-sm font-medium text-[#94A3B8] hover:text-white transition-colors" href="#">Hakkımızda</a>
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-[#94A3B8] hover:text-white transition-colors">
                Kaynaklar <i className="fa-solid fa-chevron-down text-[10px] mt-0.5 opacity-70 group-hover:opacity-100"></i>
              </button>
            </div>
            <a className="text-sm font-medium text-[#94A3B8] hover:text-white transition-colors" href="#">Fiyatlandırma</a>
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <a className="text-sm font-medium text-white hover:text-gray-300 transition-colors px-4 py-2 border border-[#1E293B] rounded-lg hover:bg-[#14203A]" href="/login">Giriş Yap</a>
            <a className="text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors px-5 py-2.5 rounded-lg shadow-lg shadow-blue-600/30" href="/login">Ücretsiz Demo</a>
          </div>
          <button className="lg:hidden text-[#94A3B8] hover:text-white">
            <i className="fa-solid fa-bars text-2xl"></i>
          </button>
        </div>
      </header>
      {/* END: Header */}

      {/* BEGIN: Main Content */}
      <main className="flex-grow pt-32 pb-0">
        <section className="container mx-auto px-6 mb-32 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="z-10 relative">
              <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-widest uppercase mb-8 backdrop-blur-sm">
                YAPAY ZEKA DESTEKLİ İŞLETİM SİSTEMİ
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
                İşletmeler için<br/>
                <span className="text-gradient">Akıllı Yönetim</span><br/>
                Tek Platformda
              </h1>
              <p className="text-lg text-[#94A3B8] mb-10 max-w-xl leading-relaxed">
                Workigom, işletmelerin finansal yönetiminden sosyal medya operasyonlarına kadar tüm süreçlerini yapay zeka ile otomatikleştiren yeni nesil bir işletim sistemidir.
              </p>
              <div className="flex flex-wrap gap-6 mb-12">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
                    <i className="fa-solid fa-wand-magic-sparkles"></i>
                  </div>
                  <span className="font-medium">Yapay Zeka<br/>Destekli</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                    <i className="fa-regular fa-clock"></i>
                  </div>
                  <span className="font-medium">7/24 Otomasyon<br/>ve Asistan</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                    <i className="fa-solid fa-shield-halved"></i>
                  </div>
                  <span className="font-medium">Güvenli &amp;<br/>Entegre</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-8 h-8 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-400">
                    <i className="fa-solid fa-piggy-bank"></i>
                  </div>
                  <span className="font-medium">Zaman &amp; Maliyet<br/>Tasarrufu</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a className="flex flex-col items-center justify-center px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold transition-all shadow-lg shadow-purple-500/25" href="/flow">
                  <span>Workigom Flow'u Keşfet</span>
                  <span className="text-[10px] font-normal opacity-80 mt-0.5">Esnaf &amp; KOBİ'ler İçin</span>
                </a>
                <a className="flex flex-col items-center justify-center px-8 py-3 rounded-xl glass-card hover:bg-[#14203A] border border-[#1E293B] text-white font-semibold transition-all" href="/ledger">
                  <span>Workigom Ledger'ı Keşfet</span>
                  <span className="text-[10px] text-[#94A3B8] font-normal mt-0.5">Muhasebeciler İçin</span>
                </a>
              </div>
              <div className="mt-8">
                <a className="text-sm font-medium text-gray-400 hover:text-white flex items-center gap-2 transition-colors" href="#">
                  Platformu Keşfet <i className="fa-solid fa-arrow-right text-xs"></i>
                </a>
              </div>
            </div>
            
            <div className="relative w-full h-[500px] flex items-center justify-center glow-effect">
              <video 
                src="/workigom1.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full max-w-[500px] h-full object-contain relative z-20 drop-shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* BEGIN: Ecosystem Section */}
        <section className="container mx-auto px-6 mb-32">
          <div className="text-center mb-16">
            <div className="text-[11px] font-bold tracking-widest text-blue-400 uppercase mb-4">TEK PLATFORMA, İKİ GÜÇLÜ ÇÖZÜM</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Workigom Ekosistemi</h2>
            <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">İşletmenizin ve muhasebenizin tüm ihtiyaçları için entegre çözümler.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="glass-card p-10 rounded-3xl flex flex-col justify-between border border-blue-500/20 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 z-0"></div>
              <div className="relative z-10 grid md:grid-cols-2 gap-8 h-full">
                <div className="flex flex-col h-full">
                  <div className="inline-block px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-[10px] font-semibold tracking-widest uppercase mb-6 self-start">
                    ESNAF &amp; KOBİLER İÇİN
                  </div>
                  <h3 className="text-3xl font-bold mb-4 flex items-center gap-2">Workigom <span className="text-purple-400">Flow</span></h3>
                  <p className="text-sm text-[#94A3B8] mb-8 leading-relaxed">
                    Sosyal medya yönetimi, AI asistan, içerik üretimi, fatura yönetimi, analiz ve otomasyon araçları ile işletmenizi büyütün.
                  </p>
                  <ul className="space-y-3 mb-10 flex-grow">
                    <li className="flex items-center gap-3 text-sm text-gray-300">
                      <i className="fa-solid fa-circle-check text-purple-500 text-base"></i> AI Destekli Sosyal Medya Yönetimi
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-300">
                      <i className="fa-solid fa-circle-check text-purple-500 text-base"></i> AI Muhasebe &amp; Fatura Yönetimi
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-300">
                      <i className="fa-solid fa-circle-check text-purple-500 text-base"></i> AI İçerik Üretimi &amp; Asistan
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-300">
                      <i className="fa-solid fa-circle-check text-purple-500 text-base"></i> Randevu &amp; Müşteri Yönetimi
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-300">
                      <i className="fa-solid fa-circle-check text-purple-500 text-base"></i> AI Analiz &amp; Raporlama
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-300">
                      <i className="fa-solid fa-circle-check text-purple-500 text-base"></i> Otomasyon &amp; Bildirimler
                    </li>
                  </ul>
                  <a className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold transition-all shadow-lg shadow-purple-500/25 w-max" href="/flow">
                    Flow'u Keşfet <i className="fa-solid fa-arrow-right ml-2 text-sm"></i>
                  </a>
                </div>
                <div className="relative flex items-center justify-center h-full min-h-[300px]">
                  <img src="/workigom3.png" alt="Workigom Flow App" className="w-full max-w-[280px] object-contain relative z-10 drop-shadow-2xl" />
                </div>
              </div>
            </div>

            <div className="glass-card p-10 rounded-3xl flex flex-col justify-between border border-blue-500/20 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/5 to-indigo-500/5 z-0"></div>
              <div className="relative z-10 grid md:grid-cols-2 gap-8 h-full">
                <div className="flex flex-col h-full">
                  <div className="inline-block px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] font-semibold tracking-widest uppercase mb-6 self-start">
                    MUHASEBECİLER İÇİN
                  </div>
                  <h3 className="text-3xl font-bold mb-4 flex items-center gap-2">Workigom <span className="text-blue-400">Ledger</span></h3>
                  <p className="text-sm text-[#94A3B8] mb-8 leading-relaxed">
                    Mükellef yönetimi, fatura işleme, muhasebe entegrasyonu ve AI asistan ile muhasebe süreçlerinizi kolaylaştırın.
                  </p>
                  <ul className="space-y-3 mb-10 flex-grow">
                    <li className="flex items-center gap-3 text-sm text-gray-300">
                      <i className="fa-solid fa-circle-check text-blue-500 text-base"></i> Mükellef &amp; Firma Yönetimi
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-300">
                      <i className="fa-solid fa-circle-check text-blue-500 text-base"></i> Fatura Toplama &amp; İşleme
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-300">
                      <i className="fa-solid fa-circle-check text-blue-500 text-base"></i> Muhasebe Programı Entegrasyonları
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-300">
                      <i className="fa-solid fa-circle-check text-blue-500 text-base"></i> AI Asistan ile Otomasyon
                    </li>
                  </ul>
                  <a className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-lg shadow-blue-500/25 w-max" href="/ledger">
                    Ledger'ı Keşfet <i className="fa-solid fa-arrow-right ml-2 text-sm"></i>
                  </a>
                </div>
                <div className="relative flex items-center justify-center h-full min-h-[300px]">
                  <img src="/workigom2.png" alt="Workigom Ledger Web" className="w-full max-w-[320px] object-contain relative z-10 drop-shadow-2xl translate-x-4" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-20 border-t border-[#1E293B]/50 relative">
          <div className="text-center mb-16">
            <div className="text-xs font-bold tracking-widest text-[#94A3B8] uppercase mb-2">TÜM İŞ SÜREÇLERİNİZ İÇİN AKILLI ÇÖZÜMLER</div>
            <h2 className="text-3xl md:text-4xl font-bold">Workigom ile Neler Yapabilirsiniz?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-card p-8 rounded-2xl hover:border-blue-500/50 transition-colors group">
              <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 text-2xl mb-6 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-wallet"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Finansal Yönetim</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">Fatura yönetimi, gelir-gider takibi, ödemeler ve muhasebe süreçlerinizi tek platformda yönetin.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl hover:border-purple-500/50 transition-colors group">
              <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 text-2xl mb-6 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-comment-dots"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Sosyal Medya Yönetimi</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">Tüm sosyal medya hesaplarınızı yapay zeka ile yönetin, içeriklerinizi planlayın ve analiz edin.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl hover:border-indigo-500/50 transition-colors group">
              <div className="w-14 h-14 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 text-2xl mb-6 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-robot"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Otomasyon</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">Tekrarlayan görevleri yapay zeka ile otomatikleştirin, zamandan ve maliyetten tasarruf edin.</p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-12 border-t border-b border-[#1E293B]/50 my-10">
          <div className="flex flex-wrap justify-between items-center gap-8 text-center md:text-left">
            <div className="flex items-center gap-4">
              <div className="text-blue-500 text-3xl"><i className="fa-solid fa-briefcase"></i></div>
              <div>
                <div className="text-2xl font-bold">10.000+</div>
                <div className="text-xs text-[#94A3B8]">Aktif İşletme</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-purple-500 text-3xl"><i className="fa-solid fa-users"></i></div>
              <div>
                <div className="text-2xl font-bold">2.500+</div>
                <div className="text-xs text-[#94A3B8]">Muhasebe Ofisi</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-indigo-500 text-3xl"><i className="fa-solid fa-file-invoice-dollar"></i></div>
              <div>
                <div className="text-2xl font-bold">25M+</div>
                <div className="text-xs text-[#94A3B8]">İşlenen Fatura</div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-20 mb-20 relative overflow-hidden rounded-3xl glass-card">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 to-blue-900/40 mix-blend-overlay"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Geleceğin İşletme Yönetimine<br/>Bugün Geçin!</h2>
              <p className="text-[#94A3B8] mb-8 text-sm max-w-md">Workigom ekosistemi ile işletmenizi büyütün, süreçlerinizi otomatikleştirin ve rekabette bir adım öne geçin.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a className="flex flex-col items-center justify-center px-8 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold transition-all shadow-lg" href="/flow">
                  <span>Flow'u Ücretsiz Dene</span>
                  <span className="text-[10px] font-normal opacity-80 mt-0.5">14 gün ücretsiz</span>
                </a>
                <a className="flex flex-col items-center justify-center px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-lg" href="/ledger">
                  <span>Ledger'ı Ücretsiz Dene</span>
                  <span className="text-[10px] font-normal opacity-80 mt-0.5">14 gün ücretsiz</span>
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-end">
              <div className="w-64 h-64 bg-[#0B1426] rounded-full flex items-center justify-center border border-[#1E293B] shadow-2xl relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
                <i className="fa-solid fa-robot text-7xl text-white z-10"></i>
                <div className="absolute bottom-4 right-4 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold border-2 border-[#0B1426] z-20">W</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0B1426] border-t border-[#1E293B]/50 pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
            <div className="lg:col-span-2">
              <a className="flex items-center gap-3 mb-6" href="#">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                  W
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold leading-tight">Workigom</span>
                  <span className="text-[8px] text-[#94A3B8] tracking-wider uppercase">Business Operating System</span>
                </div>
              </a>
              <p className="text-xs text-[#94A3B8] mb-6 leading-relaxed">
                Workigom, işletmeler için yapay zeka destekli yönetim platformları geliştiren bir yazılım şirketidir.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-6">Ürünler</h4>
              <ul className="space-y-4 text-xs text-[#94A3B8]">
                <li><a className="hover:text-white transition-colors" href="/flow">Workigom Flow</a></li>
                <li><a className="hover:text-white transition-colors" href="/ledger">Workigom Ledger</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Fiyatlandırma</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-6">Şirket</h4>
              <ul className="space-y-4 text-xs text-[#94A3B8]">
                <li><a className="hover:text-white transition-colors" href="#">Hakkımızda</a></li>
                <li><a className="hover:text-white transition-colors" href="#">İletişim</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#1E293B]/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-xs text-[#94A3B8]">
              © 2024 Workigom Yazılım A.Ş. Tüm hakları saklıdır.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

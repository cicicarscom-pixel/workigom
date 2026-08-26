import React from 'react';
import { MarketingHeader } from '@/components/MarketingHeader';
import { MarketingFooter } from '@/components/MarketingFooter';

export default function HakkimizdaPage() {
  return (
    <div className="bg-[#040B16] text-[#F8FAFC] min-h-screen flex flex-col font-sans">
      <MarketingHeader />
      
      <main className="flex-grow pt-32 pb-20">
        <section className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <div className="text-xs font-bold tracking-widest text-[#94A3B8] uppercase mb-4">HAKKIMIZDA</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">İşletmelerin <span className="text-gradient">Yapay Zeka</span> Dönüşümü</h1>
          </div>

          <div className="glass-card p-10 rounded-3xl mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <h2 className="text-2xl font-semibold mb-6">Vizyonumuz</h2>
            <p className="text-[#94A3B8] leading-relaxed text-lg mb-6">
              Workigom olarak, yapay zekanın sadece büyük teknoloji şirketlerinin değil, her mahalledeki esnafın ve KOBİ'nin de en büyük yardımcısı olması gerektiğine inanıyoruz. İşletmelerin yapay zeka ile otomatikleştiği, muhasebenin ise anlık, şeffaf ve hatasız hale geldiği bir ekosistem yaratıyoruz.
            </p>
            <p className="text-[#94A3B8] leading-relaxed text-lg">
              Amacımız, teknolojiyi karmaşık arayüzlerden kurtararak herkesin anlayabileceği sadelikte sunmak ve <strong>Workigom Flow</strong> ile <strong>Workigom Ledger</strong> çözümlerimiz aracılığıyla işletmeler ile mali müşavirler arasındaki köprüyü dijitalleştirmektir.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="glass-card p-8 rounded-2xl text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 text-2xl mb-4">
                <i className="fa-solid fa-microchip"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">İleri Teknoloji</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Google Gemini AI, Supabase gerçek zamanlı veritabanı ve güvenli Cloud mimarisi ile en güncel altyapıları kullanıyoruz.
              </p>
            </div>
            <div className="glass-card p-8 rounded-2xl text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 text-2xl mb-4">
                <i className="fa-solid fa-handshake"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Güven ve Şeffaflık</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Müşavir ve esnafı aynı veri tabanında buluşturarak, veri kaybını önlüyor, evrak takiplerini güvenle arşivliyoruz.
              </p>
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
}

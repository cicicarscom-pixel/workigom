import React from 'react';
import { MarketingHeader } from '@/components/MarketingHeader';
import { MarketingFooter } from '@/components/MarketingFooter';
import Link from 'next/link';

export default function CozumlerPage() {
  return (
    <div className="bg-[#040B16] text-[#F8FAFC] min-h-screen flex flex-col font-sans">
      <MarketingHeader />
      
      <main className="flex-grow pt-32 pb-20">
        <section className="container mx-auto px-6 mb-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Uçtan Uca <span className="text-gradient">Akıllı Çözümler</span></h1>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
            Workigom ekosistemi, işletmelerin ve mali müşavirlerin tüm operasyonlarını tek platformda, yapay zeka entegrasyonu ile kusursuz yönetmesini sağlar.
          </p>
        </section>

        <section className="container mx-auto px-6 grid md:grid-cols-2 gap-12 mb-20">
          <div className="glass-card p-10 rounded-3xl border border-purple-500/20">
            <div className="w-16 h-16 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 text-3xl mb-8">
              <i className="fa-solid fa-shop"></i>
            </div>
            <h2 className="text-3xl font-bold mb-4">Esnaf ve KOBİ'ler İçin</h2>
            <p className="text-[#94A3B8] mb-6 leading-relaxed">
              Sosyal medya hesaplarınızı yönetin, müşterilerinize otonom yapay zeka asistanı ile 7/24 destek sunun. Randevularınızı, tahsilatlarınızı ve ön muhasebe fişlerinizi tek bir yerden kolayca dijitalleştirin.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <i className="fa-solid fa-check text-purple-500"></i> WhatsApp ve Instagram AI Bot Entegrasyonu
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <i className="fa-solid fa-check text-purple-500"></i> Akıllı Fatura ve Fiş Tarama (OCR)
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <i className="fa-solid fa-check text-purple-500"></i> Müşteri &amp; Randevu CRM
              </li>
            </ul>
            <Link href="/flow" className="inline-block px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors">
              Workigom Flow'u İncele
            </Link>
          </div>

          <div className="glass-card p-10 rounded-3xl border border-blue-500/20">
            <div className="w-16 h-16 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 text-3xl mb-8">
              <i className="fa-solid fa-calculator"></i>
            </div>
            <h2 className="text-3xl font-bold mb-4">Mali Müşavirler İçin</h2>
            <p className="text-[#94A3B8] mb-6 leading-relaxed">
              Mükelleflerinizin evraklarını yapay zeka ile otomatik toplayın, ayıklayın ve tasnif edin. Eksik evrak peşinde koşmadan, tüm finansal hareketleri anında müşavir panelinizde görün.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <i className="fa-solid fa-check text-blue-500"></i> Merkezi Mükellef Yönetim Paneli
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <i className="fa-solid fa-check text-blue-500"></i> AI Destekli Evrak &amp; Fatura Doğrulama
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <i className="fa-solid fa-check text-blue-500"></i> Güvenli Ortak Veritabanı (Flow ile Entegre)
              </li>
            </ul>
            <Link href="https://ledger.workigom.com" className="inline-block px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors">
              Workigom Ledger'ı İncele
            </Link>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
}

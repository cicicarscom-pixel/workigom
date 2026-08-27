import React from 'react';
import { MarketingHeader } from '@/components/MarketingHeader';
import { MarketingFooter } from '@/components/MarketingFooter';
import Link from 'next/link';

export default function FiyatlandirmaPage() {
  return (
    <div className="bg-[#040B16] text-[#F8FAFC] min-h-screen flex flex-col font-sans">
      <MarketingHeader />
      
      <main className="flex-grow pt-32 pb-20">
        <section className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Esnek ve <span className="text-gradient">Şeffaf Fiyatlandırma</span></h1>
            <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
              İşletmenizin ölçeğine ve ihtiyaçlarına uygun paketler. Sürpriz maliyetler olmadan büyümeye odaklanın.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic */}
            <div className="glass-card p-8 rounded-3xl flex flex-col h-full border border-[#1E293B]">
              <h3 className="text-xl font-semibold mb-2">Flow Basic</h3>
              <p className="text-sm text-[#94A3B8] mb-6 min-h-[40px]">Küçük işletmeler ve esnaflar için temel otomasyon araçları.</p>
              <div className="text-3xl font-bold mb-8">₺499<span className="text-sm text-[#94A3B8] font-normal">/ay</span></div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <i className="fa-solid fa-check text-green-500"></i> WhatsApp AI Bot (WAHA)
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <i className="fa-solid fa-check text-green-500"></i> Temel Randevu Yönetimi
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <i className="fa-solid fa-check text-green-500"></i> Müşteri Paneli
                </li>
              </ul>
              <Link href="/flow/register" className="block text-center px-6 py-3 rounded-lg border border-white/20 hover:bg-white/10 text-white font-medium transition-colors w-full">
                Başla
              </Link>
            </div>

            {/* Premium */}
            <div className="glass-card p-8 rounded-3xl flex flex-col h-full border border-purple-500 relative transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-purple-600 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                En Çok Tercih Edilen
              </div>
              <h3 className="text-xl font-semibold mb-2">Flow Premium</h3>
              <p className="text-sm text-[#94A3B8] mb-6 min-h-[40px]">Büyüyen KOBİ'ler için tam kapsamlı AI ve sosyal medya yönetimi.</p>
              <div className="text-3xl font-bold mb-8">₺999<span className="text-sm text-[#94A3B8] font-normal">/ay</span></div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <i className="fa-solid fa-check text-purple-500"></i> Basic Paketteki Her Şey
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <i className="fa-solid fa-check text-purple-500"></i> Zernio (Instagram) AI Entegrasyonu
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <i className="fa-solid fa-check text-purple-500"></i> Gelişmiş AI Muhasebe (Fatura OCR)
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <i className="fa-solid fa-check text-purple-500"></i> Ledger Müşavir Entegrasyonu
                </li>
              </ul>
              <Link href="/flow/register" className="block text-center px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors w-full shadow-lg shadow-purple-500/25">
                Premium'u Dene
              </Link>
            </div>

            {/* Ledger */}
            <div className="glass-card p-8 rounded-3xl flex flex-col h-full border border-[#00C8FF]/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#00C8FF] text-black text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-widest">
                %100 ÜCRETSİZ
              </div>
              <h3 className="text-xl font-semibold mb-2">Workigom Ledger</h3>
              <p className="text-sm text-[#94A3B8] mb-6 min-h-[40px]">Mali müşavirler için Türkiye'nin tek tamamen ücretsiz yapay zeka asistanı.</p>
              <div className="text-3xl font-bold mb-8 text-[#00C8FF]">0₺<span className="text-sm text-[#94A3B8] font-normal">/ömür boyu</span></div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <i className="fa-solid fa-check text-[#00C8FF]"></i> Sınırsız Mükellef Yönetimi
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <i className="fa-solid fa-check text-[#00C8FF]"></i> Ortak Veritabanı ve Arşiv
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <i className="fa-solid fa-check text-[#00C8FF]"></i> Limitsiz AI Doküman Tarama (OCR)
                </li>
              </ul>
              <Link href="https://ledger.workigom.com" className="block text-center px-6 py-3 rounded-lg bg-[#00C8FF] hover:bg-[#009ac4] text-black font-bold transition-colors w-full shadow-[0_0_15px_rgba(0,200,255,0.3)]">
                Hemen Ücretsiz Başla
              </Link>
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
}

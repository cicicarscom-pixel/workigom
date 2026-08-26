import React from 'react';
import { MarketingHeader } from '@/components/MarketingHeader';
import { MarketingFooter } from '@/components/MarketingFooter';
import Link from 'next/link';

export default function KaynaklarPage() {
  return (
    <div className="bg-[#040B16] text-[#F8FAFC] min-h-screen flex flex-col font-sans">
      <MarketingHeader />
      
      <main className="flex-grow pt-32 pb-20">
        <section className="container mx-auto px-6 text-center">
          <div className="text-xs font-bold tracking-widest text-[#94A3B8] uppercase mb-4">MERKEZİ DOKÜMANTASYON</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Workigom <span className="text-gradient">Kaynaklar</span> Merkezi</h1>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto mb-16">
            Sistemi en verimli şekilde kullanmanız için hazırladığımız rehberlere, API dokümantasyonlarına ve sıkça sorulan sorulara göz atın.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link href="/kaynaklar/blog" className="glass-card p-10 rounded-3xl border border-white/10 hover:border-purple-500/50 transition-all group block text-left">
              <div className="w-16 h-16 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 text-3xl mb-6 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-book-open"></i>
              </div>
              <h2 className="text-2xl font-bold mb-3">Blog &amp; Rehberler</h2>
              <p className="text-[#94A3B8] leading-relaxed">
                İşletmenizi büyütmek için ipuçları, yapay zeka kullanım rehberleri ve e-fatura geçiş süreçleri hakkında kapsamlı yazılar.
              </p>
            </Link>

            <Link href="/kaynaklar/sss" className="glass-card p-10 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all group block text-left">
              <div className="w-16 h-16 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 text-3xl mb-6 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-circle-question"></i>
              </div>
              <h2 className="text-2xl font-bold mb-3">Sıkça Sorulan Sorular</h2>
              <p className="text-[#94A3B8] leading-relaxed">
                Workigom Flow ve Ledger kurulumu, fiyatlandırma, güvenlik ve yapay zeka karakter ayarları hakkında en çok merak edilenler.
              </p>
            </Link>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
}

import React from 'react';
import Link from 'next/link';

export function MarketingHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-[#1E293B]/50">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link className="flex items-center gap-3 group" href="/">
          <img src="/workigom_logo.png" alt="Workigom Logo" className="h-10 w-auto object-contain" />
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-medium text-[#94A3B8] hover:text-white transition-colors">
              Ürünlerimiz <i className="fa-solid fa-chevron-down text-[10px] mt-0.5 opacity-70 group-hover:opacity-100"></i>
            </button>
            <div className="absolute top-full left-0 mt-4 w-48 bg-[#0B1426] border border-[#1E293B] rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2">
              <Link href="/flow" className="block px-4 py-2 text-sm text-[#94A3B8] hover:text-white hover:bg-white/5 transition-colors">Workigom Flow</Link>
              <Link href="https://ledger.workigom.com" className="block px-4 py-2 text-sm text-[#94A3B8] hover:text-white hover:bg-white/5 transition-colors">Workigom Ledger</Link>
            </div>
          </div>
          <Link className="text-sm font-medium text-[#94A3B8] hover:text-white transition-colors" href="/cozumler">Çözümler</Link>
          <Link className="text-sm font-medium text-[#94A3B8] hover:text-white transition-colors" href="/hakkimizda">Hakkımızda</Link>
          <div className="relative group">
            <Link href="/kaynaklar" className="flex items-center gap-1 text-sm font-medium text-[#94A3B8] hover:text-white transition-colors">
              Kaynaklar <i className="fa-solid fa-chevron-down text-[10px] mt-0.5 opacity-70 group-hover:opacity-100"></i>
            </Link>
            <div className="absolute top-full left-0 mt-4 w-48 bg-[#0B1426] border border-[#1E293B] rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2">
              <Link href="/kaynaklar/blog" className="block px-4 py-2 text-sm text-[#94A3B8] hover:text-white hover:bg-white/5 transition-colors">Blog</Link>
              <Link href="/kaynaklar/sss" className="block px-4 py-2 text-sm text-[#94A3B8] hover:text-white hover:bg-white/5 transition-colors">Sıkça Sorulan Sorular</Link>
            </div>
          </div>
          <Link className="text-sm font-medium text-[#94A3B8] hover:text-white transition-colors" href="/fiyatlandirma">Fiyatlandırma</Link>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Link className="text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors px-5 py-2.5 rounded-lg shadow-lg shadow-blue-600/30" href="/#ekosistem">Ücretsiz Demo</Link>
        </div>
        <button className="lg:hidden text-[#94A3B8] hover:text-white">
          <i className="fa-solid fa-bars text-2xl"></i>
        </button>
      </div>
    </header>
  );
}

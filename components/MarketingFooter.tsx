import React from 'react';
import Link from 'next/link';

export function MarketingFooter() {
  return (
    <footer className="bg-[#0B1426] border-t border-[#1E293B]/50 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link className="flex items-center gap-3 mb-6" href="/">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                W
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight">Workigom</span>
                <span className="text-[8px] text-[#94A3B8] tracking-wider uppercase">Business Operating System</span>
              </div>
            </Link>
            <p className="text-xs text-[#94A3B8] mb-6 leading-relaxed">
              Workigom, işletmeler için yapay zeka destekli yönetim platformları geliştiren bir yazılım şirketidir.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-6">Ürünler</h4>
            <ul className="space-y-4 text-xs text-[#94A3B8]">
              <li><Link className="hover:text-white transition-colors" href="/flow">Workigom Flow</Link></li>
              <li><Link className="hover:text-white transition-colors" href="https://ledger.workigom.com">Workigom Ledger</Link></li>
              <li><Link className="hover:text-white transition-colors" href="/fiyatlandirma">Fiyatlandırma</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-6">Şirket</h4>
            <ul className="space-y-4 text-xs text-[#94A3B8]">
              <li><Link className="hover:text-white transition-colors" href="/hakkimizda">Hakkımızda</Link></li>
              <li><Link className="hover:text-white transition-colors" href="#">İletişim</Link></li>
              <li><Link className="hover:text-white transition-colors" href="/policy">Gizlilik Politikası</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#1E293B]/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xs text-[#94A3B8]">
            © {new Date().getFullYear()} Workigom Yazılım A.Ş. Tüm hakları saklıdır.
          </div>
        </div>
      </div>
    </footer>
  );
}

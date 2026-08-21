import Link from 'next/link';

export default function PolicyPage() {
  return (
    <div className="min-h-screen bg-[#0A0D14] text-white p-8 md:p-16 selection:bg-[#00A2FF]/30 selection:text-white">
      <div className="max-w-4xl mx-auto bg-[#141319]/80 backdrop-blur-md border border-white/5 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#00A2FF]/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[50%] bg-[#B600F8]/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
        
        <div className="relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-[#8E95B3] hover:text-white transition-colors mb-8">
            <span className="material-symbols-outlined text-[18px]">&#8592;</span>
            <span>Ana Sayfaya Dön</span>
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#00A2FF] to-[#B600F8]">
            Workigom Gizlilik Politikası ve Kullanım Koşulları
          </h1>
          
          <div className="space-y-6 text-[#8E95B3] leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-white mb-3">1. Giriş</h2>
              <p>Workigom (Flow ve Ledger uygulamaları dahil olmak üzere) olarak gizliliğinize büyük önem veriyoruz. Bu metin, platformlarımızı kullanırken kişisel, işlemsel ve finansal verilerinizin nasıl işlendiğini açıklamaktadır.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-white mb-3">2. Veri Toplama, Kullanım ve Güvenlik</h2>
              <p>Hizmetlerimizi sunabilmek amacıyla hesap bilgileriniz, iş akışlarınız ve muhasebe/finansal verileriniz uçtan uca şifrelemeyle güvenli bir şekilde saklanır. Bu veriler yalnızca size ve işletmenize hizmet vermek amacıyla kullanılır. Yetkilendirilmemiş hiçbir kişi veya kurum verilerinize erişemez.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">3. Üçüncü Taraf Bağlantıları (Google vb.)</h2>
              <p>Google veya banka entegrasyonları gibi üçüncü taraf hizmetlerle yaptığınız bağlantılarda, yalnızca onay verdiğiniz kapsamdaki verilere erişilir. Bu veriler kesinlikle üçüncü partilere satılmaz, pazarlama amacıyla izinsiz kullanılamaz ve paylaşılmaz.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-white mb-3">4. İletişim</h2>
              <p>Hesaplarınızla, entegrasyonlarla veya verilerinizin güvenliği ile ilgili her türlü soru için destek ekibimizle iletişime geçebilirsiniz.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

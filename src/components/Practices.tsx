import React, { useState } from 'react';
import { Briefcase, Landmark, ShieldAlert, FileText, Home, Cpu, X, CheckCircle } from 'lucide-react';
import '../styles/components/Practices.css';

interface PracticeArea {
  id: string;
  icon: React.ReactNode;
  title: string;
  shortDesc: string;
  detailedDesc: string;
  subServices: string[];
}

export const Practices: React.FC = () => {
  const [activeArea, setActiveArea] = useState<PracticeArea | null>(null);

  const practiceAreas: PracticeArea[] = [
    {
      id: 'corporate',
      icon: <Briefcase size={32} />,
      title: 'Şirketler & Ticaret Hukuku',
      shortDesc: 'Şirket kuruluşları, kurumsal yönetim, ticari sözleşmeler ve günlük ticari operasyonların hukuki yönetimi.',
      detailedDesc: 'MK Partners, yerli ve yabancı şirketlerin ticari yaşamlarındaki tüm süreçlerde hukuki danışmanlık yapmaktadır. Ticari sözleşmelerin hazırlanması, genel kurul ve yönetim kurulu süreçleri, haksız rekabet uyuşmazlıkları ve şirket kurumsal yönetimi konularında profesyonel çözümler sunuyoruz.',
      subServices: [
        'Şirket Kuruluşu ve Ana Sözleşme Hazırlığı',
        'Uluslararası Ticari Sözleşmelerin Müzakeresi',
        'Kurumsal Yönetim ve Uyumluluk (Compliance) Danışmanlığı',
        'Yönetim Kurulu ve Genel Kurul İşlemleri',
        'Haksız Rekabet ve Rekabet Hukuku Uyuşmazlıkları'
      ]
    },
    {
      id: 'ma',
      icon: <Landmark size={32} />,
      title: 'Birleşme & Devralmalar',
      shortDesc: 'M&A süreçleri, hukuki durum tespiti (Due Diligence), ortak girişimler ve yapılandırma projeleri.',
      detailedDesc: 'Şirket evlilikleri, devralmalar ve ortak girişim projelerinde stratejik danışmanlık hizmeti sunuyoruz. Due Diligence (hukuki durum tespiti) raporlarının hazırlanmasından, pay devir sözleşmelerinin (SPA) ve hissedarlar sözleşmelerinin (SHA) müzakeresine kadar tüm süreçlerde müvekkillerimizi en yüksek standartta temsil ediyoruz.',
      subServices: [
        'Hukuki Durum Tespiti (Due Diligence) Süreçleri',
        'Pay Devir (SPA) ve Hissedarlar Sözleşmesi (SHA) Hazırlığı',
        'Ortak Girişim (Joint Venture) Kurulumu',
        'Regülasyon ve İzin Başvurularının Yönetimi',
        'Yeniden Yapılandırma ve Kısmi Bölünme Süreçleri'
      ]
    },
    {
      id: 'litigation',
      icon: <ShieldAlert size={32} />,
      title: 'Uyuşmazlık Çözümü & Dava',
      shortDesc: 'Ticari davalar, tahkim, idari uyuşmazlıklar ve uyuşmazlık öncesi risk yönetimi.',
      detailedDesc: 'Ticari ve idari uyuşmazlıkların çözümünde, müvekkillerimizin menfaatlerini korumak adına etkin dava takibi ve tahkim hizmetleri sunuyoruz. Dava öncesi müzakerelerden, icra takibi ve yüksek yargı süreçlerine kadar olan her aşamada titizlikle çalışıyoruz.',
      subServices: [
        'Ticari ve Alacak Davaları',
        'Uluslararası ve Ulusal Tahkim (Arbitration)',
        'İdari İşlemler ve Vergi Davaları',
        'İcra İflas Hukuku ve Borç Yapılandırma',
        'Uyuşmazlık Öncesi Risk Analizi ve Sulh Müzakereleri'
      ]
    },
    {
      id: 'employment',
      icon: <FileText size={32} />,
      title: 'İş ve Sosyal Güvenlik Hukuku',
      shortDesc: 'İş sözleşmeleri, işçi-işveren ilişkileri, sendikal süreçler ve iş hukuku uyumluluk denetimleri.',
      detailedDesc: 'Şirketlerin insan kaynakları departmanlarına günlük iş hukuku danışmanlığı veriyor, olası uyuşmazlıkları minimize edecek yapılar kuruyoruz. İş sözleşmelerinin düzenlenmesi, işe iade ve tazminat davalarının takibi, iş sağlığı ve güvenliği mevzuatına uyum süreçlerinde hizmet veriyoruz.',
      subServices: [
        'İş Sözleşmeleri ve Yönetmeliklerinin Hazırlanması',
        'İşe İade, Kıdem ve İhbar Tazminatı Davaları',
        'İş Sağlığı ve Güvenliği (İSG) Hukuki Uyum Denetimi',
        'Toplu İş Sözleşmesi ve Sendikal İlişkiler',
        'Çalışan Devirleri ve İş Akdi Fesih Süreçleri'
      ]
    },
    {
      id: 'realestate',
      icon: <Home size={32} />,
      title: 'Gayrimenkul & İnşaat Hukuku',
      shortDesc: 'Gayrimenkul alım-satım projeleri, kentsel dönüşüm, imar ve büyük ölçekli inşaat sözleşmeleri.',
      detailedDesc: 'Gayrimenkul geliştirme projeleri, kentsel dönüşüm süreçleri, kat karşılığı inşaat sözleşmeleri ve kira ilişkilerinde hukuki destek sağlıyoruz. Tapu tescil, imar planı uyuşmazlıkları ve yabancıların mülk edinme süreçlerini profesyonelce yönetiyoruz.',
      subServices: [
        'Kat Karşılığı İnşaat ve Gelir Paylaşımı Sözleşmeleri',
        'Kira Sözleşmelerinin Hazırlanması ve Tahliye Davaları',
        'Tapu Tescil, İptal ve Ortaklığın Giderilmesi (İzale-i Şüyu) Davaları',
        'Kentsel Dönüşüm Hukuku Danışmanlığı',
        'Gayrimenkul Yatırımları Hukuki Durum Tespiti'
      ]
    },
    {
      id: 'privacy',
      icon: <Cpu size={32} />,
      title: 'Teknoloji, Bilişim & KVKK',
      shortDesc: 'Kişisel verilerin korunması uyum projeleri, yazılım lisanslamaları ve e-ticaret regülasyonları.',
      detailedDesc: 'Dijitalleşen dünyada şirketlerin KVKK ve GDPR uyum süreçlerini uçtan uca tasarlıyoruz. Teknoloji transferleri, yazılım geliştirme ve lisans sözleşmeleri, e-ticaret mevzuatına uyum ve bilişim suçları alanlarında uzman danışmanlık sunmaktayız.',
      subServices: [
        'KVKK (Kişisel Verilerin Korunması) Uyum Projeleri',
        'Veri Envanteri Hazırlama ve VERBİS Kayıt İşlemleri',
        'Yazılım Lisans ve Hizmet (SaaS) Sözleşmeleri Müzakeresi',
        'E-Ticaret Altyapısı Hukuki Uyumluluk İncelemesi',
        'Bilişim Hukuku ve Siber Güvenlik Regülasyonları'
      ]
    }
  ];

  const handleClose = () => {
    setActiveArea(null);
  };

  return (
    <section id="practices" className="section practices-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-subtitle">Uzmanlık Alanlarımız</span>
          <h2 className="section-title">Faaliyet Alanları</h2>
        </div>

        {/* Practice Cards Grid */}
        <div className="practices-grid">
          {practiceAreas.map((area, idx) => (
            <div 
              key={area.id} 
              className="practice-card reveal" 
              style={{ animationDelay: `${idx * 0.1}s` }}
              onClick={() => setActiveArea(area)}
            >
              <div className="practice-card-icon">
                {area.icon}
              </div>
              <h3 className="practice-card-title">{area.title}</h3>
              <p className="practice-card-desc">{area.shortDesc}</p>
              <span className="practice-card-link">
                Detayları İncele &rarr;
              </span>
            </div>
          ))}
        </div>

        {/* Interactive Modal Details Panel */}
        {activeArea && (
          <div className="practice-modal-backdrop" onClick={handleClose}>
            <div className="practice-modal glass reveal" onClick={(e) => e.stopPropagation()}>
              <button className="practice-modal-close" onClick={handleClose} aria-label="Kapat">
                <X size={24} />
              </button>
              
              <div className="practice-modal-header">
                <div className="practice-modal-icon">
                  {activeArea.icon}
                </div>
                <h3 className="practice-modal-title">{activeArea.title}</h3>
              </div>

              <div className="practice-modal-body">
                <p className="practice-modal-desc">
                  {activeArea.detailedDesc}
                </p>

                <h4 className="practice-modal-subtitle">Hizmetlerimiz</h4>
                <ul className="practice-modal-list">
                  {activeArea.subServices.map((service, idx) => (
                    <li key={idx} className="practice-modal-item">
                      <CheckCircle size={16} className="checkmark" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="practice-modal-footer">
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleClose();
                    const element = document.getElementById('contact');
                    if (element) {
                      const offset = 80;
                      const bodyRect = document.body.getBoundingClientRect().top;
                      const elementRect = element.getBoundingClientRect().top;
                      const elementPosition = elementRect - bodyRect;
                      const offsetPosition = elementPosition - offset;
                      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                    }
                  }} 
                  className="btn-gold-solid modal-cta"
                >
                  Bu Alanda Danışmanlık Al
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

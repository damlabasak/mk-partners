import React from 'react';
import { ShieldCheck, Scale, Award, Users } from 'lucide-react';
import '../styles/components/About.css';

export const About: React.FC = () => {
  const values = [
    {
      icon: <ShieldCheck size={28} />,
      title: 'Güven ve Dürüstlük',
      description: 'Tüm hukuki süreçlerimizde dürüstlüğü ve şeffaflığı esas alıyor, müvekkillerimizle karşılıklı güvene dayalı uzun soluklu ortaklıklar kuruyoruz.'
    },
    {
      icon: <Scale size={28} />,
      title: 'Hukuki Mükemmeliyet',
      description: 'Karmaşık hukuki meselelerde, güncel mevzuat takibi ve derinlemesine araştırma ile en yaratıcı ve etkili stratejileri üretiyoruz.'
    },
    {
      icon: <Award size={28} />,
      title: 'Çözüm Odaklılık',
      description: 'Sadece riskleri belirlemekle kalmıyor, müvekkillerimizin ticari ve kişisel hedeflerine ulaşmalarını sağlayacak pratik çözümler sunuyoruz.'
    },
    {
      icon: <Users size={28} />,
      title: 'Müvekkil Odaklı Yaklaşım',
      description: 'Her müvekkilimizin ihtiyaçlarını benzersiz kabul ediyor, butik ve kişiselleştirilmiş bir hukuki danışmanlık hizmeti sağlıyoruz.'
    }
  ];

  const stats = [
    { value: '15+', label: 'Yıllık Deneyim' },
    { value: '98%', label: 'Başarı Oranı' },
    { value: '500+', label: 'Çözülen Uyuşmazlık' },
    { value: '20+', label: 'Hizmet Alanı' }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-subtitle">Felsefemiz</span>
          <h2 className="section-title">Hakkımızda & Değerlerimiz</h2>
        </div>

        {/* Content Grid */}
        <div className="about-grid">
          {/* Left: Text & Bio */}
          <div className="about-text-content reveal">
            <h3 className="about-heading">Hukukta Güvenilir Ortağınız</h3>
            <p className="about-paragraph">
              MK Partners Legal Consultancy, kurulduğu günden bu yana hukukun üstünlüğü ve adalet prensiplerine bağlı kalarak, müvekkillerine yüksek kalitede avukatlık ve hukuki danışmanlık hizmetleri sunmaktadır. 
            </p>
            <p className="about-paragraph">
              Dinamik, deneyimli ve kendi alanlarında uzmanlaşmış ekibimizle; şirketler hukuku, uyuşmazlık çözümü, iş hukuku ve fikri mülkiyet başta olmak üzere hukukun her alanında güvenilir çözümler üretiyoruz. Müvekkillerimizin hedeflerini kendi hedeflerimiz olarak görüyor ve hukuki süreçleri en şeffaf şekilde yönetiyoruz.
            </p>
            
            {/* Stats list */}
            <div className="stats-grid">
              {stats.map((stat, idx) => (
                <div key={idx} className="stat-card">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Core Values Cards */}
          <div className="about-values reveal">
            {values.map((value, idx) => (
              <div key={idx} className="value-card">
                <div className="value-icon-wrapper">
                  {value.icon}
                </div>
                <div className="value-info">
                  <h4 className="value-title">{value.title}</h4>
                  <p className="value-desc">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

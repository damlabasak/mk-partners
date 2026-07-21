'use client';

import React, { useState } from 'react';
import { Mail, GraduationCap, Globe, X } from 'lucide-react';
const basePath = process.env.NODE_ENV === 'production' ? '/mk-partners' : '';
const mkLogo = `${basePath}/mk-logo.png`;

interface TeamMember {
  name: string;
  title: string;
  initials: string;
  email: string;
  specialty: string;
  bio: string;
  education: string[];
  languages: string[];
}

export const Team: React.FC = () => {
  const [activeMember, setActiveMember] = useState<TeamMember | null>(null);

  const team: TeamMember[] = [
    {
      name: 'Av. Özgün Gizem Meteoğlu (LL.M.)',
      title: 'Kurucu Ortak',
      initials: 'OGM',
      email: 'ozgungizem@meteoglukaya.com',
      specialty: 'İş Hukuku, Kurumsal Danışmanlılk, İşçi-işveren Uyuşmazlıkları',
      bio: 'Av. Özgün Gizem Meteoğlu (LL.M.), iş hukuku, kurumsal danışmanlık ve işçi-işveren uyuşmazlıkları alanlarında çalışmalarını sürdürmektedir. Kariyeri boyunca Türkiye’nin önde gelen şirketlerine iş hukuku danışmanlığı sağlamış; dava yönetimi, arabuluculuk, insan kaynakları süreçleri ve hukuki risk yönetimi konularında kapsamlı tecrübe edinmiştir. Bunun yanı sıra fikri mülkiyet hukuku, teknoloji hukuku ve kişisel verilerin korunması (KVKK/GDPR) alanlarında danışmanlık hizmeti vermektedir. “İş Hukukunda Eşitlik İlkesi ve Ayrımcılık Yasaklarına Aykırılık ve Sonuçları” adlı kitabın yazarı olan Meteoğlu, akademik birikimini uygulamadaki deneyimiyle birleştirerek yerli ve yabancı müvekkillerine stratejik, önleyici ve sonuç odaklı hukuki çözümler sunmaktadır.',
      education: [
        'Doğuş Üniversitesi Hukuk Fakültesi (Lisans)',
        'Doğuş Üniversitesi Özel Hukuk Yüksek Lisans Programı (Tezli) | Tam Burslu (LL.M.)',
        'Tez: "İş Hukukunda Eşitlik İlkesi ve Ayrımcılık Yasaklarına Aykırılık ve Sonuçları"'
      ],
      languages: ['Türkçe', 'İngilizce']
    },
    {
      name: 'Av. Osman Mete Meteoğlu',
      title: 'Kurucu Ortak',
      initials: 'OMM',
      email: 'mete@meteoglukaya.com',
      specialty: 'Şirketler Hukuku, Ticaret Hukuku, Kurumsal Danışmanlık',
      bio: 'Av. Osman Mete Meteoğlu, ticaret hukuku, şirketler hukuku ve kurumsal danışmanlık alanlarında uzmanlaşmıştır. Türkiye’nin önde gelen holdingleri, sanayi kuruluşları ve kurumsal şirketlerine verdiği danışmanlık hizmetleri kapsamında ticari uyuşmazlıklar, kurumsal yönetişim, mevzuata uyum, sermaye piyasası uygulamaları ve sözleşme yönetimi alanlarında önemli deneyim edinmiştir. Yönetici avukat olarak ekip yönetimi, hukuki risk analizi ve stratejik dava yönetimi süreçlerine liderlik etmiş; şirket yapılanmaları, birleşme ve devralmalar (M&A) ile ticari sözleşmeler konusunda yerli ve yabancı müvekkillerine kapsamlı hukuki danışmanlık sunmaktadır. Uluslararası projelerde aktif görev alarak özellikle Almanya ve İtalya merkezli profesyonel iş ağları oluşturmuş, farklı hukuk sistemleriyle çalışma ve uluslararası iş geliştirme alanlarında önemli bir vizyon kazanmıştır.',
      education: [
        'Doğuş Üniversitesi Hukuk Fakültesi (Lisans)'
      ],
      languages: ['Türkçe', 'İngilizce']
    },
    {
      name: 'Av. Selman Kaya',
      title: 'Kurucu Ortak',
      initials: 'SK',
      email: 'selman@meteoglukaya.com',
      specialty: 'İcra ve Ceza Hukuku, Ticari Alacakların Tahsili, Ceza ve İnfaz Hukuku, Aile Hukuku, Gayrimenkul Hukuku',
      bio: 'Av. Selman Kaya, icra ve iflas hukuku, ticari alacakların tahsili, ceza ve infaz hukuku, aile hukuku ile gayrimenkul hukuku alanlarında uzmanlaşmıştır. Kariyeri boyunca Türkiye’nin önde gelen şirketleri, finans kuruluşları ve bankalara icra takipleri, alacak yönetimi ve hukuki risk süreçlerinde danışmanlık vermiş; yüksek hacimli takip dosyalarının planlanması ve yürütülmesinde önemli deneyim kazanmıştır. Çek, senet ve diğer kambiyo senetlerinden kaynaklanan alacakların tahsili ile ticari alacak yönetimi süreçlerinde etkin rol üstlenmiş, bankaların ve kurumsal şirketlerin tahsilat stratejilerinin oluşturulması ve uygulanmasına yönelik kapsamlı hukuki danışmanlık sunmuştur. Bunun yanı sıra ceza ve infaz hukuku, boşanma davaları, mal rejiminin tasfiyesi, velayet, nafaka ve diğer aile hukukundan kaynaklanan uyuşmazlıklar ile gayrimenkul hukukuna ilişkin davalarda bireysel ve kurumsal müvekkillerini temsil etmekte; dava öncesinden kararın infazına kadar tüm süreçlerde stratejik, hızlı ve sonuç odaklı hukuki danışmanlık sunmaktadır.',
      education: [
        'Doğuş Üniversitesi Hukuk Fakültesi (Lisans)'
      ],
      languages: ['Türkçe', 'İngilizce']
    },
    {
      name: 'Av. Leman Melike Gülmez (LL.M.)',
      title: 'Avukat',
      initials: 'LMG',
      email: 'lemanmelike@meteoglukaya.com',
      specialty: 'AB Uyum Süreçleri ve Sözleşmeler, Uluslararası Ticaret Hukuku, Yatırım Danışmanlığı',
      bio: 'Av. Leman Melike Gülmez (LL.M.), Avrupa Birliği hukuku, uluslararası ticaret hukuku ve yatırım danışmanlığı alanlarında çalışmalarını sürdürmektedir. Avrupa Birliği Hukuku ve Ekonomi alanındaki yüksek lisans eğitimini Sapienza Üniversitesi (Roma) bünyesinde tamamladıktan sonra mesleki faaliyetlerini İtalya’da sürdürmüş ve MK Partners’ın Avrupa yapılanmasının geliştirilmesinde aktif rol üstlenmiştir. Roma merkezli olarak Avrupa’daki kişi ve şirketlere Türkiye’deki hukuki süreçlerde danışmanlık sunarken, Türk şirketlerinin Avrupa Birliği mevzuatına uyum süreçleri ile Avrupa Birliği ülkelerinde faaliyet gösteren şirketlerin Türkiye’deki yatırım ve ticari faaliyetlerine ilişkin kapsamlı hukuki destek sağlamaktadır. Avrupa Birliği mevzuatı, sınır ötesi ticari ilişkiler ve uluslararası sözleşmeler konusunda danışmanlık veren Gülmez, ileri düzey İngilizce ve İtalyanca bilgisi sayesinde uluslararası müvekkilleriyle doğrudan iletişim kurarak stratejik ve çözüm odaklı hukuki danışmanlık sunmaktadır.MK Partners’ın Roma ofisi aracılığıyla Avrupa ile Türkiye arasında faaliyet gösteren kişi ve şirketlere sınır ötesi hukuki danışmanlık sunmakta; uluslararası yatırım, ticaret ve mevzuata uyum süreçlerinde müvekkillerine güvenilir bir çözüm ortağı olarak hizmet vermektedir.',
      education: [
        'Gaziantep Üniversitesi Hukuk Fakültesi (Lisans)',
        'Roma Sapienza Üniversitesi - European Studies, Law and Economics (LL.M.)'
      ],
      languages: ['Türkçe', 'İngilizce', 'İtalyanca']
    }
  ];

  return (
    <section id="team" className="section team-section">
      <div className="container">

        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-subtitle">Uzman Kadromuz</span>
          <h2 className="section-title">Ekibimiz</h2>
        </div>

        {/* Team Grid */}
        <div className="team-grid">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="team-card reveal"
              style={{ animationDelay: `${idx * 0.1}s` }}
              onClick={() => setActiveMember(member)}
            >
              {/* Logo Avatar Box */}
              <div className="team-avatar-box">
                <img src={mkLogo} alt="MK Partners Logo" className="team-avatar-img" />
              </div>

              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <span className="team-title">{member.title}</span>
                <span className="team-specialty">{member.specialty.split(',')[0]}</span>
                <span className="team-card-more">Özgeçmişi İncele &rarr;</span>
              </div>
            </div>
          ))}
        </div>

        {/* Member Details Modal */}
        {activeMember && (
          <div className="team-modal-backdrop" onClick={() => setActiveMember(null)}>
            <div className="team-modal glass reveal" onClick={(e) => e.stopPropagation()}>
              <button
                className="team-modal-close"
                onClick={() => setActiveMember(null)}
                aria-label="Kapat"
              >
                <X size={24} />
              </button>

              <div className="team-modal-content">

                {/* Header (Avatar + Base info) */}
                <div className="team-modal-header">
                  <div className="team-modal-avatar">
                    <img src={mkLogo} alt="MK Partners Logo" className="team-modal-avatar-img" />
                  </div>
                  <div>
                    <h3 className="team-modal-name">{activeMember.name}</h3>
                    <span className="team-modal-title">{activeMember.title}</span>

                    {/* Social/Contact links */}
                    <div className="team-modal-links">
                      <a href={`mailto:${activeMember.email}`} title={activeMember.email}>
                        <Mail size={16} />
                        <span>E-posta Gönder</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Details Section */}
                <div className="team-modal-body">
                  <div className="team-modal-section">
                    <h4 className="team-modal-subtitle">Uzmanlık Alanları</h4>
                    <p className="team-modal-desc specialty-highlight">{activeMember.specialty}</p>
                  </div>

                  <div className="team-modal-section">
                    <h4 className="team-modal-subtitle">Hakkında</h4>
                    <p className="team-modal-desc">{activeMember.bio}</p>
                  </div>

                  <div className="team-modal-section">
                    <h4 className="team-modal-subtitle">
                      <GraduationCap size={18} className="icon-inline" />
                      <span>Eğitim</span>
                    </h4>
                    <ul className="team-modal-list">
                      {activeMember.education.map((edu, id) => (
                        <li key={id}>{edu}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="team-modal-section">
                    <h4 className="team-modal-subtitle">
                      <Globe size={18} className="icon-inline" />
                      <span>Yabancı Diller</span>
                    </h4>
                    <div className="language-badge-container">
                      {activeMember.languages.map((lang, id) => (
                        <span key={id} className="language-badge">{lang}</span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

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
  linkedin: string;
  specialty: string;
  bio: string;
  education: string[];
  languages: string[];
}

export const Team: React.FC = () => {
  const [activeMember, setActiveMember] = useState<TeamMember | null>(null);

  const team: TeamMember[] = [
    {
      name: 'Av. Özgün Gizem Meteoğlu (LL.M)',
      title: 'Kurucu Ortak',
      initials: 'OGM',
      email: 'ozgun.gizem.meteglu@mkpartners.com',
      linkedin: 'https://linkedin.com',
      specialty: 'Bilişim Hukuku, KVKK & Veri Koruma, Fikri Mülkiyet Hukuku',
      bio: 'Özgün Gizem Meteoğlu, bilişim hukuku, KVKK/GDPR uyum süreçleri ve marka/telif hakları uyuşmazlıkları konularında uzmanlaşmıştır. Birçok teknoloji firması ve e-ticaret platformuna veri envanteri hazırlığı, aydınlatma metinleri ve sözleşmeler bazında danışmanlık vermektedir.',
      education: [
        'İstanbul Üniversitesi Hukuk Fakültesi (Lisans)',
        'Münih Ludwig Maximilian Üniversitesi - Fikri Mülkiyet ve Teknoloji Hukuku (LL.M.)'
      ],
      languages: ['Türkçe (Anadil)', 'İngilizce (İleri Düzey)', 'Almanca (Orta Düzey)']
    },
    {
      name: 'Av. Osman Mete Meteoğlu',
      title: 'Kurucu Ortak',
      initials: 'OMM',
      email: 'osman.mete.meteglu@mkpartners.com',
      linkedin: 'https://linkedin.com',
      specialty: 'Şirketler Hukuku, Birleşme & Devralmalar (M&A), Uluslararası Ticaret Hukuku',
      bio: 'Osman Mete Meteoğlu, MK Partners\'ın kurucu ortağıdır. Özellikle yerli ve yabancı şirketlerin birleşme ve devralma süreçlerinde, ortak girişimlerin kurulmasında ve uluslararası ticari sözleşmelerin müzakeresinde 15 yılı aşkın süredir danışmanlık yapmaktadır. M&A projelerinde Due Diligence süreçlerinden işlem kapanışına kadar tüm safhaları yönetmektedir.',
      education: [
        'Galatasaray Üniversitesi Hukuk Fakültesi (Lisans, Dereceyle Mezuniyet)',
        'Université Paris 1 Panthéon-Sorbonne - Uluslararası Ticaret Hukuku (LL.M.)'
      ],
      languages: ['Türkçe (Anadil)', 'İngilizce (İleri Düzey)', 'Fransızca (İleri Düzey)']
    },
    {
      name: 'Av. Selman Kaya',
      title: 'Kurucu Ortak',
      initials: 'SK',
      email: 'selman.kaya@mkpartners.com',
      linkedin: 'https://linkedin.com',
      specialty: 'Uyuşmazlık Çözümü, Tahkim, İş Hukuku ve İcra-İflas Hukuku',
      bio: 'Selman Kaya, ticari uyuşmazlıklar, idari davalar ve iş hukuku alanlarında derin bir tecrübeye sahiptir. Ulusal ve uluslararası şirketleri tahkim kurullarında ve mahkemelerde başarıyla temsil etmektedir. İşçi-işveren ilişkilerinin yapılandırılması ve toplu iş sözleşmesi süreçlerinde aktif rol üstlenmektedir.',
      education: [
        'İstanbul Bilgi Üniversitesi Hukuk Fakültesi (Lisans)',
        'İstanbul Bilgi Üniversitesi - Ekonomi Hukuku (Yüksek Lisans Dersleri)'
      ],
      languages: ['Türkçe (Anadil)', 'İngilizce (İleri Düzey)']
    },
    {
      name: 'Av. Leman Melike Gülmez (LL.M)',
      title: 'Avukat',
      initials: 'LMG',
      email: 'leman.melike.gulmez@mkpartners.com',
      linkedin: 'https://linkedin.com',
      specialty: 'Bilişim Hukuku, KVKK & Veri Koruma, Fikri Mülkiyet Hukuku',
      bio: 'Leman Melike Gülmez, bilişim hukuku, KVKK/GDPR uyum süreçleri ve marka/telif hakları uyuşmazlıkları konularında uzmanlaşmıştır. Birçok teknoloji firması ve e-ticaret platformuna veri envanteri hazırlığı, aydınlatma metinleri ve sözleşmeler bazında danışmanlık vermektedir.',
      education: [
        'İstanbul Üniversitesi Hukuk Fakültesi (Lisans)',
        'Münih Ludwig Maximilian Üniversitesi - Fikri Mülkiyet ve Teknoloji Hukuku (LL.M.)'
      ],
      languages: ['Türkçe (Anadil)', 'İngilizce (İleri Düzey)', 'Almanca (Orta Düzey)']
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
                      <a href={activeMember.linkedin} target="_blank" rel="noopener noreferrer">
                        <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                        <span>LinkedIn</span>
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

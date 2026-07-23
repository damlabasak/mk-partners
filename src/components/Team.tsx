'use client';

import React, { useState } from 'react';
import { Mail, GraduationCap, Globe, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const basePath = process.env.NODE_ENV === 'production' ? '/mk-partners' : '';
const mkLogo = `${basePath}/mk-logo.png`;

interface TeamMemberDisplay {
  name: string;
  title: string;
  email: string;
  specialty: string;
  bio: string;
  education: string[];
  languages: string[];
}

export const Team: React.FC = () => {
  const { t } = useLanguage();
  const [activeMember, setActiveMember] = useState<TeamMemberDisplay | null>(null);

  const emails = [
    'ozgungizem@meteoglukaya.com',
    'mete@meteoglukaya.com',
    'selman@meteoglukaya.com',
    'lemanmelike@meteoglukaya.com',
  ];

  const team: TeamMemberDisplay[] = t.team.members.map((member, idx) => ({
    ...member,
    email: emails[idx] || 'info@meteoglukaya.com',
  }));

  return (
    <section id="team" className="section team-section">
      <div className="container">

        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-subtitle">{t.team.subtitle}</span>
          <h2 className="section-title">{t.team.title}</h2>
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
                <img src={mkLogo} alt={`${member.name} - MK Partners`} className="team-avatar-img" />
              </div>

              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <span className="team-title">{member.title}</span>
                <span className="team-specialty">{member.specialty.split(',')[0]}</span>
                <span className="team-card-more">{t.team.viewBio}</span>
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
                    <img src={mkLogo} alt={`${activeMember.name} - MK Partners Biography`} className="team-modal-avatar-img" />
                  </div>
                  <div>
                    <h3 className="team-modal-name">{activeMember.name}</h3>
                    <span className="team-modal-title">{activeMember.title}</span>

                    {/* Social/Contact links */}
                    <div className="team-modal-links">
                      <a href={`mailto:${activeMember.email}`} title={activeMember.email}>
                        <Mail size={16} />
                        <span>{t.team.sendEmail}</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Details Section */}
                <div className="team-modal-body">
                  <div className="team-modal-section">
                    <h4 className="team-modal-subtitle">{t.team.specialtiesTitle}</h4>
                    <p className="team-modal-desc specialty-highlight">{activeMember.specialty}</p>
                  </div>

                  <div className="team-modal-section">
                    <h4 className="team-modal-subtitle">{t.team.aboutTitle}</h4>
                    <p className="team-modal-desc">{activeMember.bio}</p>
                  </div>

                  <div className="team-modal-section">
                    <h4 className="team-modal-subtitle">
                      <GraduationCap size={18} className="icon-inline" />
                      <span>{t.team.educationTitle}</span>
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
                      <span>{t.team.languagesTitle}</span>
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

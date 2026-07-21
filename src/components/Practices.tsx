'use client';

import React, { useState } from 'react';
import { Briefcase, Landmark, ShieldAlert, FileText, Home, X, CheckCircle, ScrollText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export interface PracticeAreaDisplay {
  id: string;
  icon: React.ReactNode;
  title: string;
  shortDesc: string;
  detailedDesc: string;
  subServices: string[];
}

export const Practices: React.FC = () => {
  const { t } = useLanguage();
  const [activeArea, setActiveArea] = useState<PracticeAreaDisplay | null>(null);

  const getIcon = (id: string) => {
    switch (id) {
      case 'corporate':
        return <Briefcase size={32} />;
      case 'criminal':
        return <ScrollText size={32} />;
      case 'litigation':
        return <ShieldAlert size={32} />;
      case 'employment':
        return <FileText size={32} />;
      case 'realestate':
        return <Home size={32} />;
      case 'ma':
        return <Landmark size={32} />;
      default:
        return <Briefcase size={32} />;
    }
  };

  const practiceAreas: PracticeAreaDisplay[] = t.practices.items.map((item) => ({
    ...item,
    icon: getIcon(item.id),
  }));

  const handleClose = () => {
    setActiveArea(null);
  };

  return (
    <section id="practices" className="section practices-section">
      <div className="container">

        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-subtitle">{t.practices.subtitle}</span>
          <h2 className="section-title">{t.practices.title}</h2>
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
                {t.practices.readMore}
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

                <h4 className="practice-modal-subtitle">{t.practices.ourServices}</h4>
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
                  {t.practices.getAdviceModal}
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

'use client';

import React from 'react';
import { ShieldCheck, Scale, Award, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const About: React.FC = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: <ShieldCheck size={28} />,
      title: t.about.values.title1,
      description: t.about.values.desc1
    },
    {
      icon: <Scale size={28} />,
      title: t.about.values.title2,
      description: t.about.values.desc2
    },
    {
      icon: <Award size={28} />,
      title: t.about.values.title3,
      description: t.about.values.desc3
    },
    {
      icon: <Users size={28} />,
      title: t.about.values.title4,
      description: t.about.values.desc4
    }
  ];

  const stats = [
    { value: t.about.stats.expValue, label: t.about.stats.expLabel },
    { value: t.about.stats.servicesValue, label: t.about.stats.servicesLabel }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">

        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-subtitle">{t.about.subtitle}</span>
          <h2 className="section-title">{t.about.title}</h2>
        </div>

        {/* Content Grid */}
        <div className="about-grid">
          {/* Left: Text & Bio */}
          <div className="about-text-content reveal">
            <h3 className="about-heading">{t.about.heading}</h3>
            <p className="about-paragraph">{t.about.p1}</p>
            <p className="about-paragraph">{t.about.p2}</p>

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

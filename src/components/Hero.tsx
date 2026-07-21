'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="hero-section">
      {/* Background Banner Image */}
      <div className="hero-background-image"></div>

      {/* Delicate grid pattern overlay */}
      <div className="hero-grid"></div>

      {/* Floating Glassmorphic Content Panel on the Left */}
      <div className="hero-glass-panel reveal">
        <div className="hero-left-content">
          <span className="hero-subtitle">{t.hero.subtitle}</span>

          <h1 className="hero-title">
            {t.hero.titleLine1} <br />
            <span className="gold-text">{t.hero.titleGold}</span>
          </h1>

          <p className="hero-description">
            {t.hero.description}
          </p>

          <div className="hero-buttons">
            <button
              onClick={() => handleScrollTo('practices')}
              className="btn-gold-solid"
            >
              {t.hero.practicesBtn}
            </button>
            <button
              onClick={() => handleScrollTo('contact')}
              className="btn-gold"
            >
              {t.hero.contactBtn}
            </button>
          </div>
        </div>
      </div>

      {/* Smooth scroll down indicator */}
      <button
        className="hero-scroll-indicator"
        onClick={() => handleScrollTo('about')}
        aria-label="Aşağı kaydır"
      >
        <span className="scroll-text">{t.hero.discover}</span>
        <ChevronDown size={20} className="scroll-arrow" />
      </button>
    </section>
  );
};

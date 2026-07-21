'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
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
          <span className="hero-subtitle">MK Partners Legal Consultancy</span>

          <h1 className="hero-title">
            Stratejik Hukuk <br />
            <span className="gold-text">Kalıcı Güven</span>
          </h1>

          <p className="hero-description">
            MK Partners olarak Türkiye ve Avrupa’da kişi ve şirketlere dava takibi, uyuşmazlık çözümü ve hukuki danışmanlık alanlarında yüksek standartlarda hizmet sunuyoruz.
          </p>

          <div className="hero-buttons">
            <button
              onClick={() => handleScrollTo('practices')}
              className="btn-gold-solid"
            >
              Faaliyet Alanlarımız
            </button>
            <button
              onClick={() => handleScrollTo('contact')}
              className="btn-gold"
            >
              Bize Ulaşın
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
        <span className="scroll-text">Keşfet</span>
        <ChevronDown size={20} className="scroll-arrow" />
      </button>
    </section>
  );
};

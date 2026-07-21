'use client';

import React from 'react';
import { Logo } from './Logo';
import { Mail, ArrowUp, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
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
    <footer className="footer">
      <div className="container footer-container">

        {/* Main Grid */}
        <div className="footer-grid">

          {/* Col 1: Brand Info */}
          <div className="footer-brand">
            <Logo variant="horizontal" height={36} className="footer-logo" />
            <p className="footer-brand-text">
              {t.footer.brandText}
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="footer-nav">
            <h4 className="footer-title">{t.footer.menuTitle}</h4>
            <ul className="footer-links">
              <li><a href="#hero" onClick={(e) => handleLinkClick(e, '#hero')}>{t.nav.home}</a></li>
              <li><a href="#about" onClick={(e) => handleLinkClick(e, '#about')}>{t.nav.about}</a></li>
              <li><a href="#practices" onClick={(e) => handleLinkClick(e, '#practices')}>{t.nav.practices}</a></li>
              <li><a href="#team" onClick={(e) => handleLinkClick(e, '#team')}>{t.nav.team}</a></li>
              <li><a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>{t.nav.contact}</a></li>
              <li><a href="#career" onClick={(e) => handleLinkClick(e, '#career')}>{t.nav.career}</a></li>
            </ul>
          </div>

          {/* Col 3: Contact Summary */}
          <div className="footer-contact">
            <h4 className="footer-title">{t.footer.contactTitle}</h4>
            <p className="footer-contact-item">
              <Phone size={18} /> +90 (505) 429 61 96
            </p>
            <p className="footer-contact-item">
              <Mail size={18} /> info@meteoglukaya.com
            </p>
          </div>

          {/* Col 4: Legal Disclaimer */}
          <div className="footer-disclaimer">
            <h4 className="footer-title">{t.footer.legalTitle}</h4>
            <p className="footer-disclaimer-text">
              {t.footer.disclaimerText}
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} {t.footer.copyright}
          </p>

          {/* Scroll to Top Button */}
          <button
            onClick={handleScrollToTop}
            className="scroll-top-btn"
            aria-label="Yukarı çık"
          >
            <span>{t.footer.scrollTop}</span>
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
};

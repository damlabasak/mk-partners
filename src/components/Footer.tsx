'use client';

import React from 'react';
import { Logo } from './Logo';
import { Mail, ArrowUp, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
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
              MK Partners olarak, müvekkillerimizin ihtiyaçlarına özel, stratejik ve etik değerlere bağlı hukuki çözümler üretmek için çalışıyoruz.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="footer-nav">
            <h4 className="footer-title">Menü</h4>
            <ul className="footer-links">
              <li><a href="#hero" onClick={(e) => handleLinkClick(e, '#hero')}>Ana Sayfa</a></li>
              <li><a href="#about" onClick={(e) => handleLinkClick(e, '#about')}>Hakkımızda</a></li>
              <li><a href="#practices" onClick={(e) => handleLinkClick(e, '#practices')}>Faaliyet Alanları</a></li>
              <li><a href="#team" onClick={(e) => handleLinkClick(e, '#team')}>Ekibimiz</a></li>
              <li><a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>İletişim</a></li>
              <li><a href="#career" onClick={(e) => handleLinkClick(e, '#career')}>Kariyer</a></li>
            </ul>
          </div>

          {/* Col 3: Contact Summary */}
          <div className="footer-contact">
            <h4 className="footer-title">İletişim</h4>
            <p className="footer-contact-item">
              <Phone size={18} /> +90 (505) 429 61 96
            </p>
            <p className="footer-contact-item">
              <Mail size={18} /> info@meteoglukaya.com
            </p>
          </div>

          {/* Col 4: Legal Disclaimer */}
          <div className="footer-disclaimer">
            <h4 className="footer-title">Yasal Uyarı</h4>
            <p className="footer-disclaimer-text">
              Bu web sitesinde yer alan her türlü bilgi, materyal ve yayınlar Türkiye Barolar Birliği'nin Meslek Kuralları ve ilgili mevzuatına uygun olarak, reklam amacı güdülmeksizin yalnızca bilgilendirme amacıyla hazırlanmıştır.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} MK Partners Legal Consultancy. Tüm Hakları Saklıdır.
          </p>

          {/* Scroll to Top Button */}
          <button
            onClick={handleScrollToTop}
            className="scroll-top-btn"
            aria-label="Yukarı çık"
          >
            <span>Yukarı</span>
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
};

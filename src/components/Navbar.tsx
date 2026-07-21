'use client';

import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../i18n/translations';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { label: t.nav.home, href: '#hero', id: 'hero' },
    { label: t.nav.about, href: '#about', id: 'about' },
    { label: t.nav.practices, href: '#practices', id: 'practices' },
    { label: t.nav.team, href: '#team', id: 'team' },
    { label: t.nav.contact, href: '#contact', id: 'contact' },
    { label: t.nav.career, href: '#career', id: 'career' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const scrollPosition = window.scrollY + 120;
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

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

  const languagesList: { code: Language; label: string }[] = [
    { code: 'tr', label: 'TR' },
    { code: 'en', label: 'EN' },
    { code: 'it', label: 'IT' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <a href="#hero" onClick={(e) => handleLinkClick(e, '#hero')} className="navbar-logo-link">
          <Logo variant="horizontal" height={45} />
        </a>

        {/* Desktop Navigation Links */}
        <div className="navbar-links">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`navbar-link ${activeSection === link.id ? 'active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side CTA & Language Selector */}
        <div className="navbar-right-box">

          {/* Language Switcher Pill */}
          <div className="lang-switcher">
            <Globe size={14} className="lang-globe-icon" />
            {languagesList.map((langItem) => (
              <button
                key={langItem.code}
                onClick={() => setLanguage(langItem.code)}
                className={`lang-btn ${language === langItem.code ? 'active' : ''}`}
                aria-label={`Switch to ${langItem.label}`}
              >
                {langItem.label}
              </button>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="navbar-cta">
            <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="btn-navbar btn-gold">
              <Phone size={14} className="icon-phone" />
              <span>{t.nav.getAdvice}</span>
            </a>
          </div>

        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menüyü Aç/Kapat"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <div className={`mobile-drawer ${isOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-links">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`mobile-drawer-link ${activeSection === link.id ? 'active' : ''}`}
            >
              {link.label}
            </a>
          ))}

          {/* Mobile Language Switcher */}
          <div className="mobile-lang-switcher">
            {languagesList.map((langItem) => (
              <button
                key={langItem.code}
                onClick={() => {
                  setLanguage(langItem.code);
                  setIsOpen(false);
                }}
                className={`mobile-lang-btn ${language === langItem.code ? 'active' : ''}`}
              >
                {langItem.label}
              </button>
            ))}
          </div>

          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="mobile-drawer-cta btn-gold-solid"
          >
            {t.nav.getAdvice}
          </a>
        </div>
      </div>
    </nav>
  );
};

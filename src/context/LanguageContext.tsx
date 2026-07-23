'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, Translations, translations } from '../i18n/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('tr');

  useEffect(() => {
    // Check URL query parameters first
    const params = new URLSearchParams(window.location.search);
    const queryLang = params.get('lang') as Language;

    if (queryLang && ['tr', 'en', 'it'].includes(queryLang)) {
      setLanguageState(queryLang);
      localStorage.setItem('mk_partners_lang', queryLang);
      document.documentElement.lang = queryLang;
      return;
    }

    // Fallback to localStorage
    const savedLang = localStorage.getItem('mk_partners_lang') as Language;
    if (savedLang && ['tr', 'en', 'it'].includes(savedLang)) {
      setLanguageState(savedLang);
      document.documentElement.lang = savedLang;
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('mk_partners_lang', lang);
    document.documentElement.lang = lang;

    // Update URL query parameters
    const url = new URL(window.location.href);
    url.searchParams.set('lang', lang);
    window.history.pushState({}, '', url.toString());
  };

  const currentTranslations = translations[language] || translations.tr;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: currentTranslations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

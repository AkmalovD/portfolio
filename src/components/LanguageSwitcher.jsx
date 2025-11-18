import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'ru', label: 'RU' },
    { code: 'uz', label: 'UZ' },
  ];

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    localStorage.setItem('language', langCode);
  };

  return (
    <div className="flex items-center gap-2">
      {languages.map((lang) => (
        <motion.button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-md transition-all duration-300 ${
            i18n.language === lang.code
              ? 'bg-primary-500 text-dark-950'
              : 'bg-dark-800/50 text-dark-400 hover:bg-dark-700 hover:text-dark-200 border border-dark-700'
          }`}
          aria-label={`Switch to ${lang.label}`}
        >
          {lang.label}
        </motion.button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;


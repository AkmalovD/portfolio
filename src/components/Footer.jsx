import React from 'react';
import { FiHeart } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 text-center border-t border-dark-800">
      <div className="space-y-3">
        <p className="text-dark-500 text-sm flex items-center justify-center gap-2">
          {t('footer.designedBy')} <FiHeart className="text-primary-500 w-4 h-4" /> {t('footer.by')}
        </p>
        <p className="text-dark-600 text-xs">
          © {currentYear} {t('sidebar.name')}. {t('footer.rights')}
        </p>
        <p className="text-dark-600 text-xs">
          {t('footer.inspired')} <a href="https://brittanychiang.com/" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-400 transition-colors">brittanychiang.com</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;


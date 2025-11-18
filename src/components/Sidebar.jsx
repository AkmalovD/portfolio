import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import { label } from 'framer-motion/client';

const Sidebar = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'contact', label: t('nav.contact') },
  ];

  return (
    <motion.aside
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="hidden lg:flex fixed top-0 left-0 h-screen w-96 flex-col justify-between p-12 xl:p-16"
    >
      {/* Header Section */}
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl xl:text-5xl font-bold text-dark-50 mb-3">
            {t('sidebar.name')}
          </h1>
          <h2 className="text-lg xl:text-xl font-medium text-dark-200 mb-4">
            {t('sidebar.title')}
          </h2>
          <p className="text-dark-400 text-sm xl:text-base">
            {t('sidebar.tagline')}
          </p>
        </div>

        {/* Navigation */}
        <nav className="space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
              onSetActive={() => setActiveSection(item.id)}
              className="group flex items-center gap-4 py-3 cursor-pointer"
            >
              <span
                className={`h-px transition-all duration-300 ${
                  activeSection === item.id
                    ? 'w-16 bg-dark-50'
                    : 'w-8 bg-dark-600 group-hover:w-16 group-hover:bg-dark-300'
                }`}
              />
              <span
                className={`text-xs uppercase tracking-widest font-semibold transition-colors duration-300 ${
                  activeSection === item.id
                    ? 'text-dark-50'
                    : 'text-dark-500 group-hover:text-dark-200'
                }`}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Social Links & Language Switcher */}
      <div className="space-y-4">
        <LanguageSwitcher />
      </div>
    </motion.aside>
  );
};

export default Sidebar;


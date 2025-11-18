import React from 'react';
import { Link } from 'react-scroll';
import { FiArrowDown } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center py-20 lg:py-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-6"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-primary-400 font-mono text-sm sm:text-base"
        >
          {t('hero.greeting')}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold text-dark-50"
        >
          {t('hero.name')}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-bold text-dark-400"
        >
          {t('hero.tagline')}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-dark-400 text-base sm:text-lg max-w-xl leading-relaxed"
        >
          {t('hero.description')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-wrap gap-4 pt-6"
        >
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-50}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-primary-500 text-primary-400 rounded-lg font-medium hover:bg-primary-500/10 transition-all duration-300 cursor-pointer"
          >
            {t('hero.viewWork')}
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-50}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-dark-950 rounded-lg font-medium hover:bg-primary-400 transition-all duration-300 cursor-pointer"
          >
            {t('hero.getInTouch')}
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="hidden lg:flex absolute bottom-12 left-1/2 transform -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-dark-500 text-xs uppercase tracking-wider">{t('hero.scroll')}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FiArrowDown className="text-dark-500 w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;


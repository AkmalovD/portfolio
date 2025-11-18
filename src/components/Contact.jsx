import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiDownload  } from 'react-icons/fi';
import { FaTelegramPlane } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/AkmalovD', label: 'GitHub', username: '@AkmalovD' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/dilmurod-akmalov-a0445b302', label: 'LinkedIn', username: 'Dilmurod Akmlaov' },
    { icon: FaTelegramPlane, href: 'https://t.me/dilmurodakmalov', label: 'Telegram', username: '@dilmurodakmalov' },
  ];

  return (
    <section id="contact" ref={ref} className="py-20 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="text-primary-400 font-mono text-xl">04.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-dark-50">{t('contact.title')}</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <p className="text-dark-400 text-lg leading-relaxed">
            {t('contact.description')}
          </p>

          <motion.a
            href="mailto:your.email@example.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 mt-8 bg-transparent border-2 border-primary-500 text-primary-400 rounded-lg font-medium hover:bg-primary-500/10 transition-all duration-300"
          >
            <FiMail className="w-5 h-5" />
            {t('contact.sayHello')}
          </motion.a>

          {/* Social Links */}
          <div className="pt-12 space-y-4">
            <p className="text-dark-500 text-sm uppercase tracking-wider">
              {t('contact.findMe')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="group flex items-center gap-3 px-6 py-3 bg-dark-800/50 border border-dark-700 rounded-lg hover:border-primary-500/50 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5 text-dark-400 group-hover:text-primary-400 transition-colors duration-300" />
                  <div className="text-left">
                    <div className="text-dark-300 group-hover:text-primary-400 font-medium text-sm transition-colors duration-300">
                      {social.label}
                    </div>
                    <div className="text-dark-500 text-xs">{social.username}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;


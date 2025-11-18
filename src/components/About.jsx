import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technologies = [
    'JavaScript (ES6+)',
    'React',
    'TypeScript',
    'Node.js',
    'Tailwind CSS',
    'Next.js',
    'Git',
    'Framer Motion',
  ];

  return (
    <section id="about" ref={ref} className="py-20 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary-400 font-mono text-xl">01.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-dark-50">{t('about.title')}</h2>
          <div className="flex-1 h-px bg-dark-700 ml-4"></div>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-3 space-y-4 text-dark-400 leading-relaxed">
            <p>{t('about.paragraph1')}</p>
            <p>{t('about.paragraph2')}</p>
            <p>{t('about.paragraph3')}</p>

            <p className="text-dark-300">{t('about.techTitle')}</p>

            <ul className="grid grid-cols-2 gap-2 mt-6">
              {technologies.map((tech, index) => (
                <motion.li
                  key={tech}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-2 text-sm text-dark-400"
                >
                  <span className="text-primary-400">▹</span>
                  {tech}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Profile Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 relative group"
          >
            <div className="relative z-10 overflow-hidden rounded-lg">
              <div className="aspect-square bg-gradient-to-br from-primary-500/20 to-dark-700 rounded-lg flex items-center justify-center border border-dark-700 group-hover:border-primary-500/50 transition-colors duration-300">
                <div className="w-32 h-32 rounded-full bg-primary-500/10 border-2 border-primary-500/30 flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary-400">DA</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-primary-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="absolute top-6 left-6 w-full h-full border-2 border-primary-500/30 rounded-lg -z-10 group-hover:top-4 group-hover:left-4 transition-all duration-300"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;


import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const Experience = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      company: t('experience.companies.tech'),
      position: t('experience.positions.senior'),
      period: t('experience.periods.current'),
      url: 'https://example.com',
      description: t('experience.descriptions.senior', { returnObjects: true }),
      tags: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    },
    {
      company: t('experience.companies.agency'),
      position: t('experience.positions.frontend'),
      period: t('experience.periods.past1'),
      url: 'https://example.com',
      description: t('experience.descriptions.frontend', { returnObjects: true }),
      tags: ['JavaScript', 'Vue.js', 'SCSS'],
    },
    {
      company: t('experience.companies.startup'),
      position: t('experience.positions.junior'),
      period: t('experience.periods.past2'),
      url: 'https://example.com',
      description: t('experience.descriptions.junior', { returnObjects: true }),
      tags: ['HTML', 'CSS', 'JavaScript', 'Vue.js'],
    },
  ];

  return (
    <section id="experience" ref={ref} className="py-20 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary-400 font-mono text-xl">02.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-dark-50">{t('experience.title')}</h2>
          <div className="flex-1 h-px bg-dark-700 ml-4"></div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative bg-dark-800/30 border border-dark-700/50 rounded-lg p-6 sm:p-8 hover:bg-dark-800/50 hover:border-primary-500/30 transition-all duration-300">
                {/* Timeline dot */}
                <div className="absolute -left-2 top-8 w-4 h-4 bg-primary-500 rounded-full border-4 border-dark-900 group-hover:scale-125 transition-transform duration-300"></div>

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-dark-50 group-hover:text-primary-400 transition-colors duration-300">
                      {exp.position}
                    </h3>
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors duration-300"
                    >
                      {exp.company}
                      <FiExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <span className="text-dark-500 text-sm font-mono whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-3 text-dark-400 text-sm leading-relaxed">
                      <span className="text-primary-400 mt-1 flex-shrink-0">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono text-primary-400 bg-primary-500/10 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-dark-700"></div>
      </motion.div>
    </section>
  );
};

export default Experience;


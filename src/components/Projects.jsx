import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: t('projects.items.ecommerce.title'),
      description: t('projects.items.ecommerce.description'),
      tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true,
    },
    {
      title: t('projects.items.taskManager.title'),
      description: t('projects.items.taskManager.description'),
      tags: ['React', 'Firebase', 'Framer Motion', 'Zustand'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true,
    },
    {
      title: t('projects.items.weather.title'),
      description: t('projects.items.weather.description'),
      tags: ['React', 'OpenWeather API', 'Chart.js', 'CSS Modules'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false,
    },
    {
      title: t('projects.items.portfolioGen.title'),
      description: t('projects.items.portfolioGen.description'),
      tags: ['Next.js', 'Markdown', 'Tailwind CSS', 'Vercel'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false,
    },
    {
      title: t('projects.items.socialDash.title'),
      description: t('projects.items.socialDash.description'),
      tags: ['Vue.js', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false,
    },
    {
      title: t('projects.items.codeSnippet.title'),
      description: t('projects.items.codeSnippet.description'),
      tags: ['React', 'IndexedDB', 'Prism.js', 'PWA'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" ref={ref} className="py-20 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary-400 font-mono text-xl">03.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-dark-50">{t('projects.title')}</h2>
          <div className="flex-1 h-px bg-dark-700 ml-4"></div>
        </div>

        {/* Featured Projects */}
        <div className="space-y-20 mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="bg-dark-800/30 border border-dark-700/50 rounded-lg overflow-hidden hover:bg-dark-800/50 hover:border-primary-500/30 transition-all duration-300">
                <div className="p-6 sm:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <FiFolder className="w-10 h-10 text-primary-400" />
                      <span className="text-xs font-mono text-primary-400 bg-primary-500/10 px-3 py-1 rounded-full">
                        {t('projects.featured')}
                      </span>
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-dark-400 hover:text-primary-400 transition-colors duration-300"
                        aria-label="GitHub"
                      >
                        <FiGithub className="w-6 h-6" />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-dark-400 hover:text-primary-400 transition-colors duration-300"
                        aria-label="Live Demo"
                      >
                        <FiExternalLink className="w-6 h-6" />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold text-dark-50 mb-4 group-hover:text-primary-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-dark-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono text-dark-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="group bg-dark-800/30 border border-dark-700/50 rounded-lg p-6 hover:bg-dark-800/50 hover:border-primary-500/30 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <FiFolder className="w-10 h-10 text-primary-400" />
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark-400 hover:text-primary-400 transition-colors duration-300"
                    aria-label="GitHub"
                  >
                    <FiGithub className="w-5 h-5" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark-400 hover:text-primary-400 transition-colors duration-300"
                    aria-label="Live Demo"
                  >
                    <FiExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-dark-50 mb-3 group-hover:text-primary-400 transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-dark-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono text-dark-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;


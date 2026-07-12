import { motion } from 'framer-motion';
import Section from '../layout/Section';
import { projects } from '../../data/projects';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const LANG_COLORS = {
  JavaScript: '#f1e05a',
  Java: '#b07219',
  Python: '#3572a5',
};

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Things I have designed, built, deployed, and maintained."
    >
      <div className="proj-grid">
        {projects.map((p, i) => (
          <motion.article
            className="proj-card"
            key={p.id}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.09, ease: 'easeOut' }}
          >
            <div className="proj-media">
              <img src={p.image} alt={p.title} loading="lazy" />
              <span
                className="proj-lang-badge mono"
                style={{ '--lang': LANG_COLORS[p.language] || 'var(--text-faint)' }}
              >
                <span className="proj-lang-dot" />
                {p.language}
              </span>
            </div>

            <div className="proj-body">
              <div className="proj-title-row">
                <h3 className="proj-title">{p.title}</h3>
                <div className="proj-actions">
                  {p.links.map((l) => (
                    <a
                      key={l.url}
                      href={l.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.title}: ${l.text}`}
                      title={l.text}
                    >
                      <FaGithub />
                    </a>
                  ))}
                </div>
              </div>

              <p className="proj-desc">{p.description}</p>

              <ul className="proj-info">
                {p.info.map((line, j) => (
                  <li key={j}>{line}</li>
                ))}
              </ul>

              <div className="proj-footer">
                <div className="proj-tech">
                  {p.tech.map((t) => (
                    <span className="chip" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                {p.links.length > 0 && (
                  <div className="proj-links mono">
                    {p.links.map((l) => (
                      <a key={l.url} href={l.url} target="_blank" rel="noreferrer">
                        {l.text} <FaExternalLinkAlt aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

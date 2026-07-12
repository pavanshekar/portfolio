import { motion } from 'framer-motion';
import Section from '../layout/Section';
import { projects } from '../../data/projects';
import { FaGithub, FaExternalLinkAlt, FaFolderOpen } from 'react-icons/fa';
import './Projects.css';

const LANG_COLORS = {
  JavaScript: '#f1e05a',
  Java: '#b07219',
  Python: '#3572a5',
};

const featured = projects.slice(0, 3);
const rest = projects.slice(3);

function LangDot({ language }) {
  return (
    <span className="proj-lang mono">
      <span
        className="proj-lang-dot"
        style={{ background: LANG_COLORS[language] || 'var(--text-faint)' }}
      />
      {language}
    </span>
  );
}

function Links({ links }) {
  if (!links.length)
    return <span className="tok-comment mono">// academic project</span>;
  return (
    <span className="proj-links mono">
      {links.map((l) => (
        <a key={l.url} href={l.url} target="_blank" rel="noreferrer">
          <FaGithub aria-hidden="true" /> {l.text}
          <FaExternalLinkAlt className="proj-ext" aria-hidden="true" />
        </a>
      ))}
    </span>
  );
}

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="A selection of things I've designed, built, deployed, and maintained."
    >
      {/* Featured — alternating full-width rows */}
      <div className="proj-featured-list">
        {featured.map((p, i) => (
          <motion.article
            className={`proj-featured ${i % 2 ? 'flip' : ''}`}
            key={p.id}
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <a
              className="proj-featured-media"
              href={p.links[0]?.url || '#projects'}
              target={p.links[0] ? '_blank' : undefined}
              rel="noreferrer"
              tabIndex={-1}
              aria-hidden="true"
            >
              <img src={p.image} alt="" loading="lazy" />
              <span className="proj-featured-sheen" />
            </a>

            <div className="proj-featured-content">
              <span className="proj-eyebrow mono tok-fn">
                ★ featured / {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="proj-featured-title">{p.title}</h3>
              <p className="proj-featured-desc">{p.description}</p>
              <ul className="proj-featured-info">
                {p.info.map((line, j) => (
                  <li key={j}>{line}</li>
                ))}
              </ul>
              <div className="proj-tech">
                {p.tech.map((t) => (
                  <span className="chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <div className="proj-featured-footer">
                <LangDot language={p.language} />
                <Links links={p.links} />
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* The rest — compact hover-reveal cards */}
      <h3 className="proj-more-heading mono">
        <FaFolderOpen aria-hidden="true" /> more-projects/
      </h3>
      <div className="proj-grid">
        {rest.map((p, i) => (
          <motion.article
            className="proj-card"
            key={p.id}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
            whileHover={{ y: -8 }}
          >
            <div className="proj-card-media">
              <img src={p.image} alt={p.title} loading="lazy" />
              <div className="proj-card-overlay">
                <ul>
                  {p.info.slice(0, 2).map((line, j) => (
                    <li key={j}>{line}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="proj-card-body">
              <h4 className="proj-card-title">{p.title}</h4>
              <p className="proj-card-desc">{p.description}</p>
              <div className="proj-tech">
                {p.tech.slice(0, 4).map((t) => (
                  <span className="chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <div className="proj-card-footer">
                <LangDot language={p.language} />
                <Links links={p.links} />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

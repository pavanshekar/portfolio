import { motion } from 'framer-motion';
import Section from '../layout/Section';
import { experience } from '../../data/experience';
import { FaRedhat } from 'react-icons/fa';
import './Experience.css';

// Deterministic pseudo-hash so each entry gets a stable git-style sha
function sha(id) {
  let h = 0;
  for (const c of id) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return h.toString(16).padStart(7, '0').slice(0, 7);
}

export default function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="A commit history of my career — most recent at HEAD."
    >
      <div className="xp-timeline">
        {experience.map((job, i) => (
          <motion.article
            className="xp-entry"
            key={job.id}
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: i * 0.08, ease: 'easeOut' }}
          >
            <div className="xp-marker" aria-hidden="true">
              <span className={`xp-dot ${job.current ? 'current' : ''}`} />
              {i < experience.length - 1 && <span className="xp-line" />}
            </div>

            <div className="xp-card">
              <div className="xp-commit mono">
                <span className="tok-amber">commit {sha(job.id)}</span>
                {job.current && (
                  <span className="xp-head mono">(HEAD → main)</span>
                )}
              </div>

              <header className="xp-header">
                {job.logo ? (
                  <img className="xp-logo" src={job.logo} alt={job.company} />
                ) : (
                  <span className="xp-logo xp-logo-redhat" aria-label={job.company}>
                    <FaRedhat />
                  </span>
                )}
                <div>
                  <h3 className="xp-role">
                    {job.position} <span className="tok-punc">@</span>{' '}
                    <span className="xp-company">{job.company}</span>
                  </h3>
                  <div className="xp-meta mono">
                    {job.duration} · {job.location}
                  </div>
                </div>
              </header>

              <ul className="xp-list">
                {job.responsibilities.map((r, j) => (
                  <li key={j}>{r}</li>
                ))}
              </ul>

              <div className="xp-tech">
                {job.tech.map((t) => (
                  <span className="chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

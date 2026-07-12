import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../layout/Section';
import { experience } from '../../data/experience';
import { FaRedhat, FaChevronDown } from 'react-icons/fa';
import './Experience.css';

// Deterministic pseudo-hash so each entry gets a stable git-style sha
function sha(id) {
  let h = 0;
  for (const c of id) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return h.toString(16).padStart(7, '0').slice(0, 7);
}

function Logo({ job }) {
  if (job.logo) return <img className="xp-logo" src={job.logo} alt={job.company} />;
  if (job.id === 'redhat')
    return (
      <span className="xp-logo xp-logo-redhat" aria-label={job.company}>
        <FaRedhat />
      </span>
    );
  return (
    <span className="xp-logo xp-logo-initial mono" aria-label={job.company}>
      {job.company.charAt(0)}
    </span>
  );
}

function ExperienceEntry({ job, index, isLast }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.article
      className="xp-entry"
      initial={{ opacity: 0, x: -32 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
    >
      <div className="xp-marker" aria-hidden="true">
        <span className={`xp-dot ${job.current ? 'current' : ''}`} />
        {!isLast && <span className="xp-line" />}
      </div>

      <div className={`xp-card ${open ? 'open' : ''}`}>
        <div className="xp-commit mono">
          <span className="tok-amber">commit {sha(job.id)}</span>
          {job.current && <span className="xp-head mono">(HEAD → main)</span>}
        </div>

        <button
          type="button"
          className="xp-header"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={`xp-details-${job.id}`}
        >
          <Logo job={job} />
          <div className="xp-headings">
            <h3 className="xp-role">
              {job.position} <span className="tok-punc">@</span>{' '}
              <span className="xp-company">{job.company}</span>
            </h3>
            <div className="xp-meta mono">
              {job.duration} · {job.location}
            </div>
          </div>
          <span className={`xp-chevron ${open ? 'open' : ''}`} aria-hidden="true">
            <FaChevronDown />
          </span>
        </button>

        <div className="xp-tech">
          {job.tech.map((t) => (
            <span className="chip" key={t}>
              {t}
            </span>
          ))}
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={`xp-details-${job.id}`}
              className="xp-details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            >
              <ul className="xp-list">
                {job.responsibilities.map((r, j) => (
                  <li key={j}>{r}</li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          type="button"
          className="xp-toggle mono"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
        >
          {open ? '$ collapse --details' : '$ expand --details'}
        </button>
      </div>
    </motion.article>
  );
}

export default function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="A commit history of my career, most recent at HEAD. Expand any role for the full story."
    >
      <div className="xp-timeline">
        {experience.map((job, i) => (
          <ExperienceEntry
            key={job.id}
            job={job}
            index={i}
            isLast={i === experience.length - 1}
          />
        ))}
      </div>
    </Section>
  );
}

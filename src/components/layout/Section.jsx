import { motion } from 'framer-motion';
import './Section.css';

/**
 * Shared section wrapper: anchor id + animated heading.
 */
export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <h2 className="section-heading mono">
            <span className="tok-punc">{'<'}</span>
            <span className="tok-fn">{title}</span>
            <span className="tok-punc">{' />'}</span>
          </h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
          <div className="section-rule" aria-hidden="true" />
        </motion.div>
        {children}
      </div>
    </section>
  );
}

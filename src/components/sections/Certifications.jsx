import { motion } from 'framer-motion';
import Section from '../layout/Section';
import { certifications } from '../../data/certifications';
import './Certifications.css';

export default function Certifications() {
  return (
    <Section
      id="certifications"
      title="Certifications"
      subtitle="Independently verified credentials. Click through to view on Credly."
    >
      <div className="cert-grid">
        {certifications.map((cert, i) => (
          <motion.a
            className="cert-card"
            key={cert.id}
            href={cert.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <img className="cert-badge" src={cert.image} alt={cert.title} loading="lazy" />
            <div>
              <div className="cert-title">{cert.title}</div>
              <div className="cert-issuer mono">{cert.issuer}</div>
              <div className="cert-verify mono">
                <span className="tok-fn">✓ verified</span> · view on Credly ↗
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}

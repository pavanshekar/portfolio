import { motion } from 'framer-motion';
import Section from '../layout/Section';
import { education } from '../../data/education';
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import './Education.css';

export default function Education() {
  return (
    <Section
      id="education"
      title="Education"
      subtitle="Where I learned the fundamentals, and then kept going."
    >
      <div className="edu-grid">
        {education.map((school, i) => (
          <motion.div
            className="edu-card"
            key={school.id}
            initial={{ opacity: 0, y: 40, rotateX: 6 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.12, ease: 'easeOut' }}
            whileHover={{ y: -6 }}
          >
            <div className="edu-card-glow" aria-hidden="true" />
            <div className="edu-top">
              <div className="edu-logo-ring">
                <img src={school.logo} alt={school.university} />
              </div>
              <div className="edu-degree-badge mono">
                <FaGraduationCap aria-hidden="true" />
                {school.id === 'neu' ? 'M.S.' : 'B.E.'}
              </div>
            </div>

            <h3 className="edu-name">{school.university}</h3>
            <div className="edu-degree">{school.degree}</div>

            <div className="edu-meta mono">
              <span>
                <FaMapMarkerAlt aria-hidden="true" /> {school.location}
              </span>
              <span>
                <FaCalendarAlt aria-hidden="true" /> {school.completionDate}
              </span>
            </div>

            <div className="edu-coursework">
              <span className="edu-coursework-label mono tok-comment">
                # coursework
              </span>
              <div className="edu-chips">
                {school.coursework.map((c) => (
                  <span className="chip" key={c}>
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

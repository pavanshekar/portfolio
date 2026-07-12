import { motion } from 'framer-motion';
import Section from '../layout/Section';
import { about, profile } from '../../data/profile';
import profilePic from '../../assets/profile.jpg';
import {
  FaCodeBranch,
  FaTag,
  FaRobot,
  FaLaptopCode,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import './About.css';

const HIGHLIGHT_ICONS = [FaCodeBranch, FaTag, FaRobot, FaLaptopCode];

export default function About() {
  return (
    <Section
      id="about"
      title="About"
      subtitle="The person behind the terminal."
    >
      <div className="about-grid">
        <motion.div
          className="about-photo-col"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="about-photo-frame">
            <div className="about-photo-ring" aria-hidden="true" />
            <img className="about-photo" src={profilePic} alt={profile.name} />
            <div className="about-photo-badge mono">
              <span className="about-status-dot" aria-hidden="true" />
              open to collaborate
            </div>
          </div>
          <div className="about-photo-meta mono">
            <span>
              <FaMapMarkerAlt aria-hidden="true" /> {profile.location}
            </span>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        >
          <p className="about-intro">{about.intro}</p>
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </motion.div>
      </div>

      <div className="about-highlights">
        {about.highlights.map((h, i) => {
          const Icon = HIGHLIGHT_ICONS[i % HIGHLIGHT_ICONS.length];
          return (
            <motion.div
              className="about-card"
              key={h.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              whileHover={{ y: -5 }}
            >
              <span className="about-card-icon" aria-hidden="true">
                <Icon />
              </span>
              <div>
                <div className="about-card-label mono"># {h.label}</div>
                <div className="about-card-value">{h.value}</div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

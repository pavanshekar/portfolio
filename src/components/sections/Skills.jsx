import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../layout/Section';
import { skillGroups } from '../../data/skills';
import {
  SiPython, SiJavascript, SiTypescript, SiRuby, SiHtml5, SiCss, SiReact,
  SiRubyonrails, SiNodedotjs, SiExpress, SiSpringboot, SiDjango, SiBootstrap,
  SiPytest, SiJest, SiMocha, SiChai, SiJunit5, SiJasmine, SiPostgresql,
  SiMysql, SiMongodb, SiRedis, SiApachekafka, SiRabbitmq, SiElasticsearch,
  SiHibernate, SiSequelize, SiGooglecloud, SiDocker, SiGithubactions,
  SiTerraform, SiPulumi, SiPacker, SiGit, SiScikitlearn, SiOpencv, SiNumpy,
  SiPandas, SiModelcontextprotocol,
} from 'react-icons/si';
import {
  FaJava, FaAngular, FaTheaterMasks, FaFlask, FaVial, FaAws, FaBrain, FaRobot,
} from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';
import './Skills.css';

const ICONS = {
  SiPython, SiJavascript, SiTypescript, SiRuby, SiHtml5, SiCss, SiReact,
  SiRubyonrails, SiNodedotjs, SiExpress, SiSpringboot, SiDjango, SiBootstrap,
  SiPytest, SiJest, SiMocha, SiChai, SiJunit5, SiJasmine, SiPostgresql,
  SiMysql, SiMongodb, SiRedis, SiApachekafka, SiRabbitmq, SiElasticsearch,
  SiHibernate, SiSequelize, SiGooglecloud, SiDocker, SiGithubactions,
  SiTerraform, SiPulumi, SiPacker, SiGit, SiScikitlearn, SiOpencv, SiNumpy,
  SiPandas, SiModelcontextprotocol,
  FaJava, FaAngular, FaTheaterMasks, FaFlask, FaVial, FaAws, FaBrain, FaRobot,
  VscAzure,
};

export default function Skills() {
  const [active, setActive] = useState('all');

  const groups =
    active === 'all'
      ? skillGroups
      : skillGroups.filter((g) => g.key === active);
  const visible = groups.flatMap((g) =>
    g.items.map((item) => ({ ...item, group: g.key }))
  );

  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="The tools I reach for, from frontend frameworks to cloud infrastructure and AI tooling."
    >
      <div className="skills-tabs mono" role="tablist" aria-label="Skill categories">
        <button
          role="tab"
          aria-selected={active === 'all'}
          className={`skills-tab ${active === 'all' ? 'active' : ''}`}
          onClick={() => setActive('all')}
        >
          --all
        </button>
        {skillGroups.map((g) => (
          <button
            key={g.key}
            role="tab"
            aria-selected={active === g.key}
            className={`skills-tab ${active === g.key ? 'active' : ''}`}
            onClick={() => setActive(g.key)}
          >
            {g.label}
          </button>
        ))}
      </div>

      <motion.div layout className="skills-grid">
        <AnimatePresence mode="popLayout">
          {visible.map((skill, i) => {
            const Icon = ICONS[skill.icon];
            return (
              <motion.div
                layout
                key={skill.group + skill.name}
                className="skill-tile"
                style={{ '--brand': skill.color }}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.28, delay: Math.min(i * 0.015, 0.4) }}
                whileHover={{ y: -6, scale: 1.04 }}
              >
                <span className="skill-icon" aria-hidden="true">
                  {Icon && <Icon />}
                </span>
                <span className="skill-name">{skill.name}</span>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}

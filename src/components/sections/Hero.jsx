import { useMemo } from 'react';
import TerminalWindow from '../terminal/TerminalWindow';
import Cursor from '../terminal/Cursor';
import { useTypewriter } from '../../hooks/useTypewriter';
import { profile } from '../../data/profile';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import './Hero.css';

export default function Hero() {
  const lines = useMemo(
    () => [
      { kind: 'cmd', text: 'whoami', delayAfter: 250 },
      { kind: 'out', text: profile.name, delayAfter: 400 },
      { kind: 'cmd', text: 'cat role.txt', delayAfter: 250 },
      {
        kind: 'out',
        text: `${profile.role} @ ${profile.company} · ${profile.location}`,
        delayAfter: 400,
      },
      { kind: 'cmd', text: 'grep -r "passion" .', delayAfter: 250 },
      {
        kind: 'out',
        text: 'open source · full stack development · cloud · AI',
        delayAfter: 500,
      },
      { kind: 'cmd', text: 'ls ./links', delayAfter: 200 },
      { kind: 'links', text: '' },
    ],
    []
  );

  const { rendered, done, activeLine } = useTypewriter(lines, {
    charDelay: 32,
    lineDelay: 320,
  });

  return (
    <div className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid-pattern" />
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
      </div>
      <div className="container hero-inner">
        <TerminalWindow title={`pavan@portfolio: ~`} className="hero-terminal">
          {lines.map((line, i) => {
            const text = rendered[i];
            if (text === null) return null;
            const isTyping = !done && i === activeLine;

            if (line.kind === 'links') {
              return (
                <div className="hero-links" key={i}>
                  <a href={profile.resume} target="_blank" rel="noreferrer">
                    resume.pdf
                  </a>
                  <a href={profile.github} target="_blank" rel="noreferrer">
                    github/
                  </a>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer">
                    linkedin/
                  </a>
                  <a href={`mailto:${profile.email}`}>email.txt</a>
                  {isTyping && <Cursor />}
                </div>
              );
            }

            return (
              <div key={i} className={`hero-line hero-${line.kind}`}>
                {line.kind === 'cmd' && <span className="ps1">$ </span>}
                <span>{text}</span>
                {isTyping && <Cursor />}
              </div>
            );
          })}
          {done && (
            <div className="hero-line hero-cmd">
              <span className="ps1">$ </span>
              <Cursor />
            </div>
          )}
        </TerminalWindow>

        <div className="hero-cta">
          <h1 className="hero-title">
            Full Stack Engineer building{' '}
            <span className="hero-accent">open source</span> at Red Hat.
          </h1>
          <p className="hero-sub">{profile.tagline}</p>
          <div className="hero-socials">
            <a
              className="btn btn-primary"
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
            >
              <FaFileAlt aria-hidden="true" /> resume
            </a>
            <a
              className="hero-social"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              title="GitHub"
            >
              <FaGithub />
              <span className="mono">github</span>
            </a>
            <a
              className="hero-social"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              title="LinkedIn"
            >
              <FaLinkedin />
              <span className="mono">linkedin</span>
            </a>
            <a
              className="hero-social"
              href={`mailto:${profile.email}`}
              aria-label="Send email"
              title="Email"
            >
              <FaEnvelope />
              <span className="mono">email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../features/theme/themeSlice';
import { openPalette } from '../../features/palette/paletteSlice';
import './Navbar.css';

const TABS = [
  { id: 'about', label: 'about.md' },
  { id: 'experience', label: 'experience.log' },
  { id: 'education', label: 'education.yml' },
  { id: 'skills', label: 'skills.json' },
  { id: 'projects', label: 'projects/' },
  { id: 'github', label: 'github.api' },
  { id: 'certifications', label: 'certs.lock' },
  { id: 'contact', label: 'contact.sh' },
];

export default function Navbar() {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);
  const [active, setActive] = useState('');
  const isMac =
    typeof navigator !== 'undefined' && /Mac/i.test(navigator.platform);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );
    TABS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="navbar">
      <a className="navbar-logo mono" href="#top" aria-label="Home">
        <span className="tok-fn">pavan</span>
        <span className="tok-punc">@</span>
        <span className="tok-key">portfolio</span>
        <span className="nav-cursor" aria-hidden="true">▊</span>
      </a>

      <nav className="navbar-tabs" aria-label="Sections">
        {TABS.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`navbar-tab mono ${active === id ? 'active' : ''}`}
          >
            {label}
          </a>
        ))}
      </nav>

      <div className="navbar-actions">
        <button
          className="nav-btn mono"
          onClick={() => dispatch(openPalette())}
          aria-label="Open command palette"
          title="Command palette"
        >
          {isMac ? '⌘K' : 'Ctrl K'}
        </button>
        <button
          className="nav-btn"
          onClick={() => dispatch(toggleTheme())}
          aria-label={`Switch to ${mode === 'dark' ? 'light' : 'dark'} theme`}
          title="Toggle theme"
        >
          {mode === 'dark' ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}

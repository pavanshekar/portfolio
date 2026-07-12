import { useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closePalette, togglePalette } from '../../features/palette/paletteSlice';
import { toggleTheme } from '../../features/theme/themeSlice';
import { profile } from '../../data/profile';
import './CommandPalette.css';

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function CommandPalette() {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.palette.open);
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(0);
  const inputRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const commands = useMemo(
    () => [
      { id: 'go-about', label: 'cd ~/about', hint: 'Go to About', run: () => scrollTo('about') },
      { id: 'go-experience', label: 'tail -f experience.log', hint: 'Go to Experience', run: () => scrollTo('experience') },
      { id: 'go-education', label: 'cat education.yml', hint: 'Go to Education', run: () => scrollTo('education') },
      { id: 'go-skills', label: 'jq . skills.json', hint: 'Go to Skills', run: () => scrollTo('skills') },
      { id: 'go-projects', label: 'ls ~/projects', hint: 'Go to Projects', run: () => scrollTo('projects') },
      { id: 'go-github', label: 'git fetch origin', hint: 'Go to GitHub activity', run: () => scrollTo('github') },
      { id: 'go-certs', label: 'gpg --verify certs', hint: 'Go to Certifications', run: () => scrollTo('certifications') },
      { id: 'go-contact', label: './contact.sh', hint: 'Go to Contact', run: () => scrollTo('contact') },
      { id: 'theme', label: 'toggle --theme', hint: 'Switch dark/light mode', run: () => dispatch(toggleTheme()), keep: true },
      { id: 'resume', label: 'open resume.pdf', hint: 'View resume', run: () => window.open(profile.resume, '_blank') },
      { id: 'gh', label: 'open github.com', hint: 'GitHub profile', run: () => window.open(profile.github, '_blank') },
      { id: 'li', label: 'open linkedin.com', hint: 'LinkedIn profile', run: () => window.open(profile.linkedin, '_blank') },
      {
        id: 'email',
        label: 'pbcopy < email.txt',
        hint: 'Copy email address',
        keep: true,
        run: () => {
          navigator.clipboard?.writeText(profile.email);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        },
      },
    ],
    [dispatch]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter(
      (c) =>
        c.label.toLowerCase().includes(q) || c.hint.toLowerCase().includes(q)
    );
  }, [commands, query]);

  // Global shortcut
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        dispatch(togglePalette());
      } else if (e.key === 'Escape') {
        dispatch(closePalette());
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [dispatch]);

  // Reset + focus on open
  useEffect(() => {
    if (open) {
      setQuery('');
      setSelected(0);
      // wait for render
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  useEffect(() => setSelected(0), [query]);

  if (!open) return null;

  const execute = (cmd) => {
    cmd.run();
    if (!cmd.keep) dispatch(closePalette());
  };

  const onInputKey = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelected((s) => Math.min(s + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelected((s) => Math.max(s - 1, 0));
    } else if (e.key === 'Enter' && filtered[selected]) {
      execute(filtered[selected]);
    }
  };

  return (
    <div
      className="palette-backdrop"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) dispatch(closePalette());
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
    >
      <div className="palette mono">
        <div className="palette-input-row">
          <span className="ps1">$</span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onInputKey}
            placeholder="type a command or search…"
            aria-label="Search commands"
          />
          <kbd>esc</kbd>
        </div>
        <ul className="palette-list" role="listbox">
          {filtered.length === 0 && (
            <li className="palette-empty tok-comment">
              command not found: {query}
            </li>
          )}
          {filtered.map((cmd, i) => (
            <li
              key={cmd.id}
              role="option"
              aria-selected={i === selected}
              className={`palette-item ${i === selected ? 'selected' : ''}`}
              onMouseEnter={() => setSelected(i)}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => execute(cmd)}
            >
              <span className="palette-label">
                {cmd.id === 'email' && copied ? '✓ copied to clipboard' : cmd.label}
              </span>
              <span className="palette-hint">{cmd.hint}</span>
            </li>
          ))}
        </ul>
        <div className="palette-footer">
          <span>↑↓ navigate</span>
          <span>↵ run</span>
          <span>esc close</span>
        </div>
      </div>
    </div>
  );
}

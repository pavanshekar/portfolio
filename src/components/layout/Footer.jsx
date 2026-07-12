import { profile } from '../../data/profile';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer mono">
      <div className="footer-left">
        <span className="footer-branch" title="branch">
          <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25z" />
          </svg>
          main
        </span>
        <span className="footer-item">© {year} {profile.name}</span>
      </div>
      <div className="footer-right">
        <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <span className="footer-item footer-built">Built with React + Vite + Redux</span>
        <a href="#top" className="footer-top" aria-label="Back to top">↑ top</a>
      </div>
    </footer>
  );
}

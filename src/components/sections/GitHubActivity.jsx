import { motion } from 'framer-motion';
import Section from '../layout/Section';
import { useGetReposQuery } from '../../features/github/githubApi';
import { profile } from '../../data/profile';
import './GitHubActivity.css';

const LANG_COLORS = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Java: '#b07219',
  Python: '#3572a5',
  Ruby: '#701516',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Shell: '#89e051',
};

function timeAgo(dateStr) {
  const days = Math.floor((Date.now() - new Date(dateStr)) / 86400000);
  if (days < 1) return 'today';
  if (days < 30) return `${days}d ago`;
  if (days < 365) return `${Math.floor(days / 30)}mo ago`;
  return `${Math.floor(days / 365)}y ago`;
}

export default function GitHubActivity() {
  const { data: repos, isLoading, isError } = useGetReposQuery(
    profile.githubUsername
  );

  return (
    <Section
      id="github"
      title="GitHub"
      subtitle="Fetched live from the GitHub API — my most active public repositories."
    >
      {isLoading && (
        <div className="gh-status mono">
          <span className="gh-spinner" aria-hidden="true" />
          <span className="tok-comment">
            $ git fetch https://api.github.com/users/{profile.githubUsername} …
          </span>
        </div>
      )}

      {isError && (
        <div className="gh-status mono">
          <span className="gh-error">
            fatal: unable to access 'api.github.com' (rate limited or offline)
          </span>
          <a href={profile.github} target="_blank" rel="noreferrer">
            → view my profile on github.com instead
          </a>
        </div>
      )}

      {repos && (
        <>
          <div className="gh-grid">
            {repos.map((repo, i) => (
              <motion.a
                className="gh-card"
                key={repo.id}
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.07 }}
                whileHover={{ y: -5 }}
              >
                <div className="gh-name mono">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Z" />
                  </svg>
                  {repo.name}
                </div>
                {repo.description && (
                  <p className="gh-desc">{repo.description}</p>
                )}
                <div className="gh-meta mono">
                  {repo.language && (
                    <span className="gh-lang">
                      <span
                        className="gh-lang-dot"
                        style={{
                          background:
                            LANG_COLORS[repo.language] || 'var(--text-faint)',
                        }}
                      />
                      {repo.language}
                    </span>
                  )}
                  {repo.stars > 0 && <span>★ {repo.stars}</span>}
                  <span className="gh-pushed">{timeAgo(repo.pushedAt)}</span>
                </div>
              </motion.a>
            ))}
          </div>
          <div className="gh-more mono">
            <a href={profile.github} target="_blank" rel="noreferrer">
              $ open github.com/{profile.githubUsername} → all repositories ↗
            </a>
          </div>
        </>
      )}
    </Section>
  );
}

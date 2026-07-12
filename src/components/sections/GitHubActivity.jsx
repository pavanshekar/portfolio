import { motion } from 'framer-motion';
import Section from '../layout/Section';
import { useGetContributionsQuery } from '../../features/github/githubApi';
import { profile } from '../../data/profile';
import { FaGithub, FaFire, FaCalendarCheck, FaStar } from 'react-icons/fa';
import './GitHubActivity.css';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function buildWeeks(days) {
  if (!days.length) return { weeks: [], monthLabels: [] };
  // Pad the first week so every column starts on Sunday
  const firstDay = new Date(days[0].date + 'T00:00:00').getDay();
  const padded = [...Array(firstDay).fill(null), ...days];
  const weeks = [];
  for (let i = 0; i < padded.length; i += 7) {
    weeks.push(padded.slice(i, i + 7));
  }

  const monthLabels = [];
  let lastMonth = -1;
  weeks.forEach((week, w) => {
    const first = week.find(Boolean);
    if (!first) return;
    const month = new Date(first.date + 'T00:00:00').getMonth();
    if (month !== lastMonth) {
      monthLabels.push({ week: w, label: MONTHS[month] });
      lastMonth = month;
    }
  });
  return { weeks, monthLabels: monthLabels.slice(1) };
}

function formatDate(dateStr) {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function GitHubActivity() {
  const { data, isLoading, isError } = useGetContributionsQuery(
    profile.githubUsername
  );

  return (
    <Section
      id="github"
      title="GitHub"
      subtitle="My contribution activity over the last year, fetched live from GitHub."
    >
      {isLoading && (
        <div className="gh-status mono">
          <span className="gh-spinner" aria-hidden="true" />
          <span className="tok-comment">
            $ git fetch contributions --user={profile.githubUsername} ...
          </span>
        </div>
      )}

      {isError && (
        <div className="gh-status mono">
          <span className="gh-error">
            fatal: unable to fetch contribution data right now
          </span>
          <a href={profile.github} target="_blank" rel="noreferrer">
            view my activity on github.com instead
          </a>
        </div>
      )}

      {data && (
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <div className="gh-stats">
            <div className="gh-stat">
              <span className="gh-stat-icon" aria-hidden="true">
                <FaCalendarCheck />
              </span>
              <div>
                <div className="gh-stat-value">{data.total.toLocaleString()}</div>
                <div className="gh-stat-label">contributions in the last year</div>
              </div>
            </div>
            <div className="gh-stat">
              <span className="gh-stat-icon" aria-hidden="true">
                <FaFire />
              </span>
              <div>
                <div className="gh-stat-value">{data.longestStreak} days</div>
                <div className="gh-stat-label">longest streak</div>
              </div>
            </div>
            <div className="gh-stat">
              <span className="gh-stat-icon" aria-hidden="true">
                <FaStar />
              </span>
              <div>
                <div className="gh-stat-value">
                  {data.bestDay.count} contributions
                </div>
                <div className="gh-stat-label">
                  busiest day
                  {data.bestDay.date ? ` (${formatDate(data.bestDay.date)})` : ''}
                </div>
              </div>
            </div>
          </div>

          <Calendar days={data.days} />

          <a
            className="gh-profile-link mono"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub aria-hidden="true" /> view full profile on github.com/
            {profile.githubUsername}
          </a>
        </motion.div>
      )}
    </Section>
  );
}

function Calendar({ days }) {
  const { weeks, monthLabels } = buildWeeks(days);

  return (
    <div className="gh-calendar-wrap window">
      <div className="window-bar">
        <div className="window-dots">
          <span />
          <span />
          <span />
        </div>
        <div className="window-title">contributions.log</div>
      </div>
      <div className="gh-calendar-scroll">
        <div className="gh-calendar">
          <div className="gh-months mono" aria-hidden="true">
            {monthLabels.map((m) => (
              <span key={m.week} style={{ '--week': m.week }}>
                {m.label}
              </span>
            ))}
          </div>
          <div
            className="gh-cells"
            role="img"
            aria-label="GitHub contribution calendar for the last year"
          >
            {weeks.map((week, w) => (
              <div className="gh-week" key={w}>
                {week.map((day, d) =>
                  day ? (
                    <span
                      key={day.date}
                      className="gh-cell"
                      data-level={day.level}
                      title={`${day.count} contribution${day.count === 1 ? '' : 's'} on ${formatDate(day.date)}`}
                    />
                  ) : (
                    <span key={`pad-${w}-${d}`} className="gh-cell gh-cell-empty" />
                  )
                )}
              </div>
            ))}
          </div>
          <div className="gh-legend mono" aria-hidden="true">
            <span>less</span>
            {[0, 1, 2, 3, 4].map((level) => (
              <span className="gh-cell" data-level={level} key={level} />
            ))}
            <span>more</span>
          </div>
        </div>
      </div>
    </div>
  );
}

# Pavan Soma Shekar Portfolio

Terminal/IDE-themed personal portfolio, live at **https://pavanshekar.github.io/portfolio**.

## Stack

- **React 18 + Vite**: fast dev server and builds
- **Redux Toolkit**: theme state, command palette state, and RTK Query for live GitHub data
- **Plain CSS with custom properties**: dark/light IDE themes, no CSS framework
- **EmailJS**: contact form delivery

## Features

- Typing-terminal hero (`$ whoami`) with blinking cursor
- ⌘K / Ctrl+K command palette for navigation and actions
- Editor tab-bar navigation with active-section highlighting
- `git log`-style experience timeline, `skills.json` skills block, repo-card projects
- Live GitHub repositories via the GitHub API (graceful rate-limit fallback)
- Dark/light theme toggle persisted in localStorage
- Scroll-reveal animations that respect `prefers-reduced-motion`

## Development

```bash
npm install
cp .env.example .env   # fill in EmailJS credentials
npm run dev            # http://localhost:5173/portfolio/
```

## Deploy

Deploys the `dist/` build to the `gh-pages` branch:

```bash
npm run deploy
```

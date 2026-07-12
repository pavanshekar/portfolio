export const profile = {
  name: 'Pavan Soma Shekar',
  role: 'Full Stack Engineer',
  company: 'Red Hat',
  location: 'Raleigh, NC',
  email: 'pavansomashekar97@gmail.com',
  phone: '+1 (857) 869-1951',
  github: 'https://github.com/pavanshekar',
  githubUsername: 'pavanshekar',
  linkedin: 'https://www.linkedin.com/in/pavansshekar/',
  resume: `${import.meta.env.BASE_URL}resume.pdf`,
  tagline:
    'I design, build, and ship features for Foreman & Katello — the open source engine behind Red Hat Satellite — working across React frontends, Rails backends, cloud infrastructure, and AI-powered developer tooling.',
};

export const about = {
  intro:
    "I'm a Full Stack Engineer at Red Hat in Raleigh, where I contribute upstream to Foreman and Katello — the open source projects behind Red Hat Satellite. I own full-stack features end to end: React frontends, Ruby on Rails backends, database migrations, and the automated tests that keep it all honest.",
  paragraphs: [
    'Before Red Hat, I earned my Master of Science in Information Systems from Northeastern University, and built products at OnSolve and Infosys — from React platform UIs to Angular apps, MEAN-stack systems, and even a YOLOv3 computer-vision model for smart classrooms.',
    'Lately I have been deep in the AI-tooling space: I built a RAG-based chatbot POC for Red Hat Satellite, contribute to Foreman MCP server workflows, and wrote an AI quickstart guide to help developers adopt AI tools effectively. I also serve as release owner for Katello and led a Playwright E2E testing initiative to shift quality left.',
    'I care about open source, developer experience, and shipping software that is tested, documented, and maintainable.',
  ],
  highlights: [
    { label: 'Open source', value: 'Foreman / Katello upstream contributor' },
    { label: 'Release owner', value: 'Katello 4.17.0 → 4.18.1' },
    { label: 'AI enablement', value: 'RAG chatbot POC · MCP workflows' },
    { label: 'Experience', value: '5+ years full-stack engineering' },
  ],
};

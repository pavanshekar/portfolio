import onsolve from '../assets/org/onsolve.png';
import infosys from '../assets/org/infosys.png';
import speckbit from '../assets/org/speckbit.jpeg';

export const experience = [
  {
    id: 'redhat',
    position: 'Associate Software Engineer',
    company: 'Red Hat',
    location: 'Raleigh, NC',
    duration: 'Nov 2024 - Present',
    current: true,
    logo: null, // rendered as the Red Hat icon in Experience.jsx
    tech: ['React', 'Ruby on Rails', 'PostgreSQL', 'pytest', 'Playwright'],
    responsibilities: [
      'Delivered upstream contributions across Foreman/Katello, owning full-stack features, bug fixes, and maintainability improvements across React, Ruby on Rails, databases, and automated tests, with downstream impact on Red Hat Satellite',
      'Enhanced Flatpak, container image, repository, subscription, content view, and host workflows by delivering UI, backend, database, and test changes that improved usability, reliability, and regression coverage',
      'Improved performance and upgrade reliability through database-backed workflow improvements, bulk SQL processing, parallelized migration handling, and multi-threaded execution fixes',
      'Modernized quality engineering by contributing to Robottelo/Airgun using pytest, stabilizing frontend regression coverage, and developing a Playwright E2E testing POC to enable shift-left testing',
      'Served as release owner for Katello 4.17.0, 4.17.1, 4.18.0, and 4.18.1, authoring documentation and release notes, reviewing code, and delivering demos to stakeholders, maintainers, QE, and open-source contributors',
      'Advanced AI enablement by building a RAG-based chatbot POC for Red Hat Satellite, contributing to Foreman MCP server workflows, and creating an AI quickstart tooling guide',
    ],
  },
  {
    id: 'weup',
    position: 'Full Stack Developer',
    company: 'WeUp',
    location: 'Los Angeles, CA (Remote)',
    duration: 'Jul 2024 - Nov 2024',
    logo: null, // rendered as an initial badge in Experience.jsx
    tech: ['React.js', 'Redux', 'Python', 'FastAPI', 'WebSockets'],
    responsibilities: [
      'Developed and maintained full-stack components for the platform, using React.js for the frontend and Python FastAPI for the backend, ensuring seamless integration and efficient performance',
      'Designed and optimized database schemas to manage user profiles, content, and transactions, while implementing real-time communication features using WebSockets for live updates and notifications',
      'Improved platform performance and scalability by implementing caching mechanisms, optimizing APIs, and ensuring efficient data retrieval through indexing strategies',
    ],
  },
  {
    id: 'onsolve',
    position: 'Software Engineer',
    company: 'OnSolve',
    location: 'Bengaluru, India',
    duration: 'Apr 2022 - Aug 2022',
    logo: onsolve,
    tech: ['React.js', 'Redux', 'Spring Boot', 'Jest', 'Docker'],
    responsibilities: [
      'Created the UI for the OnSolve platform, focusing on responsiveness and user experience using React.js',
      "Boosted the platform's performance by 15% by integrating 3 front-end modules and utilizing React.js for lazy loading and code splitting and Redux for state management and memoization",
      'Integrated Spring Boot backend with React.js front-end, enhancing API communication and boosting efficiency by 20%',
      'Implemented unit tests with Jest and Enzyme for frontend, and JUnit for backend, achieving 90%+ code coverage',
      'Supported 2 OnSolve.UI releases via CI/CD with GitHub Actions, seamlessly integrating Docker for efficient delivery in containerized environments',
    ],
  },
  {
    id: 'infosys',
    position: 'Senior Systems Engineer',
    company: 'Infosys',
    location: 'Bengaluru, India',
    duration: 'Sep 2019 - Apr 2022',
    logo: infosys,
    tech: ['Angular', 'Node.js', 'MEAN', 'OpenCV', 'Protractor'],
    responsibilities: [
      'Developed 2 Angular-based web applications with dynamic data binding and optimized API integration, improving backend performance with Node.js/Express.js and reducing load times by 25%',
      'Formulated a comprehensive testing strategy utilizing Protractor, Jasmine, and Karma frameworks, achieving 90% test coverage for end-to-end and unit testing',
      'Spearheaded the InfyMansions project, developing full-stack modules with MEAN stack technologies and integrating Material UI',
      'Engineered a high-accuracy YOLOv3 chair detection model for Smart Classroom using OpenCV and a MEAN stack-based dashboard',
      'Conducted workshops in JavaScript, Angular, and React.js for 200+ employees and mentored 10 new hires',
    ],
  },
  {
    id: 'speckbit',
    position: 'Machine Learning Research Intern',
    company: 'Speckbit Exploratories',
    location: 'Bengaluru, India',
    duration: 'Jan 2019 - Mar 2019',
    logo: speckbit,
    tech: ['Python', 'scikit-learn', 'Regression'],
    responsibilities: [
      'Devised a Python-based Air Quality Prediction model leveraging the Air Quality Dataset from the UCI Machine Learning repository',
      'Engineered a machine learning suite that accurately predicts urban benzene levels and temperature variations',
      'Utilized Linear, Lasso and Decision Tree Regression, achieving a 99.6% accuracy in urban air quality monitoring',
    ],
  },
];

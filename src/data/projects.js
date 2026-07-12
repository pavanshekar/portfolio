import eduAssign from '../assets/projects/eduAssign.png';
import foodzilla from '../assets/projects/foodzilla.jpg';
import flexiquery from '../assets/projects/flexiquery.jpeg';
import eventManagementSystem from '../assets/projects/eventmanagementsystem.jpg';
import inventoryHub from '../assets/projects/inventoryHub.png';
import banking from '../assets/projects/banking.jpg';
import face from '../assets/projects/face.jpg';
import air from '../assets/projects/air.jpg';

export const projects = [
  {
    id: 'eduassign',
    title: 'EduAssign',
    language: 'JavaScript',
    tech: ['Node.js', 'Express.js', 'MySQL', 'Sequelize', 'Terraform', 'AWS', 'GCP'],
    image: eduAssign,
    description:
      'Cloud-native assignment management platform with fully automated AWS infrastructure.',
    info: [
      'Developed EduAssign using Node.js, Express.js, and Sequelize for MySQL, enhancing assignment management by 40%',
      'Utilized GitHub Actions for CI/CD, Mocha/Chai for integration testing, and Packer for AMI creation, decreasing deployment times by 60%',
      'Built AWS infrastructure (EC2, Lambda, SNS, SES, Route 53) with load balancing, auto-scaling, and CloudWatch via Terraform, doubling user load capacity',
    ],
    links: [
      { text: 'WebApp', url: 'https://github.com/pavanshekar/webapp' },
      { text: 'IAC', url: 'https://github.com/pavanshekar/iac-pulumi' },
      { text: 'Serverless', url: 'https://github.com/pavanshekar/serverless' },
    ],
  },
  {
    id: 'foodzilla',
    title: 'FoodZilla',
    language: 'JavaScript',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Firebase', 'Stripe'],
    image: foodzilla,
    description:
      'MERN-stack food ordering platform with Stripe checkout and recipe suggestions.',
    info: [
      'Built full-stack modules using the MERN stack: JWT auth flows (login, register, forgot password, email verification), add-to-cart, and an admin portal',
      'Integrated Stripe API for seamless checkout and the Tasty API for suggesting recipe options',
      'Leveraged Firebase as a cloud image store, boosting inventory management with 60% faster image retrieval',
    ],
    links: [{ text: 'Source Code', url: 'https://github.com/pavanshekar/FoodZilla' }],
  },
  {
    id: 'flexiquery',
    title: 'FlexiQuery',
    language: 'Java',
    tech: ['Java', 'Spring Boot', 'Elasticsearch', 'RabbitMQ', 'Redis', 'OAuth 2.0'],
    image: flexiquery,
    description:
      'High-performance search platform over large datasets with real-time sync and caching.',
    info: [
      'Optimized large dataset management using Java, Spring Boot and Elasticsearch for query efficiency',
      'Elevated real-time data freshness by integrating RabbitMQ for synchronization and Redis for caching, with ETag for data integrity',
      'Deployed Google OAuth 2.0, safeguarding against unauthorized access and fortifying data privacy',
    ],
    links: [{ text: 'Source Code', url: 'https://github.com/pavanshekar/FlexiQuery' }],
  },
  {
    id: 'event-management',
    title: 'Event Management System',
    language: 'Java',
    tech: ['Java', 'Spring Boot', 'Hibernate', 'MySQL', 'Bootstrap'],
    image: eventManagementSystem,
    description:
      'Full-featured event platform handling 200+ events with notifications and image hosting.',
    info: [
      'Developed a fully-functional event management system with Java, Spring Boot, Hibernate, and MySQL, handling over 200 events',
      'Architected the database schema, REST APIs, and front-end views for a scalable, maintainable system',
      'Established robust email notification and image hosting, improving overall user experience by 10%',
    ],
    links: [
      {
        text: 'Source Code',
        url: 'https://github.com/pavanshekar/EventManagementSystem',
      },
    ],
  },
  {
    id: 'inventoryhub',
    title: 'InventoryHub',
    language: 'Python',
    tech: ['Python', 'Django', 'PostgreSQL', 'Heroku', 'Swagger'],
    image: inventoryHub,
    description:
      'Django REST API for inventory management with token auth and auto-generated docs.',
    info: [
      'Implemented a resilient Django REST Framework API with rigorous validation, authentication, and authorization using Token Authentication',
      'Designed a scalable PostgreSQL database schema optimized for performance',
      'Incorporated Swagger for automatic API documentation and deployed on Heroku, cutting deployment time by 20%',
    ],
    links: [
      { text: 'Source Code', url: 'https://github.com/pavanshekar/InventoryHub' },
    ],
  },
  {
    id: 'banking',
    title: 'Banking Management System',
    language: 'Java',
    tech: ['Java', 'Java Swing', 'MySQL'],
    image: banking,
    description:
      'Desktop banking system with role-based access and graphical insights.',
    info: [
      'Created a Java-based Banking Management System with advanced features, including graphical insights via pie charts',
      'Designed a modular system with distinct modules for different operations, ensuring efficient access and user management',
      'Implemented a sophisticated authorization and authentication system enabling secure, role-based access',
    ],
    links: [
      {
        text: 'Source Code',
        url: 'https://github.com/pavanshekar/BankingManagementSystem',
      },
    ],
  },
  {
    id: 'face-recognition',
    title: 'Face Modelling & Recognition',
    language: 'Python',
    tech: ['Python', 'OpenCV', 'Neural Networks', 'CNN'],
    image: face,
    description:
      'Face detection, completion, and recognition from complex and crowded images.',
    info: [
      'Constructed an OpenCV-based face detection model with a validation accuracy of 97% (Viola-Jones algorithm)',
      'Created a face completion model predicting lower halves of faces with 81% accuracy using ANNs',
      'Led a team of 4 to build a CNN-based face recognition model with 96.5% accuracy',
    ],
    links: [],
  },
  {
    id: 'air-quality',
    title: 'Air Quality Prediction',
    language: 'Python',
    tech: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'Regression'],
    image: air,
    description:
      'Machine learning suite that forecasts urban air quality from the UCI Air Quality dataset.',
    info: [
      'Devised a Python-based Air Quality Prediction model leveraging the Air Quality Dataset from the UCI Machine Learning repository',
      'Engineered a machine learning suite that accurately predicts urban benzene levels and temperature variations',
      'Utilized Linear, Lasso and Decision Tree Regression, achieving a 99.6% accuracy in urban air quality monitoring',
    ],
    links: [
      {
        text: 'Source Code',
        url: 'https://github.com/pavanshekar/Air-quality-prediction',
      },
    ],
  },
];

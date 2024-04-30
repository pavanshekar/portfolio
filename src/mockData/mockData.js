import profilePic from '../images/profile_pic.jpg';
import avatarImg from '../images/fsd.png';
import email from '../images/email.jpg';
import phone from '../images/phone.jpg';

import cv_link from '../docs/resume.pdf';

import neu from '../images/org/neu.png';
import sjbit from '../images/org/sjbit.jpeg';

import onsolve from '../images/org/onsolve.png';
import infosys from '../images/org/infosys.png';
import speckbit from '../images/org/speckbit.jpeg';

import java from '../images/skills/java.jpeg';
import python from '../images/skills/python.jpeg';
import html from '../images/skills/html.png';
import css from '../images/skills/css.png';
import js from '../images/skills/js.jpeg';
import typescript from '../images/skills/ts.png';

import angular from '../images/skills/angular.png';
import react from '../images/skills/react.png';
import node from '../images/skills/node.png';
import express from '../images/skills/express.png';
import springboot from '../images/skills/springboot.png';
import django from '../images/skills/django.png';
import bootstrap from '../images/skills/bootstrap.png';
import numPy from '../images/skills/numPy.png';
import pandas from '../images/skills/pandas.png';
import sciKitLearn from '../images/skills/sciKit-learn.jpg';
import matPlotLib from '../images/skills/matPlotLib.png';
import seaborn from '../images/skills/seaborn.png';
import openCV from '../images/skills/openCV.png';

import jest from '../images/skills/jest.png';
import enzyme from '../images/skills/enzyme.png';
import protractor from '../images/skills/protractor.png';
import jasmine from '../images/skills/jasmine.png';
import karma from '../images/skills/karma.png';
import mocha from '../images/skills/mocha.png';
import chai from '../images/skills/chai.png';

import mysql from '../images/skills/mysql.png';
import mongodb from '../images/skills/mongodb.png';
import postgreSQL from '../images/skills/postgreSQL.png';
import redis from '../images/skills/redis.png';
import rabbitmq from '../images/skills/rabbitmq.png';
import elasticsearch from '../images/skills/elasticsearch.png';
import hibernate from '../images/skills/hibernate.jpeg';
import sequelize from '../images/skills/sequelize.png';

import git from '../images/skills/git.png';
import heroku from '../images/skills/heroku.png';
import anaconda from '../images/skills/anaconda.png';
import jupyter from '../images/skills/jupyter.png';
import vscode from '../images/skills/vscode.png';
import eclipse from '../images/skills/eclipse.png';
import packer from '../images/skills/packer.png';

import aws from '../images/skills/aws.png';
import azure from '../images/skills/azure.png';
import gcp from '../images/skills/gcp.png';
import docker from '../images/skills/docker.png';
import cicd from '../images/skills/cicd.png';
import githubActions from '../images/skills/githubActions.png';
import pulumi from '../images/skills/pulumi.png';

import eduAssign from '../images/projects/eduAssign.png';
import foodzilla from '../images/projects/foodzilla.png';
import flexiquery from '../images/projects/flexiquery.jpeg';
import eventManagementSystem from '../images/projects/eventmanagementsystem.jpg';
import inventoryHub from '../images/projects/inventoryHub.png';
import banking from '../images/projects/banking.png';
import face from '../images/projects/face.png';

import azureCertificate from '../images/certificates/microsoft-certified-azure-fundamentals.png';
import awsCertificate from '../images/certificates/aws-certified-developer-associate.png';

export const homeDetailsMockData = {
  id: 1,
  name: 'Pavan Soma Shekar',
  job_title: 'Full Stack Developer',
  par_inro: 'Welcome to my personal world.',
  avatar_img: profilePic,
  hireMe_link: 'shekar.p@northeastern.edu',
  cv_link: cv_link
};

export const aboutMeMockData = {
  id: 1,
  title: 'About Me',
  title_2: 'Graduate Student @ Northeastern University | SDE | Full Stack Developer',
  description: "I am a graduate student at Northeastern University pursuing a Master's in Information Systems.\n\nI have three years of industry experience as a Software Development Engineer at Infosys and OnSolve. My expertise lies in Full Stack Web Development, complemented by a strong foundation in developing machine learning solutions. Additionally, my proficiency extends to leveraging cloud technologies, demonstrating a comprehensive skill set in cloud-based solution development and deployment.\n\nI am confident that my blend of technical skills and professional experience will significantly contribute to my career growth as a Software Development Engineer. I am eager to explore opportunities that not only allow me to contribute my skills but also provide a platform for continuous learning and professional development in the evolving fields of software engineering.",
  about_avatar: avatarImg,
};

export const educationWorkExperienceMockData = {
  education: [
    {
      id: 1,
      university: 'Northeastern University',
      degree: 'MS, Information Systems',
      completionDate: 'Expected May 2024',
      coursework: ['Concepts of Object Oriented Design', 'Application Engineering & Development', 'Web Design & User Experience Engineering', 'Database Management & Database Design', 'Web Development Tools & Methods', 'Network Structures & Cloud Computing', 'Advanced Big-Data Applications/Indexing'],
      logo: neu,
    },
    {
      id: 2,
      university: 'SJB Institute of Technology',
      degree: 'BE, Computer Science & Engineering',
      completionDate: 'July 2019',
      coursework: ['Data Structures & Applications', 'Design & Analysis of Algorithms', 'Computer Networks', 'Unix & Shell Programming', 'Operating Systems', 'Web Technology & Applications', 'Java and J2EE', 'Python Application Programming', 'Machine Learning'],
      logo: sjbit,
    },

  ],
  workExperience: [
    {
      id: 1,
      position: 'Software Engineer',
      company: 'OnSolve',
      duration: 'Apr 2022 - Aug 2022',
      responsibilities: [
        "Created the UI for the OnSolve platform, focusing on responsiveness and user experience using React.js",
        "Boosted the platform's performance by 15% by integrating 3 front-end modules and utilizing React.js for lazy loading and code splitting and Redux for state management and memoization, reducing load times",
        "Implemented unit tests for front-end modules using Jest and Enzyme with 90%+ code coverage",
        "Ensured high quality through stringent code reviews and administered 2 OnSolve.UI releases via GitHub Actions, seamlessly integrating Docker for efficient delivery in containerized environments",
      ],
      logo: onsolve,
    },
    {
      id: 2,
      position: 'Senior Systems Engineer',
      company: 'Infosys',
      duration: 'Sep 2019 - Apr 2022',
      responsibilities: [
        'Drove innovation by playing a pivotal role in the development of 2 Angular-based web applications, effectively addressing evolving client needs and resulting in a 30% increase in client engagement',
        'Developed a high-accuracy YOLOv3 chair detection model for Smart Classroom using OpenCV and a MEAN stack-based dashboard, significantly enhancing the interactive learning environment',
        'Contributed to the InfyMansions project, developing full-stack modules with MEAN stack technologies and integrating Material UI for enhanced user interface design',
        'Formulated a comprehensive testing strategy utilizing Protractor, Jasmine, and Karma frameworks, achieving 90% test coverage for end-to-end and unit testing',
        'Hosted workshops in JavaScript, Angular, and React.js for 200+ employees and mentored to 10 new hires',
      ],
      logo: infosys,
    },
    {
      id: 3,
      position: 'Machine Learning Research Intern',
      company: 'Speckbit Exploratories',
      duration: 'Jan 2019 - Mar 2019',
      responsibilities: [
        'Devised a Python-based Air Quality Prediction model leveraging the Air Quality Dataset-UCI Machine Learning repository, yielding significant advancements in urban air quality forecasting',
        'Engineered a machine learning suite that accurately predicts urban benzene levels and temperature variations',
        'Utilized Linear, Lasso and Decision Tree Regression, achieving a 99.6% accuracy in urban air quality monitoring',
      ],
      logo: speckbit,
    },
  ],
};


export const projectsMockData = [
  {
    id: 1,
    project_title: 'EduAssign',
    tech_stack: 'Node.js, Express.js, MySQL, Sequelize, Mocha, Chai, Packer, Pulumi, AWS, GCP',
    project_avatar: eduAssign,
    project_info: [
      'Developed EduAssign using Node.js, Express.js, and Sequelize, enhancing assignment management by 40%',
      'Utilized GitHub Actions for CI/CD, Mocha/Chai for integration testing, and Packer for AMI creation, which streamlined development, decreased deployment times by 60%, and reduced bugs by 25%',
      'Augmented AWS infrastructure (EC2, Lambda, SNS, SES, Route 53) with load balancing, auto-scaling, CloudWatch, SSL certificates, and GCP for GitHub downloads via Terraform, doubling user load capacity and cutting management effort by 70%',
    ],
    project_links: [
      {
        text: 'WebApp',
        url: 'https://github.com/pavanshekar/webapp'
      },
      {
        text: 'IAC',
        url: 'https://github.com/pavanshekar/iac-pulumi'
      },
      {
        text: 'Serverless',
        url: 'https://github.com/pavanshekar/serverless'
      },
    ]
  },
  {
    id: 2,
    project_title: 'FoodZilla',
    tech_stack: 'MongoDB, Express.js, React.js, Node.js, Firebase',
    project_avatar: foodzilla,
    project_info: [
      'Built 3 crucial full stack modules using MERN stack, such as the auth flows (login, register, forgot password, email verification, all using JWT), add-to-cart feature, and admin portal, enhancing and securing user registration/login efficiency by 35%',
      'Integrated Stripe API for seamless checkout and the Tasty API for suggesting different recipe options for consumers',
      'Leveraged Firebase as a cloud image store, boosting inventory management with 60% faster image retrieval',
    ],
    project_links: [
      {
        text: 'Source Code',
        url: 'https://github.com/pavanshekar/FoodZilla'
      }
    ],
  },
  {
    id: 3,
    project_title: 'FlexiQuery',
    tech_stack: 'Spring Boot, Elasticsearch, RabbitMQ, Redis, Google OAuth 2.0',
    project_avatar: flexiquery,
    project_info: [
      'Optimized large dataset management with FlexiQuery, using Spring Boot and Elasticsearch for query efficiency',
      'Elevated real-time data freshness and optimized performance by integrating RabbitMQ for synchronization and Redis for caching and utilizing ETag for enhanced data integrity',
      'Deployed Google OAuth 2.0, effectively safeguarding against unauthorized access and fortifying data privacy',
    ],
    project_links: [
      {
        text: 'Source Code',
        url: 'https://github.com/pavanshekar/FlexiQuery'
      }
    ],
  },
  {
    id: 4,
    project_title: 'Event Management System',
    tech_stack: 'HTML, CSS, Java Spring Boot, Hibernate, MySQL',
    project_avatar: eventManagementSystem,
    project_info: [
      'Developed a fully-functional event management system using Java Spring Boot, Hibernate, and MySQL, allowing users to create, manage, and promote events through an intuitive user interface, handling over 200 events seamlessly',
      'Architected the database schema, REST APIs, and front-end views to develop a scalable and maintainable system',
      'Established robust email notification and image hosting, leading to a 10% increase in overall user experience and satisfaction',
    ],
    project_links: [
      {
        text: 'Source Code',
        url: 'https://github.com/pavanshekar/EventManagementSystem'
      }
    ],
  },
  {
    id: 5,
    project_title: 'InventoryHub',
    tech_stack: 'Python, Django, PostgreSQL, Heroku',
    project_avatar: inventoryHub,
    project_info: [
      'Strategized and implemented a highly resilient Django REST Framework API, enforcing data integrity and security with rigorous validation, authentication, and authorization using Token Authentication',
      'Orchestrated the implementation of a scalable database schema using PostgreSQL, optimizing performance and scalability',
      'Incorporated Swagger for automatic API documentation and seamlessly deployed the Django application on Heroku, streamlining the development workflow, resulting in a 20% decrease in deployment time',
    ],
    project_links: [
      {
        text: 'Source Code',
        url: 'https://github.com/pavanshekar/Kaizntree-Back-End-Take-Home-Challenge'
      }
    ],
  },
  {
    id: 6,
    project_title: 'Banking Management System',
    tech_stack: 'Java, Java Swing, MySQL',
    project_avatar: banking,
    project_info: [
      'Created a Java-based Banking Management System with advanced features, including graphical insights via pie charts',
      'Designed a modular system with distinct modules for different operations, ensuring efficient access and user management',
      'Implemented a sophisticated authorization and authentication system, enabling secure access and role-based user management',
    ],
    project_links: [
      {
        text: 'Source Code',
        url: 'https://github.com/pavanshekar/BankingManagementSystem'
      }
    ]
  },
  {
    id: 7,
    project_title: 'Face Modelling and Face Recognition from Complex and Crowded Images',
    tech_stack: 'Python, OpenCV, Neural Networks',
    project_avatar: face,
    project_info: [
      'Constructed an OpenCV-based face detection model with a validation accuracy of 97% (Viola Jones algorithm)',
      'Created face completion model to predict lower halves of faces with an accuracy of 81% employing ANNs',
      'Spearheaded a team of 4 to build a face recognition model using CNN with an accuracy of 96.5%',
    ],
    project_links: null,
  },

];

export const certificationsMockData = [
  {
    id: 1,
    title: 'Microsoft Certified Azure Fundamentals: AZ-900',
    image: azureCertificate, 
    link: 'https://www.credly.com/badges/a2717c3c-82c0-4e6f-a65e-2b4cec145af1/public_url', 
  },
  {
    id: 2,
    title: 'AWS Certified Developer - Associate',
    image: awsCertificate, 
    link: 'https://www.credly.com/badges/2348abe8-d06b-4665-8c50-564c37a2a5ff/public_url', 
  },
];


export const contactsMockData = [
  {
    id: 1,
    icon: email,
    contact_name: 'Email',
    contact_info: 'shekar.p@northeastern.edu',
  },
  {
    id: 2,
    icon: phone,
    contact_name: 'Phone',
    contact_info: '+18578691951',
  },
];

export const socialMediaMockData = [
  {
    id: 1,
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/pavansshekar/',
    social_icon: 'bx bxl-linkedin',
  },
  {
    id: 2,
    name: 'GitHub',
    link: 'https://github.com/pavanshekar',
    social_icon: 'bx bxl-github',
  },
];

export const languagesIconsMockData = [
  { id: 1, skill: 'Java', icon: java },
  { id: 2, skill: 'Python', icon: python },
  { id: 3, skill: 'HTML', icon: html },
  { id: 4, skill: 'CSS', icon: css },
  { id: 5, skill: 'JavaScript', icon: js },
  { id: 6, skill: 'TypeScript', icon: typescript },

  { id: 7, skill: 'React.js', icon: react },
  { id: 8, skill: 'Angular', icon: angular },
  { id: 9, skill: 'Node.js', icon: node },
  { id: 10, skill: 'Express.js', icon: express },
  { id: 11, skill: 'Spring Boot', icon: springboot },
  { id: 12, skill: 'Django', icon: django },
  { id: 13, skill: 'Bootstrap', icon: bootstrap },

  { id: 14, skill: 'Jest', icon: jest },
  { id: 15, skill: 'Enzyme', icon: enzyme },
  { id: 16, skill: 'Protractor', icon: protractor },
  { id: 17, skill: 'Jasmine', icon: jasmine },
  { id: 18, skill: 'Karma', icon: karma },
  { id: 19, skill: 'Mocha', icon: mocha },
  { id: 20, skill: 'Chai', icon: chai },

  { id: 21, skill: 'MySQL', icon: mysql },
  { id: 22, skill: 'MongoDB', icon: mongodb },
  { id: 23, skill: 'PostgreSQL', icon: postgreSQL },
  { id: 24, skill: 'Redis', icon: redis },
  { id: 25, skill: 'RabbitMQ', icon: rabbitmq },
  { id: 26, skill: 'Elasticsearch', icon: elasticsearch },
  { id: 27, skill: 'Hibernate', icon: hibernate },
  { id: 28, skill: 'Sequelize', icon: sequelize },

  { id: 29, skill: 'AWS', icon: aws },
  { id: 30, skill: 'Azure', icon: azure },
  { id: 31, skill: 'GCP', icon: gcp },
  { id: 32, skill: 'Docker', icon: docker },
  { id: 33, skill: 'CI/CD', icon: cicd },
  { id: 34, skill: 'GitHub Actions', icon: githubActions },
  { id: 35, skill: 'Packer', icon: packer },
  { id: 36, skill: 'Pulumi', icon: pulumi },

  { id: 37, skill: 'NumPy', icon: numPy },
  { id: 38, skill: 'Pandas', icon: pandas },
  { id: 39, skill: 'SciKit-Learn', icon: sciKitLearn },
  { id: 40, skill: 'MatPlotLib', icon: matPlotLib },
  { id: 41, skill: 'Seaborn', icon: seaborn },
  { id: 42, skill: 'OpenCV', icon: openCV },

  { id: 43, skill: 'Git', icon: git },
  { id: 44, skill: 'Heroku', icon: heroku },
  { id: 45, skill: 'Anaconda', icon: anaconda },
  { id: 46, skill: 'Jupyter Notebook', icon: jupyter },
  { id: 47, skill: 'VS Code', icon: vscode },
  { id: 48, skill: 'Eclipse', icon: eclipse },

];

import awsCert from '../assets/certificates/aws-certified-developer-associate.png';
import azureCert from '../assets/certificates/microsoft-certified-azure-fundamentals.png';

export const certifications = [
  {
    id: 'aws-dev',
    title: 'AWS Certified Developer — Associate',
    issuer: 'Amazon Web Services',
    image: awsCert,
    link: 'https://www.credly.com/badges/2348abe8-d06b-4665-8c50-564c37a2a5ff/public_url',
  },
  {
    id: 'az-900',
    title: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    image: azureCert,
    link: 'https://www.credly.com/badges/a2717c3c-82c0-4e6f-a65e-2b4cec145af1/public_url',
  },
];

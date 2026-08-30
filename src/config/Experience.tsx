import AWS from '@/components/technologies/AWS';
import ExpressJs from '@/components/technologies/ExpressJs';
import GenAI from '@/components/technologies/GenAI';
import GithubActions from '@/components/technologies/GithubActions';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NodeJs from '@/components/technologies/NodeJs';
import OracleEBS from '@/components/technologies/OracleEBS';
import PLSQL from '@/components/technologies/PLSQL';
import Python from '@/components/technologies/Python';
import ReactIcon from '@/components/technologies/ReactIcon';
import RestApi from '@/components/technologies/RestApi';
import SQL from '@/components/technologies/SQL';
import TailwindCss from '@/components/technologies/TailwindCss';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  technologies: Technology[];
  isCurrent: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: true,
    company: 'Tektronix',
    position: 'Intern',
    location: 'Bengaluru',
    image: '/company/Tektronix.png',
    description: [
      'Worked on Oracle EBS using SQL and PL/SQL, optimizing queries and supporting enterprise application workflows.',
      'Contributed to enhancements and issue resolution across the Order-to-Cash (O2C) and Procure-to-Pay (P2P) business cycles.',
    ],
    startDate: 'April 2026',
    endDate: 'Present',
    website: 'https://www.tek.com/',
    technologies: [
      {
        name: 'SQL',
        href: 'https://www.w3schools.com/sql/',
        icon: <SQL />,
      },
      {
        name: 'PL/SQL',
        href: 'https://www.oracle.com/database/technologies/appdev/plsql.html',
        icon: <PLSQL />,
      },
      {
        name: 'Oracle EBS',
        href: 'https://www.oracle.com/applications/ebusiness/',
        icon: <OracleEBS />,
      },
    ],
  },
  {
    isCurrent: false,
    company: 'Commonwealth Bank of Australia',
    position: 'SDE Trainee (Apprenticeship)',
    location: 'Remote',
    image: '/company/CBA.png',
    description: [
      'Completed a structured SDE apprenticeship focused on full-stack development, data engineering, cloud computing and AI fundamentals.',
      'Built web applications using React.js, Node.js, REST APIs, MongoDB and JavaScript through hands-on development projects.',
      'Worked with SQL, Git, Linux, AWS, authentication, debugging and software development practices.',
      'Strengthened problem-solving and engineering fundamentals through practical work in DSA, databases, APIs and scalable application development.',
    ],
    startDate: 'Jan 2026',
    endDate: 'June 2026',
    website: 'https://www.commbank.com.au/about-us/careers/india.html',
    technologies: [
      {
        name: 'JavaScript',
        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        icon: <JavaScript />,
      },
      {
        name: 'Python',
        href: 'https://www.python.org/',
        icon: <Python />,
      },
      {
        name: 'Node.js',
        href: 'https://nodejs.org/',
        icon: <NodeJs />,
      },
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'Express',
        href: 'https://expressjs.com/',
        icon: <ExpressJs />,
      },
      {
        name: 'MongoDB',
        href: 'https://www.mongodb.com/',
        icon: <MongoDB />,
      },
      {
        name: 'AWS',
        href: 'https://aws.amazon.com/',
        icon: <AWS />,
      },
      {
        name: 'Gen AI',
        href: 'https://aws.amazon.com/ai/generative-ai/',
        icon: <GenAI />,
      },
    ],
  },
  {
    isCurrent: false,
    company: 'VaultofCodes',
    position: 'Web Development Intern',
    location: 'Remote',
    image: '/company/VOC.png',
    description: [
      'Engineered responsive UI components using React.js and Tailwind CSS, improving page load performance by 25%.',
      'Integrated and debugged REST APIs, reducing API-related errors by 30% during the testing phase.',
      'Deployed applications on Linux-based AWS EC2 and automated CI/CD workflows using GitHub Actions.',
    ],
    startDate: 'July 2025',
    endDate: 'August 2025',
    website: 'https://www.vaultofcodes.in/',
    technologies: [
      {
        name: 'Tailwind CSS',
        href: 'https://tailwindcss.com/',
        icon: <TailwindCss />,
      },
      {
        name: 'JavaScript',
        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        icon: <JavaScript />,
      },
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'AWS',
        href: 'https://aws.amazon.com/',
        icon: <AWS />,
      },
      {
        name: 'REST APIs',
        href: 'https://restfulapi.net/',
        icon: <RestApi />,
      },
      {
        name: 'GitHub Actions',
        href: 'https://github.com/features/actions',
        icon: <GithubActions />,
      },
    ],
  },
  {
    isCurrent: false,
    company: 'P2P.me',
    position: 'Community Ambassador',
    location: 'Remote',
    image: '/company/P2P.png',
    description: [
      'Supported a 5,000+ member community as a community ambassador, handling user queries, troubleshooting issues, and improving customer support.',
      'Built an FAQ website for new users and merchants, organizing onboarding, transaction, security and support information into an accessible self-service resource.',
    ],
    startDate: 'May 2025',
    endDate: 'Aug 2025',
    website: 'https://p2p.me/',
    technologies: [],
  },
];

export const featuredExperienceCount = 3;

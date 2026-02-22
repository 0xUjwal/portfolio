import AWS from '@/components/technologies/AWS';
import ExpressJs from '@/components/technologies/ExpressJs';
import GithubActions from '@/components/technologies/GithubActions';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NodeJs from '@/components/technologies/NodeJs';
import Python from '@/components/technologies/Python';
import ReactIcon from '@/components/technologies/ReactIcon';
import RestApi from '@/components/technologies/RestApi';
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
    company: 'Commonwealth Bank of Australia',
    position: 'SDE Trainee (Apprenticeship)',
    location: 'Remote',
    image: '/company/CBA.png',
    description: [
      'Selected for an apprenticeship-based SDE training program focused on JavaScript and frontend engineering fundamentals.',
      'Completed 10+ guided assignments and mini-projects, strengthening problem-solving skills and core development practices.',
    ],
    startDate: 'Jan 2026',
    endDate: 'Present',
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
];

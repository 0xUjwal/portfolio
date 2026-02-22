import Github from '@/components/svgs/Github';
import Leetcode from '@/components/svgs/Leetcode';
import LinkedIn from '@/components/svgs/LinkedIn';
import Mail from '@/components/svgs/Mail';
import X from '@/components/svgs/X';

export const heroConfig = {
  // Personal Information
  name: 'Ujwal',
  title: 'Aspiring Software Engineer.',
  avatar: '/assets/logo.png',

  // Buttons Configuration
  buttons: [
    {
      variant: 'outline',
      text: 'Resume / CV',
      href: '/resume',
      icon: 'CV',
    },
    {
      variant: 'default',
      text: 'Get in touch',
      href: '/contact',
      icon: 'Chat',
    },
  ],
};

// Social Links Configuration
export const socialLinks = [
  {
    name: 'Github',
    href: 'https://github.com/0xUjwal',
    icon: <Github />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/0xujwal/',
    icon: <LinkedIn />,
  },
  {
    name: 'Email',
    href: 'mailto:ujwalkumar717@gmail.com',
    icon: <Mail />,
  },
  {
    name: 'X',
    href: 'https://x.com/0xUjwal',
    icon: <X />,
  },
  {
    name: 'Leetcode',
    href: 'https://leetcode.com/u/0xUjwal/',
    icon: <Leetcode />,
  },
];

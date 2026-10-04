import type { LucideIcon } from 'lucide-react';
import { Globe, Smartphone } from 'lucide-react';

export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  screenshots?: { src: string; alt: string; caption: string }[];
  icon: LucideIcon;
  techStack: string[];
  metrics: { type: string; value?: string };
  features: string[];
  links: {
    demo?: string;
    playStore?: string;
    github?: string;
  };
  detail: {
    eyebrow: string;
    intro: string;
    role: string;
    duration: string;
    category: string;
    overview: string;
    challenge: string;
    solution: string;
    nextSteps: string[];
  };
};

export const projects: Project[] = [
  {
    slug: 'museum-guide',
    title: 'Museum Guide',
    description:
      'An interactive companion that lets visitors control a guide robot via an on-screen museum map. Users can ask questions through voice commands and receive AI-powered responses from the robot. The app also enables QR code scanning of exhibits to instantly display detailed information.',
    image: '/logos/museumguide.jpg',
    icon: Smartphone,
    techStack: ['Room Database', 'Clean Architecture', 'Kotlin'],
    metrics: { type: 'Graduation Project' },
    features: ['Enhanced UI', 'Digital Content', 'Accessibility'],
    links: {
      github: 'https://github.com/Mina-Software-Engineer/Museum-Guide-App',
    },
    detail: {
      eyebrow: 'Android · Graduation project',
      intro: 'A thoughtful museum companion that connects physical navigation with accessible digital storytelling.',
      role: 'Android developer',
      duration: 'Add duration',
      category: 'Mobile application',
      overview: 'Add a longer overview of the project, the people it serves, and the experience you wanted to create.',
      challenge: 'Add the problem or user need that inspired this project.',
      solution: 'Add the product decisions, architecture, and interaction details that addressed the challenge.',
      nextSteps: ['Add a project gallery', 'Add your contribution details', 'Add outcomes or lessons learned'],
    },
  },
  {
    slug: 'asteroid-radar',
    title: 'Asteroid Radar',
    description: 'NASA API integration app displaying near-Earth asteroids with Room Database caching.',
    image: '/projects/asteroid_logo.png',
    icon: Globe,
    techStack: ['Modern UI', 'Responsive Design'],
    metrics: { type: 'Project' },
    features: ['Real-time update', 'Asteroids sorting'],
    links: { demo: '#', github: '#' },
    detail: {
      eyebrow: 'Android · NASA API',
      intro: 'A data-rich space experience for exploring near-Earth objects in a clear, approachable interface.',
      role: 'Add your role',
      duration: 'Add duration',
      category: 'Mobile application',
      overview: 'Add the project context, the data source, and what makes this experience useful or memorable.',
      challenge: 'Add the problem you wanted to solve with NASA data.',
      solution: 'Add the features, technical approach, and design decisions you made.',
      nextSteps: ['Add screenshots or a video', 'Add API and caching details', 'Add project outcomes'],
    },
  },
  {
    slug: 'quotes-app',
    title: 'Quotes App',
    description: 'Daily inspiration app with quote sharing functionality and local database storage.',
    image: '/projects/quoteslogo.png',
    icon: Smartphone,
    techStack: ['Room Database', 'Kotlin', 'RESTful API'],
    metrics: { type: 'Project' },
    features: ['Daily inspiration', 'Quote sharing'],
    links: { demo: '#', github: '#' },
    detail: {
      eyebrow: 'Android · Personal project',
      intro: 'A focused daily inspiration app designed to make discovering and sharing a great quote feel effortless.',
      role: 'Add your role',
      duration: 'Add duration',
      category: 'Mobile application',
      overview: 'Add a fuller project story here later, including the audience, goals, and product direction.',
      challenge: 'Add the user problem or opportunity behind the app.',
      solution: 'Add how the interface, local storage, and API integration work together.',
      nextSteps: ['Add a visual walkthrough', 'Add your responsibilities', 'Add measurable results'],
    },
  },
  {
    slug: 'moonchat',
    title: 'Moonchat',
    description: 'Real-time messaging application with Firebase and Room Database.',
    image: '/projects/moonchat.png',
    screenshots: [
      {
        src: '/projects/moonchat-welcome.webp',
        alt: 'Moon Chat welcome screen shown on a tilted phone',
        caption: 'Welcome screen · Moon Chat',
      },
    ],
    icon: Smartphone,
    techStack: ['Kotlin', 'Firebase', 'Room Database', 'MVVM', 'Pagination'],
    metrics: { type: 'Impact', value: 'Accessibility' },
    features: ['Modern UI', 'Real-time messaging'],
    links: { github: '#', demo: '#' },
    detail: {
      eyebrow: 'Android · Real-time communication',
      intro: 'A modern messaging experience built around real-time conversations, reliable local data, and accessible interactions.',
      role: 'Add your role',
      duration: 'Add duration',
      category: 'Mobile application',
      overview: 'Add the story behind Moonchat, including the intended users and the experience you wanted to deliver.',
      challenge: 'Add the communication or product challenge you explored.',
      solution: 'Add the architecture, Firebase implementation, pagination strategy, and UX decisions.',
      nextSteps: ['Add conversation screenshots', 'Add architecture notes', 'Add outcomes and learnings'],
    },
  },
  {
    slug: 'receiptmanager',
    title: 'Receipt Management System',
    description: 'Real-time messaging application with Firebase and Room Database.',
    image: '/logos/ic_edita_logo.png',
    icon: Smartphone,
    techStack: ['Python', 'AI', 'Security', 'OCR'],
    metrics: { type: 'Impact', value: 'Accessibility' },
    features: ['Modern UI'],
    links: { github: '#', demo: '#' },
    detail: {
      eyebrow: 'Desktop · Real-time communication',
      intro: 'A modern messaging experience built around real-time conversations, reliable local data, and accessible interactions.',
      role: 'Add your role',
      duration: 'Add duration',
      category: 'Desktop application',
      overview: 'Add the story behind Moonchat, including the intended users and the experience you wanted to deliver.',
      challenge: 'Add the communication or product challenge you explored.',
      solution: 'Add the architecture, Firebase implementation, pagination strategy, and UX decisions.',
      nextSteps: ['Add conversation screenshots', 'Add architecture notes', 'Add outcomes and learnings'],
    },
  },
];

export const getProjectBySlug = (slug: string) => projects.find((project) => project.slug === slug);

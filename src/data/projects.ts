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
    links: {github: '#' },
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
    links: { github: '#' },
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
    
    title: 'MoonChat',
    
    description: 'A modern native Android messaging app built for real-time conversations, friend discovery, and reliable communication with offline support.',
    
    image: '/projects/moonchat.png',
    screenshots: [
      {
        src: '/projects/moonchat-welcome.webp',
        alt: 'Moon Chat welcome screen shown on a tilted phone',
        caption: 'Welcome screen · Moon Chat',
      },
    ],
    icon: Smartphone,
    
    techStack: [
    'Kotlin',
    'Android SDK',
    'Firebase Authentication',
    'Firebase Realtime Database',
    'Cloud Firestore',
    'Firebase Cloud Messaging',
    'Room Database',
    'Android Paging',
    'Coroutines',
    'RecyclerView'
    ],
    
    metrics: {
    type: 'Focus',
    value: 'Real-time messaging'
    },
    
    features: [
    'Real-time one-to-one messaging',
    'Optimistic message sending with offline queuing and automatic retry',
    'Paginated chat history with local Room caching',
    'Delivered and read message states',
    'Friend requests with accept/reject interactions',
    'Push notifications for messages and friend activity',
    'User presence and network connectivity handling',
    'Chat history and unread-message management'
    ],
    
    links: {
    github: 'https://github.com/Mina-Software-Engineer/MoonChatRepo'
    },
    
    detail: {
    eyebrow: 'Android · Real-time communication',
    
    intro: 'MoonChat is a native Android messaging experience designed around fast, dependable communication. I focused on making conversations feel immediate while keeping message history available locally and maintaining reliable synchronization with Firebase.',
    
    role: 'Solo Android Developer — responsible for application architecture, UI implementation, Firebase integration, local data persistence, real-time synchronization, notifications, and messaging reliability.',
    
    duration: 'Ongoing personal project',
    
    category: 'Mobile application',
    
    overview: 'MoonChat was designed for users who want a straightforward, modern messaging experience for private conversations and building a personal network. The goal was to combine a clean chat interface with the reliability users expect from a real-world messaging application, including persistent conversations, friend management, delivery/read states, notifications, and graceful behavior when connectivity is unstable.',
    
    challenge: 'The main challenge was keeping conversations consistent across local storage, Firebase, and real-time updates without making the interface feel slow or fragile. The app also needed to handle large chat histories efficiently, distinguish sent and received messages, prevent duplicate real-time events, preserve messages during connectivity loss, and notify users when activity happens outside the active conversation.',
    
    solution: 'I built a layered Android architecture around Kotlin, using Room as the local source for cached chat data and Firebase Realtime Database/Firestore for remote communication and user data. Android Paging with a RemoteMediator loads conversation history incrementally instead of pulling the entire chat at once. Message sending uses optimistic local updates, allowing messages to appear immediately while pending or failed messages are automatically synchronized when connectivity returns. Real-time Firebase listeners update incoming messages and delivery/read states, while Firebase Cloud Messaging handles push notifications for chat messages and friend-request events.',
    
    nextSteps: [
      'Continue refining synchronization and message delivery reliability',
      'Expand the social layer with richer friend discovery and suggestions',
      'Improve testing, performance monitoring, and production readiness'
    ]
    
    }
    }
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

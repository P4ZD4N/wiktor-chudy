export type Job = {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
};

export const jobsData: Job[] = [
  {
    id: 4,
    role: 'Junior Software Developer (Angular) — Workflow Systems',
    company: 'BNP Paribas Bank Polska',
    period: 'Sep 2026 — Present',
    description: `— Reduced frontend application bundle size by 85% (16.2MB to 2.5MB) and decreased build time by 50% by upgrading Angular from v17 to v21, removing unused libraries and migrating bundler from Webpack to esbuild + Vite.`,
    skills: ['Angular', 'TypeScript', 'HTML', 'SCSS', 'Bootstrap', 'PrimeNG'],
  },
  {
    id: 3,
    role: 'Frontend Developer (Angular) — Cybersecurity Systems',
    company: 'Erste Bank Polska',
    period: 'Apr 2026 — Aug 2026',
    description: `— Took full ownership of frontend for key application in cybersecurity department. Acted as a standalone engineer collaborating closely with Backend Developers and Analysts to ensure seamless end-to-end feature delivery and high quality solutions.
      — Redesigned and modernized user interface for key application in cybersecurity department. Migrated project from Angular Material 2 to v3 and improved UX by refreshing components. Replaced previous Santander design and colors to align Erste brand identity.
      — Optimized tsconfig.json configuration to enable stricter type checking and eliminate potential bug occurrences early at the code creation stage.`,
    skills: [
      'Angular',
      'TypeScript',
      'Vitest',
      'Jasmine',
      'Karma',
      'HTML',
      'SCSS',
      'Linux',
      'Kibana',
    ],
  },
  {
    id: 2,
    role: 'Frontend Developer (Angular) — Cybersecurity Systems',
    company: 'Santander Bank Polska',
    period: 'Jul 2025 — Mar 2026',
    description: `— Developed and enhanced frontend features for key Vulnerability & Compliance management application in cybersecurity department using Angular, directly supporting Cybersecurity Analysts in more effective tracking and resolving security threats.
      — Collaborated with Cybersecurity Analysts and Backend Engineers (Django) to translate complex security requirements into intuitive UI features more precisely. Presented end-to-end ownership mindset to meet feature delivery deadlines and exact business criteria.
      — Successfully launched frontend test CI pipeline for the first time in project history. 
      — Modernized frontend testing infrastructure by migrating from Jasmine/Karma to Vitest, resulting in faster test execution.
      — Reduced frontend error and bug occurrences from 100+ per day to zero, through deep log analysis and root cause identification with Kibana — significantly improved platform stability, security and user experience. Gained proactive monitoring habit to identify potential issues before they impact users.
      — Took ownership of frontend development for one of the biggest module of application in cybersecurity department — refactored legacy code, created new versions of audit-related forms and improved UI components used by auditors. Proactively collaborated with users of module to propose and implement enhancements that simplified complex tasks and improved operational efficiency.
      — Contributed to multi-version Angular upgrade from v9 to v21.
      — Identified and refactored legacy modules — took part in multiple large-scale migrations, including transition from Modules to Standalone Components and from class to functional resolvers/interceptors.`,
    skills: [
      'Angular',
      'TypeScript',
      'Vitest',
      'Jasmine',
      'Karma',
      'HTML',
      'SCSS',
      'Linux',
      'Kibana',
    ],
  },
  {
    id: 1,
    role: 'Apprentice Frontend Developer',
    company: 'Grupa ABS',
    period: 'Mar 2022',
    description: `— Developed responsive frontend solutions for podarujkarte.pl platform with strong focus on user experience and high-quality cards design to increase customers satisfaction, opportunities for purchases and platform usability.
      — Supported business expansion of wciagnij.to portal through data scrapping, market analysis and building restaurant database leading to platform growth in the region of Cracow.
      — Consistently designed and delivered high-quality frontend solutions (HTML5, CSS3, Bootstrap, JavaScript) within established deadlines.
      — Cooperated with other apprentices on programming and business-oriented tasks, including code reviews, knowledge sharing and support in implementation.
      — Enhanced proficiency in frontend technologies through code reviews and platforms like freeCodeCamp, Flexbox Froggy, Grid Garden or Frontend Mentor resulting in improved code quality and more reliable project delivery.
      — Launched and maintained personal blog with WordPress CMS, taking first step in building online presence. Learnt from more experienced colleagues about personal brand in IT industry.
      — Performed manual testing of mobile applications to identify bugs and search opportunities for optimizations.`,
    skills: ['JavaScript', 'HTML', 'CSS', 'Bootstrap', 'WordPress'],
  },
];

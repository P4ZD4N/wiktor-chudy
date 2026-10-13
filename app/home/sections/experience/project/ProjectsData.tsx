export type Project = {
  id: number;
  title: string;
  industry: string;
  description: string;
  skills: string[];
  features?: string;
  images?: string[];
  repoUrl?: string;
  liveUrl?: string;
};

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Wyszczaj.to',
    industry: 'Event & Nightlife',
    description:
      'Do you struggle with a weak bladder or need quick access to public toilet? Wyszczaj.to (community-driven map of public toilets in Poland) makes outdoor events stress-free by helping you locate the nearest public toilet or convenient place to go in just a few seconds. Built as a Progressive Web Application (PWA) works seamlessly on mobile devices and can be installed like a native application for our users convenience.',
    skills: ['TypeScript', 'HTML', 'Tailwind', 'DaisyUI'],
    liveUrl: 'https://wyszczaj.to',
  },
  {
    id: 2,
    title: 'Instalatorstwo elektryczne',
    industry: 'Electric industry',
    description: `Comprehensive marketing strategy created for a client from electrical industry. Project includes improvements in both visual identity and online presence. Goal was not only to design a modern and functional website, but also to build a brand image and increase visibility within the local community.

      Most important from software development perspective was designing and creating lightweight website, which will be intended to serve as a business card. Solution was created using HTML, SCSS, Bootstrap and vanilla JavaScript. Chose framework-free implementation to reduce overhead, better align with long-term maintainability and budget constraints. One of the most important features is integration with Google Analytics for tracking website traffic in easy way.

      More entrepreneurial challenge was to create full branding package, including logo design, vehicle decals for company car, branded t-shirts and jackets, promotional banners highlighting new services and large banner installed on a pole near office. I had also opportunity to work on online presence boost by setting up and optimizing Facebook business page and Google Maps to improve local discoverability.
    `,
    skills: ['JavaScript', 'HTML', 'SCSS', 'Bootstrap'],
    liveUrl: 'https://marcinchudy.com',
  },
];

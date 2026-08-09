type Project = {
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
    title: 'Miesiany Miesiany Kebab',
    industry: 'Food & Restaurant industry',
    description: `Full-stack system created for business from gastronomy industry. Designed to go beyond standard CRUD application, it serves as digital business card, marketing hub, and complete internal management system aimed at attracting customers, encouraging them to stay longer and streamlining daily restaurant operations.

      What sets project apart?
      — Real-Time Data Synchronization: Implemented WebSockets to handle instant UI updates. This powers the live Order Status Display for in-restaurant screens and allows customers to track their delivery status in real time.
      — Marketing & Customer Engagement: Features like automated discount code generator based on order history, dynamic menu promotions and multilingual newsletter built utilizing the Observer design pattern with asynchronous email processing.
      — HR & Employee Management: Includes a Job Board where candidates can apply and attach CVs (PDF/DOC). System also provides a robust employee dashboard for shift scheduling (with PDF export capabilities) and detailed payment calculations.
      — Security & Reliability: Session-based authentication with Bcrypt password encryption. Public API endpoints are protected using Rate Limiting to prevent excessive or malicious traffic.
      — UX/UI & Integrations: Fully Responsive Web Design (RWD) with multilingual support (English/Polish). Integrated with TomTom Map API to display precise restaurant address.`,
    skills: [
      'Java 21',
      'TypeScript',
      'Spring',
      'Angular 18',
      'Bootstrap',
      'Hibernate',
      'Thymeleaf',
      'Maven',
      'JUnit',
      'Mockito',
      'PostgreSQL',
      'HTML',
      'SCSS',
      'Docker',
      'Bash',
    ],
  },
  {
    id: 2,
    title: 'Bibliotheca Chudyana',
    industry: 'Library & Bookstore Industry',
    description: `Backend web application designed to digitalize library / bookstore operations and make them available 24/7. Enhances user experience by allowing customers to effortlessly browse book collections, manage wishlists or carts and track orders from home, increasing revenues and building customer loyalty.

      What sets project apart?
      — E-Commerce & Customer Engagement: Features like intuitive shopping cart and wishlist system that allows users to seamlessly plan their purchases. Customers can track available discounts, explore newly added books (within the last 7 days) and popular categories, and interact with the book catalog through review system.
      — Role-Based Access Control (RBAC): Management panels tailored to specific staff roles. Administrators have full control over books, users, orders, reviews, and discounts; Managers oversee book catalog and sales data; Employees are granted to handle book and order management.
      — Security & Profile Management: Session-based authentication and registration system which use Bcrypt password encryption. Authenticated users can manage their profiles, update credentials and monitor order statuses.
      — UI Rendering: Used Spring MVC to implement server-side rendering and deliver fast, SEO-friendly and responsive interface, ensuring easy navigation across the entire book catalog and dashboards.`,
    skills: [
      'Java',
      'Spring',
      'Hibernate',
      'Thymeleaf',
      'Maven',
      'JUnit',
      'Mockito',
      'MySQL',
      'JavaScript',
      'HTML',
      'SCSS',
      'Docker',
    ],
  },
  {
    id: 3,
    title: 'Wyszczaj.to',
    industry: 'Event & Nightlife',
    description:
      'Do you struggle with a weak bladder or need quick access to public toilet? Wyszczaj.to (community-driven map of public toilets in Poland) makes outdoor events stress-free by helping you locate the nearest public toilet or convenient place to go in just a few seconds. Built as a Progressive Web Application (PWA) works seamlessly on mobile devices and can be installed like a native application for our users convenience.',
    skills: ['TypeScript', 'HTML', 'Tailwind', 'DaisyUI'],
  },
  {
    id: 4,
    title: 'Instalatorstwo elektryczne',
    industry: 'Electric industry',
    description: `Comprehensive marketing strategy created for a client from electrical industry. Project includes improvements in both visual identity and online presence. Goal was not only to design a modern and functional website, but also to build a brand image and increase visibility within the local community.

      Most important from software development perspective was designing and creating lightweight website, which will be intended to serve as a business card. Solution was created using HTML, SCSS, Bootstrap and vanilla JavaScript. Chose framework-free implementation to reduce overhead, better align with long-term maintainability and budget constraints. One of the most important features is integration with Google Analytics for tracking website traffic in easy way.

      More entrepreneurial challenge was to create full branding package, including logo design, vehicle decals for company car, branded t-shirts and jackets, promotional banners highlighting new services and large banner installed on a pole near office. I had also opportunity to work on online presence boost by setting up and optimizing Facebook business page and Google Maps to improve local discoverability.
    `,
    skills: ['JavaScript', 'HTML', 'SCSS', 'Bootstrap'],
  },
  {
    id: 5,
    title: 'GloboGym',
    industry: 'Fitness & Health industry',
    description: `System built with JavaFX designed to streamline operations for modern fitness club. Developed with strong focus on business-oriented use-case modeling, delivers reliable, user-friendly interface that empowers members with self-service tools while providing staff a lot of administrative capabilities.

      What sets project apart?
      — Data Persistence & Integrity: Utilized serialization mechanisms to store and retrieve state, user interactions and data changes across sessions, ensuring data integrity without relying on a traditional database.
      — Membership & Financial Management: Features built-in payment module allowing users to manage deposits and track their transaction history. Includes automated membership system for purchasing and renewing subscriptions with view to unique membership card visualization.
      — Intelligent Scheduling System: Implemented an interactive, calendar-based schedule for classes and event management. Booking logic includes strict business validation, automatically checking active membership status, classes capacity, future date validity and preventing duplicate bookings.
      — Role-Based Access Control (RBAC): Unique workflows for Members, Coaches, Employees, and Managers. Personalized dashboards (with customizable avatars and coach specializations) and staff-approval logic for new coach registrations.
    `,
    skills: ['Java', 'JavaFX', 'Lombok', 'Maven', 'CSS'],
  },
];

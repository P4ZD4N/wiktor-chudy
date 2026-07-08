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
    description: `Full Stack application for business from gastronomic industry created with Spring on backend and Angular on frontend. Intended to serve as digital business card to reach more customers, encourage them to stay longer and to solve problems typical for this industry.

      System provides convenient UI (RWD, multilingual pages, eye-catching colors, customizable by manager paragraphs) and all essential information in one place. Offers a set of marketing tools that enhance brand strength, customer engagement and support business growth - marketing slogans, discount codes, newsletter or gamification systems while placing orders. Ensures real impact on repeat visits and building better relationships with customers.

      Another functionality that distinguishes the system is job board, where manager can add fully customizable job offer with information such as position name, list of Mandatory / Nice to have requirements, employment types or hourly wage gross. Guests can apply to each job offer by fulfilling form with attaching CV in PDF/DOC format. System share possibility to easy candidate selection or download CV attached by candidate.

      Also implemented real-time panels with WebSockets to ensure instant data synchronization on views, which really needs it. Good example can be "Order Status Display" view for in-restaurant screens which show numbers of orders currently being prepared (in gray color) and ready (in green color). Tracking order view is also a view of this type.

      Finally, it is worth mentioning some staff panels - for example work schedule panel which allow to manage shifts in selected month (document can be then displayed or downloaded in PDF format) or payments panel where manager can clearly check all necessary information about payments related to particular employee for any month.`,
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
    description: `Backend application (Spring) created to facilitate Library / Bookstore business management and to make interaction with potential customers more effective. A subtle dark-themed interface was also implemented to ensure a better user experience.

      Idea behind the application is obvious - digitization process significantly simplifies the provision of library services what can lead to increases in revenues and customer loyalty. Because of easy access to bookstore resources online, customers can browse books whenever they want and search desired ones by filtering to familiarise with book collection without leaving home. There are also carts and wishlists feature available, allowing even more to better reconsider order and return to completing it at any time.

      To enhance user experience and make using system more enjoyable application includes dedicated satisfaction-oriented features. First worth to mention are discounts, which can be tracked by each customer in appropriate section on website. There was also rating system implemented, which gives customers possibility to share thoughts about book with others by leaving review or rating. Additionally system offers special views where customers can display their order statuses, most popular book categories or newly added books.

      Staff of bookstore (employees and managers) have access to management panels through user profile. They can easily manage among others books, users, orders or discount.`,
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
      'Do you struggle with a weak bladder or need quick access to public toilet? Wyszczaj.to makes outdoor events stress-free by helping you locate the nearest public toilet or convenient place to go in just a few seconds. Built as a Progressive Web Application (PWA) works seamlessly on mobile devices and can be installed like a native application for our users convenience.',
    skills: ['TypeScript', 'HTML', 'Tailwind', 'DaisyUI'],
  },
  {
    id: 4,
    title: 'Instalatorstwo elektryczne',
    industry: 'Electrical industry',
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
    description: `Desktop application created with JavaFX and other GUI technnologies (CSS) to support most important operations typical for modern fitness club. System was implemented with usage of serialization mechanisms to store all changes in file and make them visible after restarting application.

      What is most important, development process involved deep research and precise modeling of use cases, helping me understand the business-oriented approach  and how to translate requirements into tech solutions early in my career. I approached implementation of system with attention to detail ensuring system reliability and UX on high level. Finally addressed wide range of business scenarios for both customers and employees.

      Starting with perspective of coach / member, system provides features like registration and authentication, possibility to see opening hours of club or membership management. Thanks to such solutions people can buy / renew their membership without going to gym on-site, saving a lot of time and any doubts. Interesting features for this group of users are also individual user profile with possibility to update avatar / data, schedule displayed as calendar with possibility to sign up for classes, payments history or unique view of membership card appearance. Key operations are much easier to execute and human mistakes are significantly reduced.

      Application also delivers panels for staff (employees and managers) where they can easily manage schedule or access other administration panels, facilitating their daily work.
    `,
    skills: ['Java', 'JavaFX', 'Lombok', 'Maven', 'CSS'],
  },
];

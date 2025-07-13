import FadeInOnScroll from "@/components/home/FadeInOnScroll";
import ProjectSection from "@/components/work/ProjectSection";

const projects = [
  {
    title: "Miesiany Miesiany Kebab",
    industry: "Food & Restaurant industry",
    description:
      "Full-stack application for a kebab restaurant created with Spring and Angular. Application is also intended to serve as a restaurant’s business card, in order to reach a larger number of customers, and to enable the fulfillment and tracking of orders.",
    images: [
      "/projects/miesiany-miesiany-kebab/kebab.jpg",
      "/projects/miesiany-miesiany-kebab/logo.png"
    ],
    technologies: [
      "Java 21",
      "TypeScript",
      "Spring",
      "Angular 18",
      "Bootstrap",
      "Hibernate",
      "Thymeleaf",
      "Maven",
      "JUnit",
      "Mockito",
      "PostgreSQL",
      "HTML",
      "SCSS",
      "Docker",
      "Bash",
    ],
    repoUrl: "https://github.com/P4ZD4N/miesiany-miesiany-kebab",
    completed: false
  },
  {
    title: "Bibliotheca Chudyana",
    industry: "Library industry",
    description:
      'Backend app with subtle frontend elements created for fictional library "Bibliotheca Chudyana", which implements functionalities, that allows to effectively manage company. Automating processes like book and order management, user registration saves time for both employees and customers. The app also improves customer experience by making it easier to search for books, place orders, or leave reviews, leading to higher satisfaction and convenience. Digitization of such library services is attractive to new customers because of easy access to its resources online. Users can browse the library 24/7, which can increase the number of orders placed.',
    images: [
      "/projects/bibliotheca-chudyana/library.jpg",
      "/projects/bibliotheca-chudyana/1.png",
      "/projects/bibliotheca-chudyana/2.png",
      "/projects/bibliotheca-chudyana/3.png",
      "/projects/bibliotheca-chudyana/4.png",
      "/projects/bibliotheca-chudyana/5.png",
      "/projects/bibliotheca-chudyana/6.png",
      "/projects/bibliotheca-chudyana/7.png",
      "/projects/bibliotheca-chudyana/8.png",
      "/projects/bibliotheca-chudyana/9.png",
      "/projects/bibliotheca-chudyana/10.png",
      "/projects/bibliotheca-chudyana/11.png",
      "/projects/bibliotheca-chudyana/12.png",
      "/projects/bibliotheca-chudyana/13.png",
      "/projects/bibliotheca-chudyana/14.png",
      "/projects/bibliotheca-chudyana/15.png",
      "/projects/bibliotheca-chudyana/16.png",
      "/projects/bibliotheca-chudyana/17.png",
      "/projects/bibliotheca-chudyana/18.png",
      "/projects/bibliotheca-chudyana/19.png",
      "/projects/bibliotheca-chudyana/21.png",
      "/projects/bibliotheca-chudyana/22.png",
    ],
    technologies: [
      "Java",
      "Spring",
      "Hibernate",
      "Thymeleaf",
      "Maven",
      "JUnit",
      "Mockito",
      "MySQL",
      "JavaScript",
      "HTML",
      "SCSS",
      "Docker",
    ],
    repoUrl: "https://github.com/P4ZD4N/bibliotheca-chudyana",
    completed: true
  },
  {
    title: "GloboGym",
    industry: "Fitness & Health industry",
    description:
      'App for fictional gym "GloboGym" created with JavaFX. Consists of over 50 classes and is robust system, which deliver a lot of functionalities to both users of gym and employees. Before creating the app, most actions (like member registration, schedule management, payments etc.) would have to be done manually and on-site. I solved this problem and thanks to it app can increase efficiency and revenues. Both gym users and employees can save a lot of time, reduce risk of mistakes and have greater convenience. Customer service and satisfaction are improved, leading to higher loyalty and growth in membership.',
    images: [
      "/projects/globogym/gym.jpg",
      "/projects/globogym/1.png",
      "/projects/globogym/2.png",
      "/projects/globogym/3.png",
      "/projects/globogym/4.png",
      "/projects/globogym/5.png",
      "/projects/globogym/6.png",
      "/projects/globogym/7.png",
      "/projects/globogym/8.png",
      "/projects/globogym/9.png",
      "/projects/globogym/10.png",
      "/projects/globogym/11.png",
      "/projects/globogym/12.png",
      "/projects/globogym/13.png",
      "/projects/globogym/14.png",
      "/projects/globogym/15.png",
      "/projects/globogym/16.png",
      "/projects/globogym/17.png",
      "/projects/globogym/18.png",
      "/projects/globogym/19.png",
      "/projects/globogym/20.png",
      "/projects/globogym/21.png",
    ],
    technologies: ["Java", "JavaFX", "Lombok", "Maven", "CSS"],
    repoUrl: "https://github.com/P4ZD4N/globogym",
    completed: true
  },
  {
    title: "Instalatorstwo elektryczne",
    industry: "Electrical industry",
    description:
      "Comprehensive marketing strategy for a client operating in the electrical industry. My work included: lightweight website, full branding package (custom logo design, vehicle decals for company car, branded t-shirts and jackets for staff, promotional banners highlighting new services and large banner installed on a pole near office), boosting online presence by setting up and optimizing Facebook business page and Google Maps listing to improve local discoverability.",
    images: ["/projects/instalatorstwo-elektryczne/electrician.jpeg"],
    technologies: ["JavaScript", "HTML", "SCSS", "Bootstrap"],
    repoUrl: "https://github.com/P4ZD4N/instalatorstwo-elektryczne",
    liveUrl: "https://marcinchudy.com",
    completed: true
  },
  {
    title: "Wiktor Chudy",
    industry: "Personal website and blog",
    description:
      "Place where other people can discover most information about me (projects, work experience, education etc.) or read articles, where I share my experiences and knowledge",
    images: ["/projects/wiktor-chudy/personal.jpg"],
    technologies: ["TypeScript", "React", "Next.js 15", "HTML", "CSS", "Tailwind"],
    repoUrl: "https://github.com/P4ZD4N/wiktor-chudy",
    liveUrl: "https://wiktorchudy.me",
    completed: false
  },
  {
    title: "Baloney",
    industry: "Social networking",
    description:
      "Full-stack app intended to share memories with other people, who uses it. During development I am mainly responsible for backend development. It is collaborative app, which I create with my friend. During development we do code reviews and exchange our ideas to solve problems more effectively.",
    images: [
      "/projects/baloney/social.jpg"
    ],
    technologies: [
      "Java 21", 
      "Spring Boot", 
      "Spring Security", 
      "Spring Data",
      "Hibernate",
      "Thymeleaf",
      "Maven",
      "PostgreSQL",
      "HTML",
      "Docker",
      "AWS S3",
      "AWS IAM"
    ],
    repoUrl: "https://github.com/surferhand",
    completed: false
  },
  {
    title: "DBee",
    industry: "Data storage systems",
    description:
      "Authorial Relational Database Management System (RDBMS) created with C++20. App is intended to serve as a storage, which enable to manage data with query language similar to SQL. User can create and manage multiple databases within the entire system. While building this system, I learned how relational databases work under the hood - including how they handle schemas, data types, constraints, and foreign keys. This helped me better understand how higher-level tools work and how to connect application development with how databases are actually built.",
    images: [
      "/projects/dbee/database.jpg",
      "/projects/dbee/logo.png"
    ],
    technologies: [
      "C++20",
      "CMake"
    ],
    repoUrl: "https://github.com/P4ZD4N/dbee",
    completed: true
  },
  {
    title: "Area intruders",
    industry: "Game development",
    description:
      "Game based on classic and iconic Space Invaders - arcade game, in which player controls the ship trying to shoot down approaching enemies. The main goal of creating such project was to apply more advanced aspects of Java language in practice. To create it, I used, among others, multithreading mechanisms, lambdas or streams. User interface was implemented with usage of Swing and AWT libraries, which provide powerful tools for building GUI and managing events within game. ",
    images: [
      "/projects/area-intruders/game.jpg",
      "/projects/area-intruders/1.png",
      "/projects/area-intruders/2.png",
      "/projects/area-intruders/3.png",
      "/projects/area-intruders/4.png",
      "/projects/area-intruders/5.png",
      "/projects/area-intruders/6.png",
      "/projects/area-intruders/1.gif"
    ],
    technologies: ["Java", "Swing", "AWT"],
    repoUrl: "https://github.com/P4ZD4N/area-intruders",
    completed: true
  },
  {
    title: "Distributed Averaging System",
    industry: "Networking",
    description:
      "Distributed Averaging System is app that operates in two modes: master and slave. The purpose of the application is to collect numerical data from various instances of the program and calculate the average of these numbers. The application uses the UDP communication protocol to transfer data between devices in the local network.",
    images: [
      "/projects/distributed-averaging-system/1.gif",
      "/projects/distributed-averaging-system/2.gif",
      "/projects/distributed-averaging-system/3.gif",
      "/projects/distributed-averaging-system/4.gif",
      "/projects/distributed-averaging-system/5.png",
    ],
    technologies: [
      "Java 8"
    ],
    repoUrl: "https://github.com/P4ZD4N/distributed-averaging-system",
    completed: true
  },
  {
    title: "Centralized Computing System",
    industry: "Networking",
    description:
      "Java-based server application created to facilitate the detection of its service in a local network, perform arithmetic operations for connected clients and provide statistical reports on its activity. The application operates using both the UDP and TCP protocols to handle different functionalities. The goal of project is to create a robust and efficient server capable of managing multiple clients simultaneously and providing real-time statistics about various operations.",
    images: [
      "/projects/centralized-computing-system/1.gif",
      "/projects/centralized-computing-system/2.png",
      "/projects/centralized-computing-system/3.png",
      "/projects/centralized-computing-system/4.png",
      "/projects/centralized-computing-system/5.png",
      "/projects/centralized-computing-system/6.png",
      "/projects/centralized-computing-system/7.png",
      "/projects/centralized-computing-system/8.png",
      "/projects/centralized-computing-system/9.png",
    ],
    technologies: [
      "Java 8"
    ],
    repoUrl: "https://github.com/P4ZD4N/centralized-computing-system",
    completed: true
  },
];

export default function WorkPage() {
  return (
    <section className="relative mx-auto w-10/12 md:w-3/4 lg:w-9/12 mt-20 flex flex-col gap-16 mb-20">
      <div className="fade-in fixed top-1/2 lg:left-1/80 left-1/4 lg:w-96 lg:h-96 w-64 h-64 bg-orange-500/15 rounded-full -translate-x-1/2 -translate-y-1/2 filter blur-3xl pointer-events-none z-0" />
      <div className="fade-in fixed top-1/2 lg:right-1/80 right-1/4 lg:w-96 lg:h-96 w-64 h-64 bg-orange-500/15 rounded-full translate-x-1/2 -translate-y-1/2 filter blur-3xl pointer-events-none z-0" />

      <div>
        <FadeInOnScroll direction="right" threshold={0.2}>
          <h1 className="text-4xl font-bold text-center mb-4">
            <span className="underline underline-offset-3 decoration-6 decoration-orange-500">
              Work
            </span>
          </h1>
        </FadeInOnScroll>

        <FadeInOnScroll direction="right" threshold={0.2}>
          <p className="text-center text-neutral-400">
            My work is not just about coding. It’s also about understanding the
            needs of different businesses, which is shown by the projects I’ve
            completed for clients in many industries.
          </p>
        </FadeInOnScroll>
      </div>

      <div className="grid gap-8">
        {projects.map((project) => (
          <ProjectSection key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}

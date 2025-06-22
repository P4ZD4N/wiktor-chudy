import ArticleItemList from "@/components/ArticleListItem"
import ProjectCard from "@/components/ProjectCard"
import TechCarousel from "@/components/TechCarousel"
import { getCategoriesArticles } from "@/lib/articles"
import Image from "next/image"

const projects = [
  {
    title: "Miesiany Miesiany Kebab (Gastronomic industry)",
    description: "Full-stack application for a kebab restaurant created with Spring and Angular. Application is also intended to serve as a restaurant’s business card, in order to reach a larger number of customers, and to enable the fulfillment and tracking of orders.",
    image: "/kebab.jpg",
    technologies: ["Java", "TypeScript", "Spring", "Angular", "Bootstrap", "Hibernate", "Thymeleaf", "Maven", "JUnit", "Mockito", "PostgreSQL", "HTML", "SCSS", "Docker", "Bash"],
    repoUrl: "https://github.com/P4ZD4N/miesiany-miesiany-kebab"
  },
  {
    title: "Bibliotheca Chudyana (Bookstore/Library)",
    description: "Backend app for library, which implements a lot of functionalities, that allows to effectively manage company. Created and designed with a thought of meeting all the requirements of a potential customer, who would be interested in ordering such app.",
    image: "/library.jpg",
    technologies: ["Java", "Spring", "Hibernate", "Thymeleaf", "Maven", "JUnit", "Mockito", "MySQL", "JavaScript", "HTML", "SCSS", "Docker"],
    repoUrl: "https://github.com/P4ZD4N/bibliotheca-chudyana",
  },
  {
    title: "GloboGym (Gym industry)",
    description: "Desktop app for gym, created with JavaFX. Consists of over 50 classes and is robust system, which deliver a lot of functionalities to both users and employees. I spent many hours researching and designing all business cases to make the application as reliable as possible. Each feature has been developed with the greatest attention to detail to increase user comfort and reduce the susceptibility to errors. I also created responsive and intuitive UI, which makes app easy to navigate and use.",
    image: "/gym.jpg",
    technologies: ["Java", "JavaFX", "Lombok", "Maven", "CSS"],
    repoUrl: "https://github.com/P4ZD4N/globogym"
  },
  {
    title: "Instalatorstwo elektryczne (Electrician)",
    description: "Comprehensive marketing strategy for a client operating in the electrical industry. My work included: lightweight website, full branding package (custom logo design, vehicle decals for company car, branded t-shirts and jackets for staff, promotional banners highlighting new services and large banner installed on a pole near office), boosting online presence by setting up and optimizing Facebook business page and Google Maps listing to improve local discoverability.",
    image: "/electrician.jpeg",
    technologies: ["JavaScript", "HTML", "SCSS", "Bootstrap"],
    repoUrl: "https://github.com/P4ZD4N/instalatorstwo-elektryczne",
    liveUrl: "https://marcinchudy.com",
  },
]


const HomePage = async () => {
  const articles = await getCategoriesArticles()

  return (
    <section className="relative mx-auto w-11/12 md:w-3/4 lg:w-2/3 xl:w-7/12 mt-20 flex flex-col gap-16 mb-20">

      <div className="fade-in fixed lg:top-1/3 top-1/4 lg:left-1/80 left-1/4 lg:w-96 lg:h-96 w-64 h-64 bg-orange-500/15 rounded-full -translate-x-1/2 -translate-y-1/2 filter blur-3xl pointer-events-none z-0" />
      <div className="fade-in fixed lg:top-1/3 top-1/4 lg:right-1/80 right-1/4 lg:w-96 lg:h-96 w-64 h-64 bg-orange-500/15 rounded-full translate-x-1/2 -translate-y-1/2 filter blur-3xl pointer-events-none z-0" />
    
      <header className="text-center">

        <div className="slide-in-from-right mb-6 md:mb-8 flex justify-center">
          <div className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 relative rounded-full overflow-hidden ring-4 ring-blue-600 dark:ring-orange-500 shadow-lg">
            <Image
              src="/me.jpg"
              alt="Wiktor's photo"
              fill
              className="object-cover object-top"
            />
          </div> 
        </div>

        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white slide-in-from-left">Hey, I&apos;m <mark className="px-2 text-white bg-blue-600 rounded-sm dark:bg-orange-500">Wiktor</mark></h1>
        <h2 className="mb-4 text-2xl font-normal leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white slide-in-from-right">Software <span className="underline underline-offset-3 decoration-6 decoration-orange-400 dark:decoration-orange-500">Developer</span> Intern</h2>
        <p className="slide-in-from-left text-neutral-400">Intern @ Santander Bank Polska and Student @ PJATK with business-oriented approach to problem solving. My work is not just about coding. It’s also about understanding the needs of different businesses, which is shown by the projects I’ve completed for clients in many industries.</p>
      
      </header>

      <TechCarousel />

      <section className="mx-auto w-full md:w-5/6 lg:w-4/5 xl:w-3/4 flex flex-col gap-16">

        <h2 className="text-center mb-4 text-2xl font-normal leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white slide-in-from-right">Know my most important <span className="underline underline-offset-3 decoration-6 decoration-orange-400 dark:decoration-orange-500">projects</span></h2>
       
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section className="md:grid md:grid-cols-2 flex flex-col gap-10">
        {articles !== null &&
          Object.keys(articles).map((article) => (
            <ArticleItemList
              category={article}
              articles={articles[article]}
              key={article}
              />
          ))
        }
      </section>
    </section>
  )
}

export default HomePage
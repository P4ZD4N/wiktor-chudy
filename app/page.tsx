import ContactSection from "@/components/common/ContactSection";
import ProjectCard from "@/components/home/ProjectCard";
import FadeInOnScroll from "@/components/common/FadeInOnScroll";
import TechCarousel from "@/components/home/TechCarousel";
import { getCategoriesArticles } from "@/lib/articles";
import Image from "next/image";
import mostImportantProjects from "@/lib/most-important-projects";
import RecentArticles from "@/components/home/RecentArticles";
import TypingText from "@/components/home/TypingText";

const HomePage = async () => {
  const articles = await getCategoriesArticles();

  return (
    <section className="relative mx-auto w-10/12 md:w-3/4 lg:w-2/3 xl:w-7/12 mt-20 flex flex-col gap-16 mb-20">
      <div className="fade-in fixed top-1/2 lg:left-1/80 left-1/4 lg:w-96 lg:h-96 w-64 h-64 bg-orange-500/15 rounded-full -translate-x-1/2 -translate-y-1/2 filter blur-3xl pointer-events-none z-0" />
      <div className="fade-in fixed top-1/2 lg:right-1/80 right-1/4 lg:w-96 lg:h-96 w-64 h-64 bg-orange-500/15 rounded-full translate-x-1/2 -translate-y-1/2 filter blur-3xl pointer-events-none z-0" />

      <header className="text-center">
        <div className="slide-in-from-right mb-6 md:mb-8 flex justify-center">
          <div className="w-42 h-42 md:w-64 md:h-64 lg:w-64 lg:h-64 relative rounded-full overflow-hidden ring-4 ring-orange-500 shadow-lg">
            <Image
              src="/me.jpg"
              alt="Wiktor's photo"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>

        <h2 className="mb-4 text-3xl font-normal leading-none tracking-tight lg:text-5xl text-white slide-in-from-right">
          Hey, my name is
        </h2>

        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-6xl lg:text-7xl text-white slide-in-from-left">
          <span className="underline underline-offset-3 decoration-6 decoration-orange-500">
            Wiktor Chudy.
          </span>
        </h1>

        <h2 className="mb-4 text-3xl font-bold leading-none tracking-tight lg:text-5xl text-white slide-in-from-right">
          <TypingText />
        </h2>

        <p className="text-lg slide-in-from-left text-neutral-400">
          Software Engineer who combine solid front-end and back-end skills with
          a strong focus on business impact. Currently pursuing degree in
          Computer Science while actively delivering full-stack solutions @
          Santander. Always looking for opportunities where I
          can contribute to impactful projects that help businesses grow and
          succeed.
        </p>
      </header>

      <TechCarousel />

      <section className="mx-auto w-full w-6/6 flex flex-col gap-8">
        <FadeInOnScroll direction="right" threshold={0.2}>
          <h2 className="text-center text-3xl font-bold leading-none tracking-tight md:text-3xl lg:text-4xl text-white">
            Know my most important{" "}
            <span className="underline underline-offset-3 decoration-6 decoration-orange-500">
              projects
            </span>
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll direction="left" threshold={0.2}>
          <p className="slide-in-from-left text-lg text-center text-neutral-400">
            My work is not just about coding. It’s also about understanding the
            needs of different businesses, which is shown by the projects I’ve
            completed for clients in many industries.
          </p>
        </FadeInOnScroll>

        <div className="grid md:grid-cols-2 gap-8">
          {mostImportantProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full :w-4/4 flex flex-col gap-8">
        <FadeInOnScroll direction="right" threshold={0.2}>
          <h2 className="text-center text-3xl font-bold leading-none tracking-tight md:text-3xl lg:text-4xl text-white">
            Looking for
            <span className="underline underline-offset-3 decoration-6 decoration-orange-500">
              {" "}
              inspiration{" "}
            </span>
            or useful
            <span className="underline underline-offset-3 decoration-6 decoration-orange-500">
              {" "}
              knowledge?
            </span>
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll direction="left" threshold={0.2}>
          <p className="text-lg text-center text-neutral-400">
            Check out my blog, where I share my experiences, write about the
            technologies I&apos;m currently learning and offer self-development
            tips! New posts, exciting insights, and plenty to discover.
            Let&apos;s explore my latest articles!
          </p>
        </FadeInOnScroll>

        <RecentArticles allArticles={articles} />
      </section>

      <section className="mx-auto mb-4 w-full w-6/6 flex flex-col">
        <FadeInOnScroll direction="right" threshold={0.2}>
          <h2 className="mb-8 text-center text-3xl font-bold leading-none tracking-tight md:text-3xl lg:text-4xl text-white">
            Contact{" "}
            <span className="underline underline-offset-3 decoration-6 decoration-orange-400 dark:decoration-orange-500">
              me
            </span>
          </h2>
        </FadeInOnScroll>

        <ContactSection />
      </section>
    </section>
  );
};

export default HomePage;

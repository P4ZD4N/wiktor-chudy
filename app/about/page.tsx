import FadeInOnScroll from "@/components/common/FadeInOnScroll";
import EducationSection from "@/components/about/EducationSection";
import StatisticsSection from "@/components/about/StatisticsSection";
import TechSkillsSection from "@/components/about/TechSkillsSection";
import WorkExceperienceSection from "@/components/about/WorkExperienceSection";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="relative mx-auto w-10/12 md:w-3/4 lg:w-2/3 xl:w-7/12 mt-20 flex flex-col gap-16 mb-20">
      <div className="fade-in fixed top-1/2 lg:left-1/80 left-1/4 lg:w-96 lg:h-96 w-64 h-64 bg-orange-500/15 rounded-full -translate-x-1/2 -translate-y-1/2 filter blur-3xl pointer-events-none z-0" />
      <div className="fade-in fixed top-1/2 lg:right-1/80 right-1/4 lg:w-96 lg:h-96 w-64 h-64 bg-orange-500/15 rounded-full translate-x-1/2 -translate-y-1/2 filter blur-3xl pointer-events-none z-0" />

      <section className="md:grid md:grid-cols-2 md:gap-10">
        <div className="slide-in-from-left">
          <h1 className="text-4xl font-bold mb-4">
            About{" "}
            <span className="underline underline-offset-3 decoration-6 decoration-orange-500">
              {" "}
              me
            </span>
          </h1>

          <p className="text-lg text-neutral-400">
            Software Engineer Intern who combine solid fullstack development
            skills with a clear focus on business impact. Currently pursuing
            degree in Computer Science while actively developing applications
            that deliver measurable value. Passionate about clean code, best
            coding practices and elegant technical solutions. Always looking for
            opportunities where I can contribute to impactful projects that help
            businesses grow and succeed.
          </p>

          <p className="text-lg text-neutral-400 mt-4 mb-6 md:mb-0">
            What about hobbies? In my free time I love delve into the next books
            from self-development and business categories - there is always
            something new to learn and apply{" "}
            <a
              className="hover:text-orange-500 transition duration-150 text-orange-500 md:text-neutral-400"
              href="https://www.goodreads.com/user/show/185563841-wiktor-chudy"
              target="_blank"
            >
              (Click to discover my books)
            </a>
            . I am also passionate about various sports, but my favorite are
            gym, long-distance bike and running. Travel is another deep passion
            of mine - exploring new places brings me a lot of joy. And something
            just for fun on the end: I&apos;m a big fan of coffee with milk and
            without sugar - simple pleasure :)
          </p>
        </div>

        <div className="slide-in-from-right flex justify-center items-center">
          <div className="w-132 h-120 sm:h-150 relative rounded overflow-hidden ring-4 ring-orange-500 shadow-lg">
            <Image
              src="/me2.jpeg"
              alt="Wiktor's photo"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      <FadeInOnScroll direction="bottom" threshold={0.2}>
        <blockquote className="text-2xl italic text-center text-neutral-400">
          &quot;Go to bed smarter than when you woke up.&quot; – Charlie Munger
        </blockquote>
      </FadeInOnScroll>

      <StatisticsSection />

      <section className="flex flex-col-reverse md:grid md:grid-cols-2 md:gap-10">
        <TechSkillsSection />

        <div>
          <FadeInOnScroll direction="right" threshold={0.2}>
            <h2 className="text-4xl font-bold mb-4">
              Technical{" "}
              <span className="underline underline-offset-3 decoration-6 decoration-orange-500">
                {" "}
                skills
              </span>
            </h2>
          </FadeInOnScroll>

          <FadeInOnScroll direction="left" threshold={0.2}>
            <p className="text-lg text-neutral-400 mb-4 md:mb-0">
              Because I enjoy selecting the right tools tailored to the specific
              problem, I am highly adaptable and flexible person - always eager
              to learn new ones. As a Fullstack Software Engineer I have
              worked with a wide range of technologies (both through my personal
              projects and professional work) demonstrating a high level of
              proficiency in both frontend and backend development.
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      <section className="flex flex-col gap-10">
        <FadeInOnScroll direction="right" threshold={0.2}>
          <h2 className="text-center text-4xl font-bold mb-4">
            Work{" "}
            <span className="underline underline-offset-3 decoration-6 decoration-orange-500">
              {" "}
              experiece
            </span>
          </h2>
        </FadeInOnScroll>

        <WorkExceperienceSection />
      </section>

      <section className="flex flex-col gap-10">
        <FadeInOnScroll direction="left" threshold={0.2}>
          <h2 className="text-center text-4xl font-bold mb-4">
            <span className="underline underline-offset-3 decoration-6 decoration-orange-500">
              Education
            </span>
          </h2>
        </FadeInOnScroll>

        <EducationSection />
      </section>
    </section>
  );
}

import FadeInOnScroll from "@/components/home/FadeInOnScroll";
import EducationSection from "@/components/about/EducationSection";
import StatisticsSection from "@/components/about/StatisticsSection";
import TechSkillsSection from "@/components/about/TechSkillsSection";
import WorkExceperienceSection from "@/components/about/WorkExperienceSection";
import { Activity, BookOpen, Brain, Coffee } from "lucide-react";
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
          <p className="text-neutral-300">
            Software Developer Intern who combine solid full-stack development
            skills with a clear focus on business impact. Currently pursuing
            degree in Computer Science while actively developing applications
            that deliver measurable value. Passionate about clean code, best
            coding practices and elegant technical solutions. Always looking for
            opportunities where I can contribute to impactful projects that help
            businesses grow and succeed.
          </p>
          <ul className="space-y-3 mt-4 text-neutral-300 mb-4">
            <li className="flex items-center gap-2">
              <Brain className="text-orange-500 w-5 h-5 flex-none" /> Constant
              learner & tech explorer
            </li>
            <li className="flex items-center gap-2">
              <BookOpen className="text-orange-500 w-5 h-5 flex-none" />{" "}
              Passionate about self-development & business books
            </li>
            <li className="flex items-center gap-2">
              <Activity className="text-orange-500 w-5 h-5 flex-none" /> Runner,
              long-distance cyclist & gym regular
            </li>

            <li className="flex items-center gap-2">
              <Coffee className="text-orange-500 w-5 h-5 flex-none" />{" "}
              Caffeinated focus: milk, no sugar
            </li>
          </ul>
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
        <blockquote className="text-xl italic text-center text-neutral-400">
          &quot;Go to bed smarter than when you woke up.&quot; – Charlie Munger
        </blockquote>
      </FadeInOnScroll>

      <StatisticsSection />

      <section className="flex flex-col-reverse md:grid md:grid-cols-2 md:gap-10">
        <TechSkillsSection />

        <div>
          <FadeInOnScroll direction="right" threshold={0.2}>
            <h1 className="text-4xl font-bold mb-4">
              Technical{" "}
              <span className="underline underline-offset-3 decoration-6 decoration-orange-500">
                {" "}
                skills
              </span>
            </h1>
          </FadeInOnScroll>

          <FadeInOnScroll direction="left" threshold={0.2}>
            <p className="text-neutral-300 mb-4 md:mb-0">
              Because I enjoy selecting the right tools tailored to the specific
              problem, I am highly adaptable and flexible person - always eager
              to learn new ones. As a Full-stack Software Developer I have
              worked with a wide range of technologies (both through my personal
              projects and professional work) demonstrating a high level of
              proficiency in both frontend and backend development.
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      <section className="flex flex-col gap-10">
        <FadeInOnScroll direction="right" threshold={0.2}>
          <h1 className="text-center text-4xl font-bold mb-4">
            Work{" "}
            <span className="underline underline-offset-3 decoration-6 decoration-orange-500">
              {" "}
              experiece
            </span>
          </h1>
        </FadeInOnScroll>

        <WorkExceperienceSection />
      </section>

      <section className="flex flex-col gap-10">
        <FadeInOnScroll direction="left" threshold={0.2}>
          <h1 className="text-center text-4xl font-bold mb-4">
            <span className="underline underline-offset-3 decoration-6 decoration-orange-500">
              Education
            </span>
          </h1>
        </FadeInOnScroll>

        <EducationSection />
      </section>
    </section>
  );
}

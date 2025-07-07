import FadeInOnScroll from "@/components/SlideInOnScroll"
import TechSkillsSection from "@/components/TechSkillsSection"
import WorkExceperienceSection from "@/components/WorkExperienceSection"
import Image from "next/image"

export default function AboutPage() {
  return (
    <section className="relative mx-auto w-10/12 md:w-3/4 lg:w-2/3 xl:w-7/12 mt-20 flex flex-col gap-16 mb-20">
        
        <div className="fade-in fixed top-1/2 lg:left-1/80 left-1/4 lg:w-96 lg:h-96 w-64 h-64 bg-orange-500/15 rounded-full -translate-x-1/2 -translate-y-1/2 filter blur-3xl pointer-events-none z-0" />
        <div className="fade-in fixed top-1/2 lg:right-1/80 right-1/4 lg:w-96 lg:h-96 w-64 h-64 bg-orange-500/15 rounded-full translate-x-1/2 -translate-y-1/2 filter blur-3xl pointer-events-none z-0" />
    
        <section className="md:grid md:grid-cols-2 md:gap-10">
            <div className="slide-in-from-left">
                <h1 className="text-4xl font-bold mb-4">About <span className="underline underline-offset-3 decoration-6 decoration-orange-400 dark:decoration-orange-500"> me</span></h1>
                <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                    Software Developer Intern who combine solid full-stack development skills with a clear focus on business impact. Currently pursuing degree in Computer Science while actively developing applications that deliver measurable value. Passionate about clean code, best coding practices and elegant technical solutions. Always looking for opportunities where I can contribute to impactful projects that help businesses grow and succeed.
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

        <section className="flex flex-col-reverse md:grid md:grid-cols-2 md:gap-10">

            <TechSkillsSection />

            <div>
                <FadeInOnScroll direction="right" threshold={0.2}>
                    <h1 className="text-4xl font-bold mb-4">Technical <span className="underline underline-offset-3 decoration-6 decoration-orange-400 dark:decoration-orange-500"> skills</span></h1>
                </FadeInOnScroll>

                <FadeInOnScroll direction="left" threshold={0.2}>
                    <p className="text-neutral-300 mb-4 md:mb-0">
                        Because I enjoy selecting the right tools tailored to the specific problem, I am highly adaptable and flexible person - always eager to learn new ones. As a Full-stack Software Developer I have worked with a wide range of technologies (both through my personal projects and professional work) demonstrating a high level of proficiency in both frontend and backend development.
                    </p>
                </FadeInOnScroll>
            </div>

        </section>

        <section className="flex flex-col gap-10">

            <FadeInOnScroll direction="right" threshold={0.2}>
                <h1 className="text-center text-4xl font-bold mb-4">Work <span className="underline underline-offset-3 decoration-6 decoration-orange-400 dark:decoration-orange-500"> experiece</span></h1>
            </FadeInOnScroll>

            <WorkExceperienceSection />

        </section>


    </section>
  )
}
import SlideBlur from "../common/animations/SlideBlur";
import mostImportantProjects from "@/lib/most-important-projects";
import ProjectCard from "./ProjectCard";

const HEADER_FIRST_PART = "Explore my "
const HEADER_SECOND_PART = "projects"
const PARAGRAPH = `My work is not just about coding. It's also about understanding the
  needs of different businesses, which is shown by the projects I've
  completed for clients in many industries.`;

export default function HomeProjects() {
  return (
    <div className="bg-neutral-950">
      <section className="mt-20 mb-20 mx-auto w-10/12 md:w-3/4 lg:w-2/3 xl:w-7/12 flex flex-col gap-8">
        <SlideBlur duration="0.8s">
          <h2 className="text-center text-3xl font-bold leading-none tracking-tight md:text-3xl lg:text-4xl text-white">
            {HEADER_FIRST_PART}
            <span className="underline underline-offset-3 decoration-6 decoration-orange-500">
              {HEADER_SECOND_PART}
            </span>
          </h2>
        </SlideBlur>

        <SlideBlur duration="0.8s">
          <p className="text-lg text-center text-neutral-400">
            {PARAGRAPH}
          </p>
        </SlideBlur>

        <div className="grid md:grid-cols-2 gap-8">
          {mostImportantProjects.map((project, index) => (
            <ProjectCard key={project.title} {...project} animationDelay={`${index * 0.2}s`} />
          ))}
        </div>
      </section>
    </div>
  );
}

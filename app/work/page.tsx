import ProjectSection from "@/components/work/ProjectSection";
import projects from "@/lib/projects";
import ProjectList from "@/components/work/ProjectList";

const HEADER = "Projects";
const PARAGRAPH = `My work is not just about coding. It’s also about understanding the
  needs of different businesses, which is shown by the projects I’ve
  completed for clients in many industries.`;

type Params = Promise<{ project: string }>

export default async function WorkPage(props: { searchParams: Params }) {
  const params = await props.searchParams;
  const selectedProjectTitle = params.project || projects[0].title;
  const selectedProject =
    projects.find((p) => p.title === selectedProjectTitle) || projects[0];
    
  return (
    <section className="grid grid-cols-1 xl:grid-cols-3 min-h-screen xl:h-screen">
      <ProjectList
        projects={projects}
        selectedTitle={selectedProject.title}
        header={HEADER}
        paragraph={PARAGRAPH}
      />

      <div className="col-span-2 p-10 md:p-20 h-full overflow-y-auto scrollbar-hidden">
        <ProjectSection key={selectedProject.title} {...selectedProject} />
      </div>
    </section>
  );
}


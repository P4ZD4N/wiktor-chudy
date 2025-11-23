"use client";

import { useState } from "react";
import ProjectSection from "@/components/work/ProjectSection";
import projects from "@/lib/projects";
import GentlePop from "@/components/common/animations/GentlePop";

const HEADER = "Work";
const PARAGRAPH = `My work is not just about coding. It’s also about understanding the
  needs of different businesses, which is shown by the projects I’ve
  completed for clients in many industries.`;
const FIRST_BUTTON = "Projects list";
const SECOND_BUTTON = "X";

export default function WorkPage() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <section className="grid grid-cols-1 xl:grid-cols-3 h-screen">
      <button
        className="xl:hidden w-full p-4 bg-orange-500 text-white text-xl font-bold"
        onClick={() => setOpenSidebar((prev) => !prev)}
      >
        {FIRST_BUTTON}
      </button>

      <div
        className={`
          bg-neutral-950 flex flex-col gap-4 overflow-y-auto scrollbar-hidden
          p-10 md:p-20

          xl:col-span-1 xl:relative xl:block
          
          fixed left-0 top-0 w-full h-screen z-50
          transform transition-transform duration-300 ease-in-out 
          ${openSidebar ? "translate-y-0" : "-translate-y-full"}
          
          xl:translate-y-0
        `}
      >
        <GentlePop>
          <button
            className="xl:hidden absolute top-4 right-4 px-3 py-1 bg-orange-500 text-white font-bold rounded-md"
            onClick={() => setOpenSidebar(false)}
          >
            {SECOND_BUTTON}
          </button>
          <h1 className="text-4xl font-bold mb-4 text-center underline underline-offset-3 decoration-6 decoration-orange-500">
            {HEADER}
          </h1>
          <p className="text-lg text-neutral-400 text-center mb-6">
            {PARAGRAPH}
          </p>
        </GentlePop>

        <ul className="flex flex-col gap-3">
          {projects.map((project, index) => (
            <GentlePop
              key={project.title}
              delay={`${index * 0.2}s`}
              threshold={0}
            >
              <li
                key={project.title}
                className={`cursor-pointer py-2 px-3 rounded-lg transform transition-all duration-200
                ${
                  selectedProject.title === project.title
                    ? "bg-orange-500 text-white font-bold shadow-lg scale-105"
                    : "bg-neutral-900 hover:bg-neutral-800 hover:scale-105 hover:shadow-md"
                }`}
                onClick={() => {
                  setSelectedProject(project);
                  setOpenSidebar(false);
                }}
              >
                <div className="flex flex-col">
                  <span className="text-white font-bold">{project.title}</span>
                  <span className="italic">{project.industry}</span>
                </div>
              </li>
            </GentlePop>
          ))}
        </ul>
      </div>

      <div className="col-span-2 p-10 md:p-20 h-full overflow-y-auto scrollbar-hidden">
        <ProjectSection key={selectedProject.title} {...selectedProject} />
      </div>
    </section>
  );
}

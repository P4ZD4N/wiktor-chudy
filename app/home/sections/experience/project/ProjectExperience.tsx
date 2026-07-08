'use client';

import { useState } from 'react';
import { projectsData } from './ProjectsData';

export default function ProjectExperience() {
  const [activeProjectId, setActiveProjectId] = useState<number>(1);
  const activeProject =
    projectsData.find((project) => project.id === activeProjectId) ||
    projectsData[0];

  return (
    <div className="w-full py-8 px-4 animate-fade-in">
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 min-h-[300px]">
        <div className="xl:self-start xl:h-fit flex flex-row xl:flex-col overflow-x-auto xl:overflow-x-visible border-b xl:border-b-0 xl:border-l border-white/30 pb-2 xl:pb-0 scrollbar-none gap-2">
          {projectsData.map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveProjectId(project.id)}
              className={`flex-1 xl:flex-none text-left px-2 py-2 md:px-4 md:py-3 rounded-xl transition-all whitespace-nowrap xl:whitespace-normal cursor-pointer text-sm xl:text-base ${
                activeProjectId === project.id
                  ? 'bg-white/10 text-white font-medium border-l-0 xl:border-l-4 xl:border-l-blue-500 xl:rounded-l-none'
                  : 'text-white/40 hover:text-white/70 hover:bg-white/10 hover:rounded-l-none'
              }`}
            >
              <div
                className="bg-gradient-to-r from-primary to-secondary
                  bg-clip-text text-transparent text-base md:text-lg font-semibold"
              >
                {project.title}
              </div>
              <div className="text-white/50 hidden xl:block mt-0.5">
                {project.industry}
              </div>
            </button>
          ))}
        </div>

        <div className="xl:col-span-3 flex flex-col justify-between py-2">
          <div key={activeProjectId} className="animate-fade-in-subtle">
            <div className="flex justify-between sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <h3 className="flex flex-col items-start text-2xl font-bold text-gray-300 tracking-tight">
                <span
                  className="bg-gradient-to-r from-primary to-secondary
                      bg-clip-text text-transparent text-lg md:text-xl font-medium"
                >
                  {activeProject.industry}
                </span>
                <span className="text-xl md:text-2xl text-gray-300">
                  {activeProject.title}
                </span>
              </h3>
            </div>

            <p className="text-left text-gray-300 leading-relaxed text-base md:text-lg mb-8 whitespace-pre-line">
              {activeProject.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {activeProject.skills.map((skill) => (
                <div
                  key={skill}
                  className="relative overflow-hidden text-sm md:text-base font-mono text-gray-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/5"
                >
                  <div className="absolute -top-10 -right-10 h-70 w-70 rounded-full bg-gradient-to-r from-primary to-secondary opacity-50 blur-[110px]" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

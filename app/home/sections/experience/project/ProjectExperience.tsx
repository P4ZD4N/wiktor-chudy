'use client';

import FadeIn from '@/app/home/common/animations/FadeIn';
import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';
import { projectsData } from './ProjectsData';

export default function ProjectExperience() {
  const [activeProjectId, setActiveProjectId] = useState<number>(1);
  const activeProject =
    projectsData.find((project) => project.id === activeProjectId) ||
    projectsData[0];

  return (
    <div className="w-full animate-fade-in-subtle">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-3 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scrollbar-none">
          {projectsData.map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveProjectId(project.id)}
              className={`
                cursor-pointer group relative flex flex-col items-start px-6 py-5 rounded-3xl transition-all duration-300 shrink-0 lg:shrink w-64 lg:w-full text-left overflow-hidden
                ${
                  activeProjectId === project.id
                    ? 'bg-white/[0.06] border border-white/10 shadow-lg'
                    : 'bg-white/[0.02] border border-white/[0.02] hover:bg-white/[0.04] hover:border-white/10'
                }
              `}
            >
              {activeProjectId === project.id && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-12 bg-primary rounded-r-full" />
              )}

              <div className="text-sm font-medium text-gray-500 mb-1 group-hover:text-gray-400 transition-colors">
                {project.industry}
              </div>
              <div
                className={`text-base font-bold transition-colors ${
                  activeProjectId === project.id
                    ? 'text-white'
                    : 'text-gray-400 group-hover:text-gray-200'
                }`}
              >
                {project.title}
              </div>
            </button>
          ))}
        </div>

        <div className="lg:col-span-9">
          {/* Zmieniono div na FadeIn, dodano key oraz delay={0} */}
          <FadeIn
            key={activeProjectId}
            direction="up"
            delay={0}
            blur={false}
            className="relative h-fit flex flex-col p-8 md:p-10 backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-3xl group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-8">
                <div className="flex flex-col">
                  <h3 className="text-left text-lg md:text-xl font-semibold tracking-wider text-primary uppercase mb-1">
                    {activeProject.industry}
                  </h3>
                  <h2 className="text-left text-xl md:text-2xl font-bold text-white">
                    {activeProject.title}
                  </h2>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {activeProject.repoUrl && (
                    <a
                      href={activeProject.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-sm font-semibold text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  )}
                  {activeProject.liveUrl && (
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary/10 border border-primary/20 text-sm font-semibold text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                    >
                      <ExternalLink size={16} />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </div>

              <div className="w-full h-px bg-white/[0.08] mb-8" />

              <p className="text-left text-gray-400 leading-relaxed text-base mb-8 whitespace-pre-line">
                {activeProject.description}
              </p>
            </div>

            <div className="relative z-10 pt-8 border-t border-white/[0.08]">
              <div className="flex flex-wrap gap-2">
                {activeProject.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-sm font-medium text-gray-400 hover:bg-white/[0.08] hover:border-white/20 hover:text-white transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}

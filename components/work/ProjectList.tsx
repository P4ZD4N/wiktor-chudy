"use client";

import { useState } from "react";
import GentlePop from "@/components/common/animations/GentlePop";
import Link from "next/link";

const FIRST_BUTTON = "Projects list";
const SECOND_BUTTON = "X";

export default function ProjectList({
  projects,
  selectedProjectUrl,
  header,
  paragraph,
}: {
  projects: { title: string; industry: string, url: string }[];
  selectedProjectUrl: string;
  header: string;
  paragraph: string;
}) {
  const [openSidebar, setOpenSidebar] = useState(false);
  const projectUrl = (url: string) => {
    return `?project=${encodeURIComponent(url)}`;
  };

  return (
    <>
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
          
          fixed left-0 top-0 w-full h-full z-20
          transform transition-transform duration-300 ease-in-out 
          ${openSidebar ? "translate-y-0" : "-translate-y-full"}
          
          xl:translate-y-0
        `}
      >
        <GentlePop>
          <button
            className="xl:hidden w-full px-3 py-1 bg-orange-500 text-white font-bold rounded-md"
            onClick={() => setOpenSidebar(false)}
          >
            {SECOND_BUTTON}
          </button>
          <h1 className="text-4xl font-bold mt-4 xl:mt-0 mb-4 text-center underline underline-offset-3 decoration-6 decoration-orange-500">
            {header}
          </h1>
          <p className="hidden xl:block text-lg text-neutral-400 text-center mb-6">
            {paragraph}
          </p>
        </GentlePop>

        <ul className="flex flex-col gap-3">
          {projects.map((project, index) => {
            const listItem = (
              <Link
                href={projectUrl(project.url)}
                key={project.title}
                className={`
                  cursor-pointer py-2 px-3 rounded-lg transform transition-all duration-200 block
                  ${
                    selectedProjectUrl === project.url
                      ? "bg-orange-500 text-white font-bold shadow-lg scale-105"
                      : "bg-neutral-900 hover:bg-neutral-800 hover:scale-105 hover:shadow-md"
                  }
                `}
                onClick={() => setOpenSidebar(false)}
              >
                <div className="flex flex-col">
                  <span className="text-white font-bold">{project.title}</span>
                  <span className="italic">{project.industry}</span>
                </div>
              </Link>
            );

            if (openSidebar) return <div key={project.title}>{listItem}</div>;

            return (
              <GentlePop key={project.title} delay={`${0.2 + index * 0.2}s`}>
                {listItem}
              </GentlePop>
            );
          })}
        </ul>
      </div>
    </>
  );
}

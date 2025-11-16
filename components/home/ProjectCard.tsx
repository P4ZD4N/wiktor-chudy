"use client";

import SlideBlur from "../common/animations/SlideBlur";
import { FC } from "react";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  industry: string;
  description: string;
  image: string;
  technologies: string[];
  repoUrl?: string;
  liveUrl?: string;
  animationDelay?: string;
}

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  industry,
  description,
  image,
  technologies,
  repoUrl,
  liveUrl,
  animationDelay,
}) => {
  return (
    <SlideBlur
      duration="0.6s"
      delay={`${animationDelay ? animationDelay : "0s"}`}
      threshold={0.2}
    >
      <div className="rounded-2xl overflow-hidden bg-transparent shadow-lg border border-zinc-700 hover:shadow-xl">
        <div className="relative w-full h-48 md:h-64">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <div className="p-4 space-y-3">
          <div>
            <h3 className="mb-0 text-2xl font-semibold text-white">{title}</h3>
            <h4 className="italic text-xl font-medium text-gray-300 mb-2 tracking-wide">
              {industry}
            </h4>
          </div>

          <p className="text-lg text-neutral-400">{description}</p>

          <ul className="flex flex-wrap gap-2 text-md">
            {technologies.map((tech) => (
              <li
                key={tech}
                className="bg-orange-500 px-2 py-1 rounded text-white"
              >
                {tech}
              </li>
            ))}
          </ul>

          <hr className="border-t-2 border-zinc-700 mb-5 mt-5" />

          <div className="flex justify-between items-center">
            {repoUrl && (
              <a
                className="flex items-center gap-1 hover:text-orange-500 transition duration-150"
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6" />
                <span>Code</span>
              </a>
            )}
            {liveUrl && (
              <a
                className="flex items-center gap-1 hover:text-orange-500 transition duration-150"
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-6 h-6" />
                <span>Live</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </SlideBlur>
  );
};

export default ProjectCard;

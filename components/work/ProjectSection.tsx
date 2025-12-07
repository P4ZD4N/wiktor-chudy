"use client";

import { FC } from "react";
import {
  Github,
  ExternalLink,
  PencilLine,
  Lightbulb,
  Wrench,
  Camera,
} from "lucide-react";
import PhotoGallery from "./PhotoGallery";
import FadeUp from "../common/animations/FadeUp";

interface ProjectCardProps {
  title: string;
  industry: string;
  description: string;
  images: string[];
  features: string[];
  technologies: string[];
  repoUrl?: string;
  liveUrl?: string;
}

const ProjectSection: FC<ProjectCardProps> = ({
  title,
  industry,
  description,
  images,
  features,
  technologies,
  repoUrl,
  liveUrl,
}) => {
  return (
    <div className="overflow-hidden bg-transparent">
      <FadeUp duration="0.5s" threshold={0}>
        <div>
          <h3 className="text-center text-4xl sm:text-6xl font-bold text-white">{title}</h3>

          <h4 className="mt-2 text-center italic text-xl sm:text-3xl font-medium text-gray-300 tracking-wide">
            {industry}
          </h4>
        </div>

        <div className="justify-center flex gap-4 mt-2">
          {repoUrl && (
            <a
              className="group p-1 sm:p-3 border border-2 border-gray-300 rounded-full flex items-center gap-1 hover:border-orange-500 transition duration-150"
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="duration-150 group-hover:text-orange-500 text-gray-300 w-6 h-6 sm:w-8 sm:h-8" />
            </a>
          )}
          {liveUrl && (
            <a
              className="group p-1 sm:p-3 border border-2 border-gray-300 rounded-full flex items-center gap-1 hover:border-orange-500 transition duration-150"
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="duration-150 group-hover:text-orange-500 text-gray-300 w-6 h-6 sm:w-8 sm:h-8" />
            </a>
          )}
        </div>

        <h3 className="flex justify-center items-center gap-3 my-10 rounded-full bg-orange-500 text-center font-bold text-2xl sm:text-3xl">
          <PencilLine className="w-6 h-6 sm:w-8 sm:h-8" />
          Description
        </h3>

        <p className="whitespace-pre-line text-neutral-400 text-md sm:text-lg">{description}</p>

        <h3 className="flex justify-center items-center gap-3 my-10 rounded-full bg-orange-500 text-center font-bold text-2xl sm:text-3xl">
          <Wrench className="w-6 h-6 sm:w-8 sm:h-8" />
          Tech stack
        </h3>

        <ul className="flex flex-wrap gap-2 text-md">
          {technologies.map((tech) => (
            <li
              key={tech}
              className="px-3 py-1 text-md sm:text-lg bg-neutral-950 border border-neutral-700 rounded-full text-white"
            >
              {tech}
            </li>
          ))}
        </ul>

        {features.length > 0 && (
          <h3 className="flex justify-center items-center gap-3 my-10 rounded-full bg-orange-500 text-center font-bold text-2xl sm:text-3xl">
            <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8" />
            Features
          </h3>
        )}

        <ul className="flex flex-col gap-2 text-md sm:text-lg mt-4">
          {features.map((feat) => (
            <li key={feat}>
              <span className="text-orange-500 text-xl">•</span> {feat}
            </li>
          ))}
        </ul>

        {images.length > 0 && (
          <h3 className="flex justify-center items-center gap-3 my-10 rounded-full bg-orange-500 text-center font-bold text-2xl sm:text-3xl">
            <Camera className="w-6 h-6 sm:w-8 sm:h-8" />
            Gallery
          </h3>
        )}

        {images.length > 0 && <PhotoGallery images={images} />}
      </FadeUp>
    </div>
  );
};

export default ProjectSection;

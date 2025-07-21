"use client";

import { FC } from "react";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import PhotoGallery from "./PhotoGallery";

interface ProjectCardProps {
  title: string;
  industry: string;
  description: string;
  images: string[];
  technologies: string[];
  repoUrl?: string;
  liveUrl?: string;
}

const ProjectSection: FC<ProjectCardProps> = ({
  title,
  industry,
  description,
  images,
  technologies,
  repoUrl,
  liveUrl,
}) => {
  return (
    <motion.div
      className="overflow-hidden bg-transparent"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <PhotoGallery images={images} />
      
      <div className="pb-4 pt-4 space-y-3">
        <div>
          <h3 className="text-center mt-5 lg:mt-10 mb-0 text-xl lg:text-2xl font-semibold text-white">{title}</h3>
          <h4 className="text-center  italic text-lg lg:text-xl font-medium text-gray-300 mb-2 tracking-wide">
            {industry}
          </h4>
          <div className="justify-center flex gap-4 mt-2">
            {repoUrl && (
              <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                <Github className=" w-6 h-6 lg:w-7 lg:h-7 hover:text-orange-500 transition duration-150" />
              </a>
            )}
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-6 h-6 lg:w-7 lg:h-7 hover:text-orange-500 transition duration-150" />
              </a>
            )}
          </div>
        </div>

        <p className="text-neutral-400 lg:text-lg">{description}</p>
        <ul className="flex flex-wrap gap-2 text-sm lg:text-base">
          {technologies.map((tech) => (
            <li key={tech} className="bg-orange-500 px-2 py-1 rounded text-white">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ProjectSection;

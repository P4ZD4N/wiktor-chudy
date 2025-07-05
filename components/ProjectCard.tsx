// components/ProjectCard.tsx
"use client"

import { FC } from "react"
import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string,
  industry: string,
  description: string
  image: string
  technologies: string[]
  repoUrl?: string
  liveUrl?: string
}

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  industry,
  description,
  image,
  technologies,
  repoUrl,
  liveUrl,
}) => {
  return (
    <motion.div 
      className="rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 shadow-lg border border-gray-200 dark:border-zinc-700 hover:shadow-xl"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="relative w-full h-48 md:h-64">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4 space-y-3">
        <div>
          <h3 className="mb-0 text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
          <h4 className="italic text-md font-medium text-gray-700 dark:text-gray-300 mb-2 tracking-wide">{industry}</h4>
          <div className="flex gap-4 mt-2">
          {repoUrl && (
            <a href={repoUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 hover:text-orange-500 transition duration-150"  />
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-5 h-5 hover:text-orange-500 transition duration-150" />
            </a>
          )}
        </div>
        </div>
        
        
        <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
        <ul className="flex flex-wrap gap-2 text-xs text-white">
          {technologies.map((tech) => (
            <li key={tech} className="bg-blue-600 dark:bg-orange-500 px-2 py-1 rounded">{tech}</li>
          ))}
        </ul>
        
      </div>
    </motion.div>
  )
}

export default ProjectCard

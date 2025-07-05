// components/ProjectCard.tsx
"use client"

import { FC } from "react"
import { motion } from "framer-motion"
import moment from "moment"

interface ArticleCardProps {
    id: string,
    title: string
    date: string
    categories: string[]
}

const ArticleCard: FC<ArticleCardProps> = ({ id, title, date, categories }) => {
  return (
    <motion.div 
      className="rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 shadow-lg border border-gray-200 dark:border-zinc-700 hover:shadow-xl"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="p-4 space-y-3">
        <div>
          <a href={id} target="_blank" rel="noopener noreferrer" className="">
            <h3 className="mb-0 text-xl font-semibold text-gray-900 dark:text-white hover:text-orange-500 transition duration-450">{title}</h3>
          </a>
        </div>

        <div className="flex flex-wrap gap-2">
            {categories.map((category: string) => (
            <span
                key={category}
                className="bg-orange-500 text-natural text-xs font-medium px-2.5 py-0.5 rounded dark:bg-orange-500 dark:text-natural"
            >
                #{category}
            </span>
            ))}
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm">{moment(date, "DD-MM-YYYY").format("Do MMMM YYYY")}</p>

      </div>
    </motion.div>
  )
}

export default ArticleCard

"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import moment from "moment";

interface ArticleCardProps {
  id: string;
  title: string;
  date: string;
  categories: string[];
}

const ArticleCard: FC<ArticleCardProps> = ({ id, title, date, categories }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <a
        href={id}
        rel="noopener noreferrer"
        className="flex items-center h-full gap-4 p-4 rounded-xl bg-transparent border border-zinc-700 hover:border-orange-500 transition-all duration-300 hover:shadow-lg group"
      >
        <div className="p-4 space-y-3">
          <h3 className="text-xl font-semibold text-white">{title}</h3>

          <div className="flex flex-wrap gap-2">
            {categories.map((category: string) => (
              <span
                key={category}
                className="text-sm font-medium px-2.5 py-0.5 rounded bg-orange-500 text-natural"
              >
                #{category}
              </span>
            ))}
          </div>

          <p className="text-neutral-400">
            {moment(date, "DD-MM-YYYY").format("Do MMMM YYYY")}
          </p>
        </div>
      </a>
    </motion.div>
  );
};

export default ArticleCard;

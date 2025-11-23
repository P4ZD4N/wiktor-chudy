"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import moment from "moment";
import FadeUp from "../common/animations/FadeUp";

interface ArticleCardProps {
  id: string;
  title: string;
  date: string;
  categories: string[];
  animationDelay?: string;
}

const ArticleCard: FC<ArticleCardProps> = ({
  id,
  title,
  date,
  categories,
  animationDelay,
}) => {
  return (
    <FadeUp
      duration="0.6s"
      delay={`${animationDelay ? animationDelay : "0s"}`}
      threshold={0.2}
    >
      <a
        href={id}
        rel="noopener noreferrer"
        className="flex items-center h-full gap-4 p-4 rounded-xl bg-neutral-950 border border-zinc-700 hover:border-orange-500 transition-all duration-300 hover:shadow-lg group"
      >
        <div className="p-4 space-y-3">
          <h3 className="text-xl font-semibold text-white">{title}</h3>

          <div className="flex flex-wrap gap-2">
            {categories.map((category: string) => (
              <span
                key={category}
                className="text-md font-medium px-2.5 py-0.5 rounded bg-orange-500 text-natural"
              >
                #{category}
              </span>
            ))}
          </div>

          <p className="text-lg text-neutral-400">
            {moment(date, "DD-MM-YYYY").format("Do MMMM YYYY")}
          </p>
        </div>
      </a>
    </FadeUp>
  );
};

export default ArticleCard;

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HorizontalArticleFilter = ({ categories }: { categories: string[] }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  const handleCheckboxChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="space-y-4">
      <div className="rounded bg-transparent border border-zinc-700 hover:border-orange-500 transition-all duration-300 hover:shadow-lg shadow-sm cursor-pointer">
        <button
          className="cursor-pointer w-full flex items-center justify-between gap-2 p-3 text-white transition-colors"
          onClick={() => setOpen(!open)}
        >
          <span className="text-xl font-bold">Category</span>
          <motion.span
            initial={false}
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden border-t border-zinc-700 bg-transparent"
            >
              <fieldset className="p-3">
                <legend className="sr-only">Checkboxes</legend>
                <div className="flex flex-col items-start gap-3">
                  {categories.map((category, index) => (
                    <label
                      key={index}
                      htmlFor={`cat-${index}`}
                      className="inline-flex items-center gap-3"
                    >
                      <input
                        type="checkbox"
                        className="cursor-pointer size-5 rounded accent-orange-500 shadow-sm"
                        id={`cat-${index}`}
                        name="categories"
                        value={category}
                        onChange={() => handleCheckboxChange(category)}
                        checked={selectedCategories.includes(category)}
                      />
                      <span className="text-sm font-medium text-white">
                        {category}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        <div className="text-white flex flex-wrap gap-2">
          {selectedCategories.map((category) => (
            <motion.span
              key={category}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="text-xl font-medium px-2 py-2 rounded bg-orange-500 text-neutral-50"
            >
              #{category}
            </motion.span>
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default HorizontalArticleFilter;

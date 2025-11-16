"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

interface FadeInOnScrollProps {
  children: React.ReactNode;
  direction?: "left" | "right" | "bottom";
  threshold?: number;
  delay?: number;
}

const FadeInOnScroll = ({
  children,
  direction = "left",
  threshold = 0.2,
  delay = 0,
}: FadeInOnScrollProps) => {
  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
      y: direction === "bottom" ? 50 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.7,
        delay,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: threshold }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInOnScroll;

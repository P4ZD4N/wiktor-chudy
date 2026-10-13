'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: Direction;
  distance?: number;
  blur?: boolean;
}

export default function FadeIn({
  children,
  delay = 0,
  className = '',
  direction = 'up',
  distance = 40,
  blur = true,
}: FadeInProps) {
  const getInitialPositions = () => {
    switch (direction) {
      case 'up':
        return { y: distance, x: 0 };
      case 'down':
        return { y: -distance, x: 0 };
      case 'left':
        return { x: distance, y: 0 };
      case 'right':
        return { x: -distance, y: 0 };
      case 'none':
        return { x: 0, y: 0 };
      default:
        return { y: distance, x: 0 };
    }
  };

  const { x, y } = getInitialPositions();
  const initialStyles = blur
    ? { opacity: 0, x, y, filter: 'blur(10px)' }
    : { opacity: 0, x, y };
  const animateStyles = blur
    ? { opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }
    : { opacity: 1, x: 0, y: 0 };

  return (
    <motion.div
      initial={initialStyles}
      whileInView={animateStyles}
      viewport={{ once: true }}
      transition={{
        duration: 0.9,
        delay: delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

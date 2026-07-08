'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SingleColorAnchorProps {
  text: string;
  href: string;
  color: string;
  icon?: ReactNode;
}

export default function SingleColorAnchor(props: SingleColorAnchorProps) {
  return (
    <motion.a
      href={props.href}
      whileTap={{ scale: 0.95 }}
      className={`bg-${props.color} flex items-center justify-center gap-3 lg:text-xl font-bold py-2 lg:py-3 px-4 lg:px-6 rounded-xl border border-white/20 cursor-pointer text-gray-300 hover:-translate-y-1.5 transition-transform duration-300 ease-out`}
    >
      {props.icon}
      {props.text}
    </motion.a>
  );
}

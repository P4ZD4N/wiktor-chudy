"use client";

import { motion } from "framer-motion";

export default function StatisticsSection() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h3 className="text-3xl font-bold text-orange-500">3+</h3>
        <p className="text-neutral-400">Years of non-commercial experience</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h3 className="text-3xl font-bold text-orange-500">10+</h3>
        <p className="text-neutral-400">Projects completed</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h3 className="text-3xl font-bold text-orange-500">100%</h3>
        <p className="text-neutral-400">Commitment</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h3 className="text-3xl font-bold text-orange-500">∞</h3>
        <p className="text-neutral-400">Willingness to learn</p>
      </motion.div>
    </section>
  );
}

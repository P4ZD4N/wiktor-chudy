import { motion } from "framer-motion";

type StatisticProps = {
  title: string;
  subtitle: string;
  delay: number;
};

export default function Statistic({ title, subtitle, delay }: StatisticProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: delay }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h3 className="text-3xl font-bold text-orange-500">{title}</h3>
      <p className="text-neutral-400">{subtitle}</p>
    </motion.div>
  );
}

"use client";

import Statistic from "./Statistic";

export default function StatisticsSection() {
  return (
    <section className="text-lg grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
      <Statistic title="3+" subtitle="Years of non-commercial experience" delay={0} />
      <Statistic title="10+" subtitle="Projects completed" delay={0.2} />
      <Statistic title="100%" subtitle="Commitment" delay={0.4} />
      <Statistic title="∞" subtitle="Willingness to learn" delay={0.6} />
    </section>
  );
}

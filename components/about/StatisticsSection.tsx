"use client";

import Statistic from "./Statistic";

export default function StatisticsSection() {
  return (
    <div className="bg-background-2">
      <section className="mt-20 mb-20 mx-auto w-10/12 md:w-3/4 lg:w-2/3 xl:w-7/12 ">
        <section className=" text-lg grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <Statistic
            title="1+"
            subtitle="Years of commercial experience"
            delay={0.2}
          />
          <Statistic title="10+" subtitle="Projects completed" delay={0.4} />
          <Statistic title="100%" subtitle="Commitment" delay={0.6} />
          <Statistic title="∞" subtitle="Willingness to learn" delay={0.8} />
        </section>
      </section>
    </div>
  );
}

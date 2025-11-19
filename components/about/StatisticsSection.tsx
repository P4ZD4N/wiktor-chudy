"use client";

import Statistic from "./Statistic";
import FadeUp from "../common/animations/FadeUp";

const BLOCKQUOTE =
  '"Go to bed smarter than when you woke up." – Charlie Munger';

export default function StatisticsSection() {
  return (
    <div className="bg-neutral-950">
      <section className="mt-20 mb-20 mx-auto w-10/12 md:w-3/4 lg:w-2/3 xl:w-7/12 ">
        <FadeUp delay="0s">
          <blockquote className="text-2xl italic text-center text-neutral-400 mb-10">
            {BLOCKQUOTE}
          </blockquote>
        </FadeUp>
        <section className=" text-lg grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <Statistic
            title="3+"
            subtitle="Years of non-commercial experience"
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

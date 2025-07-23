"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import schools from "@/lib/schools";

export default function EducationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      const section = sectionRef.current;
      const scrollContainer = scrollContainerRef.current;
      if (!section || !scrollContainer) return;

      const rect = section.getBoundingClientRect();
      const shouldBeActive = rect.top <= 0 && rect.bottom > window.innerHeight;

      if (shouldBeActive && !isActive) {
        setIsActive(true);
        document.body.style.overflow = "hidden";
        e.preventDefault();
      } else if (shouldBeActive && isActive) {
        e.preventDefault();

        const scrollHeight =
          scrollContainer.scrollHeight - scrollContainer.clientHeight;
        const currentScroll = scrollContainer.scrollTop;

        const progress = scrollHeight > 0 ? currentScroll / scrollHeight : 0;

        if (progress >= 1 && e.deltaY > 0) {
          setIsActive(false);
          document.body.style.overflow = "auto";
          return;
        }

        const scrollAmount = e.deltaY * 0.5;
        scrollContainer.scrollTop += scrollAmount;
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    const handleWindowScroll = () => {
      if (isActive) return;

      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const shouldBeActive = rect.top <= 0 && rect.bottom > 0;

      if (!shouldBeActive && isActive) {
        setIsActive(false);
        document.body.style.overflow = "auto";
      }
    };

    window.addEventListener("scroll", handleWindowScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("scroll", handleWindowScroll);
      document.body.style.overflow = "auto";
    };
  }, [isActive]);

  useEffect(() => {
    if (isActive && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [isActive]);

  return (
    <motion.div
      ref={sectionRef}
      className="w-full relative"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div
        ref={scrollContainerRef}
        className="h-full w-full overflow-y-scroll text-white scrollbar-hide"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div className="flex flex-col gap-10">
          {schools.map((school, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-stretch justify-between w-full"
            >
              <div className="text-left md:w-1/3">
                <h2 className="text-2xl font-bold">{`${school.start_date} - ${school.end_date}`}</h2>
              </div>
              <div className="text-left md:w-2/3">
                <h2 className="text-2xl">
                  <mark className="px-2 text-white bg-orange-500 rounded-sm font-bold">
                    {school.school}
                  </mark>
                </h2>
                <h3 className="text-xl">{`${school.title} | ${school.field}`}</h3>
                <ul className="text-lg text-neutral-300 space-y-2">
                  {school.description.length > 0 &&
                    school.description.map((item, idx) => (
                      <li key={idx}>🟠 {item}</li>
                    ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </motion.div>
  );
}

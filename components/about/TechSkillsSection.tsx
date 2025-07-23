"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import mainTechnologies from "@/lib/main-technologies";
import alsoWorkedWithTechnologies from "@/lib/also-worked-with-technologies";

export default function TechSkillsSection() {
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
      className="h-[70vh] w-full relative"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div
        ref={scrollContainerRef}
        className="h-full w-full overflow-y-scroll text-white custom-scrollbar"
      >
        <h2 className="text-2xl font-bold mb-6">
          Main{" "}
          <mark className="px-2 text-white bg-orange-500 rounded-sm">
            tech stack
          </mark>
        </h2>
        <div className="grid grid-cols-3 gap-x-8 gap-y-8">
          {mainTechnologies.map((tech, index) => (
            <div key={index} className="flex flex-col items-stretch w-full">
              <Image
                src={tech.icon}
                alt={tech.name}
                width={48}
                height={48}
                className="w-12 h-12 mb-2"
                title={tech.name}
              />
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-6 mb-6">
          Also{" "}
          <mark className="px-2 text-white bg-orange-500 rounded-sm">
            worked with
          </mark>
        </h2>

        <div className="grid grid-cols-3 gap-x-8 gap-y-8">
          {alsoWorkedWithTechnologies.map((tech, index) => (
            <div key={index} className="flex flex-col items-stretch w-full">
              <Image
                src={tech.icon}
                alt={tech.name}
                width={48}
                height={48}
                className="w-12 h-12 mb-2"
                title={tech.name}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .custom-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        @media (min-width: 1024px) {
          .custom-scrollbar::-webkit-scrollbar {
            display: block;
            width: 8px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #f97316
          border-radius: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }

        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #f97316 transparent;
        }
      `}</style>
    </motion.div>
  );
}

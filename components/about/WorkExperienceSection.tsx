"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Software Developer Intern",
    employment_type: "Internship",
    company: "Santander Bank Polska",
    start_date: "July 2025",
    end_date: "",
    location: "",
    location_type: "Remote",
    description: [],
    tech_stack: ["TypeScript", "Angular", "HTML", "CSS", "Linux"],
  },
  {
    title: "Software Developer Apprentice",
    employment_type: "Apprenticeship",
    company: "Grupa ABS",
    start_date: "March 2022",
    end_date: "April 2022",
    location: "Częstochowa",
    location_type: "On-site",
    description: [
      "Developed responsive front-end solutions for podarujkarte.pl platform with focus on intuitive UX and high-quality card design implementation to optimize user engagement and platform usability,",
      "Supported business expansion of wciagnij.to portal through data acquisition, market analysis and building foundational restaurant database to enable platform growth in the Cracow region,",
      "Enhancing proficiency in front-end technologies through platforms like freeCodeCamp, Flexbox Froggy, Grid Garden and FrontEnd Mentor, resulting in improved code quality and faster project delivery,",
      "Consistently delivered high-quality programming solutions within established deadlines, contributed to team productivity and project success through efficient task execution,",
      "Built responsive websites using modern web technologies (HTML5, CSS3, Bootstrap, JavaScript) - enhanced UX, optimized SEO and improved site performance metrics,",
      "Launched and maintained personal blog on WordPress CMS and learned how to build online presence,",
      "Performing manual testing of mobile applications to identify bugs and search opportunities for optimization.",
    ],
    tech_stack: ["HTML", "CSS", "JavaScript", "WordPress"],
  },
  {
    title: "Computer Service Technician Apprentice",
    employment_type: "Apprenticeship",
    company: "Knopik-Belowski Sp.j.",
    start_date: "November 2020",
    end_date: "December 2020",
    location: "Częstochowa",
    location_type: "On-site",
    description: [
      "Installation and configuration of software on computers and phones (including installation of operating systems such as Linux and Windows), ",
      "Testing, diagnostics and repair of computer hardware and peripheral devices, ",
      "Preparing reports on tested computer hardware and peripheral devices.",
    ],
    tech_stack: [],
  },
];

export default function WorkExceperienceSection() {
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
        className="h-full w-full overflow-y-scroll text-white scrollbar-hide"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div className="flex flex-col gap-10">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-stretch justify-between w-full"
            >
              <div className="text-left md:w-1/3">
                <h2 className="text-2xl font-bold">{`${experience.start_date} - ${experience.end_date}`}</h2>
              </div>
              <div className="text-left md:w-2/3">
                <h2 className="text-2xl">
                  <mark className="px-2 text-white bg-orange-500 rounded-sm font-bold">
                    {experience.title}
                  </mark>
                </h2>
                <h3 className="text-xl">{`${experience.company} | ${experience.employment_type}`}</h3>
                <h3 className="text-xl mb-4">
                  {experience.location ? `${experience.location} | ` : ""}
                  {experience.location_type}
                </h3>
                <ul className="text-lg text-neutral-300 space-y-2">
                  {experience.description.length > 0 &&
                    experience.description.map((item, idx) => (
                      <li key={idx}>🟠 {item}</li>
                    ))}
                </ul>
                <ul className="text-xl space-y-2">
                  {experience.tech_stack.length > 0 && (
                    <p className="mt-4">
                      <strong>Tech stack:</strong>{" "}
                      {experience.tech_stack.join(", ")}
                    </p>
                  )}
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

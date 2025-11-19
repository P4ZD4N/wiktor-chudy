"use client";

import workExperience from "@/lib/work-experience";
import WorkExperienceRow from "./WorkExperienceRow";
import FadeScale from "../common/animations/FadeScale";

export default function WorkExceperienceSection() {
  return (
    <div className="flex flex-col gap-10">
      {workExperience.map((experience, index) => (
        <FadeScale
          key={index}
          duration="0.5s"
          delay={`${index * 0.2}s`}
          threshold={0.2}
        >
          <WorkExperienceRow experience={experience} />
        </FadeScale>
      ))}
    </div>
  );
}

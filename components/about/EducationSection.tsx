"use client";

import EducationRow from "./EducationRow";
import educations from "@/lib/educations";
import SlideBlur from "../common/animations/SlideBlur";

export default function EducationSection() {
  return (
    <div className="flex flex-col gap-10">
      {educations.map((education, index) => (
        <SlideBlur key={index} duration="0.4s" delay={`${index * 0.2}s`} threshold={0.1}>
          <EducationRow education={education} />
        </SlideBlur>
      ))}
    </div>
  );
}

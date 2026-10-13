'use client';

import { GraduationCap } from 'lucide-react';
import { Education, educationData } from './EducationData';

function EducationEntry({
  education,
  isFirst,
  isLast,
}: {
  education: Education;
  isFirst: boolean;
  isLast: boolean;
}) {
  return (
    <div
      className={`relative w-full pl-0 md:pl-20 group ${!isFirst ? 'pt-4 md:pt-6' : ''} ${!isLast ? 'pb-4 md:pb-6' : ''}`}
    >
      {!isLast && (
        <div
          className={`hidden md:block absolute left-[35px] ${isFirst ? 'top-14' : 'top-20'} -bottom-10 w-[2px] bg-white/[0.05] overflow-hidden z-0`}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-secondary via-secondary/50 to-transparent origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-out" />
        </div>
      )}

      <div
        className={`hidden md:flex absolute left-4 ${isFirst ? 'top-4' : 'top-10'} w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/10 items-center justify-center text-gray-500 group-hover:text-secondary group-hover:border-secondary/50 shadow-[0_0_0_4px_rgba(255,255,255,0.02)] group-hover:shadow-[0_0_20px_rgba(152,28,209,0.2)] transition-all duration-500 z-10`}
      >
        <div className="absolute inset-0 rounded-full bg-white/[0.02] group-hover:bg-secondary/10 transition-colors duration-500" />
        <GraduationCap
          size={16}
          className="relative z-10 group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="relative w-full block overflow-hidden backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-3xl p-5 md:p-8 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500">
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row justify-between md:items-center gap-4 w-full">
          <div className="flex-1 w-full">
            <h3 className="text-left text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1">
              {education.headline}
            </h3>
            <div className="text-left text-base md:text-lg text-gray-200 font-medium">
              {education.school}
            </div>
          </div>

          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-sm font-medium text-gray-400 self-start md:self-auto shrink-0 mt-2 md:mt-0">
            {education.period}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EducationExperience() {
  return (
    <div className="w-full flex flex-col animate-fade-in-subtle">
      {educationData.map((education, index) => (
        <EducationEntry
          key={education.id}
          education={education}
          isFirst={index === 0}
          isLast={index === educationData.length - 1}
        />
      ))}
    </div>
  );
}

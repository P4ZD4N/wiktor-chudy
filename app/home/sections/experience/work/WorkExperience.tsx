'use client';

import { useState } from 'react';
import { Job, jobsData } from './JobsData';

function JobEntry({ job }: { job: Job }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="gap-4 md:gap-8 pt-8 first:pt-0 ">
      <div className="md:col-span-3 flex flex-col gap-3">
        <div className="flex justify-between">
          <h3 className="flex flex-col items-start font-bold text-white tracking-tight">
            <span className="text-left text-primary text-xl md:text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent ">
              {job.role}
            </span>
            <span className="text-lg md:text-xl text-gray-300">
              {job.company}
            </span>
            <span className="text-sm md:text-base text-gray-300">
              {job.period}
            </span>
          </h3>
        </div>

        {!isOpen ? (
          <div className="pt-2">
            <button
              onClick={() => setIsOpen(true)}
              className="text-md font-medium text-primary hover:text-secondary transition-colors cursor-pointer flex items-center gap-1"
            >
              ➔ Click HERE to read description
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-start gap-4 animate-fade-in">
            <p className="text-left text-gray-300 leading-relaxed text-base md:text-lg whitespace-pre-line">
              {job.description}
            </p>
            <button
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-gray-600 hover:text-white/70 transition-colors cursor-pointer"
            >
              Hide description ↑
            </button>
          </div>
        )}

        <div className="flex flex-wrap gap-3 pt-2">
          {job.skills.map((skill) => (
            <div
              key={skill}
              className="relative overflow-hidden text-sm md:text-base font-mono text-gray-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/5"
            >
              <div className="absolute -top-10 -right-10 h-70 w-70 rounded-full bg-gradient-to-r from-primary to-secondary opacity-50 blur-[110px]" />
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function WorkExperience() {
  return (
    <div className="w-full py-8">
      <div className="space-y-8">
        {jobsData.map((job) => (
          <JobEntry key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}

'use client';

import ListItem from '@/app/home/common/components/ListItem';
import { Briefcase, ChevronDown } from 'lucide-react';
import { useRef, useState } from 'react';
import { Job, jobsData } from './JobsData';

function JobEntry({
  job,
  isFirst,
  isLast,
}: {
  job: Job;
  isFirst: boolean;
  isLast: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    if (isOpen && cardRef.current) {
      const y =
        cardRef.current.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsOpen(!isOpen);
  };

  return (
    <div
      ref={cardRef}
      className={`relative w-full pl-0 md:pl-20 group ${!isFirst ? 'pt-4 md:pt-6' : ''} ${!isLast ? 'pb-4 md:pb-6' : ''}`}
    >
      {!isLast && (
        <div
          className={`hidden md:block absolute left-[35px] ${isFirst ? 'top-14' : 'top-20'} -bottom-10 w-[2px] bg-white/[0.05] overflow-hidden z-0`}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary via-primary/50 to-transparent origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-out" />
        </div>
      )}

      <div
        className={`hidden md:flex absolute left-4 ${isFirst ? 'top-4' : 'top-10'} w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/10 items-center justify-center text-gray-500 group-hover:text-primary group-hover:border-primary/50 shadow-[0_0_0_4px_rgba(255,255,255,0.02)] group-hover:shadow-[0_0_20px_rgba(152,28,209,0.2)] transition-all duration-500 z-10`}
      >
        <div className="absolute inset-0 rounded-full bg-white/[0.02] group-hover:bg-primary/10 transition-colors duration-500" />
        <Briefcase
          size={16}
          className="relative z-10 group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="relative w-full block overflow-hidden backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-3xl p-5 md:p-8 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 w-full">
          <div className="flex-1">
            <h3 className="text-left text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {job.role}
            </h3>
            <div className="text-left text-base md:text-lg md:text-xl text-gray-200 font-medium mt-1">
              {job.company}
            </div>
          </div>
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-sm font-medium text-gray-400 shrink-0 self-start md:self-auto">
            {job.period}
          </div>
        </div>

        <div
          className={`grid transition-all duration-500 ease-in-out relative z-10 w-full ${
            isOpen
              ? 'grid-rows-[1fr] opacity-100 mt-4'
              : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col gap-3 pb-6">
              {job.description.split('\n').map((line, index) => {
                const cleanLine = line.trim().replace(/^—\s*/, '');
                if (!cleanLine) return null;

                return (
                  <ListItem key={index} className="text-base">
                    {cleanLine}
                  </ListItem>
                );
              })}
            </div>
          </div>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-2 pt-6 border-t border-white/[0.08] w-full">
          <div className="flex flex-wrap gap-2 flex-1">
            {job.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-sm font-medium text-gray-400 hover:bg-white/[0.08] hover:border-white/20 hover:text-white transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>

          <button
            onClick={handleToggle}
            className="cursor-pointer flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-primary/10 border border-primary/20 text-sm font-semibold text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 sm:ml-4 shrink-0 w-full sm:w-auto mt-2 sm:mt-0"
          >
            {isOpen ? 'Show less' : 'Read more'}
            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${
                isOpen ? 'rotate-180' : ''
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function WorkExperience() {
  return (
    <div className="w-full flex flex-col">
      {jobsData.map((job, index) => (
        <JobEntry
          key={job.id}
          job={job}
          isFirst={index === 0}
          isLast={index === jobsData.length - 1}
        />
      ))}
    </div>
  );
}

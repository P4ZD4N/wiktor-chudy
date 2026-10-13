'use client';

import FadeIn from '@/app/home/common/animations/FadeIn';
import { useState } from 'react';
import SectionTitle from '../../common/components/SectionTitle';
import SectionWrapper from '../../common/components/SectionWrapper';
import ExperienceToggleButton from './ExperienceToggleButton';
import { ExperienceView } from './ExperienceView';
import EducationExperience from './education/EducationExperience';
import ProjectExperience from './project/ProjectExperience';
import WorkExperience from './work/WorkExperience';

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<ExperienceView>(
    ExperienceView.Work
  );

  return (
    <SectionWrapper bgColor="background-2" id="experience">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] h-[600px] w-[600px] rounded-full bg-primary opacity-[0.04] blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-secondary opacity-[0.04] blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-start mb-16">
          <FadeIn direction="up">
            <SectionTitle subtitle="My Journey" title="Experience" />
          </FadeIn>

          <FadeIn
            direction="up"
            delay={0.1}
            blur={false}
            className="mt-12 w-full flex justify-start"
          >
            <ExperienceToggleButton
              activeTab={activeTab}
              onChange={setActiveTab}
            />
          </FadeIn>
        </div>

        <FadeIn
          key={activeTab}
          direction="up"
          delay={0}
          blur={false}
          className="w-full"
        >
          <div className="w-full">
            {activeTab === ExperienceView.Work && <WorkExperience />}
            {activeTab === ExperienceView.Projects && <ProjectExperience />}
            {activeTab === ExperienceView.Education && <EducationExperience />}
          </div>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}

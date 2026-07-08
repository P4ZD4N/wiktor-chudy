'use client';

import { useState } from 'react';
import SectionTitle from '../../common/components/SectionTitle';
import SectionWrapper from '../../common/components/SectionWrapper';
import ExperienceToggleButton from './ExperienceToggleButton';
import { ExperienceView } from './ExperienceView';
import EducationExperience from './education/EducationExperience';
import ProjectExperience from './project/ProjectExperience';
import WorkExperience from './work/WorkExperience';
import FadeIn from '@/app/home/common/animations/FadeIn';

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<ExperienceView>(
    ExperienceView.Work
  );

  return (
    <SectionWrapper bgColor="background-2" id="experience">
      <FadeIn>
        <SectionTitle title="<Experience />" />
      </FadeIn>

      <div className="flex flex-col items-center gap-6 mt-10 w-full">
        <FadeIn className="w-full flex justify-center">
          <ExperienceToggleButton
            activeTab={activeTab}
            onChange={setActiveTab}
          />
        </FadeIn>
        <FadeIn className="w-full flex justify-center">
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

'use client';

import FadeIn from '@/app/home/common/animations/FadeIn';
import { ExperienceView } from './ExperienceView';

interface ExperienceToggleButtonProps {
  activeTab: ExperienceView;
  onChange: (tab: ExperienceView) => void;
}

export default function ExperienceToggleButton({
  activeTab,
  onChange,
}: ExperienceToggleButtonProps) {
  return (
    <div className="flex w-full max-w-md backdrop-blur-sm bg-white/5 border border-white/20 shadow-sm rounded-3xl p-1">
      <button
        onClick={() => onChange(ExperienceView.Work)}
        className={`flex-1 py-1 md:py-3 sm:text-lg font-medium rounded-l-2xl transition-all ${
          activeTab === ExperienceView.Work
            ? 'bg-gradient-to-r from-primary to-secondary shadow-sm text-gray-300'
            : 'text-white/20 hover:text-gray-300 cursor-pointer'
        }`}
      >
        Work
      </button>

      <button
        onClick={() => onChange(ExperienceView.Projects)}
        className={`flex-1 py-1 md:py-3 sm:text-lg font-medium transition-all ${
          activeTab === ExperienceView.Projects
            ? 'bg-gradient-to-r from-primary to-secondary shadow-sm text-gray-300'
            : 'text-white/20 hover:text-gray-300 cursor-pointer'
        }`}
      >
        Projects
      </button>

      <button
        onClick={() => onChange(ExperienceView.Education)}
        className={`flex-1 py-1 md:py-3 sm:text-lg font-medium rounded-r-2xl transition-all ${
          activeTab === ExperienceView.Education
            ? 'bg-gradient-to-r from-primary to-secondary shadow-sm text-gray-300'
            : 'text-white/20 hover:text-gray-300 cursor-pointer'
        }`}
      >
        Education
      </button>
    </div>
  );
}

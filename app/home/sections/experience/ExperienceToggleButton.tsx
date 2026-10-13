'use client';

import { ExperienceView } from './ExperienceView';

interface ExperienceToggleButtonProps {
  activeTab: ExperienceView;
  onChange: (tab: ExperienceView) => void;
}

export default function ExperienceToggleButton({
  activeTab,
  onChange,
}: ExperienceToggleButtonProps) {
  const tabs = [
    { id: ExperienceView.Work, label: 'Work' },
    { id: ExperienceView.Projects, label: 'Projects' },
    { id: ExperienceView.Education, label: 'Education' },
  ];

  return (
    <div className="flex w-full max-w-[450px] p-1.5 backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-2xl relative">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`
            cursor-pointer relative flex-1 py-2.5 sm:py-3 text-sm sm:text-base font-semibold rounded-xl transition-all duration-300 z-10
            ${
              activeTab === tab.id
                ? 'text-white'
                : 'text-gray-400 hover:text-gray-200 hover:bg-white/[0.02]'
            }
          `}
        >
          {activeTab === tab.id && (
            <div className="absolute inset-0 bg-white/10 border border-white/10 rounded-xl shadow-[0_0_15px_rgba(255,255,255,0.05)] -z-10" />
          )}
          {tab.label}
        </button>
      ))}
    </div>
  );
}

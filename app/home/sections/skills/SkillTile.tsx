import { ReactNode } from 'react';

interface SkillTileProps {
  icon: ReactNode;
  technologyName: string;
}

export default function SkillTile({ icon, technologyName }: SkillTileProps) {
  return (
    <div className="group/tile relative flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 cursor-default overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-secondary/0 translate-x-[-100%] group-hover/tile:translate-x-[100%] transition-transform duration-700 ease-out pointer-events-none" />

      <span className="text-lg text-gray-400 group-hover/tile:text-white transition-colors duration-300 relative z-10">
        {icon}
      </span>
      <span className="text-sm font-medium text-gray-300 group-hover/tile:text-white transition-colors duration-300 relative z-10">
        {technologyName}
      </span>
    </div>
  );
}

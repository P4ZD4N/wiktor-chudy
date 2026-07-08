import { ReactNode } from 'react';

interface SkillTileProps {
  icon: ReactNode;
  technologyName: string;
}

export default function SkillTile(props: SkillTileProps) {
  return (
    <div className="flex items-center justify-center gap-3 text-sm md:text-base xl:text-xl p-2 md:p-3 rounded-xl border border-white/20 text-gray-300">
      {props.icon}
      {props.technologyName}
    </div>
  );
}

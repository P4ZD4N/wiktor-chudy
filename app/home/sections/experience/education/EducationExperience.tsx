import { Education, educationData } from './EducationData';

function EducationEntry({ education }: { education: Education }) {
  return (
    <div className="gap-4 md:gap-8 pt-8 first:pt-0 ">
      <div className="md:col-span-3 flex flex-col gap-3">
        <div className="flex justify-between">
          <h3 className="flex flex-col items-start font-bold text-white tracking-tight">
            <span className="text-left text-primary text-xl md:text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent ">
              {education.headline}
            </span>
            <span className="text-left text-lg md:text-xl text-gray-300">
              {education.school}
            </span>
            <span className="text-left text-sm md:text-base text-gray-300">
              {education.period}
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default function EducationExperience() {
  return (
    <div className="w-full py-8">
      <div className="space-y-8">
        {educationData.map((education) => (
          <EducationEntry key={education.id} education={education} />
        ))}
      </div>
    </div>
  );
}

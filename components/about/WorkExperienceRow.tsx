import { Briefcase, MapPin, CalendarDays } from "lucide-react";

export type WorkExperience = {
  title: string;
  employment_type: string;
  company: string;
  start_date: string;
  end_date: string;
  location: string;
  location_type: string;
  description: string[];
  tech_stack: string[];
};

type Props = {
  experience: WorkExperience;
};

export default function WorkExperienceRow({ experience }: Props) {
  const dateRange = `${experience.start_date} – ${
    experience.end_date || "Present"
  }`;

  return (
    <div className="flex flex-col md:flex-row">
      <div
        className="space-y-3 bg-background-1 rounded-2xl p-5 shadow-md shadow-primary/10
          transition-all duration-200 ease-out
          hover:-translate-y-2
          hover:shadow-primary/30 hover:shadow-xl"
      >
        <div className="flex gap-3 lg:justify-between flex-col lg:flex-row">
          <h2 className="text-center text-lg sm:text-xl font-bold text-primary">
            {experience.title}
          </h2>

          <div className="flex items-center justify-center gap-2 text-neutral-300 font-semibold text-base sm:text-lg">
            <CalendarDays size={20} />
            <span>{dateRange}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-neutral-300 text-base sm:text-lg">
          <Briefcase size={20} />
          <span>
            {experience.company} — {experience.employment_type}
          </span>
        </div>

        <div className="flex items-center gap-2 text-neutral-400">
          <MapPin size={20} />
          <span>
            {experience.location ? `${experience.location} • ` : ""}
            {experience.location_type}
          </span>
        </div>

        <ul className="text-neutral-300 text-base sm:text-lg space-y-3 leading-relaxed mt-4">
          {experience.description.map((item, idx) => (
            <li key={idx} className="flex gap-3">
              <span className="text-primary text-2xl">•</span>
              <span className="text-neutral-400">{item}</span>
            </li>
          ))}
        </ul>

        {experience.tech_stack.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-6">
            {experience.tech_stack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-sm bg-background-2 border border-neutral-700 rounded-full text-neutral-300"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

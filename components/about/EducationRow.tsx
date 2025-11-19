import { CalendarDays, GraduationCap } from "lucide-react";

export type Education = {
  title: string;
  field: string;
  school: string;
  start_date: string;
  end_date: string;
  description: string[];
};

type Props = {
  education: Education;
};

export default function EducationRow({ education }: Props) {
  const dateRange = `${education.start_date} – ${
    education.end_date || "Present"
  }`;

  return (
    <section className="w-full">
      <div
        className="relative flex flex-col md:flex-row bg-neutral-900 rounded-xl p-6 shadow-md border 
          border-neutral-800 shadow-md shadow-orange-500/10
          transition-all duration-200 ease-out
          hover:-translate-y-2
          hover:shadow-orange-500/30 hover:shadow-xl"
      >
        <div className="absolute left-0 top-0 h-full w-1 bg-orange-500 rounded-l-xl" />

        <div className="flex flex-col gap-4 w-full pl-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <GraduationCap size={22} className="text-orange-500" />
            {education.title}
          </h2>

          <h3 className="text-xl text-orange-400 font-semibold">
            {education.field}
          </h3>

          <p className="text-lg text-neutral-300">{education.school}</p>

          <div className="flex items-center gap-2 text-neutral-400 font-medium text-md">
            <CalendarDays size={18} />
            <span>{dateRange}</span>
          </div>

          {education.description.length > 0 && (
            <ul className="mt-3 space-y-2 text-neutral-400">
              {education.description.map((point, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-orange-500 text-xl leading-none">
                    •
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}

import GentlePop from "../common/animations/GentlePop";
import Image from "next/image";
import SlideBlur from "../common/animations/SlideBlur";

interface TechItem {
  name: string;
  icon: string;
}

interface SkillsRowProps {
  skills: TechItem[];
  header: string;
}

export default function SkillsRow({ skills, header }: SkillsRowProps) {
  return (
    <section >
      <SlideBlur duration="0.4s" delay="0.2s">
        <h2 className="text-center lg:text-left text-2xl font-bold mb-6">
          <mark className="px-2 text-white bg-orange-500 rounded-sm">
            {header}
          </mark>
        </h2>
      </SlideBlur>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 mb-8">
        {skills.map((tech, index) => (
          <div key={index}>
            <GentlePop delay={`${index * 0.2}s`}>
              <div
                className="
                  h-30 p-5 bg-neutral-950 rounded-2xl flex flex-col items-center justify-center
                  gap-3
                  shadow-md shadow-orange-500/10
                  transition-all duration-200 ease-out
                  hover:-translate-y-2
                  hover:shadow-orange-500/30 hover:shadow-xl
                "
              >
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={60}
                  height={60}
                  title={tech.name}
                />
                <span className="text-center font-semibold text-neutral-200 tracking-wide">
                  {tech.name}
                </span>
              </div>
            </GentlePop>
          </div>
        ))}
      </div>
    </section>
  );
}

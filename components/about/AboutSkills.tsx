import SlideBlur from "../common/animations/SlideBlur";
import SkillsSection from "./SkillsSection";

const HEADER = "Skills";
const PARAGRAPH = `Because I enjoy selecting the right tools tailored to the specific
  problem, I am highly adaptable and flexible person - always eager to
  learn new ones. As a Fullstack Software Engineer I have worked with a
  wide range of technologies (both through my personal projects and
  professional work) demonstrating a high level of proficiency in both
  frontend and backend development.`;

export default function AboutSkills() {
  return (
    <section className="mx-auto w-10/12 md:w-3/4 lg:w-2/3 xl:w-7/12">
      <div className="mb-10">
        <SlideBlur duration="0.4s" delay="0s">
          <h2 className="text-center text-4xl font-bold mb-4">
            <span className="underline underline-offset-3 decoration-6 decoration-orange-500">
              {HEADER}
            </span>
          </h2>
        </SlideBlur>

        <SlideBlur duration="0.4s" delay="0.2s">
          <p className="text-center text-lg text-neutral-400 mb-4">
            {PARAGRAPH}
          </p>
        </SlideBlur>
      </div>

      <SkillsSection />
    </section>
  );
}

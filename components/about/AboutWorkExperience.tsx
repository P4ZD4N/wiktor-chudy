import FadeScale from "../common/animations/FadeScale";
import WorkExceperienceSection from "./WorkExperienceSection";

const HEADER_FIRST_PART = "Work ";
const HEADER_SECOND_PART = "experience";

export default function AboutWorkExperience() {
  return (
    <div className="bg-neutral-950">
      <section className="mt-20 mb-20 mx-auto w-10/12 md:w-3/4 lg:w-2/3 xl:w-7/12 flex flex-col gap-10">
        <FadeScale duration="0.5s" threshold={0.3}>
          <h2 className="text-center text-4xl font-bold mb-4">
            {HEADER_FIRST_PART}
            <span className="underline underline-offset-3 decoration-6 decoration-orange-500">
              {HEADER_SECOND_PART}
            </span>
          </h2>
        </FadeScale>

        <WorkExceperienceSection />
      </section>
    </div>
  );
}

import SlideBlur from "../common/animations/SlideBlur";
import EducationSection from "./EducationSection";

const HEADER = "Education";

export default function AboutEducation() {
  return (
    <section className="mx-auto w-9/10 md:w-3/4 lg:w-2/3 xl:w-7/12 flex flex-col gap-10">
      <SlideBlur duration="0.4s">
        <h2 className="text-center text-2xl sm:text-3xl font-bold mb-4 underline underline-offset-3 decoration-6 decoration-primary">
          {HEADER}
        </h2>
      </SlideBlur>

      <EducationSection />
    </section>
  );
}

import SlideBlur from "../common/animations/SlideBlur";
import EducationSection from "./EducationSection";

const HEADER = "Education";

export default function AboutEducation() {
  return (
    <section className="mx-auto w-10/12 md:w-3/4 lg:w-2/3 xl:w-7/12 flex flex-col gap-10">
      <SlideBlur duration="0.4s">
        <h2 className="text-center text-4xl font-bold mb-4 underline underline-offset-3 decoration-6 decoration-orange-500">
          {HEADER}
        </h2>
      </SlideBlur>

      <EducationSection />
    </section>
  );
}

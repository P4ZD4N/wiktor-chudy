import FadeInOnScroll from "../common/animations/FadeInOnScroll";
import ContactSection from "../common/ContactSection";

const HEADER_FIRST_PART = "Contact ";
const HEADER_SECOND_PART = "me"

export default function HomeContact() {
  return (
    <div className="bg-neutral-950">
      <section className="mt-20 mx-auto w-10/12 md:w-3/4 lg:w-2/3 xl:w-7/12 mb-20 flex flex-col">
        <FadeInOnScroll direction="right" threshold={0.2}>
          <h2 className="mb-8 text-center text-3xl font-bold leading-none tracking-tight md:text-3xl lg:text-4xl text-white">
            {HEADER_FIRST_PART}
            <span className="underline underline-offset-3 decoration-6 decoration-orange-400 dark:decoration-orange-500">
              {HEADER_SECOND_PART}
            </span>
          </h2>
        </FadeInOnScroll>

        <ContactSection />
      </section>
    </div>
  );
}

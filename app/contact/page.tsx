import ContactSection from "@/components/common/ContactSection";
import FadeInOnScroll from "@/components/common/animations/FadeInOnScroll";

export default function ContactPage() {
  return (
    <section className="relative mx-auto w-10/12 md:w-3/4 lg:w-2/3 xl:w-7/12 mt-20 flex flex-col gap-16 mb-20">
      <FadeInOnScroll direction="right" threshold={0.2}>
        <h1 className="text-4xl font-bold text-center">
          Contact{" "}
          <span className="underline underline-offset-3 decoration-6 decoration-orange-500">
            {" "}
            me
          </span>
        </h1>
      </FadeInOnScroll>

      <ContactSection />
    </section>
  );
}

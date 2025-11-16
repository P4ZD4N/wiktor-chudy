import ContactSection from "@/components/common/ContactSection";
import FadeInOnScroll from "@/components/common/animations/FadeInOnScroll";
import Hero from "@/components/home/Hero";
import HomeProjects from "@/components/home/HomeProjects";
import HomeArticles from "@/components/home/HomeArticles";

const HomePage = async () => {
  return (
    <section className="relative flex flex-col gap-16">
      <Hero />
      <HomeProjects />
      <HomeArticles />

      <section className="bg-neutral-950">
        <section className="mt-20 mx-auto w-10/12 md:w-3/4 lg:w-2/3 xl:w-7/12 pb-20 w-full w-6/6 flex flex-col">
          <FadeInOnScroll direction="right" threshold={0.2}>
            <h2 className="mb-8 text-center text-3xl font-bold leading-none tracking-tight md:text-3xl lg:text-4xl text-white">
              Contact{" "}
              <span className="underline underline-offset-3 decoration-6 decoration-orange-400 dark:decoration-orange-500">
                me
              </span>
            </h2>
          </FadeInOnScroll>

          <ContactSection />
        </section>
      </section>
    </section>
  );
};

export default HomePage;

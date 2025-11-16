import Hero from "@/components/home/Hero";
import HomeProjects from "@/components/home/HomeProjects";
import HomeArticles from "@/components/home/HomeArticles";
import HomeContact from "@/components/home/HomeContact";

const HomePage = async () => {
  return (
    <section className="relative flex flex-col gap-16">
      <Hero />
      <HomeProjects />
      <HomeArticles />
      <HomeContact />
    </section>
  );
};

export default HomePage;

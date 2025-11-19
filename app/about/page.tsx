import FadeInOnScroll from "@/components/common/animations/FadeInOnScroll";
import EducationSection from "@/components/about/EducationSection";
import StatisticsSection from "@/components/about/StatisticsSection";
import TechSkillsSection from "@/components/about/SkillsSection";
import WorkExceperienceSection from "@/components/about/WorkExperienceSection";
import AboutAboutMe from "@/components/about/AboutAboutMe";
import AboutSkills from "@/components/about/AboutSkills";
import AboutWorkExperience from "@/components/about/AboutWorkExperience";
import AboutEducation from "@/components/about/AboutEducation";

export default function AboutPage() {
  return (
    <section className="relative  mt-20 flex flex-col gap-16 mb-20">
      <AboutAboutMe />
      <StatisticsSection />
      <AboutSkills />
      <AboutWorkExperience />
      <AboutEducation />
    </section>
  );
}

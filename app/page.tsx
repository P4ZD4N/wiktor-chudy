import Navbar from './home/common/navbar/Navbar';
import AboutSection from './home/sections/AboutSection';
import ContactSection from './home/sections/contact/ContactSection';
import ExperienceSection from './home/sections/experience/ExperienceSection';
import HeroSection from './home/sections/HeroSection';
import SkillsSection from './home/sections/skills/SkillsSection';
import StatisticsSection from './home/sections/statistics/StatisticsSection';

const HomePage = async () => {
  return (
    <section>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StatisticsSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </section>
  );
};

export default HomePage;

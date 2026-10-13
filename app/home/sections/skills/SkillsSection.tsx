import FadeIn from '@/app/home/common/animations/FadeIn';
import { BiLogoTypescript } from 'react-icons/bi';
import { DiMysql, DiPostgresql } from 'react-icons/di';
import {
  FaAngular,
  FaAws,
  FaBootstrap,
  FaCss3Alt,
  FaDocker,
  FaFigma,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaSass,
} from 'react-icons/fa6';
import { FiServer } from 'react-icons/fi';
import { MdOutlineViewQuilt } from 'react-icons/md';
import { PiGearSixBold } from 'react-icons/pi';
import { RiDatabase2Line, RiTailwindCssFill } from 'react-icons/ri';
import {
  SiApachemaven,
  SiGnubash,
  SiHibernate,
  SiJunit5,
  SiKibana,
  SiPostman,
  SiSpring,
  SiThymeleaf,
  SiVitest,
} from 'react-icons/si';
import { TbSql } from 'react-icons/tb';
import { VscTerminalLinux } from 'react-icons/vsc';
import SectionTitle from '../../common/components/SectionTitle';
import SectionWrapper from '../../common/components/SectionWrapper';
import SkillTile from './SkillTile';

export default function SkillsSection() {
  return (
    <SectionWrapper bgColor="background-1" id="skills">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[30%] left-[10%] h-[500px] w-[500px] rounded-full bg-primary opacity-[0.03] blur-[150px]" />
        <div className="absolute bottom-[20%] right-[10%] h-[500px] w-[500px] rounded-full bg-secondary opacity-[0.03] blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <FadeIn direction="up">
            <SectionTitle subtitle="My tech stack" title="Skills" />
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FadeIn
            direction="up"
            delay={0.2}
            blur={false}
            className="md:col-span-2"
          >
            <div className="h-full relative overflow-hidden flex flex-col w-full p-8 backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-3xl group hover:bg-white/[0.04] transition-colors duration-500">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] opacity-0 group-hover:opacity-50 transition-opacity duration-700 pointer-events-none" />

              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-primary group-hover:scale-110 transition-transform duration-500">
                  <MdOutlineViewQuilt className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-200">Frontend</h3>
              </div>

              <div className="flex flex-wrap gap-3 mt-auto relative z-10">
                <SkillTile
                  icon={<BiLogoTypescript />}
                  technologyName="TypeScript"
                />
                <SkillTile icon={<FaAngular />} technologyName="Angular" />
                <SkillTile icon={<FaHtml5 />} technologyName="HTML" />
                <SkillTile icon={<FaCss3Alt />} technologyName="CSS" />
                <SkillTile icon={<FaSass />} technologyName="Sass" />
                <SkillTile icon={<FaBootstrap />} technologyName="Bootstrap" />
                <SkillTile
                  icon={<RiTailwindCssFill />}
                  technologyName="Tailwind"
                />
                <SkillTile icon={<SiVitest />} technologyName="Vitest" />
              </div>
            </div>
          </FadeIn>

          <FadeIn
            direction="up"
            delay={0.3}
            blur={false}
            className="md:col-span-1"
          >
            <div className="h-full relative overflow-hidden flex flex-col w-full p-8 backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-3xl group hover:bg-white/[0.04] transition-colors duration-500">
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/20 blur-[100px] opacity-0 group-hover:opacity-50 transition-opacity duration-700 pointer-events-none" />

              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-secondary group-hover:scale-110 transition-transform duration-500">
                  <FiServer className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-200">Backend</h3>
              </div>

              <div className="flex flex-wrap gap-3 mt-auto relative z-10">
                <SkillTile icon={<FaJava />} technologyName="Java" />
                <SkillTile icon={<SiSpring />} technologyName="Spring" />
                <SkillTile icon={<SiHibernate />} technologyName="Hibernate" />
                <SkillTile icon={<SiJunit5 />} technologyName="JUnit" />
                <SkillTile icon={<SiThymeleaf />} technologyName="Thymeleaf" />
              </div>
            </div>
          </FadeIn>

          <FadeIn
            direction="up"
            delay={0.4}
            blur={false}
            className="md:col-span-1"
          >
            <div className="h-full relative overflow-hidden flex flex-col w-full p-8 backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-3xl group hover:bg-white/[0.04] transition-colors duration-500">
              <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 blur-[100px] opacity-0 group-hover:opacity-50 transition-opacity duration-700 pointer-events-none" />

              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-primary group-hover:scale-110 transition-transform duration-500">
                  <RiDatabase2Line className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-200">Databases</h3>
              </div>

              <div className="flex flex-wrap gap-3 mt-auto relative z-10">
                <SkillTile icon={<TbSql />} technologyName="SQL" />
                <SkillTile icon={<DiMysql />} technologyName="MySQL" />
                <SkillTile
                  icon={<DiPostgresql />}
                  technologyName="PostgreSQL"
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn
            direction="up"
            delay={0.5}
            blur={false}
            className="md:col-span-2 lg:col-span-2"
          >
            <div className="h-full relative overflow-hidden flex flex-col w-full p-8 backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-3xl group hover:bg-white/[0.04] transition-colors duration-500">
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 blur-[100px] opacity-0 group-hover:opacity-50 transition-opacity duration-700 pointer-events-none" />

              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-secondary group-hover:scale-110 transition-transform duration-500">
                  <PiGearSixBold className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-200">
                  DevOps & Tools
                </h3>
              </div>

              <div className="flex flex-wrap gap-3 mt-auto relative z-10">
                <SkillTile icon={<SiApachemaven />} technologyName="Maven" />
                <SkillTile icon={<FaGitAlt />} technologyName="Git" />
                <SkillTile icon={<VscTerminalLinux />} technologyName="Linux" />
                <SkillTile icon={<FaDocker />} technologyName="Docker" />
                <SkillTile icon={<SiGnubash />} technologyName="Bash" />
                <SkillTile icon={<FaFigma />} technologyName="Figma" />
                <SkillTile icon={<SiPostman />} technologyName="Postman" />
                <SkillTile icon={<FaAws />} technologyName="AWS" />
                <SkillTile icon={<SiKibana />} technologyName="Kibana" />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </SectionWrapper>
  );
}

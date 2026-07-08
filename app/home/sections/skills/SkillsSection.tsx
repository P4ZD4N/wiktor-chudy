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
import SectionTitle from '../../common/components/SectionTitle';
import SectionWrapper from '../../common/components/SectionWrapper';
import SkillTile from './SkillTile';
import { BiLogoTypescript } from 'react-icons/bi';
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
import { VscTerminalLinux } from 'react-icons/vsc';
import { TbSql } from 'react-icons/tb';
import { DiMysql, DiPostgresql } from 'react-icons/di';
import { MdOutlineViewQuilt } from 'react-icons/md';
import { FiServer } from 'react-icons/fi';
import { PiGearSixBold } from 'react-icons/pi';
import FadeIn from '@/app/home/common/animations/FadeIn';

export default function SkillsSection() {
  return (
    <SectionWrapper bgColor="background-1" id="skills">
      <FadeIn>
        <SectionTitle title="<Skills />" />
      </FadeIn>

      <FadeIn>
        <p className="text-base md:text-xl text-gray-300 mt-10">
          As a Software Engineer I have worked with a wide range of technologies
          (both through my personal projects and professional work)
          demonstrating a high level of proficiency in both frontend and backend
          development.
        </p>
      </FadeIn>

      <div className="flex flex-col gap-10 mt-10">
        <FadeIn>
          <div className="relative overflow-hidden flex flex-col lg:flex-row gap-6 w-full p-6 backdrop-blur-sm bg-white/5 border border-white/20 shadow-sm rounded-xl">
            <div className="absolute -top-12 -right-12 -z-10 h-72 w-72 rounded-full bg-gradient-to-r from-primary to-secondary opacity-60 blur-[100px]" />
            <span className="flex items-center gap-3 lg:w-1/3">
              <MdOutlineViewQuilt className="text-3xl xl:text-5xl text-primary" />
              <h2 className="w-fit bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-xl sm:text-2xl xl:text-4xl font-bold">
                Frontend
              </h2>
            </span>
            <div className="flex flex-wrap gap-8 lg:w-2/3">
              <SkillTile
                icon={<BiLogoTypescript className="w-6 h-6 lg:w-8 lg:h-8" />}
                technologyName="TypeScript"
              />
              <SkillTile
                icon={<FaAngular className="w-6 h-6 lg:w-8 lg:h-8" />}
                technologyName="Angular"
              />
              <SkillTile
                icon={<FaHtml5 className="w-6 h-6 lg:w-8 lg:h-8" />}
                technologyName="HTML"
              />
              <SkillTile
                icon={<FaCss3Alt className="w-6 h-6 lg:w-8 lg:h-8" />}
                technologyName="CSS"
              />
              <SkillTile
                icon={<FaSass className="w-6 h-6 lg:w-8 lg:h-8" />}
                technologyName="Sass"
              />
              <SkillTile
                icon={<FaBootstrap className="w-6 h-6 lg:w-8 lg:h-8" />}
                technologyName="Bootstrap"
              />
              <SkillTile
                icon={<RiTailwindCssFill className="w-6 h-6 lg:w-8 lg:h-8" />}
                technologyName="Tailwind"
              />
              <SkillTile
                icon={<SiVitest className="w-6 h-6 lg:w-8 lg:h-8" />}
                technologyName="Vitest"
              />
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="relative overflow-hidden flex flex-col lg:flex-row gap-6 w-full p-6 backdrop-blur-sm bg-white/5 border border-white/20 shadow-sm rounded-xl">
            <div className="absolute -top-12 -right-12 -z-10 h-72 w-72 rounded-full bg-gradient-to-r from-primary to-secondary opacity-60 blur-[100px]" />
            <span className="flex items-center gap-3 lg:w-1/3">
              <FiServer className="text-3xl xl:text-5xl text-primary" />
              <h2 className="w-fit bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-xl sm:text-2xl xl:text-4xl font-bold">
                Backend
              </h2>
            </span>
            <div className="flex flex-wrap gap-8 lg:w-2/3">
              <SkillTile
                icon={<FaJava className="w-6 h-6 lg:w-8 lg:h-8" />}
                technologyName="Java"
              />
              <SkillTile
                icon={<SiSpring className="w-6 h-6 lg:w-8 lg:h-8" />}
                technologyName="Spring"
              />
              <SkillTile
                icon={<SiHibernate className="w-6 h-6 lg:w-8 lg:h-8" />}
                technologyName="Hibernate"
              />
              <SkillTile
                icon={<SiJunit5 className="w-6 h-6 lg:w-8 lg:h-8" />}
                technologyName="JUnit"
              />
              <SkillTile
                icon={<SiThymeleaf className="w-6 h-6 lg:w-8 lg:h-8" />}
                technologyName="Thymeleaf"
              />
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="relative overflow-hidden flex flex-col lg:flex-row gap-6 w-full p-6 backdrop-blur-sm bg-white/5 border border-white/20 shadow-sm rounded-xl">
            <div className="absolute -top-12 -right-12 -z-10 h-72 w-72 rounded-full bg-gradient-to-r from-primary to-secondary opacity-60 blur-[100px]" />
            <span className="flex items-center gap-3 lg:w-1/3">
              <RiDatabase2Line className="text-3xl xl:text-5xl text-primary" />
              <h2 className="w-fit bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-xl sm:text-2xl xl:text-4xl font-bold">
                Databases
              </h2>
            </span>
            <div className="flex flex-wrap gap-8 lg:w-2/3">
              <SkillTile
                icon={<TbSql className="w-6 h-6 lg:w-8 lg:h-8" />}
                technologyName="SQL"
              />
              <SkillTile
                icon={<DiMysql className="w-6 h-6 lg:w-8 lg:h-8" />}
                technologyName="MySQL"
              />
              <SkillTile
                icon={<DiPostgresql className="w-6 h-6 lg:w-8 lg:h-8" />}
                technologyName="PostgreSQL"
              />
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="relative overflow-hidden flex flex-col lg:flex-row gap-6 w-full p-6 backdrop-blur-sm bg-white/5 border border-white/20 shadow-sm rounded-xl">
            <div className="absolute -top-12 -right-12 -z-10 h-72 w-72 rounded-full bg-gradient-to-r from-primary to-secondary opacity-60 blur-[100px]" />
            <span className="flex items-center gap-3 lg:w-1/3">
              <PiGearSixBold className="text-3xl xl:text-5xl text-primary" />
              <h2 className="w-fit bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-xl sm:text-2xl xl:text-4xl font-bold">
                DevOps & Tools
              </h2>
            </span>
            <div className="flex flex-wrap gap-8 lg:w-2/3">
              <SkillTile
                icon={<SiApachemaven className="w-6 h-6 lg:w-8 lg:h-8" />}
                technologyName="Maven"
              />
              <SkillTile
                icon={<FaGitAlt className="w-6 h-6 lg:w-8 lg:h-8" />}
                technologyName="Git"
              />
              <SkillTile
                icon={<VscTerminalLinux className="w-6 h-6 lg:w-8 lg:h-8" />}
                technologyName="Linux"
              />
              <SkillTile
                icon={<FaDocker className="w-6 h-6 lg:w-8 lg:h-8" />}
                technologyName="Docker"
              />
              <SkillTile
                icon={<SiGnubash className="w-6 h-6 lg:w-8 lg:h-8" />}
                technologyName="Bash"
              />
              <SkillTile
                icon={<FaFigma className="w-6 h-6 lg:w-8 lg:h-8" />}
                technologyName="Figma"
              />
              <SkillTile
                icon={<SiPostman className="w-6 h-6 lg:w-8 lg:h-8" />}
                technologyName="Postman"
              />
              <SkillTile
                icon={<FaAws className="w-6 h-6 lg:w-8 lg:h-8" />}
                technologyName="AWS"
              />
              <SkillTile
                icon={<SiKibana className="w-6 h-6 lg:w-8 lg:h-8" />}
                technologyName="Kibana"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}

import { Info } from 'lucide-react';
import FadeIn from '../common/animations/FadeIn';
import SectionWrapper from '../common/components/SectionWrapper';
import SingleColorAnchor from '../common/components/SignleColorAnchor';

export default function HeroSection() {
  return (
    <SectionWrapper bgColor="background-1" fullHeight={true} id="hero">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />

        <div className="absolute -top-40 -left-40 h-[300px] w-[300px] rounded-full bg-primary opacity-20 blur-[100px]" />
        <div className="absolute -bottom-40 -right-40 h-[300px] w-[300px] rounded-full bg-secondary opacity-15 blur-[100px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <FadeIn>
          <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-none tracking-tight text-gray-300">
            Hey, my name is
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1
            className="
          inline-block
          bg-gradient-to-r from-primary to-secondary
          bg-clip-text text-transparent  
          mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-none tracking-tight [font-variant-ligatures:none]"
          >
            <span>{'<Wiktor Chudy />'}</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="xl:w-3/4 mx-auto text-gray-300 mb-8 text-base md:text-xl">
            Frontend Developer with 1+ years of commercial experience, aspiring
            to become a Full-Stack Developer. Aimed at providing real value to
            businesses and delivering highest quality solutions.
          </p>
        </FadeIn>

        <FadeIn delay={0.6}>
          <SingleColorAnchor
            text="About me"
            href="#about"
            color="primary"
            icon={<Info />}
          />
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}

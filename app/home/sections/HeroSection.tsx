import { ChevronRight, Info, Terminal } from 'lucide-react';
import FadeIn from '../common/animations/FadeIn';
import ButtonPrimary from '../common/components/ButtonPrimary';
import ButtonSecondary from '../common/components/ButtonSecondary';
import SectionWrapper from '../common/components/SectionWrapper';

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
        <div className="absolute top-[10%] left-[-10%] h-[250px] w-[250px] md:h-[400px] md:w-[400px] rounded-full bg-primary opacity-20 blur-[90px] md:blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] h-[250px] w-[250px] md:h-[400px] md:w-[400px] rounded-full bg-secondary opacity-15 blur-[90px] md:blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full pt-32 pb-16 lg:pt-0 lg:min-h-screen flex items-center">
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-12 xl:gap-10 items-center w-full">
          <div className="flex flex-col items-start text-left xl:col-span-3">
            <FadeIn direction="right" delay={0.0}>
              <p className="mb-3 text-sm sm:text-base font-semibold tracking-[0.2em] text-primary uppercase">
                Hey, my name is
              </p>
            </FadeIn>

            <FadeIn direction="right" delay={0.1}>
              <h1 className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6 text-6xl sm:text-7xl lg:text-8xl font-extrabold leading-none tracking-tight">
                Wiktor Chudy
              </h1>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <p className="text-gray-400 mb-10 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl">
                <span className="text-gray-200 font-medium">
                  Software Engineer
                </span>{' '}
                specializing in{' '}
                <span className="text-gray-200 font-medium">
                  Frontend Development
                </span>{' '}
                with a strong focus on user experience. Passionate about
                translating real-world needs into digital products and
                delivering highest quality solutions.
              </p>
            </FadeIn>

            <div className="flex flex-wrap items-center gap-4">
              <FadeIn direction="up" delay={0.3}>
                <ButtonPrimary
                  text="About me"
                  href="#about"
                  icon={<Info size={20} />}
                />
              </FadeIn>

              <FadeIn direction="up" delay={0.4} blur={false}>
                <ButtonSecondary
                  text="Experience"
                  href="#experience"
                  icon={<ChevronRight size={18} />}
                />
              </FadeIn>
            </div>
          </div>

          <div className="hidden xl:block relative w-full perspective-1000 xl:col-span-2">
            <FadeIn
              direction="left"
              delay={0.5}
              blur={false}
              className="w-full"
            >
              <div className="relative rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-500">
                <div className="flex items-center px-4 py-3 border-b border-white/10 bg-white/5">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="mx-auto flex items-center gap-2 text-xs text-gray-400">
                    <Terminal size={14} />
                    <span>engineer.ts</span>
                  </div>
                </div>

                <div className="p-6 text-sm lg:text-sm xl:text-base font-mono text-gray-300 space-y-2">
                  <div className="flex">
                    <span className="text-gray-500 w-8 select-none">1</span>
                    <span>
                      <span className="text-pink-500">const</span>{' '}
                      <span className="text-blue-400">engineer</span> = {'{'}
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 w-8 select-none">2</span>
                    <span className="ml-4">
                      name:{' '}
                      <span className="text-green-400">'Wiktor Chudy'</span>,
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 w-8 select-none">3</span>
                    <span className="ml-4">
                      role:{' '}
                      <span className="text-green-400">
                        'Software Engineer'
                      </span>
                      ,
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 w-8 select-none">4</span>
                    <span className="ml-4">
                      techStack: [<span className="text-green-400">'Java'</span>
                      , <span className="text-green-400">'Angular'</span>],
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 w-8 select-none">5</span>
                    <span className="ml-4">
                      location: <span className="text-green-400">'Warsaw'</span>
                      ,
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 w-8 select-none">6</span>
                    <span>{'}'}</span>
                  </div>
                </div>

                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary opacity-20 blur-3xl rounded-full pointer-events-none" />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

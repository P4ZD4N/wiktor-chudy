import { Briefcase } from 'lucide-react';
import Image from 'next/image';
import FadeIn from '../common/animations/FadeIn';
import ButtonPrimary from '../common/components/ButtonPrimary';
import ListItem from '../common/components/ListItem';
import SectionTitle from '../common/components/SectionTitle';
import SectionWrapper from '../common/components/SectionWrapper';

export default function AboutSection() {
  return (
    <SectionWrapper bgColor="background-2" id="about">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] h-[400px] w-[400px] rounded-full bg-primary opacity-10 blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-10%] h-[400px] w-[400px] rounded-full bg-secondary opacity-10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <FadeIn direction="up">
          <SectionTitle subtitle="Get to know me" title="About me" />
        </FadeIn>

        <div className="grid xl:grid-cols-12 gap-12 xl:gap-16 mt-12 items-start text-left">
          <div className="xl:col-span-7 flex flex-col gap-10">
            <FadeIn direction="up" delay={0.1}>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-200 mb-4">
                  Summary
                </h2>
                <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                  Full of energy and commitment{' '}
                  <strong className="text-gray-200 font-medium">
                    Software Engineer
                  </strong>{' '}
                  who combine solid frontend and backend skills with a strong
                  focus on user experience. Passionate about translating
                  real-world needs into digital products and delivering highest
                  quality solutions. Always looking for opportunities where I
                  can contribute to impactful projects that help businesses grow
                  and succeed.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.15}>
              <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent" />
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-200 mb-4">
                  What sets me apart
                </h2>
                <div className="flex flex-col gap-3">
                  <ListItem className="text-base sm:text-lg">
                    <strong className="text-gray-200 font-medium">
                      End-to-End thinking.
                    </strong>{' '}
                    I don't just code only my part of new functionality; I focus
                    on the final product. I analyze user needs, business goals,
                    UX issues and take full ownership of entire feature from day
                    one.
                  </ListItem>
                  <ListItem className="text-base sm:text-lg">
                    <strong className="text-gray-200 font-medium">
                      UX Sensitivity.
                    </strong>{' '}
                    I bridge gap between technology and design, ensuring that my
                    code delivers an excellent user experience.
                  </ListItem>
                  <ListItem className="text-base sm:text-lg">
                    <strong className="text-gray-200 font-medium">
                      Proactivity.
                    </strong>{' '}
                    I don't wait for issues to escalate. I actively propose
                    improvements and drive initiatives that benefit product and
                    client.
                  </ListItem>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.25}>
              <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent" />
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-200 mb-4">
                  Recent impact
                </h2>
                <div className="flex flex-col gap-3">
                  <ListItem className="text-base sm:text-lg">
                    Successful launch of frontend test CI pipeline for the first
                    time in project history.
                  </ListItem>
                  <ListItem className="text-base sm:text-lg">
                    Multi-version Angular upgrade from v9 to v21.
                  </ListItem>
                  <ListItem className="text-base sm:text-lg">
                    Frontend error and bug occurrences reduction from 100+ per
                    day to zero.
                  </ListItem>
                  <ListItem className="text-base sm:text-lg">
                    Complete UI modernization for critical cybersecurity
                    application in Erste Bank Polska.
                  </ListItem>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.35}>
              <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent" />
            </FadeIn>

            <FadeIn direction="up" delay={0.4}>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-200 mb-4">
                  Current focus
                </h2>
                <div className="flex flex-col gap-3">
                  <ListItem className="text-base sm:text-lg">
                    Expanding my expertise in both backend and frontend
                    development, with a strong emphasis on Spring Framework
                    ecosystem and Angular.
                  </ListItem>
                  <ListItem className="text-base sm:text-lg">
                    Deepening my knowledge of DevOps tools and best practices in
                    software architecture / Clean Code.
                  </ListItem>
                  <ListItem className="text-base sm:text-lg">
                    Business-oriented approach to effectively translate customer
                    needs into high-quality and impactful solutions.
                  </ListItem>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.45}>
              <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent" />
            </FadeIn>

            <FadeIn direction="up" delay={0.5}>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-200 mb-4">
                  Open to
                </h2>
                <div className="flex flex-col gap-3">
                  <ListItem className="text-base sm:text-lg">
                    Full-stack, Frontend or Backend Engineer roles.
                  </ListItem>
                  <ListItem className="text-base sm:text-lg">
                    Projects with Spring / Angular tech stack.
                  </ListItem>
                  <ListItem className="text-base sm:text-lg">
                    Collaborate with teams focused on solving meaningful
                    problems.
                  </ListItem>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="xl:col-span-5 flex flex-col items-center xl:items-end w-full xl:sticky xl:top-32 order-first xl:order-last">
            <div className="w-full sm:w-[400px] xl:w-full max-w-md flex flex-col gap-8">
              <FadeIn
                direction="up"
                delay={0.4}
                blur={false}
                className="w-full relative group"
              >
                <div className="absolute -inset-4 bg-primary opacity-20 blur-3xl rounded-full transition-opacity duration-500 group-hover:opacity-30" />

                <div className="relative p-2 rounded-2xl bg-white/5 border border-white/10 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-background-1">
                    <Image
                      src="/me4.jpg"
                      alt="Wiktor Chudy"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.5}>
                <div className="w-full flex justify-center">
                  <ButtonPrimary
                    text="My experience"
                    href="#experience"
                    icon={<Briefcase size={20} />}
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

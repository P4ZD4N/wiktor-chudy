import SectionTitle from '../common/components/SectionTitle';
import Image from 'next/image';
import SectionWrapper from '../common/components/SectionWrapper';
import SingleColorAnchor from '../common/components/SignleColorAnchor';
import { Briefcase } from 'lucide-react';
import FadeIn from '../common/animations/FadeIn';

export default function AboutSection() {
  return (
    <SectionWrapper bgColor="background-2" id="about">
      <FadeIn>
        <SectionTitle title="<About me />" />
      </FadeIn>
      <div className="flex flex-col-reverse xl:flex-row w-full gap-12 xl:gap-16 mt-10 items-start text-left">
        <div className="w-full xl:w-3/5 flex flex-col gap-10">
          <FadeIn>
            <div>
              <h2 className="w-fit bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
                Summary
              </h2>
              <p className="text-base md:text-xl text-gray-300 leading-relaxed">
                Full of energy and commitment Software Engineer who combine
                solid full-stack development skills with a clear focus on
                business impact. Currently pursuing degree in Computer Science
                while actively developing applications that deliver measurable
                value. Passionate about clean code, best coding practices and
                elegant technical solutions. Always looking for opportunities
                where I can contribute to impactful projects that help
                businesses grow and succeed.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <hr />
          </FadeIn>

          <FadeIn>
            <div>
              <h2 className="w-fit bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
                What sets me apart
              </h2>
              <p className="text-base md:text-xl text-gray-300">
                — End-to-End thinking. I don't just code only my part of new
                functionality; I focus on the final product. I analyze user
                needs, business goals and take full ownership of entire feature
                from day one.
              </p>
              <p className="text-base md:text-xl text-gray-300">
                — UX Sensitivity. I bridge gap between technology and design,
                ensuring that my code delivers an excellent user experience.
              </p>
              <p className="text-base md:text-xl text-gray-300">
                — Proactivity. I don't wait for issues to escalate. I actively
                propose improvements and drive initiatives that benefit product
                and client.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <hr />
          </FadeIn>

          <FadeIn>
            <div>
              <h2 className="w-fit bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
                Recent impact
              </h2>
              <p className="text-base md:text-xl text-gray-300">
                — Successful launch of frontend test CI pipeline for the first
                time in project history.
              </p>
              <p className="text-base md:text-xl text-gray-300">
                — Multi-version Angular upgrade from v9 to v21.
              </p>
              <p className="text-base md:text-xl text-gray-300">
                — Frontend error and bug occurrences reduction from 100+ per day
                to zero.
              </p>
              <p className="text-base md:text-xl text-gray-300">
                — Complete UI modernization for critical cybersecurity
                application in Erste Bank Polska.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <hr />
          </FadeIn>

          <FadeIn>
            <div>
              <h2 className="w-fit bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
                Current focus
              </h2>
              <p className="text-base md:text-xl text-gray-300">
                — Expanding my expertise in both backend and frontend
                development, with a strong emphasis on Spring Framework
                ecosystem and Angular.
              </p>
              <p className="text-base md:text-xl text-gray-300">
                — Deepening my knowledge of DevOps tools and best practices in
                software architecture / Clean Code.
              </p>
              <p className="text-base md:text-xl text-gray-300">
                — Business-oriented approach to effectively translate customer
                needs into high-quality and impactful solutions.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <hr />
          </FadeIn>

          <FadeIn>
            <div>
              <h2 className="w-fit bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
                Open to
              </h2>
              <p className="text-base md:text-xl text-gray-300">
                — Full-stack, Frontend or Backend Engineer roles.
              </p>
              <p className="text-base md:text-xl text-gray-300">
                — Projects with Spring / Angular tech stack.
              </p>
              <p className="text-base md:text-xl text-gray-300">
                — Collaborate with teams focused on solving meaningful problems.
              </p>
            </div>
          </FadeIn>
        </div>

        <div className="w-full xl:w-2/5 flex flex-col items-center xl:items-end xl:sticky xl:top-32">
          <div className="w-64 sm:w-80 xl:w-100 flex flex-col gap-8">
            <FadeIn>
              <div className="w-full h-auto xl:h-[40rem] relative flex flex-col rounded-xl shadow-[12px_12px_0_0_#981cd1] transition-all">
                <div className="w-full h-64 sm:h-80 xl:h-auto xl:flex-grow relative rounded-xl overflow-hidden bg-background-2">
                  <Image
                    src="/me4.jpg"
                    alt="Wiktor Chudy"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="w-full flex justify-center">
                <SingleColorAnchor
                  text="My experience"
                  href="#experience"
                  color="primary"
                  icon={<Briefcase />}
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

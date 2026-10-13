import FadeIn from '@/app/home/common/animations/FadeIn';
import SectionWrapper from '@/app/home/common/components/SectionWrapper';
import Statistic from './Statistic';

export default function StatisticsSection() {
  return (
    <SectionWrapper bgColor="gradient">
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <FadeIn direction="up" delay={0.0} blur={false}>
            <Statistic symbol="∞" text="Willingness to learn" />
          </FadeIn>
          <FadeIn direction="up" delay={0.1} blur={false}>
            <Statistic number={100} suffix="%" text="Commitment" />
          </FadeIn>
          <FadeIn direction="up" delay={0.2} blur={false}>
            <Statistic
              number={1}
              suffix="+"
              text="Years of commercial experience"
            />
          </FadeIn>
          <FadeIn direction="up" delay={0.3} blur={false}>
            <Statistic number={10} suffix="+" text="Projects completed" />
          </FadeIn>
        </div>
      </div>
    </SectionWrapper>
  );
}

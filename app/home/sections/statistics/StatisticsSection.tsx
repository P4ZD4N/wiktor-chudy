import SectionWrapper from '@/app/home/common/components/SectionWrapper';
import Statistic from './Statistic';
import FadeIn from '@/app/home/common/animations/FadeIn';

export default function StatisticsSection() {
  return (
    <SectionWrapper bgColor="gradient">
      <div className="flex gap-10 flex-wrap justify-center">
        <FadeIn>
          <Statistic symbol="∞" text="Willingness to learn" />
        </FadeIn>
        <FadeIn delay={0.2}>
          <Statistic number={100} suffix="%" text="Commitment" />
        </FadeIn>
        <FadeIn delay={0.4}>
          <Statistic
            number={1}
            suffix="+"
            text="Years of commercial experience"
          />
        </FadeIn>
        <FadeIn delay={0.6}>
          <Statistic number={10} suffix="+" text="Projects completed" />
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}

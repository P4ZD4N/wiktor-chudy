import FadeIn from './home/common/animations/FadeIn';
import SectionWrapper from './home/common/components/SectionWrapper';
import Navbar from './home/common/navbar/Navbar';

export default function NotFound() {
  return (
    <div>
      <Navbar />

      <SectionWrapper bgColor="background-1" fullHeight={true}>
        <FadeIn>
          <h1 className="text-4xl font-bold text-primary">Page Not Found</h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-lg text-gray-300">
            Could not find the requested resource!
          </p>
        </FadeIn>
      </SectionWrapper>
    </div>
  );
}

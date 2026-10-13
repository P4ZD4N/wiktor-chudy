import FadeIn from './home/common/animations/FadeIn';
import ButtonPrimary from './home/common/components/ButtonPrimary';
import SectionWrapper from './home/common/components/SectionWrapper';
import Navbar from './home/common/navbar/Navbar';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      <SectionWrapper bgColor="background-1" fullHeight={true}>
        <FadeIn>
          <h1 className="text-4xl font-bold text-primary mb-2">404</h1>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Nie znaleziono strony
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-base text-gray-400 mb-6 max-w-sm mx-auto">
            Zasób, którego szukasz, nie istnieje lub został przeniesiony.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <ButtonPrimary href="/" text="Wróć na stronę główną" />
        </FadeIn>
      </SectionWrapper>
    </main>
  );
}

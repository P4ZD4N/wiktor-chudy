import FadeScale from "../common/animations/FadeScale";
import TypingText from "./TypingText";
import Image from "next/image";

const FIRST_HEADER = "Hey, my name is";
const SECOND_HEADER = "Wiktor Chudy.";
const PARAGRAPH = `Full Stack Software Engineer specializing in Java and 
  Angular. Aimed at providing real value to businesses while 
  constantly learning new skills and refining currently acquired. 
  Passionate about clean code, best user experience 
  and delivering highest quality solutions.
  `;

export default function Hero() {
  return (
    <header className="pt-10 sm:pt-0 mx-auto w-9/10 md:w-3/4 lg:w-2/3 xl:w-7/12 flex flex-col items-center justify-center h-screen text-center">
      <FadeScale duration="0.5s" delay="0s">
        <div className="mb-6 md:mb-8 flex justify-center">
          <div className="w-42 h-42 md:w-64 md:h-64 lg:w-64 lg:h-64 relative rounded-full overflow-hidden ring-4 ring-primary shadow-lg">
            <Image
              src="/me1.jpg"
              alt="Wiktor Chudy"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </FadeScale>

      <FadeScale duration="0.4s" delay="0.1s">
        <h2 className="mb-4 text-2xl sm:text-3xl font-normal leading-none tracking-tight lg:text-5xl text-white">
          {FIRST_HEADER}
        </h2>
      </FadeScale>

      <FadeScale duration="0.4s" delay="0.2s">
        <h1 className="mb-4 text-3xl sm:text-4xl font-extrabold leading-none tracking-tight md:text-6xl lg:text-7xl text-white slide-in-from-left">
          <span className="underline underline-offset-3 decoration-6 decoration-primary">
            {SECOND_HEADER}
          </span>
        </h1>
      </FadeScale>

      <FadeScale duration="0.4s" delay="0.3s">
        <h2 className="mb-4 text-xl sm:text-3xl font-bold leading-none tracking-tight text-white">
          <TypingText />
        </h2>
      </FadeScale>

      <FadeScale duration="0.4s" delay="0.4s">
        <p className="mb-6 text-base sm:text-lg slide-in-from-left text-neutral-400">
          {PARAGRAPH}
        </p>
      </FadeScale>
    </header>
  );
}

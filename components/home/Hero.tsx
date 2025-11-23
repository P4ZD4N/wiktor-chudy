import Link from "next/link";
import FadeScale from "../common/animations/FadeScale";
import TypingText from "./TypingText";
import Image from "next/image";

const FIRST_HEADER = "Hey, my name is";
const SECOND_HEADER = "Wiktor Chudy.";
const PARAGRAPH = `Software Engineer who combine solid frontend and backend skills with a
  strong focus on business impact. Currently pursuing degree in Computer
  Science while actively delivering fullstack solutions at Santander.
  Always looking for opportunities where I can contribute to impactful
  projects that help businesses grow and succeed.`;
const FIRST_BUTTON = "Know me better";
const SECOND_BUTTON = "View my work";

export default function Hero() {
  return (
    <header className="mx-auto w-10/12 md:w-3/4 lg:w-2/3 xl:w-7/12 flex flex-col items-center justify-center h-screen text-center">
      <FadeScale duration="0.5s" delay="0s">
        <div className="mb-6 md:mb-8 flex justify-center">
          <div className="w-42 h-42 md:w-64 md:h-64 lg:w-64 lg:h-64 relative rounded-full overflow-hidden ring-4 ring-orange-500 shadow-lg">
            <Image
              src="/me.jpg"
              alt="Wiktor's photo"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </FadeScale>

      <FadeScale duration="0.5s" delay="0.1s">
        <h2 className="mb-4 text-3xl font-normal leading-none tracking-tight lg:text-5xl text-white">
          {FIRST_HEADER}
        </h2>
      </FadeScale>

      <FadeScale duration="0.5s" delay="0.2s">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-6xl lg:text-7xl text-white slide-in-from-left">
          <span className="underline underline-offset-3 decoration-6 decoration-orange-500">
            {SECOND_HEADER}
          </span>
        </h1>
      </FadeScale>

      <FadeScale duration="0.5s" delay="0.3s">
        <h2 className="mb-4 text-3xl font-bold leading-none tracking-tight lg:text-5xl text-white">
          <TypingText />
        </h2>
      </FadeScale>

      <FadeScale duration="0.5s" delay="0.4s">
        <p className="mb-6 text-lg slide-in-from-left text-neutral-400">
          {PARAGRAPH}
        </p>
      </FadeScale>

      <FadeScale duration="0.5s" delay="0.5s">
        <div className="hidden sm:flex gap-4 justify-center">
          <Link
            href="/about"
            className="text-lg bg-white text-orange-500 px-4 py-3 rounded-lg duration-200 transform hover:scale-105"
          >
            {FIRST_BUTTON}
          </Link>
          <Link
            href="/work"
            className="text-lg bg-orange-500 text-white px-4 py-3 rounded-lg duration-200 transform hover:scale-105"
          >
            {SECOND_BUTTON}
          </Link>
        </div>
      </FadeScale>
    </header>
  );
}

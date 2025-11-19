import Image from "next/image";
import FadeUp from "../common/animations/FadeUp";

const FIRST_HEADER_FIRST_PART = "About ";
const FIRST_HEADER_SECOND_PART = "me";
const FIRST_PARAGRAPH = `Software Engineer who combine solid fullstack development
  skills with a clear focus on business impact. Currently pursuing
  degree in Computer Science while actively developing applications
  that deliver measurable value. Passionate about clean code, best
  coding practices and elegant technical solutions. Always looking for
  opportunities where I can contribute to impactful projects that help
  businesses grow and succeed.`;

const SECOND_PARAGRAPH_FIRST_PART = `In my free time I love delve into the next books
    from self-development and business categories - there is always
    something new to learn and apply! `;
const FIRST_ANCHOR = "(Click to discover my books)";
const SECOND_PARAGRAPH_SECOND_PART = `. I am also passionate about various sports, but my favorite are
  gym, long-distance bike and running. Travel is my another deep passion
  - exploring new places brings me a lot of joy. And something
  just for fun on the end: I'm a big fan of white coffee
  without sugar - simple pleasure :)`;

export default function AboutAboutMe() {
  return (
    <section className="mx-auto w-10/12 md:w-3/4 lg:w-2/3 xl:w-7/12 relative flex flex-col gap-10 lg:flex-row lg:gap-16 items-center">
      <div className="lg:w-3/5">
        <FadeUp duration="0.5s" delay="0s">
          <h1 className="text-center lg:text-left text-4xl font-bold mb-4">
            {FIRST_HEADER_FIRST_PART}
            <span className="underline underline-offset-3 decoration-6 decoration-orange-500">
              {FIRST_HEADER_SECOND_PART}
            </span>
          </h1>
        </FadeUp>

        <FadeUp duration="0.5s" delay="0.2s">
          <p className="text-lg text-neutral-400 mb-4">{FIRST_PARAGRAPH}</p>
        </FadeUp>

        <FadeUp duration="0.5s" delay="0.4s">
          <p className="text-lg text-neutral-400 mt-4 mb-6 md:mb-0">
            {SECOND_PARAGRAPH_FIRST_PART}
            <a
              className="hover:text-orange-500 transition duration-150 text-orange-500 md:text-neutral-400 font-medium"
              href="https://www.goodreads.com/user/show/185563841-wiktor-chudy"
              target="_blank"
            >
              {FIRST_ANCHOR}
            </a>
            {SECOND_PARAGRAPH_SECOND_PART}
          </p>
        </FadeUp>
      </div>

      <div className="slide-in-from-right flex justify-center items-center mt-8 lg:mt-0 lg:w-2/5">
        <FadeUp duration="0.5s" delay="0.6s">
          <div className="relative w-80 h-80 sm:w-120 md:h-120 lg:w-90 lg:h-120 2xl:w-120 aspect-square overflow-hidden shadow-2xl shadow-orange-900/50 transform rotate-3 hover:rotate-0 transition duration-500 ease-in-out">
            <Image
              src="/me2.jpeg"
              alt="Wiktor's photo"
              fill
              className="object-cover object-top"
            />
            <div className="absolute inset-0 border-8 border-orange-500 opacity-70 transform -rotate-6 transition duration-500 hover:rotate-3"></div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

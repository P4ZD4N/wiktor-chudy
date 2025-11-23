import { getCategoriesArticles } from "@/lib/articles";
import RecentArticles from "./RecentArticles";
import FadeUp from "../common/animations/FadeUp";

const HEADER_FIRST_PART = "Visit my ";
const HEADER_SECOND_PART = "blog"
const PARAGRAPH = `Check out place, where I share my experiences, write about the
  technologies I'm currently learning and offer self-development
  tips!
`;

export default async function HomeArticles() {
  const articles = await getCategoriesArticles();

  return (
    <section className="mx-auto w-10/12 md:w-3/4 lg:w-2/3 xl:w-7/12 :w-4/4 flex flex-col gap-8">
      <FadeUp duration="0.8s">
        <h2 className="text-center text-3xl font-bold leading-none tracking-tight md:text-3xl lg:text-4xl text-white">
          {HEADER_FIRST_PART}
          <span className="underline underline-offset-3 decoration-6 decoration-orange-500">
            {HEADER_SECOND_PART}
          </span>
        </h2>
      </FadeUp>

      <FadeUp duration="0.8s">
        <p className="text-lg text-center text-neutral-400">{PARAGRAPH}</p>
      </FadeUp>

      <RecentArticles allArticles={articles} />
    </section>
  );
}

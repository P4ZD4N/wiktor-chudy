import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import { getArticleData } from "@/lib/articles";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const Article = async ({ params }: PageProps) => {
  const { slug } = await params;
  const articleData = await getArticleData(slug);

  return (
    <section className="mx-auto w-10/12 md:w-1/2 mt-20 flex flex-col gap-5">
      <div className="fade-in fixed top-1/2 lg:left-1/80 left-1/4 lg:w-96 lg:h-96 w-64 h-64 bg-orange-500/15 rounded-full -translate-x-1/2 -translate-y-1/2 filter blur-3xl pointer-events-none z-[-1]" />
      <div className="fade-in fixed top-1/2 lg:right-1/80 right-1/4 lg:w-96 lg:h-96 w-64 h-64 bg-orange-500/15 rounded-full translate-x-1/2 -translate-y-1/2 filter blur-3xl pointer-events-none z-[-1]" />

      <div className="flex justify-between">
        <Link
          href={"/articles"}
          className="flex flex-row gap-1 place-items-center hover:text-orange-500 transition duration-150"
        >
          <ArrowLeftIcon width={20} />
          <p>Back</p>
        </Link>
        <p>{articleData.date.toString()}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {articleData.categories.map((category: string) => (
          <span
            key={category}
            className="text-xs font-medium px-2.5 py-0.5 rounded bg-orange-500 text-natural"
          >
            #{category}
          </span>
        ))}
      </div>

      <article
        className="article"
        dangerouslySetInnerHTML={{ __html: articleData.contentHtml }}
      />

      <Link
        href={"/articles"}
        className="mb-10 flex flex-row gap-1 place-items-center hover:text-orange-500 transition duration-150"
      >
        <ArrowLeftIcon width={20} />
        <p>Back to articles</p>
      </Link>
    </section>
  );
};

export default Article;

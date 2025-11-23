import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import { getArticleData } from "@/lib/articles";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const Article = async ({ params }: PageProps) => {
  const { slug } = await params;
  const articleData = await getArticleData(slug);

  if (!articleData) notFound();

  return (
    <section className="mx-auto w-10/12 md:w-1/2 mt-20 flex flex-col gap-5">

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

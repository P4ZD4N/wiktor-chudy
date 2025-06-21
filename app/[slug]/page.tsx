import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import { getArticleData } from "@/lib/articles";

interface PageProps {
  params: Promise<{ slug: string }>
}

const Article = async ({ params }: PageProps) => {

    const { slug } = await params
    const articleData = await getArticleData(slug)

    return (
        <section className="mx-auto w-10/12 md:w-1/2 mt-20 flex flex-col gap-5">
            <div className="flex justify-between">
                <Link href={"/"} className="flex flex-row gap-1 place-items-center hover:text-orange-500 transition duration-150">
                    <ArrowLeftIcon width={20} />
                    <p>Back</p>
                </Link>
                <p>{articleData.date.toString()}</p>
            </div>

            <div className="flex flex-wrap gap-2">
                {articleData.categories.map((category: string) => (
                <span
                    key={category}
                    className="bg-orange-500 text-natural text-xs font-medium px-2.5 py-0.5 rounded dark:bg-orange-500 dark:text-natural"
                >
                    #{category}
                </span>
                ))}
            </div>

            <article 
                className="article"
                dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} 
            />
        </section>
    )
}

export default Article
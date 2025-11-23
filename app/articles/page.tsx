import HorizontalArticleFilter from "@/components/articles/HorizontalArticleFilter";
import PaginatedArticles from "@/components/articles/PaginatedArticles";
import FadeInOnScroll from "@/components/common/animations/FadeInOnScroll";
import FadeScale from "@/components/common/animations/FadeScale";
import { getCategoriesArticles } from "@/lib/articles";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HEADER = "Articles";

interface ArticlesPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ArticlesPage({
  searchParams,
}: ArticlesPageProps) {
  const articles = await getCategoriesArticles();
  const params = await searchParams;

  const selectedCategories: string[] = params.categories
    ? Array.isArray(params.categories)
      ? params.categories.filter(
          (cat): cat is string => typeof cat === "string"
        )
      : typeof params.categories === "string"
      ? params.categories
          .split(",")
          .filter(
            (cat): cat is string => typeof cat === "string" && cat.trim() !== ""
          )
      : []
    : [];

  const filteredArticles =
    selectedCategories.length > 0
      ? Object.keys(articles)
          .filter((category) => selectedCategories.includes(category))
          .reduce((acc, category) => {
            acc[category] = articles[category];
            return acc;
          }, {} as typeof articles)
      : articles;

  const flatArticles = filteredArticles
    ? Object.values(filteredArticles)
        .flat()
        .filter(
          (article, index, array) =>
            array.findIndex((a) => a.id === article.id) === index
        )
        .sort((a, b) => {
          const dateA = a.date.split("-").reverse().join("-");
          const dateB = b.date.split("-").reverse().join("-");
          return dateB.localeCompare(dateA);
        })
    : [];

  const page = parseInt(params.page as string) || 1;
  const ARTICLES_PER_PAGE = 12;
  const startIndex = (page - 1) * ARTICLES_PER_PAGE;
  const endIndex = startIndex + ARTICLES_PER_PAGE;

  return (
    <section className="relative mx-auto w-10/12 md:w-3/4 lg:w-2/3 xl:w-8/12 mt-20 flex flex-col gap-16 mb-20">
      <FadeScale duration="0.6s" threshold={0.2}>
        <h1 className="text-4xl font-semibold text-center">
          <span className="underline underline-offset-3 decoration-6 decoration-orange-500">
            {HEADER}
          </span>
        </h1>
      </FadeScale>

      <FadeScale duration="0.6s" threshold={0.2}>
        <HorizontalArticleFilter
          categories={Object.keys(articles)}
          selectedCategories={selectedCategories}
        />
      </FadeScale>

      <PaginatedArticles flatArticles={flatArticles} params={params} />

      <div className="flex justify-center mt-10 gap-4">
        {page > 1 && (
          <FadeInOnScroll direction="right" threshold={0.2}>
            <a
              href={`?${new URLSearchParams({
                ...params,
                page: (page - 1).toString(),
                categories: selectedCategories.join(","),
              }).toString()}`}
            >
              <div className="w-10 h-10 rounded-full bg-white/50 hover:bg-orange-500 shadow flex items-center justify-center transition-all duration-200">
                <ChevronLeft className="text-black" />
              </div>
            </a>
          </FadeInOnScroll>
        )}

        {flatArticles.length > endIndex && (
          <FadeInOnScroll direction="left" threshold={0.2}>
            <a
              href={`?${new URLSearchParams({
                ...params,
                page: (page + 1).toString(),
                categories: selectedCategories.join(","),
              }).toString()}`}
            >
              <div className="w-10 h-10 rounded-full bg-white/50 hover:bg-orange-500 shadow flex items-center justify-center transition-all duration-200">
                <ChevronRight className="text-black" />
              </div>
            </a>
          </FadeInOnScroll>
        )}
      </div>
    </section>
  );
}

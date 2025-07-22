import ArticleCard from "@/components/articles/ArticleCard";
import HorizontalArticleFilter from "@/components/articles/HorizontalArticleFilter";
import FadeInOnScroll from "@/components/common/FadeInOnScroll";
import { getCategoriesArticles } from "@/lib/articles";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
      ? params.categories.filter((cat): cat is string => typeof cat === 'string' && cat !== undefined)
      : typeof params.categories === 'string' ? [params.categories] : []
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
  const paginatedArticles = flatArticles.slice(startIndex, endIndex);

  return (
    <section className="relative mx-auto w-10/12 md:w-3/4 lg:w-2/3 xl:w-8/12 mt-20 flex flex-col gap-16 mb-20">
      <div className="fade-in fixed top-1/2 lg:left-1/80 left-1/4 lg:w-96 lg:h-96 w-64 h-64 bg-orange-500/15 rounded-full -translate-x-1/2 -translate-y-1/2 filter blur-3xl pointer-events-none z-0" />
      <div className="fade-in fixed top-1/2 lg:right-1/80 right-1/4 lg:w-96 lg:h-96 w-64 h-64 bg-orange-500/15 rounded-full translate-x-1/2 -translate-y-1/2 filter blur-3xl pointer-events-none z-0" />

      <FadeInOnScroll direction="left" threshold={0.2}>
        <h1 className="text-4xl font-semibold text-center">
          <span className="underline underline-offset-3 decoration-6 decoration-orange-500">
            Articles
          </span>
        </h1>
      </FadeInOnScroll>

      <FadeInOnScroll direction="left" threshold={0.2}>
        <HorizontalArticleFilter
          categories={Object.keys(articles)}
          selectedCategories={selectedCategories}
        />
      </FadeInOnScroll>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {paginatedArticles.map((article) => (
          <ArticleCard
            key={article.id}
            id={article.id}
            title={article.title}
            date={article.date}
            categories={article.categories}
          />
        ))}
      </div>

      <div className="flex justify-center mt-10 gap-4">
        {page > 1 && (
          <FadeInOnScroll direction="right" threshold={0.2}>
            <a
              href={`?${new URLSearchParams({
              ...params,
              page: (page - 1).toString(),
              categories: selectedCategories.join(','),
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
                categories: selectedCategories.join(','),
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

import { ArticleItem } from "@/types";
import ArticleCard from "./ArticleCard";

const ARTICLES_PER_PAGE = 12;

interface PaginatedArticlesProps {
  flatArticles: ArticleItem[];
  params: { [key: string]: string | string[] | undefined };
}

export default function PaginatedArticles({
  flatArticles,
  params,
}: PaginatedArticlesProps) {
  const page = parseInt(params.page as string) || 1;
  const startIndex = (page - 1) * ARTICLES_PER_PAGE;
  const endIndex = startIndex + ARTICLES_PER_PAGE;
  const paginatedArticles = flatArticles.slice(startIndex, endIndex);

  return (
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
  );
}

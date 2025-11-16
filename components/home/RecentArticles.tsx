import { ArticleItem } from "@/types";
import ArticleCard from "../articles/ArticleCard";

type RecentArticlesProps = {
  allArticles: Record<string, ArticleItem[]>;
};

export default function RecentArticles({ allArticles }: RecentArticlesProps) {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {allArticles !== null &&
        Object.values(allArticles)
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
          .slice(0, 3)
          .map((article, index) => (
            <ArticleCard
              key={article.id}
              id={article.id}
              title={article.title}
              date={article.date}
              categories={article.categories}
              animationDelay={`${index * 0.2}s`}
            />
          ))}
    </div>
  );
}

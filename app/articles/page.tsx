import ArticleItemList from "@/components/ArticleListItem";
import { getCategoriesArticles } from "@/lib/articles";

export default async function ContactPage() {
  const articles = await getCategoriesArticles();

  return (
    <section className="relative mx-auto w-10/12 md:w-3/4 lg:w-2/3 xl:w-7/12 mt-20 flex flex-col gap-16 mb-20">
      <section className="md:grid md:grid-cols-2 flex flex-col gap-10">
        {articles !== null &&
          Object.keys(articles).map((article) => (
            <ArticleItemList
              category={article}
              articles={articles[article]}
              key={article}
            />
          ))}
      </section>
    </section>
  );
}

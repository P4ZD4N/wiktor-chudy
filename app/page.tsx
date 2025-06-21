import ArticleItemList from "@/components/ArticleListItem"
import TechCarousel from "@/components/TechCarousel"
import { getCategoriesArticles } from "@/lib/articles"
import Image from "next/image"

const HomePage = async () => {
  const articles = await getCategoriesArticles()

  return (
    <section className="mx-auto w-11/12 md:w-1/2 mt-20 flex flex-col gap-16 mb-20">
      <header className="text-center">

        <div className="mb-6 md:mb-8 flex justify-center">
          <div className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 relative rounded-full overflow-hidden ring-4 ring-blue-600 dark:ring-orange-500 shadow-lg">
            <Image
              src="/me.jpg"
              alt="Wiktor's photo"
              fill
              className="object-cover object-top"
            />
          </div> 
        </div>

        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white slide-in">Hey, I&apos;m <mark className="px-2 text-white bg-blue-600 rounded-sm dark:bg-orange-500">Wiktor</mark></h1>
        <h2 className="mb-4 text-2xl font-normal leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white slide-in">Software <span className="underline underline-offset-3 decoration-6 decoration-orange-400 dark:decoration-orange-500">Developer</span> Intern</h2>
        <h2 className="mb-4 text-2xl font-normal leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white slide-in">Computer Science <span className="underline underline-offset-3 decoration-6 decoration-orange-400 dark:decoration-orange-500">Student</span> @ PJATK</h2>
      
      </header>

      <TechCarousel />

      <section className="md:grid md:grid-cols-2 flex flex-col gap-10">
        {articles !== null &&
          Object.keys(articles).map((article) => (
            <ArticleItemList
              category={article}
              articles={articles[article]}
              key={article}
              />
          ))
        }
      </section>
    </section>
  )
}

export default HomePage
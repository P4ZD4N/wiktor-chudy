import FadeInOnScroll from "@/components/common/animations/FadeInOnScroll";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <div className="fade-in fixed top-1/2 lg:left-1/80 left-1/4 lg:w-96 lg:h-96 w-64 h-64 bg-orange-500/15 rounded-full -translate-x-1/2 -translate-y-1/2 filter blur-3xl pointer-events-none z-[-1]" />
      <div className="fade-in fixed top-1/2 lg:right-1/80 right-1/4 lg:w-96 lg:h-96 w-64 h-64 bg-orange-500/15 rounded-full translate-x-1/2 -translate-y-1/2 filter blur-3xl pointer-events-none z-[-1]" />

      <FadeInOnScroll direction="left">
        <h1 className="text-4xl font-bold text-orange-500">Page Not Found</h1>
      </FadeInOnScroll>

      <FadeInOnScroll direction="right">
        <p className="text-lg text-neutral-400">
          Could not find the requested resource!
        </p>
      </FadeInOnScroll>
    </div>
  );
}

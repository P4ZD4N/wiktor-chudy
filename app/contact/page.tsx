import ContactSection from "@/components/ContactSection";
import FadeInOnScroll from "@/components/SlideInOnScroll";

export default function ContactPage() {
    return (
        <section className="relative mx-auto w-10/12 md:w-3/4 lg:w-2/3 xl:w-7/12 mt-20 flex flex-col gap-16 mb-20">
        
            <div className="fade-in fixed top-1/2 lg:left-1/80 left-1/4 lg:w-96 lg:h-96 w-64 h-64 bg-orange-500/15 rounded-full -translate-x-1/2 -translate-y-1/2 filter blur-3xl pointer-events-none z-0" />
            <div className="fade-in fixed top-1/2 lg:right-1/80 right-1/4 lg:w-96 lg:h-96 w-64 h-64 bg-orange-500/15 rounded-full translate-x-1/2 -translate-y-1/2 filter blur-3xl pointer-events-none z-0" />
        
            <FadeInOnScroll direction="right" threshold={0.2}>
                <h1 className="text-4xl font-bold text-center">Contact <span className="underline underline-offset-3 decoration-6 decoration-orange-500"> me</span></h1>
            </FadeInOnScroll>

            <ContactSection />
        </section>
    )
}
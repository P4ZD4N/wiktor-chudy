import FadeIn from '@/app/home/common/animations/FadeIn';
import SectionTitle from '@/app/home/common/components/SectionTitle';
import SectionWrapper from '@/app/home/common/components/SectionWrapper';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaLongArrowAltUp } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';

export default function ContactSection() {
  return (
    <SectionWrapper bgColor="background-1" id="contact">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-primary opacity-[0.03] blur-[150px]" />
        <div className="absolute bottom-[10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-secondary opacity-[0.03] blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <FadeIn direction="up">
          <SectionTitle subtitle="Reach out" title="Contact" />
        </FadeIn>

        <FadeIn direction="up" delay={0.05}>
          <p className="text-gray-400 text-left text-base sm:text-lg mt-12 my-5 leading-relaxed">
            Feel free to reach out through these channels. I'm always open to
            discussing new opportunities, collaborations or just having a chat
            about technology and development.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <FadeIn direction="up" delay={0.1} blur={false}>
            <a
              href="https://github.com/P4ZD4N"
              target="_blank"
              rel="noreferrer"
              className="group relative h-full flex flex-col p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-left" />
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="flex justify-between items-start mb-12 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/[0.05] flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-500">
                  <FaGithub className="text-3xl" />
                </div>
                <div className="w-10 h-10 rounded-full bg-white/[0.02] flex items-center justify-center text-white/20 group-hover:text-primary group-hover:bg-primary/10 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              <div className="relative z-10 mt-auto">
                <h3 className="text-xs md:text-sm font-semibold tracking-widest text-gray-500 uppercase mb-2">
                  GitHub
                </h3>
                <span className="block text-base lg:text-lg font-bold text-gray-200 group-hover:text-primary transition-colors duration-300 truncate">
                  github.com/P4ZD4N
                </span>
              </div>
            </a>
          </FadeIn>

          <FadeIn direction="up" delay={0.2} blur={false}>
            <a
              href="https://linkedin.com/in/wiktor-chudy"
              target="_blank"
              rel="noreferrer"
              className="group relative h-full flex flex-col p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-secondary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-left" />
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-secondary/20 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="flex justify-between items-start mb-12 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/[0.05] flex items-center justify-center text-secondary group-hover:scale-110 group-hover:bg-secondary/10 group-hover:border-secondary/30 transition-all duration-500">
                  <FaLinkedin className="text-3xl" />
                </div>
                <div className="w-10 h-10 rounded-full bg-white/[0.02] flex items-center justify-center text-white/20 group-hover:text-secondary group-hover:bg-secondary/10 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              <div className="relative z-10 mt-auto">
                <h3 className="text-xs md:text-sm font-semibold tracking-widest text-gray-500 uppercase mb-2">
                  LinkedIn
                </h3>
                <span className="block text-base lg:text-lg font-bold text-gray-200 group-hover:text-secondary transition-colors duration-300 truncate">
                  linkedin.com/in/wiktor-chudy
                </span>
              </div>
            </a>
          </FadeIn>

          <FadeIn direction="up" delay={0.3} blur={false}>
            <a
              href="tel:+48880219318"
              className="group relative h-full flex flex-col p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-left" />
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="flex justify-between items-start mb-12 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/[0.05] flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-500">
                  <FiPhone className="text-3xl" />
                </div>
                <div className="w-10 h-10 rounded-full bg-white/[0.02] flex items-center justify-center text-white/20 group-hover:text-primary group-hover:bg-primary/10 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              <div className="relative z-10 mt-auto">
                <h3 className="text-xs md:text-sm font-semibold tracking-widest text-gray-500 uppercase mb-2">
                  Phone
                </h3>
                <span className="block text-base lg:text-lg font-bold text-gray-200 group-hover:text-primary transition-colors duration-300 truncate">
                  +48 880 219 318
                </span>
              </div>
            </a>
          </FadeIn>

          <FadeIn direction="up" delay={0.4} blur={false}>
            <a
              href="mailto:wiktorchudy@proton.me"
              className="group relative h-full flex flex-col p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-secondary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-left" />
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-secondary/20 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="flex justify-between items-start mb-12 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/[0.05] flex items-center justify-center text-secondary group-hover:scale-110 group-hover:bg-secondary/10 group-hover:border-secondary/30 transition-all duration-500">
                  <MdOutlineEmail className="text-3xl" />
                </div>
                <div className="w-10 h-10 rounded-full bg-white/[0.02] flex items-center justify-center text-white/20 group-hover:text-secondary group-hover:bg-secondary/10 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              <div className="relative z-10 mt-auto">
                <h3 className="text-xs md:text-sm font-semibold tracking-widest text-gray-500 uppercase mb-2">
                  Email
                </h3>
                <span className="block text-base lg:text-lg font-bold text-gray-200 group-hover:text-secondary transition-colors duration-300 truncate">
                  wiktorchudy@proton.me
                </span>
              </div>
            </a>
          </FadeIn>
        </div>

        <FadeIn direction="up" delay={0.5}>
          <div className="w-full flex justify-center mt-20">
            <Link
              href="#hero"
              className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.03] border border-white/10 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 text-gray-400 hover:text-white"
            >
              <FaLongArrowAltUp className="group-hover:-translate-y-1 transition-transform duration-300" />
              <span className="text-sm font-semibold tracking-wide">
                Back to top
              </span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}

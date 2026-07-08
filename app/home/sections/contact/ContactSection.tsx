import FadeIn from '@/app/home/common/animations/FadeIn';
import SectionTitle from '@/app/home/common/components/SectionTitle';
import SectionWrapper from '@/app/home/common/components/SectionWrapper';
import Link from 'next/link';
import {
  FaGithub,
  FaLinkedin,
  FaLongArrowAltUp,
  FaPhoneAlt,
} from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { MdEmail, MdOutlineEmail } from 'react-icons/md';

export default function ContactSection() {
  return (
    <SectionWrapper bgColor="background-2" id="contact">
      <FadeIn>
        <SectionTitle title="<Contact />" />
      </FadeIn>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex flex-col gap-4">
          <FadeIn>
            <div>
              <h2 className="text-left w-fit bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
                Let's Connect
              </h2>
              <p className="text-left text-lg md:text-xl text-gray-300">
                I'm always open to discussing new opportunities, collaborations
                or just having a chat about technology and development.
              </p>
            </div>
          </FadeIn>
          <div className="flex flex-col gap-4">
            <FadeIn>
              <a
                href="https://github.com/P4ZD4N"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center text-center gap-1 md:gap-2 p-3 rounded-2xl border hover:border-secondary duration-300 relative overflow-hidden backdrop-blur-sm bg-white/5 border border-white/20 shadow-sm rounded-xl"
              >
                <div className="absolute -top-12 -right-36 -z-10 h-72 w-72 rounded-full bg-gradient-to-r from-primary to-secondary opacity-60 blur-[100px]" />
                <FaGithub className="text-2xl sm:text-3xl xl:text-4xl text-secondary" />
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-0 md:mb-1 text-gray-300">
                    GitHub
                  </h3>
                  <span className="text-sm opacity-70 font-medium">
                    github.com/P4ZD4N
                  </span>
                </div>
              </a>
            </FadeIn>

            <FadeIn>
              <a
                href="https://linkedin.com/in/wiktor-chudy"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center text-center gap-1 md:gap-2 p-3 rounded-2xl border hover:border-primary duration-300 relative overflow-hidden backdrop-blur-sm bg-white/5 border border-white/20 shadow-sm rounded-xl"
              >
                <div className="absolute -top-12 -right-36 -z-10 h-72 w-72 rounded-full bg-gradient-to-r from-primary to-secondary opacity-60 blur-[100px]" />
                <FaLinkedin className="text-2xl sm:text-3xl xl:text-4xl text-primary" />
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-0 md:mb-1 text-gray-300">
                    LinkedIn
                  </h3>
                  <span className="text-sm opacity-70 font-medium">
                    linkedin.com/in/wiktor-chudy
                  </span>
                </div>
              </a>
            </FadeIn>
          </div>
        </div>

        <div>
          <div className="flex flex-col gap-4">
            <FadeIn>
              <div>
                <h2 className="text-left w-fit bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
                  Get in Touch
                </h2>
                <p className="text-left text-lg md:text-xl text-gray-300">
                  Feel free to reach out through any of these channels. I
                  typically respond within 24 hours.
                </p>
              </div>
            </FadeIn>
            <div className="flex flex-col gap-4">
              <FadeIn>
                <a
                  href="tel:+48880219318"
                  className="flex flex-col items-center text-center gap-1 md:gap-2 p-3 rounded-2xl border hover:border-primary duration-300 relative overflow-hidden backdrop-blur-sm bg-white/5 border border-white/20 shadow-sm rounded-xl"
                >
                  <div className="absolute -top-12 -left-36 -z-10 h-72 w-72 rounded-full bg-gradient-to-r from-primary to-secondary opacity-60 blur-[100px]" />
                  <FiPhone className="text-2xl sm:text-3xl xl:text-4xl text-primary" />
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-0 md:mb-1 text-gray-300">
                      Telefon
                    </h3>
                    <span className="text-sm opacity-70 font-medium">
                      +48 880 219 318
                    </span>
                  </div>
                </a>
              </FadeIn>

              <FadeIn>
                <a
                  href="mailto:wiktorchudy@proton.me"
                  className="flex flex-col items-center text-center gap-1 md:gap-2 p-3 rounded-2xl border hover:border-secondary duration-300 relative overflow-hidden backdrop-blur-sm bg-white/5 border border-white/20 shadow-sm rounded-xl"
                >
                  <div className="absolute -top-12 -left-36 -z-10 h-72 w-72 rounded-full bg-gradient-to-r from-primary to-secondary opacity-60 blur-[100px]" />
                  <MdOutlineEmail className="text-2xl sm:text-3xl xl:text-4xl text-secondary" />
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-0 md:mb-1 text-gray-300">
                      Email
                    </h3>
                    <span className="text-sm opacity-70 font-medium">
                      wiktorchudy@proton.me
                    </span>
                  </div>
                </a>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>

      <FadeIn>
        <Link
          href="#hero"
          className="flex items-center gap-2 mt-15 text-lg font-medium text-gray-300 hover:text-secondary transition-colors"
        >
          <FaLongArrowAltUp />
          <span>Back to top</span>
        </Link>
      </FadeIn>
    </SectionWrapper>
  );
}

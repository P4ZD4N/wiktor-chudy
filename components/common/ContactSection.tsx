"use client";

import { Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import socialMedia from "@/lib/social-media";
import contactInfo from "@/lib/contact-info";

const ContactSection = () => {
  return (
    <section className="mx-auto w-full flex flex-col gap-16">
      <div className="max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="text-2xl text-white mb-2">Let&apos;s Connect</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                I&apos;m always open to discussing new opportunities,
                collaborations or just having a chat about technology and
                development.
              </p>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {socialMedia.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <a
                    key={index}
                    href={contact.href}
                    target={
                      contact.href.startsWith("http") ? "_blank" : "_self"
                    }
                    rel={
                      contact.href.startsWith("http")
                        ? "noopener noreferrer"
                        : ""
                    }
                    className="break-all flex items-center gap-4 p-4 rounded-xl bg-transparent border border-zinc-700 hover:border-orange-500 transition-all duration-300 group"
                  >
                    <div
                      className={`${contact.color} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent size={36} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-medium text-white">
                        {contact.label}
                      </h4>
                      <p className="text-neutral-400 text-md">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </motion.div>
          </div>

          <div className="space-y-8">
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="text-2xl text-white mb-2">Get in Touch</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Feel free to reach out through any of these channels. I
                typically respond within 24 hours.
              </p>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <a
                    key={`right-${index}`}
                    href={contact.href}
                    target={
                      contact.href.startsWith("http") ? "_blank" : "_self"
                    }
                    rel={
                      contact.href.startsWith("http")
                        ? "noopener noreferrer"
                        : ""
                    }
                    className="break-all flex items-center gap-4 p-4 rounded-xl bg-transparent border border-zinc-700 hover:border-orange-500 transition-all duration-300 hover:shadow-lg group"
                  >
                    <div
                      className={`${contact.color} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent size={36} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-medium text-white">
                        {contact.label}
                      </h4>
                      <p className="text-gray-300 text-md">{contact.value}</p>
                    </div>
                  </a>
                );
              })}
            </motion.div>
          </div>
        </div>

        <motion.div
          className="text-center mt-16 p-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-4">
            Ready to start your project?
          </h3>
          <p className="text-lg text-orange-100 mb-6 max-w-2xl mx-auto">
            Whether you need a website, web application, or just want to discuss
            your ideas, I&apos;m here to help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+48880219318"
              className="text-lg inline-flex items-center gap-2 bg-white text-orange-600 font-medium px-6 py-3 rounded-lg hover:bg-orange-50 transition-all duration-300 transform hover:scale-105"
            >
              <Phone size={36} />
              Call Now
            </a>
            <a
              href="mailto:wiktorchudy@proton.me"
              className="text-lg inline-flex items-center gap-2 bg-orange-700 text-white font-medium px-6 py-3 rounded-lg hover:bg-orange-800 transition-all duration-300 transform hover:scale-105"
            >
              <Mail size={36} />
              Send Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

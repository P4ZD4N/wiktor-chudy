"use client"

import { Phone, Mail, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactSection = () => {

  const socialMedia = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/wiktor-chudy",
      href: "https://linkedin.com/in/wiktor-chudy",
      color: "text-blue-300"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/P4ZD4N",
      href: "https://github.com/P4ZD4N",
      color: "text-gray-200"
    }
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+48 880 219 318",
      href: "tel:+48880219318",
      color: "text-green-400"
    },
    {
      icon: Mail,
      label: "Email",
      value: "wiktorchudy@proton.me",
      href: "mailto:wiktorchudy@proton.me",
      color: "text-blue-400"
    }
  ];

  return (
    <section className="mx-auto w-full flex flex-col gap-16"> 
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div 
              className="text-center md:text-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="text-2xl text-white mb-2">
                Let&apos;s Connect
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                I&apos;m always open to discussing new opportunities, collaborations or just having a chat about technology and development.
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
                    target={contact.href.startsWith('http') ? '_blank' : '_self'}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="flex items-center gap-4 p-4 rounded-xl bg-transparent border border-zinc-700 hover:border-orange-500 transition-all duration-300 hover:shadow-lg group"
                  >
                    <div className={`p-3 rounded-full bg-zinc-700 ${contact.color} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-white">
                        {contact.label}
                      </h4>
                      <p className="text-gray-300 text-sm">
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
              <h3 className="text-2xl text-white mb-2">
                Get in Touch
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Feel free to reach out through any of these channels. I typically respond within 24 hours.
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
                    target={contact.href.startsWith('http') ? '_blank' : '_self'}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="flex items-center gap-4 p-4 rounded-xl bg-transparent border border-zinc-700 hover:border-orange-500 transition-all duration-300 hover:shadow-lg group"
                  >
                    <div className={`p-3 rounded-full bg-zinc-700 ${contact.color} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-white">
                        {contact.label}
                      </h4>
                      <p className="text-gray-300 text-sm">
                        {contact.value}
                      </p>
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
          <h3 className="text-2xl font-bold mb-4">Ready to start your project?</h3>
          <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
            Whether you need a website, web application, or just want to discuss your ideas, I&apos;m here to help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+48880219318"
              className="inline-flex items-center gap-2 bg-white text-orange-600 font-medium px-6 py-3 rounded-lg hover:bg-orange-50 transition-all duration-300 transform hover:scale-105"
            >
              <Phone size={20} />
              Call Now
            </a>
            <a
              href="mailto:wiktorchudy@proton.me"
              className="inline-flex items-center gap-2 bg-orange-700 text-white font-medium px-6 py-3 rounded-lg hover:bg-orange-800 transition-all duration-300 transform hover:scale-105"
            >
              <Mail size={20} />
              Send Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
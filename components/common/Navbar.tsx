"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", icon: "fa-house", label: "Home" },
  { href: "/about", icon: "fa-address-card", label: "About me", regular: true },
  { href: "/work", icon: "fa-flask", label: "Work" },
  { href: "/articles", icon: "fa-book", label: "Articles" },
  { href: "/contact", icon: "fa-phone", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav
        className="fixed top-1/2 left-4 -translate-y-1/2 z-50 hidden md:flex flex-col items-center space-y-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {links.map(({ href, icon, label, regular }) => (
          <Link
            key={label}
            href={href}
            className="group relative flex items-center justify-center text-neutral-400 hover:text-orange-500 transition"
          >
            <i
              className={`${
                regular ? "fa-regular" : "fa-solid"
              } ${icon} text-2xl lg:text-3xl`}
            />
            <span className="absolute left-8 lg:left-10 whitespace-nowrap text-sm bg-neutral-800 text-white px-3 py-1 rounded-md opacity-0 invisible translate-x-2 group-hover:opacity-100 group-hover:visible group-hover:translate-x-0 transition-all duration-200 z-50 shadow-lg">
              {label}
            </span>
          </Link>
        ))}
      </motion.nav>

      <div className="md:hidden fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className={`cursor-pointer text-white p-4 rounded-full shadow-lg transition ${
            isOpen ? "bg-orange-700" : "bg-orange-500 hover:bg-orange-600"
          }`}
        >
          <i className="fa-solid fa-bars text-lg" />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-4 z-40 flex flex-col items-start space-y-4 bg-neutral-900 p-4 rounded-xl shadow-xl"
          >
            {links.map(({ href, icon, label, regular }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 text-white hover:text-orange-500 transition"
              >
                <i
                  className={`${
                    regular ? "fa-regular" : "fa-solid"
                  } ${icon} text-xl`}
                />
                <span className="text-xl">{label}</span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

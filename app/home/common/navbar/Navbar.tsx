'use client';

import Link from 'next/link';
import { useState } from 'react';
import NavbarLink from './NavbarLink';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-6 left-4 right-4 md:left-8 md:right-8 xl:left-1/2 xl:-translate-x-1/2 xl:w-full xl:max-w-7xl z-50 backdrop-blur-xl bg-white/[0.03] border border-white/10 shadow-2xl rounded-2xl transition-all duration-300">
      <div className="px-4 sm:px-6 md:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link
              href="/"
              onClick={closeMenu}
              className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-2xl font-extrabold tracking-wide uppercase"
            >
              Wiktor
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <NavbarLink href="/#about" text="About" />
            <NavbarLink href="/#skills" text="Skills" />
            <NavbarLink href="/#experience" text="Experience" />
            <NavbarLink href="/#articles" text="Articles" />
            <NavbarLink href="/#contact" text="Contact" />
          </div>

          <div className="md:hidden flex items-center">
            <button
              aria-label="Toggle mobile menu"
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none group"
            >
              <span
                className={`block w-6 h-[2px] bg-gray-300 rounded-full transition-transform duration-300 ease-in-out ${
                  isOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block w-6 h-[2px] bg-gray-300 rounded-full transition-opacity duration-300 ease-in-out ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`block w-6 h-[2px] bg-gray-300 rounded-full transition-transform duration-300 ease-in-out ${
                  isOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-white/10 bg-white/[0.02] rounded-b-2xl">
            <div
              className="flex flex-col px-6 pt-4 pb-6 space-y-5"
              onClick={closeMenu}
            >
              <NavbarLink href="/#about" text="About" />
              <NavbarLink href="/#skills" text="Skills" />
              <NavbarLink href="/#experience" text="Experience" />
              <NavbarLink href="/#articles" text="Articles" />
              <NavbarLink href="/#contact" text="Contact" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

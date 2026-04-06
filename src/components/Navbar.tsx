"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Usługi", href: "#uslugi" },
    { name: "Realizacje", href: "#realizacje" },
    { name: "O mnie", href: "#o-mnie" },
    { name: "Kontakt", href: "#kontakt" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="group">
          <span className={`font-serif text-2xl md:text-3xl tracking-tight transition-colors duration-300 ${scrolled ? 'text-black' : 'text-white'}`}>
            Jan Kowalski<span className="text-[#F5C518]">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          <div className="flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[17px] font-medium transition-colors hover:text-[#F5C518] ${scrolled ? 'text-gray-900' : 'text-gray-100'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <a
            href="tel:+48123456789"
            className="bg-[#F5C518] text-[#1A2744] font-bold px-6 py-3 hover:opacity-90 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-[2px]"
          >
            Zadzwoń teraz
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`md:hidden p-2 transition-colors ${scrolled ? 'text-black' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl md:hidden flex flex-col"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-serif text-black border-b border-gray-100 pb-4"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:+48123456789"
                className="mt-4 bg-[#F5C518] text-[#1A2744] font-bold text-lg text-center px-6 py-4"
              >
                +48 123 456 789
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

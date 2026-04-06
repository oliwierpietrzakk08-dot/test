"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]); // 0.3 parallax factor

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Background with parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="relative w-full h-[120%] -top-[10%]">
          <Image
            src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop"
            alt="Elektryk tło"
            fill
            priority
            className="object-cover"
          />
        </div>
        {/* Overlay bg-black/50 */}
        <div className="absolute inset-0 bg-black/60 z-10" />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 pt-20">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white text-5xl md:text-7xl lg:text-[80px] leading-[1.1] mb-6 font-serif"
          >
            Elektryk, któremu możesz <span className="text-[#F5C518]">zaufać.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-gray-200 text-xl md:text-2xl font-light mb-10 tracking-wide"
          >
            10 lat doświadczenia <span className="mx-2 opacity-50">·</span> Łowicz i okolice
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <a
              href="tel:+48123456789"
              className="bg-[#F5C518] text-[#1A2744] font-bold px-8 py-4 text-center text-lg hover:opacity-90 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Zadzwoń teraz
            </a>
            <a
              href="#uslugi"
              className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 text-center text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:-translate-y-1"
            >
              Zobacz usługi
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Section } from "../Section";
import Image from "next/image";
import { motion } from "framer-motion";

export default function WhyMe() {
  const points = [
    {
      title: "10 lat na rynku",
      desc: "Wieloletnia praktyka pozwala mi szybko lokalizować usterki i stosować sprawdzone rozwiązania."
    },
    {
      title: "Kompleksowe uprawnienia",
      desc: "Posiadam aktualne uprawnienia SEP do 1kV, co gwarantuje pełną legalność i bezpieczeństwo."
    },
    {
      title: "Czystość i punktualność",
      desc: "Szanuję Twój czas i dom. Po skończonej pracy zostawiam po sobie absolutny porządek."
    },
    {
      title: "Gwarancja na wykonanie",
      desc: "Jestem pewny swoich umiejętności, dlatego na każdą wykonaną instalację udzielam gwarancji."
    }
  ];

  return (
    <Section bg="bg-[#FAF9F6]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Col */}
        <div>
          <h2 className="text-4xl md:text-5xl mb-8">
            Dlaczego warto <span className="text-[#F5C518]">mi zaufać?</span>
          </h2>
          <div className="space-y-8">
            {points.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start"
              >
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[#F5C518]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-serif mb-2">{point.title}</h4>
                  <p className="text-gray-600 font-light leading-relaxed">{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Image Col */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-[600px] w-full rounded-sm overflow-hidden shadow-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b6?q=80&w=2069&auto=format&fit=crop"
            alt="Elektryk przy pracy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1A2744]/10 mix-blend-multiply" />
        </motion.div>
      </div>
    </Section>
  );
}

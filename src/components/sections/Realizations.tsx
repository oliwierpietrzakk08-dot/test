"use client";

import { Section } from "../Section";
import { motion } from "framer-motion";

export default function Realizations() {
  const photos = [
    { src: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop", text: "Kompleksowa instalacja w domu" },
    { src: "https://images.unsplash.com/photo-1558227691-41ea78d1f631?q=80&w=1974&auto=format&fit=crop", text: "Wymiana rozdzielni" },
    { src: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?q=80&w=2083&auto=format&fit=crop", text: "Smart Home" },
    { src: "https://images.unsplash.com/photo-1487887235947-a955ef187fce?q=80&w=2055&auto=format&fit=crop", text: "Oświetlenie architektoniczne" },
    { src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop", text: "Pomiary elektryczne" },
    { src: "https://images.unsplash.com/photo-1613145995470-388de84bef87?q=80&w=2070&auto=format&fit=crop", text: "Awarie i diagnostyka" },
  ];

  return (
    <Section id="realizacje" bg="bg-white">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl mb-4">Moje <span className="text-[#F5C518]">Realizacje</span></h2>
        <p className="text-gray-600 font-light text-lg">
          Zobacz przykłady prac wykonanych na terenie Łowicza i okolic.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative h-80 overflow-hidden cursor-pointer bg-gray-100"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url('${photo.src}')` }}
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-white font-serif text-xl mb-2">{photo.text}</h4>
                <div className="w-12 h-1 bg-[#F5C518] mx-auto"></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

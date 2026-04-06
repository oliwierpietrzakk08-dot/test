"use client";

import { Section } from "../Section";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <Section id="o-mnie" bg="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Photo Col */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative order-2 lg:order-1"
        >
          <div className="absolute inset-0 bg-[#F5C518] translate-x-4 translate-y-4 rounded-sm" />
          <img
            src="https://images.unsplash.com/photo-1574607409748-1123a1a5b828?q=80&w=1964&auto=format&fit=crop"
            alt="Portret elektryka"
            className="relative z-10 w-full h-[500px] object-cover rounded-sm shadow-xl grayscale"
          />
        </motion.div>

        {/* Text Col */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-1 lg:order-2"
        >
          <h2 className="text-4xl md:text-5xl mb-6">Kilka słów <span className="text-[#F5C518]">o mnie</span></h2>
          <div className="w-16 h-1 bg-[#1A2744] mb-8" />
          
          <div className="space-y-6 text-gray-600 font-light text-lg leading-relaxed">
            <p>
              Jestem dyplomowanym elektrykiem z ponad 10-letnim doświadczeniem w branży. Moja praca to dla mnie nie tylko zawód, ale również pasja, dzięki czemu do każdego zlecenia podchodzę z pełnym zaangażowaniem.
            </p>
            <p>
              Działam głównie na terenie Łowicza, Skierniewic i przyległych miejscowości. Specjalizuję się zarówno w wykonywaniu nowych instalacji w domach jednorodzinnych, jak i w szybkiej diagnostyce trudnych do wykrycia usterek.
            </p>
            <p className="font-medium text-black">
              Moim priorytetem jest Twoje bezpieczeństwo oraz estetyka wykonania. Skontaktuj się ze mną, a chętnie doradzę najlepsze rozwiązanie.
            </p>
          </div>

          <div className="mt-10">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/SEP_logo.png" alt="Certyfikat SEP" className="h-16 opacity-80" />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

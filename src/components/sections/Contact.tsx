"use client";

import { Section } from "../Section";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <Section id="kontakt" bg="bg-[#1A2744]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Info */}
        <div className="text-white">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl mb-6"
          >
            Masz awarię? <br />
            <span className="text-[#F5C518]">Potrzebujesz wyceny?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 font-light text-lg mb-12 max-w-md"
          >
            Zadzwoń do mnie bezpośrednio lub zostaw wiadomość. Odpowiadam najszybciej, jak to możliwe.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <a href="tel:+48123456789" className="group flex items-center gap-6">
              <div className="w-16 h-16 bg-[#F5C518] flex items-center justify-center text-[#1A2744] group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <div>
                <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Telefon</p>
                <p className="text-3xl font-serif text-[#F5C518]">+48 123 456 789</p>
              </div>
            </a>
            
            <a href="mailto:kontakt@elektryk-lowicz.pl" className="group flex items-center gap-6">
              <div className="w-16 h-16 border-2 border-[#F5C518] flex items-center justify-center text-[#F5C518] group-hover:bg-[#F5C518] group-hover:text-[#1A2744] transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">E-mail</p>
                <p className="text-xl font-light text-white">kontakt@elektryk-lowicz.pl</p>
              </div>
            </a>
          </motion.div>
        </div>

        {/* Form */}
        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="bg-white p-8 md:p-10 shadow-2xl"
        >
          <h3 className="text-2xl font-serif text-black mb-8">Zostaw wiadomość</h3>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Imię i nazwisko</label>
              <input type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#F5C518] transition-colors bg-transparent text-black" placeholder="Jan Kowalski" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Telefon lub E-mail</label>
              <input type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#F5C518] transition-colors bg-transparent text-black" placeholder="Numer kontaktowy" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Wiadomość</label>
              <textarea rows={4} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#F5C518] transition-colors bg-transparent text-black resize-none" placeholder="O czym chcesz porozmawiać..."></textarea>
            </div>
            <button type="button" className="w-full bg-[#1A2744] text-white font-bold py-4 mt-4 hover:bg-[#F5C518] hover:text-[#1A2744] transition-colors duration-300">
              Wyślij wiadomość
            </button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}

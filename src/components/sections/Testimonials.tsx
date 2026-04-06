"use client";

import { Section } from "../Section";
import { motion } from "framer-motion";

export default function Testimonials() {
  const reviews = [
    {
      text: "Świetny fachowiec. Szybko zlokalizował problem, którego poprzedni elektryk nie potrafił znaleźć. Pełen profesjonalizm i porządek po pracy.",
      name: "Marek K.",
      location: "Łowicz"
    },
    {
      text: "Pan Jan wykonywał u nas całą instalację w nowym domu jednorodzinnym. Wszystko zgodnie z planem, terminowo i bardzo solidnie. Polecam w 100%.",
      name: "Anna i Piotr",
      location: "Skierniewice"
    },
    {
      text: "Bardzo dobry kontakt, fachowe doradztwo przy wyborze oświetlenia i osprzętu. Wymiana rozdzielni przebiegła sprawnie i bez ukrytych kosztów.",
      name: "Krzysztof W.",
      location: "Stryków"
    }
  ];

  return (
    <Section bg="bg-[#1A2744]">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-white text-4xl md:text-5xl mb-4">Opinie <span className="text-[#F5C518]">Klientów</span></h2>
        <p className="text-gray-300 font-light text-lg">
          Zadowolenie klientów to dla mnie najwyższy priorytet.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white/5 p-8 border border-white/10 hover:bg-white/10 transition-colors duration-300 relative"
          >
            <div className="absolute top-6 left-6 text-[#F5C518] opacity-20">
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <div className="relative z-10">
              <p className="text-gray-200 font-light italic mb-8 leading-relaxed h-32 md:h-40">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-[#F5C518] font-bold font-serif">
                  {review.name[0]}
                </div>
                <div>
                  <h4 className="text-white font-serif text-lg">{review.name}</h4>
                  <p className="text-[#F5C518] text-sm">{review.location}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

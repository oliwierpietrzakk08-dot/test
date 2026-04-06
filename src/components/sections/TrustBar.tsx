"use client";

import { motion, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ from = 0, to, duration = 1.2 }: { from?: number; to: number; duration?: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );
    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView && nodeRef.current) {
      const controls = animate(from, to, {
        duration,
        onUpdate: (value) => {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(value).toString();
          }
        },
      });
      return () => controls.stop();
    }
  }, [inView, from, to, duration]);

  return <span ref={nodeRef}>{from}</span>;
}

export default function TrustBar() {
  const items = [
    { number: 10, suffix: " lat", label: "Doświadczenia" },
    { number: 1500, suffix: "+", label: "Zadowolonych klientów" },
    { number: 100, suffix: "%", label: "Gwarancji jakości" },
    { originalText: "Uprawnienia", suffix: "", label: "SEP do 1kV" },
  ];

  return (
    <section className="bg-[#1A2744] text-white py-16 relative z-30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center divide-x-0 md:divide-x divide-white/20">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center px-4"
            >
              <div className="text-[#F5C518] text-4xl md:text-5xl font-serif font-bold mb-2 flex items-center">
                {item.number ? (
                  <>
                    <Counter to={item.number} />
                    {item.suffix}
                  </>
                ) : (
                  item.originalText
                )}
              </div>
              <p className="text-gray-300 font-light text-sm md:text-base tracking-wide uppercase">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

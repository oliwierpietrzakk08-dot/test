"use client";

import { motion } from "framer-motion";

export function Section({
  children,
  className = "",
  id,
  bg = "bg-white",
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bg?: string;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`py-20 md:py-32 ${bg} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {children}
      </div>
    </motion.section>
  );
}

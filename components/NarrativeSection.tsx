"use client";

import React from "react";
import { motion } from "framer-motion";

interface NarrativeSectionProps {
  children: React.ReactNode;
  className?: string;
}

export const NarrativeSection = ({ children, className = "" }: NarrativeSectionProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`max-w-2xl text-lg leading-relaxed space-y-6 ${className}`}
    >
      {children}
    </motion.section>
  );
};


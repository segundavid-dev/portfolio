"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export const Navigation = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-8 md:px-12 pointer-events-none"
    >
      <Link href="/" className="group pointer-events-auto">
        <span className="text-xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-100 italic transition-transform group-hover:scale-105 inline-block">
          DS
        </span>
      </Link>
      
      <div className="flex gap-8 pointer-events-auto">
        {["works", "about", "contact"].map((item) => (
          <Link
            key={item}
            href={`/${item}`}
            className="text-sm font-medium tracking-tight text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors uppercase"
          >
            {item}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
};

"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

export const ProjectCard = ({ title, description, link }: ProjectCardProps) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ x: 4 }}
      className="group block border-b border-zinc-200 dark:border-zinc-800 py-6 last:border-0"
    >
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
            {title}
            <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-zinc-400" />
          </h3>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-md">
            {description}
          </p>
        </div>
      </div>
    </motion.a>
  );
};

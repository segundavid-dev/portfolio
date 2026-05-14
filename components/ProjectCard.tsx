"use client";
import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";

import { Project } from "@/types/project";

interface ProjectCardProps extends Project {
  index: number;
}

export const ProjectCard = ({
  title,
  description,
  tags,
  liveLink,
  githubLink,
  wip,
  index,
}: ProjectCardProps) => {
  const padded = String(index).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group border-b border-zinc-100 dark:border-zinc-900 py-8 last:border-0"
    >
      <div className="grid grid-cols-[2rem_1fr] gap-x-4">
        <span className="text-xs text-zinc-400 dark:text-zinc-500 tabular-nums pt-1">
          {padded}
        </span>

        <div className="space-y-3">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-baseline gap-3 flex-wrap">
              <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                {title}
              </h3>
              {wip && (
                <span className="text-[9px] font-black uppercase tracking-[0.15em] text-stone-400 dark:text-stone-500">
                  WIP
                </span>
              )}
            </div>

            <div className="flex items-center gap-3 text-zinc-400 dark:text-zinc-600 shrink-0 pt-0.5">
              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                  aria-label="View source"
                >
                  <Github className="w-4 h-4 stroke-[1.5px]" />
                </a>
              )}
              {liveLink && (
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                  aria-label="View live"
                >
                  <ArrowUpRight className="w-4 h-4 stroke-[1.5px]" />
                </a>
              )}
            </div>
          </div>

          <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed">
            {description}
          </p>

          <p className="text-[10px] font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500">
            {tags.join(" · ")}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

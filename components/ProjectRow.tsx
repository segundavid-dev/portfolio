"use client";
import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";

import { Project } from "@/types/project";

interface ProjectRowProps extends Project {
  index: number;
}

export const ProjectRow = ({
  title,
  description,
  liveLink,
  githubLink,
  wip,
  index,
}: ProjectRowProps) => {
  const padded = String(index).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group flex gap-4 border-b border-zinc-100 py-4 last:border-0"
    >
      <span className="pt-0.5 text-xs tabular-nums text-zinc-300">
        {padded}
      </span>

      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="shrink-0 text-sm font-semibold tracking-tight text-zinc-900">
            {title}
            {wip && (
              <span className="ml-2 align-middle text-[9px] font-black uppercase tracking-[0.15em] text-stone-400">
                WIP
              </span>
            )}
          </h3>

          <div className="flex items-center gap-3 text-zinc-400">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-zinc-900"
                aria-label="View source"
              >
                <Github className="h-3.5 w-3.5 stroke-[1.5px]" />
              </a>
            )}
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-zinc-900"
                aria-label="View live"
              >
                <ArrowUpRight className="h-3.5 w-3.5 stroke-[1.5px]" />
              </a>
            )}
          </div>
        </div>

        <p className="mt-0.5 text-sm leading-relaxed text-stone-500 line-clamp-1">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

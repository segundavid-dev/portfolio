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
  const href = liveLink ?? githubLink;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition-colors duration-300 hover:border-zinc-400"
    >
      <div className="mb-8 flex items-center justify-between">
        <span className="text-xs tabular-nums text-zinc-300">{padded}</span>

        <div className="relative z-10 flex items-center gap-3 text-zinc-400">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-zinc-900"
              aria-label="View source"
            >
              <Github className="h-4 w-4 stroke-[1.5px]" />
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:text-zinc-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-label="View live"
            >
              <ArrowUpRight className="h-4 w-4 stroke-[1.5px]" />
            </a>
          )}
        </div>
      </div>

      <h3 className="text-xl font-bold tracking-tight text-zinc-900">
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="after:absolute after:inset-0 after:rounded-2xl focus:outline-none"
          >
            {title}
            {wip && (
              <span className="ml-2 align-middle text-[9px] font-black uppercase tracking-[0.15em] text-stone-400">
                WIP
              </span>
            )}
          </a>
        ) : (
          <>
            {title}
            {wip && (
              <span className="ml-2 align-middle text-[9px] font-black uppercase tracking-[0.15em] text-stone-400">
                WIP
              </span>
            )}
          </>
        )}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-stone-500">
        {description}
      </p>

      <p className="mt-auto pt-8 text-[10px] font-bold uppercase tracking-wider text-stone-400">
        {tags.join(" · ")}
      </p>
    </motion.div>
  );
};

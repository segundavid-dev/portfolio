"use client";
import { motion } from "framer-motion";
import { Github, Globe } from "lucide-react";

import { Project } from "@/types/project";

interface ProjectCardProps extends Project {}

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const ProjectCard = ({ title, description, tags, liveLink, githubLink, wip }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group block border-b border-zinc-100 dark:border-zinc-900 py-10 last:border-0"
    >
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 transition-all group-hover:px-2">
        <div className="space-y-4 flex-1 cursor-pointer">
          <div className="flex items-center gap-3 ">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 italic transition-transform group-hover:scale-[1.01] origin-left">
              {title}
            </h3>
            {wip && (
              <span className="px-2 py-0.5 text-[9px] font-black uppercase tracking-[0.15em] bg-stone-100 dark:bg-stone-800 text-stone-400 dark:text-stone-500 rounded-sm">
                WIP
              </span>
            )}
          </div>
          <p className="text-stone-500 dark:text-stone-400 text-base md:text-lg max-w-2xl leading-relaxed">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag) => (
              <span 
                key={tag} 
                className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-stone-300/50 dark:bg-stone-900/50 border border-stone-200 dark:border-stone-800 text-stone-500 dark:text-stone-400 rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-5 text-zinc-500 dark:text-zinc-700">
          {githubLink && (
            <Tooltip>
              <TooltipTrigger asChild>
                <a 
                  href={githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                  <Github className="w-6 h-6 stroke-[1.5px]" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>View Source</p>
              </TooltipContent>
            </Tooltip>
          )}
          {liveLink && (
            <Tooltip>
              <TooltipTrigger asChild>
                <a 
                  href={liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                  <Globe className="w-6 h-6 stroke-[1.5px]" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>View Site</p>
              </TooltipContent>
            </Tooltip>
          )}
        </div>
      </div>
    </motion.div>
  );
};

import { Metadata } from "next";
import { Project } from "@/types/project";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Work",
  description: "A showcase of selected projects.",
};

const projects: Project[] = [
  {
    title: "SegzWorks",
    description: "A high-end design agency portfolio showcasing interactive visual storytelling, creativity, and seamless frontend animations.",
    tags: ["Animation", "Frontend", "Design"],
    liveLink: "http://segzworks.studio/",
  },
  {
    title: "Ad-Shield",
    description: "An effiecient Chrome extension built to eliminate intrusive ads and popups, ensuring a faster and cleaner browsing experience.",
    tags: ["chrome extension", "wxt-react", "declarativenetrequest-api"],
    liveLink: "https://ad-shield-web.vercel.app/",
    githubLink: "https://github.com/segundavid-dev/ad-shield",
  },
  {
    title: "Qrvest",
    description: "A AI-powered fullstack QR ordering system for restaurants and hotels.",
    tags: ["Typescript", "fullstack", "RAG"],
    liveLink: "https://app.qrvest.com/"
  },
  {
    title: "JSON Parser",
    description: "A lightweight, recursive-descent JSON parser implemented from scratch, focused on the fundamentals of lexical and syntactic analysis.",
    tags: ["algorithms", "syntatic analysis", "lexical analysis", "interpreters"],
    githubLink: "https://github.com/Segundavid-Dev/JSON-parser",
  },
  {
    title: "Scheduling Automation",
    description: "A robust backend engine designed to handle complex scheduling logic —inspired by tools like Calendly.",
    tags: ["backend", "typescript", "automation", "api design"],
    githubLink: "https://github.com/segundavid-dev/scheduling-automation-be",
    wip: true,
  },
];

export default function WorkPage() {
  return (
    <main className="min-h-screen px-6 py-32 md:px-12 md:py-48 max-w-4xl mx-auto">
      <section className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 italic">
          Selected Work
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
          A collection of systems, tools, and experiments I've built while exploring the intersection of design and engineering.
        </p>
      </section>

      <div className="flex flex-col">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </main>
  );
}

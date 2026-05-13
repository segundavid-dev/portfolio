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
    description:
      "A high-end design agency portfolio showcasing interactive visual storytelling, creativity, and seamless frontend animations.",
    tags: ["Animation", "Frontend", "Design"],
    liveLink: "http://segzworks.studio/",
  },
  {
    title: "Valentext",
    description:
      "A playful Valentine note creator that lets users craft, share, and revisit personalized messages with a clean, interactive UI.",
    tags: ["React", "TailwindCSS", "MongoDB", "ExpressJS", "Typescript"],
    liveLink: "https://valentext.pxxl.click/",
    githubLink: "https://github.com/segundavid-dev/valentine-frontend",
  },
  {
    title: "Ad-Shield",
    description:
      "An efficient Chrome extension built to eliminate intrusive ads and popups, ensuring a faster and cleaner browsing experience.",
    tags: ["Chrome Extension", "WXT React", "DeclarativeNetRequest API"],
    liveLink: "https://ad-shield-web.vercel.app/",
    githubLink: "https://github.com/segundavid-dev/ad-shield",
  },
  {
    title: "Qrvest",
    description:
      "An AI-powered fullstack QR ordering system for restaurants and hotels.",
    tags: ["Typescript", "Fullstack", "RAG"],
    liveLink: "https://app.qrvest.com/",
  },
  {
    title: "JSON Parser",
    description:
      "A lightweight, recursive-descent JSON parser implemented from scratch, focused on the fundamentals of lexical and syntactic analysis.",
    tags: ["Algorithms", "Syntactic Analysis", "Lexical Analysis"],
    githubLink: "https://github.com/Segundavid-Dev/JSON-parser",
  },
  {
    title: "Scheduling Automation",
    description:
      "A robust backend engine designed to handle complex scheduling logic — inspired by tools like Calendly.",
    tags: ["Backend", "Typescript", "Automation", "API Design"],
    githubLink: "https://github.com/segundavid-dev/scheduling-automation-be",
    wip: true,
  },
];

export default function WorkPage() {
  return (
    <div className="px-6 py-32 md:px-12 md:py-48 max-w-2xl mx-auto">
      <section className="mb-16">
        <p className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-4">
          Selected Work
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-5 italic">
          Things I&apos;ve built
        </h1>
        <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed max-w-lg">
          A mix of systems, tools, and experiments — ranging from production
          products to side projects I built to learn something.
        </p>
      </section>

      <div className="flex flex-col">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} index={i + 1} {...project} />
        ))}
      </div>
    </div>
  );
}

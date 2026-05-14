import { Metadata } from "next";
import { Project } from "@/types/project";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Work",
  description: "A showcase of selected projects.",
};

const projects: Project[] = [
  /* {
    title: "SegzWorks",
    description:
      "A high-end design agency portfolio showcasing interactive visual storytelling, creativity, and seamless frontend animations.",
    tags: ["Animation", "Frontend", "Design"],
    liveLink: "http://segzworks.studio/",
  }, */
  {
    title: "Paza",
    description:
      "Fullstack creator-brand collaboration platform that connects people based on shared values and identity.",
    tags: ["Next.js", "TypeScript", "Supabase", "Resend", "Paystack"],
    liveLink: "https://paza.social",
    githubLink: "https://github.com/job-kiptoo-dev/paza-social-frontend",
  },
  {
    title: "Trading Daily",
    description:
      "Pre-market briefing system that scrapes market data, analyzes it with GPT-4o, and emails traders daily reports.",
    tags: ["TypeScript", "NodeJs", "Azure", "Playwright"],
    liveLink: "https://polite-pond-0a06a4e0f.1.azurestaticapps.net/",
    githubLink: "https://github.com/gshock/trading-news",
  },
  {
    title: "Qrvest",
    description:
      "QR-based ordering system for restaurants and hotels, powered by RAG.",
    tags: ["Typescript", "React", "Websockets", "RAG"],
    liveLink: "https://app.qrvest.com/",
  },
  {
    title: "Valentext",
    description:
      "Valentine note creator that lets users craft and share personalized messages.",
    tags: ["React", "TailwindCSS", "MongoDB", "ExpressJS", "Typescript"],
    liveLink: "https://valentext.pxxl.click/",
    githubLink: "https://github.com/segundavid-dev/valentine-frontend",
  },
  {
    title: "Ad-Shield",
    description:
      "Chrome extension that blocks intrusive ads and popups using the DeclarativeNetRequest API.",
    tags: ["Chrome Extension", "WXT React", "DeclarativeNetRequest API"],
    liveLink: "https://ad-shield-web.vercel.app/",
    githubLink: "https://github.com/segundavid-dev/ad-shield",
  },
  {
    title: "Skill Match",
    description:
      "Tinder for volunteering wrapped with Capacitor for native Android app distribution.",
    tags: ["React", "Prisma", "PostgreSQL", "TypeScript", "Capacitor"],
    liveLink: "https://skill-match-weld.vercel.app/",
    githubLink: "https://github.com/segundavid-dev/skill-match",
  },
  {
    title: "JSON Parser",
    description: "Recursive-descent JSON parser implemented from scratch.",
    tags: ["Algorithms", "Syntactic Analysis", "Lexical Analysis", "TypeScript"],
    githubLink: "https://github.com/Segundavid-Dev/JSON-parser",
  },
];

export default function WorkPage() {
  return (
    <div className="px-6 py-32 md:px-12 md:py-48 max-w-2xl mx-auto">
      <section className="mb-16">
        <p className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-4">
          Selected Work
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-5">
          Things I&apos;ve built
        </h1>
        <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed max-w-lg">
          A mix of systems, tools, and experiments ranging from production
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

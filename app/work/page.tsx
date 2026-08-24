import { Metadata } from "next";
import { Project } from "@/types/project";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectRow } from "@/components/ProjectRow";

export const metadata: Metadata = {
  title: "Work",
  description: "A showcase of selected projects.",
};

const productionProjects: Project[] = [
  {
    title: "Paza",
    description:
      "Fullstack creator-brand collaboration platform that connects people based on shared values and identity.",
    tags: ["Next.js", "TypeScript", "Supabase", "Resend", "Paystack"],
    liveLink: "https://paza.social",
    githubLink: "https://github.com/job-kiptoo-dev/paza-social-frontend",
  },
  {
    title: "Qrvest",
    description:
      "QR-based ordering system for restaurants and hotels, powered by RAG.",
    tags: ["Typescript", "React", "Websockets", "RAG"],
    liveLink: "https://app.qrvest.com/",
  },
];

const sideProjects: Project[] = [
  {
    title: "Recall",
    description:
      "The memory layer for dementia care, built on Cognee.",
    tags: ["React", "FastAPI", "Cognee"],
    liveLink: "https://recall-six-tau.vercel.app/",
    githubLink: "https://github.com/segundavid-dev/recall",
  },
  {
    title: "Trading Daily",
    description:
      "AI-written pre-market briefings, emailed to traders daily.",
    tags: ["TypeScript", "NodeJs"],
    liveLink: "https://polite-pond-0a06a4e0f.1.azurestaticapps.net/",
    githubLink: "https://github.com/gshock/trading-news",
  },
  {
    title: "Valentext",
    description:
      "Craft and share personalized valentine notes.",
    tags: ["React", "MongoDB"],
    liveLink: "https://valentext.pxxl.click/",
    githubLink: "https://github.com/segundavid-dev/valentine-frontend",
  },
  {
    title: "Ad-Shield",
    description:
      "Chrome extension that blocks intrusive ads and popups.",
    tags: ["Chrome Extension", "WXT React"],
    liveLink: "https://ad-shield-web.vercel.app/",
    githubLink: "https://github.com/segundavid-dev/ad-shield",
  },
  {
    title: "Skill Match",
    description:
      "Tinder-style matching for volunteering, shipped to Android.",
    tags: ["React", "Capacitor"],
    liveLink: "https://skill-match-weld.vercel.app/",
    githubLink: "https://github.com/segundavid-dev/skill-match",
  },
];

function SectionHead({ label, count }: { label: string; count: number }) {
  return (
    <div className="flex items-baseline justify-between border-b border-zinc-200 pb-3">
      <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400">
        {label}
      </h2>
      <span className="text-xs tabular-nums text-zinc-300">
        {String(count).padStart(2, "0")}
      </span>
    </div>
  );
}

export default function WorkPage() {
  return (
    <div className="px-6 py-32 md:px-12 md:py-48 max-w-4xl mx-auto">
      <section className="mb-16">
        <p className="text-xs uppercase tracking-widest text-zinc-400 mb-4">
          Selected Work
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-5">
          Things I&apos;ve built
        </h1>
        <p className="text-sm text-stone-500 leading-relaxed max-w-lg">
          A mix of systems, tools, and experiments ranging from production
          products to side projects I built to learn something.
        </p>
      </section>

      <section className="mb-20">
        <SectionHead
          label="In Production"
          count={productionProjects.length}
        />
        <div className="grid gap-5 pt-8 md:grid-cols-2">
          {productionProjects.map((project, i) => (
            <ProjectCard key={project.title} index={i + 1} {...project} />
          ))}
        </div>
      </section>

      <section>
        <SectionHead
          label="Built to Learn"
          count={sideProjects.length}
        />
        <div className="flex flex-col pt-4">
          {sideProjects.map((project, i) => (
            <ProjectRow
              key={project.title}
              index={productionProjects.length + i + 1}
              {...project}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

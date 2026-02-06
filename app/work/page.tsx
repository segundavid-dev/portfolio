import { ProjectCard } from "@/components/ProjectCard";

export default function WorkPage() {
  return (
    <main className="min-h-screen px-6 py-32 md:px-12 md:py-48 max-w-4xl mx-auto">
      <section className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 italic">
          Selected Work
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          A collection of systems and experiments I&apos;ve built.
        </p>
      </section>

      <div className="flex flex-col">
        <ProjectCard 
          title="Project Alpha" 
          description="A high-performance backend system built with Go and Redis." 
          link="https://github.com" 
        />
        <ProjectCard 
          title="Project Beta" 
          description="A distributed task queue for heavy lifting in real-time environments." 
          link="https://github.com" 
        />
        <ProjectCard 
          title="Portfolio v1" 
          description="This minimalist site, focused on storytelling and typography." 
          link="https://github.com" 
        />
      </div>
    </main>
  );
}

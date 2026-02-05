import { Navigation } from "@/components/Navigation";
import { NarrativeSection } from "@/components/NarrativeSection";
import { ProjectCard } from "@/components/ProjectCard";
import Highlight from "@/components/HighLight";

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-32 md:px-12 md:py-48 max-w-4xl mx-auto">
      {/* Nav */}
      <Navigation />
      
      {/* Hero / Name */}
      <section className="mb-24">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 italic">
          David Olasunknami Segun
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 font-medium">
          Software Engineer
        </p>
      </section>

      {/* Narrative Section (Inspired by sshxero) */}
      <NarrativeSection className="mb-32">
        <p className="narrative-text">
          Hi! I'm <Highlight>David</Highlight>, a curious individual who loves creating things. 
          Usually, that takes the form of software. I focus on building 
          <Highlight>scalable systems</Highlight> and high-performance backends.
        </p>
        <p className="narrative-text">
          I enjoy diving deep into <Highlight>distributed systems</Highlight>, database architecture, 
          and infrastructure optimization. My goal is to build things that feel robust and efficient.
        </p>
        <p className="narrative-text">
          Beyond the terminal, I have a deep appreciation for arts and I&apos;m constantly 
          exploring the intersection of <Highlight>creativity and logic</Highlight>.
        </p>
      </NarrativeSection>

      {/* Projects Section (Inspired by akinkunmi) */}
      <section className="mb-32">
        <h2 className="narrative-title mb-8 opacity-50 uppercase text-sm tracking-widest">
          Recent Craft
        </h2>
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
      </section>

      {/* Connect */}
      <section className="mb-12">
        <h2 className="narrative-title mb-8 opacity-50 uppercase text-sm tracking-widest">
          Connect
        </h2>
        <div className="flex gap-6">
          <a href="#" className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors underline underline-offset-4">GitHub</a>
          <a href="#" className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors underline underline-offset-4">Twitter</a>
          <a href="#" className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors underline underline-offset-4">Email</a>
        </div>
      </section>
    </main>
  );
}

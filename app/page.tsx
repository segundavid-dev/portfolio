import { NarrativeSection } from "@/components/NarrativeSection";
import Highlight from "@/components/HighLight";

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-32 md:px-12 md:py-48 max-w-4xl mx-auto">
      {/* Hero / Name */}
      <section className="mb-24">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 italic">
          David Segun
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 font-medium tracking-tight">
          Software Engineer
        </p>
      </section>

      {/* Narrative Section */}
      <NarrativeSection>
        <p className="narrative-text text-xl">
          Hii, I'm David, also known as DOS and I really enjoy building things, especially when they help me understand how systems work beneath the surface.
        </p>
        <p className="narrative-text">
          Most of my time is spent working on the <Highlight>Typescript/Javascript</Highlight> ecosystem. I like exploring problems from different angles and collaborating with people to work on cool projects.
        </p>
        <p className="narrative-text">
          I'm a member of the <Highlight>Cowrywise Frontend Engineering (skill based) </Highlight> team, where I collaborate, learn, and build alongside other engineers who care deeply about quality and growth. I also enjoy collaboration through <Highlight>open source</Highlight> and shared learning.
        </p>
        <p className="narrative-text">
          Lately, I've been digging deeper into <Highlight>backend systems</Highlight>: databases, cloud infrastructure, and the patterns that make systems scalable and reliable in the best way possible. I love connecting theory to practice, especially through books, articles and youtube videos.
        </p>
        <p className="narrative-text">
          When I'm not writing code, I'm probably enjoying a book or watching anime 😎.
        </p>
      </NarrativeSection>
    </main>
  );
}

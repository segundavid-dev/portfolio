import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About David Segun — software engineer based in Lagos, Nigeria.",
};

const A = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="underline underline-offset-2"
  >
    {children}
  </a>
);

export default function AboutPage() {
  return (
    <div className="px-6 md:px-12 max-w-2xl mx-auto py-32 md:py-40">
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 italic">
          About
        </h1>

        <div className="space-y-5">
          <p className="narrative-text">
            I&apos;m David Segun — a software engineer based in Lagos, Nigeria,
            also known as DOS. I spend a lot of my time thinking about products:
            how they&apos;re built and how they feel to use.
          </p>
          <p className="narrative-text">
            I care a lot about technology, but what I care about more is the
            solution it provides. I like working on things early and the
            decisions you make actually shape the product.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <p className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-6">
          Currently
        </p>

        <div className="space-y-5">
          <p className="narrative-text">
            I work closely with <A href="https://usehazeapp.com/home">Haze</A>,
            a startup building something genuinely interesting, a tool that lets
            you copy a Figma frame, paste it into Haze, and export a native
            desktop app. No code required. It directly closes the gap between
            design and shipping.
          </p>
          <p className="narrative-text">
            I&apos;m contracting at{" "}
            <A href="https://parsewave.ai/">Parsewave</A>, building benchmarks
            and evaluations for frontier AI models — working with terminal
            bench, GDPval, and multimodal evaluation.
          </p>
          <p className="narrative-text">
            I&apos;m also a part of{" "}
            <A href="https://fastcrest.com">Fastcrest</A>, an open source org
            where I stay involved in code, product, and community. We&apos;re
            shipping{" "}
            <A href="http://github.com/fastCrest/reflex-vla">reflex-vla</A>, a
            tool that takes trained VLA models and deploys them to edge GPUs
            with a single command, the kind of infrastructure that makes
            robotics development a lot less painful.
          </p>
          <p className="narrative-text">
            On the core team at <A href="https://paza.social">Paza</A>, where
            we&apos;re building the infrastructure for brand-creator
            collaborations. I&apos;ve been architecting AI agents for the
            platform and leading frontend engineering and design from the early
            product decisions.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <p className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-6">
          Background
        </p>

        <div className="space-y-5">
          <p className="narrative-text">
            I have a computer science background, which gave me the foundation
            to understand how software works at a deeper level.
          </p>
          <p className="narrative-text">
            I also run <A href="https://segzworks.studio">SegzWorks</A>, a
            design studio I started with a creative designer. It&apos;s been a
            space to collab on the intersection of engineering and design
          </p>
          <p className="narrative-text">
            I&apos;ve also contributed to{" "}
            <A href="https://4luminos.github.io/OlyntheOS-website/">
              OlyntheOS
            </A>
            , a privacy-first Linux distribution with local AI built in, focused
            on the user experience
          </p>
        </div>
      </section>
    </div>
  );
}

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
    className="narrative-link"
  >
    {children}
  </a>
);

export default function AboutPage() {
  return (
    <div className="px-6 md:px-12 max-w-2xl mx-auto py-32 md:py-40">
      <section className="mb-16 fade-up">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">
          About
        </h1>

        <div className="space-y-5">
          <p className="narrative-text">
            I&apos;m David Segun — a software engineer based in Lagos, Nigeria,
            also known as DOS. I spend my time turning ideas into products:
            how they&apos;re built, and how they feel to use.
          </p>
          <p className="narrative-text">
            Technology interests me less than the result it delivers. I like
            getting in early — where decisions still shape what ships.
          </p>
        </div>
      </section>

      <section className="mb-16 fade-up fade-up-delay">
        <p className="text-xs uppercase tracking-widest text-zinc-400 mb-6">
          Currently
        </p>

        <div className="space-y-5">
          <p className="narrative-text">
            I contract at <A href="https://parsewave.ai/">Parsewave</A>,
            building benchmarks and evaluations for frontier AI models —
            terminal-bench, GDPval, and multimodal evaluation. The outcome:
            teams get a clear answer to what their models can actually do
            before they ship.
          </p>
          <p className="narrative-text">
            I also run <A href="https://segzworks.studio">SegzWorks</A>, a
            design studio started with a creative designer. It&apos;s where
            engineering meets design — taking rough ideas and shipping
            interfaces that feel right.
          </p>
        </div>
      </section>

      <section className="mb-16 fade-up fade-up-delay-2">
        <p className="text-xs uppercase tracking-widest text-zinc-400 mb-6">
          Background
        </p>

        <div className="space-y-5">
          <p className="narrative-text">
            A computer science background gave me the foundation to understand
            how software works beneath the surface — and it shows up in
            everything I build.
          </p>
        </div>
      </section>
    </div>
  );
}

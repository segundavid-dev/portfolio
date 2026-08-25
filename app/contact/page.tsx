import { Metadata } from "next";
import Link from "next/link";
import { ContactLink } from "@/types/contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch.",
};

const contactLinks: ContactLink[] = [
  { label: "Email", href: "mailto:segdavid03@gmail.com" },
  { label: "GitHub", href: "https://github.com/segundavid-dev", external: true },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/david-segun-ab712029a/",
    external: true,
  },
  { label: "Twitter", href: "https://twitter.com/david__segun", external: true },
];

export default function ContactPage() {
  return (
    <div className="px-6 py-32 md:px-12 md:py-48 max-w-4xl mx-auto">
      <section className="mb-12 fade-up">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
          Get in Touch
        </h1>

        <div className="flex items-center gap-2.5 mb-5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-xs uppercase tracking-widest text-zinc-500">
            Open to new work
          </span>
        </div>

        <p className="text-lg text-zinc-600">
          Got something that needs building? Email is fastest — I read
          everything and reply within 24 hours.
        </p>
      </section>

      <div className="flex flex-col gap-6 fade-up fade-up-delay">
        {contactLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="group w-fit text-xl md:text-2xl font-medium text-zinc-900 transition-all duration-300 hover:translate-x-1.5"
          >
            <span className="border-b border-zinc-300 pb-1 transition-colors duration-300 group-hover:border-zinc-900">
              {link.label}
            </span>
            <span className="inline-block ml-2 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-zinc-400">
              &rarr;
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

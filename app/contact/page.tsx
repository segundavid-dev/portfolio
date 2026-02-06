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
  { label: "Twitter", href: "https://twitter.com/david__segun", external: true },
];

export default function ContactPage() {
  return (
    <div className="px-6 py-32 md:px-12 md:py-48 max-w-4xl mx-auto">
      <section className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 italic">
          Get in Touch
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          I'm always open to discussing new projects or interesting opportunities.
        </p>
      </section>

      <div className="flex flex-col gap-6">
        {contactLinks.map((link) => (
          <Link 
            key={link.label}
            href={link.href} 
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="text-xl md:text-2xl font-medium text-zinc-900 dark:text-zinc-100 underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-8 transition-colors hover:text-zinc-500 w-fit"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

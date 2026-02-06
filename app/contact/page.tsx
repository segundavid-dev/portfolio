import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 py-32 md:px-12 md:py-48 max-w-4xl mx-auto">
      <section className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 italic">
          Get in Touch
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          I'm always open to discussing new projects or interesting opportunities.
        </p>
      </section>

      <div className="flex flex-col gap-6">
        <Link 
          href="mailto:segdavid03@gmail.com" 
          className="text-xl md:text-2xl font-medium text-zinc-900 dark:text-zinc-100 underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-8 transition-colors hover:text-zinc-500"
        >
          Email
        </Link>
        <Link 
          href="https://github.com/segundavid-dev" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl md:text-2xl font-medium text-zinc-900 dark:text-zinc-100 underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-8 transition-colors hover:text-zinc-500"
        >
          GitHub
        </Link>
        <Link 
          href="https://twitter.com/david__segun" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl md:text-2xl font-medium text-zinc-900 dark:text-zinc-100 underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-8 transition-colors hover:text-zinc-500"
        >
          Twitter
        </Link>
      </div>
    </main>
  );
}

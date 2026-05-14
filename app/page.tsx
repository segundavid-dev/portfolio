import { NarrativeSection } from "@/components/NarrativeSection";
import { OrgLink } from "@/components/OrgLink";
import { MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen flex flex-col px-6 md:px-12 max-w-2xl mx-auto">
      <div className="flex-1 flex flex-col justify-center">
        <section className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-2">
            David Segun
          </h1>
          <p className="text-base text-zinc-900 dark:text-zinc-100">
            Software Engineer
          </p>
        </section>

        <NarrativeSection>
          <p className="narrative-text">
            Hii, I&apos;m David and I like building things.
          </p>
          <p className="narrative-text">
            Currently part of{" "}
            <OrgLink href="https://fastcrest.com">Fastcrest</OrgLink>, an open
            source org. We&apos;re shipping{" "}
            <a
              href="http://github.com/fastCrest/reflex-vla"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
            >
              reflex-vla
            </a>
            , a tool that lets you deploy trained VLA models to edge GPUs with a
            single command. I am also core team @{" "}
            <OrgLink href="https://paza.social">Paza</OrgLink>, a platform that
            makes brand-creator collaborations easier, from finding the right
            match to managing campaigns and payments.
          </p>
        </NarrativeSection>
      </div>

      <div className="pb-8 space-y-3">
        <p className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
          fun fact
        </p>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-sm text-zinc-900 dark:text-zinc-100">
            <MessageCircle className="w-4 h-4 shrink-0" />
            <span>
              love nerding out in Discord servers with founders, researches,
              senior devs and the open source community
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

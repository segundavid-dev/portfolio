"use client";

import type { ReactNode } from "react";
import { motion, MotionConfig } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function MaskReveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={{ y: "112%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.9, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

function Rise({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.p
      className={className}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {children}
    </motion.p>
  );
}

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative isolate min-h-svh">
        <section className="relative flex min-h-svh items-center overflow-hidden">
          <div className="mx-auto flex w-full max-w-3xl flex-col justify-center px-6 pt-28 pb-32 md:px-8">
          <Rise
            delay={0.05}
            className="mb-6 text-xs uppercase tracking-[0.25em] text-zinc-700"
          >
            Software Engineer &mdash; Lagos, Nigeria
          </Rise>

          <h1 className="mb-8 text-[clamp(2.75rem,9vw,6.75rem)] leading-[0.95] font-bold tracking-tighter whitespace-nowrap">
            <MaskReveal delay={0.18}>David Segun</MaskReveal>
          </h1>

          <Rise
            delay={0.42}
            className="narrative-text text-zinc-900"
          >
            I&apos;m a software engineer who enjoys building{" "}
            <span className="shimmer-text font-medium">user-facing</span>{" "}
            systems and engineering products.
          </Rise>
          <Rise
            delay={0.54}
            className="narrative-text mt-5 text-zinc-600"
          >
            I work across the stack, with most of my time spent on frontend systems
            and AI integration.
          </Rise>
          <Rise
            delay={0.66}
            className="narrative-text mt-5 text-zinc-600"
          >
            In my free time, I participate in hackathons, contribute to open
            source, and dive deep into things like system design.
          </Rise>
          </div>
        </section>

        <motion.span
          aria-hidden="true"
          className="absolute bottom-8 left-1/2 z-10 h-12 w-px origin-top bg-stone-400"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            scaleY: [0, 1, 1, 0],
          }}
          transition={{
            duration: 2.4,
            times: [0, 0.35, 0.7, 1],
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.6,
          }}
        />
      </div>
    </MotionConfig>
  );
}

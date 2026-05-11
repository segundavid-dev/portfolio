import React from "react";

interface NarrativeSectionProps {
  children: React.ReactNode;
  className?: string;
}

export const NarrativeSection = ({ children, className = "" }: NarrativeSectionProps) => {
  return (
    <section className={`text-lg leading-relaxed space-y-6 ${className}`}>
      {children}
    </section>
  );
};


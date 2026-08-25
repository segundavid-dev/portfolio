"use client";

import { useEffect, useState } from "react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString("en-GB", {
          timeZone: "Africa/Lagos",
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    update();
    const id = setInterval(update, 15000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="w-full py-12 px-6 md:px-12 border-t border-stone-100 mt-auto">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-stone-500 text-sm font-medium tracking-tight">
        <p>
          &copy; {currentYear} David Segun
        </p>
        <div className="flex gap-6 uppercase tracking-widest text-[10px]">
          <span className="tabular-nums">
            Lagos, Nigeria{time ? ` — ${time} WAT` : ""}
          </span>
          <span className="text-stone-300">|</span>
          <span>Software Engineer</span>
        </div>
      </div>
    </footer>
  );
};

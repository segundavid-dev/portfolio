"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

import { NavItem } from "@/types/nav";

const navItems: NavItem[] = [
  { name: "home", path: "/" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

export const Header = () => {
  const pathname = usePathname();
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-8 md:px-12 pointer-events-none">
      <Link href="/" className="group pointer-events-auto flex items-center gap-2">
        <Image 
          src="/icon.svg" 
          alt="DOS logo" 
          width={62} 
          height={62} 
          className="dark:invert"
        />
        <span className="text-xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-100 italic transition-transform group-hover:scale-105 inline-block">
          DOS
        </span>
      </Link>
      
      <div className="flex items-center gap-8 pointer-events-auto">
        <nav className="flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`text-sm font-medium tracking-tight uppercase transition-colors ${
                pathname === item.path
                  ? "text-zinc-900 dark:text-zinc-100 underline underline-offset-4"
                  : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="relative flex items-center justify-center w-8 h-8 rounded-full hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors cursor-pointer"
          aria-label="Toggle theme"
        >
          <AnimatePresence mode="wait" initial={false}>
            {mounted && (
              <motion.div
                key={isDark ? "dark" : "light"}
                initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                {isDark ? (
                  <Sun className="w-4 h-4 text-stone-400 hover:text-stone-100 transition-colors" />
                ) : (
                  <Moon className="w-4 h-4 text-stone-500 hover:text-stone-900 transition-colors" />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
    </header>
  );
};

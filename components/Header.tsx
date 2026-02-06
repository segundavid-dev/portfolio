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
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-6 py-8 md:px-12 pointer-events-none">
        <Link href="/" onClick={() => setIsOpen(false)} className="group pointer-events-auto flex items-center gap-2">
          <Image 
            src="/icon.svg" 
            alt="DOS logo" 
            width={48} 
            height={48} 
            className="dark:invert w-10 h-10 md:w-12 md:h-12"
          />
          <span className="text-xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-100 italic transition-transform group-hover:scale-105 inline-block">
            DOS
          </span>
        </Link>
        
        <div className="flex items-center gap-4 md:gap-8 pointer-events-auto">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 mr-4">
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

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors cursor-pointer"
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
                    <Sun className="w-5 h-5 text-stone-400 hover:text-stone-100 transition-colors" />
                  ) : (
                    <Moon className="w-5 h-5 text-stone-500 hover:text-stone-900 transition-colors" />
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          {/* Hamburger Menu Toggle (Mobile Only) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-xs font-black uppercase tracking-[0.2em] px-4 py-2 bg-stone-300 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:bg-stone-200 dark:hover:bg-stone-800 transition-all cursor-pointer z-[70]"
          >
            {isOpen ? "[CLOSE]" : "[MENU]"}
          </button>
        </div>
      </header>

      {/* Full-screen Menu Overlay (Mobile Only) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden fixed inset-0 z-[55] bg-stone-50/95 dark:bg-stone-950/95 backdrop-blur-md flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <Link
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-4xl font-black tracking-tighter uppercase transition-all hover:italic hover:scale-105 inline-block ${
                      pathname === item.path
                        ? "text-zinc-900 dark:text-zinc-100 italic underline underline-offset-8 decoration-4"
                        : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

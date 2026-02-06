"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "home", path: "/" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

export const Header = () => {
  const pathname = usePathname();

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
      
      <nav className="flex gap-8 pointer-events-auto">
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
    </header>
  );
};

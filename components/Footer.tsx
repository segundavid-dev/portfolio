"use client";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 px-6 md:px-12 border-t border-stone-100 dark:border-stone-900 mt-auto">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-stone-500 dark:text-stone-400 text-sm font-medium tracking-tight">
        <p>
          © {currentYear} David Segun. Built with ❤️
        </p>
        <div className="flex gap-6 uppercase tracking-widest text-[10px]">
          <span>Lagos, Nigeria</span>
          <span className="text-stone-300 dark:text-stone-800">|</span>
          <span>Software Engineer</span>
        </div>
      </div>
    </footer>
  );
};

export default function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-semibold text-black dark:text-white underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 decoration-2">
      {children}
    </span>
  );
}

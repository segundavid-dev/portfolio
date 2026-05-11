interface OrgLinkProps {
  href: string;
  children: React.ReactNode;
}

export function OrgLink({ href, children }: OrgLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-2 py-0.5 text-xs font-medium border border-zinc-900 dark:border-zinc-100 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
    >
      {children}
    </a>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`group rounded-lg border border-line bg-panel/75 shadow-glow backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-accent/70 hover:bg-panel ${className}`}
    >
      {children}
    </div>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-300 transition duration-300 group-hover:border-accent/40 group-hover:text-white">
      {children}
    </span>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "secondary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
}) {
  const styles = {
    primary:
      "bg-accent text-ink hover:bg-skysoft hover:shadow-[0_12px_35px_rgba(79,209,197,.22)]",
    secondary: "border border-line text-white hover:border-accent hover:text-accent",
    ghost: "border border-white/10 bg-white/[0.03] text-slate-300 hover:border-accent/60 hover:text-white",
  };

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 ${styles[variant]}`}
    >
      {children}
    </a>
  );
}

export function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
    >
      {children}
      <span aria-hidden="true">-&gt;</span>
    </a>
  );
}

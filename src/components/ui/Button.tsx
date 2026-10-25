import type { ReactNode } from "react";

type Props = {
  href: string;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
  children: ReactNode;
};

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 text-sm font-medium transition-colors duration-200";
const variants = {
  primary: "bg-accent text-bg hover:bg-white",
  secondary: "border border-line bg-surface text-ink hover:border-accent/60 hover:bg-surface-2",
};

export default function Button({ href, variant = "primary", external, className = "", children }: Props) {
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

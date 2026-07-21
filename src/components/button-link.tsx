import Link from "next/link";
import type { LucideIcon } from "lucide-react";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  icon?: LucideIcon;
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "bg-ivory text-carbon shadow-gold hover:bg-gold hover:shadow-[0_18px_55px_rgba(217,180,95,0.28)] focus-visible:outline-gold",
  secondary:
    "border border-white/15 bg-black/70 text-ivory hover:border-gold/70 hover:bg-white/10 hover:shadow-[0_18px_55px_rgba(0,0,0,0.24)] focus-visible:outline-gold",
  ghost:
    "border border-white/10 bg-transparent text-stonewarm hover:border-white/20 hover:bg-white/5 hover:text-ivory focus-visible:outline-ivory",
};

export function ButtonLink({
  href,
  children,
  icon: Icon,
  variant = "primary",
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold uppercase tracking-normal transition duration-300 ease-out hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${variants[variant]}`}
    >
      {Icon ? <Icon aria-hidden className="h-4 w-4" /> : null}
      <span>{children}</span>
    </Link>
  );
}

import Link from "next/link";
import { site } from "@/app/lib/site";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2";

const variants: Record<Variant, string> = {
  // Orange = the one action we want. Used sparingly across the page.
  primary: "bg-brand text-white hover:bg-brand-dark",
  secondary:
    "bg-white text-slate-900 ring-1 ring-inset ring-slate-300 hover:bg-slate-50",
  ghost: "text-slate-700 hover:text-brand",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type CtaProps = {
  children: React.ReactNode;
  /** Defaults to the Cal.com booking link. */
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
};

/** Shared call-to-action link. External links open in a new, safe tab. */
export function Cta({
  children,
  href = site.bookingUrl,
  variant = "primary",
  size = "md",
  className = "",
}: CtaProps) {
  const isExternal = href.startsWith("http");

  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {children}
    </Link>
  );
}

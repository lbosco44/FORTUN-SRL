import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const goldButtonClass =
  "group inline-flex items-center justify-center gap-2 rounded-[5px] bg-gold px-6 py-3.5 font-display text-[0.875rem] font-semibold uppercase tracking-[0.04em] text-abyss transition-[transform,background-color] duration-150 ease-out hover:bg-[#d8ab5c] active:scale-[0.98]";

export function GoldLink({
  href,
  children,
  className,
  arrow = true,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  arrow?: boolean;
}) {
  return (
    <Link href={href} className={cn(goldButtonClass, className)}>
      {children}
      {arrow && (
        <ArrowRight className="size-4 transition-transform duration-150 ease-out group-hover:translate-x-0.5" />
      )}
    </Link>
  );
}

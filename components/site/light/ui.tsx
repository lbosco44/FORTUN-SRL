import { cn } from "@/lib/utils";

/* Bottoni a pillola — stile editoriale Ally (scuro pieno + outline) */
export const inkButtonClass =
  "group inline-flex items-center justify-center gap-2.5 rounded-full bg-ink px-7 py-3.5 font-grotesk text-[0.9rem] font-semibold text-paper transition-[transform,background-color] duration-200 ease-out hover:bg-ink/88 active:scale-[0.98]";

export const outlineLightClass =
  "group inline-flex items-center justify-center gap-2.5 rounded-full border border-ink/25 bg-transparent px-7 py-3.5 font-grotesk text-[0.9rem] font-semibold text-ink transition-colors duration-200 hover:border-ink hover:bg-ink hover:text-paper";

/* Pallino oro che precede l'etichetta dei bottoni (dettaglio Ally) */
export function Dot({ className }: { className?: string }) {
  return <span className={cn("size-1.5 shrink-0 rounded-full bg-gold", className)} aria-hidden />;
}

/* Kicker / eyebrow su sfondo chiaro */
export function Kicker({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("readout flex items-center gap-2.5 text-gold-deep", className)}>
      <Dot />
      {children}
    </p>
  );
}

/* Titolo display in stile Ally: tutto in General Sans bold strettissimo.
   Accento = parola/e evidenziate (colore oro, oppure sottolineatura oro). */
export function Display({
  lead,
  accent,
  as: Tag = "h2",
  className,
  accentClassName,
  underline = false,
}: {
  lead: string;
  accent: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  accentClassName?: string;
  underline?: boolean;
}) {
  return (
    <Tag className={cn("display-tight text-ink text-balance", className)}>
      {lead}{" "}
      <span className={cn(underline ? "mark-gold" : "text-gold-deep", accentClassName)}>
        {accent}
      </span>
    </Tag>
  );
}

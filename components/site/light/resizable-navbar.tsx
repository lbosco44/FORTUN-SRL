"use client";

/* Resizable navbar — primitivi Aceternity (ui.aceternity.com/components/resizable-navbar)
   ricostruiti e adattati al tema /light Fortun: token paper/ink/gold, font General Sans,
   icone lucide (no @tabler), nessuna variante dark. Il motion (spring resize on-scroll)
   è quello originale, riscritto pulito con motion/react. */

import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import React, { useRef, useState } from "react";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}
interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}
interface NavItemsProps {
  items: { name: string; link: string }[];
  className?: string;
  onItemClick?: () => void;
}
interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}
interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}
interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

const softShadow =
  "0 0 24px rgba(21,25,31,0.06), 0 1px 1px rgba(0,0,0,0.05), 0 0 0 1px rgba(21,25,31,0.05), 0 0 4px rgba(21,25,31,0.08), 0 16px 68px rgba(21,25,31,0.05), 0 1px 0 rgba(255,255,255,0.6) inset";

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => setVisible(latest > 100));

  return (
    <motion.div ref={ref} className={cn("sticky inset-x-0 top-5 z-50 w-full", className)}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<{ visible?: boolean }>, { visible })
          : child
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(12px)" : "blur(0px)",
        boxShadow: visible ? softShadow : "none",
        width: visible ? "86%" : "100%",
        y: visible ? 12 : 0,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 50 }}
      style={{ minWidth: "1060px" }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full border border-transparent bg-transparent px-3 py-2 lg:flex",
        visible && "border-ink/10 bg-paper/80",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center gap-1 font-grotesk text-[0.82rem] font-medium text-ink-soft lg:flex",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-4 py-2 transition-colors hover:text-ink"
          key={`link-${idx}`}
          href={item.link}
        >
          {hovered === idx && (
            <motion.span
              layoutId="nav-hover"
              className="absolute inset-0 -z-10 rounded-full bg-ink/[0.06]"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          <span className="relative">{item.name}</span>
        </a>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(12px)" : "blur(0px)",
        boxShadow: visible ? softShadow : "none",
        width: visible ? "92%" : "100%",
        paddingLeft: visible ? "12px" : "0px",
        paddingRight: visible ? "12px" : "0px",
        borderRadius: visible ? "1.5rem" : "2rem",
        y: visible ? 12 : 0,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 50 }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-1.5rem)] flex-col items-center justify-between border border-transparent bg-transparent px-0 py-2 lg:hidden",
        visible && "border-ink/10 bg-paper/85",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({ children, className }: MobileNavHeaderProps) => (
  <div className={cn("flex w-full flex-row items-center justify-between px-2", className)}>{children}</div>
);

export const MobileNavMenu = ({ children, className, isOpen }: MobileNavMenuProps) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-2 rounded-2xl border border-ink/10 bg-paper px-5 py-6 shadow-[0_16px_68px_rgba(21,25,31,0.12)]",
          className
        )}
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);

export const MobileNavToggle = ({
  isOpen,
  onClick,
  label = { open: "Apri menu", close: "Chiudi menu" },
}: {
  isOpen: boolean;
  onClick: () => void;
  label?: { open: string; close: string };
}) => (
  <button
    type="button"
    onClick={onClick}
    className="text-ink"
    aria-expanded={isOpen}
    aria-label={isOpen ? label.close : label.open}
  >
    {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
  </button>
);

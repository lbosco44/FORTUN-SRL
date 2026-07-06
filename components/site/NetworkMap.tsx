"use client";

import { motion, useReducedMotion } from "motion/react";

const VB_W = 1000;
const VB_H = 478;

const GOLD = "#e5c27d";
const WHITE = "#f5f2ea";

type Kind = "hub" | "sede";
type Place = "above" | "below" | "left" | "right";
type Node = { id: string; name: string; x: number; y: number; kind: Kind; place: Place };

// Coordinate su mappa equirettangolare (crop lng[-130,75] lat[80,-18]):
//   x = (lng + 130) / 205 * 1000   ·   y = (80 - lat) / 98 * 478
// HUB = dove si svolge il trading (icona derrick, oro) · SEDI = dove siamo presenti (icona casa, bianco).
const NODES: Node[] = [
  // HUB operativi
  { id: "houston", name: "HOUSTON", x: 169, y: 245, kind: "hub", place: "below" },
  { id: "rotterdam", name: "ROTTERDAM", x: 656, y: 137, kind: "hub", place: "above" },
  { id: "durazzo", name: "DURAZZO", x: 729, y: 189, kind: "hub", place: "above" },
  { id: "mersin", name: "MERSIN", x: 803, y: 211, kind: "hub", place: "right" },
  { id: "fujairah", name: "FUJAIRAH", x: 909, y: 268, kind: "hub", place: "left" },
  // SEDI
  { id: "roma", name: "ROMA", x: 695, y: 186, kind: "sede", place: "left" },
  { id: "siracusa", name: "SIRACUSA", x: 712, y: 213, kind: "sede", place: "below" },
  { id: "tirana", name: "TIRANA", x: 745, y: 180, kind: "sede", place: "right" },
  { id: "dubai", name: "DUBAI", x: 889, y: 283, kind: "sede", place: "below" },
];
const byId: Record<string, Node> = Object.fromEntries(NODES.map((c) => [c.id, c]));

// Rotte commerciali: collegano gli HUB tra loro.
const EDGES: [string, string][] = [
  ["houston", "rotterdam"],
  ["rotterdam", "durazzo"],
  ["durazzo", "mersin"],
  ["mersin", "fujairah"],
  ["rotterdam", "fujairah"],
];

function arc(a: Node, b: Node): string {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2;
  const dist = Math.hypot(b.x - a.x, b.y - a.y);
  const cy = my - dist * 0.24;
  return `M ${a.x} ${a.y} Q ${mx} ${cy.toFixed(1)} ${b.x} ${b.y}`;
}

// Posizione/ancoraggio del nome rispetto al punto, in base a place e tipo.
function label(n: Node) {
  const hub = n.kind === "hub";
  const v = hub ? 13 : 11; // offset verticale
  const h = hub ? 12 : 10; // offset orizzontale
  if (n.place === "above") return { x: n.x, y: n.y - v, anchor: "middle" as const };
  if (n.place === "below") return { x: n.x, y: n.y + v + 4, anchor: "middle" as const };
  if (n.place === "right") return { x: n.x + h, y: n.y + 3, anchor: "start" as const };
  return { x: n.x - h, y: n.y + 3, anchor: "end" as const };
}

export function NetworkMap({ className, ariaLabel }: { className?: string; ariaLabel?: string }) {
  const reduce = useReducedMotion();
  const hubs = NODES.filter((n) => n.kind === "hub");
  const sedi = NODES.filter((n) => n.kind === "sede");

  return (
    <svg
      viewBox={`0 0 ${VB_W} ${VB_H}`}
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role="img"
      aria-label={ariaLabel ?? "Rete operativa Fortun: hub di Rotterdam, Houston, Fujairah, Durazzo e Mersin; sedi a Roma, Siracusa, Dubai e Tirana, sulla mappa mondiale."}
    >
      <defs>
        <radialGradient id="fortun-hub-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e5c27d" stopOpacity="0.85" />
          <stop offset="45%" stopColor="#c99a4e" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#c99a4e" stopOpacity="0" />
        </radialGradient>
        {/* Tinge l'icona (silhouette nera con alpha) del colore oro */}
        <filter id="fortun-tint-gold" x="0" y="0" width="100%" height="100%">
          <feFlood floodColor={GOLD} result="c" />
          <feComposite in="c" in2="SourceGraphic" operator="in" />
        </filter>
      </defs>

      <image href="/bg/world-night.webp" x="0" y="0" width={VB_W} height={VB_H} preserveAspectRatio="xMidYMid slice" />

      {/* Rotte tra gli hub */}
      {EDGES.map(([from, to], i) => (
        <motion.path
          key={i}
          d={arc(byId[from], byId[to])}
          fill="none"
          stroke="#c99a4e"
          strokeWidth={1.2}
          strokeLinecap="round"
          strokeOpacity={0.8}
          initial={reduce ? false : { pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -15% 0px" }}
          transition={{ duration: 1.2, delay: 0.2 + i * 0.25, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}

      {/* SEDI — icona casa bianca + nome bianco (più piccolo), senza linee */}
      {sedi.map((c) => {
        const l = label(c);
        return (
          <g key={c.id}>
            <g transform={`translate(${c.x} ${c.y})`}>
              <path d="M0 -6.5 L6 -1 L6 6 L-6 6 L-6 -1 Z" fill={WHITE} />
              <rect x="-1.7" y="1.4" width="3.4" height="4.6" fill="#0a0e14" fillOpacity="0.85" />
            </g>
            <text
              x={l.x}
              y={l.y}
              textAnchor={l.anchor}
              fontFamily="var(--font-sans), sans-serif"
              fontSize={7.5}
              fontWeight={500}
              letterSpacing={0.6}
              fill={WHITE}
              stroke="#0a0e14"
              strokeWidth={2.4}
              strokeLinejoin="round"
              paintOrder="stroke"
            >
              {c.name}
            </text>
          </g>
        );
      })}

      {/* HUB — alone pulsante + icona derrick oro + nome oro */}
      {hubs.map((c, i) => {
        const l = label(c);
        return (
          <g key={c.id}>
            <circle cx={c.x} cy={c.y} r={17} fill="url(#fortun-hub-glow)">
              {!reduce && (
                <animate attributeName="opacity" values="0.4;1;0.4" dur="3s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
              )}
            </circle>
            {/* Icona pompa di petrolio (pump jack), tinta in oro */}
            <image
              href="/bg/light/map/pump.webp"
              x={c.x - 9}
              y={c.y - 8.6}
              width={18}
              height={17.25}
              filter="url(#fortun-tint-gold)"
              preserveAspectRatio="xMidYMid meet"
            />
            <text
              x={l.x}
              y={l.y}
              textAnchor={l.anchor}
              fontFamily="var(--font-sans), sans-serif"
              fontSize={9.5}
              fontWeight={600}
              letterSpacing={1}
              fill={GOLD}
              stroke="#0a0e14"
              strokeWidth={2.8}
              strokeLinejoin="round"
              paintOrder="stroke"
            >
              {c.name}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

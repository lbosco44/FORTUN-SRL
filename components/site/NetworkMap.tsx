"use client";

import { motion, useReducedMotion } from "motion/react";

const VB_W = 1000;
const VB_H = 478;

type Place = "above" | "below" | "left" | "right";
type City = { id: string; name: string; x: number; y: number; place: Place };

// Coordinate esatte (mappa equirettangolare, crop lng[-130,75] lat[80,-18])
const CITIES: City[] = [
  { id: "houston", name: "HOUSTON", x: 169, y: 245, place: "below" },
  { id: "rotterdam", name: "ROTTERDAM", x: 656, y: 137, place: "above" },
  { id: "roma", name: "ROMA", x: 695, y: 186, place: "right" },
  { id: "fujairah", name: "FUJAIRAH", x: 909, y: 268, place: "left" },
];
const byId: Record<string, City> = Object.fromEntries(CITIES.map((c) => [c.id, c]));
const EDGES: [string, string][] = [
  ["houston", "rotterdam"],
  ["rotterdam", "roma"],
  ["roma", "fujairah"],
  ["rotterdam", "fujairah"],
];

function arc(a: City, b: City): string {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2;
  const dist = Math.hypot(b.x - a.x, b.y - a.y);
  const cy = my - dist * 0.24;
  return `M ${a.x} ${a.y} Q ${mx} ${cy.toFixed(1)} ${b.x} ${b.y}`;
}

function chip(c: City) {
  const w = c.name.length * 7.4 + 22;
  const h = 24;
  const gap = 13;
  let cx = c.x;
  let cy = c.y;
  if (c.place === "below") cy = c.y + gap + h / 2;
  else if (c.place === "above") cy = c.y - gap - h / 2;
  else if (c.place === "right") cx = c.x + gap + w / 2;
  else cx = c.x - gap - w / 2;
  return { w, h, cx, cy };
}

export function NetworkMap({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <svg
      viewBox={`0 0 ${VB_W} ${VB_H}`}
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role="img"
      aria-label="Rete operativa: Houston, Rotterdam, Roma e Fujairah collegate sulla mappa mondiale."
    >
      <defs>
        <radialGradient id="fortun-hub-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e5c27d" stopOpacity="0.85" />
          <stop offset="45%" stopColor="#c99a4e" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#c99a4e" stopOpacity="0" />
        </radialGradient>
      </defs>

      <image href="/bg/world-night.webp" x="0" y="0" width={VB_W} height={VB_H} preserveAspectRatio="xMidYMid slice" />

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

      {CITIES.map((c, i) => {
        const { w, h, cx, cy } = chip(c);
        return (
          <g key={c.id}>
            <circle cx={c.x} cy={c.y} r={18} fill="url(#fortun-hub-glow)">
              {!reduce && (
                <animate attributeName="opacity" values="0.45;1;0.45" dur="3s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
              )}
            </circle>
            <circle cx={c.x} cy={c.y} r={6.5} fill="none" stroke="#c99a4e" strokeWidth={1} strokeOpacity={0.7} />
            <circle cx={c.x} cy={c.y} r={3.2} fill="#e5c27d" />

            {/* label elegante con sfondo */}
            <rect
              x={cx - w / 2}
              y={cy - h / 2}
              width={w}
              height={h}
              rx={5}
              fill="#080c14"
              fillOpacity={0.72}
              stroke="#c99a4e"
              strokeOpacity={0.32}
              strokeWidth={0.75}
            />
            <text
              x={cx}
              y={cy + 3.6}
              textAnchor="middle"
              fontFamily="var(--font-sans), sans-serif"
              fontSize={10.5}
              fontWeight={600}
              letterSpacing={1.4}
              fill="#f5f2ea"
            >
              {c.name}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

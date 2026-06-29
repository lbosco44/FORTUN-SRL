/* Illustrazioni line-art brand (palette fissa dal logo, non theme-adaptive). */

const HUB_POINTS = [
  { x: 250, y: 300, city: "Houston", area: "US GULF", coord: "29°N 95°W" },
  { x: 620, y: 266, city: "Rotterdam", area: "ARA", coord: "51°N 4°E" },
  { x: 952, y: 236, city: "Fujairah", area: "MIDDLE EAST", coord: "25°N 56°E" },
];

const GOLD = "#c99a4e";
const CHAMP = "#e5c27d";
const HAZE = "#93a1b3";
const CREAM = "#f5f2ea";

export function HubMap({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 440"
      className={className}
      role="img"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* griglia coordinate */}
      <g stroke={GOLD} strokeWidth="1" opacity="0.08">
        {[100, 250, 400, 550, 700, 850, 1000, 1150].map((x) => (
          <line key={`v${x}`} x1={x} y1="20" x2={x} y2="420" />
        ))}
        {[90, 180, 270, 360].map((y) => (
          <line key={`h${y}`} x1="20" y1={y} x2="1180" y2={y} />
        ))}
      </g>

      {/* linea di costa / rotta stilizzata */}
      <path
        d="M 0 322 C 180 270, 330 372, 540 300 C 720 240, 860 280, 1010 232 C 1100 205, 1160 220, 1200 214"
        fill="none"
        stroke={GOLD}
        strokeWidth="1.5"
        opacity="0.4"
      />
      <path
        d="M 0 352 C 200 312, 380 392, 600 340 C 820 290, 980 320, 1200 270"
        fill="none"
        stroke={GOLD}
        strokeWidth="1"
        opacity="0.18"
      />

      {/* marker hub */}
      {HUB_POINTS.map((h) => (
        <g key={h.city}>
          <line x1={h.x} y1={h.y - 14} x2={h.x} y2={h.y - 64} stroke={GOLD} strokeWidth="1" opacity="0.45" />
          <text x={h.x} y={h.y - 74} textAnchor="middle" fill={CREAM} fontFamily="var(--font-display), sans-serif" fontSize="30" fontWeight="700" letterSpacing="-0.5">
            {h.city}
          </text>
          <text x={h.x} y={h.y - 54} textAnchor="middle" fill={GOLD} fontFamily="var(--font-sans), sans-serif" fontSize="12" letterSpacing="3" fontWeight="600">
            {h.area}
          </text>
          <circle cx={h.x} cy={h.y} r="13" fill="none" stroke={GOLD} strokeWidth="1.25" />
          <circle cx={h.x} cy={h.y} r="4" fill={CHAMP} />
          <line x1={h.x - 22} y1={h.y} x2={h.x - 15} y2={h.y} stroke={GOLD} strokeWidth="1" />
          <line x1={h.x + 15} y1={h.y} x2={h.x + 22} y2={h.y} stroke={GOLD} strokeWidth="1" />
          <text x={h.x} y={h.y + 30} textAnchor="middle" fill={HAZE} fontFamily="var(--font-sans), sans-serif" fontSize="11" letterSpacing="1.5">
            {h.coord}
          </text>
        </g>
      ))}
    </svg>
  );
}

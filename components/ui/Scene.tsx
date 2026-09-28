/**
 * Custom vector scenes of learners, prefects, teachers and parents.
 * These stand in until real, consented photographs are added (see components/ui/Photo.tsx).
 * Figures are drawn as faceless busts so they read as people without pretending to be real individuals.
 */

const SKIN = ["#4a2c1e", "#6b3f2a", "#8a5a3b", "#a26f4a"] as const;
const HAIR = "#15100d";
const WHITE = "#e9f2ef";
const LIME = "#8dba0b";
const TEAL_LIGHT = "#2b8a92";
const INK = "#033b44";

type HairStyle = "crop" | "afro" | "wrap" | "braids" | "bun" | "bald";
type Role = "learner" | "prefect" | "teacher" | "parent" | "child" | "poet";

type Figure = {
  x: number;
  y: number;
  s?: number;
  skin: 0 | 1 | 2 | 3;
  hair: HairStyle;
  role: Role;
  wrapColor?: string;
  top?: string;
};

function Hair({ style, wrapColor }: { style: HairStyle; wrapColor: string }) {
  switch (style) {
    case "afro":
      return <circle cx="0" cy="-126" r="46" fill={HAIR} />;
    case "bun":
      return <circle cx="0" cy="-160" r="15" fill={HAIR} />;
    case "wrap":
      return (
        <g>
          <path d="M-37 -118 C-40 -166 40 -166 37 -118 C20 -132 -20 -132 -37 -118Z" fill={wrapColor} />
          <circle cx="4" cy="-156" r="14" fill={wrapColor} />
        </g>
      );
    default:
      return null;
  }
}

function HairFront({ style }: { style: HairStyle }) {
  if (style === "crop" || style === "braids" || style === "bun") {
    return <path d="M-36 -112 C-44 -160 44 -160 36 -112 C30 -128 12 -138 0 -138 C-12 -138 -30 -128 -36 -112Z" fill={HAIR} />;
  }
  if (style === "afro") {
    return <path d="M-35 -116 C-36 -150 36 -150 35 -116 C26 -132 10 -138 0 -138 C-10 -138 -26 -132 -35 -116Z" fill={HAIR} />;
  }
  return null;
}

function Person({ x, y, s = 1, skin, hair, role, wrapColor = LIME, top }: Figure) {
  const tone = SKIN[skin];
  const uniform = role === "learner" || role === "child";
  const bodyColor =
    top ?? (role === "prefect" ? INK : uniform ? WHITE : role === "teacher" ? TEAL_LIGHT : role === "poet" ? LIME : LIME);
  const scale = (role === "child" ? s * 0.62 : s) * 1.28;
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      {hair === "braids" && (
        <g stroke={HAIR} strokeWidth="9" strokeLinecap="round" fill="none">
          <path d="M-32 -124 C-44 -100 -46 -84 -44 -66" />
          <path d="M32 -124 C44 -100 46 -84 44 -66" />
          <path d="M-22 -136 C-34 -110 -34 -92 -32 -74" />
          <path d="M22 -136 C34 -110 34 -92 32 -74" />
        </g>
      )}
      <Hair style={hair} wrapColor={wrapColor} />
      <rect x="-13" y="-90" width="26" height="24" rx="8" fill={tone} />
      <rect x="-13" y="-90" width="26" height="24" rx="8" fill="#000" opacity="0.14" />
      <path
        d="M-74 240 L-74 0 C-74 -48 -50 -72 -16 -76 L16 -76 C50 -72 74 -48 74 0 L74 240Z"
        fill={bodyColor}
      />
      {uniform && <path d="M-16 -76 L0 -54 L16 -76 Z" fill={tone} />}
      {uniform && <path d="M-16 -76 L-4 -62 L-18 -60 Z M16 -76 L4 -62 L18 -60 Z" fill="#cfe0dc" />}
      {role === "prefect" && (
        <g>
          <path d="M-16 -76 L0 -54 L16 -76 Z" fill={WHITE} />
          <path d="M-4 -64 L4 -64 L7 -30 L0 -22 L-7 -30 Z" fill={LIME} />
          <circle cx="-40" cy="-30" r="10" fill={LIME} />
          <circle cx="-40" cy="-30" r="4" fill={INK} />
        </g>
      )}
      {(role === "teacher" || role === "parent" || role === "poet") && (
        <path d="M-16 -76 C-10 -58 10 -58 16 -76 C8 -70 -8 -70 -16 -76Z" fill={tone} />
      )}
      <circle cx="0" cy="-114" r="35" fill={tone} />
      <HairFront style={hair} />
      {role === "poet" && (
        <g>
          <path d="M60 -20 C66 -50 52 -70 44 -96" stroke={tone} strokeWidth="15" strokeLinecap="round" fill="none" />
          <rect x="34" y="-128" width="15" height="34" rx="7.5" fill="#dfeae6" transform="rotate(-18 41 -111)" />
        </g>
      )}
    </g>
  );
}

const base: Record<string, Figure[]> = {
  all: [
    { x: 90, y: 470, s: 0.82, skin: 2, hair: "wrap", role: "parent", wrapColor: "#e9f2ef" },
    { x: 300, y: 440, s: 0.86, skin: 1, hair: "bun", role: "teacher" },
    { x: 510, y: 470, s: 0.82, skin: 3, hair: "crop", role: "prefect" },
    { x: 165, y: 560, skin: 1, hair: "afro", role: "learner" },
    { x: 300, y: 575, s: 1.08, skin: 0, hair: "crop", role: "learner" },
    { x: 430, y: 560, skin: 2, hair: "braids", role: "learner" },
    { x: 545, y: 590, skin: 3, hair: "afro", role: "child" },
    { x: 55, y: 590, skin: 0, hair: "crop", role: "child" },
  ],
  students: [
    { x: 80, y: 480, s: 0.85, skin: 2, hair: "braids", role: "learner" },
    { x: 520, y: 480, s: 0.85, skin: 0, hair: "afro", role: "learner" },
    { x: 200, y: 560, skin: 1, hair: "crop", role: "learner" },
    { x: 330, y: 575, s: 1.1, skin: 3, hair: "afro", role: "learner" },
    { x: 455, y: 560, skin: 0, hair: "braids", role: "learner" },
  ],
  prefects: [
    { x: 120, y: 480, s: 0.82, skin: 1, hair: "crop", role: "learner" },
    { x: 480, y: 480, s: 0.82, skin: 2, hair: "braids", role: "learner" },
    { x: 165, y: 575, skin: 0, hair: "afro", role: "prefect" },
    { x: 300, y: 590, s: 1.12, skin: 2, hair: "crop", role: "prefect" },
    { x: 435, y: 575, skin: 3, hair: "braids", role: "prefect" },
  ],
  teachers: [
    { x: 90, y: 500, s: 0.9, skin: 2, hair: "wrap", role: "teacher", wrapColor: LIME },
    { x: 510, y: 500, s: 0.9, skin: 0, hair: "crop", role: "teacher" },
    { x: 215, y: 575, skin: 1, hair: "bun", role: "teacher" },
    { x: 385, y: 575, skin: 3, hair: "afro", role: "teacher" },
  ],
  parents: [
    { x: 105, y: 560, s: 1.02, skin: 1, hair: "wrap", role: "parent", wrapColor: "#e9f2ef" },
    { x: 215, y: 590, skin: 1, hair: "afro", role: "child" },
    { x: 400, y: 570, s: 1.05, skin: 3, hair: "crop", role: "parent" },
    { x: 505, y: 595, skin: 2, hair: "braids", role: "child" },
  ],
  poetry: [
    { x: 70, y: 520, s: 0.8, skin: 1, hair: "afro", role: "learner", top: "#0b4f5f" },
    { x: 530, y: 520, s: 0.8, skin: 0, hair: "wrap", role: "parent", top: "#0b4f5f", wrapColor: "#0b4f5f" },
    { x: 290, y: 585, s: 1.18, skin: 2, hair: "afro", role: "poet" },
  ],
};

const scenes: Record<string, Figure[]> = { ...base, whole: base.all, about: base.all };

export type SceneName = "all" | "students" | "prefects" | "teachers" | "parents" | "poetry" | "whole" | "about";
export const sceneNames = Object.keys(scenes) as SceneName[];

export function Scene({ name, className }: { name: SceneName; className?: string }) {
  const figures = [...scenes[name]].sort((a, b) => a.y - b.y);
  const isPoetry = name === "poetry";
  return (
    <svg viewBox="0 0 600 640" className={className} preserveAspectRatio="xMidYMax slice" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id={`glow-${name}`} cx="50%" cy="42%" r="60%">
          <stop offset="0%" stopColor="#8dba0b" stopOpacity="0.55" />
          <stop offset="55%" stopColor="#8dba0b" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#8dba0b" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`bg-${name}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0b4f5f" />
          <stop offset="100%" stopColor="#033b44" />
        </linearGradient>
      </defs>
      <rect width="600" height="640" fill={`url(#bg-${name})`} />
      <rect width="600" height="640" fill={`url(#glow-${name})`} />
      <g fill="none" stroke="#8dba0b" strokeLinecap="round">
        <circle cx="300" cy="300" r="190" strokeWidth="2" opacity="0.35" />
        <circle cx="300" cy="300" r="250" strokeWidth="2" opacity="0.18" />
        {isPoetry && (
          <g strokeWidth="6" opacity="0.9" transform="translate(-14 168)">
            <path d="M372 250 C398 268 398 312 372 330" />
            <path d="M398 224 C440 254 440 326 398 356" opacity="0.7" />
            <path d="M424 198 C482 240 482 340 424 382" opacity="0.45" />
          </g>
        )}
      </g>
      <g fill="#8dba0b">
        <rect x="60" y="120" width="16" height="44" rx="8" transform="rotate(40 68 142)" />
        <circle cx="520" cy="150" r="7" />
        <circle cx="96" cy="300" r="5" opacity="0.7" />
        <circle cx="548" cy="290" r="4" opacity="0.7" />
      </g>
      {figures.map((f, i) => (
        <Person key={i} {...f} />
      ))}
    </svg>
  );
}

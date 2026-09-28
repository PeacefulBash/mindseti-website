/**
 * Curved section divider. The block takes the colour of the section above,
 * and the shape is filled with the colour of the section below.
 */
const tones = {
  ink: { bg: "bg-ink", fill: "fill-ink" },
  teal: { bg: "bg-teal", fill: "fill-teal" },
  deep: { bg: "bg-deep", fill: "fill-deep" },
  lime: { bg: "bg-lime", fill: "fill-lime" },
} as const;

export type Tone = keyof typeof tones;

const shapes = {
  wave: "M0 70 C180 10 360 130 720 70 C1080 10 1260 130 1440 70 L1440 140 L0 140Z",
  hill: "M0 140 L0 100 C360 -20 1080 -20 1440 100 L1440 140Z",
  dip: "M0 140 L0 20 C360 150 1080 150 1440 20 L1440 140Z",
  tilt: "M0 140 L0 90 C500 110 1000 20 1440 0 L1440 140Z",
} as const;

export function Wave({ from, to, shape = "wave" }: { from: Tone; to: Tone; shape?: keyof typeof shapes }) {
  return (
    <div className={`${tones[from].bg} leading-[0]`} aria-hidden="true">
      <svg viewBox="0 0 1440 140" preserveAspectRatio="none" className={`block h-14 w-full md:h-28 ${tones[to].fill}`}>
        <path d={shapes[shape]} />
      </svg>
    </div>
  );
}

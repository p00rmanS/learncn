import type { Tone } from '../data/types';
import { TONE_INFO } from '../data/tones';

/** Pitch contour on a 5-level scale. Shape carries the meaning, never colour alone. */
export default function ToneGraph({
  tone,
  width = 160,
  height = 96,
  grid = true,
  label,
}: {
  tone: Tone;
  width?: number;
  height?: number;
  grid?: boolean;
  label?: string;
}) {
  const info = TONE_INFO[tone];
  const padX = Math.max(10, width * 0.12);
  const padY = Math.max(8, height * 0.12);
  const innerW = width - padX * 2;
  const innerH = height - padY * 2;
  const pts = info.contour.map((lvl, i, arr) => ({
    x: padX + (arr.length === 1 ? innerW / 2 : (i / (arr.length - 1)) * innerW),
    y: padY + (1 - (lvl - 1) / 4) * innerH,
  }));
  // Neutral tone is drawn shorter so it reads as "light".
  const shown = tone === 0 ? [{ x: pts[0].x + innerW * 0.3, y: pts[0].y }, { x: pts[1].x - innerW * 0.3, y: pts[1].y }] : pts;
  const d =
    shown.length === 3
      ? `M${shown[0].x},${shown[0].y} Q${shown[1].x},${shown[1].y + innerH * 0.22} ${shown[2].x},${shown[2].y}`
      : `M${shown[0].x},${shown[0].y} L${shown[1].x},${shown[1].y}`;
  const end = shown[shown.length - 1];

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width="100%"
      style={{ maxWidth: width }}
      role="img"
      aria-label={label ?? `${info.name}: ${info.shape}`}
      className="text-accent"
    >
      {grid &&
        [1, 3, 5].map((lvl) => {
          const y = padY + (1 - (lvl - 1) / 4) * innerH;
          return <line key={lvl} x1={padX * 0.5} x2={width - padX * 0.5} y1={y} y2={y} stroke="rgb(var(--line))" strokeWidth={1} />;
        })}
      <path
        d={d}
        fill="none"
        stroke="currentColor"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={tone === 0 ? '1 8' : undefined}
      />
      <circle cx={end.x} cy={end.y} r={5} fill="currentColor" />
    </svg>
  );
}

/** Small contour for use beside a single syllable. */
export function MiniContour({ tone }: { tone: Tone }) {
  return (
    <span className="inline-block w-8 align-middle">
      <ToneGraph tone={tone} width={32} height={22} grid={false} />
    </span>
  );
}

/** A vermilion chop (seal stamp). Used sparingly, as a mark of quality, never decoration for its own sake. */
export default function Seal({
  char,
  size = 40,
  animate = false,
  tilt = -4,
  className = '',
}: {
  char: string;
  size?: number;
  animate?: boolean;
  tilt?: number;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`hanzi inline-grid shrink-0 place-items-center bg-accent text-accent-ink font-bold leading-none select-none ${animate ? 'stamp-in' : ''} ${className}`}
      style={{
        width: size,
        height: size,
        fontSize: size * 0.58,
        borderRadius: size * 0.16,
        transform: animate ? undefined : `rotate(${tilt}deg)`,
        boxShadow: `inset 0 0 0 ${Math.max(1.5, size / 22)}px rgb(var(--accent-ink) / 0.3)`,
        filter: 'url(#stamp)',
      }}
    >
      {char}
    </span>
  );
}

/** Shared SVG filters: a rough stamp edge and an ink-bleed for brush strokes. */
export function SvgDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
      <defs>
        <filter id="stamp" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="1.8" />
        </filter>
        <filter id="ink" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.018" numOctaves="2" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="2.2" />
        </filter>
      </defs>
    </svg>
  );
}

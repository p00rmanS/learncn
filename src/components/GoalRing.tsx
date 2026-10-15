import type { ReactNode } from 'react';

/** A circular progress ring. Colour is never the only signal: the centre always shows the numbers. */
export default function GoalRing({
  pct,
  size = 88,
  stroke = 8,
  done = false,
  children,
}: {
  pct: number;
  size?: number;
  stroke?: number;
  done?: boolean;
  children?: ReactNode;
}) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative inline-grid place-items-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90" aria-hidden="true">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgb(var(--line))" strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={done ? 'rgb(var(--good))' : 'rgb(var(--accent))'}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - Math.max(0, Math.min(1, pct)))}
          style={{ transition: 'stroke-dashoffset 0.8s cubic-bezier(0.2, 0.7, 0.2, 1)' }}
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center text-center">{children}</div>
    </div>
  );
}

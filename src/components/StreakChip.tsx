import Icon from './Icon';
import { useGame } from '../lib/game';
import { href } from '../lib/router';

/** Flame and day count. Lit when today's goal is done, quiet when the streak is waiting. */
export default function StreakChip() {
  const g = useGame();
  if (!g.show) return null;
  const lit = g.count > 0 && g.doneToday;
  const label =
    g.count === 0
      ? 'No streak yet. Reach your daily goal to start one.'
      : g.doneToday
      ? `${g.count}-day streak. Today's goal is done.`
      : `${g.count}-day streak. ${g.xpLeft} XP to keep it alive today.`;
  return (
    <a
      href={href.progress}
      aria-label={label}
      title={label}
      className={`inline-flex min-h-[40px] items-center gap-1.5 rounded-full border px-3 text-[14px] font-semibold tabular-nums transition-colors ${
        lit ? 'border-accent/40 bg-accent-soft text-accent' : 'border-line text-muted hover:text-ink'
      }`}
    >
      <Icon name="flame" size={18} />
      {g.count}
    </a>
  );
}

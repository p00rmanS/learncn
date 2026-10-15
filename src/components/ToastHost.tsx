import { useEffect } from 'react';
import { BADGES, type GameEvent } from '../lib/xp';
import { useStore } from '../lib/store';
import Seal from './Seal';

function describe(e: GameEvent): { seal: string; title: string; body: string } {
  switch (e.type) {
    case 'goal':
      return { seal: '标', title: 'Daily goal reached', body: `You earned ${e.goal} XP today. Nice work.` };
    case 'streak':
      return {
        seal: '火',
        title: `${e.count}-day streak`,
        body: e.count === 1 ? 'A new streak begins. Come back tomorrow.' : 'Every day counts. Keep it going.',
      };
    case 'freeze':
      return { seal: '冰', title: 'Streak freeze earned', body: `You have ${e.count}. It protects one missed day.` };
    case 'level':
      return { seal: '升', title: `Level ${e.level}`, body: 'You levelled up. See your new title on Progress.' };
    case 'badge': {
      const b = BADGES.find((x) => x.id === e.id);
      return { seal: b?.seal ?? '章', title: b ? `Badge: ${b.name}` : 'New badge', body: b?.hint ?? '' };
    }
  }
}

/** Celebrations: goal reached, streak, level up, badges. They fade out by themselves. */
export default function ToastHost() {
  const { events, clearEvents } = useStore();

  useEffect(() => {
    if (!events.length) return;
    const t = window.setTimeout(clearEvents, 5200);
    return () => window.clearTimeout(t);
  }, [events, clearEvents]);

  if (!events.length) return null;
  return (
    <div className="pointer-events-none fixed inset-x-0 top-3 z-[60] flex flex-col items-center gap-2 px-4" role="status" aria-live="polite">
      {events.slice(-3).map((e, i) => {
        const d = describe(e);
        return (
          <div
            key={`${e.type}-${i}-${'id' in e ? e.id : ''}`}
            className="rise pointer-events-auto flex w-full max-w-sm items-center gap-4 rounded-2xl border border-line bg-surface px-4 py-3 shadow-[0_12px_32px_-12px_rgb(0_0_0/0.35)]"
            style={{ ['--i' as string]: i }}
          >
            <Seal char={d.seal} size={42} animate />
            <div className="min-w-0 flex-1">
              <p className="font-display text-[18px] font-medium leading-tight">{d.title}</p>
              <p className="text-[13px] leading-snug text-muted">{d.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

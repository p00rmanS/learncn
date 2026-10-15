import { dayKey, useStore } from './store';
import { levelInfo, streakView } from './xp';

/** Everything the UI needs to show streaks, XP and goals right now. */
export function useGame() {
  const { progress } = useStore();
  const today = dayKey();
  const streak = streakView(progress.streak, today);
  const xpToday = progress.xp.byDay[today] ?? 0;
  const goal = progress.settings.dailyGoal;
  return {
    ...streak,
    today,
    xpToday,
    goal,
    goalPct: Math.min(1, xpToday / goal),
    goalMet: xpToday >= goal,
    xpLeft: Math.max(0, goal - xpToday),
    total: progress.xp.total,
    level: levelInfo(progress.xp.total),
    show: progress.settings.showGame,
  };
}

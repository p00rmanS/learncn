/**
 * Game layer: XP, levels, daily goal, streaks with freezes, and badges.
 * Everything here is pure, so it can be tested without a browser.
 */

export interface StreakState {
  /** Current streak length, in days */
  count: number;
  best: number;
  /** Last day the daily goal was reached (yyyy-mm-dd), or '' */
  lastMet: string;
  /** Streak freezes in the bank (max 2) */
  freezes: number;
  /** Days a freeze protected */
  frozen: Record<string, true>;
  /** Days the daily goal was reached */
  met: Record<string, true>;
  /** Highest streak length that already earned a freeze, so none is granted twice */
  granted: number;
  /** Last day missed days were settled */
  lastSettled: string;
}

export interface Stats {
  quizzes: number;
  firstTry: number;
  perfectLessons: number;
  soundRight: number;
  soundTotal: number;
  reviews: number;
}

export interface GameState {
  xp: { total: number; byDay: Record<string, number> };
  streak: StreakState;
  badges: Record<string, number>;
  stats: Stats;
  completed: Record<string, number>;
  stories: Record<string, number>;
  deck: Record<string, unknown>;
  dailyGoal: number;
}

export type GameEvent =
  | { type: 'goal'; goal: number }
  | { type: 'streak'; count: number }
  | { type: 'freeze'; count: number }
  | { type: 'level'; level: number }
  | { type: 'badge'; id: string };

export const GOALS = [10, 20, 30, 50] as const;
export const GOAL_LABEL: Record<number, string> = { 10: 'Casual', 20: 'Regular', 30: 'Serious', 50: 'Intense' };
export const MAX_FREEZES = 2;

export const EMPTY_STREAK: StreakState = {
  count: 0,
  best: 0,
  lastMet: '',
  freezes: 0,
  frozen: {},
  met: {},
  granted: 0,
  lastSettled: '',
};

export const EMPTY_STATS: Stats = { quizzes: 0, firstTry: 0, perfectLessons: 0, soundRight: 0, soundTotal: 0, reviews: 0 };

/* ───────── Dates ───────── */

export function dayKeyOf(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

export function addDays(key: string, n: number): string {
  const [y, m, d] = key.split('-').map(Number);
  const dt = new Date(y, m - 1, d, 12); // noon avoids daylight-saving edge cases
  dt.setDate(dt.getDate() + n);
  return dayKeyOf(dt);
}

/* ───────── Levels ───────── */

const LEVEL_STARTS = [0, 50, 150, 300, 500, 800, 1200, 1800, 2500, 3500];

export const LEVEL_NAMES = [
  { zh: '萌芽', py: 'méngyá', en: 'Sprout' },
  { zh: '嫩叶', py: 'nènyè', en: 'Young leaf' },
  { zh: '竹', py: 'zhú', en: 'Bamboo' },
  { zh: '松', py: 'sōng', en: 'Pine' },
  { zh: '梅', py: 'méi', en: 'Plum blossom' },
  { zh: '莲', py: 'lián', en: 'Lotus' },
  { zh: '鹤', py: 'hè', en: 'Crane' },
  { zh: '龙', py: 'lóng', en: 'Dragon' },
  { zh: '凤', py: 'fèng', en: 'Phoenix' },
  { zh: '大师', py: 'dàshī', en: 'Master' },
];

export function levelInfo(xp: number) {
  let level = 1;
  for (let i = 1; i < LEVEL_STARTS.length; i++) if (xp >= LEVEL_STARTS[i]) level = i + 1;
  let start = LEVEL_STARTS[Math.min(level, LEVEL_STARTS.length) - 1];
  let next = level < LEVEL_STARTS.length ? LEVEL_STARTS[level] : LEVEL_STARTS[LEVEL_STARTS.length - 1] + 1500;
  if (xp >= LEVEL_STARTS[LEVEL_STARTS.length - 1]) {
    // Beyond the table: every 1,500 XP is another level.
    const extra = Math.floor((xp - LEVEL_STARTS[LEVEL_STARTS.length - 1]) / 1500);
    level = LEVEL_STARTS.length + extra;
    start = LEVEL_STARTS[LEVEL_STARTS.length - 1] + extra * 1500;
    next = start + 1500;
  }
  const name = LEVEL_NAMES[Math.min(level, LEVEL_NAMES.length) - 1];
  return { level, name, start, next, into: xp - start, span: next - start, pct: Math.min(1, (xp - start) / (next - start)) };
}

/* ───────── XP amounts ───────── */

export function lessonXp(opts: { firstTry: number; total: number; alreadyDone: boolean }): number {
  if (opts.alreadyDone) return 5;
  const perfect = opts.total >= 3 && opts.firstTry === opts.total;
  return 20 + opts.firstTry * 2 + (perfect ? 10 : 0);
}

export const STORY_XP = 15;
export const REVIEW_XP = 1;
export const SOUND_XP = 1;
export const SOUND_XP_DAILY_CAP = 10;

/* ───────── Streaks ───────── */

/**
 * Settle missed days. A freeze covers one missed day each. If the gap cannot be covered, the streak resets.
 */
export function settleStreak(s: StreakState, today: string): StreakState {
  if (s.lastSettled === today) return s;
  const n: StreakState = { ...s, frozen: { ...s.frozen } };
  if (n.count > 0 && n.lastMet) {
    const uncovered: string[] = [];
    for (let d = addDays(n.lastMet, 1); d < today; d = addDays(d, 1)) {
      if (!n.frozen[d]) uncovered.push(d);
    }
    if (uncovered.length > 0) {
      if (n.freezes >= uncovered.length) {
        n.freezes -= uncovered.length;
        uncovered.forEach((d) => (n.frozen[d] = true));
      } else {
        n.count = 0;
        n.granted = 0;
      }
    }
  }
  n.lastSettled = today;
  return n;
}

/** Record that the daily goal was reached today. Returns the new state and what happened. */
export function recordGoal(s: StreakState, today: string): { streak: StreakState; events: GameEvent[] } {
  const settled = settleStreak(s, today);
  if (settled.lastMet === today) return { streak: settled, events: [] };
  const count = settled.count > 0 ? settled.count + 1 : 1;
  const next: StreakState = {
    ...settled,
    count,
    best: Math.max(settled.best, count),
    lastMet: today,
    met: { ...settled.met, [today]: true },
  };
  const events: GameEvent[] = [{ type: 'streak', count }];
  if (count % 7 === 0 && count > next.granted && next.freezes < MAX_FREEZES) {
    next.freezes += 1;
    next.granted = count;
    events.push({ type: 'freeze', count: next.freezes });
  } else if (count % 7 === 0 && count > next.granted) {
    next.granted = count;
  }
  return { streak: next, events };
}

/** What the UI should show for the streak right now. */
export function streakView(s: StreakState, today: string) {
  const settled = settleStreak(s, today);
  const doneToday = settled.lastMet === today;
  return { count: settled.count, best: settled.best, freezes: settled.freezes, doneToday, atRisk: settled.count > 0 && !doneToday };
}

/** The seven days of the week containing `today`, Monday first. */
export function weekDays(today: string): string[] {
  const [y, m, d] = today.split('-').map(Number);
  const dow = (new Date(y, m - 1, d, 12).getDay() + 6) % 7; // Monday = 0
  const monday = addDays(today, -dow);
  return Array.from({ length: 7 }, (_, i) => addDays(monday, i));
}

/* ───────── Badges ───────── */

export interface Badge {
  id: string;
  seal: string;
  name: string;
  hint: string;
  earned: (g: GameState) => boolean;
}

export const BADGES: Badge[] = [
  { id: 'first-lesson', seal: '始', name: 'First step', hint: 'Finish your first lesson', earned: (g) => Object.keys(g.completed).length >= 1 },
  { id: 'ten-lessons', seal: '十', name: 'Ten lessons', hint: 'Finish 10 lessons', earned: (g) => Object.keys(g.completed).length >= 10 },
  { id: 'fifty-lessons', seal: '勤', name: 'Hard worker', hint: 'Finish 50 lessons', earned: (g) => Object.keys(g.completed).length >= 50 },
  { id: 'streak-3', seal: '三', name: 'Three in a row', hint: 'Reach a 3-day streak', earned: (g) => g.streak.best >= 3 },
  { id: 'streak-7', seal: '七', name: 'One full week', hint: 'Reach a 7-day streak', earned: (g) => g.streak.best >= 7 },
  { id: 'streak-30', seal: '月', name: 'A whole month', hint: 'Reach a 30-day streak', earned: (g) => g.streak.best >= 30 },
  { id: 'xp-100', seal: '百', name: '100 XP', hint: 'Earn 100 XP', earned: (g) => g.xp.total >= 100 },
  { id: 'xp-1000', seal: '千', name: '1,000 XP', hint: 'Earn 1,000 XP', earned: (g) => g.xp.total >= 1000 },
  { id: 'first-story', seal: '书', name: 'Storyteller', hint: 'Finish your first story', earned: (g) => Object.keys(g.stories).length >= 1 },
  { id: 'five-stories', seal: '读', name: 'Bookworm', hint: 'Finish 5 stories', earned: (g) => Object.keys(g.stories).length >= 5 },
  { id: 'words-100', seal: '词', name: 'Word collector', hint: 'Learn 100 words', earned: (g) => Object.keys(g.deck).length >= 100 },
  { id: 'perfect', seal: '准', name: 'Spot on', hint: 'Answer every question right on the first try in a lesson', earned: (g) => g.stats.perfectLessons >= 1 },
  { id: 'good-ear', seal: '耳', name: 'Good ear', hint: 'Get 20 tone questions right in the Sound Lab', earned: (g) => g.stats.soundRight >= 20 },
  { id: 'reviewer', seal: '记', name: 'Memory keeper', hint: 'Review 50 cards', earned: (g) => g.stats.reviews >= 50 },
];

export function newBadges(g: GameState): string[] {
  return BADGES.filter((b) => !g.badges[b.id] && b.earned(g)).map((b) => b.id);
}

/* ───────── Applying XP ───────── */

/** Add XP for today. Returns the updated game state and everything worth celebrating. */
export function applyXp(g: GameState, amount: number, today: string): { game: GameState; events: GameEvent[] } {
  if (amount <= 0) return { game: g, events: [] };
  const events: GameEvent[] = [];
  const before = g.xp.total;
  const dayBefore = g.xp.byDay[today] ?? 0;
  const xp = { total: before + amount, byDay: { ...g.xp.byDay, [today]: dayBefore + amount } };
  if (levelInfo(xp.total).level > levelInfo(before).level) events.push({ type: 'level', level: levelInfo(xp.total).level });

  let streak = settleStreak(g.streak, today);
  if (dayBefore < g.dailyGoal && xp.byDay[today] >= g.dailyGoal) {
    events.push({ type: 'goal', goal: g.dailyGoal });
    const r = recordGoal(streak, today);
    streak = r.streak;
    events.push(...r.events);
  }
  let game: GameState = { ...g, xp, streak };
  const earned = newBadges(game);
  if (earned.length) {
    const badges = { ...game.badges };
    earned.forEach((id) => {
      badges[id] = Date.now();
      events.push({ type: 'badge', id });
    });
    game = { ...game, badges };
  }
  return { game, events };
}

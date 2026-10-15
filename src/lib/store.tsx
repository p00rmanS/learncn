import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { LESSONS, lessonWords } from '../data/lessons';
import { isDue, newCard, schedule, type CardState, type Rating } from './srs';
import {
  EMPTY_STATS,
  EMPTY_STREAK,
  REVIEW_XP,
  SOUND_XP,
  SOUND_XP_DAILY_CAP,
  STORY_XP,
  applyXp,
  dayKeyOf,
  lessonXp,
  settleStreak,
  type GameEvent,
  type GameState,
  type StreakState,
  type Stats,
} from './xp';

export interface Settings {
  taglish: boolean;
  pinyin: 'always' | 'tap';
  rate: number; // speech rate
  name: string;
  track: 'adult' | 'kids';
  showPronounce: boolean;
  onboarded: boolean;
  textSize: 'm' | 'l' | 'xl';
  dailyGoal: number; // XP per day
  showGame: boolean; // streaks, XP and badges
}

export interface Progress {
  completed: Record<string, number>; // lessonId -> completion time
  deck: Record<string, CardState>; // wordId -> card
  days: Record<string, number>; // yyyy-mm-dd -> activities done
  resume: Record<string, number>; // lessonId -> last page index
  stories: Record<string, number>; // storyId -> completion time
  log: Record<string, { lesson: number; review: number; story: number; sound: number }>; // day -> things done
  xp: { total: number; byDay: Record<string, number> };
  streak: StreakState;
  badges: Record<string, number>;
  stats: Stats;
  settings: Settings;
}

const DEFAULTS: Progress = {
  completed: {},
  deck: {},
  days: {},
  resume: {},
  stories: {},
  log: {},
  xp: { total: 0, byDay: {} },
  streak: EMPTY_STREAK,
  badges: {},
  stats: EMPTY_STATS,
  settings: {
    taglish: true,
    pinyin: 'always',
    rate: 0.85,
    name: '',
    track: 'adult',
    showPronounce: true,
    onboarded: false,
    textSize: 'm',
    dailyGoal: 20,
    showGame: true,
  },
};

const KEY = 'sheng.progress.v2';

function load(): Progress {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return DEFAULTS;
    const p = JSON.parse(raw) as Partial<Progress>;
    return {
      completed: p.completed ?? {},
      deck: p.deck ?? {},
      days: p.days ?? {},
      resume: p.resume ?? {},
      stories: p.stories ?? {},
      log: p.log ?? {},
      xp: p.xp ?? DEFAULTS.xp,
      streak: { ...EMPTY_STREAK, ...(p.streak ?? {}) },
      badges: p.badges ?? {},
      stats: { ...EMPTY_STATS, ...(p.stats ?? {}) },
      settings: { ...DEFAULTS.settings, ...(p.settings ?? {}) },
    };
  } catch {
    return DEFAULTS;
  }
}

export const TEXT_SCALE = { m: 1, l: 1.15, xl: 1.3 } as const;

export const dayKey = (d = new Date()) => dayKeyOf(d);

type Kind = 'lesson' | 'review' | 'story' | 'sound';
const bumpDay = (days: Record<string, number>) => {
  const k = dayKey();
  return { ...days, [k]: (days[k] ?? 0) + 1 };
};
const bumpLog = (log: Progress['log'], kind: Kind) => {
  const k = dayKey();
  const today = log[k] ?? { lesson: 0, review: 0, story: 0, sound: 0 };
  return { ...log, [k]: { ...today, [kind]: today[kind] + 1 } };
};

const toGame = (p: Progress): GameState => ({
  xp: p.xp,
  streak: p.streak,
  badges: p.badges,
  stats: p.stats,
  completed: p.completed,
  stories: p.stories,
  deck: p.deck,
  dailyGoal: p.settings.dailyGoal,
});

/** Add XP to a progress snapshot and collect celebrations. */
function award(p: Progress, amount: number): { p: Progress; events: GameEvent[] } {
  const r = applyXp(toGame(p), amount, dayKey());
  return { p: { ...p, xp: r.game.xp, streak: r.game.streak, badges: r.game.badges }, events: r.events };
}

interface Store {
  progress: Progress;
  completeLesson: (id: string, quiz?: { firstTry: number; total: number }) => void;
  setResume: (id: string, page: number) => void;
  completeStory: (id: string) => void;
  /** Record one tone-trainer answer. */
  soundAnswer: (correct: boolean) => void;
  review: (wordId: string, rating: Rating) => void;
  setSettings: (s: Partial<Settings>) => void;
  reset: () => void;
  dueIds: string[];
  nextLessonId: string | null;
  /** Celebrations waiting to be shown (goal reached, streak, level, badge). */
  events: GameEvent[];
  clearEvents: () => void;
  /** True when persistence is unavailable (private mode etc.) */
  volatile: boolean;
}

const Ctx = createContext<Store | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<Progress>(load);
  const [volatile, setVolatile] = useState(false);
  const [events, setEvents] = useState<GameEvent[]>([]);

  // Actions read the latest snapshot from a ref, so two actions in one tick never lose each other's changes.
  const ref = useRef(progress);
  ref.current = progress;

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(progress));
    } catch {
      setVolatile(true);
    }
  }, [progress]);

  const commit = useCallback((next: Progress, ev: GameEvent[] = []) => {
    ref.current = next;
    setProgress(next);
    if (ev.length && next.settings.showGame) setEvents((e) => [...e, ...ev]);
  }, []);

  // Settle missed days when the app opens, when you come back to it, and when midnight passes.
  useEffect(() => {
    const settle = () => {
      const p = ref.current;
      const s = settleStreak(p.streak, dayKey());
      if (s !== p.streak) commit({ ...p, streak: s });
    };
    settle();
    const onVisible = () => document.visibilityState === 'visible' && settle();
    document.addEventListener('visibilitychange', onVisible);
    const timer = window.setInterval(settle, 60_000);
    return () => {
      document.removeEventListener('visibilitychange', onVisible);
      window.clearInterval(timer);
    };
  }, [commit]);

  const completeLesson = useCallback(
    (id: string, quiz?: { firstTry: number; total: number }) => {
      const lesson = LESSONS.find((l) => l.id === id);
      if (!lesson) return;
      const p = ref.current;
      const alreadyDone = !!p.completed[id];
      const deck = { ...p.deck };
      for (const w of lessonWords(lesson)) if (!deck[w.id]) deck[w.id] = newCard();
      const firstTry = quiz?.firstTry ?? 0;
      const total = quiz?.total ?? 0;
      const stats = {
        ...p.stats,
        quizzes: p.stats.quizzes + total,
        firstTry: p.stats.firstTry + firstTry,
        perfectLessons: p.stats.perfectLessons + (total >= 3 && firstTry === total ? 1 : 0),
      };
      const base: Progress = {
        ...p,
        deck,
        stats,
        completed: { ...p.completed, [id]: p.completed[id] ?? Date.now() },
        days: bumpDay(p.days),
        log: bumpLog(p.log, 'lesson'),
      };
      const r = award(base, lessonXp({ firstTry, total, alreadyDone }));
      commit(r.p, r.events);
    },
    [commit],
  );

  const setResume = useCallback(
    (id: string, page: number) => {
      const p = ref.current;
      if (p.resume[id] === page) return;
      commit({ ...p, resume: { ...p.resume, [id]: page } });
    },
    [commit],
  );

  const completeStory = useCallback(
    (id: string) => {
      const p = ref.current;
      const first = !p.stories[id];
      const base: Progress = {
        ...p,
        stories: { ...p.stories, [id]: p.stories[id] ?? Date.now() },
        days: bumpDay(p.days),
        log: bumpLog(p.log, 'story'),
      };
      const r = award(base, first ? STORY_XP : 2);
      commit(r.p, r.events);
    },
    [commit],
  );

  const soundAnswer = useCallback(
    (correct: boolean) => {
      const p = ref.current;
      const today = p.log[dayKey()]?.sound ?? 0;
      const base: Progress = {
        ...p,
        stats: { ...p.stats, soundTotal: p.stats.soundTotal + 1, soundRight: p.stats.soundRight + (correct ? 1 : 0) },
        days: bumpDay(p.days),
        log: bumpLog(p.log, 'sound'),
      };
      const r = award(base, correct && today < SOUND_XP_DAILY_CAP ? SOUND_XP : 0);
      commit(r.p, r.events);
    },
    [commit],
  );

  const review = useCallback(
    (wordId: string, rating: Rating) => {
      const p = ref.current;
      const card = p.deck[wordId] ?? newCard();
      const base: Progress = {
        ...p,
        deck: { ...p.deck, [wordId]: schedule(card, rating) },
        stats: { ...p.stats, reviews: p.stats.reviews + 1 },
        days: bumpDay(p.days),
        log: bumpLog(p.log, 'review'),
      };
      const r = award(base, REVIEW_XP);
      commit(r.p, r.events);
    },
    [commit],
  );

  const setSettings = useCallback(
    (s: Partial<Settings>) => {
      const p = ref.current;
      commit({ ...p, settings: { ...p.settings, ...s } });
    },
    [commit],
  );

  const reset = useCallback(() => {
    setEvents([]);
    commit(DEFAULTS);
  }, [commit]);

  const clearEvents = useCallback(() => setEvents([]), []);

  const dueIds = useMemo(
    () => Object.entries(progress.deck).filter(([, c]) => isDue(c)).map(([id]) => id),
    [progress.deck],
  );

  const nextLessonId = useMemo(
    () => LESSONS.find((l) => (l.track ?? 'adult') === progress.settings.track && !progress.completed[l.id])?.id ?? null,
    [progress.completed, progress.settings.track],
  );

  const value: Store = {
    progress,
    completeLesson,
    setResume,
    completeStory,
    soundAnswer,
    review,
    setSettings,
    reset,
    dueIds,
    nextLessonId,
    events,
    clearEvents,
    volatile,
  };
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useStore(): Store {
  const s = useContext(Ctx);
  if (!s) throw new Error('useStore outside provider');
  return s;
}

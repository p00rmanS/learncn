import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { LESSONS, lessonWords } from '../data/lessons';
import { isDue, newCard, schedule, type CardState, type Rating } from './srs';

export interface Settings {
  taglish: boolean;
  pinyin: 'always' | 'tap';
  rate: number; // speech rate
  name: string;
}

export interface Progress {
  completed: Record<string, number>; // lessonId -> completion time
  deck: Record<string, CardState>; // wordId -> card
  days: Record<string, number>; // yyyy-mm-dd -> activities done
  settings: Settings;
}

const DEFAULTS: Progress = {
  completed: {},
  deck: {},
  days: {},
  settings: { taglish: true, pinyin: 'always', rate: 0.85, name: '' },
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
      settings: { ...DEFAULTS.settings, ...(p.settings ?? {}) },
    };
  } catch {
    return DEFAULTS;
  }
}

export const dayKey = (d = new Date()) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

interface Store {
  progress: Progress;
  completeLesson: (id: string) => void;
  review: (wordId: string, rating: Rating) => void;
  setSettings: (s: Partial<Settings>) => void;
  reset: () => void;
  dueIds: string[];
  nextLessonId: string | null;
  /** True when persistence is unavailable (private mode etc.) */
  volatile: boolean;
}

const Ctx = createContext<Store | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<Progress>(load);
  const [volatile, setVolatile] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(progress));
    } catch {
      setVolatile(true);
    }
  }, [progress]);

  const bumpDay = (days: Record<string, number>) => {
    const k = dayKey();
    return { ...days, [k]: (days[k] ?? 0) + 1 };
  };

  const completeLesson = useCallback((id: string) => {
    const lesson = LESSONS.find((l) => l.id === id);
    if (!lesson) return;
    setProgress((p) => {
      const deck = { ...p.deck };
      for (const w of lessonWords(lesson)) if (!deck[w.id]) deck[w.id] = newCard();
      return { ...p, deck, completed: { ...p.completed, [id]: p.completed[id] ?? Date.now() }, days: bumpDay(p.days) };
    });
  }, []);

  const review = useCallback((wordId: string, rating: Rating) => {
    setProgress((p) => {
      const card = p.deck[wordId] ?? newCard();
      return { ...p, deck: { ...p.deck, [wordId]: schedule(card, rating) }, days: bumpDay(p.days) };
    });
  }, []);

  const setSettings = useCallback((s: Partial<Settings>) => {
    setProgress((p) => ({ ...p, settings: { ...p.settings, ...s } }));
  }, []);

  const reset = useCallback(() => setProgress(DEFAULTS), []);

  const dueIds = useMemo(
    () => Object.entries(progress.deck).filter(([, c]) => isDue(c)).map(([id]) => id),
    [progress.deck],
  );

  const nextLessonId = useMemo(
    () => LESSONS.find((l) => !progress.completed[l.id])?.id ?? null,
    [progress.completed],
  );

  const value: Store = { progress, completeLesson, review, setSettings, reset, dueIds, nextLessonId, volatile };
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useStore(): Store {
  const s = useContext(Ctx);
  if (!s) throw new Error('useStore outside provider');
  return s;
}

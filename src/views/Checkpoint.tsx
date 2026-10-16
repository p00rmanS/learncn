import { useEffect, useMemo, useRef, useState } from 'react';
import { LESSONS, MODULES, moduleTrack } from '../data/lessons';
import type { Block } from '../data/types';
import Icon from '../components/Icon';
import { Quiz } from '../components/LessonBlocks';
import Seal from '../components/Seal';
import { href } from '../lib/router';
import { TEXT_SCALE, useStore } from '../lib/store';
import { PASS_MARK } from '../lib/xp';

type QuizBlock = Extract<Block, { type: 'quiz' }>;

const MAX_QUESTIONS = 10;

function shuffle<T>(list: T[]): T[] {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** A chapter checkpoint: ten questions drawn from the lessons you have completed in that chapter. */
export default function Checkpoint({ moduleId }: { moduleId: string }) {
  const { progress, completeCheckpoint } = useStore();
  const mod = MODULES.find((m) => m.id === moduleId);

  const doneLessons = useMemo(
    () => LESSONS.filter((l) => l.module === moduleId && progress.completed[l.id]),
    // Fixed at the moment the checkpoint opens, so the questions do not change mid-quiz.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [moduleId],
  );

  const questions = useMemo(() => {
    const seen = new Set<string>();
    const pool: QuizBlock[] = [];
    for (const l of doneLessons) {
      for (const p of l.pages) {
        for (const b of p.blocks) {
          if (b.type === 'quiz' && !seen.has(b.question + b.options.join('|'))) {
            seen.add(b.question + b.options.join('|'));
            pool.push(b);
          }
        }
      }
    }
    return shuffle(pool).slice(0, MAX_QUESTIONS);
  }, [doneLessons]);

  const [idx, setIdx] = useState(0);
  const [solved, setSolved] = useState(false);
  const [firstTry, setFirstTry] = useState(0);
  const saved = useRef(false);

  const finished = idx >= questions.length && questions.length > 0;
  const total = questions.length;
  const passed = total > 0 && firstTry / total >= PASS_MARK;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [idx]);

  useEffect(() => {
    if (finished && !saved.current) {
      saved.current = true;
      completeCheckpoint(moduleId, firstTry, total);
    }
  }, [finished, completeCheckpoint, moduleId, firstTry, total]);

  // Keyboard: 1-9 answer, → or Enter for the next question.
  useEffect(() => {
    const on = (e: KeyboardEvent) => {
      if (e.altKey || e.ctrlKey || e.metaKey || finished) return;
      if (/^[1-9]$/.test(e.key)) {
        const t = document.querySelectorAll<HTMLButtonElement>('[aria-label="Answer choices"] button')[Number(e.key) - 1];
        if (t && !t.disabled) {
          e.preventDefault();
          t.click();
        }
      } else if ((e.key === 'ArrowRight' || e.key === 'Enter') && solved && (e.target as HTMLElement)?.tagName !== 'BUTTON') {
        e.preventDefault();
        setSolved(false);
        setIdx((i) => i + 1);
      }
    };
    window.addEventListener('keydown', on);
    return () => window.removeEventListener('keydown', on);
  }, [solved, finished]);

  if (!mod) {
    return (
      <div className="py-20 text-center">
        <p className="font-display text-2xl">That chapter does not exist.</p>
        <a href={href.learn} className="btn-primary mt-6">Back to lessons</a>
      </div>
    );
  }

  if (doneLessons.length < 2 || total === 0) {
    return (
      <div className="mx-auto max-w-md py-20 text-center">
        <Seal char="考" size={72} />
        <h1 className="mt-8 text-[34px]">Checkpoint not ready</h1>
        <p className="mt-3 text-muted">
          Finish at least two lessons in <b className="text-ink">{mod.title}</b> and this checkpoint will quiz you on them.
        </p>
        <a href={href.learn} className="btn-primary mt-8">Back to lessons</a>
      </div>
    );
  }

  const scale = TEXT_SCALE[progress.settings.textSize];

  if (finished) {
    return (
      <div className="mx-auto max-w-xl py-10 text-center" style={{ zoom: scale }}>
        <div className="flex justify-center">
          <Seal char={passed ? '优' : '考'} size={104} animate />
        </div>
        <p className="eyebrow mt-10">{mod.title} checkpoint</p>
        <h1 className="mt-3 text-[40px] leading-tight sm:text-[52px]">{passed ? 'Checkpoint passed' : 'Good practice'}</h1>
        <div className="mx-auto mt-6 flex max-w-xs items-baseline justify-center gap-3">
          <span className="numeral text-[72px] font-light leading-none tabular-nums">
            {firstTry}
            <span className="text-[32px] text-muted">/{total}</span>
          </span>
          <span className="text-left text-[13px] leading-tight text-muted">right on<br />the first try</span>
        </div>
        <p className="mx-auto mt-5 max-w-md text-[17px] leading-relaxed text-muted">
          {passed
            ? 'You know this chapter well. Your score is saved, and you earned XP.'
            : `You need ${Math.ceil(total * PASS_MARK)} of ${total} to pass. Replay a lesson or two, then try again: your best score is kept.`}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href={href.learn} className="btn-primary flex-1">Back to lessons</a>
          <button type="button" onClick={() => window.location.reload()} className="btn-secondary flex-1">Try again</button>
        </div>
      </div>
    );
  }

  const q = questions[idx];
  return (
    <div className="mx-auto max-w-2xl" style={{ zoom: scale }}>
      <header className="mb-8">
        <div className="flex items-center justify-between">
          <p className="eyebrow">{mod.title} checkpoint</p>
          <span className="text-[13px] tabular-nums text-muted">
            {idx + 1} / {total}
          </span>
        </div>
        <div className="mt-3 h-[3px] w-full bg-line" role="progressbar" aria-valuemin={0} aria-valuemax={total} aria-valuenow={idx + 1} aria-label="Checkpoint progress">
          <div className="h-full bg-ink transition-[width] duration-500" style={{ width: `${((idx + 1) / total) * 100}%` }} />
        </div>
      </header>

      <div key={idx} className="rise">
        <Quiz
          block={q}
          onSolved={(ft) => {
            setSolved(true);
            if (ft) setFirstTry((n) => n + 1);
          }}
        />
      </div>

      <div className="mt-8 flex items-center justify-between">
        <a href={href.learn} className="text-sm text-muted underline underline-offset-4 hover:text-ink">Leave checkpoint</a>
        <button
          type="button"
          disabled={!solved}
          onClick={() => {
            setSolved(false);
            setIdx((i) => i + 1);
          }}
          className="btn-primary"
        >
          {idx === total - 1 ? 'See my score' : 'Next question'} <Icon name="next" size={18} />
        </button>
      </div>
      <p className="mt-4 text-center text-[12px] text-muted">Tip: press 1 to 4 to answer, then → for the next question.</p>
    </div>
  );
}

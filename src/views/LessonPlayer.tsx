import { useCallback, useEffect, useMemo, useState } from 'react';
import { getLesson, lessonWords, lessonsFor, lessonTrack } from '../data/lessons';
import LessonBlocks from '../components/LessonBlocks';
import Icon from '../components/Icon';
import Seal from '../components/Seal';
import { href } from '../lib/router';
import { TEXT_SCALE, useStore } from '../lib/store';
import { stopSpeaking } from '../lib/audio';

export default function LessonPlayer({ lessonId }: { lessonId: string }) {
  const lesson = getLesson(lessonId);
  const { completeLesson, setResume, progress } = useStore();
  const pageCount = lesson?.pages.length ?? 0;
  const [step, setStep] = useState(() => Math.max(0, Math.min(progress.resume[lessonId] ?? 0, pageCount - 1)));
  const [solved, setSolved] = useState<Record<string, true>>({});
  const [firstTry, setFirstTry] = useState<Record<string, boolean>>({});
  const [done, setDone] = useState(false);

  const page = lesson?.pages[step];
  const quizIdx = page ? page.blocks.map((b, i) => (b.type === 'quiz' ? i : -1)).filter((i) => i >= 0) : [];
  const pageSolved = quizIdx.every((i) => solved[`${step}-${i}`]);
  const isLast = step === pageCount - 1;

  useEffect(() => {
    window.scrollTo(0, 0);
    stopSpeaking();
  }, [step, done]);

  // Remember where the learner stopped, so closing the tab never loses their place.
  useEffect(() => {
    if (lesson && !done) setResume(lesson.id, step);
  }, [lesson, step, done, setResume]);

  const words = useMemo(() => (lesson ? lessonWords(lesson) : []), [lesson]);

  const goNext = useCallback(() => {
    if (!lesson || !pageSolved) return;
    if (isLast) {
      completeLesson(lesson.id);
      setResume(lesson.id, 0);
      setDone(true);
    } else {
      setStep((s) => s + 1);
    }
  }, [lesson, pageSolved, isLast, completeLesson, setResume]);

  const goBack = useCallback(() => setStep((s) => Math.max(0, s - 1)), []);

  // Keyboard: → or Enter continues, ← goes back, Esc closes.
  useEffect(() => {
    const on = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement | null;
      if (el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable)) return;
      if (done) return;
      if (e.key === 'ArrowRight' || (e.key === 'Enter' && el?.tagName !== 'BUTTON' && el?.tagName !== 'A')) {
        e.preventDefault();
        goNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goBack();
      } else if (e.key === 'Escape') {
        window.location.hash = href.learn;
      }
    };
    window.addEventListener('keydown', on);
    return () => window.removeEventListener('keydown', on);
  }, [goNext, goBack, done]);

  if (!lesson || !page) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-5 p-6 text-center">
        <p className="font-display text-2xl">That lesson does not exist.</p>
        <a href={href.learn} className="btn-primary">Back to lessons</a>
      </div>
    );
  }

  const trackList = lessonsFor(lessonTrack(lesson));
  const lessonIndex = trackList.findIndex((l) => l.id === lesson.id);
  const nextLesson = trackList[lessonIndex + 1];
  const alreadyDone = !!progress.completed[lesson.id];
  const pct = ((step + 1) / pageCount) * 100;
  const quizTotal = Object.keys(firstTry).length;
  const quizFirst = Object.values(firstTry).filter(Boolean).length;

  /* ── Completion: the seal moment ── */
  if (done) {
    return (
      <div className="min-h-screen bg-paper">
        <div className="mx-auto max-w-xl px-6 py-16 text-center sm:py-24">
          <div className="flex justify-center">
            <Seal char="完" size={112} animate />
          </div>
          <p className="eyebrow mt-10 rise" style={{ ['--i' as string]: 3 }}>Lesson {lessonIndex + 1} complete</p>
          <h1 className="mt-3 text-[38px] leading-tight sm:text-[48px] rise" style={{ ['--i' as string]: 4 }}>{lesson.title}</h1>
          <p className="mx-auto mt-5 max-w-md text-[18px] leading-relaxed text-muted rise" style={{ ['--i' as string]: 5 }}>
            You can now {lesson.goal.charAt(0).toLowerCase() + lesson.goal.slice(1)}
          </p>

          {quizTotal > 0 && (
            <div className="mx-auto mt-8 flex max-w-xs items-baseline justify-center gap-3 rise" style={{ ['--i' as string]: 5 }}>
              <span className="numeral text-[56px] font-light leading-none tabular-nums">{quizFirst}<span className="text-[26px] text-muted">/{quizTotal}</span></span>
              <span className="text-left text-[13px] leading-tight text-muted">right on<br />the first try</span>
            </div>
          )}

          {words.length > 0 && (
            <div className="mt-10 border-y border-line py-6 text-left rise" style={{ ['--i' as string]: 6 }}>
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="font-display text-[20px] font-medium">{words.length} words added to Review</h2>
                <span className="text-[13px] text-muted">They return as you start to forget them.</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                {words.map((w) => (
                  <span key={w.id} className="hanzi text-[26px] leading-tight">{w.hanzi}</span>
                ))}
              </div>
            </div>
          )}

          <div className="mt-10 flex flex-col gap-3 rise sm:flex-row" style={{ ['--i' as string]: 7 }}>
            {nextLesson ? (
              <a href={href.lesson(nextLesson.id)} className="btn-seal flex-1">
                Next: {nextLesson.title} <Icon name="arrow" size={18} />
              </a>
            ) : (
              <a href={href.learn} className="btn-seal flex-1">Back to lessons</a>
            )}
            {words.length > 0 && (
              <a href={href.review} className="btn-secondary flex-1">Review now</a>
            )}
          </div>
          <a href={href.learn} className="mt-5 block text-sm text-muted underline underline-offset-4 hover:text-ink">
            Back to all lessons
          </a>
        </div>
      </div>
    );
  }

  /* ── Lesson page ── */
  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <header className="sticky top-0 z-20 bg-paper/92 backdrop-blur">
        <div
          className="relative h-[3px] w-full bg-line"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={pageCount}
          aria-valuenow={step + 1}
          aria-label="Lesson progress"
        >
          <div className="absolute inset-y-0 left-0 bg-ink transition-[width] duration-500" style={{ width: `${pct}%` }} />
          <span className="absolute -top-[3px] h-[9px] w-[9px] -translate-x-1/2 rounded-full bg-accent transition-[left] duration-500" style={{ left: `${pct}%` }} />
        </div>
        <div className="mx-auto flex h-14 max-w-2xl items-center gap-3 px-4">
          <a href={href.learn} aria-label="Close lesson (Esc)" className="-ml-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-muted hover:text-ink">
            <Icon name="x" />
          </a>
          <div className="min-w-0 flex-1 truncate text-center text-[13px] text-muted">
            Lesson {lessonIndex + 1} · {lesson.title}
          </div>
          <span className="w-11 shrink-0 text-right text-[13px] tabular-nums text-muted">
            {step + 1}/{pageCount}
          </span>
        </div>
      </header>

      <main className="flex-1">
        <div key={step} className="mx-auto w-full max-w-2xl px-5 pb-44 pt-8 rise sm:px-6 sm:pt-12" style={{ zoom: TEXT_SCALE[progress.settings.textSize] }}>
          <p className="eyebrow text-accent">
            <span className="mr-2 tabular-nums">{String(step + 1).padStart(2, '0')}</span>
            {page.kicker}
          </p>
          <h1 className="mb-9 mt-3 text-[34px] leading-[1.08] sm:text-[46px]">{page.title}</h1>
          <LessonBlocks blocks={page.blocks} onQuizSolved={(i, ft) => {
              setSolved((s) => ({ ...s, [`${step}-${i}`]: true }));
              setFirstTry((m) => (`${step}-${i}` in m ? m : { ...m, [`${step}-${i}`]: ft }));
            }} />
        </div>
      </main>

      <footer className="fixed inset-x-0 bottom-0 z-20 border-t border-line bg-paper/95 backdrop-blur">
        <div className="mx-auto flex max-w-2xl items-center gap-3 px-4 py-3">
          <button type="button" onClick={goBack} disabled={step === 0} className="btn-ghost" title="Back (←)">
            <Icon name="back" size={18} /> Back
          </button>
          <div className="flex-1 text-center text-[13px] text-muted">{!pageSolved && 'Answer to continue'}</div>
          {isLast ? (
            <button type="button" onClick={goNext} disabled={!pageSolved} className="btn-seal" title="Finish (→)">
              {alreadyDone ? 'Finish again' : 'Finish lesson'} <Icon name="check" size={18} />
            </button>
          ) : (
            <button type="button" onClick={goNext} disabled={!pageSolved} className="btn-primary" title="Continue (→)">
              Continue <Icon name="next" size={18} />
            </button>
          )}
        </div>
      </footer>
    </div>
  );
}

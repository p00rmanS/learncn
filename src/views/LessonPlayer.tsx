import { useEffect, useMemo, useState } from 'react';
import { LESSONS, getLesson, lessonWords } from '../data/lessons';
import LessonBlocks from '../components/LessonBlocks';
import Icon from '../components/Icon';
import Seal from '../components/Seal';
import { href } from '../lib/router';
import { useStore } from '../lib/store';
import { stopSpeaking } from '../lib/audio';

export default function LessonPlayer({ lessonId }: { lessonId: string }) {
  const lesson = getLesson(lessonId);
  const { completeLesson, progress } = useStore();
  const [step, setStep] = useState(0);
  const [solved, setSolved] = useState<Record<string, true>>({});
  const [done, setDone] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    stopSpeaking();
  }, [step, done]);

  const words = useMemo(() => (lesson ? lessonWords(lesson) : []), [lesson]);

  if (!lesson) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-5 p-6 text-center">
        <p className="font-display text-2xl">That lesson does not exist.</p>
        <a href={href.learn} className="btn-primary">Back to lessons</a>
      </div>
    );
  }

  const page = lesson.pages[step];
  const isLast = step === lesson.pages.length - 1;
  const quizIdx = page.blocks.map((b, i) => (b.type === 'quiz' ? i : -1)).filter((i) => i >= 0);
  const pageSolved = quizIdx.every((i) => solved[`${step}-${i}`]);
  const lessonIndex = LESSONS.findIndex((l) => l.id === lesson.id);
  const nextLesson = LESSONS[lessonIndex + 1];
  const alreadyDone = !!progress.completed[lesson.id];
  const pct = ((step + 1) / lesson.pages.length) * 100;

  const finish = () => {
    completeLesson(lesson.id);
    setDone(true);
  };

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
          aria-valuemax={lesson.pages.length}
          aria-valuenow={step + 1}
          aria-label="Lesson progress"
        >
          <div className="absolute inset-y-0 left-0 bg-ink transition-[width] duration-500" style={{ width: `${pct}%` }} />
          <span className="absolute -top-[3px] h-[9px] w-[9px] -translate-x-1/2 rounded-full bg-accent transition-[left] duration-500" style={{ left: `${pct}%` }} />
        </div>
        <div className="mx-auto flex h-14 max-w-2xl items-center gap-3 px-4">
          <a href={href.learn} aria-label="Close lesson" className="-ml-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-muted hover:text-ink">
            <Icon name="x" />
          </a>
          <div className="min-w-0 flex-1 truncate text-center text-[13px] text-muted">
            Lesson {lessonIndex + 1} · {lesson.title}
          </div>
          <span className="w-11 shrink-0 text-right text-[13px] tabular-nums text-muted">
            {step + 1}/{lesson.pages.length}
          </span>
        </div>
      </header>

      <main className="flex-1">
        <div key={step} className="mx-auto w-full max-w-2xl px-5 pb-44 pt-8 rise sm:px-6 sm:pt-12">
          <p className="eyebrow text-accent">
            <span className="mr-2 tabular-nums">{String(step + 1).padStart(2, '0')}</span>
            {page.kicker}
          </p>
          <h1 className="mb-9 mt-3 text-[34px] leading-[1.08] sm:text-[46px]">{page.title}</h1>
          <LessonBlocks blocks={page.blocks} onQuizSolved={(i) => setSolved((s) => ({ ...s, [`${step}-${i}`]: true }))} />
        </div>
      </main>

      <footer className="fixed inset-x-0 bottom-0 z-20 border-t border-line bg-paper/95 backdrop-blur">
        <div className="mx-auto flex max-w-2xl items-center gap-3 px-4 py-3">
          <button type="button" onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0} className="btn-ghost">
            <Icon name="back" size={18} /> Back
          </button>
          <div className="flex-1 text-center text-[13px] text-muted">{!pageSolved && 'Answer to continue'}</div>
          {isLast ? (
            <button type="button" onClick={finish} disabled={!pageSolved} className="btn-seal">
              {alreadyDone ? 'Finish again' : 'Finish lesson'} <Icon name="check" size={18} />
            </button>
          ) : (
            <button type="button" onClick={() => setStep((s) => s + 1)} disabled={!pageSolved} className="btn-primary">
              Continue <Icon name="next" size={18} />
            </button>
          )}
        </div>
      </footer>
    </div>
  );
}

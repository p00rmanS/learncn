import { useEffect, useMemo, useState } from 'react';
import { LESSONS, getLesson, lessonWords } from '../data/lessons';
import LessonBlocks from '../components/LessonBlocks';
import Icon from '../components/Icon';
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
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-6 text-center">
        <p className="text-lg font-medium">That lesson does not exist.</p>
        <a href={href.learn} className="btn-primary">Back to lessons</a>
      </div>
    );
  }

  const page = lesson.pages[step];
  const isLast = step === lesson.pages.length - 1;
  const quizIdx = page.blocks.map((b, i) => (b.type === 'quiz' ? i : -1)).filter((i) => i >= 0);
  const pageSolved = quizIdx.every((i) => solved[`${step}-${i}`]);
  const nextLesson = LESSONS[LESSONS.findIndex((l) => l.id === lesson.id) + 1];
  const alreadyDone = !!progress.completed[lesson.id];

  const finish = () => {
    completeLesson(lesson.id);
    setDone(true);
  };

  /* ── Completion screen ── */
  if (done) {
    return (
      <div className="min-h-screen bg-paper">
        <div className="mx-auto max-w-xl px-5 py-12 sm:py-20 rise">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-good-soft text-good">
            <Icon name="check" size={28} />
          </div>
          <p className="eyebrow mt-6">Lesson complete</p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight">{lesson.title}</h1>
          <p className="mt-3 text-muted">You can now: {lesson.goal.charAt(0).toLowerCase() + lesson.goal.slice(1)}</p>

          {words.length > 0 && (
            <div className="card mt-8 p-5">
              <div className="flex items-baseline justify-between">
                <h2 className="font-semibold">{words.length} words added to Review</h2>
                <span className="text-sm text-muted">They return when you are about to forget them.</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {words.map((w) => (
                  <span key={w.id} className="hanzi rounded-lg bg-sunken px-2.5 py-1 text-lg">{w.hanzi}</span>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            {nextLesson ? (
              <a href={href.lesson(nextLesson.id)} className="btn-primary flex-1">
                Next: {nextLesson.title} <Icon name="arrow" size={18} />
              </a>
            ) : (
              <a href={href.learn} className="btn-primary flex-1">Back to lessons</a>
            )}
            {words.length > 0 && (
              <a href={href.review} className="btn-secondary flex-1">Review now</a>
            )}
          </div>
          <a href={href.learn} className="mt-4 block text-center text-sm text-muted hover:text-ink underline underline-offset-2">
            Back to all lessons
          </a>
        </div>
      </div>
    );
  }

  /* ── Lesson page ── */
  return (
    <div className="min-h-screen bg-paper flex flex-col">
      <header className="sticky top-0 z-20 border-b border-line bg-paper/95 backdrop-blur">
        <div className="mx-auto flex max-w-2xl items-center gap-3 px-4 h-14">
          <a href={href.learn} aria-label="Close lesson" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-muted hover:bg-sunken hover:text-ink">
            <Icon name="x" />
          </a>
          <div
            className="flex-1 h-2 rounded-full bg-sunken overflow-hidden"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={lesson.pages.length}
            aria-valuenow={step + 1}
            aria-label="Lesson progress"
          >
            <div className="h-full rounded-full bg-accent transition-[width] duration-300" style={{ width: `${((step + 1) / lesson.pages.length) * 100}%` }} />
          </div>
          <span className="w-12 shrink-0 text-right text-sm text-muted tabular-nums">{step + 1}/{lesson.pages.length}</span>
        </div>
      </header>

      <main className="flex-1">
        <div key={step} className="mx-auto w-full max-w-2xl px-4 sm:px-6 py-8 pb-40 rise">
          <p className="eyebrow text-accent">{page.kicker}</p>
          <h1 className="mt-1 mb-6 text-2xl sm:text-3xl font-semibold tracking-tight">{page.title}</h1>
          <LessonBlocks blocks={page.blocks} onQuizSolved={(i) => setSolved((s) => ({ ...s, [`${step}-${i}`]: true }))} />
        </div>
      </main>

      <footer className="fixed bottom-0 inset-x-0 z-20 border-t border-line bg-surface/95 backdrop-blur">
        <div className="mx-auto flex max-w-2xl items-center gap-3 px-4 py-3">
          <button type="button" onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0} className="btn-secondary">
            <Icon name="back" size={18} /> Back
          </button>
          <div className="flex-1 text-center text-sm text-muted">{!pageSolved && 'Answer to continue'}</div>
          {isLast ? (
            <button type="button" onClick={finish} disabled={!pageSolved} className="btn-primary">
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

import { LESSONS, MODULES, lessonWords } from '../data/lessons';
import Icon from '../components/Icon';
import { href } from '../lib/router';
import { useStore } from '../lib/store';

export default function Learn() {
  const { progress, nextLessonId } = useStore();
  const doneCount = LESSONS.filter((l) => progress.completed[l.id]).length;

  return (
    <div className="space-y-10">
      <header>
        <p className="eyebrow">Course</p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight">Lessons</h1>
        <p className="mt-2 text-muted">
          {doneCount} of {LESSONS.length} complete. Every lesson is open, but the order is built so each one prepares the next.
        </p>
      </header>

      {MODULES.map((m) => {
        const lessons = LESSONS.filter((l) => l.module === m.id);
        const done = lessons.filter((l) => progress.completed[l.id]).length;
        return (
          <section key={m.id} aria-labelledby={`m-${m.id}`}>
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 id={`m-${m.id}`} className="text-xl font-semibold">{m.title}</h2>
                <p className="text-sm text-muted mt-0.5 max-w-xl">{m.blurb}</p>
              </div>
              <span className="text-sm text-muted tabular-nums shrink-0">{done}/{lessons.length}</span>
            </div>
            <ol className="mt-4 space-y-2.5">
              {lessons.map((l) => {
                const isDone = !!progress.completed[l.id];
                const isNext = nextLessonId === l.id;
                const n = LESSONS.indexOf(l) + 1;
                const wc = lessonWords(l).length;
                return (
                  <li key={l.id}>
                    <a
                      href={href.lesson(l.id)}
                      className={`card flex items-center gap-4 p-4 sm:p-5 transition-colors hover:border-accent ${isNext ? 'border-accent ring-1 ring-accent/30' : ''}`}
                    >
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
                          isDone ? 'bg-good-soft text-good' : isNext ? 'bg-accent text-accent-ink' : 'bg-sunken text-muted'
                        }`}
                        aria-hidden="true"
                      >
                        {isDone ? <Icon name="check" size={18} /> : n}
                      </span>
                      <span className="flex-1 min-w-0">
                        <span className="block font-semibold">{l.title}</span>
                        <span className="block text-sm text-muted">{l.subtitle}</span>
                        <span className="mt-1 block text-xs text-muted">
                          {l.minutes} min{wc > 0 ? ` · ${wc} words` : ''}
                          {isDone ? ' · completed' : isNext ? ' · up next' : ''}
                        </span>
                      </span>
                      <Icon name="next" className="text-muted shrink-0" />
                    </a>
                  </li>
                );
              })}
            </ol>
          </section>
        );
      })}
    </div>
  );
}

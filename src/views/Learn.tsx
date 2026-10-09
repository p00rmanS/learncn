import { LESSONS, MODULES, lessonWords } from '../data/lessons';
import Icon from '../components/Icon';
import { href } from '../lib/router';
import { useStore } from '../lib/store';

const CN_NUMERALS = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];

export default function Learn() {
  const { progress, nextLessonId } = useStore();
  const doneCount = LESSONS.filter((l) => progress.completed[l.id]).length;

  return (
    <div className="space-y-16">
      <header className="rise">
        <p className="eyebrow">The course</p>
        <h1 className="mt-4 text-[44px] leading-[1.02] sm:text-[60px]">Lessons</h1>
        <p className="mt-5 max-w-xl text-[18px] leading-relaxed text-muted">
          {LESSONS.length} lessons in {MODULES.length} chapters. {doneCount} complete. Every lesson is open, but each one is written to prepare the next.
        </p>
        <div className="mt-6 h-px w-full bg-line">
          <div className="h-px bg-accent transition-[width] duration-700" style={{ width: `${(doneCount / LESSONS.length) * 100}%` }} />
        </div>
      </header>

      {MODULES.map((m, mi) => {
        const lessons = LESSONS.filter((l) => l.module === m.id);
        const done = lessons.filter((l) => progress.completed[l.id]).length;
        return (
          <section key={m.id} aria-labelledby={`m-${m.id}`} className="rise" style={{ ['--i' as string]: Math.min(mi, 4) }}>
            <div className="grid items-end gap-x-8 border-b-2 border-ink pb-5 sm:grid-cols-[auto_1fr_auto]">
              <span className="hanzi hidden text-[64px] font-light leading-none text-ink/25 sm:block" aria-hidden="true">{CN_NUMERALS[mi]}</span>
              <div>
                <p className="eyebrow">Chapter {mi + 1}</p>
                <h2 id={`m-${m.id}`} className="mt-1 text-[30px] sm:text-[36px]">{m.title}</h2>
                <p className="mt-1.5 max-w-xl text-[15px] text-muted">{m.blurb}</p>
              </div>
              <span className="numeral mt-3 text-[15px] tabular-nums text-muted sm:mt-0">
                {done}/{lessons.length}
              </span>
            </div>
            <ol>
              {lessons.map((l) => {
                const isDone = !!progress.completed[l.id];
                const isNext = nextLessonId === l.id;
                const n = LESSONS.indexOf(l) + 1;
                const wc = lessonWords(l).length;
                return (
                  <li key={l.id} className="border-b border-line">
                    <a
                      href={href.lesson(l.id)}
                      className="group -mx-3 flex items-center gap-4 rounded-xl px-3 py-5 transition-colors hover:bg-surface sm:gap-6"
                    >
                      <span className="numeral w-9 shrink-0 text-[26px] font-light tabular-nums text-muted sm:w-12 sm:text-[32px]" aria-hidden="true">
                        {String(n).padStart(2, '0')}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-display text-[20px] font-medium leading-snug sm:text-[22px]">{l.title}</span>
                        <span className="mt-0.5 block text-[14px] text-muted">{l.subtitle}</span>
                        <span className="mt-1.5 block text-[12px] text-muted">
                          {l.minutes} min{wc > 0 ? ` · ${wc} words` : ''}
                        </span>
                      </span>
                      {isDone ? (
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-accent-ink" title="Completed">
                          <Icon name="check" size={16} />
                          <span className="sr-only">Completed</span>
                        </span>
                      ) : isNext ? (
                        <span className="shrink-0 rounded-full bg-ink px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-paper">Up next</span>
                      ) : (
                        <Icon name="arrow" size={18} className="shrink-0 text-muted opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                      )}
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

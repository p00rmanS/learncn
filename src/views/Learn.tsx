import { useMemo, useState } from 'react';
import { MODULES, lessonWords, lessonsFor, moduleTrack, type Track } from '../data/lessons';
import Icon from '../components/Icon';
import Seal from '../components/Seal';
import { href } from '../lib/router';
import { useStore } from '../lib/store';

const CN_NUMERALS = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];

export default function Learn() {
  const { progress, nextLessonId, setSettings } = useStore();
  const track: Track = progress.settings.track;
  const [query, setQuery] = useState('');

  const modules = useMemo(() => MODULES.filter((m) => moduleTrack(m) === track), [track]);
  const trackLessons = useMemo(() => lessonsFor(track), [track]);
  const doneCount = trackLessons.filter((l) => progress.completed[l.id]).length;
  const next = trackLessons.find((l) => l.id === nextLessonId);

  // Open the chapter you are working in. Everything else starts collapsed.
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const isOpen = (id: string, hasNext: boolean) => (query.trim() ? true : open[id] ?? hasNext);

  const q = query.trim().toLowerCase();
  const matches = (title: string, subtitle: string) => !q || title.toLowerCase().includes(q) || subtitle.toLowerCase().includes(q);

  return (
    <div className="space-y-10">
      <header className="rise">
        <p className="eyebrow">The course</p>
        <h1 className="mt-4 text-[44px] leading-[1.02] sm:text-[60px]">Lessons</h1>

        {/* Track switcher */}
        <div className="mt-6 inline-flex rounded-full border border-line p-1" role="group" aria-label="Who is learning?">
          {(
            [
              ['adult', 'Adults and teens'],
              ['kids', 'Little learners'],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              aria-pressed={track === id}
              onClick={() => setSettings({ track: id })}
              className={`min-h-[40px] rounded-full px-5 text-[14px] font-medium transition-colors ${
                track === id ? 'bg-ink text-paper' : 'text-muted hover:text-ink'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <p className="mt-5 max-w-xl text-[18px] leading-relaxed text-muted">
          {track === 'kids'
            ? `${trackLessons.length} playful lessons for children aged 3 to 10, with songs, actions and parent tips. ${doneCount} complete.`
            : `${trackLessons.length} lessons in ${modules.length} chapters. ${doneCount} complete. Every lesson is open, but each one prepares the next.`}
        </p>
        <div className="mt-6 h-px w-full bg-line">
          <div className="h-px bg-accent transition-[width] duration-700" style={{ width: `${(doneCount / Math.max(trackLessons.length, 1)) * 100}%` }} />
        </div>
      </header>

      {/* Continue + search */}
      <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
        {next ? (
          <a href={href.lesson(next.id)} className="group flex items-center gap-4 rounded-2xl bg-ink px-5 py-4 text-paper transition-opacity hover:opacity-90">
            <span className="min-w-0 flex-1">
              <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] opacity-60">
                {progress.resume[next.id] ? 'Continue where you left off' : 'Up next'}
              </span>
              <span className="mt-0.5 block truncate font-display text-[20px] font-medium">{next.title}</span>
            </span>
            <Icon name="arrow" size={20} className="shrink-0 transition-transform group-hover:translate-x-1" />
          </a>
        ) : (
          <div className="rounded-2xl border border-line px-5 py-4 text-muted">You have finished every lesson in this track.</div>
        )}
        <label className="block">
          <span className="sr-only">Search lessons</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search lessons"
            className="min-h-[56px] w-full rounded-2xl border border-line bg-surface px-4 text-[16px] outline-none focus:border-ink sm:w-64"
          />
        </label>
      </div>

      {modules.map((m, mi) => {
        const lessons = lessonsFor(track).filter((l) => l.module === m.id);
        const visible = lessons.filter((l) => matches(l.title, l.subtitle));
        if (q && visible.length === 0) return null;
        const done = lessons.filter((l) => progress.completed[l.id]).length;
        const hasNext = lessons.some((l) => l.id === nextLessonId);
        const expanded = isOpen(m.id, hasNext);
        return (
          <section key={m.id} aria-labelledby={`m-${m.id}`}>
            <button
              type="button"
              onClick={() => setOpen((o) => ({ ...o, [m.id]: !expanded }))}
              aria-expanded={expanded}
              className="grid w-full items-end gap-x-8 border-b-2 border-ink pb-5 text-left sm:grid-cols-[auto_1fr_auto]"
            >
              <span className="hanzi hidden text-[64px] font-light leading-none text-ink/25 sm:block" aria-hidden="true">{CN_NUMERALS[mi]}</span>
              <span>
                <span className="eyebrow block">Chapter {mi + 1}</span>
                <span id={`m-${m.id}`} className="mt-1 block font-display text-[28px] font-semibold leading-tight sm:text-[34px]">{m.title}</span>
                <span className="mt-1.5 block max-w-xl text-[15px] text-muted">{m.blurb}</span>
              </span>
              <span className="mt-3 flex items-center gap-4 sm:mt-0">
                <span className="numeral text-[15px] tabular-nums text-muted">{done}/{lessons.length}</span>
                <Icon name="next" size={20} className={`text-muted transition-transform ${expanded ? 'rotate-90' : ''}`} />
              </span>
            </button>
            {expanded && (
              <div className="rise">
              <ol>
                {visible.map((l) => {
                  const isDone = !!progress.completed[l.id];
                  const isNext = nextLessonId === l.id;
                  const n = trackLessons.indexOf(l) + 1;
                  const wc = lessonWords(l).length;
                  const started = !isDone && progress.resume[l.id] > 0;
                  return (
                    <li key={l.id} className="border-b border-line">
                      <a href={href.lesson(l.id)} className="group -mx-3 flex items-center gap-4 rounded-xl px-3 py-5 transition-colors hover:bg-surface sm:gap-6">
                        <span className="numeral w-9 shrink-0 text-[26px] font-light tabular-nums text-muted sm:w-12 sm:text-[32px]" aria-hidden="true">
                          {String(n).padStart(2, '0')}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block font-display text-[20px] font-medium leading-snug sm:text-[22px]">{l.title}</span>
                          <span className="mt-0.5 block text-[14px] text-muted">{l.subtitle}</span>
                          <span className="mt-1.5 block text-[12px] text-muted">
                            {l.minutes} min{wc > 0 ? ` · ${wc} words` : ''}
                            {started ? ' · in progress' : ''}
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
              {done >= 2 && (
                <a href={href.checkpoint(m.id)} className="group -mx-3 mt-2 flex items-center gap-4 rounded-xl px-3 py-5 transition-colors hover:bg-surface">
                  <Seal char="考" size={40} />
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-[20px] font-medium leading-snug">Chapter checkpoint</span>
                    <span className="block text-[14px] text-muted">
                      {progress.checkpoints[m.id]
                        ? `Best: ${progress.checkpoints[m.id].best} of ${progress.checkpoints[m.id].total} right first time`
                        : 'Ten questions from the lessons you finished. Earn XP and a badge.'}
                    </span>
                  </span>
                  <Icon name="arrow" size={18} className="shrink-0 text-muted transition-transform group-hover:translate-x-1" />
                </a>
              )}
              </div>
            )}
          </section>
        );
      })}

      {q && modules.every((m) => lessonsFor(track).filter((l) => l.module === m.id && matches(l.title, l.subtitle)).length === 0) && (
        <p className="py-10 text-center text-muted">No lessons match "{query}".</p>
      )}
    </div>
  );
}

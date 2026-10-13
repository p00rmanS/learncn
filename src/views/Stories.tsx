import { useMemo, useState } from 'react';
import { LEVEL_LABEL, STORIES, type Story } from '../data/stories';
import Icon from '../components/Icon';
import { href } from '../lib/router';
import { useStore } from '../lib/store';

type Filter = 'all' | Story['level'];

export default function Stories() {
  const { progress } = useStore();
  const kids = progress.settings.track === 'kids';
  const [filter, setFilter] = useState<Filter>('all');

  const list = useMemo(() => {
    const base = STORIES.filter((s) => filter === 'all' || s.level === filter);
    // Show the stories for the chosen learner first.
    const rank = (s: Story) => (kids ? (s.level === 'adult' ? 1 : 0) : s.level === 'adult' ? 0 : 1);
    return [...base].sort((a, b) => rank(a) - rank(b));
  }, [filter, kids]);

  const chips: { id: Filter; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'kinder', label: 'Kinder' },
    { id: 'elementary', label: 'Elementary' },
    { id: 'adult', label: 'Adult beginner' },
  ];

  return (
    <div className="space-y-10">
      <header className="rise">
        <p className="eyebrow">Read and listen</p>
        <h1 className="mt-4 text-[44px] leading-[1.02] sm:text-[60px]">Stories</h1>
        <p className="mt-5 max-w-xl text-[18px] leading-relaxed text-muted">
          Short stories with pinyin, a "say it" guide and an English translation on every line. Tap any line to hear it.
        </p>
      </header>

      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by level">
        {chips.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setFilter(c.id)}
            aria-pressed={filter === c.id}
            className={`min-h-[42px] rounded-full border px-4 text-sm font-medium transition-colors ${
              filter === c.id ? 'border-ink bg-ink text-paper' : 'border-line text-muted hover:border-ink/40 hover:text-ink'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <ul className="border-t-2 border-ink">
        {list.map((s) => {
          const done = !!progress.stories[s.id];
          return (
            <li key={s.id} className="border-b border-line">
              <a href={href.story(s.id)} className="group -mx-3 flex items-center gap-5 rounded-xl px-3 py-6 transition-colors hover:bg-surface">
                <span className="hanzi w-24 shrink-0 text-center text-[30px] font-semibold leading-tight sm:text-[36px]">{s.titleZh}</span>
                <span className="min-w-0 flex-1">
                  <span className="block font-display text-[22px] font-medium leading-snug">{s.title}</span>
                  <span className="mt-0.5 block text-[14px] text-muted">{s.summary}</span>
                  <span className="mt-1.5 block text-[12px] uppercase tracking-[0.14em] text-muted">
                    {LEVEL_LABEL[s.level]} · {s.minutes} min
                  </span>
                </span>
                {done ? (
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-accent-ink" title="Read">
                    <Icon name="check" size={16} />
                    <span className="sr-only">Read</span>
                  </span>
                ) : (
                  <Icon name="arrow" size={18} className="shrink-0 text-muted opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

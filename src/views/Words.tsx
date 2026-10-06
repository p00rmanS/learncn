import { useMemo, useState } from 'react';
import WordCard from '../components/WordCard';
import { ALL_WORDS } from '../data/words';
import { useStore } from '../lib/store';

type Filter = 'all' | 'learned';

const strip = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

export default function Words() {
  const { progress } = useStore();
  const [q, setQ] = useState('');
  const [filter, setFilter] = useState<Filter>('all');

  const results = useMemo(() => {
    const needle = strip(q.trim());
    return ALL_WORDS.filter((w) => {
      if (filter === 'learned' && !progress.deck[w.id]) return false;
      if (!needle) return true;
      return (
        w.hanzi.includes(q.trim()) ||
        strip(w.pinyin).replace(/\s/g, '').includes(needle.replace(/\s/g, '')) ||
        w.english.toLowerCase().includes(needle)
      );
    });
  }, [q, filter, progress.deck]);

  const learned = Object.keys(progress.deck).length;

  return (
    <div className="space-y-6">
      <header>
        <p className="eyebrow">Dictionary</p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight">Words</h1>
        <p className="mt-2 text-muted">Every word in the course, with audio. Search by hanzi, pinyin (tone marks optional) or English.</p>
      </header>

      <div className="space-y-3">
        <label className="block">
          <span className="sr-only">Search words</span>
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search: ni hao, 你好, hello"
            className="block w-full min-h-[48px] rounded-xl border border-line bg-surface px-4 text-[17px] outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
          />
        </label>
        <div className="flex gap-2" role="group" aria-label="Filter">
          {([['all', `All (${ALL_WORDS.length})`], ['learned', `Learned (${learned})`]] as const).map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => setFilter(id)}
              aria-pressed={filter === id}
              className={`min-h-[40px] rounded-full border px-4 text-sm font-medium transition-colors ${filter === id ? 'border-accent bg-accent-soft text-accent' : 'border-line bg-surface text-muted hover:text-ink'}`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {results.length === 0 ? (
        <p className="py-10 text-center text-muted">
          {filter === 'learned' && !q ? 'Finish a lesson and its words will appear here.' : 'No words match that search.'}
        </p>
      ) : (
        <ul className="grid gap-2.5">
          {results.map((w) => (
            <li key={w.id}>
              <WordCard word={w} compact />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

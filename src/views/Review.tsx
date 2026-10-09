import { useEffect, useMemo, useState } from 'react';
import AudioButton from '../components/AudioButton';
import Icon from '../components/Icon';
import { MiniContour } from '../components/ToneGraph';
import { WORD_BY_ID } from '../data/words';
import { href } from '../lib/router';
import { previewInterval, newCard, type Rating } from '../lib/srs';
import { useStore } from '../lib/store';
import { speak } from '../lib/audio';

const GRADES: { r: Rating; label: string; key: string; tone: string }[] = [
  { r: 'again', label: 'Again', key: '1', tone: 'border-bad/50 text-bad hover:bg-bad-soft' },
  { r: 'hard', label: 'Hard', key: '2', tone: 'border-note/50 text-note hover:bg-note-soft' },
  { r: 'good', label: 'Good', key: '3', tone: 'border-accent/50 text-accent hover:bg-accent-soft' },
  { r: 'easy', label: 'Easy', key: '4', tone: 'border-good/50 text-good hover:bg-good-soft' },
];

type Mode = 'listen' | 'read';

export default function Review() {
  const { progress, review, dueIds } = useStore();
  const deckSize = Object.keys(progress.deck).length;

  // Snapshot the queue when the session starts so cards do not shuffle mid-review.
  const [practice, setPractice] = useState(false);
  const [queue, setQueue] = useState<string[] | null>(null);
  const [count, setCount] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const start = (all: boolean) => {
    setPractice(all);
    setQueue(all ? Object.keys(progress.deck) : [...dueIds]);
    setCount(0);
    setRevealed(false);
  };

  const currentId = queue?.[0];
  const word = currentId ? WORD_BY_ID[currentId] : undefined;
  const mode: Mode = useMemo(() => (count % 2 === 0 ? 'listen' : 'read'), [count]);

  const grade = (r: Rating) => {
    if (!queue || !currentId) return;
    if (!practice) review(currentId, r);
    const rest = queue.slice(1);
    setQueue(r === 'again' ? [...rest, currentId] : rest);
    setCount((c) => c + 1);
    setRevealed(false);
  };

  // Auto-play audio on listen cards
  const { settings } = progress;
  useEffect(() => {
    if (word && mode === 'listen' && !revealed) void speak(word.say ?? word.hanzi, settings.rate);
  }, [currentId, mode]); // eslint-disable-line react-hooks/exhaustive-deps

  // Keyboard: Space reveals, 1-4 grade
  useEffect(() => {
    const on = (e: KeyboardEvent) => {
      if (!word || (e.target as HTMLElement)?.tagName === 'INPUT') return;
      if (e.code === 'Space') {
        e.preventDefault();
        setRevealed(true);
      } else if (revealed) {
        const g = GRADES.find((x) => x.key === e.key);
        if (g) grade(g.r);
      }
    };
    window.addEventListener('keydown', on);
    return () => window.removeEventListener('keydown', on);
  });

  /* ── Empty: no words yet ── */
  if (deckSize === 0) {
    return (
      <Empty
        title="Nothing to review yet"
        body="Words join your review deck as you finish lessons. Complete your first lesson and they will show up here."
        action={<a href={href.learn} className="btn-primary">Go to lessons</a>}
      />
    );
  }

  /* ── Not started ── */
  if (queue === null) {
    const nextDue = Math.min(...Object.values(progress.deck).map((c) => c.due));
    return (
      <div className="space-y-8">
        <header>
          <p className="eyebrow">Spaced repetition</p>
          <h1 className="mt-4 text-[44px] leading-[1.02] sm:text-[60px]">Review</h1>
        </header>
        <div className="card p-6 sm:p-8">
          <div className="numeral text-[84px] font-light leading-none tabular-nums">{dueIds.length}</div>
          <p className="mt-1 text-muted">{dueIds.length === 1 ? 'word is' : 'words are'} due now, out of {deckSize} learned.</p>
          {dueIds.length > 0 ? (
            <button type="button" onClick={() => start(false)} className="btn-primary mt-6">
              Start review <Icon name="arrow" size={18} />
            </button>
          ) : (
            <p className="mt-4 text-sm text-muted">
              Nothing is due. Your next word is ready {new Date(nextDue).toLocaleString(undefined, { weekday: 'short', hour: 'numeric', minute: '2-digit' })}.
            </p>
          )}
          <button type="button" onClick={() => start(true)} className={`${dueIds.length > 0 ? 'btn-ghost mt-2' : 'btn-secondary mt-4'}`}>
            Practice all {deckSize} words (does not change schedule)
          </button>
        </div>
        <p className="text-sm text-muted">
          Rate each word honestly: Again if you forgot, Hard if it took effort, Good if you knew it, Easy if it was instant. Missed days never count against you.
        </p>
      </div>
    );
  }

  /* ── Finished ── */
  if (!word) {
    return (
      <Empty
        title={count === 0 ? 'Nothing to review' : `Done. ${count} cards reviewed.`}
        body="Come back when more words are due. In the meantime, a lesson or the Sound Lab keeps your ears sharp."
        action={
          <div className="flex flex-wrap gap-3 justify-center">
            <a href={href.learn} className="btn-primary">Lessons</a>
            <a href={href.sound} className="btn-secondary">Sound Lab</a>
          </div>
        }
        onAgain={() => setQueue(null)}
      />
    );
  }

  const card = progress.deck[word.id] ?? newCard();
  const total = queue.length + count;

  return (
    <div className="mx-auto max-w-xl space-y-6">
      <div className="flex items-center gap-3">
        <button type="button" onClick={() => setQueue(null)} className="btn-ghost min-h-[40px] px-3 text-sm">
          <Icon name="back" size={16} /> End
        </button>
        <div className="flex-1 h-2 rounded-full bg-sunken overflow-hidden" role="progressbar" aria-valuemin={0} aria-valuemax={total} aria-valuenow={count} aria-label="Review progress">
          <div className="h-full bg-accent transition-[width]" style={{ width: `${(count / Math.max(total, 1)) * 100}%` }} />
        </div>
        <span className="text-sm text-muted tabular-nums">{count}/{total}</span>
      </div>

      <div className="card p-6 sm:p-10 text-center min-h-[22rem] flex flex-col items-center justify-center">
        <p className="eyebrow">{mode === 'listen' ? 'Listen. What does it mean?' : 'Read. What does it mean?'}</p>

        <div className="mt-6">
          {mode === 'listen' && !revealed ? (
            <AudioButton text={word.say ?? word.hanzi} size="lg" variant="solid" slow label="Play the word" />
          ) : (
            <div className="hanzi text-[104px] font-bold leading-none sm:text-[128px]">{word.hanzi}</div>
          )}
        </div>

        {revealed ? (
          <div className="mt-6 space-y-1 rise">
            <div className="font-display text-[32px] font-medium">{word.spoken ?? word.pinyin}</div>
            <div className="text-lg text-muted">{word.english}</div>
            {word.tones && (
              <div className="flex justify-center gap-1 pt-1">
                {word.tones.map((t, i) => <MiniContour key={i} tone={t} />)}
              </div>
            )}
            <div className="pt-3"><AudioButton text={word.say ?? word.hanzi} slow label="Play again" /></div>
          </div>
        ) : (
          <button type="button" onClick={() => setRevealed(true)} className="btn-primary mt-8">
            Show answer <span className="hidden sm:inline text-xs opacity-70 ml-1">Space</span>
          </button>
        )}
      </div>

      {revealed && (
        <div className="grid grid-cols-4 gap-2 rise">
          {GRADES.map((g) => (
            <button
              key={g.r}
              type="button"
              onClick={() => grade(g.r)}
              className={`flex flex-col items-center justify-center min-h-[64px] rounded-xl border-2 bg-surface font-semibold transition-colors ${g.tone}`}
            >
              <span>{g.label}</span>
              <span className="text-[11px] font-normal text-muted">{practice ? '' : previewInterval(card, g.r)}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Empty({ title, body, action, onAgain }: { title: string; body: string; action: React.ReactNode; onAgain?: () => void }) {
  return (
    <div className="mx-auto max-w-md py-16 text-center space-y-4">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent-soft text-accent">
        <Icon name="review" size={26} />
      </div>
      <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
      <p className="text-muted">{body}</p>
      <div className="pt-2">{action}</div>
      {onAgain && (
        <button type="button" onClick={onAgain} className="text-sm text-muted underline underline-offset-2 hover:text-ink">
          Back to review home
        </button>
      )}
    </div>
  );
}

import { useCallback, useEffect, useState } from 'react';
import AudioButton from '../components/AudioButton';
import Icon from '../components/Icon';
import ToneGraph from '../components/ToneGraph';
import { Speak } from '../components/LessonBlocks';
import { NO_VOICE_EVENT } from '../components/AudioButton';
import { TONE_INFO } from '../data/tones';
import type { Tone } from '../data/types';
import { speak } from '../lib/audio';
import { useStore } from '../lib/store';

type Tab = 'trainer' | 'initials' | 'pairs' | 'say';

const TABS: { id: Tab; label: string }[] = [
  { id: 'trainer', label: 'Tone trainer' },
  { id: 'initials', label: 'Initials' },
  { id: 'pairs', label: 'Minimal pairs' },
  { id: 'say', label: 'Say it' },
];

/* One syllable in all four tones, each with a common character so the voice reads it correctly. */
const SETS: { base: string; words: { tone: 1 | 2 | 3 | 4; hanzi: string; pinyin: string; english: string }[] }[] = [
  { base: 'ma', words: [
    { tone: 1, hanzi: '妈', pinyin: 'mā', english: 'mom' },
    { tone: 2, hanzi: '麻', pinyin: 'má', english: 'hemp' },
    { tone: 3, hanzi: '马', pinyin: 'mǎ', english: 'horse' },
    { tone: 4, hanzi: '骂', pinyin: 'mà', english: 'to scold' },
  ] },
  { base: 'shu', words: [
    { tone: 1, hanzi: '书', pinyin: 'shū', english: 'book' },
    { tone: 2, hanzi: '熟', pinyin: 'shú', english: 'ripe; familiar' },
    { tone: 3, hanzi: '鼠', pinyin: 'shǔ', english: 'mouse' },
    { tone: 4, hanzi: '树', pinyin: 'shù', english: 'tree' },
  ] },
  { base: 'ba', words: [
    { tone: 1, hanzi: '八', pinyin: 'bā', english: 'eight' },
    { tone: 2, hanzi: '拔', pinyin: 'bá', english: 'to pull out' },
    { tone: 3, hanzi: '把', pinyin: 'bǎ', english: 'to hold; a handle' },
    { tone: 4, hanzi: '爸', pinyin: 'bà', english: 'dad' },
  ] },
  { base: 'tang', words: [
    { tone: 1, hanzi: '汤', pinyin: 'tāng', english: 'soup' },
    { tone: 2, hanzi: '糖', pinyin: 'táng', english: 'sugar' },
    { tone: 3, hanzi: '躺', pinyin: 'tǎng', english: 'to lie down' },
    { tone: 4, hanzi: '烫', pinyin: 'tàng', english: 'scalding hot' },
  ] },
  { base: 'yi', words: [
    { tone: 1, hanzi: '衣', pinyin: 'yī', english: 'clothes' },
    { tone: 2, hanzi: '姨', pinyin: 'yí', english: 'aunt (mother\'s side)' },
    { tone: 3, hanzi: '椅', pinyin: 'yǐ', english: 'chair' },
    { tone: 4, hanzi: '意', pinyin: 'yì', english: 'meaning; idea' },
  ] },
];

/* ───────────── Tone trainer ───────────── */

function pickQuestion(prev?: { s: number; t: number }) {
  let s: number, t: number;
  do {
    s = Math.floor(Math.random() * SETS.length);
    t = Math.floor(Math.random() * 4);
  } while (prev && prev.s === s && prev.t === t);
  return { s, t };
}

function Trainer() {
  const { progress } = useStore();
  const [q, setQ] = useState(() => pickQuestion());
  const [answered, setAnswered] = useState<number | null>(null);
  const [score, setScore] = useState({ right: 0, total: 0 });
  const [started, setStarted] = useState(false);

  const word = SETS[q.s].words[q.t];

  const play = useCallback(async () => {
    const ok = await speak(word.hanzi, progress.settings.rate);
    if (!ok) window.dispatchEvent(new Event(NO_VOICE_EVENT));
  }, [word.hanzi, progress.settings.rate]);

  useEffect(() => {
    if (started) void play();
  }, [q, started]); // eslint-disable-line react-hooks/exhaustive-deps

  const answer = (i: number) => {
    if (answered !== null) return;
    setAnswered(i);
    setScore((s) => ({ right: s.right + (i === q.t ? 1 : 0), total: s.total + 1 }));
  };

  const next = () => {
    setQ((p) => pickQuestion(p));
    setAnswered(null);
  };

  if (!started) {
    return (
      <div className="card p-8 text-center space-y-4">
        <h2 className="text-xl font-semibold">Which tone do you hear?</h2>
        <p className="text-muted max-w-md mx-auto">
          You will hear one syllable. Choose its tone from the four shapes. Aim for 80% and keep going: this is the fastest way to train your ear.
        </p>
        <button type="button" onClick={() => { setStarted(true); }} className="btn-primary">
          Start <Icon name="arrow" size={18} />
        </button>
      </div>
    );
  }

  const pct = score.total ? Math.round((score.right / score.total) * 100) : 0;

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted">Score</span>
        <span className="font-semibold tabular-nums">{score.right}/{score.total}{score.total > 0 && <span className="text-muted font-normal"> · {pct}%</span>}</span>
      </div>

      <div className="card p-6 text-center space-y-4">
        <p className="eyebrow">Listen, then choose</p>
        <div className="flex justify-center"><AudioButton text={word.hanzi} size="lg" variant="solid" slow label="Play the syllable" /></div>
        {answered !== null && (
          <div role="status" className={`rounded-xl p-3 rise ${answered === q.t ? 'bg-good-soft text-good' : 'bg-bad-soft text-bad'}`}>
            <p className="font-semibold">{answered === q.t ? 'Correct' : `Not quite. It was tone ${word.tone}`}</p>
            <p className="text-ink"><span className="hanzi text-xl">{word.hanzi}</span> {word.pinyin} · {word.english}</p>
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3" role="group" aria-label="Choose the tone">
        {([1, 2, 3, 4] as Tone[]).map((t, i) => {
          const isRight = answered !== null && i === q.t;
          const isWrong = answered === i && i !== q.t;
          return (
            <button
              key={t}
              type="button"
              onClick={() => answer(i)}
              disabled={answered !== null && !isRight && !isWrong}
              className={`card p-3 transition-colors ${isRight ? 'border-good bg-good-soft' : isWrong ? 'border-bad bg-bad-soft' : 'hover:border-accent'} ${answered !== null && !isRight && !isWrong ? 'opacity-50' : ''}`}
              aria-label={`${TONE_INFO[t].name}, ${TONE_INFO[t].shape}`}
            >
              <ToneGraph tone={t} width={120} height={72} />
              <div className="mt-1 text-sm font-semibold">Tone {t}</div>
              <div className="text-xs text-muted">{TONE_INFO[t].shape}</div>
            </button>
          );
        })}
      </div>

      {answered !== null && (
        <button type="button" onClick={next} className="btn-primary w-full sm:w-auto rise">
          Next <Icon name="next" size={18} />
        </button>
      )}
    </div>
  );
}

/* ───────────── Initials ───────────── */

const INITIAL_GROUPS: { title: string; hint: string; items: { i: string; hanzi: string; pinyin: string; english: string }[] }[] = [
  { title: 'Lips', hint: 'b and p differ by a puff of air. Same for the pairs below.', items: [
    { i: 'b', hanzi: '八', pinyin: 'bā', english: 'eight' },
    { i: 'p', hanzi: '怕', pinyin: 'pà', english: 'afraid' },
    { i: 'm', hanzi: '妈', pinyin: 'mā', english: 'mom' },
    { i: 'f', hanzi: '发', pinyin: 'fā', english: 'to send' },
  ] },
  { title: 'Tongue tip', hint: 'd is soft, t has a puff.', items: [
    { i: 'd', hanzi: '大', pinyin: 'dà', english: 'big' },
    { i: 't', hanzi: '他', pinyin: 'tā', english: 'he' },
    { i: 'n', hanzi: '你', pinyin: 'nǐ', english: 'you' },
    { i: 'l', hanzi: '来', pinyin: 'lái', english: 'to come' },
  ] },
  { title: 'Back of tongue', hint: 'g is soft, k has a puff.', items: [
    { i: 'g', hanzi: '个', pinyin: 'gè', english: 'general measure word' },
    { i: 'k', hanzi: '看', pinyin: 'kàn', english: 'to look' },
    { i: 'h', hanzi: '好', pinyin: 'hǎo', english: 'good' },
  ] },
  { title: 'j, q, x', hint: 'Light and forward. These never appear with u, only ü.', items: [
    { i: 'j', hanzi: '家', pinyin: 'jiā', english: 'home' },
    { i: 'q', hanzi: '七', pinyin: 'qī', english: 'seven' },
    { i: 'x', hanzi: '西', pinyin: 'xī', english: 'west' },
  ] },
  { title: 'Curled tongue', hint: 'Tongue tip curls slightly back.', items: [
    { i: 'zh', hanzi: '中', pinyin: 'zhōng', english: 'middle' },
    { i: 'ch', hanzi: '吃', pinyin: 'chī', english: 'to eat' },
    { i: 'sh', hanzi: '是', pinyin: 'shì', english: 'to be' },
    { i: 'r', hanzi: '人', pinyin: 'rén', english: 'person' },
  ] },
  { title: 'Tongue forward', hint: 'Tongue tip near the back of the top teeth.', items: [
    { i: 'z', hanzi: '在', pinyin: 'zài', english: 'at; in' },
    { i: 'c', hanzi: '菜', pinyin: 'cài', english: 'dish; vegetable' },
    { i: 's', hanzi: '三', pinyin: 'sān', english: 'three' },
  ] },
];

function Initials() {
  const { progress } = useStore();
  const [active, setActive] = useState<string | null>(null);
  const play = async (id: string, hanzi: string) => {
    setActive(id);
    const ok = await speak(hanzi, progress.settings.rate);
    if (!ok) window.dispatchEvent(new Event(NO_VOICE_EVENT));
  };
  return (
    <div className="space-y-6">
      <p className="text-muted">Tap any card to hear the initial inside a real word. Compare neighbours in the same group.</p>
      {INITIAL_GROUPS.map((g) => (
        <section key={g.title}>
          <h3 className="font-semibold">{g.title}</h3>
          <p className="text-sm text-muted">{g.hint}</p>
          <div className="mt-2 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {g.items.map((it) => (
              <button
                key={it.i}
                type="button"
                onClick={() => play(it.i, it.hanzi)}
                aria-label={`${it.i}: ${it.pinyin}, ${it.english}. Play`}
                className={`card p-3 text-left transition-colors hover:border-accent ${active === it.i ? 'border-accent ring-2 ring-accent/30' : ''}`}
              >
                <div className="flex items-baseline justify-between">
                  <span className="text-2xl font-semibold text-accent">{it.i}</span>
                  <Icon name="volume" size={16} className="text-muted" />
                </div>
                <div className="mt-1"><span className="hanzi text-xl">{it.hanzi}</span> <span className="text-sm">{it.pinyin}</span></div>
                <div className="text-xs text-muted">{it.english}</div>
              </button>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

/* ───────────── Minimal pairs ───────────── */

const PAIRS: { label: string; a: [string, string, string]; b: [string, string, string] }[] = [
  { label: 'Tone 1 vs tone 3', a: ['妈', 'mā', 'mom'], b: ['马', 'mǎ', 'horse'] },
  { label: 'b vs p (puff of air)', a: ['爸', 'bà', 'dad'], b: ['怕', 'pà', 'afraid'] },
  { label: 's vs sh', a: ['四', 'sì', 'four'], b: ['十', 'shí', 'ten'] },
  { label: 's vs sh (same tone)', a: ['是', 'shì', 'to be'], b: ['四', 'sì', 'four'] },
  { label: 'q vs ch', a: ['七', 'qī', 'seven'], b: ['吃', 'chī', 'to eat'] },
  { label: 'x vs sh', a: ['西', 'xī', 'west'], b: ['诗', 'shī', 'poem'] },
  { label: 'u vs ü', a: ['路', 'lù', 'road'], b: ['绿', 'lǜ', 'green'] },
  { label: 'an vs ang', a: ['班', 'bān', 'class'], b: ['帮', 'bāng', 'to help'] },
];

function Pairs() {
  return (
    <div className="space-y-4">
      <p className="text-muted">Play both, then say them out loud. If you can hear the difference, you can say the difference.</p>
      {PAIRS.map((p) => (
        <div key={p.label} className="card p-4">
          <div className="eyebrow mb-3">{p.label}</div>
          <div className="grid grid-cols-2 gap-3">
            {[p.a, p.b].map(([hanzi, pinyin, en]) => (
              <div key={pinyin} className="flex items-center gap-3 rounded-xl bg-sunken p-3">
                <AudioButton text={hanzi} size="md" label={`Play ${pinyin}`} />
                <div>
                  <div className="font-semibold text-lg leading-tight">{pinyin}</div>
                  <div className="text-sm text-muted"><span className="hanzi">{hanzi}</span> · {en}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ───────────── Say it ───────────── */

function Say() {
  const items = SETS.flatMap((s) => s.words);
  const [i, setI] = useState(0);
  const w = items[i];
  return (
    <div className="space-y-4">
      <p className="text-muted">Pick a syllable, hear the model, record yourself, and compare the two.</p>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Choose a syllable">
        {items.map((x, idx) => (
          <button
            key={x.pinyin}
            type="button"
            onClick={() => setI(idx)}
            aria-pressed={idx === i}
            className={`min-h-[40px] min-w-[3.25rem] rounded-lg border px-3 text-sm font-medium transition-colors ${idx === i ? 'border-accent bg-accent-soft text-accent' : 'border-line bg-surface hover:bg-sunken'}`}
          >
            {x.pinyin}
          </button>
        ))}
      </div>
      <Speak key={w.pinyin} block={{ type: 'speak', prompt: `Tone ${w.tone}: ${TONE_INFO[w.tone].shape.toLowerCase()}.`, hanzi: w.hanzi, pinyin: w.pinyin, english: w.english }} />
    </div>
  );
}

/* ───────────── Page ───────────── */

export default function SoundLab() {
  const [tab, setTab] = useState<Tab>('trainer');
  return (
    <div className="space-y-6">
      <header>
        <p className="eyebrow">Practice</p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight">Sound Lab</h1>
        <p className="mt-2 text-muted">Short drills for your ears and mouth. Five minutes a day beats an hour once a week.</p>
      </header>

      <div className="flex gap-1 overflow-x-auto rounded-xl bg-sunken p-1" role="tablist" aria-label="Sound Lab sections">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={tab === t.id}
            onClick={() => setTab(t.id)}
            className={`min-h-[44px] flex-1 whitespace-nowrap rounded-lg px-4 text-sm font-semibold transition-colors ${tab === t.id ? 'bg-surface text-ink shadow-card' : 'text-muted hover:text-ink'}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div role="tabpanel">
        {tab === 'trainer' && <Trainer />}
        {tab === 'initials' && <Initials />}
        {tab === 'pairs' && <Pairs />}
        {tab === 'say' && <Say />}
      </div>
    </div>
  );
}

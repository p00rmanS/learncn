import { useEffect, useRef, useState, type ReactNode } from 'react';
import type { Block, DialogueLine } from '../data/types';
import { TONE_INFO } from '../data/tones';
import AudioButton, { NO_VOICE_EVENT } from './AudioButton';
import Icon from './Icon';
import Seal from './Seal';
import ToneGraph from './ToneGraph';
import WordCard from './WordCard';
import { speak, startRecording, stopSpeaking } from '../lib/audio';
import { useStore } from '../lib/store';

/* ───────────── Callout (pro tip, remember, note) ───────────── */

function Callout({ seal, label, tone, children }: { seal: string; label: string; tone: 'ink' | 'sunken' | 'note'; children: ReactNode }) {
  const skin =
    tone === 'ink'
      ? 'border-l-[3px] border-ink bg-surface pl-5 pr-4'
      : tone === 'note'
      ? 'bg-note-soft px-5'
      : 'bg-sunken px-5';
  return (
    <aside className={`flex gap-4 py-4 ${skin} ${tone === 'ink' ? '' : 'rounded-xl'}`}>
      <Seal char={seal} size={30} className="mt-0.5" />
      <div className="min-w-0">
        <div className="eyebrow mb-1">{label}</div>
        <p className="text-[16px] leading-relaxed">{children}</p>
      </div>
    </aside>
  );
}

/* ───────────── Quiz ───────────── */

function Quiz({ block, onSolved }: { block: Extract<Block, { type: 'quiz' }>; onSolved: () => void }) {
  const [wrong, setWrong] = useState<number[]>([]);
  const [solved, setSolved] = useState(false);

  const pick = (i: number) => {
    if (solved || wrong.includes(i)) return;
    if (i === block.answer) {
      setSolved(true);
      onSolved();
    } else {
      setWrong((w) => [...w, i]);
    }
  };

  return (
    <div className="space-y-5">
      <p className="font-display text-[22px] leading-snug sm:text-[26px]">{block.question}</p>
      {block.audio && (
        <div className="flex items-center gap-4">
          <AudioButton text={block.audio} label="Play the audio" slow size="lg" variant="solid" />
          <span className="text-sm text-muted">Play, then choose. The clock plays it slowly.</span>
        </div>
      )}
      <div className="grid gap-3" role="group" aria-label="Answer choices">
        {block.options.map((opt, i) => {
          const isWrong = wrong.includes(i);
          const isRight = solved && i === block.answer;
          return (
            <button
              key={i}
              type="button"
              onClick={() => pick(i)}
              disabled={solved && !isRight}
              aria-pressed={isRight || isWrong}
              className={`flex min-h-[58px] items-center gap-4 rounded-xl border px-4 text-left text-[18px] transition-colors ${
                isRight
                  ? 'border-good bg-good-soft'
                  : isWrong
                  ? 'border-bad/40 bg-bad-soft text-muted line-through decoration-bad/40'
                  : 'border-line bg-surface hover:border-ink hover:bg-sunken'
              } ${solved && !isRight ? 'opacity-45' : ''}`}
            >
              <span
                className={`numeral flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-[14px] ${
                  isRight ? 'border-good bg-good text-paper' : isWrong ? 'border-bad text-bad' : 'border-line text-muted'
                }`}
              >
                {isRight ? <Icon name="check" size={16} /> : isWrong ? <Icon name="x" size={14} /> : String.fromCharCode(65 + i)}
              </span>
              <span className="hanzi !font-normal">{opt}</span>
            </button>
          );
        })}
      </div>
      {(solved || wrong.length > 0) && (
        <div role="status" className={`rounded-xl px-5 py-4 text-[15px] rise ${solved ? 'bg-good-soft text-good' : 'bg-bad-soft text-bad'}`}>
          <p className="font-display text-[18px] font-semibold">{solved ? 'Correct' : 'Not quite. Try another.'}</p>
          {solved && <p className="mt-1 text-ink">{block.explain}</p>}
        </div>
      )}
    </div>
  );
}

/* ───────────── Speak & record ───────────── */

export function Speak({ block }: { block: Extract<Block, { type: 'speak' }> }) {
  const [state, setState] = useState<'idle' | 'recording' | 'done'>('idle');
  const [url, setUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const rec = useRef<{ stop: () => Promise<Blob> } | null>(null);

  useEffect(() => () => { if (url) URL.revokeObjectURL(url); }, [url]);
  useEffect(() => () => { void rec.current?.stop().catch(() => undefined); }, []);

  const start = async () => {
    setError(null);
    try {
      if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === 'undefined') throw new Error('unsupported');
      rec.current = await startRecording();
      setState('recording');
    } catch {
      setError('Microphone not available. Allow mic access in your browser, or just say it out loud, which still counts.');
    }
  };

  const stop = async () => {
    if (!rec.current) return;
    const blob = await rec.current.stop();
    rec.current = null;
    setUrl(URL.createObjectURL(blob));
    setState('done');
  };

  return (
    <div className="card p-6 space-y-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="hanzi text-[40px] leading-tight sm:text-[48px]">{block.hanzi}</div>
          <div className="mt-1 font-display text-xl">{block.pinyin}</div>
          <div className="text-muted">{block.english}</div>
        </div>
        <AudioButton text={block.hanzi} label={`Hear ${block.hanzi}`} slow size="lg" variant="solid" />
      </div>
      <p className="text-sm text-muted">{block.prompt}</p>
      <div className="flex flex-wrap items-center gap-3">
        {state !== 'recording' ? (
          <button type="button" onClick={start} className="btn-secondary">
            <Icon name="mic" /> {state === 'done' ? 'Record again' : 'Record yourself'}
          </button>
        ) : (
          <button type="button" onClick={stop} className="btn bg-accent text-accent-ink hover:opacity-90">
            <Icon name="stop" size={18} /> Stop
          </button>
        )}
        {state === 'recording' && (
          <span className="flex items-center gap-2 text-sm font-medium text-accent" role="status">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" /> Recording
          </span>
        )}
      </div>
      {url && (
        <div className="space-y-1">
          <div className="text-sm text-muted">Listen to yourself, then to the model above. Do the pitch shapes match?</div>
          <audio controls src={url} className="w-full" />
        </div>
      )}
      {error && <p role="alert" className="text-sm text-note">{error}</p>}
    </div>
  );
}

/* ───────────── Dialogue ───────────── */

function Dialogue({ block }: { block: Extract<Block, { type: 'dialogue' }> }) {
  const { progress } = useStore();
  const [showEnglish, setShowEnglish] = useState(true);
  const [playing, setPlaying] = useState<number | null>(null);
  const cancel = useRef(false);

  useEffect(() => () => { cancel.current = true; stopSpeaking(); }, []);

  const playAll = async () => {
    cancel.current = false;
    for (let i = 0; i < block.lines.length; i++) {
      if (cancel.current) break;
      setPlaying(i);
      const ok = await speak(block.lines[i].hanzi, progress.settings.rate);
      if (!ok) {
        window.dispatchEvent(new Event(NO_VOICE_EVENT));
        break;
      }
      await new Promise((r) => setTimeout(r, 350));
    }
    setPlaying(null);
  };

  const stopAll = () => {
    cancel.current = true;
    stopSpeaking();
    setPlaying(null);
  };

  const showPinyin = progress.settings.pinyin === 'always';

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3 border-b border-line pb-3">
        <h3 className="text-2xl">{block.title}</h3>
        <div className="flex items-center gap-1">
          <button type="button" onClick={() => setShowEnglish((s) => !s)} className="btn-ghost min-h-[40px] px-3 text-sm">
            {showEnglish ? 'Hide English' : 'Show English'}
          </button>
          {playing === null ? (
            <button type="button" onClick={playAll} className="btn-secondary min-h-[40px] px-4 text-sm">
              <Icon name="play" size={14} /> Play all
            </button>
          ) : (
            <button type="button" onClick={stopAll} className="btn-secondary min-h-[40px] px-4 text-sm">
              <Icon name="stop" size={14} /> Stop
            </button>
          )}
        </div>
      </div>
      <ul className="space-y-1">
        {block.lines.map((l: DialogueLine, i) => (
          <li key={i} className={`flex items-center gap-4 rounded-xl px-3 py-3.5 transition-colors ${playing === i ? 'bg-accent-soft' : ''}`}>
            <span
              className="numeral flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink/30 text-[13px] font-medium"
              aria-label={`Speaker ${l.speaker}`}
            >
              {l.speaker}
            </span>
            <div className="min-w-0 flex-1">
              <div className="hanzi text-[22px] leading-snug">{l.hanzi}</div>
              {showPinyin && <div className="text-[15px] text-muted">{l.pinyin}</div>}
              {showEnglish && <div className="text-[14px] italic text-muted">{l.english}</div>}
            </div>
            <AudioButton text={l.hanzi} label={`Play line ${i + 1}`} size="sm" />
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ───────────── Tones ───────────── */

function Tones({ block }: { block: Extract<Block, { type: 'tones' }> }) {
  const { progress } = useStore();
  const [active, setActive] = useState<number | null>(null);

  const play = async (i: number, text: string) => {
    setActive(i);
    const ok = await speak(text, progress.settings.rate);
    if (!ok) window.dispatchEvent(new Event(NO_VOICE_EVENT));
  };

  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {block.items.map(({ tone, word }, i) => {
        const info = TONE_INFO[tone];
        return (
          <button
            key={word.id}
            type="button"
            onClick={() => play(i, word.hanzi)}
            aria-label={`${info.name}, ${info.shape}. Play ${word.pinyin}, ${word.english}`}
            className={`card p-4 text-left transition-colors hover:border-ink ${active === i ? 'border-ink bg-surface' : ''}`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">{tone === 0 ? 'Neutral' : `Tone ${tone}`}</span>
              <Icon name="volume" size={16} className={active === i ? 'text-accent' : 'text-muted'} />
            </div>
            <div className="mt-2 flex justify-center">
              <ToneGraph key={active === i ? 'a' : 'b'} tone={tone} width={140} height={84} />
            </div>
            <div className="mt-1 text-center text-[12px] text-muted">{info.shape}</div>
            <div className="mt-3 text-center">
              <div className="font-display text-[28px] font-medium leading-none">{word.pinyin}</div>
              <div className="hanzi mt-1.5 text-[17px] text-muted">{word.hanzi} · {word.english}</div>
            </div>
          </button>
        );
      })}
    </div>
  );
}

/* ───────────── My name ───────────── */

function MyName() {
  const { progress, setSettings } = useStore();
  const name = progress.settings.name;
  const line = `我叫${name || '…'}。`;

  return (
    <div className="card p-6 space-y-5">
      <label className="block">
        <span className="eyebrow">Your name</span>
        <input
          value={name}
          onChange={(e) => setSettings({ name: e.target.value.slice(0, 24) })}
          placeholder="e.g. James"
          autoComplete="given-name"
          className="mt-2 block min-h-[52px] w-full rounded-xl border border-line bg-paper px-4 font-display text-xl outline-none focus:border-ink"
        />
      </label>
      <div className="flex items-center justify-between gap-4 border-t border-line pt-5">
        <div>
          <div className="hanzi text-[40px] leading-tight">{line}</div>
          <div className="font-display text-lg">Wǒ jiào {name || '…'}.</div>
          <div className="text-sm text-muted">My name is {name || '…'}.</div>
        </div>
        {name && <AudioButton text={`我叫${name}。`} size="lg" variant="solid" label="Hear your sentence" slow />}
      </div>
    </div>
  );
}

/* ───────────── Dispatcher ───────────── */

export default function LessonBlocks({ blocks, onQuizSolved }: { blocks: Block[]; onQuizSolved: (index: number) => void }) {
  const { progress } = useStore();

  return (
    <div className="space-y-7">
      {blocks.map((b, i) => {
        switch (b.type) {
          case 'text':
            return (
              <div key={i} className="space-y-4 text-[18px] leading-[1.7]">
                {b.title && <h3 className="text-2xl">{b.title}</h3>}
                {b.body.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            );
          case 'taglish':
            return progress.settings.taglish ? (
              <aside key={i} className="rounded-xl border border-accent/30 bg-accent-soft px-5 py-4">
                <span className="inline-block rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-accent-ink">Taglish</span>
                <p className="mt-2 text-[16px] leading-relaxed">{b.body}</p>
              </aside>
            ) : null;
          case 'tip':
            return (
              <Callout key={i} seal="注" label={b.label} tone="note">
                {b.body}
              </Callout>
            );
          case 'pro':
            return (
              <Callout key={i} seal="妙" label="Pro tip" tone="ink">
                {b.body}
              </Callout>
            );
          case 'remember':
            return (
              <Callout key={i} seal="记" label="How to remember" tone="sunken">
                {b.body}
              </Callout>
            );
          case 'table':
            return (
              <figure key={i}>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-[16px]">
                    <thead>
                      <tr className="border-b-2 border-ink">
                        {b.head.map((h) => (
                          <th key={h} className="eyebrow !text-ink px-3 py-2.5 first:pl-0">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {b.rows.map((r, ri) => (
                        <tr key={ri} className="border-b border-line">
                          {r.map((c, ci) => (
                            <td key={ci} className={`hanzi px-3 py-3.5 align-top first:pl-0 ${ci === 0 ? 'text-[19px] !font-semibold' : '!font-normal text-ink/85'}`}>{c}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {b.caption && <figcaption className="mt-3 text-sm italic text-muted">{b.caption}</figcaption>}
              </figure>
            );
          case 'tones':
            return <Tones key={i} block={b} />;
          case 'vocab':
            return (
              <div key={i}>
                {b.title && <h3 className="mb-1 text-2xl">{b.title}</h3>}
                <div className="divide-y divide-line border-y border-line">
                  {b.words.map((w) => (
                    <WordCard key={w.id} word={w} />
                  ))}
                </div>
              </div>
            );
          case 'pairs':
            return (
              <div key={i} className="space-y-6">
                {b.title && <h3 className="text-2xl">{b.title}</h3>}
                {b.pairs.map((p, j) => (
                  <div key={j}>
                    <div className="grid gap-x-8 border-y border-line sm:grid-cols-2 sm:divide-x sm:divide-line">
                      <div className="sm:pr-4"><WordCard word={p.a} compact /></div>
                      <div className="border-t border-line sm:border-t-0 sm:pl-6"><WordCard word={p.b} compact /></div>
                    </div>
                    <p className="mt-2.5 text-sm italic text-muted">{p.note}</p>
                  </div>
                ))}
              </div>
            );
          case 'dialogue':
            return <Dialogue key={i} block={b} />;
          case 'quiz':
            return <Quiz key={i} block={b} onSolved={() => onQuizSolved(i)} />;
          case 'speak':
            return <Speak key={i} block={b} />;
          case 'myname':
            return <MyName key={i} />;
        }
      })}
    </div>
  );
}

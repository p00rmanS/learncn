import { useEffect, useRef, useState } from 'react';
import type { Block, DialogueLine } from '../data/types';
import { TONE_INFO } from '../data/tones';
import AudioButton, { NO_VOICE_EVENT } from './AudioButton';
import Icon from './Icon';
import ToneGraph from './ToneGraph';
import WordCard from './WordCard';
import { speak, startRecording, stopSpeaking } from '../lib/audio';
import { useStore } from '../lib/store';

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
    <div className="space-y-4">
      <p className="text-lg font-medium">{block.question}</p>
      {block.audio && (
        <div className="flex items-center gap-3">
          <AudioButton text={block.audio} label="Play the audio" slow size="lg" variant="solid" />
          <span className="text-sm text-muted">Play, then choose. Use the clock button for a slow version.</span>
        </div>
      )}
      <div className="grid gap-2.5" role="group" aria-label="Answer choices">
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
              className={`flex items-center gap-3 text-left min-h-[52px] px-4 rounded-xl border-2 text-[17px] transition-colors ${
                isRight
                  ? 'border-good bg-good-soft'
                  : isWrong
                  ? 'border-bad/60 bg-bad-soft text-muted line-through decoration-bad/50'
                  : 'border-line bg-surface hover:border-accent hover:bg-accent-soft'
              } ${solved && !isRight ? 'opacity-50' : ''}`}
            >
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-sm font-semibold ${
                  isRight ? 'border-good bg-good text-surface' : isWrong ? 'border-bad text-bad' : 'border-line text-muted'
                }`}
              >
                {isRight ? <Icon name="check" size={16} /> : isWrong ? <Icon name="x" size={14} /> : String.fromCharCode(65 + i)}
              </span>
              <span className="hanzi">{opt}</span>
            </button>
          );
        })}
      </div>
      {(solved || wrong.length > 0) && (
        <div role="status" className={`rounded-xl p-4 text-[15px] rise ${solved ? 'bg-good-soft text-good' : 'bg-bad-soft text-bad'}`}>
          <p className="font-semibold">{solved ? 'Correct' : 'Not quite, try another'}</p>
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
    <div className="card p-5 space-y-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="hanzi text-4xl font-semibold">{block.hanzi}</div>
          <div className="text-lg mt-1">{block.pinyin}</div>
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
          <button type="button" onClick={stop} className="btn bg-bad text-surface hover:opacity-90">
            <Icon name="stop" size={18} /> Stop
          </button>
        )}
        {state === 'recording' && <span className="text-sm text-bad font-medium" role="status">Recording…</span>}
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
    <div className="space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="font-semibold">{block.title}</h3>
        <div className="flex items-center gap-2">
          <button type="button" onClick={() => setShowEnglish((s) => !s)} className="btn-ghost min-h-[40px] px-3 text-sm">
            {showEnglish ? 'Hide English' : 'Show English'}
          </button>
          {playing === null ? (
            <button type="button" onClick={playAll} className="btn-secondary min-h-[40px] px-3 text-sm">
              <Icon name="play" size={16} /> Play all
            </button>
          ) : (
            <button type="button" onClick={stopAll} className="btn-secondary min-h-[40px] px-3 text-sm">
              <Icon name="stop" size={16} /> Stop
            </button>
          )}
        </div>
      </div>
      <ul className="space-y-2.5">
        {block.lines.map((l: DialogueLine, i) => (
          <li key={i} className={`card p-4 flex items-center gap-4 transition-colors ${playing === i ? 'border-accent bg-accent-soft' : ''}`}>
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sunken text-sm font-semibold text-muted" aria-label={`Speaker ${l.speaker}`}>
              {l.speaker}
            </span>
            <div className="flex-1 min-w-0">
              <div className="hanzi text-xl font-medium">{l.hanzi}</div>
              {showPinyin && <div className="text-muted">{l.pinyin}</div>}
              {showEnglish && <div className="text-sm text-muted italic">{l.english}</div>}
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
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {block.items.map(({ tone, word }, i) => {
        const info = TONE_INFO[tone];
        return (
          <button
            key={word.id}
            type="button"
            onClick={() => play(i, word.hanzi)}
            aria-label={`${info.name}, ${info.shape}. Play ${word.pinyin}, ${word.english}`}
            className={`card p-4 text-left transition-colors hover:border-accent ${active === i ? 'border-accent ring-2 ring-accent/30' : ''}`}
          >
            <div className="flex items-center justify-between text-sm">
              <span className="font-semibold">{info.name}</span>
              <Icon name="volume" size={18} className="text-accent" />
            </div>
            <div className="mt-2 flex justify-center">
              <ToneGraph tone={tone} width={140} height={84} />
            </div>
            <div className="mt-2 text-sm text-muted text-center">{info.shape}</div>
            <div className="mt-3 text-center">
              <div className="text-2xl font-semibold">{word.pinyin}</div>
              <div className="hanzi text-lg text-muted">{word.hanzi} · {word.english}</div>
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
    <div className="card p-5 space-y-4">
      <label className="block">
        <span className="text-sm font-medium text-muted">Your name</span>
        <input
          value={name}
          onChange={(e) => setSettings({ name: e.target.value.slice(0, 24) })}
          placeholder="e.g. James"
          autoComplete="given-name"
          className="mt-1 block w-full min-h-[48px] rounded-xl border border-line bg-paper px-4 text-lg outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
        />
      </label>
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="hanzi text-3xl font-semibold">{line}</div>
          <div className="text-muted">Wǒ jiào {name || '…'}.</div>
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
    <div className="space-y-5">
      {blocks.map((b, i) => {
        switch (b.type) {
          case 'text':
            return (
              <div key={i} className="space-y-3 text-[17px] leading-relaxed">
                {b.title && <h3 className="font-semibold">{b.title}</h3>}
                {b.body.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            );
          case 'taglish':
            return progress.settings.taglish ? (
              <aside key={i} className="rounded-xl border border-accent/30 bg-accent-soft p-4">
                <div className="eyebrow text-accent mb-1">In Taglish</div>
                <p className="text-[16px] leading-relaxed">{b.body}</p>
              </aside>
            ) : null;
          case 'tip':
            return (
              <aside key={i} className="rounded-xl border border-note/30 bg-note-soft p-4">
                <div className="eyebrow text-note mb-1">{b.label}</div>
                <p className="text-[16px] leading-relaxed">{b.body}</p>
              </aside>
            );
          case 'pro':
            return (
              <aside key={i} className="rounded-xl border-l-4 border-accent bg-surface p-4 shadow-card border-y border-r border-y-line border-r-line">
                <div className="eyebrow text-accent mb-1">Pro tip</div>
                <p className="text-[16px] leading-relaxed">{b.body}</p>
              </aside>
            );
          case 'remember':
            return (
              <aside key={i} className="rounded-xl bg-sunken p-4">
                <div className="eyebrow mb-1">How to remember</div>
                <p className="text-[16px] leading-relaxed">{b.body}</p>
              </aside>
            );
          case 'table':
            return (
              <figure key={i} className="card overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-[15px]">
                    <thead className="bg-sunken text-muted">
                      <tr>
                        {b.head.map((h) => (
                          <th key={h} className="px-4 py-2.5 font-semibold">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {b.rows.map((r, ri) => (
                        <tr key={ri} className="border-t border-line">
                          {r.map((c, ci) => (
                            <td key={ci} className={`px-4 py-3 align-top ${ci === 0 ? 'font-semibold hanzi' : 'hanzi'}`}>{c}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {b.caption && <figcaption className="px-4 py-2.5 text-sm text-muted border-t border-line">{b.caption}</figcaption>}
              </figure>
            );
          case 'tones':
            return <Tones key={i} block={b} />;
          case 'vocab':
            return (
              <div key={i} className="space-y-2.5">
                {b.title && <h3 className="font-semibold">{b.title}</h3>}
                {b.words.map((w) => (
                  <WordCard key={w.id} word={w} />
                ))}
              </div>
            );
          case 'pairs':
            return (
              <div key={i} className="space-y-4">
                {b.title && <h3 className="font-semibold">{b.title}</h3>}
                {b.pairs.map((p, j) => (
                  <div key={j} className="space-y-2">
                    <div className="grid sm:grid-cols-2 gap-2.5">
                      <WordCard word={p.a} compact />
                      <WordCard word={p.b} compact />
                    </div>
                    <p className="text-sm text-muted px-1">{p.note}</p>
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

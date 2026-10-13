import { useEffect, useRef, useState } from 'react';
import { LEVEL_LABEL, STORIES } from '../data/stories';
import type { Word } from '../data/types';
import AudioButton, { NO_VOICE_EVENT } from '../components/AudioButton';
import Icon from '../components/Icon';
import { Callout, Quiz } from '../components/LessonBlocks';
import WordCard from '../components/WordCard';
import { href } from '../lib/router';
import { speak, stopSpeaking } from '../lib/audio';
import { respellLine } from '../lib/pronounce';
import { useStore } from '../lib/store';

function Toggle({ on, onClick, children }: { on: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={on}
      className={`min-h-[40px] rounded-full border px-4 text-[13px] font-medium transition-colors ${
        on ? 'border-ink bg-ink text-paper' : 'border-line text-muted hover:border-ink/40 hover:text-ink'
      }`}
    >
      {children}
    </button>
  );
}

export default function StoryReader({ storyId }: { storyId: string }) {
  const story = STORIES.find((s) => s.id === storyId);
  const { progress, completeStory } = useStore();
  const [showPinyin, setShowPinyin] = useState(true);
  const [showSay, setShowSay] = useState(progress.settings.showPronounce);
  const [showEnglish, setShowEnglish] = useState(true);
  const [playing, setPlaying] = useState<number | null>(null);
  const [solved, setSolved] = useState<Record<number, true>>({});
  const [finished, setFinished] = useState(false);
  const cancel = useRef(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      cancel.current = true;
      stopSpeaking();
    };
  }, [storyId]);

  if (!story) {
    return (
      <div className="py-20 text-center">
        <p className="font-display text-2xl">That story does not exist.</p>
        <a href={href.stories} className="btn-primary mt-6">Back to stories</a>
      </div>
    );
  }

  const playLine = async (i: number) => {
    cancel.current = true;
    stopSpeaking();
    setPlaying(i);
    const ok = await speak(story.lines[i].zh, progress.settings.rate);
    if (!ok) window.dispatchEvent(new Event(NO_VOICE_EVENT));
    setPlaying(null);
  };

  const playAll = async () => {
    cancel.current = false;
    for (let i = 0; i < story.lines.length; i++) {
      if (cancel.current) break;
      setPlaying(i);
      const ok = await speak(story.lines[i].zh, progress.settings.rate);
      if (!ok) {
        window.dispatchEvent(new Event(NO_VOICE_EVENT));
        break;
      }
      await new Promise((r) => setTimeout(r, 450));
    }
    setPlaying(null);
  };

  const stopAll = () => {
    cancel.current = true;
    stopSpeaking();
    setPlaying(null);
  };

  const words: Word[] = story.words.map((w, i) => ({ id: `${story.id}-${i}`, hanzi: w.zh, pinyin: w.py, english: w.en }));
  const allSolved = story.questions.every((_, i) => solved[i]);
  const done = !!progress.stories[story.id];

  return (
    <article className="space-y-12">
      <header className="rise">
        <a href={href.stories} className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink">
          <Icon name="back" size={16} /> All stories
        </a>
        <p className="eyebrow mt-6">
          {LEVEL_LABEL[story.level]} · {story.minutes} min
        </p>
        <h1 className="mt-3 text-[40px] leading-[1.05] sm:text-[56px]">{story.title}</h1>
        <p className="hanzi mt-2 text-[28px] text-muted">{story.titleZh}</p>
      </header>

      {/* Controls */}
      <div className="sticky top-0 z-20 -mx-5 border-b border-line bg-paper/95 px-5 py-3 backdrop-blur sm:-mx-8 sm:px-8 lg:static lg:mx-0 lg:border-0 lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
        <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Reading options">
          <Toggle on={showPinyin} onClick={() => setShowPinyin((v) => !v)}>Pinyin</Toggle>
          <Toggle on={showSay} onClick={() => setShowSay((v) => !v)}>Say it</Toggle>
          <Toggle on={showEnglish} onClick={() => setShowEnglish((v) => !v)}>English</Toggle>
          <span className="flex-1" />
          {playing === null ? (
            <button type="button" onClick={playAll} className="btn-primary min-h-[42px] px-5 text-sm">
              <Icon name="play" size={14} /> Listen to the story
            </button>
          ) : (
            <button type="button" onClick={stopAll} className="btn-secondary min-h-[42px] px-5 text-sm">
              <Icon name="stop" size={14} /> Stop
            </button>
          )}
        </div>
      </div>

      {/* The story */}
      <ol className="space-y-2">
        {story.lines.map((l, i) => (
          <li key={i}>
            <div className={`flex items-start gap-4 rounded-2xl px-4 py-4 transition-colors sm:gap-5 sm:px-5 ${playing === i ? 'bg-accent-soft' : 'hover:bg-surface'}`}>
              <span className="mt-2 w-6 shrink-0 text-right text-[12px] tabular-nums text-muted">{i + 1}</span>
              <div className="min-w-0 flex-1">
                <p className="hanzi text-[28px] leading-snug sm:text-[34px]">{l.zh}</p>
                {showPinyin && <p className="mt-1 font-display text-[18px] text-muted">{l.py}</p>}
                {showSay && (
                  <p className="mt-0.5 text-[14px] text-muted">
                    Say: <span className="italic text-ink">{respellLine(l.py)}</span>
                  </p>
                )}
                {showEnglish && <p className="mt-1.5 text-[15px] italic text-muted">{l.en}</p>}
              </div>
              <button
                type="button"
                onClick={() => playLine(i)}
                aria-label={`Play line ${i + 1}`}
                className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
              >
                <Icon name="volume" size={18} />
              </button>
            </div>
          </li>
        ))}
      </ol>

      {/* Tips */}
      <section className="space-y-5">
        <Callout seal="妙" label="Pro tip" tone="ink">{story.proTip}</Callout>
        <div>
          <h2 className="text-[26px]">How to pronounce the tricky parts</h2>
          <ul className="mt-3 divide-y divide-line border-y border-line">
            {story.focus.map((f) => (
              <li key={f.py} className="flex flex-wrap items-baseline gap-x-5 gap-y-1 py-4">
                <span className="font-display text-[24px] font-medium">{f.py}</span>
                <span className="text-[15px] text-muted">
                  Say: <span className="italic text-ink">{respellLine(f.py)}</span>
                </span>
                <span className="basis-full text-[14px] text-muted">{f.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Words */}
      <section>
        <h2 className="text-[26px]">Words in this story</h2>
        <div className="mt-3 divide-y divide-line border-y border-line">
          {words.map((w) => (
            <WordCard key={w.id} word={w} compact />
          ))}
        </div>
      </section>

      {/* Questions */}
      <section className="space-y-8">
        <h2 className="text-[26px]">Did you understand?</h2>
        {story.questions.map((q, i) => (
          <Quiz key={i} block={{ type: 'quiz', ...q }} onSolved={() => setSolved((s) => ({ ...s, [i]: true }))} />
        ))}
        <div className="flex items-center gap-4 border-t border-line pt-6">
          {finished || done ? (
            <p className="flex items-center gap-2 font-display text-[20px] text-good">
              <Icon name="check" size={20} /> Story complete
            </p>
          ) : (
            <button
              type="button"
              disabled={!allSolved}
              onClick={() => {
                completeStory(story.id);
                setFinished(true);
              }}
              className="btn-seal"
            >
              Finish story <Icon name="check" size={18} />
            </button>
          )}
          {!allSolved && !done && <span className="text-sm text-muted">Answer both questions to finish.</span>}
          <span className="flex-1" />
          <AudioButton text={story.lines.map((l) => l.zh).join('')} label="Play the whole story" slow variant="soft" />
        </div>
      </section>
    </article>
  );
}

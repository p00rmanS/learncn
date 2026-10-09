import { useState } from 'react';
import type { Word } from '../data/types';
import AudioButton from './AudioButton';
import { MiniContour } from './ToneGraph';
import { useStore } from '../lib/store';

/** A dictionary-style row: large serif hanzi, pinyin, meaning. Stack inside a divided list. */
export default function WordCard({ word, compact = false }: { word: Word; compact?: boolean }) {
  const { progress } = useStore();
  const [revealed, setRevealed] = useState(false);
  const showPinyin = progress.settings.pinyin === 'always' || revealed;

  return (
    <div className="flex items-center gap-4 py-4 sm:gap-6 sm:py-5">
      <div className={`hanzi shrink-0 text-center leading-none ${compact ? 'w-20 text-[34px]' : 'w-24 text-[44px]'}`}>{word.hanzi}</div>
      <div className="min-w-0 flex-1">
        {showPinyin ? (
          <div className="flex flex-wrap items-baseline gap-x-2.5">
            <span className="font-display text-[22px] font-medium leading-tight">{word.pinyin}</span>
            {word.spoken && <span className="text-sm text-muted">said “{word.spoken}”</span>}
          </div>
        ) : (
          <button type="button" onClick={() => setRevealed(true)} className="text-sm text-accent underline underline-offset-4">
            Show pinyin
          </button>
        )}
        <div className="text-[15px] text-muted">{word.english}</div>
        {word.literal && <div className="mt-0.5 text-[13px] italic text-muted">Literally: {word.literal}</div>}
        {word.note && <div className="mt-1 text-[13px] text-muted">{word.note}</div>}
        {word.tones && showPinyin && (
          <div className="mt-2 flex items-center gap-1.5" aria-label="Tone shape per syllable">
            {word.tones.map((t, i) => (
              <MiniContour key={i} tone={t} />
            ))}
          </div>
        )}
      </div>
      <AudioButton text={word.say ?? word.hanzi} label={`Play ${word.hanzi}, ${word.pinyin}`} slow />
    </div>
  );
}

import { useState } from 'react';
import type { Word } from '../data/types';
import AudioButton from './AudioButton';
import { MiniContour } from './ToneGraph';
import { useStore } from '../lib/store';

export default function WordCard({ word, compact = false }: { word: Word; compact?: boolean }) {
  const { progress } = useStore();
  const [revealed, setRevealed] = useState(false);
  const showPinyin = progress.settings.pinyin === 'always' || revealed;

  return (
    <div className="card p-4 sm:p-5 flex items-center gap-4">
      <div className="min-w-[4.5rem] text-center">
        <div className={`hanzi font-semibold leading-tight ${compact ? 'text-3xl' : 'text-4xl'}`}>{word.hanzi}</div>
      </div>
      <div className="flex-1 min-w-0">
        {showPinyin ? (
          <div className="flex flex-wrap items-center gap-x-2 text-lg font-medium">
            <span>{word.pinyin}</span>
            {word.spoken && <span className="text-sm text-muted">said “{word.spoken}”</span>}
          </div>
        ) : (
          <button type="button" onClick={() => setRevealed(true)} className="text-sm text-accent underline underline-offset-2">
            Show pinyin
          </button>
        )}
        <div className="text-muted">{word.english}</div>
        {word.literal && <div className="text-sm text-muted mt-0.5">Literally: {word.literal}</div>}
        {word.note && <div className="text-sm text-muted mt-1">{word.note}</div>}
        {word.tones && showPinyin && (
          <div className="mt-1.5 flex items-center gap-1" aria-label="Tone shape per syllable">
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

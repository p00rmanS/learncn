import { useState } from 'react';
import { respellLine, tipsFor } from '../lib/pronounce';
import { useStore } from '../lib/store';
import { MiniContour } from './ToneGraph';

/** The "Say: nee how" line, with an optional toggle for the detailed tips. */
export function PronounceLine({
  pinyin,
  open,
  onToggle,
}: {
  pinyin: string;
  open?: boolean;
  onToggle?: () => void;
}) {
  const { progress } = useStore();
  if (!progress.settings.showPronounce) return null;
  const line = respellLine(pinyin);
  if (!line || line === pinyin) return null;
  return (
    <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[14px]">
      <span className="text-muted">
        Say: <span className="font-medium italic text-ink">{line}</span>
      </span>
      {onToggle && tipsFor(pinyin) && (
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          className="text-[12px] font-semibold uppercase tracking-[0.12em] text-accent underline-offset-4 hover:underline"
        >
          {open ? 'Hide tips' : 'How to say it'}
        </button>
      )}
    </div>
  );
}

/** Syllable-by-syllable mouth tips. Place at full width, not inside a narrow column. */
export function PronouncePanel({ pinyin }: { pinyin: string }) {
  const tips = tipsFor(pinyin);
  if (!tips) return null;
  return (
    <div className="rise mb-4 rounded-2xl bg-sunken px-4 py-4 sm:px-5">
      <p className="eyebrow mb-3">How to say it</p>
      <ol className="space-y-4">
        {tips.map((t, i) => (
          <li key={i} className="grid grid-cols-[4.5rem_1fr] gap-x-4">
            <span className="font-display text-[26px] font-medium leading-none">{t.syllable.written}</span>
            <div className="min-w-0 text-[14px] leading-snug text-muted">
              <p className="font-medium text-ink">
                Sounds like <span className="italic">{t.syllable.respell}</span>
              </p>
              {t.initialTip && (
                <p className="mt-1">
                  <b className="text-ink">{t.syllable.initial}</b> · {t.initialTip}
                </p>
              )}
              {t.finalTip && (
                <p className="mt-1">
                  <b className="text-ink">{t.syllable.final.replace('v', 'ü')}</b> · {t.finalTip}
                </p>
              )}
              <p className="mt-1 flex items-center gap-2">
                <MiniContour tone={t.syllable.tone} />
                <span>{t.toneTip}</span>
              </p>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-4 text-[12px] italic text-muted">Respellings are approximate. Trust the audio, and use these tips for your mouth shape.</p>
    </div>
  );
}

/** Self-contained version: line, toggle and panel together. Used where space is wide enough. */
export default function PronounceGuide({ pinyin, detail = true }: { pinyin: string; detail?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <PronounceLine pinyin={pinyin} open={open} onToggle={detail ? () => setOpen((o) => !o) : undefined} />
      {open && detail && <div className="mt-3"><PronouncePanel pinyin={pinyin} /></div>}
    </div>
  );
}

import { useState } from 'react';
import Icon from './Icon';
import { speak } from '../lib/audio';
import { useStore } from '../lib/store';

export const NO_VOICE_EVENT = 'sheng:no-voice';

/** Plays Mandarin audio for `text` (hanzi). Optionally offers a slow replay. */
export default function AudioButton({
  text,
  label,
  slow = false,
  size = 'md',
  variant = 'soft',
}: {
  text: string;
  label?: string;
  slow?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'soft' | 'solid';
}) {
  const { progress } = useStore();
  const [busy, setBusy] = useState<'normal' | 'slow' | null>(null);

  const play = async (mode: 'normal' | 'slow') => {
    setBusy(mode);
    const rate = mode === 'slow' ? Math.max(0.4, progress.settings.rate - 0.35) : progress.settings.rate;
    const ok = await speak(text, rate);
    if (!ok) window.dispatchEvent(new Event(NO_VOICE_EVENT));
    setBusy(null);
  };

  const dims = size === 'lg' ? 'h-14 w-14' : size === 'sm' ? 'h-9 w-9' : 'h-11 w-11';
  const tone =
    variant === 'solid'
      ? 'bg-accent text-accent-ink hover:opacity-90'
      : 'bg-accent-soft text-accent hover:opacity-80';

  return (
    <span className="inline-flex items-center gap-2">
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          void play('normal');
        }}
        aria-label={label ?? `Play ${text}`}
        className={`${dims} ${tone} rounded-full inline-flex items-center justify-center transition-colors ${busy === 'normal' ? 'ring-2 ring-accent' : ''}`}
      >
        <Icon name="volume" size={size === 'lg' ? 26 : size === 'sm' ? 16 : 20} />
      </button>
      {slow && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            void play('slow');
          }}
          aria-label={`Play ${text} slowly`}
          title="Slow"
          className={`${dims} bg-sunken text-muted hover:text-ink rounded-full inline-flex items-center justify-center transition-colors ${busy === 'slow' ? 'ring-2 ring-accent' : ''}`}
        >
          <Icon name="slow" size={size === 'lg' ? 24 : size === 'sm' ? 16 : 19} />
        </button>
      )}
    </span>
  );
}

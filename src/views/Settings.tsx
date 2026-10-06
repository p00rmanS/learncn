import { useState } from 'react';
import AudioButton from '../components/AudioButton';
import { useMandarinVoice } from '../lib/audio';
import { useStore } from '../lib/store';

function Row({ title, hint, children }: { title: string; hint?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="max-w-md">
        <div className="font-medium">{title}</div>
        {hint && <div className="text-sm text-muted">{hint}</div>}
      </div>
      <div>{children}</div>
    </div>
  );
}

function Segmented<T extends string>({ value, options, onChange, label }: { value: T; options: { id: T; label: string }[]; onChange: (v: T) => void; label: string }) {
  return (
    <div className="inline-flex rounded-xl bg-sunken p-1" role="group" aria-label={label}>
      {options.map((o) => (
        <button
          key={o.id}
          type="button"
          aria-pressed={value === o.id}
          onClick={() => onChange(o.id)}
          className={`min-h-[40px] rounded-lg px-4 text-sm font-semibold transition-colors ${value === o.id ? 'bg-surface text-ink shadow-card' : 'text-muted hover:text-ink'}`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

export default function Settings() {
  const { progress, setSettings, reset } = useStore();
  const s = progress.settings;
  const hasVoice = useMandarinVoice();
  const [confirm, setConfirm] = useState(false);

  return (
    <div className="space-y-6">
      <header>
        <p className="eyebrow">Preferences</p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight">Settings</h1>
      </header>

      <div className="card divide-y divide-line px-5 sm:px-6">
        <Row title="Taglish explanations" hint="Show short Taglish notes alongside the English explanations in lessons.">
          <Segmented
            label="Taglish explanations"
            value={s.taglish ? 'on' : 'off'}
            options={[{ id: 'on', label: 'On' }, { id: 'off', label: 'Off' }]}
            onChange={(v) => setSettings({ taglish: v === 'on' })}
          />
        </Row>
        <Row title="Pinyin" hint="Show pinyin under every word, or only when you tap to reveal it.">
          <Segmented
            label="Pinyin display"
            value={s.pinyin}
            options={[{ id: 'always', label: 'Always' }, { id: 'tap', label: 'On tap' }]}
            onChange={(v) => setSettings({ pinyin: v })}
          />
        </Row>
        <Row title="Voice speed" hint="Normal playback speed. The slow button always plays slower than this.">
          <div className="flex items-center gap-3">
            <input
              type="range"
              min={0.5}
              max={1.1}
              step={0.05}
              value={s.rate}
              onChange={(e) => setSettings({ rate: Number(e.target.value) })}
              aria-label="Voice speed"
              className="w-40 accent-[rgb(var(--accent))]"
            />
            <AudioButton text="你好，我是你的老师。" label="Test voice speed" size="sm" />
          </div>
        </Row>
        <Row title="Mandarin voice" hint="Audio comes from your device's built-in speech voices.">
          <span className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${hasVoice ? 'bg-good-soft text-good' : 'bg-note-soft text-note'}`}>
            {hasVoice ? 'Found' : 'Not found'}
          </span>
        </Row>
        <Row title="Your name" hint="Used in your first Mandarin sentence and on the home screen.">
          <input
            value={s.name}
            onChange={(e) => setSettings({ name: e.target.value.slice(0, 24) })}
            placeholder="Name"
            aria-label="Your name"
            className="min-h-[44px] w-48 rounded-xl border border-line bg-paper px-3 outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
          />
        </Row>
      </div>

      <div className="card px-5 sm:px-6">
        <Row title="Reset progress" hint="Deletes completed lessons and your review deck on this device. This cannot be undone.">
          {confirm ? (
            <div className="flex gap-2">
              <button type="button" onClick={() => { reset(); setConfirm(false); }} className="btn bg-bad text-surface hover:opacity-90">Yes, reset</button>
              <button type="button" onClick={() => setConfirm(false)} className="btn-secondary">Cancel</button>
            </div>
          ) : (
            <button type="button" onClick={() => setConfirm(true)} className="btn-secondary">Reset…</button>
          )}
        </Row>
      </div>

      <p className="text-sm text-muted">Progress is stored only in this browser. No account, no tracking.</p>
    </div>
  );
}

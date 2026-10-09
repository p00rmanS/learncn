import { useEffect, useState, type ReactNode } from 'react';
import Icon, { type IconName } from './Icon';
import Seal from './Seal';
import { href, type Route } from '../lib/router';
import { useStore } from '../lib/store';
import { NO_VOICE_EVENT } from './AudioButton';

const NAV: { name: Route['name']; label: string; icon: IconName; to: string }[] = [
  { name: 'home', label: 'Home', icon: 'home', to: href.home },
  { name: 'learn', label: 'Learn', icon: 'learn', to: href.learn },
  { name: 'review', label: 'Review', icon: 'review', to: href.review },
  { name: 'sound', label: 'Sound Lab', icon: 'sound', to: href.sound },
  { name: 'words', label: 'Words', icon: 'words', to: href.words },
];

function Brand() {
  return (
    <a href={href.home} className="flex items-center gap-3 rounded-lg">
      <Seal char="声" size={38} />
      <span className="leading-none">
        <span className="block font-display text-[22px] font-semibold tracking-tight">Shēng</span>
        <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">Mandarin from zero</span>
      </span>
    </a>
  );
}

function NoVoiceNotice() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setOpen(true);
    window.addEventListener(NO_VOICE_EVENT, on);
    return () => window.removeEventListener(NO_VOICE_EVENT, on);
  }, []);
  if (!open) return null;
  return (
    <div role="alert" className="fixed inset-x-4 bottom-28 lg:bottom-8 lg:left-auto lg:right-8 lg:w-[26rem] z-50 rounded-2xl border border-note/30 bg-note-soft p-4 shadow-xl rise">
      <div className="flex gap-3">
        <Icon name="info" className="text-note mt-0.5 shrink-0" />
        <div className="text-sm">
          <p className="font-semibold">No Mandarin voice found on this device</p>
          <p className="mt-1 text-muted">
            Audio uses your device's built-in voices. On Windows, open Settings, Time &amp; language, Language &amp; region, add Chinese (Simplified), and install its speech pack. On Android or iPhone, check that a Chinese voice is enabled in speech settings. Then reload this page.
          </p>
          <button type="button" onClick={() => setOpen(false)} className="mt-2 font-semibold text-accent underline underline-offset-4">
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Shell({ route, children }: { route: Route; children: ReactNode }) {
  const { volatile, dueIds } = useStore();
  const active = route.name === 'lesson' ? 'learn' : route.name;

  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[17rem_1fr]">
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col sticky top-0 h-screen border-r border-line px-7 py-9">
        <Brand />
        <nav className="mt-14 flex flex-col" aria-label="Main">
          {NAV.map((n, i) => (
            <a
              key={n.name}
              href={n.to}
              aria-current={active === n.name ? 'page' : undefined}
              className={`flex items-baseline gap-4 border-t border-line py-4 text-[17px] transition-colors last:border-b ${
                active === n.name ? 'text-ink' : 'text-muted hover:text-ink'
              }`}
            >
              <span className="numeral w-5 text-[13px] tabular-nums text-muted">{String(i + 1).padStart(2, '0')}</span>
              <span className={`flex-1 font-display ${active === n.name ? 'font-semibold' : ''}`}>{n.label}</span>
              {n.name === 'review' && dueIds.length > 0 && (
                <span className="rounded-full bg-accent px-2 py-0.5 text-[11px] font-semibold text-accent-ink tabular-nums">{dueIds.length}</span>
              )}
              {active === n.name && <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />}
            </a>
          ))}
        </nav>
        <div className="mt-auto space-y-4">
          <a
            href={href.settings}
            aria-current={active === 'settings' ? 'page' : undefined}
            className={`flex items-center gap-3 text-[14px] transition-colors ${active === 'settings' ? 'text-ink' : 'text-muted hover:text-ink'}`}
          >
            <Icon name="settings" size={18} /> Settings
          </a>
          <p className="text-[12px] leading-relaxed text-muted">Sound first. Characters second. No streaks, no guilt.</p>
        </div>
      </aside>

      <div className="min-w-0 pb-28 lg:pb-0">
        {/* Mobile top bar */}
        <header className="lg:hidden sticky top-0 z-30 flex h-16 items-center justify-between bg-paper/90 px-5 backdrop-blur">
          <Brand />
          <a href={href.settings} aria-label="Settings" className="flex h-11 w-11 items-center justify-center rounded-full text-muted hover:text-ink">
            <Icon name="settings" />
          </a>
        </header>

        {volatile && (
          <div className="bg-note-soft px-4 py-2 text-center text-sm text-note">
            Your browser is blocking storage, so progress will be lost when you close this tab.
          </div>
        )}

        <main className="mx-auto w-full max-w-[56rem] px-5 py-8 sm:px-8 lg:px-12 lg:py-14">{children}</main>
      </div>

      {/* Mobile floating dock */}
      <nav
        className="lg:hidden fixed inset-x-4 bottom-4 z-40 grid grid-cols-5 rounded-full bg-ink px-2 py-1.5 text-paper shadow-[0_12px_32px_-8px_rgb(0_0_0/0.45)]"
        aria-label="Main"
      >
        {NAV.map((n) => (
          <a
            key={n.name}
            href={n.to}
            aria-current={active === n.name ? 'page' : undefined}
            className={`relative flex min-h-[52px] flex-col items-center justify-center gap-0.5 rounded-full text-[10px] font-medium tracking-wide transition-opacity ${
              active === n.name ? 'opacity-100' : 'opacity-55'
            }`}
          >
            <Icon name={n.icon} size={21} />
            {n.label === 'Sound Lab' ? 'Sound' : n.label}
            {active === n.name && <span className="absolute top-0.5 h-1 w-1 rounded-full bg-accent" aria-hidden="true" />}
            {n.name === 'review' && dueIds.length > 0 && (
              <span className="absolute right-2.5 top-1 rounded-full bg-accent px-1.5 text-[9px] font-semibold text-accent-ink tabular-nums">{dueIds.length}</span>
            )}
          </a>
        ))}
      </nav>

      <NoVoiceNotice />
    </div>
  );
}

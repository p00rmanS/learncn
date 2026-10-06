import { useEffect, useState, type ReactNode } from 'react';
import Icon, { type IconName } from './Icon';
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
      <span className="hanzi flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-ink text-xl font-bold">声</span>
      <span className="leading-tight">
        <span className="block font-semibold tracking-tight">Shēng</span>
        <span className="block text-xs text-muted">Mandarin from zero</span>
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
    <div role="alert" className="fixed inset-x-3 bottom-24 lg:bottom-6 lg:left-auto lg:right-6 lg:w-[26rem] z-50 card p-4 border-note/40 bg-note-soft rise">
      <div className="flex gap-3">
        <Icon name="info" className="text-note mt-0.5 shrink-0" />
        <div className="text-sm">
          <p className="font-semibold">No Mandarin voice found on this device</p>
          <p className="mt-1 text-muted">
            Audio uses your device's built-in voices. On Windows, open Settings, Time &amp; language, Language &amp; region, add Chinese (Simplified), and install its speech pack. On Android or iPhone, check that a Chinese voice is enabled in speech settings. Then reload this page.
          </p>
          <button type="button" onClick={() => setOpen(false)} className="mt-2 font-semibold text-accent underline underline-offset-2">
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
    <div className="min-h-screen lg:grid lg:grid-cols-[15rem_1fr]">
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col sticky top-0 h-screen border-r border-line bg-surface px-4 py-6">
        <Brand />
        <nav className="mt-8 flex flex-col gap-1" aria-label="Main">
          {NAV.map((n) => (
            <a
              key={n.name}
              href={n.to}
              aria-current={active === n.name ? 'page' : undefined}
              className={`flex items-center gap-3 rounded-xl px-3 min-h-[44px] text-[15px] font-medium transition-colors ${
                active === n.name ? 'bg-accent-soft text-accent' : 'text-muted hover:bg-sunken hover:text-ink'
              }`}
            >
              <Icon name={n.icon} />
              <span className="flex-1">{n.label}</span>
              {n.name === 'review' && dueIds.length > 0 && (
                <span className="rounded-full bg-accent text-accent-ink text-xs font-semibold px-2 py-0.5">{dueIds.length}</span>
              )}
            </a>
          ))}
        </nav>
        <a
          href={href.settings}
          aria-current={active === 'settings' ? 'page' : undefined}
          className={`mt-auto flex items-center gap-3 rounded-xl px-3 min-h-[44px] text-[15px] font-medium transition-colors ${
            active === 'settings' ? 'bg-accent-soft text-accent' : 'text-muted hover:bg-sunken hover:text-ink'
          }`}
        >
          <Icon name="settings" /> Settings
        </a>
      </aside>

      <div className="min-w-0 pb-24 lg:pb-0">
        {/* Mobile top bar */}
        <header className="lg:hidden sticky top-0 z-30 flex items-center justify-between border-b border-line bg-paper/90 backdrop-blur px-4 h-14">
          <Brand />
          <a href={href.settings} aria-label="Settings" className="flex h-11 w-11 items-center justify-center rounded-full text-muted hover:bg-sunken">
            <Icon name="settings" />
          </a>
        </header>

        {volatile && (
          <div className="bg-note-soft text-note text-sm px-4 py-2 text-center">
            Your browser is blocking storage, so progress will be lost when you close this tab.
          </div>
        )}

        <main className="mx-auto w-full max-w-4xl px-4 sm:px-6 py-6 sm:py-10">{children}</main>
      </div>

      {/* Mobile bottom nav */}
      <nav className="lg:hidden fixed bottom-0 inset-x-0 z-30 border-t border-line bg-surface/95 backdrop-blur grid grid-cols-5" aria-label="Main">
        {NAV.map((n) => (
          <a
            key={n.name}
            href={n.to}
            aria-current={active === n.name ? 'page' : undefined}
            className={`relative flex flex-col items-center justify-center gap-0.5 min-h-[60px] text-[11px] font-medium ${
              active === n.name ? 'text-accent' : 'text-muted'
            }`}
          >
            <Icon name={n.icon} size={22} />
            {n.label === 'Sound Lab' ? 'Sound' : n.label}
            {n.name === 'review' && dueIds.length > 0 && (
              <span className="absolute top-1.5 left-1/2 ml-2 rounded-full bg-accent text-accent-ink text-[10px] font-semibold px-1.5">{dueIds.length}</span>
            )}
          </a>
        ))}
      </nav>

      <NoVoiceNotice />
    </div>
  );
}

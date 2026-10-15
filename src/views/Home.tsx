import { MODULES, getLesson, lessonsFor, type Track } from '../data/lessons';
import { STORIES } from '../data/stories';
import Icon from '../components/Icon';
import ToneGraph from '../components/ToneGraph';
import { href } from '../lib/router';
import { dayKey, useStore } from '../lib/store';
import { WORD_BY_ID } from '../data/words';
import GoalRing from '../components/GoalRing';
import { useGame } from '../lib/game';

function greeting() {
  const h = new Date().getHours();
  return h < 12 ? 'Good morning' : h < 18 ? 'Good afternoon' : 'Good evening';
}

function Activity({ days }: { days: Record<string, number> }) {
  const cells = Array.from({ length: 28 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (27 - i));
    const k = dayKey(d);
    return { k, n: days[k] ?? 0, label: d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' }) };
  });
  return (
    <div>
      <div className="flex flex-wrap gap-1.5" role="img" aria-label="Study activity over the last 28 days">
        {cells.map((c) => (
          <span
            key={c.k}
            title={`${c.label}: ${c.n > 0 ? 'studied' : 'no study'}`}
            className={`h-3 w-3 rounded-full ${c.n === 0 ? 'bg-line' : c.n < 3 ? 'bg-ink/45' : 'bg-ink'}`}
          />
        ))}
      </div>
      <p className="mt-3 text-[13px] text-muted">The last four weeks. Gaps are fine. Nothing is counted against you.</p>
    </div>
  );
}

/** First visit: who is learning? This changes the whole course. */
function Welcome() {
  const { setSettings } = useStore();
  const choose = (track: Track) => setSettings({ track, onboarded: true });
  return (
    <div className="space-y-12">
      <header className="rise">
        <p className="eyebrow">Welcome to Shēng</p>
        <h1 className="mt-6 text-[46px] leading-[1.02] sm:text-[68px]">
          Who is learning
          <br />
          <em className="font-medium italic text-accent">today?</em>
        </h1>
        <p className="mt-6 max-w-lg text-[18px] leading-relaxed text-muted">
          Pick a path. You can switch any time in Learn or Settings, and your progress is kept for each.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => choose('adult')}
          className="rise group rounded-[24px] border border-line bg-surface p-7 text-left transition-colors hover:border-ink sm:p-9"
          style={{ ['--i' as string]: 2 }}
        >
          <span className="hanzi text-[64px] font-bold leading-none">学</span>
          <span className="mt-6 block font-display text-[28px] font-medium leading-tight">Adults and teens</span>
          <span className="mt-2 block text-[15px] leading-relaxed text-muted">
            Sound first, then real conversations: greetings, food, shopping, travel, work.
          </span>
          <span className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-accent">
            Start here <Icon name="arrow" size={16} className="transition-transform group-hover:translate-x-1" />
          </span>
        </button>
        <button
          type="button"
          onClick={() => choose('kids')}
          className="rise group rounded-[24px] border border-line bg-surface p-7 text-left transition-colors hover:border-ink sm:p-9"
          style={{ ['--i' as string]: 3 }}
        >
          <span className="hanzi text-[64px] font-bold leading-none">玩</span>
          <span className="mt-6 block font-display text-[28px] font-medium leading-tight">Little learners</span>
          <span className="mt-2 block text-[15px] leading-relaxed text-muted">
            For ages 3 to 10: songs, animals, games and actions, with tips for the grown-up.
          </span>
          <span className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-accent">
            Let&apos;s play <Icon name="arrow" size={16} className="transition-transform group-hover:translate-x-1" />
          </span>
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  const { progress, nextLessonId, dueIds } = useStore();
  const track: Track = progress.settings.track;
  const kids = track === 'kids';

  if (!progress.settings.onboarded && Object.keys(progress.completed).length === 0) return <Welcome />;

  const lessons = lessonsFor(track);
  const next = nextLessonId ? getLesson(nextLessonId) : null;
  const completed = lessons.filter((l) => progress.completed[l.id]).length;
  const known = Object.keys(progress.deck).length;
  const game = useGame();
  const name = progress.settings.name.trim();
  const firstDue = dueIds[0] ? WORD_BY_ID[dueIds[0]] : null;
  const nextNumber = next ? lessons.indexOf(next) + 1 : 0;
  const nextModule = next ? MODULES.find((m) => m.id === next.module) : null;
  const storiesRead = STORIES.filter((s) => progress.stories[s.id]).length;
  const resumed = next ? (progress.resume[next.id] ?? 0) > 0 : false;
  const today = progress.log[dayKey()] ?? { lesson: 0, review: 0, story: 0, sound: 0 };
  const nextStory = STORIES.find((s) => !progress.stories[s.id] && (kids ? s.level !== 'adult' : s.level === 'adult')) ?? STORIES.find((s) => !progress.stories[s.id]);
  const plan = [
    { label: 'Warm up your ears', hint: 'Five tone questions in the Sound Lab', to: href.sound, done: today.sound > 0 },
    next
      ? { label: resumed ? 'Resume your lesson' : 'Learn something new', hint: next.title, to: href.lesson(next.id), done: today.lesson > 0 }
      : { label: 'Revisit a lesson', hint: 'You have finished every lesson in this track', to: href.learn, done: today.lesson > 0 },
    { label: 'Review your words', hint: dueIds.length > 0 ? `${dueIds.length} words are ready` : known > 0 ? 'Nothing due, great work' : 'Unlocks after your first lesson', to: href.review, done: today.review > 0 || (known > 0 && dueIds.length === 0) },
    nextStory
      ? { label: 'Read a story', hint: nextStory.title, to: href.story(nextStory.id), done: today.story > 0 }
      : { label: 'Read a story', hint: 'You have read them all', to: href.stories, done: true },
  ];

  return (
    <div className="space-y-16 sm:space-y-20">
      {/* Hero */}
      <section className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
        <div className="rise" style={{ ['--i' as string]: 0 }}>
          <p className="eyebrow">
            {greeting()}
            {name ? `, ${name}` : ''}
          </p>
          <h1 className="mt-5 text-[46px] leading-[1.02] sm:text-[68px]">
            {completed === 0 ? (
              kids ? (
                <>
                  Let&apos;s play
                  <br />
                  with <em className="font-medium italic text-accent">Chinese.</em>
                </>
              ) : (
                <>
                  Start with
                  <br />
                  the <em className="font-medium italic text-accent">sound.</em>
                </>
              )
            ) : (
              <>
                Welcome
                <br />
                <em className="font-medium italic text-accent">back.</em>
              </>
            )}
          </h1>
          <p className="mt-6 max-w-md text-[18px] leading-relaxed text-muted">
            {completed === 0
              ? kids
                ? 'Songs, animals, colors and games. A few minutes a day builds a confident little speaker.'
                : 'A calm, tone-first Mandarin course for complete beginners. Real phrases, clear audio, and explanations that make sense.'
              : `${completed} of ${lessons.length} lessons complete. Pick up exactly where you stopped.`}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {next ? (
              <a href={href.lesson(next.id)} className="btn-seal">
                {resumed ? 'Resume lesson' : completed === 0 ? 'Begin lesson one' : 'Continue learning'} <Icon name="arrow" size={18} />
              </a>
            ) : (
              <a href={href.learn} className="btn-seal">Browse lessons</a>
            )}
            <a href={href.learn} className="btn-ghost">See the full course</a>
          </div>
        </div>

        {/* Plate */}
        <div className="rise relative mx-auto w-full max-w-md" style={{ ['--i' as string]: 2 }}>
          <div className="relative overflow-hidden rounded-[28px] border border-line bg-surface px-8 pb-8 pt-10">
            <span className="eyebrow absolute left-6 top-5">Tone 1 · high and flat</span>
            <div className="hanzi text-center text-[150px] font-bold leading-none sm:text-[180px]" aria-hidden="true">{kids ? '猫' : '声'}</div>
            <div className="-mt-1 flex justify-center">
              <ToneGraph tone={1} width={220} height={70} grid={false} label="Tone 1: high and flat" />
            </div>
            <div className="mt-2 text-center">
              <div className="font-display text-3xl font-medium">{kids ? 'māo' : 'shēng'}</div>
              <div className="text-sm text-muted">{kids ? 'cat. Meow!' : 'sound; voice'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Streak, goal, level */}
      {game.show && (
        <section className="space-y-3">
          {game.atRisk && (
            <div className="flex items-center gap-4 rounded-2xl bg-accent-soft px-5 py-4" role="status">
              <Icon name="flame" size={26} className="shrink-0 text-accent" />
              <p className="text-[15px] leading-snug">
                <b>Your {game.count}-day streak is waiting.</b> Earn {game.xpLeft} more XP today to keep it going.
                {game.freezes > 0 ? ` You have ${game.freezes} freeze${game.freezes > 1 ? 's' : ''} in reserve, so a busy day is okay.` : ''}
              </p>
            </div>
          )}
          <a href={href.progress} className="grid grid-cols-3 divide-x divide-line overflow-hidden rounded-2xl border border-line transition-colors hover:bg-surface">
            <div className="px-3 py-5 text-center sm:px-6">
              <div className="numeral flex items-center justify-center gap-1.5 text-[36px] font-light leading-none tabular-nums sm:text-[44px]">
                <Icon name="flame" size={30} className={game.count > 0 && game.doneToday ? 'text-accent' : game.count > 0 ? 'text-accent/60' : 'text-line'} />
                {game.count}
              </div>
              <div className="mt-2 text-[12px] text-muted sm:text-[13px]">day streak</div>
            </div>
            <div className="flex flex-col items-center px-3 py-4 sm:px-6">
              <GoalRing pct={game.goalPct} done={game.goalMet} size={56} stroke={6}>
                {game.goalMet ? <Icon name="check" size={20} className="text-good" /> : <span className="numeral text-[13px] tabular-nums">{game.xpToday}</span>}
              </GoalRing>
              <div className="mt-1.5 text-[12px] text-muted sm:text-[13px]">{game.goalMet ? 'goal reached' : `${game.xpToday}/${game.goal} XP`}</div>
            </div>
            <div className="px-3 py-5 text-center sm:px-6">
              <div className="numeral text-[36px] font-light leading-none tabular-nums sm:text-[44px]">{game.level.level}</div>
              <div className="mt-2 text-[12px] text-muted sm:text-[13px]">{game.level.name.en}</div>
            </div>
          </a>
        </section>
      )}

      {/* Up next */}
      {next && (
        <section className="rise overflow-hidden rounded-[28px] bg-ink text-paper" style={{ ['--i' as string]: 3 }}>
          <div className="grid items-end gap-6 p-8 sm:grid-cols-[auto_1fr_auto] sm:gap-10 sm:p-11">
            <div className="numeral text-[84px] font-light leading-none opacity-30 sm:text-[120px]">{String(nextNumber).padStart(2, '0')}</div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] opacity-60">
                {nextModule?.title} · {next.minutes} min
              </p>
              <h2 className="mt-2 text-[28px] leading-tight sm:text-[34px]">{next.title}</h2>
              <p className="mt-3 max-w-lg text-[16px] leading-relaxed opacity-75">{next.goal}</p>
            </div>
            <a href={href.lesson(next.id)} className="btn-seal self-end">
              {resumed ? 'Resume' : completed === 0 ? 'Start' : 'Continue'} <Icon name="arrow" size={18} />
            </a>
          </div>
        </section>
      )}

      {/* Today's plan */}
      <section className="rise" style={{ ['--i' as string]: 4 }}>
        <div className="flex items-end justify-between border-b-2 border-ink pb-3">
          <h2 className="text-[28px]">Today&apos;s plan</h2>
          <span className="eyebrow">About {Math.max(10, (next?.minutes ?? 8) + 7)} minutes</span>
        </div>
        <ul>
          {plan.map((p) => (
            <li key={p.label} className="border-b border-line">
              <a href={p.to} className="group -mx-3 flex items-center gap-4 rounded-xl px-3 py-4 transition-colors hover:bg-surface">
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border ${p.done ? 'border-accent bg-accent text-accent-ink' : 'border-ink/30 text-transparent'}`}
                  aria-hidden="true"
                >
                  <Icon name="check" size={16} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className={`block font-display text-[20px] font-medium leading-tight ${p.done ? 'text-muted line-through decoration-1' : ''}`}>{p.label}</span>
                  <span className="block text-[13px] text-muted">{p.hint}</span>
                </span>
                <span className="sr-only">{p.done ? 'Done today' : 'Not done yet'}</span>
                <Icon name="arrow" size={18} className="shrink-0 text-muted opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-[13px] text-muted">A suggestion, not a requirement. Do as much or as little as you like.</p>
      </section>

      {/* Practice links */}
      <section className="grid gap-px overflow-hidden rounded-[20px] border border-line bg-line sm:grid-cols-3">
        <a href={href.stories} className="group flex items-center gap-4 bg-paper p-6 transition-colors hover:bg-surface">
          <Icon name="stories" size={26} className="text-accent" />
          <span className="flex-1">
            <span className="block font-display text-[21px] font-medium leading-tight">Stories</span>
            <span className="mt-0.5 block text-[13px] text-muted">{storiesRead} of {STORIES.length} read</span>
          </span>
          <Icon name="arrow" size={18} className="text-muted transition-transform group-hover:translate-x-1" />
        </a>
        <a href={href.review} className="group flex items-center gap-4 bg-paper p-6 transition-colors hover:bg-surface">
          <Icon name="review" size={26} className="text-accent" />
          <span className="flex-1">
            <span className="block font-display text-[21px] font-medium leading-tight">
              {dueIds.length > 0 ? `${dueIds.length} to review` : 'Review'}
            </span>
            <span className="mt-0.5 block text-[13px] text-muted">
              {known === 0 ? 'Finish a lesson first' : dueIds.length > 0 ? `Starting with ${firstDue?.hanzi ?? ''}` : 'Nothing due now'}
            </span>
          </span>
          <Icon name="arrow" size={18} className="text-muted transition-transform group-hover:translate-x-1" />
        </a>
        <a href={href.sound} className="group flex items-center gap-4 bg-paper p-6 transition-colors hover:bg-surface">
          <Icon name="sound" size={26} className="text-accent" />
          <span className="flex-1">
            <span className="block font-display text-[21px] font-medium leading-tight">Sound Lab</span>
            <span className="mt-0.5 block text-[13px] text-muted">Tones, initials, pairs</span>
          </span>
          <Icon name="arrow" size={18} className="text-muted transition-transform group-hover:translate-x-1" />
        </a>
      </section>

      {/* Progress */}
      <section>
        <div className="flex items-end justify-between border-b-2 border-ink pb-3">
          <h2 className="text-[28px]">Your progress</h2>
          <span className="eyebrow">Private to this device</span>
        </div>
        <dl className="grid grid-cols-3 divide-x divide-line border-b border-line">
          {[
            { v: completed, of: lessons.length, label: 'Lessons' },
            { v: known, label: 'Words learned' },
            { v: dueIds.length, label: 'Due now' },
          ].map((s) => (
            <div key={s.label} className="px-4 py-7 first:pl-0 sm:px-8">
              <dd className="numeral text-[44px] font-light leading-none tabular-nums sm:text-[64px]">
                {s.v}
                {s.of ? <span className="text-[22px] text-muted sm:text-[28px]">/{s.of}</span> : null}
              </dd>
              <dt className="mt-3 text-[13px] text-muted">{s.label}</dt>
            </div>
          ))}
        </dl>
        <div className="pt-7">
          <Activity days={progress.days} />
        </div>
      </section>
    </div>
  );
}

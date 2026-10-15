import { LESSONS } from '../data/lessons';
import { STORIES } from '../data/stories';
import GoalRing from '../components/GoalRing';
import Icon from '../components/Icon';
import Seal from '../components/Seal';
import { useGame } from '../lib/game';
import { href } from '../lib/router';
import { useStore } from '../lib/store';
import { BADGES, GOALS, GOAL_LABEL, MAX_FREEZES, addDays, weekDays } from '../lib/xp';

const DAY_LETTERS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

function Week({ today, met, frozen }: { today: string; met: Record<string, true>; frozen: Record<string, true> }) {
  const days = weekDays(today);
  return (
    <ol className="grid grid-cols-7 gap-2" aria-label="This week">
      {days.map((d, i) => {
        const isToday = d === today;
        const future = d > today;
        const isMet = !!met[d];
        const isFrozen = !!frozen[d];
        const label = `${DAY_LETTERS[i]}: ${isMet ? 'goal reached' : isFrozen ? 'protected by a freeze' : future ? 'upcoming' : isToday ? 'today' : 'missed'}`;
        return (
          <li key={d} className="flex flex-col items-center gap-2" aria-label={label}>
            <span className="text-[12px] font-medium text-muted">{DAY_LETTERS[i]}</span>
            <span
              className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                isMet
                  ? 'border-ink bg-ink text-paper'
                  : isFrozen
                  ? 'border-ink/40 text-ink'
                  : isToday
                  ? 'border-accent text-accent'
                  : future
                  ? 'border-line text-transparent'
                  : 'border-line text-muted'
              }`}
            >
              {isMet ? <Icon name="check" size={18} /> : isFrozen ? <Icon name="shield" size={18} /> : isToday ? <span className="h-2 w-2 rounded-full bg-accent" /> : future ? '' : <span className="h-1 w-1 rounded-full bg-muted" />}
            </span>
          </li>
        );
      })}
    </ol>
  );
}

function XpChart({ today, byDay, goal }: { today: string; byDay: Record<string, number>; goal: number }) {
  const days = Array.from({ length: 14 }, (_, i) => addDays(today, i - 13));
  const values = days.map((d) => byDay[d] ?? 0);
  const max = Math.max(goal * 1.4, ...values, 10);
  const W = 560;
  const H = 150;
  const bw = W / days.length;
  const goalY = H - (goal / max) * H;
  return (
    <figure>
      <svg viewBox={`0 0 ${W} ${H + 22}`} className="w-full" role="img" aria-label={`XP over the last 14 days. Today: ${values[13]} XP. Goal: ${goal} XP.`}>
        <line x1="0" x2={W} y1={goalY} y2={goalY} stroke="rgb(var(--accent))" strokeWidth="1.5" strokeDasharray="4 5" />
        <text x={W} y={goalY - 6} textAnchor="end" fontSize="11" fill="rgb(var(--accent))">goal {goal}</text>
        {values.map((v, i) => {
          const h = Math.max(v > 0 ? 4 : 2, (v / max) * H);
          const isToday = i === 13;
          return (
            <g key={days[i]}>
              <rect
                x={i * bw + bw * 0.18}
                y={H - h}
                width={bw * 0.64}
                height={h}
                rx={4}
                fill={v === 0 ? 'rgb(var(--line))' : isToday ? 'rgb(var(--accent))' : 'rgb(var(--ink))'}
                opacity={v === 0 ? 1 : isToday ? 1 : 0.85}
              />
              {(i === 0 || i === 6 || i === 13) && (
                <text x={i * bw + bw / 2} y={H + 16} textAnchor="middle" fontSize="11" fill="rgb(var(--muted))">
                  {i === 13 ? 'Today' : days[i].slice(5).replace('-', '/')}
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </figure>
  );
}

export default function Progress() {
  const { progress, setSettings } = useStore();
  const g = useGame();
  const s = progress.stats;
  const lessonsDone = Object.keys(progress.completed).length;
  const acc = s.quizzes ? Math.round((s.firstTry / s.quizzes) * 100) : null;
  const soundAcc = s.soundTotal ? Math.round((s.soundRight / s.soundTotal) * 100) : null;
  const earned = BADGES.filter((b) => progress.badges[b.id]);

  const stat = (label: string, value: string | number, hint?: string) => (
    <div className="px-4 py-5 first:pl-0 sm:px-6">
      <dd className="numeral text-[34px] font-light leading-none tabular-nums sm:text-[44px]">{value}</dd>
      <dt className="mt-2 text-[13px] text-muted">{label}</dt>
      {hint && <dd className="text-[12px] text-muted/80">{hint}</dd>}
    </div>
  );

  return (
    <div className="space-y-14">
      <header className="rise">
        <p className="eyebrow">Your growth</p>
        <h1 className="mt-4 text-[44px] leading-[1.02] sm:text-[60px]">Progress</h1>
        <p className="mt-5 max-w-xl text-[18px] leading-relaxed text-muted">
          Small, steady days beat long, rare ones. Reach your daily goal to grow your streak, and earn freezes that protect it when life gets busy.
        </p>
      </header>

      {/* Streak, level, goal */}
      <section className="grid gap-4 md:grid-cols-3">
        <div className="card p-6">
          <p className="eyebrow">Streak</p>
          <div className="mt-3 flex items-center gap-3">
            <Icon name="flame" size={44} className={g.count > 0 && g.doneToday ? 'text-accent' : g.count > 0 ? 'text-accent/60' : 'text-line'} />
            <span className="numeral text-[64px] font-light leading-none tabular-nums">{g.count}</span>
          </div>
          <p className="mt-2 text-[14px] text-muted">
            {g.count === 0
              ? 'Reach your daily goal to start a streak.'
              : g.doneToday
              ? `Locked in for today. Best: ${g.best}.`
              : `${g.xpLeft} XP to keep it alive today. Best: ${g.best}.`}
          </p>
          <div className="mt-4 flex items-center gap-2" aria-label={`${g.freezes} of ${MAX_FREEZES} streak freezes`}>
            {Array.from({ length: MAX_FREEZES }, (_, i) => (
              <span
                key={i}
                className={`flex h-9 w-9 items-center justify-center rounded-full border ${i < g.freezes ? 'border-ink bg-ink text-paper' : 'border-dashed border-line text-line'}`}
              >
                <Icon name="shield" size={18} />
              </span>
            ))}
            <span className="ml-1 text-[12px] leading-tight text-muted">
              Freezes cover a<br />missed day. Earn one<br />every 7 days.
            </span>
          </div>
        </div>

        <div className="card p-6">
          <p className="eyebrow">Level</p>
          <div className="mt-3 flex items-center gap-4">
            <Seal char={g.level.name.zh.charAt(0)} size={64} />
            <div>
              <p className="font-display text-[28px] font-medium leading-none">Level {g.level.level}</p>
              <p className="mt-1 text-[14px] text-muted">
                {g.level.name.zh} {g.level.name.py} · {g.level.name.en}
              </p>
            </div>
          </div>
          <div className="mt-5">
            <div className="h-2 overflow-hidden rounded-full bg-sunken" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(g.level.pct * 100)} aria-label="Progress to next level">
              <div className="h-full rounded-full bg-ink transition-[width] duration-700" style={{ width: `${g.level.pct * 100}%` }} />
            </div>
            <p className="mt-2 text-[13px] text-muted tabular-nums">
              {g.total} XP · {g.level.next - g.total} to level {g.level.level + 1}
            </p>
          </div>
        </div>

        <div className="card p-6">
          <p className="eyebrow">Daily goal</p>
          <div className="mt-3 flex items-center gap-4">
            <GoalRing pct={g.goalPct} done={g.goalMet} size={84}>
              {g.goalMet ? <Icon name="check" size={28} className="text-good" /> : <span className="numeral text-[20px] tabular-nums">{g.xpToday}<span className="text-[13px] text-muted">/{g.goal}</span></span>}
            </GoalRing>
            <div>
              <p className="font-display text-[22px] font-medium leading-tight">{g.goalMet ? 'Goal reached' : `${g.xpLeft} XP to go`}</p>
              <p className="text-[13px] text-muted">{g.xpToday} XP today</p>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Choose your daily goal">
            {GOALS.map((n) => (
              <button
                key={n}
                type="button"
                aria-pressed={progress.settings.dailyGoal === n}
                onClick={() => setSettings({ dailyGoal: n })}
                className={`min-h-[40px] rounded-full border px-3.5 text-[13px] font-medium transition-colors ${
                  progress.settings.dailyGoal === n ? 'border-ink bg-ink text-paper' : 'border-line text-muted hover:border-ink/40 hover:text-ink'
                }`}
              >
                {GOAL_LABEL[n]} · {n}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Week */}
      <section>
        <div className="flex items-end justify-between border-b-2 border-ink pb-3">
          <h2 className="text-[28px]">This week</h2>
          <span className="eyebrow">{Object.keys(progress.streak.met).filter((d) => weekDays(g.today).includes(d)).length} of 7 days</span>
        </div>
        <div className="pt-6">
          <Week today={g.today} met={progress.streak.met} frozen={progress.streak.frozen} />
        </div>
      </section>

      {/* XP chart */}
      <section>
        <div className="flex items-end justify-between border-b-2 border-ink pb-3">
          <h2 className="text-[28px]">XP, last 14 days</h2>
          <span className="eyebrow">{Object.entries(progress.xp.byDay).filter(([d]) => d > addDays(g.today, -14)).reduce((a, [, v]) => a + v, 0)} XP</span>
        </div>
        <div className="pt-5">
          <XpChart today={g.today} byDay={progress.xp.byDay} goal={g.goal} />
        </div>
      </section>

      {/* Numbers */}
      <section>
        <div className="border-b-2 border-ink pb-3">
          <h2 className="text-[28px]">By the numbers</h2>
        </div>
        <dl className="grid grid-cols-2 divide-x divide-line border-b border-line sm:grid-cols-4">
          {stat('Lessons done', lessonsDone, `of ${LESSONS.length}`)}
          {stat('Stories read', Object.keys(progress.stories).length, `of ${STORIES.length}`)}
          {stat('Words learned', Object.keys(progress.deck).length)}
          {stat('Total XP', g.total)}
        </dl>
        <dl className="grid grid-cols-2 divide-x divide-line border-b border-line sm:grid-cols-4">
          {stat('Right first time', acc === null ? 'n/a' : `${acc}%`, `${s.firstTry} of ${s.quizzes} questions`)}
          {stat('Tone trainer', soundAcc === null ? 'n/a' : `${soundAcc}%`, `${s.soundRight} of ${s.soundTotal}`)}
          {stat('Cards reviewed', s.reviews)}
          {stat('Perfect lessons', s.perfectLessons)}
        </dl>
      </section>

      {/* Badges */}
      <section>
        <div className="flex items-end justify-between border-b-2 border-ink pb-3">
          <h2 className="text-[28px]">Badges</h2>
          <span className="eyebrow">{earned.length} of {BADGES.length}</span>
        </div>
        <ul className="grid grid-cols-2 gap-4 pt-6 sm:grid-cols-3 lg:grid-cols-4">
          {BADGES.map((b) => {
            const got = progress.badges[b.id];
            return (
              <li key={b.id} className={`flex flex-col items-center rounded-2xl border p-4 text-center ${got ? 'border-line bg-surface' : 'border-dashed border-line'}`}>
                <div className={got ? '' : 'opacity-25 grayscale'}>
                  <Seal char={b.seal} size={52} />
                </div>
                <p className={`mt-3 font-display text-[17px] font-medium leading-tight ${got ? '' : 'text-muted'}`}>{b.name}</p>
                <p className="mt-1 text-[12px] leading-snug text-muted">{b.hint}</p>
                {got && <p className="mt-2 text-[11px] uppercase tracking-[0.14em] text-accent">Earned</p>}
              </li>
            );
          })}
        </ul>
      </section>

      {/* How XP works */}
      <section className="rounded-2xl bg-sunken p-6">
        <h2 className="text-[22px]">How XP works</h2>
        <ul className="mt-3 grid gap-x-8 gap-y-1.5 text-[14px] text-muted sm:grid-cols-2">
          <li>Finish a lesson: <b className="text-ink">20 XP</b></li>
          <li>Each question right first time: <b className="text-ink">+2 XP</b></li>
          <li>A perfect lesson: <b className="text-ink">+10 XP</b></li>
          <li>Finish a story: <b className="text-ink">15 XP</b></li>
          <li>Review a card: <b className="text-ink">1 XP</b></li>
          <li>Tone trainer, each right answer: <b className="text-ink">1 XP</b> (up to 10 a day)</li>
          <li>Repeat a lesson: <b className="text-ink">5 XP</b></li>
        </ul>
        <p className="mt-4 text-[13px] text-muted">
          Your streak grows each day you reach your daily goal. Miss a day and a freeze covers it. Without a freeze, the streak restarts, and your best streak is always kept.{' '}
          <a href={href.settings} className="underline underline-offset-4">Turn streaks off in Settings</a> if you prefer.
        </p>
      </section>
    </div>
  );
}

import { LESSONS, MODULES, getLesson } from '../data/lessons';
import Icon from '../components/Icon';
import ToneGraph from '../components/ToneGraph';
import { href } from '../lib/router';
import { dayKey, useStore } from '../lib/store';
import { WORD_BY_ID } from '../data/words';

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

export default function Home() {
  const { progress, nextLessonId, dueIds } = useStore();
  const next = nextLessonId ? getLesson(nextLessonId) : null;
  const completed = LESSONS.filter((l) => progress.completed[l.id]).length;
  const known = Object.keys(progress.deck).length;
  const name = progress.settings.name.trim();
  const firstDue = dueIds[0] ? WORD_BY_ID[dueIds[0]] : null;
  const nextNumber = next ? LESSONS.indexOf(next) + 1 : 0;
  const nextModule = next ? MODULES.find((m) => m.id === next.module) : null;

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
              <>
                Start with
                <br />
                the <em className="font-medium italic text-accent">sound.</em>
              </>
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
              ? 'A calm, tone-first Mandarin course for complete beginners. Real phrases, native-style audio, and explanations that make sense.'
              : `${completed} of ${LESSONS.length} lessons complete. Pick up exactly where you stopped.`}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {next ? (
              <a href={href.lesson(next.id)} className="btn-seal">
                {completed === 0 ? 'Begin lesson one' : 'Continue learning'} <Icon name="arrow" size={18} />
              </a>
            ) : (
              <a href={href.learn} className="btn-seal">Browse lessons</a>
            )}
            <a href={href.learn} className="btn-ghost">See the full course</a>
          </div>
        </div>

        {/* Plate: the character 声 with its own tone, drawn as a brush stroke */}
        <div className="rise relative mx-auto w-full max-w-md" style={{ ['--i' as string]: 2 }}>
          <div className="relative overflow-hidden rounded-[28px] border border-line bg-surface px-8 pb-8 pt-10">
            <span className="eyebrow absolute left-6 top-5">Tone 1 · high and flat</span>
            <div className="hanzi text-center text-[150px] font-bold leading-none sm:text-[180px]" aria-hidden="true">声</div>
            <div className="-mt-1 flex justify-center">
              <ToneGraph tone={1} width={220} height={70} grid={false} label="Tone 1: high and flat" />
            </div>
            <div className="mt-2 text-center">
              <div className="font-display text-3xl font-medium">shēng</div>
              <div className="text-sm text-muted">sound; voice</div>
            </div>
          </div>
        </div>
      </section>

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
              {completed === 0 ? 'Start' : 'Continue'} <Icon name="arrow" size={18} />
            </a>
          </div>
        </section>
      )}

      {/* Practice links */}
      <section className="grid gap-px overflow-hidden rounded-[20px] border border-line bg-line sm:grid-cols-2">
        <a href={href.review} className="group flex items-center gap-5 bg-paper p-6 transition-colors hover:bg-surface sm:p-7">
          <Icon name="review" size={26} className="text-accent" />
          <span className="flex-1">
            <span className="block font-display text-[22px] font-medium leading-tight">
              {dueIds.length > 0 ? `${dueIds.length} ${dueIds.length === 1 ? 'word' : 'words'} to review` : 'Review'}
            </span>
            <span className="mt-0.5 block text-[14px] text-muted">
              {known === 0 ? 'Finish a lesson to unlock reviews' : dueIds.length > 0 ? `Starting with ${firstDue?.hanzi ?? ''}` : 'Nothing is due right now'}
            </span>
          </span>
          <Icon name="arrow" size={20} className="text-muted transition-transform group-hover:translate-x-1" />
        </a>
        <a href={href.sound} className="group flex items-center gap-5 bg-paper p-6 transition-colors hover:bg-surface sm:p-7">
          <Icon name="sound" size={26} className="text-accent" />
          <span className="flex-1">
            <span className="block font-display text-[22px] font-medium leading-tight">Sound Lab</span>
            <span className="mt-0.5 block text-[14px] text-muted">Train your ear: tones, initials, minimal pairs</span>
          </span>
          <Icon name="arrow" size={20} className="text-muted transition-transform group-hover:translate-x-1" />
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
            { v: completed, of: LESSONS.length, label: 'Lessons' },
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

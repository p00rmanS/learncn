import { LESSONS, getLesson } from '../data/lessons';
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
      <div className="grid gap-1.5" style={{ gridTemplateColumns: 'repeat(14, minmax(0, 1fr))' }} role="img" aria-label="Study activity over the last 28 days">
        {cells.map((c) => (
          <div
            key={c.k}
            title={`${c.label}: ${c.n > 0 ? 'studied' : 'no study'}`}
            className={`aspect-square rounded-[5px] ${c.n === 0 ? 'bg-sunken' : c.n < 3 ? 'bg-accent/40' : 'bg-accent'}`}
          />
        ))}
      </div>
      <p className="mt-2 text-xs text-muted">Last 4 weeks. Gaps are fine, they are not tracked against you.</p>
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

  return (
    <div className="space-y-8">
      <header>
        <p className="eyebrow">{greeting()}{name ? `, ${name}` : ''}</p>
        <h1 className="mt-1 text-3xl sm:text-4xl font-semibold tracking-tight">
          {completed === 0 ? 'Start with the sounds.' : 'Pick up where you left off.'}
        </h1>
      </header>

      {/* Primary action */}
      <section className="card overflow-hidden">
        <div className="grid sm:grid-cols-[1fr_auto]">
          <div className="p-6 sm:p-8">
            {next ? (
              <>
                <p className="eyebrow text-accent">{completed === 0 ? 'Lesson 1' : `Up next · Lesson ${LESSONS.indexOf(next) + 1}`}</p>
                <h2 className="mt-1 text-2xl font-semibold tracking-tight">{next.title}</h2>
                <p className="mt-2 text-muted max-w-md">{next.goal}</p>
                <p className="mt-1 text-sm text-muted">{next.minutes} minutes</p>
                <a href={href.lesson(next.id)} className="btn-primary mt-6">
                  {completed === 0 ? 'Begin lesson' : 'Continue'} <Icon name="arrow" size={18} />
                </a>
              </>
            ) : (
              <>
                <p className="eyebrow text-good">All lessons complete</p>
                <h2 className="mt-1 text-2xl font-semibold tracking-tight">You have finished the current course.</h2>
                <p className="mt-2 text-muted max-w-md">Keep your words fresh with review, or replay any lesson.</p>
                <a href={href.learn} className="btn-primary mt-6">Browse lessons</a>
              </>
            )}
          </div>
          <div className="hidden sm:flex items-center justify-center bg-accent-soft px-8">
            <div className="w-44">
              <ToneGraph tone={2} width={176} height={110} />
            </div>
          </div>
        </div>
      </section>

      {/* Secondary actions */}
      <section className="grid sm:grid-cols-2 gap-4">
        <a href={href.review} className="card p-5 hover:border-accent transition-colors flex items-center gap-4">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent"><Icon name="review" /></span>
          <span className="flex-1">
            <span className="block font-semibold">
              {dueIds.length > 0 ? `${dueIds.length} ${dueIds.length === 1 ? 'word' : 'words'} ready to review` : 'Review'}
            </span>
            <span className="block text-sm text-muted">
              {known === 0 ? 'Finish a lesson to unlock reviews' : dueIds.length > 0 ? `Starting with ${firstDue?.hanzi ?? ''}` : 'Nothing due right now'}
            </span>
          </span>
          <Icon name="next" className="text-muted" />
        </a>
        <a href={href.sound} className="card p-5 hover:border-accent transition-colors flex items-center gap-4">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent"><Icon name="sound" /></span>
          <span className="flex-1">
            <span className="block font-semibold">Sound Lab</span>
            <span className="block text-sm text-muted">Tone trainer, pinyin initials, minimal pairs</span>
          </span>
          <Icon name="next" className="text-muted" />
        </a>
      </section>

      {/* Progress */}
      <section className="card p-5 sm:p-6">
        <h2 className="font-semibold">Your progress</h2>
        <dl className="mt-4 grid grid-cols-3 gap-4">
          <div>
            <dd className="text-3xl font-semibold tabular-nums">{completed}<span className="text-lg text-muted">/{LESSONS.length}</span></dd>
            <dt className="text-sm text-muted">Lessons</dt>
          </div>
          <div>
            <dd className="text-3xl font-semibold tabular-nums">{known}</dd>
            <dt className="text-sm text-muted">Words learned</dt>
          </div>
          <div>
            <dd className="text-3xl font-semibold tabular-nums">{dueIds.length}</dd>
            <dt className="text-sm text-muted">Due now</dt>
          </div>
        </dl>
        <div className="mt-6 border-t border-line pt-5">
          <Activity days={progress.days} />
        </div>
      </section>

      <p className="text-sm text-muted text-center">
        No streaks, no lives, no guilt. One calm session at a time.
      </p>
    </div>
  );
}

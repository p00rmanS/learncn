export type Rating = 'again' | 'hard' | 'good' | 'easy';

export interface CardState {
  due: number; // epoch ms
  interval: number; // days
  ease: number;
  reps: number;
  lapses: number;
  last: number;
}

const DAY = 86_400_000;

export function newCard(now = Date.now()): CardState {
  return { due: now, interval: 0, ease: 2.4, reps: 0, lapses: 0, last: 0 };
}

/** Simple expanding-interval scheduler. Missed days never penalise the card. */
export function schedule(card: CardState, rating: Rating, now = Date.now()): CardState {
  let { interval, ease, reps, lapses } = card;
  if (rating === 'again') {
    lapses += 1;
    ease = Math.max(1.4, ease - 0.2);
    interval = 0;
    return { due: now + 10 * 60_000, interval, ease, reps: 0, lapses, last: now };
  }
  reps += 1;
  if (rating === 'hard') {
    ease = Math.max(1.4, ease - 0.1);
    interval = interval < 1 ? 1 : Math.max(interval + 1, interval * 1.2);
  } else if (rating === 'good') {
    interval = interval < 1 ? 1 : interval * ease;
  } else {
    ease += 0.1;
    interval = interval < 1 ? 3 : interval * ease * 1.3;
  }
  interval = Math.round(interval * 10) / 10;
  return { due: now + interval * DAY, interval, ease, reps, lapses, last: now };
}

export function previewInterval(card: CardState, rating: Rating): string {
  const next = schedule(card, rating, 0);
  if (rating === 'again') return '10 min';
  const d = Math.round(next.interval);
  return d <= 1 ? '1 day' : `${d} days`;
}

export function isDue(card: CardState, now = Date.now()) {
  return card.due <= now;
}

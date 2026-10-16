# 声 Shēng — Mandarin from zero

Sound-first Mandarin course. React + TypeScript + Vite + Tailwind. No backend; progress lives in `localStorage`.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
```

## What's inside

- **Streaks, XP and levels**: a daily goal you choose (10/20/30/50 XP), a streak that grows each day you reach it, streak freezes earned every 7 days (max 2) that cover a missed day, 10 levels with Chinese names, 14 badges, a weekly calendar and XP chart on the Progress page. Logic lives in `src/lib/xp.ts` (pure, tested). Turn it all off in Settings.
- **Little Learners track**: 33 lessons for kinder (3 to 5) and elementary (6 to 10): vowels and consonants chants, animals, body, songs, school, seasons, parties. Switch on Home, Learn or Settings.
- **Stories**: 17 graded stories (kinder, elementary, adult) with pinyin, a "Say it" guide and English on every line, plus comprehension questions.
- **Pronunciation guide**: every word and sentence shows "Say: nee how" and tap-to-open mouth tips (`src/lib/pronounce.ts`).
- **Learn**: 127 lessons (adult and kids tracks), 20 stories and chapter checkpoints. Originally 9 lessons in two modules (Sound Bootcamp, First Conversations). Each lesson is a short sequence of pages with audio, pitch graphs, dialogues, quizzes and a speaking step.
- **Review**: spaced repetition over every word you finish learning (`src/lib/srs.ts`). Keyboard: Space to reveal, 1–4 to grade.
- **Sound Lab**: tone trainer, pinyin initials, minimal pairs, record-and-compare.
- **Words**: searchable dictionary of every course word.
- **Settings**: Taglish notes on/off, pinyin always/on tap, voice speed.

## Adding content

Lessons are data. Add words to `src/data/words.ts`, then add a lesson object to `src/data/lessons.ts` using the block types in `src/data/types.ts`. No component changes needed.

## Audio

Uses the browser's Mandarin text-to-speech voice. If a device has none, the app shows how to install one. Swap `src/lib/audio.ts` for recorded audio later.

`legacy/` holds the previous prototype for reference. It is not built.

## Design

Ink-and-paper look with a single vermilion "seal" accent. Fraunces (headings), Inter (UI) and Noto Serif SC (hanzi) are bundled, with no CDN. Chinese font slices are subset to the characters the app uses:

```bash
node scripts/subset-fonts.mjs   # re-run after adding lessons with new characters
```

Unlisted characters fall back to a system serif font.

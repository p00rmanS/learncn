# 声 Shēng — Mandarin from zero

Sound-first Mandarin course. React + TypeScript + Vite + Tailwind. No backend; progress lives in `localStorage`.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
```

## What's inside

- **Learn**: 9 lessons in two modules (Sound Bootcamp, First Conversations). Each lesson is a short sequence of pages with audio, pitch graphs, dialogues, quizzes and a speaking step.
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

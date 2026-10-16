/**
 * Content audit. Run:  npm run audit
 * Catches the mistakes a human reviewer would miss: hanzi/pinyin length mismatches,
 * wrong tone data, broken quizzes, missing words and unparsable pinyin.
 */
import { LESSONS } from '../src/data/lessons';
import { STORIES } from '../src/data/stories';
import { ALL_WORDS } from '../src/data/words';
import { parseWord } from '../src/lib/pronounce';
import type { Block } from '../src/data/types';

const issues: { level: 'error' | 'warn'; where: string; msg: string }[] = [];
const err = (where: string, msg: string) => issues.push({ level: 'error', where, msg });
const warn = (where: string, msg: string) => issues.push({ level: 'warn', where, msg });

const CJK = /[㐀-鿿]/g;
const hanziCount = (s: string) => (s.match(CJK) ?? []).length;

/** Count pinyin syllables; null when a token is not pinyin (names, Latin words). */
function syllables(py: string): number | null {
  let n = 0;
  for (const raw of py.split(/\s+/).filter(Boolean)) {
    const core = raw.replace(/^[^\p{L}]+|[^\p{L}]+$/gu, '');
    if (!core) continue;
    const parsed = parseWord(core);
    if (!parsed) return null;
    n += parsed.length;
  }
  return n;
}

/** Compare hanzi against pinyin. 儿 (er-hua) and Latin letters are ignored. */
function checkPair(where: string, hanzi: string, py: string, label: string) {
  if (/[A-Za-z]/.test(hanzi)) return; // names, WiFi, etc.
  const h = hanziCount(hanzi);
  const hNoEr = hanziCount(hanzi.replace(/儿/g, ''));
  const s = syllables(py);
  if (s === null) {
    warn(where, `${label}: cannot parse pinyin "${py}" for "${hanzi}"`);
    return;
  }
  if (h !== s && hNoEr !== s) err(where, `${label}: "${hanzi}" has ${h} characters but pinyin "${py}" has ${s} syllables`);
}

/* ───────── 1. Words ───────── */
const ids = new Set<string>();
for (const w of ALL_WORDS) {
  const where = `word ${w.id} ${w.hanzi}`;
  if (ids.has(w.id)) err(where, 'duplicate word id');
  ids.add(w.id);
  if (!w.english.trim()) err(where, 'missing English');
  const marksSource = w.pinyin;
  const parsed = parseWord(marksSource.replace(/\s+/g, ''));
  if (!parsed) {
    warn(where, `pinyin "${w.pinyin}" does not parse`);
    continue;
  }
  checkPair(where, w.hanzi, w.pinyin, 'word');
  if (w.tones) {
    if (w.tones.length !== parsed.length) err(where, `tones has ${w.tones.length} entries, pinyin "${w.pinyin}" has ${parsed.length} syllables`);
    else {
      const fromMarks = parsed.map((p) => p.tone);
      // The "tones" array may legitimately show a sandhi change only if pinyin shows it too, so compare strictly.
      if (JSON.stringify(fromMarks) !== JSON.stringify(w.tones)) err(where, `tones [${w.tones}] do not match marks in "${w.pinyin}" [${fromMarks}]`);
    }
  } else warn(where, 'no tones data');
}

/* ───────── 2. Lessons ───────── */
const lessonIds = new Set<string>();
for (const l of LESSONS) {
  const lw = `lesson ${l.id}`;
  if (lessonIds.has(l.id)) err(lw, 'duplicate lesson id');
  lessonIds.add(l.id);
  if (l.pages.length < 3) warn(lw, `only ${l.pages.length} pages`);
  const types = new Set<string>();
  l.pages.forEach((p, pi) => {
    const pw = `${lw} p${pi + 1} "${p.title}"`;
    if (!p.blocks.length) err(pw, 'empty page');
    p.blocks.forEach((b: Block) => {
      types.add(b.type);
      if (b.type === 'quiz') {
        if (b.answer < 0 || b.answer >= b.options.length) err(pw, `quiz answer ${b.answer} out of range for "${b.question}"`);
        if (new Set(b.options).size !== b.options.length) err(pw, `quiz has duplicate options: "${b.question}"`);
        if (b.options.length < 2) err(pw, 'quiz needs 2+ options');
        if (!b.explain.trim()) err(pw, 'quiz missing explanation');
        if (b.audio && !b.options.length) err(pw, 'audio quiz without options');
      }
      if (b.type === 'dialogue') {
        if (b.lines.length < 2) warn(pw, 'dialogue has fewer than 2 lines');
        b.lines.forEach((ln, i) => checkPair(pw, ln.hanzi, ln.pinyin, `dialogue line ${i + 1}`));
      }
      if (b.type === 'speak') checkPair(pw, b.hanzi, b.pinyin, 'speak');
      if (b.type === 'vocab') b.words.forEach((w) => !ids.has(w.id) && err(pw, `vocab word ${w.hanzi} not in dictionary`));
      if (b.type === 'tones' && b.items.length === 0) err(pw, 'empty tones block');
      if (b.type === 'table') {
        b.rows.forEach((r) => {
          if (r.length !== b.head.length) err(pw, `table row has ${r.length} cells, header has ${b.head.length}`);
        });
      }
    });
  });
  if (!types.has('pro')) err(lw, 'no pro tip');
  if (!types.has('remember')) err(lw, 'no "how to remember"');
  if (!types.has('quiz')) err(lw, 'no quiz');
  if (!types.has('speak')) warn(lw, 'no speaking step');
  if (!l.goal.trim()) err(lw, 'missing goal');
}

/* ───────── 3. Stories ───────── */
const storyIds = new Set<string>();
for (const s of STORIES) {
  const sw = `story ${s.id}`;
  if (storyIds.has(s.id)) err(sw, 'duplicate story id');
  storyIds.add(s.id);
  s.lines.forEach((ln, i) => checkPair(sw, ln.zh, ln.py, `line ${i + 1}`));
  s.words.forEach((w) => checkPair(sw, w.zh, w.py, `glossary ${w.zh}`));
  s.focus.forEach((f) => { if (!syllables(f.py)) warn(sw, `focus "${f.py}" does not parse`); });
  s.questions.forEach((q) => {
    if (q.answer < 0 || q.answer >= q.options.length) err(sw, `question answer out of range: ${q.question}`);
  });
  if (s.questions.length < 2) warn(sw, 'fewer than 2 questions');
}

/* ───────── Report ───────── */
const errors = issues.filter((i) => i.level === 'error');
const warns = issues.filter((i) => i.level === 'warn');
for (const i of [...errors, ...warns]) console.log(`${i.level === 'error' ? 'ERROR' : 'warn '} ${i.where}\n        ${i.msg}`);
console.log(`\nAudited ${ALL_WORDS.length} words, ${LESSONS.length} lessons, ${STORIES.length} stories.`);
console.log(`${errors.length} errors, ${warns.length} warnings.`);
process.exit(errors.length ? 1 : 0);

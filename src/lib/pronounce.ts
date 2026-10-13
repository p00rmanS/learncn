/**
 * Pronunciation guide for pinyin.
 * Splits pinyin into syllables, gives an approximate English-style respelling and mouth tips.
 * These are learning aids, never a replacement for the audio.
 */

import type { Tone } from '../data/types';

const TONE_CHARS: Record<string, [string, Tone]> = {};
(
  [
    ['a', 'āáǎà'],
    ['e', 'ēéěè'],
    ['i', 'īíǐì'],
    ['o', 'ōóǒò'],
    ['u', 'ūúǔù'],
    ['v', 'ǖǘǚǜ'],
  ] as const
).forEach(([base, marks]) => {
  [...marks].forEach((ch, i) => {
    TONE_CHARS[ch] = [base, (i + 1) as Tone];
  });
});

const INITIALS = ['zh', 'ch', 'sh', 'b', 'p', 'm', 'f', 'd', 't', 'n', 'l', 'g', 'k', 'h', 'j', 'q', 'x', 'r', 'z', 'c', 's', 'y', 'w'];
// 'v' stands for ü
const FINALS = [
  'a', 'o', 'e', 'ai', 'ei', 'ao', 'ou', 'an', 'en', 'ang', 'eng', 'ong', 'er',
  'i', 'ia', 'ie', 'iao', 'iu', 'ian', 'in', 'iang', 'ing', 'iong',
  'u', 'ua', 'uo', 'uai', 'ui', 'uan', 'un', 'uang', 'ueng',
  'v', 've', 'van', 'vn', 'ue',
];

export interface Syllable {
  /** The syllable as written, with tone mark */
  written: string;
  initial: string;
  final: string;
  tone: Tone;
  /** Approximate respelling, e.g. "shyeh" */
  respell: string;
}

function toPieces(token: string): { plain: string; tones: Tone[]; written: string }[] | null {
  // Split on apostrophes first: they mark syllable breaks.
  const parts = token.split(/['’]/).filter(Boolean);
  const out: { plain: string; tones: Tone[]; written: string }[] = [];
  for (const part of parts) {
    let plain = '';
    const tones: Tone[] = [];
    for (const ch of part.toLowerCase()) {
      if (TONE_CHARS[ch]) {
        plain += TONE_CHARS[ch][0];
        tones.push(TONE_CHARS[ch][1]);
      } else if (ch === 'ü') {
        plain += 'v';
      } else if (/[a-z]/.test(ch)) {
        plain += ch;
      } else {
        return null;
      }
    }
    out.push({ plain, tones, written: part });
  }
  return out;
}

function splitInitialFinal(s: string): { initial: string; final: string } | null {
  for (const ini of ['', ...INITIALS]) {
    if (ini && !s.startsWith(ini)) continue;
    const fin = s.slice(ini.length);
    if (FINALS.includes(fin) && (ini !== '' || fin.length > 0)) {
      // A bare final is only valid as a whole syllable, such as "a", "er", "ai", "an".
      return { initial: ini, final: fin };
    }
  }
  return null;
}

/** Fewest syllables first; then avoid syllables that start with a bare vowel (e.g. ma-ni, not man-i). */
function segment(plain: string): string[] | null {
  const cost = (parts: string[]) =>
    parts.length * 10 + parts.slice(1).filter((p) => !splitInitialFinal(p)!.initial).length * 3;
  const memo = new Map<number, string[] | null>();
  const go = (i: number): string[] | null => {
    if (i === plain.length) return [];
    if (memo.has(i)) return memo.get(i)!;
    let best: string[] | null = null;
    for (let end = Math.min(plain.length, i + 6); end > i; end--) {
      const piece = plain.slice(i, end);
      if (!splitInitialFinal(piece)) continue;
      const rest = go(end);
      if (!rest) continue;
      const cand = [piece, ...rest];
      if (!best || cost(cand) < cost(best)) best = cand;
    }
    memo.set(i, best);
    return best;
  };
  return go(0);
}

/* ───────── Respelling ───────── */

const INITIAL_SOUND: Record<string, string> = {
  b: 'b', p: 'p', m: 'm', f: 'f', d: 'd', t: 't', n: 'n', l: 'l', g: 'g', k: 'k', h: 'h',
  j: 'j', q: 'ch', x: 'sh', zh: 'j', ch: 'ch', sh: 'sh', r: 'r', z: 'dz', c: 'ts', s: 's', y: 'y', w: 'w',
};

const FINAL_SOUND: Record<string, string> = {
  a: 'ah', o: 'oh', e: 'uh', ai: 'eye', ei: 'ay', ao: 'ow', ou: 'oh', an: 'ahn', en: 'un', ang: 'ahng', eng: 'ung', ong: 'oong', er: 'ar',
  i: 'ee', ia: 'yah', ie: 'yeh', iao: 'yow', iu: 'yoh', ian: 'yen', in: 'een', iang: 'yahng', ing: 'eeng', iong: 'yoong',
  u: 'oo', ua: 'wah', uo: 'woh', uai: 'wye', ui: 'way', uan: 'wahn', un: 'wun', uang: 'wahng', ueng: 'wung',
  v: 'ü', ve: 'üeh', van: 'üen', vn: 'ün', ue: 'weh',
};

function normalise(initial: string, final: string): { initial: string; final: string } {
  // After j, q, x and y the written u is really ü.
  if ('jqxy'.includes(initial) && initial !== '') {
    if (final === 'u') final = 'v';
    if (final === 'ue') final = 've';
    if (final === 'uan') final = 'van';
    if (final === 'un') final = 'vn';
  }
  return { initial, final };
}

function respellSyllable(initial: string, finalIn: string): string {
  const { final } = normalise(initial, finalIn);
  // Buzzing "i" after zh ch sh r z c s
  if (final === 'i' && ['zh', 'ch', 'sh', 'r', 'z', 'c', 's'].includes(initial)) {
    return { zh: 'jrr', ch: 'chrr', sh: 'shrr', r: 'rr', z: 'dzz', c: 'tsz', s: 'sz' }[initial] as string;
  }
  // y and w are really the start of the vowel
  if (initial === 'y') {
    if (final === 'i') return 'ee';
    if (final === 'in') return 'een';
    if (final === 'ing') return 'eeng';
    if (final === 'an') return 'yen';
    if (final === 'e') return 'yeh';
    if (final === 'v') return 'ü';
    if (final === 've') return 'üeh';
    if (final === 'van') return 'üen';
    if (final === 'vn') return 'ün';
  }
  if (initial === 'w' && final === 'u') return 'oo';
  if (initial === 'w') {
    const w: Record<string, string> = { ai: 'wye', ei: 'way', an: 'wahn', en: 'wun', ang: 'wahng', eng: 'wung', o: 'woh', a: 'wah' };
    if (w[final]) return w[final];
  }
  if (final === 'o' && 'bpmf'.includes(initial) && initial) return INITIAL_SOUND[initial] + 'woh';
  if (initial === 'j' && final === 'i') return 'jee';
  if (final === 'ai' && initial && initial !== 'y') return INITIAL_SOUND[initial] + 'ye';
  if (initial === 'x' && final === 'ie') return 'shyeh';
  return (INITIAL_SOUND[initial] ?? '') + FINAL_SOUND[final];
}

/** Parse one pinyin word (no spaces) into syllables, or null if it is not pinyin. */
export function parseWord(token: string): Syllable[] | null {
  const pieces = toPieces(token);
  if (!pieces) return null;
  const out: Syllable[] = [];
  for (const piece of pieces) {
    if (!piece.plain) return null;
    const seg = segment(piece.plain);
    if (!seg) return null;
    // Assign tones, in order, to the syllables.
    let writtenPos = 0;
    for (const s of seg) {
      const sf = splitInitialFinal(s)!;
      const writtenSlice = piece.written.slice(writtenPos, writtenPos + s.length);
      writtenPos += s.length;
      let tone: Tone = 0;
      // A syllable's tone mark lies inside it. Find which tone marks fall in this slice.
      const marks = [...writtenSlice].filter((c) => TONE_CHARS[c.toLowerCase()]);
      if (marks.length) {
        tone = TONE_CHARS[marks[0].toLowerCase()][1];
      }
      out.push({
        written: writtenSlice,
        initial: sf.initial,
        final: normalise(sf.initial, sf.final).final,
        tone,
        respell: respellSyllable(sf.initial, sf.final),
      });
    }
  }
  return out;
}

/** Respell a whole pinyin string, e.g. "nǐ hǎo" → "nee how". Unknown tokens are left alone. */
export function respellLine(pinyin: string): string {
  return pinyin
    .split(/(\s+)/)
    .map((tok) => {
      if (!tok.trim()) return tok;
      const m = tok.match(/^([^\p{L}]*)(.*?)([^\p{L}]*)$/u);
      const lead = m?.[1] ?? '';
      const core = m?.[2] ?? tok;
      const trail = m?.[3] ?? '';
      const syl = parseWord(core);
      if (!syl) return tok;
      return lead + syl.map((s) => s.respell).join('-') + trail;
    })
    .join('')
    .replace(/\s+/g, ' ')
    .trim();
}

/* ───────── Mouth tips ───────── */

const INITIAL_TIP: Record<string, string> = {
  b: 'Like the p in "spin": no puff of air.',
  p: 'Like the p in "pin", with a strong puff of air. Hold a tissue to check.',
  m: 'Like English m.',
  f: 'Like English f.',
  d: 'Like the t in "star": no puff of air.',
  t: 'Like the t in "top", with a puff of air.',
  n: 'Like English n.',
  l: 'Like English l.',
  g: 'Like the k in "sky": no puff of air.',
  k: 'Like the k in "key", with a puff of air.',
  h: 'Like English h, a little rougher at the back of the throat.',
  j: 'Like the j in "jeep" with a smile: tongue flat, no puff of air.',
  q: 'Like the ch in "cheese" with a smile: tongue forward, and a puff of air.',
  x: 'Like the sh in "she" but with a smile and the tongue tip down behind your lower teeth.',
  zh: 'Like the j in "jump", with the tongue tip curled slightly back.',
  ch: 'Like the ch in "church", tongue curled back, with a puff of air.',
  sh: 'Like the sh in "shirt", tongue curled back.',
  r: 'Like the r in "run", but with the tongue tip curled back and lips not rounded. Close to the s in "measure".',
  z: 'Like the ds in "kids".',
  c: 'Like the ts in "cats", with a puff of air.',
  s: 'Like the s in "sun".',
  y: 'Like the y in "yes".',
  w: 'Like the w in "we".',
};

const FINAL_TIP: Record<string, string> = {
  a: 'Open your mouth wide: "ah" as in "father".',
  o: 'Round lips: "oh", a bit like "aw".',
  e: 'A relaxed "uh" from the back of the throat, lips spread (not "eh").',
  ai: 'Like "eye".',
  ei: 'Like "ay" in "day".',
  ao: 'Like "ow" in "cow".',
  ou: 'Like "oh".',
  an: 'Like "ahn": "an" in "anchor".',
  en: 'Like "un" in "under".',
  ang: 'Like "ahng" in "song".',
  eng: 'Like "ung" in "lung".',
  ong: 'Like "oong": round lips, nasal ending.',
  er: 'Like "are": curl the tongue tip back.',
  i: 'Like "ee" in "see": smile and keep the tongue high.',
  ia: 'Glide "ee-ah": say "yah".',
  ie: 'Like "yeh".',
  iao: 'Like "yow".',
  iu: 'Like "yoh" (the full sound is i-o-u).',
  ian: 'Like "yen" (not "ee-an").',
  in: 'Like "een".',
  iang: 'Like "yahng".',
  ing: 'Like "eeng": smile, nasal ending.',
  iong: 'Like "yoong".',
  u: 'Like "oo" in "moon": lips round and small.',
  ua: 'Like "wah".',
  uo: 'Like "woh".',
  uai: 'Like "wye".',
  ui: 'Like "way" (the full sound is u-e-i).',
  uan: 'Like "wahn".',
  un: 'Like "wun" (the full sound is u-e-n).',
  uang: 'Like "wahng".',
  ueng: 'Like "wung".',
  v: 'ü: say "ee" and round your lips as if whistling. The mouth does not move.',
  ve: 'ü then "eh": say "ee", round the lips, then relax into "eh".',
  van: 'ü then "en": round the lips for ü, then slide to "en".',
  vn: 'ü then n: round your lips, then close with n.',
  ue: 'Like "weh".',
};

const BUZZ_I = 'After this sound, i is a buzz, not "ee": keep the tongue where it is and just voice a buzzing "rr" or "zz".';

const TONE_TIP: Record<Tone, string> = {
  1: 'Tone 1: high and flat, one steady note.',
  2: 'Tone 2: rising, like asking "huh?".',
  3: 'Tone 3: low and dipping. Before another syllable it stays low and flat.',
  4: 'Tone 4: a sharp fall, like a firm "no!".',
  0: 'Neutral: light and short, no tone of its own.',
};

export interface SyllableTips {
  syllable: Syllable;
  initialTip?: string;
  finalTip: string;
  toneTip: string;
}

export function tipsFor(pinyin: string): SyllableTips[] | null {
  const syl = parseWord(pinyin.replace(/\s+/g, ''));
  if (!syl) return null;
  return syl.map((s) => {
    const buzz = s.final === 'i' && ['zh', 'ch', 'sh', 'r', 'z', 'c', 's'].includes(s.initial);
    return {
      syllable: s,
      initialTip: s.initial ? INITIAL_TIP[s.initial] : undefined,
      finalTip: buzz ? BUZZ_I : FINAL_TIP[s.final] ?? '',
      toneTip: TONE_TIP[s.tone],
    };
  });
}

export type Tone = 0 | 1 | 2 | 3 | 4;

export interface Word {
  id: string;
  hanzi: string;
  /** Dictionary pinyin with tone marks */
  pinyin: string;
  english: string;
  /** One tone per syllable, used to draw the pitch contour */
  tones?: Tone[];
  /** How it is actually said when tone changes apply */
  spoken?: string;
  /** Word-for-word meaning, when it helps */
  literal?: string;
  /** Short usage note */
  note?: string;
  /** Text sent to the voice when the hanzi alone is ambiguous (e.g. 的) */
  say?: string;
}

export interface DialogueLine {
  speaker: string;
  hanzi: string;
  pinyin: string;
  english: string;
}

export type Block =
  | { type: 'text'; title?: string; body: string[] }
  | { type: 'taglish'; body: string }
  | { type: 'tip'; label: string; body: string }
  | { type: 'pro'; body: string }
  | { type: 'remember'; body: string }
  | { type: 'table'; head: string[]; rows: string[][]; caption?: string }
  | { type: 'tones'; items: { tone: Tone; word: Word }[] }
  | { type: 'vocab'; title?: string; words: Word[] }
  | { type: 'pairs'; title?: string; pairs: { a: Word; b: Word; note: string }[] }
  | { type: 'dialogue'; title: string; lines: DialogueLine[] }
  | { type: 'quiz'; question: string; audio?: string; options: string[]; answer: number; explain: string }
  | { type: 'speak'; prompt: string; hanzi: string; pinyin: string; english: string }
  | { type: 'myname' };

export interface Page {
  /** Short label shown above the page, e.g. "Listen", "Check" */
  kicker: string;
  title: string;
  blocks: Block[];
}

export interface Lesson {
  id: string;
  module: 'sound' | 'convo' | 'hanzi' | 'patterns' | 'daily' | 'talk' | 'food' | 'work';
  title: string;
  subtitle: string;
  minutes: number;
  /** "By the end you can..." */
  goal: string;
  pages: Page[];
}

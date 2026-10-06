import type { Tone } from './types';

export interface ToneInfo {
  tone: Tone;
  name: string;
  shape: string;
  /** Pitch levels 1 (low) to 5 (high) across the syllable */
  contour: number[];
  mnemonic: string;
}

export const TONE_INFO: Record<Tone, ToneInfo> = {
  1: { tone: 1, name: 'Tone 1', shape: 'High and flat', contour: [5, 5], mnemonic: 'Hold one steady note, like singing "aaah".' },
  2: { tone: 2, name: 'Tone 2', shape: 'Rising', contour: [3, 5], mnemonic: 'Like asking "Huh?" when you did not hear something.' },
  3: { tone: 3, name: 'Tone 3', shape: 'Low, dipping', contour: [2, 1, 4], mnemonic: 'Like a thoughtful "hmm…" that sinks low.' },
  4: { tone: 4, name: 'Tone 4', shape: 'Sharp fall', contour: [5, 1], mnemonic: 'Like a firm "Stop!" or "No!".' },
  0: { tone: 0, name: 'Neutral', shape: 'Light and short', contour: [3, 3], mnemonic: 'A quick, unstressed syllable that follows the one before it.' },
};

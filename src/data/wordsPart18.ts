import type { Word } from './types';

const w = (x: Word): Word => x;

/** Words for the Foundations lessons on the five senses, the kitchen and insects. */
export const W18 = {
  // ── Five senses ──
  kan: w({ id: 'p18-kan', hanzi: '看', pinyin: 'kàn', english: 'to look; to watch; to read', tones: [4] }),
  ting: w({ id: 'p18-ting', hanzi: '听', pinyin: 'tīng', english: 'to listen; to hear', tones: [1] }),
  wen: w({ id: 'p18-wen', hanzi: '闻', pinyin: 'wén', english: 'to smell', tones: [2] }),
  chang: w({ id: 'p18-chang', hanzi: '尝', pinyin: 'cháng', english: 'to taste; to try a bit', tones: [2] }),
  mo: w({ id: 'p18-mo', hanzi: '摸', pinyin: 'mō', english: 'to touch; to feel', tones: [1] }),
  shengyin: w({ id: 'p18-shengyin', hanzi: '声音', pinyin: 'shēngyīn', english: 'sound; voice', tones: [1, 1] }),
  weidao: w({ id: 'p18-weidao', hanzi: '味道', pinyin: 'wèidao', english: 'taste; flavour; smell', tones: [4, 0] }),
  haochi: w({ id: 'p18-haochi', hanzi: '好吃', pinyin: 'hǎochī', english: 'tasty; delicious', literal: 'good to eat', tones: [3, 1] }),
  haowen: w({ id: 'p18-haowen', hanzi: '好闻', pinyin: 'hǎowén', english: 'smells good', literal: 'good to smell', tones: [3, 2] }),
  haoting: w({ id: 'p18-haoting', hanzi: '好听', pinyin: 'hǎotīng', english: 'sounds nice', literal: 'good to hear', tones: [3, 1] }),
  haokan: w({ id: 'p18-haokan', hanzi: '好看', pinyin: 'hǎokàn', english: 'pretty; good to look at', literal: 'good to see', tones: [3, 4] }),

  // ── Kitchen and tableware ──
  wan: w({ id: 'p18-wan', hanzi: '碗', pinyin: 'wǎn', english: 'bowl', tones: [3] }),
  kuaizi: w({ id: 'p18-kuaizi', hanzi: '筷子', pinyin: 'kuàizi', english: 'chopsticks', tones: [4, 0] }),
  shaozi: w({ id: 'p18-shaozi', hanzi: '勺子', pinyin: 'sháozi', english: 'spoon', tones: [2, 0] }),
  beizi: w({ id: 'p18-beizi', hanzi: '杯子', pinyin: 'bēizi', english: 'cup; glass', tones: [1, 0] }),
  panzi: w({ id: 'p18-panzi', hanzi: '盘子', pinyin: 'pánzi', english: 'plate; dish', tones: [2, 0] }),
  dao: w({ id: 'p18-dao', hanzi: '刀', pinyin: 'dāo', english: 'knife', tones: [1] }),
  guo: w({ id: 'p18-guo', hanzi: '锅', pinyin: 'guō', english: 'pot; wok', tones: [1] }),
  cai: w({ id: 'p18-cai', hanzi: '菜', pinyin: 'cài', english: 'vegetable; dish (of food)', tones: [4] }),
  xi: w({ id: 'p18-xi', hanzi: '洗', pinyin: 'xǐ', english: 'to wash', tones: [3] }),
  shuang: w({ id: 'p18-shuang', hanzi: '双', pinyin: 'shuāng', english: 'pair (measure word for chopsticks, shoes)', tones: [1] }),

  // ── Insects ──
  chongzi: w({ id: 'p18-chongzi', hanzi: '虫子', pinyin: 'chóngzi', english: 'bug; insect', tones: [2, 0] }),
  hudie: w({ id: 'p18-hudie', hanzi: '蝴蝶', pinyin: 'húdié', english: 'butterfly', tones: [2, 2] }),
  mifeng: w({ id: 'p18-mifeng', hanzi: '蜜蜂', pinyin: 'mìfēng', english: 'bee', literal: 'honey bee', tones: [4, 1] }),
  mayi: w({ id: 'p18-mayi', hanzi: '蚂蚁', pinyin: 'mǎyǐ', english: 'ant', tones: [3, 3] }),
  fei: w({ id: 'p18-fei', hanzi: '飞', pinyin: 'fēi', english: 'to fly', tones: [1] }),
} satisfies Record<string, Word>;

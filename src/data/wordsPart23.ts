import type { Word } from './types';

const w = (x: Word): Word => x;

/** Words for the second Grammar Ladder batch: ordinals, durations, modals, result verbs and contrast words. */
export const W23 = {
  // ── Level 1: 第 ordinals and 次 ──
  diyi: w({ id: 'p23-diyi', hanzi: '第一', pinyin: 'dìyī', english: 'first', tones: [4, 1] }),
  dier: w({ id: 'p23-dier', hanzi: '第二', pinyin: 'dìèr', english: 'second', tones: [4, 4] }),
  disan: w({ id: 'p23-disan', hanzi: '第三', pinyin: 'dìsān', english: 'third', tones: [4, 1] }),
  diyici: w({ id: 'p23-diyici', hanzi: '第一次', pinyin: 'dìyīcì', english: 'the first time', tones: [4, 1, 4] }),
  ge: w({ id: 'p23-ge', hanzi: '个', pinyin: 'gè', english: 'measure word (general)', tones: [4] }),

  // ── Level 1: durations ──
  duojiu: w({ id: 'p23-duojiu', hanzi: '多久', pinyin: 'duōjiǔ', english: 'how long', tones: [1, 3] }),
  xiaoshi: w({ id: 'p23-xiaoshi', hanzi: '小时', pinyin: 'xiǎoshí', english: 'hour', tones: [3, 2] }),
  tian: w({ id: 'p23-tian', hanzi: '天', pinyin: 'tiān', english: 'day', tones: [1] }),
  nian: w({ id: 'p23-nian', hanzi: '年', pinyin: 'nián', english: 'year', tones: [2] }),
  liang: w({ id: 'p23-liang', hanzi: '两', pinyin: 'liǎng', english: 'two', tones: [3] }),
  deng: w({ id: 'p23-deng', hanzi: '等', pinyin: 'děng', english: 'to wait', tones: [3] }),
  zhu: w({ id: 'p23-zhu', hanzi: '住', pinyin: 'zhù', english: 'to live; to stay', tones: [4] }),

  // ── Level 2: 应该, 必须, 最好 and 有点 ──
  yinggai: w({ id: 'p23-yinggai', hanzi: '应该', pinyin: 'yīnggāi', english: 'should; ought to', tones: [1, 1] }),
  bixu: w({ id: 'p23-bixu', hanzi: '必须', pinyin: 'bìxū', english: 'must; have to', tones: [4, 1] }),
  zuihao: w({ id: 'p23-zuihao', hanzi: '最好', pinyin: 'zuìhǎo', english: 'had better; it is best to', tones: [4, 3] }),
  bie: w({ id: 'p23-bie', hanzi: '别', pinyin: 'bié', english: 'do not', tones: [2] }),
  huzhao: w({ id: 'p23-huzhao', hanzi: '护照', pinyin: 'hùzhào', english: 'passport', tones: [4, 4] }),
  dai: w({ id: 'p23-dai', hanzi: '带', pinyin: 'dài', english: 'to bring; to carry', tones: [4] }),
  kaoshi: w({ id: 'p23-kaoshi', hanzi: '考试', pinyin: 'kǎoshì', english: 'exam; test', tones: [3, 4] }),
  youdian: w({ id: 'p23-youdian', hanzi: '有点', pinyin: 'yǒudiǎn', english: 'a bit (often negative)', tones: [3, 3] }),
  yidian: w({ id: 'p23-yidian', hanzi: '一点', pinyin: 'yìdiǎn', english: 'a little; a bit', tones: [4, 3] }),
  kuai: w({ id: 'p23-kuai', hanzi: '快', pinyin: 'kuài', english: 'fast; quick', tones: [4] }),
  gui: w({ id: 'p23-gui', hanzi: '贵', pinyin: 'guì', english: 'expensive', tones: [4] }),
  lei: w({ id: 'p23-lei', hanzi: '累', pinyin: 'lèi', english: 'tired', tones: [4] }),
  e: w({ id: 'p23-e', hanzi: '饿', pinyin: 'è', english: 'hungry', tones: [4] }),

  // ── Level 3: result verbs, 以为, 不如 ──
  kanwan: w({ id: 'p23-kanwan', hanzi: '看完', pinyin: 'kànwán', english: 'to finish watching or reading', literal: 'look finished', tones: [4, 2] }),
  tingdong: w({ id: 'p23-tingdong', hanzi: '听懂', pinyin: 'tīngdǒng', english: 'to understand by listening', literal: 'hear understood', tones: [1, 3] }),
  zuohao: w({ id: 'p23-zuohao', hanzi: '做好', pinyin: 'zuòhǎo', english: 'to finish well; to get it right', literal: 'make done well', tones: [4, 3] }),
  zuocuo: w({ id: 'p23-zuocuo', hanzi: '做错', pinyin: 'zuòcuò', english: 'to do wrong; to make a mistake', literal: 'make wrong', tones: [4, 4] }),
  zuoye: w({ id: 'p23-zuoye', hanzi: '作业', pinyin: 'zuòyè', english: 'homework', tones: [4, 4] }),
  ben: w({ id: 'p23-ben', hanzi: '本', pinyin: 'běn', english: 'measure word for books', tones: [3] }),
  shu: w({ id: 'p23-shu', hanzi: '书', pinyin: 'shū', english: 'book', tones: [1] }),
  yiwei: w({ id: 'p23-yiwei', hanzi: '以为', pinyin: 'yǐwéi', english: 'thought (but it turned out otherwise)', tones: [3, 2] }),
  qishi: w({ id: 'p23-qishi', hanzi: '其实', pinyin: 'qíshí', english: 'actually; in fact', tones: [2, 2] }),
  jintian: w({ id: 'p23-jintian', hanzi: '今天', pinyin: 'jīntiān', english: 'today', tones: [1, 1] }),
  xingqi: w({ id: 'p23-xingqi', hanzi: '星期', pinyin: 'xīngqī', english: 'week; weekday', tones: [1, 1] }),
  buru: w({ id: 'p23-buru', hanzi: '不如', pinyin: 'bù rú', english: 'not as good as; it would be better to', tones: [4, 2] }),
  mingtian: w({ id: 'p23-mingtian', hanzi: '明天', pinyin: 'míngtiān', english: 'tomorrow', tones: [2, 1] }),
  qu: w({ id: 'p23-qu', hanzi: '去', pinyin: 'qù', english: 'to go', tones: [4] }),
  gao: w({ id: 'p23-gao', hanzi: '高', pinyin: 'gāo', english: 'tall', tones: [1] }),

  // ── Level 4: 不过, 只是 ──
  buguo: w({ id: 'p23-buguo', hanzi: '不过', pinyin: 'búguò', english: 'but; however (softer than 但是)', tones: [2, 4] }),
  zhishi: w({ id: 'p23-zhishi', hanzi: '只是', pinyin: 'zhǐshì', english: 'just; only (softens a contrast)', tones: [3, 4] }),
  xiang: w({ id: 'p23-xiang', hanzi: '想', pinyin: 'xiǎng', english: 'to want; to think', tones: [3] }),
  shijian: w({ id: 'p23-shijian', hanzi: '时间', pinyin: 'shíjiān', english: 'time', tones: [2, 1] }),
  hao: w({ id: 'p23-hao', hanzi: '好', pinyin: 'hǎo', english: 'good', tones: [3] }),
  canting: w({ id: 'p23-canting', hanzi: '餐厅', pinyin: 'cāntīng', english: 'restaurant; dining hall', tones: [1, 1] }),
  zenmeyang: w({ id: 'p23-zenmeyang', hanzi: '怎么样', pinyin: 'zěnmeyàng', english: 'how is it', tones: [3, 0, 4] }),
  chi: w({ id: 'p23-chi', hanzi: '吃', pinyin: 'chī', english: 'to eat', tones: [1] }),
  xuexi: w({ id: 'p23-xuexi', hanzi: '学习', pinyin: 'xuéxí', english: 'to study; to learn', tones: [2, 2] }),
  zhong: w({ id: 'p23-zhong', hanzi: '中文', pinyin: 'Zhōngwén', english: 'Chinese language', tones: [1, 2] }),
} satisfies Record<string, Word>;

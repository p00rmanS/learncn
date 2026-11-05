import type { Word } from './types';

const w = (x: Word): Word => x;

/** Words for the Foundations lessons on the bathroom, music, spices, beans and tofu, soup, and Western food. */
export const W20 = {
  // ── Bath and bathroom ──
  xizao: w({ id: 'p20-xizao', hanzi: '洗澡', pinyin: 'xǐzǎo', english: 'to take a bath or shower', tones: [3, 3] }),
  maojin: w({ id: 'p20-maojin', hanzi: '毛巾', pinyin: 'máojīn', english: 'towel', tones: [2, 1] }),
  feizao: w({ id: 'p20-feizao', hanzi: '肥皂', pinyin: 'féizào', english: 'soap', tones: [2, 4] }),
  yagao: w({ id: 'p20-yagao', hanzi: '牙膏', pinyin: 'yágāo', english: 'toothpaste', tones: [2, 1] }),
  yashua: w({ id: 'p20-yashua', hanzi: '牙刷', pinyin: 'yáshuā', english: 'toothbrush', tones: [2, 1] }),
  shuzi: w({ id: 'p20-shuzi', hanzi: '梳子', pinyin: 'shūzi', english: 'comb', tones: [1, 0] }),
  yushi: w({ id: 'p20-yushi', hanzi: '浴室', pinyin: 'yùshì', english: 'bathroom (with a shower or bath)', tones: [4, 4] }),
  cesuo: w({ id: 'p20-cesuo', hanzi: '厕所', pinyin: 'cèsuǒ', english: 'toilet; restroom', tones: [4, 3] }),

  // ── Music and instruments ──
  yinyue: w({ id: 'p20-yinyue', hanzi: '音乐', pinyin: 'yīnyuè', english: 'music', tones: [1, 4] }),
  gangqin: w({ id: 'p20-gangqin', hanzi: '钢琴', pinyin: 'gāngqín', english: 'piano', tones: [1, 2] }),
  tan: w({ id: 'p20-tan', hanzi: '弹', pinyin: 'tán', english: 'to play (a string or keyboard instrument)', tones: [2] }),
  gu: w({ id: 'p20-gu', hanzi: '鼓', pinyin: 'gǔ', english: 'drum', tones: [3] }),
  jita: w({ id: 'p20-jita', hanzi: '吉他', pinyin: 'jítā', english: 'guitar', tones: [2, 1] }),
  xiaotiqin: w({ id: 'p20-xiaotiqin', hanzi: '小提琴', pinyin: 'xiǎotíqín', english: 'violin', tones: [3, 2, 2] }),

  // ── Spices and seasonings ──
  yan: w({ id: 'p20-yan', hanzi: '盐', pinyin: 'yán', english: 'salt', tones: [2] }),
  jiangyou: w({ id: 'p20-jiangyou', hanzi: '酱油', pinyin: 'jiàngyóu', english: 'soy sauce', tones: [4, 2] }),
  cu: w({ id: 'p20-cu', hanzi: '醋', pinyin: 'cù', english: 'vinegar', tones: [4] }),
  you: w({ id: 'p20-you', hanzi: '油', pinyin: 'yóu', english: 'oil', tones: [2] }),
  cong: w({ id: 'p20-cong', hanzi: '葱', pinyin: 'cōng', english: 'spring onion', tones: [1] }),
  jiang: w({ id: 'p20-jiang', hanzi: '姜', pinyin: 'jiāng', english: 'ginger', tones: [1] }),
  suan: w({ id: 'p20-suan', hanzi: '蒜', pinyin: 'suàn', english: 'garlic', tones: [4] }),

  // ── Beans, tofu and grains ──
  dou: w({ id: 'p20-dou', hanzi: '豆', pinyin: 'dòu', english: 'bean; pulse', tones: [4] }),
  doufu: w({ id: 'p20-doufu', hanzi: '豆腐', pinyin: 'dòufu', english: 'tofu', tones: [4, 0] }),
  doujiang: w({ id: 'p20-doujiang', hanzi: '豆浆', pinyin: 'dòujiāng', english: 'soy milk', tones: [4, 1] }),
  huasheng: w({ id: 'p20-huasheng', hanzi: '花生', pinyin: 'huāshēng', english: 'peanut', tones: [1, 1] }),
  mi: w({ id: 'p20-mi', hanzi: '米', pinyin: 'mǐ', english: 'rice (uncooked grain)', tones: [3] }),
  mianfen: w({ id: 'p20-mianfen', hanzi: '面粉', pinyin: 'miànfěn', english: 'flour', tones: [4, 3] }),

  // ── Soup and porridge ──
  tang: w({ id: 'p20-tang', hanzi: '汤', pinyin: 'tāng', english: 'soup', tones: [1] }),
  jitang: w({ id: 'p20-jitang', hanzi: '鸡汤', pinyin: 'jītāng', english: 'chicken soup', tones: [1, 1] }),
  zhou: w({ id: 'p20-zhou', hanzi: '粥', pinyin: 'zhōu', english: 'congee; rice porridge', tones: [1] }),
  fan: w({ id: 'p20-fan', hanzi: '饭', pinyin: 'fàn', english: 'cooked rice; meal', tones: [4] }),
  he: w({ id: 'p20-he', hanzi: '喝', pinyin: 'hē', english: 'to drink', tones: [1] }),

  // ── Western food ──
  hanbao: w({ id: 'p20-hanbao', hanzi: '汉堡', pinyin: 'hànbǎo', english: 'hamburger', tones: [4, 3] }),
  pisa: w({ id: 'p20-pisa', hanzi: '披萨', pinyin: 'pīsà', english: 'pizza', tones: [1, 4] }),
  shala: w({ id: 'p20-shala', hanzi: '沙拉', pinyin: 'shālā', english: 'salad', tones: [1, 1] }),
  regou: w({ id: 'p20-regou', hanzi: '热狗', pinyin: 'règǒu', english: 'hot dog', tones: [4, 3] }),
  sanmingzhi: w({ id: 'p20-sanmingzhi', hanzi: '三明治', pinyin: 'sānmíngzhì', english: 'sandwich', tones: [1, 2, 4] }),
} satisfies Record<string, Word>;

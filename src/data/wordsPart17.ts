import type { Word } from './types';

const w = (x: Word): Word => x;

/** Words for the Foundations lessons on days, opposites, school supplies and furniture. */
export const W17 = {
  // ── Days of the week ──
  xq1: w({ id: 'p17-xq1', hanzi: '星期一', pinyin: 'xīngqīyī', english: 'Monday', literal: 'week one', tones: [1, 1, 1] }),
  xq2: w({ id: 'p17-xq2', hanzi: '星期二', pinyin: 'xīngqīèr', english: 'Tuesday', literal: 'week two', tones: [1, 1, 4] }),
  xq3: w({ id: 'p17-xq3', hanzi: '星期三', pinyin: 'xīngqīsān', english: 'Wednesday', literal: 'week three', tones: [1, 1, 1] }),
  xq4: w({ id: 'p17-xq4', hanzi: '星期四', pinyin: 'xīngqīsì', english: 'Thursday', literal: 'week four', tones: [1, 1, 4] }),
  xq5: w({ id: 'p17-xq5', hanzi: '星期五', pinyin: 'xīngqīwǔ', english: 'Friday', literal: 'week five', tones: [1, 1, 3] }),
  xq6: w({ id: 'p17-xq6', hanzi: '星期六', pinyin: 'xīngqīliù', english: 'Saturday', literal: 'week six', tones: [1, 1, 4] }),
  xq7: w({ id: 'p17-xq7', hanzi: '星期天', pinyin: 'xīngqītiān', english: 'Sunday', literal: 'week day', tones: [1, 1, 1], note: '星期日 is the formal form. 星期天 is what people say every day.' }),
  jintian: w({ id: 'p17-jintian', hanzi: '今天', pinyin: 'jīntiān', english: 'today', tones: [1, 1] }),
  mingtian: w({ id: 'p17-mingtian', hanzi: '明天', pinyin: 'míngtiān', english: 'tomorrow', tones: [2, 1] }),
  zhoumo: w({ id: 'p17-zhoumo', hanzi: '周末', pinyin: 'zhōumò', english: 'weekend', tones: [1, 4] }),

  // ── Opposites ──
  da: w({ id: 'p17-da', hanzi: '大', pinyin: 'dà', english: 'big; large', tones: [4] }),
  xiao: w({ id: 'p17-xiao', hanzi: '小', pinyin: 'xiǎo', english: 'small; little', tones: [3] }),
  duo: w({ id: 'p17-duo', hanzi: '多', pinyin: 'duō', english: 'many; much; more', tones: [1] }),
  shao: w({ id: 'p17-shao', hanzi: '少', pinyin: 'shǎo', english: 'few; little; less', tones: [3] }),
  re: w({ id: 'p17-re', hanzi: '热', pinyin: 'rè', english: 'hot', tones: [4] }),
  leng: w({ id: 'p17-leng', hanzi: '冷', pinyin: 'lěng', english: 'cold', tones: [3] }),
  gao: w({ id: 'p17-gao', hanzi: '高', pinyin: 'gāo', english: 'tall; high', tones: [1] }),
  ai: w({ id: 'p17-ai', hanzi: '矮', pinyin: 'ǎi', english: 'short (height)', tones: [3] }),
  kuai: w({ id: 'p17-kuai', hanzi: '快', pinyin: 'kuài', english: 'fast; quick', tones: [4] }),
  man: w({ id: 'p17-man', hanzi: '慢', pinyin: 'màn', english: 'slow', tones: [4] }),
  chang: w({ id: 'p17-chang', hanzi: '长', pinyin: 'cháng', english: 'long', tones: [2] }),
  duan: w({ id: 'p17-duan', hanzi: '短', pinyin: 'duǎn', english: 'short (length)', tones: [3] }),

  // ── School supplies ──
  shubao: w({ id: 'p17-shubao', hanzi: '书包', pinyin: 'shūbāo', english: 'school bag; backpack', tones: [1, 1] }),
  bi: w({ id: 'p17-bi', hanzi: '笔', pinyin: 'bǐ', english: 'pen; pencil', tones: [3] }),
  qianbi: w({ id: 'p17-qianbi', hanzi: '铅笔', pinyin: 'qiānbǐ', english: 'pencil', literal: 'lead pen', tones: [1, 3] }),
  xiangpi: w({ id: 'p17-xiangpi', hanzi: '橡皮', pinyin: 'xiàngpí', english: 'eraser', literal: 'rubber', tones: [4, 2] }),
  chizi: w({ id: 'p17-chizi', hanzi: '尺子', pinyin: 'chǐzi', english: 'ruler', tones: [3, 0] }),
  benzi: w({ id: 'p17-benzi', hanzi: '本子', pinyin: 'běnzi', english: 'notebook', tones: [3, 0] }),
  zuoye: w({ id: 'p17-zuoye', hanzi: '作业', pinyin: 'zuòyè', english: 'homework', tones: [4, 4] }),
  heiban: w({ id: 'p17-heiban', hanzi: '黑板', pinyin: 'hēibǎn', english: 'blackboard', tones: [1, 3] }),
  laoshi: w({ id: 'p17-laoshi', hanzi: '老师', pinyin: 'lǎoshī', english: 'teacher', tones: [3, 1] }),
  zhong: w({ id: 'p17-zhong', hanzi: '重', pinyin: 'zhòng', english: 'heavy', tones: [4] }),

  // ── Furniture and things at home ──
  yizi: w({ id: 'p17-yizi', hanzi: '椅子', pinyin: 'yǐzi', english: 'chair', tones: [3, 0] }),
  chuang: w({ id: 'p17-chuang', hanzi: '床', pinyin: 'chuáng', english: 'bed', tones: [2] }),
  zhuozi: w({ id: 'p17-zhuozi', hanzi: '桌子', pinyin: 'zhuōzi', english: 'table; desk', tones: [1, 0] }),
  shafa: w({ id: 'p17-shafa', hanzi: '沙发', pinyin: 'shāfā', english: 'sofa', tones: [1, 1] }),
  bingxiang: w({ id: 'p17-bingxiang', hanzi: '冰箱', pinyin: 'bīngxiāng', english: 'fridge', literal: 'ice box', tones: [1, 1] }),
  dianshi: w({ id: 'p17-dianshi', hanzi: '电视', pinyin: 'diànshì', english: 'television; TV', tones: [4, 4] }),
  deng: w({ id: 'p17-deng', hanzi: '灯', pinyin: 'dēng', english: 'lamp; light', tones: [1] }),
  chuanghu: w({ id: 'p17-chuanghu', hanzi: '窗户', pinyin: 'chuānghu', english: 'window', tones: [1, 0] }),
  men: w({ id: 'p17-men', hanzi: '门', pinyin: 'mén', english: 'door', tones: [2] }),
  kai: w({ id: 'p17-kai', hanzi: '开', pinyin: 'kāi', english: 'to open; to turn on', tones: [1] }),
  guan: w({ id: 'p17-guan', hanzi: '关', pinyin: 'guān', english: 'to close; to turn off', tones: [1] }),
  shuijiao: w({ id: 'p17-shuijiao', hanzi: '睡觉', pinyin: 'shuìjiào', english: 'to sleep', tones: [4, 4] }),
  qianmian: w({ id: 'p17-qianmian', hanzi: '前面', pinyin: 'qiánmiàn', english: 'in front; ahead', tones: [2, 4] }),
  pangbian: w({ id: 'p17-pangbian', hanzi: '旁边', pinyin: 'pángbiān', english: 'beside; next to', tones: [2, 1] }),
} satisfies Record<string, Word>;

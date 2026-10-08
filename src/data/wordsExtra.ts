import type { Word } from './types';

const w = (x: Word): Word => x;

/** Words for the patterns, directions, weather, work and radicals lessons. */
export const W3 = {
  // Verbs
  lai: w({ id: 'lai', hanzi: '来', pinyin: 'lái', english: 'to come', tones: [2] }),
  kan: w({ id: 'kan', hanzi: '看', pinyin: 'kàn', english: 'to look; to watch; to read', tones: [4] }),
  mai: w({ id: 'mai', hanzi: '买', pinyin: 'mǎi', english: 'to buy', tones: [3] }),
  mai4: w({ id: 'mai4', hanzi: '卖', pinyin: 'mài', english: 'to sell', tones: [4] }),
  zuo: w({ id: 'zuo', hanzi: '做', pinyin: 'zuò', english: 'to do; to make', tones: [4] }),
  zou: w({ id: 'zou', hanzi: '走', pinyin: 'zǒu', english: 'to walk; to go', tones: [3] }),
  shuijiao: w({ id: 'shuijiao', hanzi: '睡觉', pinyin: 'shuìjiào', english: 'to sleep', tones: [4, 4] }),
  gongzuo: w({ id: 'gongzuo', hanzi: '工作', pinyin: 'gōngzuò', english: 'work; to work', tones: [1, 4] }),

  // Adjectives
  gaoxing: w({ id: 'gaoxing', hanzi: '高兴', pinyin: 'gāoxìng', english: 'happy; glad', tones: [1, 4] }),
  lei: w({ id: 'lei', hanzi: '累', pinyin: 'lèi', english: 'tired', tones: [4] }),
  mang: w({ id: 'mang', hanzi: '忙', pinyin: 'máng', english: 'busy', tones: [2] }),
  haochi: w({ id: 'haochi', hanzi: '好吃', pinyin: 'hǎochī', english: 'tasty', tones: [3, 1] }),
  piaoliang: w({ id: 'piaoliang', hanzi: '漂亮', pinyin: 'piàoliang', english: 'pretty; beautiful', tones: [4, 0] }),
  re: w({ id: 're', hanzi: '热', pinyin: 'rè', english: 'hot', tones: [4] }),
  leng: w({ id: 'leng', hanzi: '冷', pinyin: 'lěng', english: 'cold', tones: [3] }),

  // 在 and 了
  zai4: w({ id: 'zai4', hanzi: '在', pinyin: 'zài', english: 'to be at; at; in the middle of (doing)', tones: [4] }),
  gongsi: w({ id: 'gongsi', hanzi: '公司', pinyin: 'gōngsī', english: 'company; office', tones: [1, 1] }),
  le: w({ id: 'le', hanzi: '了', pinyin: 'le', english: 'completed action / new situation', tones: [0], say: '吃了', note: 'Audio plays 吃了 so the voice reads le correctly.' }),

  // Weather
  tianqi: w({ id: 'tianqi', hanzi: '天气', pinyin: 'tiānqì', english: 'weather', tones: [1, 4] }),
  yu: w({ id: 'yu', hanzi: '雨', pinyin: 'yǔ', english: 'rain', tones: [3] }),
  xiayu: w({ id: 'xiayu', hanzi: '下雨', pinyin: 'xià yǔ', english: 'to rain', tones: [4, 3], literal: 'rain falls' }),
  zenmeyang: w({ id: 'zenmeyang', hanzi: '怎么样', pinyin: 'zěnmeyàng', english: 'how is it?', tones: [3, 0, 4] }),

  // Directions
  zuobian: w({ id: 'zuobian', hanzi: '左边', pinyin: 'zuǒbian', english: 'left side', tones: [3, 0] }),
  youbian: w({ id: 'youbian', hanzi: '右边', pinyin: 'yòubian', english: 'right side', tones: [4, 0] }),
  qianmian: w({ id: 'qianmian', hanzi: '前面', pinyin: 'qiánmian', english: 'in front; ahead', tones: [2, 0] }),
  houmian: w({ id: 'houmian', hanzi: '后面', pinyin: 'hòumian', english: 'behind; at the back', tones: [4, 0] }),
  pangbian: w({ id: 'pangbian', hanzi: '旁边', pinyin: 'pángbiān', english: 'next to; beside', tones: [2, 1] }),
  xishoujian: w({ id: 'xishoujian', hanzi: '洗手间', pinyin: 'xǐshǒujiān', english: 'restroom', tones: [3, 3, 1], literal: 'wash-hands room' }),
  zheli: w({ id: 'zheli', hanzi: '这里', pinyin: 'zhèlǐ', english: 'here', tones: [4, 3] }),
  nali2: w({ id: 'nali2', hanzi: '那里', pinyin: 'nàlǐ', english: 'there', tones: [4, 3] }),

  // Jobs and service
  laoshi: w({ id: 'laoshi', hanzi: '老师', pinyin: 'lǎoshī', english: 'teacher', tones: [3, 1] }),
  yisheng: w({ id: 'yisheng', hanzi: '医生', pinyin: 'yīshēng', english: 'doctor', tones: [1, 1] }),
  fuwuyuan: w({ id: 'fuwuyuan', hanzi: '服务员', pinyin: 'fúwùyuán', english: 'waiter; service staff', tones: [2, 4, 2] }),
  jingli: w({ id: 'jingli', hanzi: '经理', pinyin: 'jīnglǐ', english: 'manager', tones: [1, 3] }),
  wei: w({ id: 'wei', hanzi: '位', pinyin: 'wèi', english: 'polite measure word for people', tones: [4], note: '几位 = how many people? 两位 = two people.' }),
  zuo4: w({ id: 'zuo4', hanzi: '坐', pinyin: 'zuò', english: 'to sit', tones: [4] }),
  deng: w({ id: 'deng', hanzi: '等', pinyin: 'děng', english: 'to wait', tones: [3] }),
  huanying: w({ id: 'huanying', hanzi: '欢迎光临', pinyin: 'huānyíng guānglín', english: 'welcome (said to arriving customers)', literal: 'welcome, your bright arrival', tones: [1, 2, 1, 2] }),
  qingzuo: w({ id: 'qingzuo', hanzi: '请坐', pinyin: 'qǐng zuò', english: 'please sit', tones: [3, 4] }),
  qingdeng: w({ id: 'qingdeng', hanzi: '请等一下', pinyin: 'qǐng děng yíxià', english: 'please wait a moment', tones: [3, 3, 2, 4] }),
  zhebianqing: w({ id: 'zhebianqing', hanzi: '这边请', pinyin: 'zhèbiān qǐng', english: 'this way, please', tones: [4, 1, 3] }),
  qingmanyong: w({ id: 'qingmanyong', hanzi: '请慢用', pinyin: 'qǐng màn yòng', english: 'please enjoy (your food or drink)', tones: [3, 4, 4], literal: 'please use slowly' }),

  // Radical examples
  hua: w({ id: 'hua', hanzi: '话', pinyin: 'huà', english: 'speech; words', tones: [4] }),
  wen: w({ id: 'wen', hanzi: '问', pinyin: 'wèn', english: 'to ask', tones: [4], literal: '门 gate + 口 mouth' }),
  fan: w({ id: 'fan', hanzi: '饭', pinyin: 'fàn', english: 'cooked rice; meal', tones: [4] }),
  he2: w({ id: 'he2', hanzi: '河', pinyin: 'hé', english: 'river', tones: [2] }),
} satisfies Record<string, Word>;

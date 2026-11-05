import type { Word } from './types';

const w = (x: Word): Word => x;

/** Words for the Foundations lessons on tastes, rice and noodles, meat and eggs, drinks, snacks, the morning routine, cooking verbs and play. */
export const W19 = {
  // ── Tastes ──
  tian: w({ id: 'p19-tian', hanzi: '甜', pinyin: 'tián', english: 'sweet', tones: [2] }),
  xian: w({ id: 'p19-xian', hanzi: '咸', pinyin: 'xián', english: 'salty', tones: [2] }),
  suan: w({ id: 'p19-suan', hanzi: '酸', pinyin: 'suān', english: 'sour', tones: [1] }),
  ku: w({ id: 'p19-ku', hanzi: '苦', pinyin: 'kǔ', english: 'bitter', tones: [3] }),
  la: w({ id: 'p19-la', hanzi: '辣', pinyin: 'là', english: 'spicy; hot (chilli)', tones: [4] }),
  haochi: w({ id: 'p19-haochi', hanzi: '好吃', pinyin: 'hǎochī', english: 'tasty; delicious', literal: 'good to eat', tones: [3, 1] }),

  // ── Rice, noodles and bread ──
  mifan: w({ id: 'p19-mifan', hanzi: '米饭', pinyin: 'mǐfàn', english: 'cooked rice', tones: [3, 4] }),
  miantiao: w({ id: 'p19-miantiao', hanzi: '面条', pinyin: 'miàntiáo', english: 'noodles', tones: [4, 2] }),
  jiaozi: w({ id: 'p19-jiaozi', hanzi: '饺子', pinyin: 'jiǎozi', english: 'dumplings', tones: [3, 0] }),
  baozi: w({ id: 'p19-baozi', hanzi: '包子', pinyin: 'bāozi', english: 'steamed stuffed bun', tones: [1, 0] }),
  mantou: w({ id: 'p19-mantou', hanzi: '馒头', pinyin: 'mántou', english: 'plain steamed bun', tones: [2, 0] }),
  mianbao: w({ id: 'p19-mianbao', hanzi: '面包', pinyin: 'miànbāo', english: 'bread', tones: [4, 1] }),

  // ── Meat, fish and eggs ──
  jidan: w({ id: 'p19-jidan', hanzi: '鸡蛋', pinyin: 'jīdàn', english: 'egg', literal: 'chicken egg', tones: [1, 4] }),
  jirou: w({ id: 'p19-jirou', hanzi: '鸡肉', pinyin: 'jīròu', english: 'chicken (meat)', tones: [1, 4] }),
  niurou: w({ id: 'p19-niurou', hanzi: '牛肉', pinyin: 'niúròu', english: 'beef', tones: [2, 4] }),
  zhurou: w({ id: 'p19-zhurou', hanzi: '猪肉', pinyin: 'zhūròu', english: 'pork', tones: [1, 4] }),
  yu: w({ id: 'p19-yu', hanzi: '鱼', pinyin: 'yú', english: 'fish', tones: [2] }),
  xia: w({ id: 'p19-xia', hanzi: '虾', pinyin: 'xiā', english: 'shrimp', tones: [1] }),

  // ── Drinks ──
  shui: w({ id: 'p19-shui', hanzi: '水', pinyin: 'shuǐ', english: 'water', tones: [3] }),
  niunai: w({ id: 'p19-niunai', hanzi: '牛奶', pinyin: 'niúnǎi', english: 'milk', tones: [2, 3] }),
  guozhi: w({ id: 'p19-guozhi', hanzi: '果汁', pinyin: 'guǒzhī', english: 'juice', tones: [3, 1] }),
  cha: w({ id: 'p19-cha', hanzi: '茶', pinyin: 'chá', english: 'tea', tones: [2] }),
  kafei: w({ id: 'p19-kafei', hanzi: '咖啡', pinyin: 'kāfēi', english: 'coffee', tones: [1, 1] }),
  kele: w({ id: 'p19-kele', hanzi: '可乐', pinyin: 'kělè', english: 'cola; soda', tones: [3, 4] }),

  // ── Snacks and sweets ──
  dangao: w({ id: 'p19-dangao', hanzi: '蛋糕', pinyin: 'dàngāo', english: 'cake', tones: [4, 1] }),
  binggan: w({ id: 'p19-binggan', hanzi: '饼干', pinyin: 'bǐnggān', english: 'biscuit; cookie', tones: [3, 1] }),
  tang: w({ id: 'p19-tang', hanzi: '糖', pinyin: 'táng', english: 'sugar; candy', tones: [2] }),
  bingqilin: w({ id: 'p19-bingqilin', hanzi: '冰淇淋', pinyin: 'bīngqílín', english: 'ice cream', tones: [1, 2, 2] }),
  qiaokeli: w({ id: 'p19-qiaokeli', hanzi: '巧克力', pinyin: 'qiǎokèlì', english: 'chocolate', tones: [3, 4, 4] }),
  shutiao: w({ id: 'p19-shutiao', hanzi: '薯条', pinyin: 'shǔtiáo', english: 'french fries', literal: 'potato strips', tones: [3, 2] }),

  // ── Morning routine ──
  qichuang: w({ id: 'p19-qichuang', hanzi: '起床', pinyin: 'qǐchuáng', english: 'to get up (out of bed)', tones: [3, 2] }),
  shuaya: w({ id: 'p19-shuaya', hanzi: '刷牙', pinyin: 'shuāyá', english: 'to brush teeth', tones: [1, 2] }),
  xilian: w({ id: 'p19-xilian', hanzi: '洗脸', pinyin: 'xǐliǎn', english: 'to wash your face', tones: [3, 3] }),
  chuanyifu: w({ id: 'p19-chuanyifu', hanzi: '穿衣服', pinyin: 'chuānyīfu', english: 'to get dressed', literal: 'wear clothes', tones: [1, 1, 0] }),
  zaofan: w({ id: 'p19-zaofan', hanzi: '早饭', pinyin: 'zǎofàn', english: 'breakfast', tones: [3, 4] }),
  shangxue: w({ id: 'p19-shangxue', hanzi: '上学', pinyin: 'shàngxué', english: 'to go to school', tones: [4, 2] }),

  // ── Cooking verbs ──
  zhu: w({ id: 'p19-zhu', hanzi: '煮', pinyin: 'zhǔ', english: 'to boil; to cook in water', tones: [3] }),
  chao: w({ id: 'p19-chao', hanzi: '炒', pinyin: 'chǎo', english: 'to stir-fry', tones: [3] }),
  zheng: w({ id: 'p19-zheng', hanzi: '蒸', pinyin: 'zhēng', english: 'to steam', tones: [1] }),
  kao: w({ id: 'p19-kao', hanzi: '烤', pinyin: 'kǎo', english: 'to bake; to grill', tones: [3] }),
  zha: w({ id: 'p19-zha', hanzi: '炸', pinyin: 'zhá', english: 'to deep-fry', tones: [2] }),
  qie: w({ id: 'p19-qie', hanzi: '切', pinyin: 'qiē', english: 'to cut; to slice', tones: [1] }),

  // ── Play ──
  wan: w({ id: 'p19-wan', hanzi: '玩', pinyin: 'wán', english: 'to play', tones: [2] }),
  pao: w({ id: 'p19-pao', hanzi: '跑', pinyin: 'pǎo', english: 'to run', tones: [3] }),
  tiao: w({ id: 'p19-tiao', hanzi: '跳', pinyin: 'tiào', english: 'to jump; to dance', tones: [4] }),
  huahua: w({ id: 'p19-huahua', hanzi: '画画', pinyin: 'huàhuà', english: 'to draw; to paint', tones: [4, 4] }),
  changge: w({ id: 'p19-changge', hanzi: '唱歌', pinyin: 'chànggē', english: 'to sing', tones: [4, 1] }),
  wanju: w({ id: 'p19-wanju', hanzi: '玩具', pinyin: 'wánjù', english: 'toy', tones: [2, 4] }),
} satisfies Record<string, Word>;

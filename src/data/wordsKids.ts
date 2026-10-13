import type { Word } from './types';

const w = (x: Word): Word => x;

/** Words for the Little Learners track (kinder and elementary). */
export const W8 = {
  // ── Six vowels chant ──
  ayi: w({ id: 'ayi', hanzi: '阿姨', pinyin: 'āyí', english: 'auntie (also a polite way to address a woman)', tones: [1, 2] }),
  gongji: w({ id: 'gongji', hanzi: '公鸡', pinyin: 'gōngjī', english: 'rooster', tones: [1, 1] }),
  e_goose: w({ id: 'e_goose', hanzi: '鹅', pinyin: 'é', english: 'goose', tones: [2] }),
  wuya: w({ id: 'wuya', hanzi: '乌鸦', pinyin: 'wūyā', english: 'crow', tones: [1, 1] }),
  yu_fish: w({ id: 'yu_fish', hanzi: '鱼', pinyin: 'yú', english: 'fish', tones: [2] }),

  // ── Initials chant ──
  niu: w({ id: 'niu', hanzi: '牛', pinyin: 'niú', english: 'cow; ox', tones: [2] }),
  tuzi: w({ id: 'tuzi', hanzi: '兔子', pinyin: 'tùzi', english: 'rabbit', tones: [4, 0] }),
  laohu: w({ id: 'laohu', hanzi: '老虎', pinyin: 'lǎohǔ', spoken: 'láohǔ', english: 'tiger', tones: [3, 3] }),
  ji_chicken: w({ id: 'ji_chicken', hanzi: '鸡', pinyin: 'jī', english: 'chicken', tones: [1] }),
  zhu_pig: w({ id: 'zhu_pig', hanzi: '猪', pinyin: 'zhū', english: 'pig', tones: [1] }),
  shou_hand: w({ id: 'shou_hand', hanzi: '手', pinyin: 'shǒu', english: 'hand', tones: [3] }),
  cao: w({ id: 'cao', hanzi: '草', pinyin: 'cǎo', english: 'grass', tones: [3] }),

  // ── Colors ──
  hong: w({ id: 'hong', hanzi: '红', pinyin: 'hóng', english: 'red', tones: [2] }),
  huang: w({ id: 'huang', hanzi: '黄', pinyin: 'huáng', english: 'yellow', tones: [2] }),
  lan: w({ id: 'lan', hanzi: '蓝', pinyin: 'lán', english: 'blue', tones: [2] }),
  bai_white: w({ id: 'bai_white', hanzi: '白', pinyin: 'bái', english: 'white', tones: [2] }),
  hei: w({ id: 'hei', hanzi: '黑', pinyin: 'hēi', english: 'black', tones: [1] }),
  taiyang: w({ id: 'taiyang', hanzi: '太阳', pinyin: 'tàiyáng', english: 'sun', tones: [4, 2] }),

  // ── Animals ──
  niao: w({ id: 'niao', hanzi: '鸟', pinyin: 'niǎo', english: 'bird', tones: [3] }),
  daxiang: w({ id: 'daxiang', hanzi: '大象', pinyin: 'dàxiàng', english: 'elephant', tones: [4, 4] }),
  houzi: w({ id: 'houzi', hanzi: '猴子', pinyin: 'hóuzi', english: 'monkey', tones: [2, 0] }),
  xiongmao: w({ id: 'xiongmao', hanzi: '熊猫', pinyin: 'xióngmāo', english: 'panda', tones: [2, 1] }),
  miaomiao: w({ id: 'miaomiao', hanzi: '喵喵', pinyin: 'miāo miāo', english: 'meow meow', tones: [1, 1] }),
  wangwang: w({ id: 'wangwang', hanzi: '汪汪', pinyin: 'wāng wāng', english: 'woof woof', tones: [1, 1] }),
  moumou: w({ id: 'moumou', hanzi: '哞哞', pinyin: 'mōu mōu', english: 'moo moo', tones: [1, 1] }),
  miemie: w({ id: 'miemie', hanzi: '咩咩', pinyin: 'miē miē', english: 'baa baa', tones: [1, 1] }),

  // ── Body ──
  yanjing: w({ id: 'yanjing_eyes', hanzi: '眼睛', pinyin: 'yǎnjing', english: 'eyes', tones: [3, 0] }),
  erduo: w({ id: 'erduo', hanzi: '耳朵', pinyin: 'ěrduo', english: 'ears', tones: [3, 0] }),
  bizi: w({ id: 'bizi', hanzi: '鼻子', pinyin: 'bízi', english: 'nose', tones: [2, 0] }),
  zuiba: w({ id: 'zuiba', hanzi: '嘴巴', pinyin: 'zuǐba', english: 'mouth', tones: [3, 0] }),
  jiao_foot: w({ id: 'jiao_foot', hanzi: '脚', pinyin: 'jiǎo', english: 'foot', tones: [3] }),
  momo: w({ id: 'momo', hanzi: '摸摸', pinyin: 'mō mo', english: 'touch (a little)', tones: [1, 0] }),
  paipai: w({ id: 'paipai', hanzi: '拍拍手', pinyin: 'pāi pai shǒu', english: 'clap your hands', tones: [1, 0, 3] }),
  duoduo: w({ id: 'duoduo', hanzi: '跺跺脚', pinyin: 'duò duo jiǎo', english: 'stamp your feet', tones: [4, 0, 3] }),

  // ── Love and feelings ──
  ai_love: w({ id: 'ai_love', hanzi: '爱', pinyin: 'ài', english: 'to love', tones: [4] }),
  woainini: w({ id: 'woainini', hanzi: '我爱你', pinyin: 'wǒ ài nǐ', spoken: 'wó ài nǐ', english: 'I love you', tones: [3, 4, 3] }),
  haipa: w({ id: 'haipa', hanzi: '害怕', pinyin: 'hàipà', english: 'scared', tones: [4, 4] }),
  biepa: w({ id: 'biepa', hanzi: '别怕', pinyin: 'bié pà', english: "don't be scared", tones: [2, 4] }),

  // ── Night routine ──
  wanan: w({ id: 'wanan', hanzi: '晚安', pinyin: 'wǎn’ān', english: 'good night', tones: [3, 1] }),
  shuaya: w({ id: 'shuaya', hanzi: '刷牙', pinyin: 'shuā yá', english: 'to brush teeth', tones: [1, 2] }),
  xishou: w({ id: 'xishou', hanzi: '洗手', pinyin: 'xǐ shǒu', english: 'to wash hands', tones: [3, 3] }),
  haomeng: w({ id: 'haomeng', hanzi: '好梦', pinyin: 'hǎo mèng', english: 'sweet dreams', tones: [3, 4] }),

  // ── School ──
  bi_pen: w({ id: 'bi_pen', hanzi: '笔', pinyin: 'bǐ', english: 'pen; pencil', tones: [3] }),
  benzi: w({ id: 'benzi', hanzi: '本子', pinyin: 'běnzi', english: 'notebook', tones: [3, 0] }),
  shubao: w({ id: 'shubao', hanzi: '书包', pinyin: 'shūbāo', english: 'school bag', tones: [1, 1] }),
  heiban: w({ id: 'heiban', hanzi: '黑板', pinyin: 'hēibǎn', english: 'blackboard', tones: [1, 3] }),
  jiaoshi: w({ id: 'jiaoshi', hanzi: '教室', pinyin: 'jiàoshì', english: 'classroom', tones: [4, 4] }),
  zuoxia: w({ id: 'zuoxia', hanzi: '坐下', pinyin: 'zuòxia', english: 'sit down', tones: [4, 0] }),
  zhanqilai: w({ id: 'zhanqilai', hanzi: '站起来', pinyin: 'zhàn qǐlái', english: 'stand up', tones: [4, 3, 2] }),
  anjing: w({ id: 'anjing', hanzi: '安静', pinyin: 'ānjìng', english: 'quiet', tones: [1, 4] }),
  jushou: w({ id: 'jushou', hanzi: '举手', pinyin: 'jǔ shǒu', english: 'raise your hand', tones: [3, 3] }),
  tingdong: w({ id: 'tingdong', hanzi: '听懂', pinyin: 'tīngdǒng', english: 'to understand (by listening)', tones: [1, 3] }),

  // ── School day ──
  shangxue: w({ id: 'shangxue', hanzi: '上学', pinyin: 'shàngxué', english: 'to go to school', tones: [4, 2] }),
  fangxue: w({ id: 'fangxue', hanzi: '放学', pinyin: 'fàngxué', english: 'school is out', tones: [4, 2] }),
  huijia: w({ id: 'huijia', hanzi: '回家', pinyin: 'huí jiā', english: 'to go home', tones: [2, 1] }),
  zuoye: w({ id: 'zuoye', hanzi: '作业', pinyin: 'zuòyè', english: 'homework', tones: [4, 4] }),

  // ── Seasons ──
  chuntian: w({ id: 'chuntian', hanzi: '春天', pinyin: 'chūntiān', english: 'spring', tones: [1, 1] }),
  xiatian: w({ id: 'xiatian', hanzi: '夏天', pinyin: 'xiàtiān', english: 'summer', tones: [4, 1] }),
  qiutian: w({ id: 'qiutian', hanzi: '秋天', pinyin: 'qiūtiān', english: 'autumn', tones: [1, 1] }),
  dongtian: w({ id: 'dongtian', hanzi: '冬天', pinyin: 'dōngtiān', english: 'winter', tones: [1, 1] }),
  xiaxue: w({ id: 'xiaxue', hanzi: '下雪', pinyin: 'xià xuě', english: 'to snow', tones: [4, 3] }),
  feng: w({ id: 'feng', hanzi: '风', pinyin: 'fēng', english: 'wind', tones: [1] }),

  // ── Sports ──
  tizuqiu: w({ id: 'tizuqiu', hanzi: '踢足球', pinyin: 'tī zúqiú', english: 'to play football', tones: [1, 2, 2] }),
  dalanqiu: w({ id: 'dalanqiu', hanzi: '打篮球', pinyin: 'dǎ lánqiú', english: 'to play basketball', tones: [3, 2, 2] }),
  youyong: w({ id: 'youyong', hanzi: '游泳', pinyin: 'yóuyǒng', english: 'to swim', tones: [2, 3] }),
  qichezi: w({ id: 'qichezi', hanzi: '骑自行车', pinyin: 'qí zìxíngchē', english: 'to ride a bike', tones: [2, 4, 2, 1] }),
  youxi: w({ id: 'youxi', hanzi: '游戏', pinyin: 'yóuxì', english: 'game', tones: [2, 4] }),

  // ── Nature ──
  yueliang: w({ id: 'yueliang', hanzi: '月亮', pinyin: 'yuèliang', english: 'moon', tones: [4, 0] }),
  xingxing: w({ id: 'xingxing', hanzi: '星星', pinyin: 'xīngxing', english: 'stars', tones: [1, 0] }),
  yun: w({ id: 'yun', hanzi: '云', pinyin: 'yún', english: 'cloud', tones: [2] }),
  shan: w({ id: 'shan', hanzi: '山', pinyin: 'shān', english: 'mountain', tones: [1] }),
  hua_flower: w({ id: 'hua_flower', hanzi: '花', pinyin: 'huā', english: 'flower', tones: [1] }),
  shu_tree: w({ id: 'shu_tree', hanzi: '树', pinyin: 'shù', english: 'tree', tones: [4] }),
  tianshang: w({ id: 'tianshang', hanzi: '天上', pinyin: 'tiānshang', english: 'in the sky', tones: [1, 0] }),

  // ── Shapes ──
  yuan_round: w({ id: 'yuan_round', hanzi: '圆', pinyin: 'yuán', english: 'round; circle', tones: [2] }),
  fang: w({ id: 'fang', hanzi: '方', pinyin: 'fāng', english: 'square', tones: [1] }),
  sanjiaoxing: w({ id: 'sanjiaoxing', hanzi: '三角形', pinyin: 'sānjiǎoxíng', english: 'triangle', tones: [1, 3, 2] }),
  xingzhuang: w({ id: 'xingzhuang', hanzi: '形状', pinyin: 'xíngzhuàng', english: 'shape', tones: [2, 4] }),

  // ── Party ──
  dangao: w({ id: 'dangao', hanzi: '蛋糕', pinyin: 'dàngāo', english: 'cake', tones: [4, 1] }),
  liwu: w({ id: 'liwu', hanzi: '礼物', pinyin: 'lǐwù', english: 'gift; present', tones: [3, 4] }),
  chuilazhu: w({ id: 'chuilazhu', hanzi: '吹蜡烛', pinyin: 'chuī làzhú', english: 'to blow out the candles', tones: [1, 4, 2] }),
  xuyuan: w({ id: 'xuyuan', hanzi: '许愿', pinyin: 'xǔ yuàn', english: 'to make a wish', tones: [3, 4] }),

  // ── Pets ──
  chongwu: w({ id: 'chongwu', hanzi: '宠物', pinyin: 'chǒngwù', english: 'pet', tones: [3, 4] }),
  ta_it: w({ id: 'ta_it', hanzi: '它', pinyin: 'tā', english: 'it (for animals and things)', tones: [1] }),
  keai: w({ id: 'keai', hanzi: '可爱', pinyin: 'kě’ài', english: 'cute; lovable', tones: [3, 4] }),
  xiaomao: w({ id: 'xiaomao', hanzi: '小猫', pinyin: 'xiǎomāo', english: 'kitten', tones: [3, 1] }),
  xiaogou: w({ id: 'xiaogou', hanzi: '小狗', pinyin: 'xiǎogǒu', english: 'puppy', tones: [3, 3] }),
} satisfies Record<string, Word>;

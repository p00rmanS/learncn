import type { Word } from './types';

const w = (x: Word): Word => x;

/** Words for the wants, likes, hobbies, dates, travel, health and colors lessons. */
export const W4 = {
  // We / together
  men: w({ id: 'men', hanzi: '们', pinyin: 'men', english: 'plural ending for people', tones: [0], say: '我们', note: 'Audio plays 我们. Only for people: 我们, 你们, 他们.' }),
  women: w({ id: 'women', hanzi: '我们', pinyin: 'wǒmen', english: 'we; us', tones: [3, 0] }),
  nimen: w({ id: 'nimen', hanzi: '你们', pinyin: 'nǐmen', english: 'you (plural)', tones: [3, 0] }),
  tamen: w({ id: 'tamen', hanzi: '他们', pinyin: 'tāmen', english: 'they; them', tones: [1, 0] }),
  yiqi: w({ id: 'yiqi', hanzi: '一起', pinyin: 'yìqǐ', english: 'together', tones: [4, 3], note: '一 becomes yì before tone 3.' }),
  ba: w({ id: 'ba', hanzi: '吧', pinyin: 'ba', english: 'suggestion particle ("let\'s…", "okay?")', tones: [0], say: '走吧' }),

  // Likes
  xihuan: w({ id: 'xihuan', hanzi: '喜欢', pinyin: 'xǐhuan', english: 'to like', tones: [3, 0] }),
  ye: w({ id: 'ye', hanzi: '也', pinyin: 'yě', english: 'also; too', tones: [3] }),
  dou: w({ id: 'dou', hanzi: '都', pinyin: 'dōu', english: 'all; both', tones: [1] }),
  zui: w({ id: 'zui', hanzi: '最', pinyin: 'zuì', english: 'most', tones: [4] }),

  // Hobbies
  zhoumo: w({ id: 'zhoumo', hanzi: '周末', pinyin: 'zhōumò', english: 'weekend', tones: [1, 4] }),
  dianying: w({ id: 'dianying', hanzi: '电影', pinyin: 'diànyǐng', english: 'movie', tones: [4, 3] }),
  yinyue: w({ id: 'yinyue', hanzi: '音乐', pinyin: 'yīnyuè', english: 'music', tones: [1, 4] }),
  paobu: w({ id: 'paobu', hanzi: '跑步', pinyin: 'pǎobù', english: 'to jog; to run', tones: [3, 4] }),
  changge: w({ id: 'changge', hanzi: '唱歌', pinyin: 'chànggē', english: 'to sing', tones: [4, 1] }),
  lvyou: w({ id: 'lvyou', hanzi: '旅游', pinyin: 'lǚyóu', english: 'to travel; tourism', tones: [3, 2] }),

  // Can / may
  keyi: w({ id: 'keyi', hanzi: '可以', pinyin: 'kěyǐ', spoken: 'kéyǐ', english: 'may; can (permission)', tones: [3, 3] }),

  // Dates and age
  nian: w({ id: 'nian', hanzi: '年', pinyin: 'nián', english: 'year', tones: [2] }),
  hao: w({ id: 'hao4', hanzi: '号', pinyin: 'hào', english: 'day of the month', tones: [4] }),
  shengri: w({ id: 'shengri', hanzi: '生日', pinyin: 'shēngrì', english: 'birthday', tones: [1, 4] }),
  sui: w({ id: 'sui', hanzi: '岁', pinyin: 'suì', english: 'years old', tones: [4] }),
  duoda: w({ id: 'duoda', hanzi: '多大', pinyin: 'duō dà', english: 'how old (for adults and peers)', tones: [1, 4] }),

  // Transport
  ditie: w({ id: 'ditie', hanzi: '地铁', pinyin: 'dìtiě', english: 'subway', tones: [4, 3] }),
  gongjiao: w({ id: 'gongjiao', hanzi: '公共汽车', pinyin: 'gōnggòng qìchē', english: 'bus', tones: [1, 4, 4, 1] }),
  chuzuche: w({ id: 'chuzuche', hanzi: '出租车', pinyin: 'chūzūchē', english: 'taxi', tones: [1, 1, 1] }),
  jichang: w({ id: 'jichang', hanzi: '机场', pinyin: 'jīchǎng', english: 'airport', tones: [1, 3] }),
  feiji: w({ id: 'feiji', hanzi: '飞机', pinyin: 'fēijī', english: 'airplane', tones: [1, 1] }),
  huoche: w({ id: 'huoche', hanzi: '火车', pinyin: 'huǒchē', english: 'train', tones: [3, 1] }),
  dao: w({ id: 'dao', hanzi: '到', pinyin: 'dào', english: 'to arrive; to', tones: [4] }),
  yuan: w({ id: 'yuan', hanzi: '远', pinyin: 'yuǎn', english: 'far', tones: [3] }),
  jin: w({ id: 'jin', hanzi: '近', pinyin: 'jìn', english: 'near', tones: [4] }),

  // Hotel
  jiudian: w({ id: 'jiudian', hanzi: '酒店', pinyin: 'jiǔdiàn', english: 'hotel', tones: [3, 4] }),
  fangjian: w({ id: 'fangjian', hanzi: '房间', pinyin: 'fángjiān', english: 'room', tones: [2, 1] }),
  ding: w({ id: 'ding', hanzi: '订', pinyin: 'dìng', english: 'to book; to reserve', tones: [4] }),
  zhu: w({ id: 'zhu', hanzi: '住', pinyin: 'zhù', english: 'to stay; to live', tones: [4] }),
  huzhao: w({ id: 'huzhao', hanzi: '护照', pinyin: 'hùzhào', english: 'passport', tones: [4, 4] }),
  yaoshi: w({ id: 'yaoshi', hanzi: '钥匙', pinyin: 'yàoshi', english: 'key', tones: [4, 0] }),
  zaocan: w({ id: 'zaocan', hanzi: '早餐', pinyin: 'zǎocān', english: 'breakfast', tones: [3, 1] }),

  // Health
  shufu: w({ id: 'shufu', hanzi: '舒服', pinyin: 'shūfu', english: 'comfortable; well', tones: [1, 0], note: '不舒服 means unwell.' }),
  tou: w({ id: 'tou', hanzi: '头', pinyin: 'tóu', english: 'head', tones: [2] }),
  duzi: w({ id: 'duzi', hanzi: '肚子', pinyin: 'dùzi', english: 'stomach; belly', tones: [4, 0] }),
  teng: w({ id: 'teng', hanzi: '疼', pinyin: 'téng', english: 'to hurt; painful', tones: [2] }),
  fashao: w({ id: 'fashao', hanzi: '发烧', pinyin: 'fāshāo', english: 'to have a fever', tones: [1, 1] }),
  yiyuan: w({ id: 'yiyuan', hanzi: '医院', pinyin: 'yīyuàn', english: 'hospital', tones: [1, 4] }),
  yao4: w({ id: 'yao4', hanzi: '药', pinyin: 'yào', english: 'medicine', tones: [4] }),
  bang: w({ id: 'bang', hanzi: '帮', pinyin: 'bāng', english: 'to help', tones: [1] }),
  jiuming: w({ id: 'jiuming', hanzi: '救命', pinyin: 'jiùmìng', english: 'help! (save my life)', tones: [4, 4] }),

  // Colors
  yanse: w({ id: 'yanse', hanzi: '颜色', pinyin: 'yánsè', english: 'color', tones: [2, 4] }),
  hongse: w({ id: 'hongse', hanzi: '红色', pinyin: 'hóngsè', english: 'red', tones: [2, 4] }),
  baise: w({ id: 'baise', hanzi: '白色', pinyin: 'báisè', english: 'white', tones: [2, 4] }),
  heise: w({ id: 'heise', hanzi: '黑色', pinyin: 'hēisè', english: 'black', tones: [1, 4] }),
  lanse: w({ id: 'lanse', hanzi: '蓝色', pinyin: 'lánsè', english: 'blue', tones: [2, 4] }),
  lvse: w({ id: 'lvse', hanzi: '绿色', pinyin: 'lǜsè', english: 'green', tones: [4, 4] }),
  huangse: w({ id: 'huangse', hanzi: '黄色', pinyin: 'huángsè', english: 'yellow', tones: [2, 4] }),
} satisfies Record<string, Word>;

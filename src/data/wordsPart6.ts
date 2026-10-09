import type { Word } from './types';

const w = (x: Word): Word => x;

/** Words for the comparison, experience, connectors, shopping, routine, family, countries and café lessons. */
export const W6 = {
  // Comparisons
  bi: w({ id: 'bi', hanzi: '比', pinyin: 'bǐ', english: 'than; to compare', tones: [3] }),
  geng: w({ id: 'geng', hanzi: '更', pinyin: 'gèng', english: 'even more', tones: [4] }),
  yiyang: w({ id: 'yiyang', hanzi: '一样', pinyin: 'yíyàng', english: 'the same', tones: [2, 4] }),
  gen: w({ id: 'gen', hanzi: '跟', pinyin: 'gēn', english: 'with; and', tones: [1] }),
  gao: w({ id: 'gao', hanzi: '高', pinyin: 'gāo', english: 'tall; high', tones: [1] }),
  ai: w({ id: 'ai', hanzi: '矮', pinyin: 'ǎi', english: 'short (height)', tones: [3] }),

  // Experience
  guo_exp: w({ id: 'guo_exp', hanzi: '过', pinyin: 'guo', english: 'has ever (experience marker)', tones: [0], say: '去过', note: 'Audio plays 去过 so the voice reads guo correctly.' }),
  beijing: w({ id: 'beijing', hanzi: '北京', pinyin: 'Běijīng', english: 'Beijing', tones: [3, 1] }),
  shanghai: w({ id: 'shanghai', hanzi: '上海', pinyin: 'Shànghǎi', english: 'Shanghai', tones: [4, 3] }),

  // Connectors
  yinwei: w({ id: 'yinwei', hanzi: '因为', pinyin: 'yīnwèi', english: 'because', tones: [1, 4] }),
  suoyi: w({ id: 'suoyi', hanzi: '所以', pinyin: 'suǒyǐ', spoken: 'suóyǐ', english: 'so; therefore', tones: [3, 3] }),
  danshi: w({ id: 'danshi', hanzi: '但是', pinyin: 'dànshì', english: 'but', tones: [4, 4] }),
  ruguo: w({ id: 'ruguo', hanzi: '如果', pinyin: 'rúguǒ', english: 'if', tones: [2, 3] }),
  jiu: w({ id: 'jiu', hanzi: '就', pinyin: 'jiù', english: 'then; right away', tones: [4] }),

  // Timing
  yijing: w({ id: 'yijing', hanzi: '已经', pinyin: 'yǐjīng', spoken: 'yíjīng', english: 'already', tones: [3, 1] }),
  gang: w({ id: 'gang', hanzi: '刚', pinyin: 'gāng', english: 'just (a moment ago)', tones: [1] }),
  zhengzai: w({ id: 'zhengzai', hanzi: '正在', pinyin: 'zhèngzài', english: 'in the middle of (doing)', tones: [4, 4] }),

  // Clothes
  yifu: w({ id: 'yifu', hanzi: '衣服', pinyin: 'yīfu', english: 'clothes', tones: [1, 0] }),
  kuzi: w({ id: 'kuzi', hanzi: '裤子', pinyin: 'kùzi', english: 'pants; trousers', tones: [4, 0] }),
  xie: w({ id: 'xie', hanzi: '鞋', pinyin: 'xié', english: 'shoes', tones: [2] }),
  jian: w({ id: 'jian', hanzi: '件', pinyin: 'jiàn', english: 'measure word for clothes (tops, jackets)', tones: [4] }),
  tiao: w({ id: 'tiao', hanzi: '条', pinyin: 'tiáo', english: 'measure word for pants, long things', tones: [2] }),
  shuang: w({ id: 'shuang', hanzi: '双', pinyin: 'shuāng', english: 'pair (measure word for shoes)', tones: [1] }),
  shi_try: w({ id: 'shi_try', hanzi: '试', pinyin: 'shì', english: 'to try; to try on', tones: [4] }),
  yixia: w({ id: 'yixia', hanzi: '一下', pinyin: 'yíxià', english: 'a bit; for a moment', tones: [2, 4], note: 'Softens a request: 试一下 = "give it a try".' }),
  heshi: w({ id: 'heshi', hanzi: '合适', pinyin: 'héshì', english: 'fitting; suitable', tones: [2, 4] }),
  shiyijian: w({ id: 'shiyijian', hanzi: '试衣间', pinyin: 'shìyījiān', english: 'fitting room', tones: [4, 1, 1] }),

  // Taxi and delivery
  dache: w({ id: 'dache', hanzi: '打车', pinyin: 'dǎchē', english: 'to take a taxi; to hail a ride', tones: [3, 1] }),
  shifu: w({ id: 'shifu', hanzi: '师傅', pinyin: 'shīfu', english: 'driver; master (polite address)', tones: [1, 0] }),
  dizhi: w({ id: 'dizhi', hanzi: '地址', pinyin: 'dìzhǐ', english: 'address', tones: [4, 3] }),
  ting: w({ id: 'ting_stop', hanzi: '停', pinyin: 'tíng', english: 'to stop', tones: [2] }),
  song: w({ id: 'song', hanzi: '送', pinyin: 'sòng', english: 'to deliver; to see off', tones: [4] }),
  waimai: w({ id: 'waimai', hanzi: '外卖', pinyin: 'wàimài', english: 'food delivery; takeout', tones: [4, 4] }),

  // Routine
  xuexi: w({ id: 'xuexi', hanzi: '学习', pinyin: 'xuéxí', english: 'to study', tones: [2, 2] }),
  tongxue: w({ id: 'tongxue', hanzi: '同学', pinyin: 'tóngxué', english: 'classmate', tones: [2, 2] }),
  tongshi: w({ id: 'tongshi', hanzi: '同事', pinyin: 'tóngshì', english: 'coworker', tones: [2, 4] }),
  shangban: w({ id: 'shangban', hanzi: '上班', pinyin: 'shàngbān', english: 'to go to work', tones: [4, 1] }),
  xiaban: w({ id: 'xiaban', hanzi: '下班', pinyin: 'xiàbān', english: 'to finish work', tones: [4, 1] }),
  meitian: w({ id: 'meitian', hanzi: '每天', pinyin: 'měitiān', english: 'every day', tones: [3, 1] }),
  qichuang: w({ id: 'qichuang', hanzi: '起床', pinyin: 'qǐchuáng', english: 'to get up', tones: [3, 2] }),
  changchang: w({ id: 'changchang', hanzi: '常常', pinyin: 'chángcháng', english: 'often', tones: [2, 2] }),

  // Family (extended)
  fumu: w({ id: 'fumu', hanzi: '父母', pinyin: 'fùmǔ', english: 'parents', tones: [4, 3] }),
  erzi: w({ id: 'erzi', hanzi: '儿子', pinyin: 'érzi', english: 'son', tones: [2, 0] }),
  nver: w({ id: 'nver', hanzi: '女儿', pinyin: 'nǚ’ér', english: 'daughter', tones: [3, 2] }),
  haizi: w({ id: 'haizi', hanzi: '孩子', pinyin: 'háizi', english: 'child; children', tones: [2, 0] }),
  yeye: w({ id: 'yeye', hanzi: '爷爷', pinyin: 'yéye', english: "grandfather (father's side)", tones: [2, 0] }),
  nainai: w({ id: 'nainai', hanzi: '奶奶', pinyin: 'nǎinai', english: "grandmother (father's side)", tones: [3, 0] }),

  // Countries and languages
  na_which: w({ id: 'na_which', hanzi: '哪', pinyin: 'nǎ', english: 'which', tones: [3] }),
  guo_country: w({ id: 'guo_country', hanzi: '国', pinyin: 'guó', english: 'country', tones: [2] }),
  meiguo: w({ id: 'meiguo', hanzi: '美国', pinyin: 'Měiguó', english: 'the USA', tones: [3, 2] }),
  yingguo: w({ id: 'yingguo', hanzi: '英国', pinyin: 'Yīngguó', english: 'the UK', tones: [1, 2] }),
  riben: w({ id: 'riben', hanzi: '日本', pinyin: 'Rìběn', english: 'Japan', tones: [4, 3] }),
  hanguo: w({ id: 'hanguo', hanzi: '韩国', pinyin: 'Hánguó', english: 'South Korea', tones: [2, 2] }),
  manila: w({ id: 'manila', hanzi: '马尼拉', pinyin: 'Mǎnílā', english: 'Manila', tones: [3, 2, 1] }),
  zhuzai: w({ id: 'zhuzai', hanzi: '住在', pinyin: 'zhù zài', english: 'to live in', tones: [4, 4] }),
  yuyan: w({ id: 'yuyan', hanzi: '语言', pinyin: 'yǔyán', english: 'language', tones: [3, 2] }),
  tajialuyu: w({ id: 'tajialuyu', hanzi: '他加禄语', pinyin: 'Tǎjiālùyǔ', english: 'Tagalog', tones: [3, 1, 4, 3], note: '菲律宾语 (Fēilǜbīnyǔ) is also used for Filipino.' }),

  // Drinks
  naicha: w({ id: 'naicha', hanzi: '奶茶', pinyin: 'nǎichá', english: 'milk tea', tones: [3, 2] }),
  pijiu: w({ id: 'pijiu', hanzi: '啤酒', pinyin: 'píjiǔ', english: 'beer', tones: [2, 3] }),
  guozhi: w({ id: 'guozhi', hanzi: '果汁', pinyin: 'guǒzhī', english: 'fruit juice', tones: [3, 1] }),
  bing: w({ id: 'bing', hanzi: '冰', pinyin: 'bīng', english: 'ice; iced', tones: [1] }),
  qubing: w({ id: 'qubing', hanzi: '去冰', pinyin: 'qù bīng', english: 'no ice', tones: [4, 1], literal: 'remove ice' }),
  tang: w({ id: 'tang', hanzi: '糖', pinyin: 'táng', english: 'sugar', tones: [2] }),
  shaotang: w({ id: 'shaotang', hanzi: '少糖', pinyin: 'shǎo táng', english: 'less sugar', tones: [3, 2] }),
  haishi: w({ id: 'haishi', hanzi: '还是', pinyin: 'háishi', english: 'or (in a question)', tones: [2, 0] }),
  dabei: w({ id: 'dabei', hanzi: '大杯', pinyin: 'dàbēi', english: 'large size (cup)', tones: [4, 1] }),
  xiaobei: w({ id: 'xiaobei', hanzi: '小杯', pinyin: 'xiǎobēi', english: 'small size (cup)', tones: [3, 1] }),
  zhenzhu: w({ id: 'zhenzhu', hanzi: '珍珠', pinyin: 'zhēnzhū', english: 'tapioca pearls', tones: [1, 1], literal: 'pearls' }),
} satisfies Record<string, Word>;

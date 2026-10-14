import type { Word } from './types';

const w = (x: Word): Word => x;

/** Words for the money, frequency, travel-help, festival, pharmacy, hotel, office and extra kids lessons. */
export const W9 = {
  // ── Big numbers ──
  qian_thousand: w({ id: 'qian_thousand', hanzi: '千', pinyin: 'qiān', english: 'thousand', tones: [1] }),
  wan_tenk: w({ id: 'wan_tenk', hanzi: '万', pinyin: 'wàn', english: 'ten thousand', tones: [4], note: 'Chinese groups numbers in 10,000s, not 1,000s.' }),

  // ── Frequency ──
  zongshi: w({ id: 'zongshi', hanzi: '总是', pinyin: 'zǒngshì', spoken: 'zóngshì', english: 'always', tones: [3, 4] }),
  youshihou: w({ id: 'youshihou', hanzi: '有时候', pinyin: 'yǒu shíhou', english: 'sometimes', tones: [3, 2, 0] }),
  henshao: w({ id: 'henshao', hanzi: '很少', pinyin: 'hěn shǎo', spoken: 'hén shǎo', english: 'rarely', tones: [3, 3] }),
  conglaibu: w({ id: 'conglaibu', hanzi: '从来不', pinyin: 'cónglái bù', english: 'never (as a habit)', tones: [2, 2, 4] }),
  meizhou: w({ id: 'meizhou', hanzi: '每周', pinyin: 'měi zhōu', english: 'every week', tones: [3, 1] }),
  ci_times: w({ id: 'ci_times', hanzi: '次', pinyin: 'cì', english: 'time (occasion)', tones: [4] }),

  // ── Bank ──
  yinhang: w({ id: 'yinhang', hanzi: '银行', pinyin: 'yínháng', english: 'bank', tones: [2, 2] }),
  quqian: w({ id: 'quqian', hanzi: '取钱', pinyin: 'qǔ qián', english: 'to withdraw money', tones: [3, 2] }),
  huanqian: w({ id: 'huanqian', hanzi: '换钱', pinyin: 'huàn qián', english: 'to exchange money', tones: [4, 2] }),
  huilv: w({ id: 'huilv', hanzi: '汇率', pinyin: 'huìlǜ', english: 'exchange rate', tones: [4, 4] }),
  renminbi: w({ id: 'renminbi', hanzi: '人民币', pinyin: 'rénmínbì', english: 'Chinese yuan (RMB)', tones: [2, 2, 4] }),
  meiyuan: w({ id: 'meiyuan', hanzi: '美元', pinyin: 'měiyuán', english: 'US dollar', tones: [3, 2] }),
  biso: w({ id: 'biso', hanzi: '比索', pinyin: 'bǐsuǒ', english: 'peso', tones: [3, 3], note: '菲律宾比索 is the Philippine peso.' }),
  qukuanji: w({ id: 'qukuanji', hanzi: '取款机', pinyin: 'qǔkuǎnjī', english: 'ATM', tones: [3, 3, 1] }),

  // ── Discounts ──
  dazhe: w({ id: 'dazhe', hanzi: '打折', pinyin: 'dǎ zhé', english: 'to give a discount', tones: [3, 2] }),
  youhui: w({ id: 'youhui', hanzi: '优惠', pinyin: 'yōuhuì', english: 'special offer; discount', tones: [1, 4] }),
  tuihuo: w({ id: 'tuihuo', hanzi: '退货', pinyin: 'tuì huò', english: 'to return goods', tones: [4, 4] }),

  // ── Floors ──
  lou: w({ id: 'lou', hanzi: '楼', pinyin: 'lóu', english: 'floor; building', tones: [2] }),
  dianti: w({ id: 'dianti', hanzi: '电梯', pinyin: 'diàntī', english: 'elevator', tones: [4, 1] }),
  louti: w({ id: 'louti', hanzi: '楼梯', pinyin: 'lóutī', english: 'stairs', tones: [2, 1] }),

  // ── Help ──
  jingcha: w({ id: 'jingcha', hanzi: '警察', pinyin: 'jǐngchá', english: 'police', tones: [3, 2] }),
  diu: w({ id: 'diu', hanzi: '丢', pinyin: 'diū', english: 'to lose; to be lost', tones: [1] }),
  qianbao: w({ id: 'qianbao', hanzi: '钱包', pinyin: 'qiánbāo', english: 'wallet', tones: [2, 1] }),
  dashiguan: w({ id: 'dashiguan', hanzi: '大使馆', pinyin: 'dàshǐguǎn', english: 'embassy', tones: [4, 3, 3] }),
  baojing: w({ id: 'baojing', hanzi: '报警', pinyin: 'bào jǐng', english: 'to call the police', tones: [4, 3] }),

  // ── Festivals ──
  chunjie: w({ id: 'chunjie', hanzi: '春节', pinyin: 'Chūnjié', english: 'Spring Festival (Chinese New Year)', tones: [1, 2] }),
  zhongqiujie: w({ id: 'zhongqiujie', hanzi: '中秋节', pinyin: 'Zhōngqiūjié', english: 'Mid-Autumn Festival', tones: [1, 1, 2] }),
  hongbao: w({ id: 'hongbao', hanzi: '红包', pinyin: 'hóngbāo', english: 'red envelope (gift of money)', tones: [2, 1] }),
  jiaozi: w({ id: 'jiaozi', hanzi: '饺子', pinyin: 'jiǎozi', english: 'dumplings', tones: [3, 0] }),
  yuebing: w({ id: 'yuebing', hanzi: '月饼', pinyin: 'yuèbǐng', english: 'mooncake', tones: [4, 3] }),
  gongxifacai: w({ id: 'gongxifacai', hanzi: '恭喜发财', pinyin: 'gōngxǐ fācái', english: 'wishing you prosperity', tones: [1, 3, 1, 2] }),

  // ── Pharmacy ──
  yaodian: w({ id: 'yaodian', hanzi: '药店', pinyin: 'yàodiàn', english: 'pharmacy', tones: [4, 4] }),
  ganmao: w({ id: 'ganmao', hanzi: '感冒', pinyin: 'gǎnmào', english: 'a cold; to catch a cold', tones: [3, 4] }),
  kesou: w({ id: 'kesou', hanzi: '咳嗽', pinyin: 'késou', english: 'to cough', tones: [2, 0] }),
  pian: w({ id: 'pian', hanzi: '片', pinyin: 'piàn', english: 'tablet; slice (measure word)', tones: [4] }),
  fanhou: w({ id: 'fanhou', hanzi: '饭后', pinyin: 'fàn hòu', english: 'after meals', tones: [4, 4] }),
  chiyao: w({ id: 'chiyao', hanzi: '吃药', pinyin: 'chī yào', english: 'to take medicine', tones: [1, 4] }),

  // ── Hotel requests ──
  kongtiao: w({ id: 'kongtiao', hanzi: '空调', pinyin: 'kōngtiáo', english: 'air conditioning', tones: [1, 2] }),
  reshui: w({ id: 'reshui', hanzi: '热水', pinyin: 'rèshuǐ', english: 'hot water', tones: [4, 3] }),
  maojin: w({ id: 'maojin', hanzi: '毛巾', pinyin: 'máojīn', english: 'towel', tones: [2, 1] }),
  dasao: w({ id: 'dasao', hanzi: '打扫', pinyin: 'dǎsǎo', spoken: 'dásǎo', english: 'to clean', tones: [3, 3] }),
  fangka: w({ id: 'fangka', hanzi: '房卡', pinyin: 'fángkǎ', english: 'room key card', tones: [2, 3] }),
  tuifang: w({ id: 'tuifang', hanzi: '退房', pinyin: 'tuì fáng', english: 'to check out', tones: [4, 2] }),

  // ── Office ──
  kaihui: w({ id: 'kaihui', hanzi: '开会', pinyin: 'kāi huì', english: 'to have a meeting', tones: [1, 4] }),
  huiyi: w({ id: 'huiyi', hanzi: '会议', pinyin: 'huìyì', english: 'meeting; conference', tones: [4, 4] }),
  laoban: w({ id: 'laoban', hanzi: '老板', pinyin: 'lǎobǎn', spoken: 'láobǎn', english: 'boss', tones: [3, 3] }),
  bangongshi: w({ id: 'bangongshi', hanzi: '办公室', pinyin: 'bàngōngshì', english: 'office', tones: [4, 1, 4] }),
  fayoujian: w({ id: 'fayoujian', hanzi: '发邮件', pinyin: 'fā yóujiàn', english: 'to send an email', tones: [1, 2, 4] }),
  dayin: w({ id: 'dayin', hanzi: '打印', pinyin: 'dǎyìn', english: 'to print', tones: [3, 4] }),

  // ── Kids: rhyme, vehicles, clothes, manners, rooms, calendar ──
  shangshan: w({ id: 'shangshan', hanzi: '上山', pinyin: 'shàng shān', english: 'go up the mountain', tones: [4, 1] }),
  da_hit: w({ id: 'da_hit', hanzi: '打', pinyin: 'dǎ', english: 'to hit; to catch', tones: [3] }),
  songshu: w({ id: 'songshu', hanzi: '松鼠', pinyin: 'sōngshǔ', english: 'squirrel', tones: [1, 3] }),
  qiche: w({ id: 'qiche', hanzi: '汽车', pinyin: 'qìchē', english: 'car', tones: [4, 1] }),
  zixingche: w({ id: 'zixingche', hanzi: '自行车', pinyin: 'zìxíngchē', english: 'bicycle', tones: [4, 2, 1] }),
  chuan_boat: w({ id: 'chuan_boat', hanzi: '船', pinyin: 'chuán', english: 'boat', tones: [2] }),
  maozi: w({ id: 'maozi', hanzi: '帽子', pinyin: 'màozi', english: 'hat', tones: [4, 0] }),
  wazi: w({ id: 'wazi', hanzi: '袜子', pinyin: 'wàzi', english: 'socks', tones: [4, 0] }),
  chuan_wear: w({ id: 'chuan_wear', hanzi: '穿', pinyin: 'chuān', english: 'to wear (clothes)', tones: [1] }),
  mofa: w({ id: 'mofa', hanzi: '魔法', pinyin: 'mófǎ', english: 'magic', tones: [2, 3] }),
  ci_word: w({ id: 'ci_word', hanzi: '词', pinyin: 'cí', english: 'word', tones: [2] }),
  fangzi: w({ id: 'fangzi', hanzi: '房子', pinyin: 'fángzi', english: 'house', tones: [2, 0] }),
  keting: w({ id: 'keting', hanzi: '客厅', pinyin: 'kètīng', english: 'living room', tones: [4, 1] }),
  chufang: w({ id: 'chufang', hanzi: '厨房', pinyin: 'chúfáng', english: 'kitchen', tones: [2, 2] }),
  woshi: w({ id: 'woshi', hanzi: '卧室', pinyin: 'wòshì', english: 'bedroom', tones: [4, 4] }),
  huayuan: w({ id: 'huayuan', hanzi: '花园', pinyin: 'huāyuán', english: 'garden', tones: [1, 2] }),
  zuofan: w({ id: 'zuofan', hanzi: '做饭', pinyin: 'zuò fàn', english: 'to cook', tones: [4, 4] }),
  rili: w({ id: 'rili', hanzi: '日历', pinyin: 'rìlì', english: 'calendar', tones: [4, 4] }),
} satisfies Record<string, Word>;

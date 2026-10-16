import type { Word } from './types';

const w = (x: Word): Word => x;

/** Words for hot pot, breakfast, booking, hospital, manners, online shopping, interview, service and kids' toys/park. */
export const W11 = {
  // ── Hot pot ──
  huoguo: w({ id: 'huoguo', hanzi: '火锅', pinyin: 'huǒguō', english: 'hot pot', tones: [3, 1] }),
  guodi: w({ id: 'guodi', hanzi: '锅底', pinyin: 'guōdǐ', english: 'soup base (hot pot)', tones: [1, 3] }),
  yuanyang: w({ id: 'yuanyang', hanzi: '鸳鸯锅', pinyin: 'yuānyāngguō', english: 'split pot (spicy and mild)', tones: [1, 1, 1] }),
  qingtang: w({ id: 'qingtang', hanzi: '清汤', pinyin: 'qīngtāng', english: 'clear mild broth', tones: [1, 1] }),
  yangrou: w({ id: 'yangrou', hanzi: '羊肉', pinyin: 'yángròu', english: 'lamb; mutton', tones: [2, 4] }),
  niurou: w({ id: 'niurou', hanzi: '牛肉', pinyin: 'niúròu', english: 'beef', tones: [2, 4] }),
  doufu: w({ id: 'doufu', hanzi: '豆腐', pinyin: 'dòufu', english: 'tofu', tones: [4, 0] }),
  zhanliao: w({ id: 'zhanliao', hanzi: '蘸料', pinyin: 'zhànliào', english: 'dipping sauce', tones: [4, 4] }),
  shuan: w({ id: 'shuan', hanzi: '涮', pinyin: 'shuàn', english: 'to dip-cook in hot broth', tones: [4] }),

  // ── Breakfast ──
  doujiang: w({ id: 'doujiang', hanzi: '豆浆', pinyin: 'dòujiāng', english: 'soy milk', tones: [4, 1] }),
  youtiao: w({ id: 'youtiao', hanzi: '油条', pinyin: 'yóutiáo', english: 'fried dough stick', tones: [2, 2] }),
  baozi: w({ id: 'baozi', hanzi: '包子', pinyin: 'bāozi', english: 'steamed stuffed bun', tones: [1, 0] }),
  mantou: w({ id: 'mantou', hanzi: '馒头', pinyin: 'mántou', english: 'plain steamed bun', tones: [2, 0] }),
  zhou: w({ id: 'zhou', hanzi: '粥', pinyin: 'zhōu', english: 'rice porridge (congee)', tones: [1] }),

  // ── Booking a table ──
  yuding: w({ id: 'yuding', hanzi: '预订', pinyin: 'yùdìng', english: 'to reserve; to book', tones: [4, 4] }),
  weizi: w({ id: 'weizi', hanzi: '位子', pinyin: 'wèizi', english: 'seat; table', tones: [4, 0] }),
  baojian: w({ id: 'baojian', hanzi: '包间', pinyin: 'bāojiān', english: 'private room', tones: [1, 1] }),
  jinwan: w({ id: 'jinwan', hanzi: '今晚', pinyin: 'jīnwǎn', english: 'tonight', tones: [1, 3] }),
  guixing: w({ id: 'guixing', hanzi: '贵姓', pinyin: 'guìxìng', english: 'your surname (polite)', tones: [4, 4] }),
  xing_surname: w({ id: 'xing_surname', hanzi: '姓', pinyin: 'xìng', english: 'surname; to be surnamed', tones: [4] }),

  // ── Hospital ──
  guahao: w({ id: 'guahao', hanzi: '挂号', pinyin: 'guà hào', english: 'to register (at a hospital)', tones: [4, 4] }),
  kanbing: w({ id: 'kanbing', hanzi: '看病', pinyin: 'kàn bìng', english: 'to see a doctor', tones: [4, 4] }),
  bing: w({ id: 'bing_ill', hanzi: '病', pinyin: 'bìng', english: 'illness', tones: [4] }),
  yateng: w({ id: 'yateng', hanzi: '牙疼', pinyin: 'yá téng', english: 'toothache', tones: [2, 2] }),
  xiuxi: w({ id: 'xiuxi', hanzi: '休息', pinyin: 'xiūxi', english: 'to rest', tones: [1, 0] }),
  duohe: w({ id: 'duohe', hanzi: '多喝水', pinyin: 'duō hē shuǐ', english: 'drink plenty of water', tones: [1, 1, 3] }),

  // ── Table manners ──
  kuaizi: w({ id: 'kuaizi', hanzi: '筷子', pinyin: 'kuàizi', english: 'chopsticks', tones: [4, 0] }),
  shaozi: w({ id: 'shaozi', hanzi: '勺子', pinyin: 'sháozi', english: 'spoon', tones: [2, 0] }),
  panzi: w({ id: 'panzi', hanzi: '盘子', pinyin: 'pánzi', english: 'plate; dish', tones: [2, 0] }),
  ganbei: w({ id: 'ganbei', hanzi: '干杯', pinyin: 'gānbēi', english: 'cheers!', tones: [1, 1], literal: 'dry the cup' }),
  manman: w({ id: 'manman', hanzi: '慢慢吃', pinyin: 'mànmàn chī', english: 'take your time eating', tones: [4, 4, 1] }),
  chibao: w({ id: 'chibao', hanzi: '吃饱了', pinyin: 'chībǎo le', english: "I'm full", tones: [1, 3, 0] }),
  qingke: w({ id: 'qingke2', hanzi: '请客', pinyin: 'qǐngkè', english: 'to treat (someone) to a meal', tones: [3, 4] }),

  // ── Online shopping ──
  wanggou: w({ id: 'wanggou', hanzi: '网购', pinyin: 'wǎnggòu', english: 'online shopping', tones: [3, 4] }),
  xiadan: w({ id: 'xiadan', hanzi: '下单', pinyin: 'xiàdān', english: 'to place an order', tones: [4, 1] }),
  fukuan: w({ id: 'fukuan', hanzi: '付款', pinyin: 'fùkuǎn', english: 'to pay', tones: [4, 3] }),
  tuikuan: w({ id: 'tuikuan', hanzi: '退款', pinyin: 'tuìkuǎn', english: 'refund', tones: [4, 3] }),
  youhuo: w({ id: 'youhuo', hanzi: '有货', pinyin: 'yǒu huò', english: 'in stock', tones: [3, 4] }),
  fahuo: w({ id: 'fahuo', hanzi: '发货', pinyin: 'fā huò', english: 'to ship; to dispatch', tones: [1, 4] }),
  baoyou: w({ id: 'baoyou', hanzi: '包邮', pinyin: 'bāoyóu', english: 'free shipping', tones: [1, 2] }),

  // ── Interview ──
  mianshi: w({ id: 'mianshi', hanzi: '面试', pinyin: 'miànshì', english: 'interview', tones: [4, 4] }),
  jianli: w({ id: 'jianli', hanzi: '简历', pinyin: 'jiǎnlì', english: 'resume; CV', tones: [3, 4] }),
  jingyan: w({ id: 'jingyan', hanzi: '经验', pinyin: 'jīngyàn', english: 'experience', tones: [1, 4] }),
  yingpin: w({ id: 'yingpin', hanzi: '应聘', pinyin: 'yìngpìn', english: 'to apply for a job', tones: [4, 4] }),
  jieshao: w({ id: 'jieshao', hanzi: '介绍', pinyin: 'jièshào', english: 'to introduce', tones: [4, 4] }),
  gongzi: w({ id: 'gongzi', hanzi: '工资', pinyin: 'gōngzī', english: 'salary; wages', tones: [1, 1] }),
  qingjia: w({ id: 'qingjia', hanzi: '请假', pinyin: 'qǐng jià', english: 'to ask for leave', tones: [3, 4] }),
  zhong: w({ id: 'zhong_kind', hanzi: '种', pinyin: 'zhǒng', english: 'kind; type (measure word)', tones: [3] }),

  // ── Handling complaints ──
  baoqian: w({ id: 'baoqian', hanzi: '非常抱歉', pinyin: 'fēicháng bàoqiàn', english: 'I am extremely sorry', tones: [1, 2, 4, 4] }),
  tianmafan: w({ id: 'tianmafan', hanzi: '添麻烦', pinyin: 'tiān máfan', english: 'to cause trouble', tones: [1, 2, 0] }),
  chuli: w({ id: 'chuli', hanzi: '处理', pinyin: 'chǔlǐ', spoken: 'chúlǐ', english: 'to handle; to deal with', tones: [3, 3] }),
  lijie: w({ id: 'lijiu', hanzi: '理解', pinyin: 'lǐjiě', english: 'to understand; to be understanding', tones: [3, 3] }),

  // ── Kids: toys and park ──
  wanju: w({ id: 'wanju', hanzi: '玩具', pinyin: 'wánjù', english: 'toy', tones: [2, 4] }),
  qiu: w({ id: 'qiu', hanzi: '球', pinyin: 'qiú', english: 'ball', tones: [2] }),
  jimu: w({ id: 'jimu', hanzi: '积木', pinyin: 'jīmù', english: 'building blocks', tones: [1, 4] }),
  wawa: w({ id: 'wawa', hanzi: '娃娃', pinyin: 'wáwa', english: 'doll', tones: [2, 0] }),
  fenxiang: w({ id: 'fenxiang', hanzi: '分享', pinyin: 'fēnxiǎng', english: 'to share', tones: [1, 3] }),
  gongyuan: w({ id: 'gongyuan', hanzi: '公园', pinyin: 'gōngyuán', english: 'park', tones: [1, 2] }),
  huati: w({ id: 'huati', hanzi: '滑梯', pinyin: 'huátī', english: 'slide', tones: [2, 1] }),
  qiuqian: w({ id: 'qiuqian', hanzi: '秋千', pinyin: 'qiūqiān', english: 'swing', tones: [1, 1] }),
  tiao: w({ id: 'tiao_jump', hanzi: '跳', pinyin: 'tiào', english: 'to jump', tones: [4] }),
} satisfies Record<string, Word>;

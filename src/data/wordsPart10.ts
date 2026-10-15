import type { Word } from './types';

const w = (x: Word): Word => x;

/** Words for the metro, sightseeing, time clauses, haircut, SIM, post and extra kids lessons. */
export const W10 = {
  // ── Metro ──
  huancheng: w({ id: 'huancheng', hanzi: '换乘', pinyin: 'huànchéng', english: 'to transfer (lines)', tones: [4, 2] }),
  zhan_station: w({ id: 'zhan_station', hanzi: '站', pinyin: 'zhàn', english: 'station; stop', tones: [4] }),
  xian_line: w({ id: 'xian_line', hanzi: '线', pinyin: 'xiàn', english: 'line (metro line)', tones: [4] }),
  chukou: w({ id: 'chukou', hanzi: '出口', pinyin: 'chūkǒu', english: 'exit', tones: [1, 3] }),
  xiayizhan: w({ id: 'xiayizhan', hanzi: '下一站', pinyin: 'xià yí zhàn', english: 'next stop', tones: [4, 2, 4] }),
  cong: w({ id: 'cong', hanzi: '从', pinyin: 'cóng', english: 'from', tones: [2] }),

  // ── Sightseeing ──
  paizhao: w({ id: 'paizhao', hanzi: '拍照', pinyin: 'pāi zhào', english: 'to take a photo', tones: [1, 4] }),
  zhaopian: w({ id: 'zhaopian', hanzi: '照片', pinyin: 'zhàopiàn', english: 'photo', tones: [4, 4] }),
  jingdian: w({ id: 'jingdian', hanzi: '景点', pinyin: 'jǐngdiǎn', english: 'tourist attraction', tones: [3, 3] }),
  menpiao: w({ id: 'menpiao', hanzi: '门票', pinyin: 'ménpiào', english: 'entrance ticket', tones: [2, 4] }),
  daoyou: w({ id: 'daoyou', hanzi: '导游', pinyin: 'dǎoyóu', english: 'tour guide', tones: [3, 2] }),
  canguan: w({ id: 'canguan', hanzi: '参观', pinyin: 'cānguān', english: 'to visit (a place)', tones: [1, 1] }),
  gugong: w({ id: 'gugong', hanzi: '故宫', pinyin: 'Gùgōng', english: 'the Forbidden City', tones: [4, 1] }),

  // ── Time clauses ──
  yiqian: w({ id: 'yiqian', hanzi: '以前', pinyin: 'yǐqián', english: 'before; in the past', tones: [3, 2] }),
  yihou: w({ id: 'yihou', hanzi: '以后', pinyin: 'yǐhòu', english: 'after; later', tones: [3, 4] }),
  shihou: w({ id: 'shihou', hanzi: '时候', pinyin: 'shíhou', english: 'time; when', tones: [2, 0] }),
  xiaoshihou: w({ id: 'xiaoshihou', hanzi: '小时候', pinyin: 'xiǎo shíhou', english: 'when I was little', tones: [3, 2, 0] }),

  // ── Choices ──
  nage_which: w({ id: 'nage_which', hanzi: '哪个', pinyin: 'nǎge', english: 'which one', tones: [3, 0] }),
  xuan: w({ id: 'xuan', hanzi: '选', pinyin: 'xuǎn', english: 'to choose', tones: [3] }),
  huozhe: w({ id: 'huozhe', hanzi: '或者', pinyin: 'huòzhě', english: 'or (in statements)', tones: [4, 3] }),

  // ── Haircut ──
  lifa: w({ id: 'lifa', hanzi: '理发', pinyin: 'lǐfà', english: 'to get a haircut', tones: [3, 4] }),
  jian_cut: w({ id: 'jian_cut', hanzi: '剪', pinyin: 'jiǎn', english: 'to cut (with scissors)', tones: [3] }),
  xitou: w({ id: 'xitou', hanzi: '洗头', pinyin: 'xǐ tóu', english: 'to wash hair', tones: [3, 2] }),
  lifadian: w({ id: 'lifadian', hanzi: '理发店', pinyin: 'lǐfàdiàn', english: 'barber shop; hair salon', tones: [3, 4, 4] }),

  // ── SIM card ──
  shoujika: w({ id: 'shoujika', hanzi: '手机卡', pinyin: 'shǒujīkǎ', english: 'SIM card', tones: [3, 1, 3] }),
  liuliang: w({ id: 'liuliang', hanzi: '流量', pinyin: 'liúliàng', english: 'mobile data', tones: [2, 4] }),
  chongzhi: w({ id: 'chongzhi', hanzi: '充值', pinyin: 'chōngzhí', english: 'to top up', tones: [1, 2] }),

  // ── Post ──
  kuaidi: w({ id: 'kuaidi', hanzi: '快递', pinyin: 'kuàidì', english: 'courier; express delivery', tones: [4, 4] }),
  ji_mail: w({ id: 'ji_mail', hanzi: '寄', pinyin: 'jì', english: 'to mail; to send', tones: [4] }),
  baoguo: w({ id: 'baoguo', hanzi: '包裹', pinyin: 'bāoguǒ', english: 'parcel', tones: [1, 3] }),
  youju: w({ id: 'youju', hanzi: '邮局', pinyin: 'yóujú', english: 'post office', tones: [2, 2] }),
  xie_write: w({ id: 'xie_write', hanzi: '写', pinyin: 'xiě', english: 'to write', tones: [3] }),

  // ── Kids: Twinkle, jobs, fruit ──
  shan_flash: w({ id: 'shan_flash', hanzi: '闪', pinyin: 'shǎn', english: 'to flash; to twinkle', tones: [3] }),
  liangjingjing: w({ id: 'liangjingjing', hanzi: '亮晶晶', pinyin: 'liàng jīngjīng', english: 'sparkling; shining', tones: [4, 1, 1] }),
  mantian: w({ id: 'mantian', hanzi: '满天', pinyin: 'mǎn tiān', english: 'all over the sky', tones: [3, 1] }),
  guangming: w({ id: 'guangming', hanzi: '光明', pinyin: 'guāngmíng', english: 'light; brightness', tones: [1, 2] }),
  haoxiang: w({ id: 'haoxiang', hanzi: '好像', pinyin: 'hǎoxiàng', english: 'it seems like; as if', tones: [3, 4] }),
  xuduo: w({ id: 'xuduo', hanzi: '许多', pinyin: 'xǔduō', english: 'many', tones: [3, 1] }),
  zhangda: w({ id: 'zhangda', hanzi: '长大', pinyin: 'zhǎng dà', english: 'to grow up', tones: [3, 4] }),
  dang: w({ id: 'dang', hanzi: '当', pinyin: 'dāng', english: 'to become; to work as', tones: [1] }),
  xiaofangyuan: w({ id: 'xiaofangyuan', hanzi: '消防员', pinyin: 'xiāofángyuán', english: 'firefighter', tones: [1, 2, 2] }),
  chushi: w({ id: 'chushi', hanzi: '厨师', pinyin: 'chúshī', english: 'chef', tones: [2, 1] }),
  siji: w({ id: 'siji', hanzi: '司机', pinyin: 'sījī', english: 'driver', tones: [1, 1] }),
  nongmin: w({ id: 'nongmin', hanzi: '农民', pinyin: 'nóngmín', english: 'farmer', tones: [2, 2] }),
  chengzi: w({ id: 'chengzi', hanzi: '橙子', pinyin: 'chéngzi', english: 'orange', tones: [2, 0] }),
  caomei: w({ id: 'caomei', hanzi: '草莓', pinyin: 'cǎoméi', english: 'strawberry', tones: [3, 2] }),
  huluobo: w({ id: 'huluobo', hanzi: '胡萝卜', pinyin: 'húluóbo', english: 'carrot', tones: [2, 2, 0] }),
  yumi: w({ id: 'yumi', hanzi: '玉米', pinyin: 'yùmǐ', english: 'corn', tones: [4, 3] }),
} satisfies Record<string, Word>;

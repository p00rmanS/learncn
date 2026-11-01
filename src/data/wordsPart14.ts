import type { Word } from './types';

const w = (x: Word): Word => x;

/** Words for the dentist, car rental, laundry, concerts, apologies, exams, adopting a pet and sports matches. */
export const W14 = {
  // ── Dentist ──
  kanyayi: w({ id: 'p14-kanyayi', hanzi: '看牙医', pinyin: 'kàn yáyī', english: 'to see the dentist', tones: [4, 2, 1] }),
  ya: w({ id: 'p14-ya', hanzi: '牙', pinyin: 'yá', english: 'tooth', tones: [2] }),
  yateng: w({ id: 'p14-yateng', hanzi: '牙疼', pinyin: 'yáténg', english: 'toothache', tones: [2, 2] }),
  shuaya: w({ id: 'p14-shuaya', hanzi: '刷牙', pinyin: 'shuāyá', english: 'to brush your teeth', tones: [1, 2] }),
  bingli: w({ id: 'p14-bingli', hanzi: '病历', pinyin: 'bìnglì', english: 'medical record', tones: [4, 4] }),
  zhuya: w({ id: 'p14-zhuya', hanzi: '蛀牙', pinyin: 'zhùyá', english: 'cavity (tooth decay)', tones: [4, 2] }),
  zui: w({ id: 'p14-zui', hanzi: '嘴', pinyin: 'zuǐ', english: 'mouth', tones: [3] }),

  // ── Car rental ──
  zuche: w({ id: 'p14-zuche', hanzi: '租车', pinyin: 'zūchē', english: 'to rent a car', tones: [1, 1] }),
  jiazhao: w({ id: 'p14-jiazhao', hanzi: '驾照', pinyin: 'jiàzhào', english: 'driving licence', tones: [4, 4] }),
  jiashi: w({ id: 'p14-jiashi', hanzi: '驾驶', pinyin: 'jiàshǐ', english: 'to drive', tones: [4, 3] }),
  baoxian: w({ id: 'p14-baoxian', hanzi: '保险', pinyin: 'bǎoxiǎn', english: 'insurance', tones: [3, 3] }),
  youxiang: w({ id: 'p14-youxiang', hanzi: '油箱', pinyin: 'yóuxiāng', english: 'fuel tank', tones: [2, 1] }),
  baokuo: w({ id: 'p14-baokuo', hanzi: '包括', pinyin: 'bāokuò', english: 'to include', tones: [1, 4] }),
  tingche: w({ id: 'p14-tingche', hanzi: '停车场', pinyin: 'tíngchēchǎng', english: 'car park', tones: [2, 1, 3] }),
  liang: w({ id: 'p14-liang', hanzi: '辆', pinyin: 'liàng', english: 'measure word for vehicles', tones: [4] }),

  // ── Laundry ──
  xiyidian: w({ id: 'p14-xiyidian', hanzi: '洗衣店', pinyin: 'xǐyīdiàn', english: 'laundry shop', tones: [3, 1, 4] }),
  ganxi: w({ id: 'p14-ganxi', hanzi: '干洗', pinyin: 'gānxǐ', english: 'dry cleaning', tones: [1, 3] }),
  honggan: w({ id: 'p14-honggan', hanzi: '烘干', pinyin: 'hōnggān', english: 'tumble dry', tones: [1, 1] }),
  yuntang: w({ id: 'p14-yuntang', hanzi: '熨烫', pinyin: 'yùntàng', english: 'to iron', tones: [4, 4] }),
  yifu: w({ id: 'p14-yifu', hanzi: '衣服', pinyin: 'yīfu', english: 'clothes', tones: [1, 0] }),
  shouju: w({ id: 'p14-shouju', hanzi: '收据', pinyin: 'shōujù', english: 'receipt', tones: [1, 4] }),
  chenshan: w({ id: 'p14-chenshan', hanzi: '衬衫', pinyin: 'chènshān', english: 'shirt; blouse', tones: [4, 1] }),
  qu: w({ id: 'p14-qu', hanzi: '取', pinyin: 'qǔ', english: 'to collect; to pick up', tones: [3] }),

  // ── Concerts ──
  yinyue: w({ id: 'p14-yinyue', hanzi: '音乐', pinyin: 'yīnyuè', english: 'music', tones: [1, 4] }),
  yinyuehui: w({ id: 'p14-yinyuehui', hanzi: '音乐会', pinyin: 'yīnyuèhuì', english: 'concert', tones: [1, 4, 4] }),
  yanchang: w({ id: 'p14-yanchang', hanzi: '演唱会', pinyin: 'yǎnchànghuì', english: 'pop concert', tones: [3, 4, 4] }),
  piao: w({ id: 'p14-piao', hanzi: '票', pinyin: 'piào', english: 'ticket', tones: [4] }),
  geshou: w({ id: 'p14-geshou', hanzi: '歌手', pinyin: 'gēshǒu', english: 'singer', tones: [1, 3] }),
  gangqin: w({ id: 'p14-gangqin', hanzi: '钢琴', pinyin: 'gāngqín', english: 'piano', tones: [1, 2] }),
  xiaotiqin: w({ id: 'p14-xiaotiqin', hanzi: '小提琴', pinyin: 'xiǎotíqín', english: 'violin', tones: [3, 2, 2] }),
  xihuan: w({ id: 'p14-xihuan', hanzi: '喜欢', pinyin: 'xǐhuan', english: 'to like', tones: [3, 0] }),

  // ── Apologies ──
  daoqian: w({ id: 'p14-daoqian', hanzi: '道歉', pinyin: 'dàoqiàn', english: 'to apologise', tones: [4, 4] }),
  duibuqi: w({ id: 'p14-duibuqi', hanzi: '对不起', pinyin: 'duìbuqǐ', english: 'sorry', tones: [4, 0, 3] }),
  meiguanxi: w({ id: 'p14-meiguanxi', hanzi: '没关系', pinyin: 'méi guānxi', english: "it doesn't matter; that's okay", tones: [2, 1, 0] }),
  zeren: w({ id: 'p14-zeren', hanzi: '责任', pinyin: 'zérèn', english: 'responsibility', tones: [2, 4] }),
  yuanliang: w({ id: 'p14-yuanliang', hanzi: '原谅', pinyin: 'yuánliàng', english: 'to forgive', tones: [2, 4] }),
  cuo: w({ id: 'p14-cuo', hanzi: '错', pinyin: 'cuò', english: 'wrong; mistake', tones: [4] }),

  // ── Exams ──
  kaoshi: w({ id: 'p14-kaoshi', hanzi: '考试', pinyin: 'kǎoshì', english: 'exam; to take an exam', tones: [3, 4] }),
  tongguo: w({ id: 'p14-tongguo', hanzi: '通过', pinyin: 'tōngguò', english: 'to pass (an exam)', tones: [1, 4] }),
  chengji: w({ id: 'p14-chengji', hanzi: '成绩', pinyin: 'chéngjì', english: 'grade; result', tones: [2, 4] }),
  fuxi: w({ id: 'p14-fuxi', hanzi: '复习', pinyin: 'fùxí', english: 'to review; revise', tones: [4, 2] }),
  jinzhang: w({ id: 'p14-jinzhang', hanzi: '紧张', pinyin: 'jǐnzhāng', english: 'nervous; tense', tones: [3, 1] }),
  yiding: w({ id: 'p14-yiding', hanzi: '一定', pinyin: 'yídìng', english: 'definitely; must', tones: [2, 4] }),

  // ── Adopting a pet ──
  lingyang: w({ id: 'p14-lingyang', hanzi: '领养', pinyin: 'lǐngyǎng', english: 'to adopt', tones: [3, 3] }),
  chongwu: w({ id: 'p14-chongwu', hanzi: '宠物', pinyin: 'chǒngwù', english: 'pet', tones: [3, 4] }),
  mao: w({ id: 'p14-mao', hanzi: '猫', pinyin: 'māo', english: 'cat', tones: [1] }),
  gou: w({ id: 'p14-gou', hanzi: '狗', pinyin: 'gǒu', english: 'dog', tones: [3] }),
  siyang: w({ id: 'p14-siyang', hanzi: '饲养', pinyin: 'sìyǎng', english: 'to raise; keep (an animal)', tones: [4, 3] }),
  liugou: w({ id: 'p14-liugou', hanzi: '遛狗', pinyin: 'liùgǒu', english: 'to walk a dog', tones: [4, 3] }),
  keai: w({ id: 'p14-keai', hanzi: '可爱', pinyin: 'kě ài', english: 'cute; lovable', tones: [3, 4] }),

  // ── Sports matches ──
  bisai: w({ id: 'p14-bisai', hanzi: '比赛', pinyin: 'bǐsài', english: 'match; competition', tones: [3, 4] }),
  zuqiu: w({ id: 'p14-zuqiu', hanzi: '足球', pinyin: 'zúqiú', english: 'football; soccer', tones: [2, 2] }),
  jinqiu: w({ id: 'p14-jinqiu', hanzi: '进球', pinyin: 'jìnqiú', english: 'to score a goal', tones: [4, 2] }),
  ying: w({ id: 'p14-ying', hanzi: '赢', pinyin: 'yíng', english: 'to win', tones: [2] }),
  shu: w({ id: 'p14-shu', hanzi: '输', pinyin: 'shū', english: 'to lose', tones: [1] }),
  qiumi: w({ id: 'p14-qiumi', hanzi: '球迷', pinyin: 'qiúmí', english: 'fan (of a sport)', tones: [2, 2] }),
};

import type { Word } from './types';

const w = (x: Word): Word => x;

/** Words for the deep-dive grammar and culture lessons: 吧, 是…的, 把, forms of address, idioms and chat talk. */
export const W15 = {
  // ── 吧: suggestions and softening ──
  zou: w({ id: 'p15-zou', hanzi: '走', pinyin: 'zǒu', english: 'to go; to leave', tones: [3] }),
  chifan: w({ id: 'p15-chifan', hanzi: '吃饭', pinyin: 'chīfàn', english: 'to eat a meal', tones: [1, 4] }),
  women: w({ id: 'p15-women', hanzi: '我们', pinyin: 'wǒmen', english: 'we; us', tones: [3, 0] }),
  qu: w({ id: 'p15-qu', hanzi: '去', pinyin: 'qù', english: 'to go', tones: [4] }),
  yiqi: w({ id: 'p15-yiqi', hanzi: '一起', pinyin: 'yìqǐ', english: 'together', tones: [4, 3] }),
  xing: w({ id: 'p15-xing', hanzi: '行', pinyin: 'xíng', english: 'okay; fine; will do', tones: [2] }),
  meiwenti: w({ id: 'p15-meiwenti', hanzi: '没问题', pinyin: 'méi wèntí', english: 'no problem', tones: [2, 4, 2] }),

  // ── 是…的: emphasising how something happened ──
  shi: w({ id: 'p15-shi', hanzi: '是', pinyin: 'shì', english: 'to be; yes (in 是…的 it marks the emphasis)', tones: [4] }),
  de: w({ id: 'p15-de', hanzi: '的', pinyin: 'de', english: 'particle (marks the 是…的 pattern)', tones: [0] }),
  lai: w({ id: 'p15-lai', hanzi: '来', pinyin: 'lái', english: 'to come', tones: [2] }),
  zuo: w({ id: 'p15-zuo', hanzi: '坐', pinyin: 'zuò', english: 'to sit; to travel by (a vehicle)', tones: [4] }),
  huoche: w({ id: 'p15-huoche', hanzi: '火车', pinyin: 'huǒchē', english: 'train', tones: [3, 1] }),
  feiji: w({ id: 'p15-feiji', hanzi: '飞机', pinyin: 'fēijī', english: 'airplane', tones: [1, 1] }),
  zuotian: w({ id: 'p15-zuotian', hanzi: '昨天', pinyin: 'zuótiān', english: 'yesterday', tones: [2, 1] }),
  zenme: w({ id: 'p15-zenme', hanzi: '怎么', pinyin: 'zěnme', english: 'how; why', tones: [3, 0] }),
  dao: w({ id: 'p15-dao', hanzi: '到', pinyin: 'dào', english: 'to arrive', tones: [4] }),

  // ── 把: moving something and changing it ──
  shu: w({ id: 'p15-shu', hanzi: '书', pinyin: 'shū', english: 'book', tones: [1] }),
  zhuozi: w({ id: 'p15-zhuozi', hanzi: '桌子', pinyin: 'zhuōzi', english: 'table; desk', tones: [1, 0] }),
  men: w({ id: 'p15-men', hanzi: '门', pinyin: 'mén', english: 'door', tones: [2] }),
  guan: w({ id: 'p15-guan', hanzi: '关', pinyin: 'guān', english: 'to close; to turn off', tones: [1] }),
  fang: w({ id: 'p15-fang', hanzi: '放', pinyin: 'fàng', english: 'to put; to place', tones: [4] }),
  na: w({ id: 'p15-na', hanzi: '拿', pinyin: 'ná', english: 'to take; to hold', tones: [2] }),
  shou: w({ id: 'p15-shou', hanzi: '收', pinyin: 'shōu', english: 'to put away; to receive', tones: [1] }),
  yaoshi: w({ id: 'p15-yaoshi', hanzi: '钥匙', pinyin: 'yàoshi', english: 'key', tones: [4, 0] }),
  zuoye: w({ id: 'p15-zuoye', hanzi: '作业', pinyin: 'zuòyè', english: 'homework', tones: [4, 4] }),
  xie: w({ id: 'p15-xie', hanzi: '写', pinyin: 'xiě', english: 'to write', tones: [3] }),
  wan: w({ id: 'p15-wan', hanzi: '完', pinyin: 'wán', english: 'to finish; completed', tones: [2] }),

  // ── Forms of address ──
  nin: w({ id: 'p15-nin', hanzi: '您', pinyin: 'nín', english: 'you (polite form)', tones: [2] }),
  laoshi: w({ id: 'p15-laoshi', hanzi: '老师', pinyin: 'lǎoshī', english: 'teacher', tones: [3, 1] }),
  shifu: w({ id: 'p15-shifu', hanzi: '师傅', pinyin: 'shīfu', english: 'master; driver or skilled worker (polite address)', tones: [1, 0] }),
  xiansheng: w({ id: 'p15-xiansheng', hanzi: '先生', pinyin: 'xiānsheng', english: 'Mr.; sir', tones: [1, 0] }),
  nvshi: w({ id: 'p15-nvshi', hanzi: '女士', pinyin: 'nǚshì', english: 'Ms.; madam', tones: [3, 4] }),
  ayi: w({ id: 'p15-ayi', hanzi: '阿姨', pinyin: 'āyí', english: 'auntie (used for women of the middle age)', tones: [1, 2] }),
  dage: w({ id: 'p15-dage', hanzi: '大哥', pinyin: 'dàgē', english: 'big brother (friendly address for a man)', tones: [4, 1] }),
  xuyao: w({ id: 'p15-xuyao', hanzi: '需要', pinyin: 'xūyào', english: 'to need', tones: [1, 4] }),

  // ── Chengyu and everyday Chinese ──
  mamahuhu: w({ id: 'p15-mamahuhu', hanzi: '马马虎虎', pinyin: 'mǎmahūhu', english: 'so-so; not bad, not great', tones: [3, 0, 1, 0] }),
  yixinyiyi: w({ id: 'p15-yixinyiyi', hanzi: '一心一意', pinyin: 'yì xīn yí yì', english: 'wholeheartedly; with full focus', tones: [4, 1, 2, 4] }),
  zhongwen: w({ id: 'p15-zhongwen', hanzi: '中文', pinyin: 'Zhōngwén', english: 'Chinese (language)', tones: [1, 2] }),
  zenmeyang: w({ id: 'p15-zenmeyang', hanzi: '怎么样', pinyin: 'zěnmeyàng', english: 'how is it; how about it', tones: [3, 0, 4] }),
  nuli: w({ id: 'p15-nuli', hanzi: '努力', pinyin: 'nǔlì', english: 'to work hard; to try hard', tones: [3, 4] }),
  chengshi: w({ id: 'p15-chengshi', hanzi: '诚实', pinyin: 'chéngshí', english: 'honest', tones: [2, 2] }),
  hai: w({ id: 'p15-hai', hanzi: '还', pinyin: 'hái', english: 'still; also; in addition', tones: [2] }),
  zai: w({ id: 'p15-zai', hanzi: '在', pinyin: 'zài', english: 'to be (in a place); currently doing', tones: [4] }),
  xuexi: w({ id: 'p15-xuexi', hanzi: '学习', pinyin: 'xuéxí', english: 'to study; to learn', tones: [2, 2] }),

  // ── Chat and texting ──
  zaima: w({ id: 'p15-zaima', hanzi: '在吗', pinyin: 'zài ma', english: 'are you there? (hi, quick question)', tones: [4, 0] }),
  haha: w({ id: 'p15-haha', hanzi: '哈哈', pinyin: 'hāhā', english: 'haha (laughing sound)', tones: [1, 1] }),
  shoudao: w({ id: 'p15-shoudao', hanzi: '收到', pinyin: 'shōudào', english: 'received; got it', tones: [1, 4] }),
  haode: w({ id: 'p15-haode', hanzi: '好的', pinyin: 'hǎo de', english: 'okay; sure', tones: [3, 0] }),
  baibai: w({ id: 'p15-baibai', hanzi: '拜拜', pinyin: 'bàibai', english: 'bye-bye', tones: [4, 0] }),
  mafan: w({ id: 'p15-mafan', hanzi: '麻烦', pinyin: 'máfan', english: 'trouble; to bother someone', tones: [2, 0] }),
  huifu: w({ id: 'p15-huifu', hanzi: '回复', pinyin: 'huífù', english: 'to reply', tones: [2, 4] }),
  haoxiao: w({ id: 'p15-haoxiao', hanzi: '好笑', pinyin: 'hǎoxiào', english: 'funny; laughable', tones: [3, 4] }),
  tai: w({ id: 'p15-tai', hanzi: '太', pinyin: 'tài', english: 'too; so; extremely', tones: [4] }),
};

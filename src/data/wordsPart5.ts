import type { Word } from './types';

const w = (x: Word): Word => x;

/** Words for the restaurant toolkit and natural conversation lessons. */
export const W5 = {
  // ── Restaurant: ordering ──
  caidan: w({ id: 'caidan', hanzi: '菜单', pinyin: 'càidān', english: 'menu', tones: [4, 1] }),
  diancai: w({ id: 'diancai', hanzi: '点菜', pinyin: 'diǎn cài', english: 'to order dishes', tones: [3, 4] }),
  cai: w({ id: 'cai', hanzi: '菜', pinyin: 'cài', english: 'dish; vegetable', tones: [4] }),
  tuijian: w({ id: 'tuijian', hanzi: '推荐', pinyin: 'tuījiàn', english: 'to recommend; a recommendation', tones: [1, 4] }),
  fen: w({ id: 'fen_portion', hanzi: '份', pinyin: 'fèn', english: 'portion; serving (measure word)', tones: [4] }),
  biede: w({ id: 'biede', hanzi: '别的', pinyin: 'biéde', english: 'other; anything else', tones: [2, 0] }),
  haiyao: w({ id: 'haiyao', hanzi: '还要', pinyin: 'hái yào', english: 'also want; anything more', tones: [2, 4] }),
  mashang: w({ id: 'mashang', hanzi: '马上', pinyin: 'mǎshàng', english: 'right away', tones: [3, 4] }),
  shaodeng: w({ id: 'shaodeng', hanzi: '稍等', pinyin: 'shāoděng', english: 'just a moment (polite)', tones: [1, 3] }),

  // ── Restaurant: taste and diet ──
  la: w({ id: 'la', hanzi: '辣', pinyin: 'là', english: 'spicy', tones: [4] }),
  tian: w({ id: 'tian', hanzi: '甜', pinyin: 'tián', english: 'sweet', tones: [2] }),
  xian: w({ id: 'xian', hanzi: '咸', pinyin: 'xián', english: 'salty', tones: [2] }),
  suan: w({ id: 'suan', hanzi: '酸', pinyin: 'suān', english: 'sour', tones: [1] }),
  buyao: w({ id: 'buyao', hanzi: '不要', pinyin: 'bú yào', english: "don't want; please don't", tones: [2, 4] }),
  shao: w({ id: 'shao', hanzi: '少', pinyin: 'shǎo', english: 'few; less', tones: [3] }),
  duo: w({ id: 'duo', hanzi: '多', pinyin: 'duō', english: 'many; more', tones: [1] }),
  chisu: w({ id: 'chisu', hanzi: '吃素', pinyin: 'chī sù', english: 'to be vegetarian', tones: [1, 4] }),
  haixian: w({ id: 'haixian', hanzi: '海鲜', pinyin: 'hǎixiān', english: 'seafood', tones: [3, 1] }),
  huasheng: w({ id: 'huasheng', hanzi: '花生', pinyin: 'huāshēng', english: 'peanut', tones: [1, 0] }),
  jidan: w({ id: 'jidan', hanzi: '鸡蛋', pinyin: 'jīdàn', english: 'egg', tones: [1, 4] }),
  niunai: w({ id: 'niunai', hanzi: '牛奶', pinyin: 'niúnǎi', english: 'milk', tones: [2, 3] }),
  guomin: w({ id: 'guomin', hanzi: '过敏', pinyin: 'guòmǐn', english: 'allergic; allergy', tones: [4, 3] }),
  dui4: w({ id: 'dui4', hanzi: '对', pinyin: 'duì', english: 'towards; correct', tones: [4], note: '我对花生过敏 = "I am allergic to peanuts".' }),

  // ── Restaurant: paying ──
  maidan: w({ id: 'maidan', hanzi: '买单', pinyin: 'mǎidān', english: 'the check, please', tones: [3, 1], literal: 'settle the bill' }),
  jiezhang: w({ id: 'jiezhang', hanzi: '结账', pinyin: 'jiézhàng', english: 'to pay the bill', tones: [2, 4] }),
  yigong: w({ id: 'yigong', hanzi: '一共', pinyin: 'yígòng', english: 'altogether; in total', tones: [2, 4] }),
  yong: w({ id: 'yong', hanzi: '用', pinyin: 'yòng', english: 'to use', tones: [4] }),
  shuaka: w({ id: 'shuaka', hanzi: '刷卡', pinyin: 'shuākǎ', english: 'to pay by card', tones: [1, 3] }),
  xianjin: w({ id: 'xianjin', hanzi: '现金', pinyin: 'xiànjīn', english: 'cash', tones: [4, 1] }),
  weixin: w({ id: 'weixin', hanzi: '微信', pinyin: 'Wēixìn', english: 'WeChat', tones: [1, 4] }),
  zhifubao: w({ id: 'zhifubao', hanzi: '支付宝', pinyin: 'Zhīfùbǎo', english: 'Alipay', tones: [1, 4, 3] }),
  fapiao: w({ id: 'fapiao', hanzi: '发票', pinyin: 'fāpiào', english: 'receipt; invoice', tones: [1, 4] }),
  dabao: w({ id: 'dabao', hanzi: '打包', pinyin: 'dǎbāo', english: 'to pack to go; takeaway', tones: [3, 1] }),

  // ── Restaurant: fixing problems ──
  kuai4: w({ id: 'kuai4', hanzi: '快', pinyin: 'kuài', english: 'fast; quick', tones: [4], note: 'Sounds like 块 (money), but this one is "fast".' }),
  hai2: w({ id: 'hai2', hanzi: '还', pinyin: 'hái', english: 'still; yet', tones: [2], note: '还没 = not yet.' }),
  huan: w({ id: 'huan', hanzi: '换', pinyin: 'huàn', english: 'to change; to swap', tones: [4] }),

  // ── Conversation: reactions ──
  shima: w({ id: 'shima', hanzi: '是吗', pinyin: 'shì ma', english: 'is that so?', tones: [4, 0] }),
  zhende: w({ id: 'zhende', hanzi: '真的', pinyin: 'zhēn de', english: 'really; true', tones: [1, 0] }),
  duia: w({ id: 'duia', hanzi: '对啊', pinyin: 'duì a', english: 'right! yeah!', tones: [4, 0] }),
  meicuo: w({ id: 'meicuo', hanzi: '没错', pinyin: 'méi cuò', english: "that's right", tones: [2, 4], literal: 'no mistake' }),
  dangran: w({ id: 'dangran', hanzi: '当然', pinyin: 'dāngrán', english: 'of course', tones: [1, 2] }),
  keneng: w({ id: 'keneng', hanzi: '可能', pinyin: 'kěnéng', spoken: 'kénéng', english: 'maybe; possibly', tones: [3, 2] }),
  zhidao: w({ id: 'zhidao', hanzi: '知道', pinyin: 'zhīdào', english: 'to know', tones: [1, 4] }),

  // ── Conversation: fillers ──
  en: w({ id: 'en', hanzi: '嗯', pinyin: 'èn', english: 'mm-hm (agreeing)', tones: [4], say: '嗯，好' }),
  nage: w({ id: 'nage', hanzi: '那个', pinyin: 'nàge', english: 'um… (filler); that one', tones: [4, 0], note: 'Often pronounced nèige in speech.' }),
  jiushi: w({ id: 'jiushi', hanzi: '就是', pinyin: 'jiùshì', english: 'I mean… / exactly / just', tones: [4, 4] }),
  ranhou: w({ id: 'ranhou', hanzi: '然后', pinyin: 'ránhòu', english: 'and then', tones: [2, 4] }),
  qishi: w({ id: 'qishi', hanzi: '其实', pinyin: 'qíshí', english: 'actually', tones: [2, 2] }),
  duile: w({ id: 'duile', hanzi: '对了', pinyin: 'duì le', english: 'oh right; by the way', tones: [4, 0] }),
  zenmeshuone: w({ id: 'zenmeshuone', hanzi: '怎么说呢', pinyin: 'zěnme shuō ne', english: 'how should I put it…', tones: [3, 0, 1, 0] }),

  // ── Conversation: flexible phrases ──
  suibian: w({ id: 'suibian', hanzi: '随便', pinyin: 'suíbiàn', english: 'whatever; anything is fine', tones: [2, 4] }),
  chabuduo: w({ id: 'chabuduo', hanzi: '差不多', pinyin: 'chàbuduō', english: 'about the same; roughly', tones: [4, 0, 1] }),
  suanle: w({ id: 'suanle', hanzi: '算了', pinyin: 'suàn le', english: 'forget it; never mind', tones: [4, 0] }),
  xing: w({ id: 'xing', hanzi: '行', pinyin: 'xíng', english: 'okay; that works', tones: [2] }),
  douxing: w({ id: 'douxing', hanzi: '都行', pinyin: 'dōu xíng', english: 'either is fine', tones: [1, 2] }),
  meiwenti: w({ id: 'meiwenti', hanzi: '没问题', pinyin: 'méi wèntí', english: 'no problem', tones: [2, 4, 2] }),
  haoba: w({ id: 'haoba', hanzi: '好吧', pinyin: 'hǎo ba', english: 'okay then; fine', tones: [3, 0] }),

  // ── Conversation: small talk ──
  haojiu: w({ id: 'haojiu', hanzi: '好久不见', pinyin: 'hǎojiǔ bú jiàn', spoken: 'háojiǔ bú jiàn', english: 'long time no see', tones: [3, 3, 2, 4] }),
  zuijin: w({ id: 'zuijin', hanzi: '最近', pinyin: 'zuìjìn', english: 'recently; lately', tones: [4, 4] }),
  haixing: w({ id: 'haixing', hanzi: '还行', pinyin: 'hái xíng', english: "so-so; it's okay", tones: [2, 2] }),
  manzou: w({ id: 'manzou', hanzi: '慢走', pinyin: 'màn zǒu', english: 'take care (to someone leaving)', tones: [4, 3], literal: 'walk slowly' }),
  lushang: w({ id: 'lushang', hanzi: '路上小心', pinyin: 'lùshang xiǎoxīn', english: 'be careful on the way', tones: [4, 0, 3, 1] }),
  xiaci: w({ id: 'xiaci', hanzi: '下次见', pinyin: 'xià cì jiàn', english: 'see you next time', tones: [4, 4, 4] }),

  // ── Conversation: wishes ──
  kuaile: w({ id: 'kuaile', hanzi: '快乐', pinyin: 'kuàilè', english: 'happy; joyful', tones: [4, 4] }),
  gongxi: w({ id: 'gongxi', hanzi: '恭喜', pinyin: 'gōngxǐ', english: 'congratulations', tones: [1, 3] }),
  jiayou: w({ id: 'jiayou', hanzi: '加油', pinyin: 'jiāyóu', english: 'go for it; keep it up', tones: [1, 2], literal: 'add fuel' }),
  zhu: w({ id: 'zhu2', hanzi: '祝', pinyin: 'zhù', english: 'to wish', tones: [4] }),
  haoyun: w({ id: 'haoyun', hanzi: '好运', pinyin: 'hǎoyùn', english: 'good luck', tones: [3, 4] }),
  xinnian: w({ id: 'xinnian', hanzi: '新年', pinyin: 'xīnnián', english: 'new year', tones: [1, 2] }),

  // ── Conversation: phone and contacts ──
  wei: w({ id: 'wei_phone', hanzi: '喂', pinyin: 'wèi', english: 'hello (on the phone)', tones: [4], note: 'Often said wéi in speech.' }),
  zhao: w({ id: 'zhao', hanzi: '找', pinyin: 'zhǎo', english: 'to look for; to ask for', tones: [3] }),
  buzai: w({ id: 'buzai', hanzi: '不在', pinyin: 'bú zài', english: 'not here; not in', tones: [2, 4] }),
  dianhua: w({ id: 'dianhua', hanzi: '电话', pinyin: 'diànhuà', english: 'phone; phone call', tones: [4, 4] }),
  haoma: w({ id: 'haoma', hanzi: '号码', pinyin: 'hàomǎ', english: 'number', tones: [4, 3] }),
  jia3: w({ id: 'jia3', hanzi: '加', pinyin: 'jiā', english: 'to add', tones: [1] }),

  // ── Conversation: polite ──
  buhaoyisi: w({ id: 'buhaoyisi', hanzi: '不好意思', pinyin: 'bù hǎoyìsi', english: 'excuse me; sorry; embarrassed', tones: [4, 3, 4, 0] }),
  mafan: w({ id: 'mafan', hanzi: '麻烦', pinyin: 'máfan', english: 'to trouble; troublesome', tones: [2, 0] }),
  meishi: w({ id: 'meishi', hanzi: '没事', pinyin: 'méishì', english: "it's nothing; I'm fine", tones: [2, 4] }),
  buyong: w({ id: 'buyong', hanzi: '不用', pinyin: 'búyòng', english: 'no need', tones: [2, 4] }),
} satisfies Record<string, Word>;

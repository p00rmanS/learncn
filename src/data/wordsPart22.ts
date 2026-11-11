import type { Word } from './types';

const w = (x: Word): Word => x;

/** Words for the lessons on signs, describing people, gifts, the workplace and asking how to say things. */
export const W22 = {
  // ── Signs ──
  chukou: w({ id: 'p22-chukou', hanzi: '出口', pinyin: 'chūkǒu', english: 'exit', tones: [1, 3] }),
  rukou: w({ id: 'p22-rukou', hanzi: '入口', pinyin: 'rùkǒu', english: 'entrance', tones: [4, 3] }),
  jinzhi: w({ id: 'p22-jinzhi', hanzi: '禁止', pinyin: 'jìnzhǐ', english: 'forbidden; no ...', tones: [4, 3] }),
  zhuyi: w({ id: 'p22-zhuyi', hanzi: '注意', pinyin: 'zhùyì', english: 'pay attention; be careful', tones: [4, 4] }),
  xiaoxin: w({ id: 'p22-xiaoxin', hanzi: '小心', pinyin: 'xiǎoxīn', english: 'be careful', tones: [3, 1] }),

  // ── Describing people ──
  gao: w({ id: 'p22-gao', hanzi: '高', pinyin: 'gāo', english: 'tall', tones: [1] }),
  ai: w({ id: 'p22-ai', hanzi: '矮', pinyin: 'ǎi', english: 'short (height)', tones: [3] }),
  pang: w({ id: 'p22-pang', hanzi: '胖', pinyin: 'pàng', english: 'plump; fat', tones: [4] }),
  shou: w({ id: 'p22-shou', hanzi: '瘦', pinyin: 'shòu', english: 'thin; slim', tones: [4] }),
  shuai: w({ id: 'p22-shuai', hanzi: '帅', pinyin: 'shuài', english: 'handsome', tones: [4] }),
  lao: w({ id: 'p22-lao', hanzi: '老', pinyin: 'lǎo', english: 'old', tones: [3] }),
  piaoliang: w({ id: 'p22-piaoliang', hanzi: '漂亮', pinyin: 'piàoliang', english: 'pretty; beautiful', tones: [4, 0] }),
  nianqing: w({ id: 'p22-nianqing', hanzi: '年轻', pinyin: 'niánqīng', english: 'young', tones: [2, 1] }),
  toufa: w({ id: 'p22-toufa', hanzi: '头发', pinyin: 'tóufa', english: 'hair', tones: [2, 0] }),

  // ── Gifts and celebrations ──
  liwu: w({ id: 'p22-liwu', hanzi: '礼物', pinyin: 'lǐwù', english: 'gift; present', tones: [3, 4] }),
  hongbao: w({ id: 'p22-hongbao', hanzi: '红包', pinyin: 'hóngbāo', english: 'red envelope with money', tones: [2, 1] }),
  song: w({ id: 'p22-song', hanzi: '送', pinyin: 'sòng', english: 'to give; to send', tones: [4] }),
  zhufu: w({ id: 'p22-zhufu', hanzi: '祝福', pinyin: 'zhùfú', english: 'blessing; wishes', tones: [4, 2] }),
  shoudao: w({ id: 'p22-shoudao', hanzi: '收到', pinyin: 'shōudào', english: 'to receive', tones: [1, 4] }),

  // ── Workplace ──
  huiyi: w({ id: 'p22-huiyi', hanzi: '会议', pinyin: 'huìyì', english: 'meeting', tones: [4, 4] }),
  tongshi: w({ id: 'p22-tongshi', hanzi: '同事', pinyin: 'tóngshì', english: 'colleague', tones: [2, 4] }),
  laoban: w({ id: 'p22-laoban', hanzi: '老板', pinyin: 'lǎobǎn', english: 'boss; owner', tones: [3, 3] }),
  baogao: w({ id: 'p22-baogao', hanzi: '报告', pinyin: 'bàogào', english: 'report; presentation', tones: [4, 4] }),
  xiaban: w({ id: 'p22-xiaban', hanzi: '下班', pinyin: 'xiàbān', english: 'to finish work', tones: [4, 1] }),
  jiaban: w({ id: 'p22-jiaban', hanzi: '加班', pinyin: 'jiābān', english: 'to work overtime', tones: [1, 1] }),

  // ── Asking how to say something ──
  zenmeshuo: w({ id: 'p22-zenmeshuo', hanzi: '怎么说', pinyin: 'zěnme shuō', english: 'how do you say', tones: [3, 0, 1] }),
  yisi: w({ id: 'p22-yisi', hanzi: '意思', pinyin: 'yìsi', english: 'meaning', tones: [4, 0] }),
  yibian: w({ id: 'p22-yibian', hanzi: '一遍', pinyin: 'yíbiàn', english: 'once; one time through', tones: [2, 4] }),
  man: w({ id: 'p22-man', hanzi: '慢', pinyin: 'màn', english: 'slow', tones: [4] }),
  qing: w({ id: 'p22-qing', hanzi: '请', pinyin: 'qǐng', english: 'please', tones: [3] }),
} satisfies Record<string, Word>;

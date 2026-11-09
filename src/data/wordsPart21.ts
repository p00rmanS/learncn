import type { Word } from './types';

const w = (x: Word): Word => x;

/** Words for the Grammar Ladder, from beginner particles up to advanced linking pairs. */
export const W21 = {
  // ── Level 1: 着 and 一边…一边 ──
  zhe: w({ id: 'p21-zhe', hanzi: '着', pinyin: 'zhe', english: 'particle: shows a state that continues', tones: [0] }),
  men: w({ id: 'p21-men', hanzi: '门', pinyin: 'mén', english: 'door', tones: [2] }),
  kai: w({ id: 'p21-kai', hanzi: '开', pinyin: 'kāi', english: 'to open; to turn on', tones: [1] }),
  guan: w({ id: 'p21-guan', hanzi: '关', pinyin: 'guān', english: 'to close; to turn off', tones: [1] }),
  zuo: w({ id: 'p21-zuo', hanzi: '坐', pinyin: 'zuò', english: 'to sit', tones: [4] }),
  zhan: w({ id: 'p21-zhan', hanzi: '站', pinyin: 'zhàn', english: 'to stand', tones: [4] }),
  deng: w({ id: 'p21-deng', hanzi: '灯', pinyin: 'dēng', english: 'lamp; light', tones: [1] }),
  yibian: w({ id: 'p21-yibian', hanzi: '一边', pinyin: 'yìbiān', english: 'at the same time (one side… and the other)', tones: [4, 1] }),
  kan: w({ id: 'p21-kan', hanzi: '看', pinyin: 'kàn', english: 'to look; to read; to watch', tones: [4] }),
  chi: w({ id: 'p21-chi', hanzi: '吃', pinyin: 'chī', english: 'to eat', tones: [1] }),
  shu: w({ id: 'p21-shu', hanzi: '书', pinyin: 'shū', english: 'book', tones: [1] }),
  wan: w({ id: 'p21-wan', hanzi: '完', pinyin: 'wán', english: 'finished; all done', tones: [2] }),
  fan: w({ id: 'p21-fan', hanzi: '饭', pinyin: 'fàn', english: 'cooked rice; meal', tones: [4] }),
  shuo: w({ id: 'p21-shuo', hanzi: '说', pinyin: 'shuō', english: 'to say; to speak', tones: [1] }),
  xie: w({ id: 'p21-xie', hanzi: '写', pinyin: 'xiě', english: 'to write', tones: [3] }),

  // ── Level 2: 虽然…但是, 越…越, 连…都 ──
  suiran: w({ id: 'p21-suiran', hanzi: '虽然', pinyin: 'suīrán', english: 'although', tones: [1, 2] }),
  danshi: w({ id: 'p21-danshi', hanzi: '但是', pinyin: 'dànshì', english: 'but; however', tones: [4, 4] }),
  lei: w({ id: 'p21-lei', hanzi: '累', pinyin: 'lèi', english: 'tired', tones: [4] }),
  kaixin: w({ id: 'p21-kaixin', hanzi: '开心', pinyin: 'kāixīn', english: 'happy', tones: [1, 1] }),
  pianyi: w({ id: 'p21-pianyi', hanzi: '便宜', pinyin: 'piányi', english: 'cheap', tones: [2, 0] }),
  gui: w({ id: 'p21-gui', hanzi: '贵', pinyin: 'guì', english: 'expensive', tones: [4] }),
  yue: w({ id: 'p21-yue', hanzi: '越', pinyin: 'yuè', english: 'more and more (the more… the more)', tones: [4] }),
  yuelaiyue: w({ id: 'p21-yuelaiyue', hanzi: '越来越', pinyin: 'yuèláiyuè', english: 'more and more', literal: 'more coming, more', tones: [4, 2, 4] }),
  xue: w({ id: 'p21-xue', hanzi: '学', pinyin: 'xué', english: 'to learn; to study', tones: [2] }),
  hao: w({ id: 'p21-hao', hanzi: '好', pinyin: 'hǎo', english: 'good; well', tones: [3] }),
  leng: w({ id: 'p21-leng', hanzi: '冷', pinyin: 'lěng', english: 'cold', tones: [3] }),
  lai: w({ id: 'p21-lai', hanzi: '来', pinyin: 'lái', english: 'to come', tones: [2] }),
  ta: w({ id: 'p21-ta', hanzi: '他', pinyin: 'tā', english: 'he; him', tones: [1] }),
  lian: w({ id: 'p21-lian', hanzi: '连', pinyin: 'lián', english: 'even; including', tones: [2] }),
  dou: w({ id: 'p21-dou', hanzi: '都', pinyin: 'dōu', english: 'all; both; even', tones: [1] }),
  zhidao: w({ id: 'p21-zhidao', hanzi: '知道', pinyin: 'zhīdao', english: 'to know', tones: [1, 0] }),

  // ── Level 3: 差点, 被, 才 and 就 ──
  chadian: w({ id: 'p21-chadian', hanzi: '差点', pinyin: 'chàdiǎn', english: 'nearly; almost (and did not happen)', tones: [4, 3] }),
  chidao: w({ id: 'p21-chidao', hanzi: '迟到', pinyin: 'chídào', english: 'to be late', tones: [2, 4] }),
  shuaidao: w({ id: 'p21-shuaidao', hanzi: '摔倒', pinyin: 'shuāidǎo', english: 'to fall over', tones: [1, 3] }),
  bei: w({ id: 'p21-bei', hanzi: '被', pinyin: 'bèi', english: 'by (passive marker)', tones: [4] }),
  jie: w({ id: 'p21-jie', hanzi: '借', pinyin: 'jiè', english: 'to lend; to borrow', tones: [4] }),
  zou: w({ id: 'p21-zou', hanzi: '走', pinyin: 'zǒu', english: 'to walk; to leave', tones: [3] }),
  cai: w({ id: 'p21-cai', hanzi: '才', pinyin: 'cái', english: 'only; not until; just', tones: [2] }),
  jiu: w({ id: 'p21-jiu', hanzi: '就', pinyin: 'jiù', english: 'already; as early as; then', tones: [4] }),

  // ── Level 4: 只要…就, 无论…都, 不但…而且 ──
  zhiyao: w({ id: 'p21-zhiyao', hanzi: '只要', pinyin: 'zhǐyào', english: 'as long as', tones: [3, 4] }),
  wulun: w({ id: 'p21-wulun', hanzi: '无论', pinyin: 'wúlùn', english: 'no matter (what, how, who)', tones: [2, 4] }),
  nuli: w({ id: 'p21-nuli', hanzi: '努力', pinyin: 'nǔlì', english: 'to work hard; effort', tones: [3, 4] }),
  chenggong: w({ id: 'p21-chenggong', hanzi: '成功', pinyin: 'chénggōng', english: 'success; to succeed', tones: [2, 1] }),
  neng: w({ id: 'p21-neng', hanzi: '能', pinyin: 'néng', english: 'can; able to', tones: [2] }),
  budan: w({ id: 'p21-budan', hanzi: '不但', pinyin: 'bú dàn', english: 'not only', tones: [2, 4] }),
  erqie: w({ id: 'p21-erqie', hanzi: '而且', pinyin: 'érqiě', english: 'moreover; and also', tones: [2, 3] }),
  congming: w({ id: 'p21-congming', hanzi: '聪明', pinyin: 'cōngmíng', english: 'smart; clever', tones: [1, 2] }),
} satisfies Record<string, Word>;

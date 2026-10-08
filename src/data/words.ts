import type { Word } from './types';
import { W2 } from './wordsMore';
import { W3 } from './wordsExtra';
import { W4 } from './wordsPart4';

const w = (x: Word): Word => x;

/** Every word in the course lives here once; lessons reference it by key. */
export const W = {
  ma1: w({ id: 'ma1', hanzi: '妈', pinyin: 'mā', english: 'mom', tones: [1] }),
  ma2: w({ id: 'ma2', hanzi: '麻', pinyin: 'má', english: 'hemp; numb', tones: [2] }),
  ma3: w({ id: 'ma3', hanzi: '马', pinyin: 'mǎ', english: 'horse', tones: [3] }),
  ma4: w({ id: 'ma4', hanzi: '骂', pinyin: 'mà', english: 'to scold', tones: [4] }),

  mama: w({ id: 'mama', hanzi: '妈妈', pinyin: 'māma', english: 'mom', tones: [1, 0] }),
  baba: w({ id: 'baba', hanzi: '爸爸', pinyin: 'bàba', english: 'dad', tones: [4, 0] }),
  xiexie: w({ id: 'xiexie', hanzi: '谢谢', pinyin: 'xièxie', english: 'thank you', tones: [4, 0] }),
  ma: w({ id: 'ma', hanzi: '吗', pinyin: 'ma', english: 'question particle (makes a yes/no question)', tones: [0] }),

  nihao: w({ id: 'nihao', hanzi: '你好', pinyin: 'nǐ hǎo', spoken: 'ní hǎo', english: 'hello', literal: 'you good', tones: [3, 3], note: 'Two third tones in a row: the first is said as tone 2.' }),
  henhao: w({ id: 'henhao', hanzi: '很好', pinyin: 'hěn hǎo', spoken: 'hén hǎo', english: 'very good', tones: [3, 3] }),
  bushi: w({ id: 'bushi', hanzi: '不是', pinyin: 'bú shì', english: 'is not; no', tones: [2, 4], note: 'Written 不 bù, but said bú before a 4th tone.' }),
  budui: w({ id: 'budui', hanzi: '不对', pinyin: 'bú duì', english: 'wrong; not correct', tones: [2, 4] }),
  buhao: w({ id: 'buhao', hanzi: '不好', pinyin: 'bù hǎo', english: 'not good', tones: [4, 3], note: 'No change here: 不 only shifts before a 4th tone.' }),
  bukeqi: w({ id: 'bukeqi', hanzi: '不客气', pinyin: 'bú kèqi', english: "you're welcome", literal: 'no politeness needed', tones: [2, 4, 0] }),

  si: w({ id: 'si', hanzi: '四', pinyin: 'sì', english: 'four', tones: [4] }),
  shi10: w({ id: 'shi10', hanzi: '十', pinyin: 'shí', english: 'ten', tones: [2] }),
  qi: w({ id: 'qi', hanzi: '七', pinyin: 'qī', english: 'seven', tones: [1] }),
  chi: w({ id: 'chi', hanzi: '吃', pinyin: 'chī', english: 'to eat', tones: [1] }),
  lu: w({ id: 'lu', hanzi: '路', pinyin: 'lù', english: 'road', tones: [4] }),
  lv: w({ id: 'lv', hanzi: '绿', pinyin: 'lǜ', english: 'green', tones: [4] }),
  ba4: w({ id: 'ba4', hanzi: '爸', pinyin: 'bà', english: 'dad', tones: [4] }),
  pa4: w({ id: 'pa4', hanzi: '怕', pinyin: 'pà', english: 'afraid', tones: [4] }),
  qu: w({ id: 'qu', hanzi: '去', pinyin: 'qù', english: 'to go', tones: [4] }),

  ninhao: w({ id: 'ninhao', hanzi: '您好', pinyin: 'nín hǎo', english: 'hello (polite)', tones: [2, 3], note: '您 is the respectful "you", used for elders, customers and strangers.' }),
  zaijian: w({ id: 'zaijian', hanzi: '再见', pinyin: 'zàijiàn', english: 'goodbye', literal: 'see you again', tones: [4, 4] }),
  duibuqi: w({ id: 'duibuqi', hanzi: '对不起', pinyin: 'duìbuqǐ', english: "I'm sorry", tones: [4, 0, 3] }),
  meiguanxi: w({ id: 'meiguanxi', hanzi: '没关系', pinyin: 'méi guānxi', english: "it's okay; no problem", tones: [2, 1, 0] }),
  qing: w({ id: 'qing', hanzi: '请', pinyin: 'qǐng', english: 'please', tones: [3] }),
  zaoshanghao: w({ id: 'zaoshanghao', hanzi: '早上好', pinyin: 'zǎoshang hǎo', english: 'good morning', tones: [3, 0, 3] }),

  wo: w({ id: 'wo', hanzi: '我', pinyin: 'wǒ', english: 'I; me', tones: [3] }),
  ni: w({ id: 'ni', hanzi: '你', pinyin: 'nǐ', english: 'you', tones: [3] }),
  ta1: w({ id: 'ta1', hanzi: '他', pinyin: 'tā', english: 'he; him', tones: [1] }),
  ta2: w({ id: 'ta2', hanzi: '她', pinyin: 'tā', english: 'she; her', tones: [1], note: 'Sounds the same as 他. The left part (女, woman) is the clue.' }),
  shi4: w({ id: 'shi4', hanzi: '是', pinyin: 'shì', english: 'to be (am, is, are)', tones: [4] }),
  jiao: w({ id: 'jiao', hanzi: '叫', pinyin: 'jiào', english: 'to be called', tones: [4] }),
  shenme: w({ id: 'shenme', hanzi: '什么', pinyin: 'shénme', english: 'what', tones: [2, 0] }),
  mingzi: w({ id: 'mingzi', hanzi: '名字', pinyin: 'míngzi', english: 'name', tones: [2, 0] }),
  ren: w({ id: 'ren', hanzi: '人', pinyin: 'rén', english: 'person', tones: [2] }),
  zhongguo: w({ id: 'zhongguo', hanzi: '中国', pinyin: 'Zhōngguó', english: 'China', tones: [1, 2] }),
  feilvbin: w({ id: 'feilvbin', hanzi: '菲律宾', pinyin: 'Fēilǜbīn', english: 'the Philippines', tones: [1, 4, 1] }),
  xuesheng: w({ id: 'xuesheng', hanzi: '学生', pinyin: 'xuésheng', english: 'student', tones: [2, 0] }),
  renshi: w({ id: 'renshi', hanzi: '认识', pinyin: 'rènshi', english: 'to know (a person); to meet', tones: [4, 0] }),

  n1: w({ id: 'n1', hanzi: '一', pinyin: 'yī', english: 'one', tones: [1], note: 'In phone numbers it is often said yāo so it is not confused with 七.' }),
  n2: w({ id: 'n2', hanzi: '二', pinyin: 'èr', english: 'two', tones: [4] }),
  n3: w({ id: 'n3', hanzi: '三', pinyin: 'sān', english: 'three', tones: [1] }),
  n5: w({ id: 'n5', hanzi: '五', pinyin: 'wǔ', english: 'five', tones: [3] }),
  n6: w({ id: 'n6', hanzi: '六', pinyin: 'liù', english: 'six', tones: [4] }),
  n8: w({ id: 'n8', hanzi: '八', pinyin: 'bā', english: 'eight', tones: [1] }),
  n9: w({ id: 'n9', hanzi: '九', pinyin: 'jiǔ', english: 'nine', tones: [3] }),
  n0: w({ id: 'n0', hanzi: '零', pinyin: 'líng', english: 'zero', tones: [2] }),

  hen: w({ id: 'hen', hanzi: '很', pinyin: 'hěn', english: 'very', tones: [3] }),
  hao: w({ id: 'hao', hanzi: '好', pinyin: 'hǎo', english: 'good', tones: [3], literal: '女 woman + 子 child (a memory aid, not the real history)' }),
  bu: w({ id: 'bu', hanzi: '不', pinyin: 'bù', english: 'not', tones: [4] }),
  you: w({ id: 'you', hanzi: '有', pinyin: 'yǒu', english: 'to have', tones: [3] }),
  meiyou: w({ id: 'meiyou', hanzi: '没有', pinyin: 'méiyǒu', english: "to not have; don't have", tones: [2, 3] }),
  shui: w({ id: 'shui', hanzi: '水', pinyin: 'shuǐ', english: 'water', tones: [3] }),
  kafei: w({ id: 'kafei', hanzi: '咖啡', pinyin: 'kāfēi', english: 'coffee', tones: [1, 1] }),
  cha: w({ id: 'cha', hanzi: '茶', pinyin: 'chá', english: 'tea', tones: [2] }),
} satisfies Record<string, Word>;

export const ALL_WORDS: Word[] = [...Object.values(W), ...Object.values(W2), ...Object.values(W3), ...Object.values(W4)];
export const WORD_BY_ID: Record<string, Word> = Object.fromEntries(ALL_WORDS.map((x) => [x.id, x]));

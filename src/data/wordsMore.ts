import type { Word } from './types';

const w = (x: Word): Word => x;

/** Words for the characters, everyday-life and survival lessons. */
export const W2 = {
  // Characters
  ri: w({ id: 'ri', hanzi: '日', pinyin: 'rì', english: 'sun; day', tones: [4] }),
  yue: w({ id: 'yue', hanzi: '月', pinyin: 'yuè', english: 'moon; month', tones: [4] }),
  mu: w({ id: 'mu', hanzi: '木', pinyin: 'mù', english: 'tree; wood', tones: [4] }),
  nv: w({ id: 'nv', hanzi: '女', pinyin: 'nǚ', english: 'woman; female', tones: [3] }),
  zi: w({ id: 'zi', hanzi: '子', pinyin: 'zǐ', english: 'child; son', tones: [3] }),
  kou: w({ id: 'kou', hanzi: '口', pinyin: 'kǒu', english: 'mouth', tones: [3] }),
  ming: w({ id: 'ming', hanzi: '明', pinyin: 'míng', english: 'bright', tones: [2], literal: '日 sun + 月 moon' }),
  xiu: w({ id: 'xiu', hanzi: '休', pinyin: 'xiū', english: 'to rest', tones: [1], literal: '亻 person + 木 tree' }),
  lin: w({ id: 'lin', hanzi: '林', pinyin: 'lín', english: 'woods', tones: [2], literal: '木 tree + 木 tree' }),
  da: w({ id: 'da', hanzi: '大', pinyin: 'dà', english: 'big', tones: [4] }),
  xiao: w({ id: 'xiao', hanzi: '小', pinyin: 'xiǎo', english: 'small', tones: [3] }),

  // This / that, measure words
  zhe: w({ id: 'zhe', hanzi: '这', pinyin: 'zhè', english: 'this', tones: [4] }),
  na: w({ id: 'na', hanzi: '那', pinyin: 'nà', english: 'that', tones: [4] }),
  ge: w({ id: 'ge', hanzi: '个', pinyin: 'gè', english: 'general measure word', tones: [4], note: 'Used between a number and most nouns: 三个人.' }),
  ben: w({ id: 'ben', hanzi: '本', pinyin: 'běn', english: 'measure word for books', tones: [3] }),
  shu: w({ id: 'shu', hanzi: '书', pinyin: 'shū', english: 'book', tones: [1] }),
  shouji: w({ id: 'shouji', hanzi: '手机', pinyin: 'shǒujī', english: 'mobile phone', tones: [3, 1] }),
  pengyou: w({ id: 'pengyou', hanzi: '朋友', pinyin: 'péngyou', english: 'friend', tones: [2, 0] }),
  liang: w({ id: 'liang', hanzi: '两', pinyin: 'liǎng', english: 'two (before a measure word)', tones: [3], note: 'Say 两个人, not 二个人.' }),

  // Family
  gege: w({ id: 'gege', hanzi: '哥哥', pinyin: 'gēge', english: 'older brother', tones: [1, 0] }),
  jiejie: w({ id: 'jiejie', hanzi: '姐姐', pinyin: 'jiějie', english: 'older sister', tones: [3, 0] }),
  didi: w({ id: 'didi', hanzi: '弟弟', pinyin: 'dìdi', english: 'younger brother', tones: [4, 0] }),
  meimei: w({ id: 'meimei', hanzi: '妹妹', pinyin: 'mèimei', english: 'younger sister', tones: [4, 0] }),
  jia: w({ id: 'jia', hanzi: '家', pinyin: 'jiā', english: 'home; family', tones: [1] }),
  de: w({ id: 'de', hanzi: '的', pinyin: 'de', english: "possessive link ('s)", tones: [0], say: '我的', note: 'Audio plays 我的 so the voice reads de correctly.' }),
  he: w({ id: 'he', hanzi: '和', pinyin: 'hé', english: 'and (between nouns)', tones: [2] }),

  // Food
  yao: w({ id: 'yao', hanzi: '要', pinyin: 'yào', english: 'to want; to order', tones: [4] }),
  xiang: w({ id: 'xiang', hanzi: '想', pinyin: 'xiǎng', english: 'to want to; to think of', tones: [3] }),
  he1: w({ id: 'he1', hanzi: '喝', pinyin: 'hē', english: 'to drink', tones: [1] }),
  mifan: w({ id: 'mifan', hanzi: '米饭', pinyin: 'mǐfàn', english: 'cooked rice', tones: [3, 4] }),
  miantiao: w({ id: 'miantiao', hanzi: '面条', pinyin: 'miàntiáo', english: 'noodles', tones: [4, 2] }),
  pingguo: w({ id: 'pingguo', hanzi: '苹果', pinyin: 'píngguǒ', english: 'apple', tones: [2, 3] }),
  bei: w({ id: 'bei', hanzi: '杯', pinyin: 'bēi', english: 'cup; glass (measure word)', tones: [1] }),
  wan: w({ id: 'wan', hanzi: '碗', pinyin: 'wǎn', english: 'bowl (measure word)', tones: [3] }),
  gei: w({ id: 'gei', hanzi: '给', pinyin: 'gěi', english: 'to give', tones: [3] }),
  qingwen: w({ id: 'qingwen', hanzi: '请问', pinyin: 'qǐngwèn', english: 'excuse me; may I ask', tones: [3, 4] }),

  // Money
  qian: w({ id: 'qian', hanzi: '钱', pinyin: 'qián', english: 'money', tones: [2] }),
  kuai: w({ id: 'kuai', hanzi: '块', pinyin: 'kuài', english: 'yuan (spoken word for the unit of money)', tones: [4] }),
  duoshao: w({ id: 'duoshao', hanzi: '多少', pinyin: 'duōshao', english: 'how many; how much', tones: [1, 0] }),
  gui: w({ id: 'gui', hanzi: '贵', pinyin: 'guì', english: 'expensive', tones: [4] }),
  pianyi: w({ id: 'pianyi', hanzi: '便宜', pinyin: 'piányi', english: 'cheap', tones: [2, 0] }),
  bai: w({ id: 'bai', hanzi: '百', pinyin: 'bǎi', english: 'hundred', tones: [3] }),
  tai: w({ id: 'tai', hanzi: '太', pinyin: 'tài', english: 'too; extremely', tones: [4] }),
  neng: w({ id: 'neng', hanzi: '能', pinyin: 'néng', english: 'can; to be able to', tones: [2] }),
  yidian: w({ id: 'yidian', hanzi: '一点', pinyin: 'yìdiǎn', english: 'a little', tones: [4, 3], note: '一 becomes yì before tone 1, 2 or 3.' }),

  // Time
  xianzai: w({ id: 'xianzai', hanzi: '现在', pinyin: 'xiànzài', english: 'now', tones: [4, 4] }),
  ji: w({ id: 'ji', hanzi: '几', pinyin: 'jǐ', english: 'how many (small number)', tones: [3] }),
  dian: w({ id: 'dian', hanzi: '点', pinyin: 'diǎn', english: "o'clock (hour)", tones: [3] }),
  fen: w({ id: 'fen', hanzi: '分', pinyin: 'fēn', english: 'minute', tones: [1] }),
  ban: w({ id: 'ban', hanzi: '半', pinyin: 'bàn', english: 'half', tones: [4] }),
  jintian: w({ id: 'jintian', hanzi: '今天', pinyin: 'jīntiān', english: 'today', tones: [1, 1] }),
  mingtian: w({ id: 'mingtian', hanzi: '明天', pinyin: 'míngtiān', english: 'tomorrow', tones: [2, 1] }),
  zuotian: w({ id: 'zuotian', hanzi: '昨天', pinyin: 'zuótiān', english: 'yesterday', tones: [2, 1] }),
  xingqi: w({ id: 'xingqi', hanzi: '星期', pinyin: 'xīngqī', english: 'week', tones: [1, 1], note: '星期一 is Monday, 星期二 is Tuesday… 星期天 is Sunday.' }),
  wanshang: w({ id: 'wanshang', hanzi: '晚上', pinyin: 'wǎnshang', english: 'evening; night', tones: [3, 0] }),

  // Question words
  shei: w({ id: 'shei', hanzi: '谁', pinyin: 'shéi', english: 'who', tones: [2] }),
  nali: w({ id: 'nali', hanzi: '哪里', pinyin: 'nǎlǐ', english: 'where', tones: [3, 3], spoken: 'ná lǐ' }),
  weishenme: w({ id: 'weishenme', hanzi: '为什么', pinyin: 'wèishénme', english: 'why', tones: [4, 2, 0] }),
  zenme: w({ id: 'zenme', hanzi: '怎么', pinyin: 'zěnme', english: 'how', tones: [3, 0] }),
  xue: w({ id: 'xue', hanzi: '学', pinyin: 'xué', english: 'to study; to learn', tones: [2] }),
  xuexiao: w({ id: 'xuexiao', hanzi: '学校', pinyin: 'xuéxiào', english: 'school', tones: [2, 4] }),

  // Survival
  dong: w({ id: 'dong', hanzi: '懂', pinyin: 'dǒng', english: 'to understand', tones: [3] }),
  ting: w({ id: 'ting', hanzi: '听', pinyin: 'tīng', english: 'to listen; to hear', tones: [1] }),
  shuo: w({ id: 'shuo', hanzi: '说', pinyin: 'shuō', english: 'to speak; to say', tones: [1] }),
  man: w({ id: 'man', hanzi: '慢', pinyin: 'màn', english: 'slow', tones: [4] }),
  zai: w({ id: 'zai', hanzi: '再', pinyin: 'zài', english: 'again', tones: [4] }),
  hui: w({ id: 'hui', hanzi: '会', pinyin: 'huì', english: 'can (a learned skill)', tones: [4] }),
  zhongwen: w({ id: 'zhongwen', hanzi: '中文', pinyin: 'Zhōngwén', english: 'Chinese (language)', tones: [1, 2] }),
  yingyu: w({ id: 'yingyu', hanzi: '英语', pinyin: 'Yīngyǔ', english: 'English (language)', tones: [1, 3] }),
  yisi: w({ id: 'yisi', hanzi: '意思', pinyin: 'yìsi', english: 'meaning', tones: [4, 0] }),

  // Not vs didn't
  mei: w({ id: 'mei', hanzi: '没', pinyin: 'méi', english: "not; didn't (negates 有 and past actions)", tones: [2] }),
  rou: w({ id: 'rou', hanzi: '肉', pinyin: 'ròu', english: 'meat', tones: [4] }),
  chifan: w({ id: 'chifan', hanzi: '吃饭', pinyin: 'chī fàn', english: 'to eat a meal', tones: [1, 4] }),
} satisfies Record<string, Word>;

import type { Lesson, Page } from './types';
import { W17 } from './wordsPart17';

const quiz = (title: string, question: string, options: string[], answer: number, explain: string): Page => ({
  kicker: 'Check',
  title,
  blocks: [{ type: 'quiz', question, options, answer, explain }],
});

const speak = (items: { prompt: string; hanzi: string; pinyin: string; english: string }[]): Page => ({
  kicker: 'Speak',
  title: 'Your turn',
  blocks: items.map((i) => ({ type: 'speak' as const, ...i })),
});

const kidsWay = (body: string) => ({ type: 'tip' as const, label: 'How kids learn it', body });
const locals = (body: string) => ({ type: 'tip' as const, label: 'What locals say', body });

export const PART16_LESSONS: Lesson[] = [
  {
    id: 'fnd-week',
    module: 'foundations',
    title: 'Days of the week',
    subtitle: 'Monday to Sunday, plus today, tomorrow and the weekend',
    minutes: 10,
    goal: 'Name the seven days, say what day it is today and tomorrow, and talk about the weekend.',
    pages: [
      {
        kicker: 'Overview',
        title: 'One pattern for seven days',
        blocks: [
          {
            type: 'text',
            title: 'Week, then a number',
            body: [
              'Every weekday starts with 星期 (xīngqī), which means "week". Then comes a number: 一 is one, so 星期一 is Monday, and so on up to 六 for Saturday.',
              'Sunday is the odd one out. It ends in 天 (day), so 星期天 is "week day".',
            ],
          },
          {
            type: 'taglish',
            body: 'Ang bawat araw ng linggo ay nagsisimula sa 星期, na ibig sabihin ay "linggo". Sunod ang numero: 一 ay isa, kaya ang 星期一 ay Lunes. Ang Linggo ay 星期天.',
          },
        ],
      },
      {
        kicker: 'Deep dive',
        title: 'The seven days',
        blocks: [
          {
            type: 'vocab',
            title: 'Days and time words',
            words: [W17.xq1, W17.xq2, W17.xq3, W17.xq4, W17.xq5, W17.xq6, W17.xq7, W17.jintian, W17.mingtian, W17.zhoumo],
          },
          {
            type: 'table',
            head: ['Day', 'Say it', 'Trick'],
            rows: [
              ['星期一 (Monday)', 'xīngqīyī', 'Week plus one'],
              ['星期三 (Wednesday)', 'xīngqīsān', 'Week plus three'],
              ['星期五 (Friday)', 'xīngqīwǔ', 'Week plus five'],
              ['星期天 (Sunday)', 'xīngqītiān', 'The day that ends the week'],
            ],
          },
          kidsWay('Clap once for each day as you count from 星期一 to 星期天. Kids learn the days in order by clapping them, so do the same with the seven words.'),
          {
            type: 'pro',
            body: 'In Beijing and the north, people often say 礼拜 (lǐbài) instead of 星期, as in 礼拜天 (Sunday). Both are correct, so use whichever you hear more.',
          },
        ],
      },
      {
        kicker: 'What locals say',
        title: 'Talking about days',
        blocks: [
          locals('"今天星期几？" (what day is it today?) is the usual question. Locals answer with just the day, like 今天星期三.'),
          locals('"周末" (weekend) is common in speech. People say "周末见" (see you at the weekend) when they part on Friday.'),
          {
            type: 'dialogue',
            title: 'What day is it?',
            lines: [
              { speaker: 'A', hanzi: '今天星期几？', pinyin: 'Jīntiān xīngqī jǐ?', english: 'What day is it today?' },
              { speaker: 'B', hanzi: '今天星期三，明天星期四。', pinyin: 'Jīntiān xīngqīsān, míngtiān xīngqīsì.', english: 'Today is Wednesday, tomorrow is Thursday.' },
            ],
          },
        ],
      },
      {
        kicker: 'Remember',
        title: 'Remember moment',
        blocks: [
          {
            type: 'remember',
            body: 'Yesterday is 昨天, today is 今天 and tomorrow is 明天. Only the first syllable changes, so 天 (day) stays the same in all three.',
          },
          {
            type: 'taglish',
            body: 'Ang 昨天 ay kahapon, ang 今天 ay ngayon, at ang 明天 ay bukas. Pareho silang may 天 sa dulo, kaya isang salita lang ang kailangan mong tandaan.',
          },
        ],
      },
      quiz('Sunday', 'Which word means "Sunday"?', ['星期天', '星期一', '星期六'], 0, '星期天 is Sunday. 星期一 is Monday and 星期六 is Saturday.'),
      quiz('Tomorrow', 'What does 明天 mean?', ['today', 'tomorrow', 'yesterday'], 1, '明天 (míngtiān) is tomorrow. 今天 is today and 昨天 is yesterday.'),
      speak([
        { prompt: 'Ask what day it is today.', hanzi: '今天星期几？', pinyin: 'Jīntiān xīngqī jǐ?', english: 'What day is it today?' },
        { prompt: 'Say tomorrow is Tuesday.', hanzi: '明天星期二。', pinyin: 'Míngtiān xīngqī èr.', english: 'Tomorrow is Tuesday.' },
      ]),
    ],
  },

  {
    id: 'fnd-opposites',
    module: 'foundations',
    title: 'Opposites: big and small, hot and cold',
    subtitle: 'The pairs children learn together',
    minutes: 10,
    goal: 'Use common opposites to describe things and say when something is too much.',
    pages: [
      {
        kicker: 'Overview',
        title: 'Learn words in pairs',
        blocks: [
          {
            type: 'text',
            title: 'Why pairs help',
            body: [
              'Children learn big and small at the same time, because each word makes the other easier to remember. The same is true in Chinese.',
              'Most of the basic adjectives come in pairs, so learning one gives you the other for free.',
            ],
          },
          {
            type: 'taglish',
            body: 'Natututo ang mga bata ng magkasalungat nang magkasama, gaya ng malaki at maliit. Sa Chinese, madalas ding magkapares ang mga pang-uri, kaya kapag natutunan mo ang isa, halos libre na ang kabila.',
          },
        ],
      },
      {
        kicker: 'Deep dive',
        title: 'Pairs you will use every day',
        blocks: [
          {
            type: 'pairs',
            title: 'Opposite pairs',
            pairs: [
              { a: W17.da, b: W17.xiao, note: 'big and small' },
              { a: W17.duo, b: W17.shao, note: 'many and few' },
              { a: W17.re, b: W17.leng, note: 'hot and cold' },
              { a: W17.gao, b: W17.ai, note: 'tall and short (people)' },
              { a: W17.kuai, b: W17.man, note: 'fast and slow' },
              { a: W17.chang, b: W17.duan, note: 'long and short (length)' },
            ],
          },
          {
            type: 'vocab',
            title: 'Describe things with these',
            words: [W17.zhong],
          },
          kidsWay('Use your hands. Hold them far apart for big, bring them together for small, then say the word. Kids remember opposites through movement, so act out each pair before you say it.'),
          {
            type: 'pro',
            body: 'Put 很 before the adjective to describe something: 很大 (big), 很冷 (cold). It is not always "very" in English. It is often just the normal way to state a quality.',
          },
        ],
      },
      {
        kicker: 'What locals say',
        title: 'Saying "too much"',
        blocks: [
          locals('"太热了" means "too hot". Locals use 太 + adjective + 了 all the time, like 太冷了 (too cold) or 太慢了 (too slow).'),
          locals('When you agree with someone about the weather, people often say "是啊，好热啊" (yes, it really is hot).'),
          {
            type: 'dialogue',
            title: 'Too hot',
            lines: [
              { speaker: 'A', hanzi: '今天很热。', pinyin: 'Jīntiān hěn rè.', english: 'Today is hot.' },
              { speaker: 'B', hanzi: '太热了，我要喝水。', pinyin: 'Tài rè le, wǒ yào hē shuǐ.', english: 'It is too hot, I want to drink water.' },
            ],
          },
        ],
      },
      {
        kicker: 'Remember',
        title: 'Remember moment',
        blocks: [
          {
            type: 'remember',
            body: 'The word 大 (big) has a close friend, 小 (small). Think of them as a pair, then add 很 to describe something: 很大, 很小.',
          },
          {
            type: 'taglish',
            body: 'Ang 大 ay malaki at ang 小 ay maliit. Isipin silang magkapares, tapos lagyan ng 很 para ilarawan ang isang bagay, gaya ng 很大 o 很小.',
          },
        ],
      },
      quiz('Big', 'What does 大 mean?', ['big', 'small', 'hot'], 0, '大 (dà) is big. 小 (xiǎo) is small, and 热 (rè) is hot.'),
      quiz('Too hot', 'What does 太热了 mean?', ['too hot', 'too cold', 'very tall'], 0, '太热了 (tài rè le) means "too hot". 冷 (lěng) is cold.'),
      speak([
        { prompt: 'Say the box is small.', hanzi: '这个很小。', pinyin: 'Zhège hěn xiǎo.', english: 'This one is small.' },
        { prompt: 'Say today is cold.', hanzi: '今天很冷。', pinyin: 'Jīntiān hěn lěng.', english: 'Today is cold.' },
      ]),
    ],
  },

  {
    id: 'fnd-school',
    module: 'foundations',
    title: 'School supplies and the classroom',
    subtitle: 'Bag, pencil, eraser, blackboard and homework',
    minutes: 11,
    goal: 'Name the things in a school bag and in a classroom, and say you have homework.',
    pages: [
      {
        kicker: 'Overview',
        title: 'Packing the school bag',
        blocks: [
          {
            type: 'text',
            title: 'Start with what you carry',
            body: [
              'The first school words most children learn are the things they carry every day: the bag, the pencil and the eraser.',
              'Once you can name these, you can follow a teacher in class and ask a friend for something you need.',
            ],
          },
          {
            type: 'taglish',
            body: 'Ang mga unang salitang natutunan ng mga bata sa paaralan ay ang mga dala nila araw-araw: ang bag, ang lapis, at ang pambura. Kapag alam mo ang mga ito, kaya mo nang humingi ng gamit sa kaklase mo.',
          },
        ],
      },
      {
        kicker: 'Deep dive',
        title: 'Things in school',
        blocks: [
          {
            type: 'vocab',
            title: 'School words',
            words: [W17.shubao, W17.bi, W17.qianbi, W17.xiangpi, W17.chizi, W17.benzi, W17.zuoye, W17.heiban, W17.laoshi],
          },
          {
            type: 'table',
            head: ['Item', 'Say it', 'Trick'],
            rows: [
              ['书包 (school bag)', 'shūbāo', '书 (book) + 包 (bag)'],
              ['铅笔 (pencil)', 'qiānbǐ', 'Lead + pen'],
              ['橡皮 (eraser)', 'xiàngpí', 'Rubber, in a word'],
              ['作业 (homework)', 'zuòyè', 'Work + work'],
            ],
          },
          kidsWay('Pack a real school bag in Chinese. Take out each item, touch it, and say its name, the way children do on the first school day.'),
          {
            type: 'pro',
            body: 'Ask 有没有 (yǒu méi yǒu) to ask "do you have?" in a yes or no way: 你有没有橡皮？ (Do you have an eraser?). You can also use 吗 at the end: 你有橡皮吗？',
          },
        ],
      },
      {
        kicker: 'What locals say',
        title: 'Classroom talk',
        blocks: [
          locals('Students stand and greet the teacher with "老师好！" (hello, teacher!). It is said as a group at the start of class.'),
          locals('"我忘了带作业" means "I forgot to bring my homework". Locals use 忘了 (forgot) a lot in daily life, not just at school.'),
          {
            type: 'dialogue',
            title: 'Where is my bag?',
            lines: [
              { speaker: 'A', hanzi: '你有铅笔吗？', pinyin: 'Nǐ yǒu qiānbǐ ma?', english: 'Do you have a pencil?' },
              { speaker: 'B', hanzi: '有，在书包里。', pinyin: 'Yǒu, zài shūbāo lǐ.', english: 'Yes, it is in my bag.' },
            ],
          },
        ],
      },
      {
        kicker: 'Remember',
        title: 'Remember moment',
        blocks: [
          {
            type: 'remember',
            body: 'Many school words have a clear base: 书 (book), 包 (bag), 本 (notebook), 笔 (pen). Find the base you know and the new word becomes easier.',
          },
          {
            type: 'taglish',
            body: 'Maraming salita sa paaralan ang may pinagbabatayang kilala mo na: 书 (libro), 包 (bag), 本 (kuwaderno), 笔 (panulat). Hanapin ang kilalang bahagi at mas madali nang tandaan ang bagong salita.',
          },
        ],
      },
      quiz('Eraser', 'What does 橡皮 mean?', ['eraser', 'ruler', 'pencil case'], 0, '橡皮 (xiàngpí) is an eraser. 尺子 is a ruler, and 书包 is a school bag.'),
      quiz('Blackboard', 'What is 黑板?', ['blackboard', 'desk', 'door'], 0, '黑板 (hēibǎn) is blackboard. 桌子 is desk and 门 is door.'),
      speak([
        { prompt: 'Say you have homework.', hanzi: '我有作业。', pinyin: 'Wǒ yǒu zuòyè.', english: 'I have homework.' },
        { prompt: 'Say your school bag is heavy.', hanzi: '我的书包很重。', pinyin: 'Wǒ de shūbāo hěn zhòng.', english: 'My school bag is heavy.' },
      ]),
    ],
  },

  {
    id: 'fnd-house',
    module: 'foundations',
    title: 'Furniture and things at home',
    subtitle: 'Bed, chair, sofa, fridge, TV and the light',
    minutes: 10,
    goal: 'Name common furniture and appliances, say where they are, and ask someone to turn a light on or off.',
    pages: [
      {
        kicker: 'Overview',
        title: 'Name the things you see every day',
        blocks: [
          {
            type: 'text',
            title: 'Start at home',
            body: [
              'A child learns the words for the things in the house first, because they see them every day. The bed, the chair and the fridge are often the first nouns they say.',
              'Put these words together with 在 (zài, is at) to say where something is.',
            ],
          },
          {
            type: 'taglish',
            body: 'Inuuna ng mga bata ang mga salitang nakikita nila araw-araw sa bahay, gaya ng kama, upuan, at ref. Gamitin ang 在 (nasa) para sabihin kung nasaan ang isang bagay.',
          },
        ],
      },
      {
        kicker: 'Deep dive',
        title: 'Furniture and appliances',
        blocks: [
          {
            type: 'vocab',
            title: 'Home words',
            words: [W17.chuang, W17.yizi, W17.zhuozi, W17.shafa, W17.bingxiang, W17.dianshi, W17.deng, W17.chuanghu, W17.men, W17.kai, W17.guan, W17.pangbian, W17.qianmian],
          },
          {
            type: 'table',
            head: ['Pattern', 'Say it', 'Meaning'],
            rows: [
              ['X 在 place', '床在卧室。', 'The bed is in the bedroom.'],
              ['X 在 place 旁边', '椅子在桌子旁边。', 'The chair is next to the table.'],
              ['X 在 place 前面', '电视在沙发前面。', 'The TV is in front of the sofa.'],
            ],
          },
          kidsWay('Point to things around the house and name them, then say where each one is. Children learn location words by pointing, so do the same with 旁边 and 前面.'),
          {
            type: 'pro',
            body: 'Put the place word last when describing where something is: 在 + place + 里 (inside), 上 (on), 旁边 (beside). For example 书在书包里 (the book is in the bag).',
          },
        ],
      },
      {
        kicker: 'What locals say',
        title: 'Lights and screens',
        blocks: [
          locals('Locals say 开灯 (turn on the light) and 关灯 (turn off the light) at home all the time. You can also say 关门 (close the door).'),
          locals('"看电视" means "watch TV". People often shorten it in speech, so 看电视 is the natural phrase, not 看电视机.'),
          {
            type: 'dialogue',
            title: 'Where is the chair?',
            lines: [
              { speaker: 'A', hanzi: '椅子在哪里？', pinyin: 'Yǐzi zài nǎ lǐ?', english: 'Where is the chair?' },
              { speaker: 'B', hanzi: '在桌子旁边。', pinyin: 'Zài zhuōzi pángbiān.', english: 'It is next to the table.' },
            ],
          },
        ],
      },
      {
        kicker: 'Remember',
        title: 'Remember moment',
        blocks: [
          {
            type: 'remember',
            body: 'The verbs 开 (open, turn on) and 关 (close, turn off) work with lots of things. 开门 is open the door and 关灯 is turn off the light. Learn the verb once, then pair it with new nouns.',
          },
          {
            type: 'taglish',
            body: 'Ang 开 ay buksan o i-on, at ang 关 ay isara o i-off. Ginagamit ito sa maraming bagay: 开门 (buksan ang pinto), 关灯 (patayin ang ilaw). Isang pandiwa lang, maraming gamit.',
          },
        ],
      },
      quiz('Fridge', 'What does 冰箱 mean?', ['fridge', 'sofa', 'lamp'], 0, '冰箱 (bīngxiāng) is fridge, literally "ice box". 沙发 is sofa and 灯 is lamp.'),
      quiz('Turn on the light', 'What does 开灯 mean?', ['turn on the light', 'turn off the TV', 'open the door'], 0, '开灯 (kāi dēng) is turn on the light. 关灯 is turn it off.'),
      speak([
        { prompt: 'Say the TV is in front of the sofa.', hanzi: '电视在沙发前面。', pinyin: 'Diànshì zài shāfā qiánmiàn.', english: 'The TV is in front of the sofa.' },
        { prompt: 'Say you turn off the light and sleep.', hanzi: '我关灯睡觉。', pinyin: 'Wǒ guān dēng shuìjiào.', english: 'I turn off the light and sleep.' },
      ]),
    ],
  },
];

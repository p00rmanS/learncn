import type { Lesson } from './types';
import { W2 } from './wordsMore';
import { W3 } from './wordsExtra';
import { W4 } from './wordsPart4';

export const PART4_LESSONS: Lesson[] = [
  // ─────────────────────────── Core Patterns ───────────────────────────
  {
    id: 'invite',
    module: 'patterns',
    title: 'We, you all, and "let\'s"',
    subtitle: 'Plurals, and how to make a friendly suggestion',
    minutes: 9,
    goal: 'Say we, you all and they, and invite someone with 吧.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Making pronouns plural',
        blocks: [
          {
            type: 'text',
            body: ['Add 们 (men) after a person pronoun to make it plural: 我 → 我们, 你 → 你们, 他 → 他们. That is the whole rule.'],
          },
          { type: 'vocab', words: [W4.women, W4.nimen, W4.tamen] },
          {
            type: 'pro',
            body: '们 is only for people. Do not add it after a number: say 三个学生, not 三个学生们. And use 们 only with pronouns and groups of people, never with objects.',
          },
          {
            type: 'taglish',
            body: 'Parang "kami / tayo / kayo / sila" sa Tagalog, pero mas simple: laging dagdag lang ng 们 sa dulo. Walang "kami" vs "tayo" na pagkakaiba sa 我们; ang context na ang bahala.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'Let\'s do it together',
        blocks: [
          { type: 'vocab', words: [W4.yiqi, W4.ba] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['我们一起吃饭吧。', "Let's eat together."],
              ['我们走吧。', "Let's go."],
              ['你们好！', 'Hello, everyone!'],
              ['他们在学校。', 'They are at school.'],
            ],
          },
          {
            type: 'remember',
            body: '吧 softens a sentence into a suggestion, like a friendly "okay?" at the end. 吗 asks a question, 吧 suggests. Both are tiny sounds at the end, so tie them to their job: 吗 = "?", 吧 = "let\'s".',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Making plans',
        blocks: [
          {
            type: 'dialogue',
            title: 'Lunch plans',
            lines: [
              { speaker: 'A', hanzi: '我们一起吃饭吧！', pinyin: 'Wǒmen yìqǐ chī fàn ba!', english: "Let's eat together!" },
              { speaker: 'B', hanzi: '好啊！去哪里吃？', pinyin: 'Hǎo a! Qù nǎlǐ chī?', english: 'Sure! Where shall we eat?' },
              { speaker: 'A', hanzi: '我们去学校旁边吧。', pinyin: 'Wǒmen qù xuéxiào pángbiān ba.', english: "Let's go next to the school." },
              { speaker: 'B', hanzi: '好，走吧。', pinyin: 'Hǎo, zǒu ba.', english: "Okay, let's go." },
            ],
          },
          {
            type: 'pro',
            body: '好啊 (hǎo a) is a warm "sure!". Reply with 好 and a light 啊 and you sound enthusiastic. 好的 is the more neutral "okay".',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'We',
        blocks: [
          {
            type: 'quiz',
            question: 'Which word means "we"?',
            options: ['我们', '你们', '他们'],
            answer: 0,
            explain: '我 + 们 = we. 你们 is "you all" and 他们 is "they".',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Suggest it',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you say "Let\'s go"?',
            options: ['我们走吧。', '我们走吗？', '我们走了。'],
            answer: 0,
            explain: '吧 makes a suggestion. 吗 would turn it into a question.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'People only',
        blocks: [
          {
            type: 'quiz',
            question: 'Which is correct?',
            options: ['三个学生', '三个学生们', '三们学生'],
            answer: 0,
            explain: 'Do not add 们 after a number. 三个学生 is "three students".',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Invite someone.', hanzi: '我们一起吃饭吧。', pinyin: 'Wǒmen yìqǐ chī fàn ba.', english: "Let's eat together." },
          { type: 'speak', prompt: 'Say yes.', hanzi: '好啊！走吧。', pinyin: 'Hǎo a! Zǒu ba.', english: "Sure! Let's go." },
        ],
      },
    ],
  },

  {
    id: 'likes',
    module: 'patterns',
    title: 'Likes, also and all',
    subtitle: 'Say what you like, and add 也 and 都 in the right place',
    minutes: 9,
    goal: 'Say what you like, and use 也 (also) and 都 (all) correctly.',
    pages: [
      {
        kicker: 'Learn',
        title: 'To like',
        blocks: [
          { type: 'vocab', words: [W4.xihuan, W4.zui] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['我喜欢茶。', 'I like tea.'],
              ['我喜欢喝茶。', 'I like drinking tea.'],
              ['我不喜欢咖啡。', "I don't like coffee."],
              ['我最喜欢茶。', 'I like tea the most.'],
            ],
          },
          {
            type: 'remember',
            body: '喜欢 xǐhuan sounds like "she-hwan". The first part 喜 means joy, so it feels like "joy-ful about". The second syllable is light (neutral tone).',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'Also and all',
        blocks: [
          { type: 'vocab', words: [W4.ye, W4.dou] },
          {
            type: 'text',
            body: ['也 means "also" and 都 means "all" or "both". Both go before the verb, after the subject: 我也喜欢茶, 我们都喜欢茶.'],
          },
          {
            type: 'pro',
            body: 'This is a classic mistake. Do not put 也 or 都 at the end like English "too". They always go right before the verb: 我也去, never 我去也.',
          },
          {
            type: 'taglish',
            body: 'Sa Tagalog, "din" ay nasa dulo ("Ako rin"). Sa Mandarin, kabaligtaran: ang 也 ay nasa harap ng verb. 我也喜欢 = "Ako rin ay gusto".',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Finding common ground',
        blocks: [
          {
            type: 'dialogue',
            title: 'About tea',
            lines: [
              { speaker: 'A', hanzi: '你喜欢喝茶吗？', pinyin: 'Nǐ xǐhuan hē chá ma?', english: 'Do you like drinking tea?' },
              { speaker: 'B', hanzi: '我喜欢。你呢？', pinyin: 'Wǒ xǐhuan. Nǐ ne?', english: 'I do. And you?' },
              { speaker: 'A', hanzi: '我也喜欢，我最喜欢茶。', pinyin: 'Wǒ yě xǐhuan, wǒ zuì xǐhuan chá.', english: 'I like it too. I like tea best.' },
              { speaker: 'B', hanzi: '我们都喜欢茶！', pinyin: 'Wǒmen dōu xǐhuan chá!', english: 'We both like tea!' },
            ],
          },
          {
            type: 'tip',
            label: 'Good to know',
            body: '你呢？ (nǐ ne) means "and you?". The particle 呢 turns the sentence into a "what about you?" follow-up.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Like it',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you say "I like tea"?',
            options: ['我喜欢茶。', '我茶喜欢。', '喜欢我茶。'],
            answer: 0,
            explain: 'Subject + 喜欢 + object.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Also',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you say "I like it too"?',
            options: ['我也喜欢。', '我喜欢也。', '也我喜欢。'],
            answer: 0,
            explain: '也 goes after the subject and before the verb.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Both',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you say "We all like tea"?',
            options: ['我们都喜欢茶。', '我们喜欢都茶。', '都我们喜欢茶。'],
            answer: 0,
            explain: '都 also goes before the verb, right after the subject.',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Say what you like.', hanzi: '我最喜欢茶。', pinyin: 'Wǒ zuì xǐhuan chá.', english: 'I like tea the most.' },
          { type: 'speak', prompt: 'Agree with someone.', hanzi: '我也喜欢。', pinyin: 'Wǒ yě xǐhuan.', english: 'I like it too.' },
        ],
      },
    ],
  },

  {
    id: 'cando',
    module: 'patterns',
    title: 'Want, can, may',
    subtitle: '想, 要, 会, 能 and 可以: five ways to say what you want or can do',
    minutes: 10,
    goal: 'Choose the right word for wanting, ability, possibility and permission.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Five helper verbs',
        blocks: [
          { type: 'vocab', words: [W2.xiang, W2.yao, W2.hui, W2.neng, W4.keyi] },
          {
            type: 'table',
            head: ['Word', 'Use', 'Example'],
            rows: [
              ['想', 'would like to', '我想去。 I would like to go.'],
              ['要', 'want / need / will', '我要水。 I want water.'],
              ['会', 'can (learned skill)', '我会说中文。 I can speak Chinese.'],
              ['能', 'can (able, allowed by circumstances)', '我能来。 I am able to come.'],
              ['可以', 'may (permission)', '我可以坐这里吗？ May I sit here?'],
            ],
          },
          {
            type: 'remember',
            body: 'Match them to questions. 想: "do you feel like it?" 会: "did you learn it?" 能: "are you free or able right now?" 可以: "is it allowed?" Ask yourself which question fits.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'Saying no',
        blocks: [
          {
            type: 'text',
            body: ['Negate each helper with 不: 不想, 不会, 不能, 不可以. For a direct "no, that\'s not okay", people also say 不行 (bù xíng).'],
          },
          {
            type: 'pro',
            body: '能 and 可以 overlap when asking permission, so both work in 我能坐这里吗 and 我可以坐这里吗. But 可以 sounds a little more polite, so use it with strangers.',
          },
          {
            type: 'taglish',
            body: 'Sa Tagalog, "pwede" ay sumasaklaw sa lahat, pero sa Mandarin hinahati sa 会 (kaya dahil natutunan), 能 (kaya dahil may pagkakataon), 可以 (pwede, pinapayagan). Magandang tandaan: 会 = marunong.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'At a café',
        blocks: [
          {
            type: 'dialogue',
            title: 'May I sit here?',
            lines: [
              { speaker: 'A', hanzi: '请问，我可以坐这里吗？', pinyin: 'Qǐngwèn, wǒ kěyǐ zuò zhèlǐ ma?', english: 'Excuse me, may I sit here?' },
              { speaker: 'B', hanzi: '可以，请坐。', pinyin: 'Kěyǐ, qǐng zuò.', english: 'Yes, please sit.' },
              { speaker: 'A', hanzi: '你会说英语吗？', pinyin: 'Nǐ huì shuō Yīngyǔ ma?', english: 'Can you speak English?' },
              { speaker: 'B', hanzi: '我会说一点。', pinyin: 'Wǒ huì shuō yìdiǎn.', english: 'I can speak a little.' },
            ],
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'A learned skill',
        blocks: [
          {
            type: 'quiz',
            question: 'Which word says "I can speak Chinese" (a learned skill)?',
            options: ['我会说中文。', '我可以说中文。', '我要说中文。'],
            answer: 0,
            explain: '会 is for learned skills such as languages.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Permission',
        blocks: [
          {
            type: 'quiz',
            question: 'You want to ask "May I sit here?" politely. Which fits best?',
            options: ['我可以坐这里吗？', '我会坐这里吗？', '我要坐这里吗？'],
            answer: 0,
            explain: '可以 asks for permission.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Feeling like it',
        blocks: [
          {
            type: 'quiz',
            question: 'Which means "I would like to go"?',
            options: ['我想去。', '我会去。', '我能去。'],
            answer: 0,
            explain: '想 shows what you would like to do.',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Ask permission.', hanzi: '我可以坐这里吗？', pinyin: 'Wǒ kéyǐ zuò zhèlǐ ma?', english: 'May I sit here?' },
          { type: 'speak', prompt: 'Say what you want.', hanzi: '我想去。', pinyin: 'Wǒ xiǎng qù.', english: 'I would like to go.' },
        ],
      },
    ],
  },

  // ─────────────────────────── Everyday Life ───────────────────────────
  {
    id: 'hobbies',
    module: 'daily',
    title: 'Hobbies and weekends',
    subtitle: 'What you like to do in your free time',
    minutes: 8,
    goal: 'Talk about weekend plans and things you enjoy doing.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Free-time activities',
        blocks: [
          { type: 'vocab', words: [W4.zhoumo, W4.dianying, W4.yinyue, W4.paobu, W4.changge, W4.lvyou] },
          {
            type: 'remember',
            body: '电影 diànyǐng: 电 is electricity, 影 is shadow or image, so "electric shadows", which is a movie. 音乐 yīnyuè: 音 is sound and 乐 is joy. These are memory aids and help you see the parts.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'Put it together',
        blocks: [
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['我喜欢看电影。', 'I like watching movies.'],
              ['我喜欢听音乐。', 'I like listening to music.'],
              ['我周末跑步。', 'I jog on weekends.'],
              ['你周末做什么？', 'What do you do on weekends?'],
            ],
          },
          {
            type: 'pro',
            body: 'Time words go before the verb: 我周末看电影, not 我看电影周末. Use 周末 in a sentence out loud a few times. It becomes automatic quickly.',
          },
          {
            type: 'taglish',
            body: 'Pareho ng ating "mahilig ako sa ...": 我喜欢看电影 = "Mahilig akong manood ng sine". At ang oras (周末) ay nasa unahan ng verb, parang "Sa weekend, nanonood ako".',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'What do you do?',
        blocks: [
          {
            type: 'dialogue',
            title: 'Weekend talk',
            lines: [
              { speaker: 'A', hanzi: '你周末做什么？', pinyin: 'Nǐ zhōumò zuò shénme?', english: 'What do you do on weekends?' },
              { speaker: 'B', hanzi: '我喜欢看电影，也喜欢听音乐。', pinyin: 'Wǒ xǐhuan kàn diànyǐng, yě xǐhuan tīng yīnyuè.', english: 'I like watching movies and also listening to music.' },
              { speaker: 'A', hanzi: '我们一起看电影吧！', pinyin: 'Wǒmen yìqǐ kàn diànyǐng ba!', english: "Let's watch a movie together!" },
              { speaker: 'B', hanzi: '好啊！', pinyin: 'Hǎo a!', english: 'Sure!' },
            ],
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Movies',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you say "I like watching movies"?',
            options: ['我喜欢看电影。', '我看电影喜欢。', '我电影喜欢看。'],
            answer: 0,
            explain: '喜欢 + verb + object.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Weekend word order',
        blocks: [
          {
            type: 'quiz',
            question: 'Which is correct for "I jog on weekends"?',
            options: ['我周末跑步。', '我跑步周末。', '周末跑步我。'],
            answer: 0,
            explain: 'Time before the verb: 我 + 周末 + 跑步.',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Ask about the weekend.', hanzi: '你周末做什么？', pinyin: 'Nǐ zhōumò zuò shénme?', english: 'What do you do on weekends?' },
          { type: 'speak', prompt: 'Answer.', hanzi: '我喜欢听音乐。', pinyin: 'Wǒ xǐhuan tīng yīnyuè.', english: 'I like listening to music.' },
        ],
      },
    ],
  },

  {
    id: 'dates',
    module: 'daily',
    title: 'Dates, birthdays and age',
    subtitle: 'Say the date, ask someone\'s birthday, and talk about age',
    minutes: 10,
    goal: 'Say a full date, give your birthday, and ask or say someone\'s age.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Months and days',
        blocks: [
          { type: 'vocab', words: [W2.yue, W4.hao, W4.nian, W4.shengri] },
          {
            type: 'table',
            head: ['Say', 'Hanzi', 'Pinyin'],
            rows: [
              ['January', '一月', 'yī yuè'],
              ['October', '十月', 'shí yuè'],
              ['December', '十二月', 'shí èr yuè'],
              ['the 8th', '八号', 'bā hào'],
              ['the 21st', '二十一号', 'èr shí yī hào'],
            ],
          },
          {
            type: 'text',
            body: ['Months are just number + 月. Days are number + 号. No names to memorise: you already know the numbers.'],
          },
          {
            type: 'taglish',
            body: 'Dito, madali kaysa Tagalog: walang "Enero, Pebrero". Ang January ay "isang buwan" (一月), ang February ay "dalawang buwan" (二月), at iba pa.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'Big to small',
        blocks: [
          {
            type: 'text',
            body: [
              'Dates go from biggest to smallest: year, month, day. Years are read digit by digit: 2026 is 二零二六年 (èr líng èr liù nián).',
              'Example: 二零二六年十月八号 is "8 October 2026".',
            ],
          },
          {
            type: 'pro',
            body: 'The pattern "big to small" works everywhere in Chinese: date, address (country, city, street) and even names (family name first). Once you spot it, many things click into place.',
          },
          {
            type: 'remember',
            body: 'Think "zoom in": start with the whole year, zoom to the month, then to the day. Say it in that order a few times with your own birthday.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'Age',
        blocks: [
          { type: 'vocab', words: [W4.sui, W4.duoda] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['你多大？', 'How old are you? (adult or peer)'],
              ['你几岁？', 'How old are you? (to a young child)'],
              ['我二十五岁。', 'I am 25 years old.'],
              ['你的生日是几月几号？', 'When is your birthday?'],
            ],
          },
          {
            type: 'pro',
            body: 'Use 几岁 only for small children. For adults, ask 你多大？ For older people, the more respectful form is 您多大年纪了？ Asking age is normal in China, but pay attention to context.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Birthday talk',
        blocks: [
          {
            type: 'dialogue',
            title: 'Getting to know someone',
            lines: [
              { speaker: 'A', hanzi: '你的生日是几月几号？', pinyin: 'Nǐ de shēngrì shì jǐ yuè jǐ hào?', english: 'When is your birthday?' },
              { speaker: 'B', hanzi: '我的生日是三月五号。', pinyin: 'Wǒ de shēngrì shì sān yuè wǔ hào.', english: 'My birthday is March 5th.' },
              { speaker: 'A', hanzi: '你多大？', pinyin: 'Nǐ duō dà?', english: 'How old are you?' },
              { speaker: 'B', hanzi: '我二十五岁。', pinyin: 'Wǒ èrshíwǔ suì.', english: "I'm 25." },
            ],
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Read a date',
        blocks: [
          {
            type: 'quiz',
            question: 'What date is 三月五号?',
            options: ['March 5', 'May 3', 'March 15'],
            answer: 0,
            explain: '三月 is March and 五号 is the 5th.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Year order',
        blocks: [
          {
            type: 'quiz',
            question: 'Which is the correct order for dates in Chinese?',
            options: ['Year, month, day', 'Day, month, year', 'Month, day, year'],
            answer: 0,
            explain: 'Chinese goes from big to small: 年, 月, 号.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Ask the age',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you ask an adult colleague "How old are you?"',
            options: ['你多大？', '你几岁？', '你什么岁？'],
            answer: 0,
            explain: '多大 is for adults and peers. 几岁 is for young children.',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Ask the birthday.', hanzi: '你的生日是几月几号？', pinyin: 'Nǐ de shēngrì shì jǐ yuè jǐ hào?', english: 'When is your birthday?' },
          { type: 'speak', prompt: 'Say your age.', hanzi: '我二十五岁。', pinyin: 'Wǒ èrshíwǔ suì.', english: "I'm 25." },
        ],
      },
    ],
  },

  {
    id: 'transport',
    module: 'daily',
    title: 'Getting around',
    subtitle: 'Take the subway, a taxi or a bus, and ask how far it is',
    minutes: 10,
    goal: 'Say how you travel and ask how to get somewhere.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Ways to travel',
        blocks: [
          { type: 'vocab', words: [W4.ditie, W4.gongjiao, W4.chuzuche, W4.huoche, W4.feiji, W4.jichang] },
          {
            type: 'remember',
            body: '地铁 is "ground iron" (underground rail), 火车 is "fire vehicle" (the old steam train), 飞机 is "flying machine". Most transport words show how they work. These are memory aids from the characters.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'Take a vehicle: 坐',
        blocks: [
          { type: 'vocab', words: [W3.zuo4, W4.dao, W4.yuan, W4.jin] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['我坐地铁去机场。', 'I take the subway to the airport.'],
              ['去机场怎么走？', 'How do I get to the airport?'],
              ['机场远吗？', 'Is the airport far?'],
              ['我到机场了。', "I've arrived at the airport."],
            ],
          },
          {
            type: 'pro',
            body: 'The same 坐 means both "sit" and "take (a vehicle)". The pattern is 坐 + vehicle + 去 + place, in that order: 我坐地铁去机场. You are "sitting in" the vehicle on the way.',
          },
          {
            type: 'taglish',
            body: 'Parang "sasakay ako ng MRT papunta sa airport": 我坐地铁去机场. Pareho ang daloy ng isip: sasakyan muna, tapos ang pupuntahan.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'To the airport',
        blocks: [
          {
            type: 'dialogue',
            title: 'Asking how to go',
            lines: [
              { speaker: 'A', hanzi: '请问，去机场怎么走？', pinyin: 'Qǐngwèn, qù jīchǎng zěnme zǒu?', english: 'Excuse me, how do I get to the airport?' },
              { speaker: 'B', hanzi: '你可以坐地铁。', pinyin: 'Nǐ kěyǐ zuò dìtiě.', english: 'You can take the subway.' },
              { speaker: 'A', hanzi: '远吗？', pinyin: 'Yuǎn ma?', english: 'Is it far?' },
              { speaker: 'B', hanzi: '不太远。', pinyin: 'Bú tài yuǎn.', english: 'Not very far.' },
              { speaker: 'A', hanzi: '谢谢！', pinyin: 'Xièxie!', english: 'Thank you!' },
            ],
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Take the subway',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you say "I take the subway to the airport"?',
            options: ['我坐地铁去机场。', '我去机场地铁坐。', '我地铁去坐机场。'],
            answer: 0,
            explain: 'Subject + 坐 + vehicle + 去 + place.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Far or near',
        blocks: [
          {
            type: 'quiz',
            question: 'Which means "Is it far?"',
            options: ['远吗？', '近吗？', '到吗？'],
            answer: 0,
            explain: '远 is far, 近 is near.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Ask how to go',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you ask "How do I get to the airport?"',
            options: ['去机场怎么走？', '机场去怎么？', '怎么机场去走？'],
            answer: 0,
            explain: '去 + place + 怎么走 is the standard way to ask.',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Ask the way.', hanzi: '请问，去机场怎么走？', pinyin: 'Qǐngwèn, qù jīchǎng zěnme zǒu?', english: 'How do I get to the airport?' },
          { type: 'speak', prompt: 'Say how you travel.', hanzi: '我坐地铁去机场。', pinyin: 'Wǒ zuò dìtiě qù jīchǎng.', english: 'I take the subway to the airport.' },
        ],
      },
    ],
  },

  {
    id: 'colors',
    module: 'daily',
    title: 'Colors',
    subtitle: 'Name colors and ask for a different one',
    minutes: 7,
    goal: 'Name the common colors and ask if something comes in another color.',
    pages: [
      {
        kicker: 'Learn',
        title: 'The color words',
        blocks: [
          { type: 'vocab', words: [W4.yanse, W4.hongse, W4.baise, W4.heise, W4.lanse, W4.lvse, W4.huangse] },
          {
            type: 'remember',
            body: 'All the color words end in 色 (sè), which means "color". So learn the first character, 红, 白, 黑, 蓝, 绿, 黄, and add 色. Also, 红 and 绿 both contain the thread radical 纟 (dyed silk), which hints at color.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'Using colors',
        blocks: [
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['你喜欢什么颜色？', 'What color do you like?'],
              ['我喜欢蓝色。', 'I like blue.'],
              ['这个有白色的吗？', 'Does this come in white?'],
              ['红色的苹果', 'a red apple'],
            ],
          },
          {
            type: 'pro',
            body: 'To describe a noun with a color, add 的: 红色的苹果. To ask for another color in a shop, use 有 + color + 的 + 吗: 有白色的吗？ This one phrase is very useful.',
          },
          {
            type: 'taglish',
            body: 'Madaling shopping phrase ito: 有白色的吗? = "May puti ba?". Pwede mong palitan ang 白色 ng ibang kulay, at pwede ring ituro ang item sa halip na sabihin ang pangalan.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'In a shop',
        blocks: [
          {
            type: 'dialogue',
            title: 'Asking for another color',
            lines: [
              { speaker: 'A', hanzi: '这个有白色的吗？', pinyin: 'Zhè ge yǒu báisè de ma?', english: 'Does this come in white?' },
              { speaker: 'B', hanzi: '有。你喜欢什么颜色？', pinyin: 'Yǒu. Nǐ xǐhuan shénme yánsè?', english: 'Yes. What color do you like?' },
              { speaker: 'A', hanzi: '我喜欢蓝色。', pinyin: 'Wǒ xǐhuan lánsè.', english: 'I like blue.' },
            ],
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Color suffix',
        blocks: [
          {
            type: 'quiz',
            question: 'What does 色 mean in 红色 and 蓝色?',
            options: ['color', 'red', 'also'],
            answer: 0,
            explain: '色 (sè) means color. 红 is red, so 红色 is "red color".',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Ask in a shop',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you ask "Does this come in white?"',
            options: ['这个有白色的吗？', '这个是白色吗有？', '白色这个有的？'],
            answer: 0,
            explain: '有 + color + 的 + 吗.',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Ask in a shop.', hanzi: '这个有白色的吗？', pinyin: 'Zhè ge yǒu báisè de ma?', english: 'Does this come in white?' },
          { type: 'speak', prompt: 'Say your favorite color.', hanzi: '我喜欢蓝色。', pinyin: 'Wǒ xǐhuan lánsè.', english: 'I like blue.' },
        ],
      },
    ],
  },

  {
    id: 'health',
    module: 'daily',
    title: 'Feeling unwell and asking for help',
    subtitle: 'Say where it hurts, and call for help in an emergency',
    minutes: 10,
    goal: 'Say that you feel unwell, point to what hurts, and ask for help or a doctor.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Body and feelings',
        blocks: [
          { type: 'vocab', words: [W4.shufu, W4.tou, W4.duzi, W4.teng, W4.fashao] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['我不舒服。', "I don't feel well."],
              ['我头疼。', 'I have a headache.'],
              ['我肚子疼。', 'My stomach hurts.'],
              ['我发烧了。', 'I have a fever now.'],
            ],
          },
          {
            type: 'pro',
            body: 'The pattern for pain is body part + 疼: 头疼, 肚子疼. Say the part, then 疼. It works for any body part you learn later.',
          },
          {
            type: 'taglish',
            body: 'Parang "masakit ang ulo ko": 我头疼 ay literal na "ako ulo masakit". Kapag nasabi mo ang parte ng katawan at ang 疼, naiintindihan ka na agad, kahit simple lang ang grammar.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'Asking for help',
        blocks: [
          { type: 'vocab', words: [W4.yiyuan, W4.yao4, W4.bang, W4.jiuming] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['请帮我。', 'Please help me.'],
              ['请叫医生。', 'Please call a doctor.'],
              ['我要去医院。', 'I need to go to the hospital.'],
              ['救命！', 'Help!'],
            ],
          },
          {
            type: 'tip',
            label: 'Emergency numbers in mainland China',
            body: '120 is an ambulance, 110 is the police, 119 is the fire service. Say the digits one by one, with 1 as yāo: 幺二零, 幺幺零, 幺幺九 (yāo èr líng, yāo yāo líng, yāo yāo jiǔ).',
          },
          {
            type: 'remember',
            body: '药 (yào, medicine) sounds exactly like 要 (yào, want). Link them: "I want medicine" is 我要药. The grass-like top (艹) in 药 hints at herbal medicine. A memory aid.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'At the pharmacy',
        blocks: [
          {
            type: 'dialogue',
            title: 'Feeling sick',
            lines: [
              { speaker: 'A', hanzi: '你怎么了？', pinyin: 'Nǐ zěnme le?', english: "What's wrong?" },
              { speaker: 'B', hanzi: '我不舒服，我头疼。', pinyin: 'Wǒ bù shūfu, wǒ tóu téng.', english: "I don't feel well, I have a headache." },
              { speaker: 'A', hanzi: '你发烧了吗？', pinyin: 'Nǐ fāshāo le ma?', english: 'Do you have a fever?' },
              { speaker: 'B', hanzi: '没有。', pinyin: 'Méiyǒu.', english: 'No.' },
              { speaker: 'A', hanzi: '你要去医院吗？', pinyin: 'Nǐ yào qù yīyuàn ma?', english: 'Do you need to go to the hospital?' },
            ],
          },
          {
            type: 'pro',
            body: '你怎么了？ ("what happened to you?") is the standard way to ask what is wrong. Learn it as one block: it is something you will hear whenever you look unwell.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Headache',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you say "I have a headache"?',
            options: ['我头疼。', '我疼头。', '头我疼了。'],
            answer: 0,
            explain: 'Body part + 疼.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Ask for a doctor',
        blocks: [
          {
            type: 'quiz',
            question: 'Which means "Please call a doctor"?',
            options: ['请叫医生。', '请去医院。', '请给我药。'],
            answer: 0,
            explain: '叫 here means "call", and 医生 means doctor.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Emergency numbers',
        blocks: [
          {
            type: 'quiz',
            question: 'In an emergency, how do you say the digit 1 when reading 120?',
            options: ['yāo', 'yī', 'èr'],
            answer: 0,
            explain: 'In phone and emergency numbers, 1 is read yāo so it is not confused with 7 (qī).',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Say you feel unwell.', hanzi: '我不舒服，我头疼。', pinyin: 'Wǒ bù shūfu, wǒ tóu téng.', english: "I don't feel well, I have a headache." },
          { type: 'speak', prompt: 'Ask for help.', hanzi: '请帮我。请叫医生。', pinyin: 'Qǐng bāng wǒ. Qǐng jiào yīshēng.', english: 'Please help me. Please call a doctor.' },
        ],
      },
    ],
  },

  // ─────────────────────────── Work and Service ───────────────────────────
  {
    id: 'hotel',
    module: 'work',
    title: 'Hotel check-in',
    subtitle: 'Book a room, check in, and talk to the front desk',
    minutes: 10,
    goal: 'Check in to a hotel, or help a guest check in.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Hotel words',
        blocks: [
          { type: 'vocab', words: [W4.jiudian, W4.fangjian, W4.ding, W4.zhu, W4.huzhao, W4.yaoshi, W4.zaocan] },
          {
            type: 'remember',
            body: '房间 fángjiān: 房 is house or room, 间 is the space between (a sun peeking through a gate). 护照 hùzhào: 护 means protect, 照 means photo or according to: "protecting photo", a passport. Memory aids.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'At the front desk',
        blocks: [
          {
            type: 'table',
            head: ['Say this', 'Meaning', 'Who'],
            rows: [
              ['我订了一个房间。', 'I booked a room.', 'Guest'],
              ['请给我您的护照。', 'May I have your passport, please?', 'Staff'],
              ['您住几天？', 'How many days will you stay?', 'Staff'],
              ['早餐几点？', 'What time is breakfast?', 'Guest'],
            ],
          },
          {
            type: 'pro',
            body: 'For staff, always use 您 for guests. For a guest, 请问 before any question makes you sound polite. And remember 了 in 订了: it marks that the booking is already done.',
          },
          {
            type: 'taglish',
            body: 'Para sa mga nagtatrabaho sa hotel: matuto ng buong pangungusap bilang isang block, tulad ng 请给我您的护照 at 您住几天. Mas mabilis ito kaysa isa-isang salita, at mas magalang pakinggan.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Checking in',
        blocks: [
          {
            type: 'dialogue',
            title: 'At the front desk',
            lines: [
              { speaker: 'G', hanzi: '你好，我订了一个房间。', pinyin: 'Nǐ hǎo, wǒ dìng le yí ge fángjiān.', english: 'Hello, I booked a room.' },
              { speaker: 'S', hanzi: '欢迎光临！请给我您的护照。', pinyin: 'Huānyíng guānglín! Qǐng gěi wǒ nín de hùzhào.', english: 'Welcome! May I have your passport, please?' },
              { speaker: 'S', hanzi: '您住几天？', pinyin: 'Nín zhù jǐ tiān?', english: 'How many days are you staying?' },
              { speaker: 'G', hanzi: '住两天。', pinyin: 'Zhù liǎng tiān.', english: 'Two days.' },
              { speaker: 'S', hanzi: '这是您的钥匙。早餐七点到十点。', pinyin: 'Zhè shì nín de yàoshi. Zǎocān qī diǎn dào shí diǎn.', english: 'This is your key. Breakfast is from seven to ten.' },
              { speaker: 'G', hanzi: '谢谢！', pinyin: 'Xièxie!', english: 'Thank you!' },
            ],
          },
          {
            type: 'tip',
            label: 'Sound note',
            body: '一个 is said yí ge (一 before a 4th tone becomes tone 2). In 住两天, 两 is used for "two" before 天, like it is before measure words.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Booked a room',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you say "I booked a room"?',
            options: ['我订了一个房间。', '我房间订一个了。', '我住了一个订。'],
            answer: 0,
            explain: '订 + 了 + number + measure word + noun.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Staff: passport',
        blocks: [
          {
            type: 'quiz',
            question: 'As staff, how do you ask a guest for their passport politely?',
            options: ['请给我您的护照。', '给我你护照。', '你护照在哪里？'],
            answer: 0,
            explain: 'Use 请 and 您 for guests.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'How long',
        blocks: [
          {
            type: 'quiz',
            question: 'You hear 您住几天？ What is being asked?',
            options: ['How many days are you staying?', 'What is your room number?', 'What time is breakfast?'],
            answer: 0,
            explain: '住 is stay, 几天 is how many days.',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'As a guest.', hanzi: '你好，我订了一个房间。', pinyin: 'Nǐ hǎo, wǒ dìng le yí ge fángjiān.', english: 'Hello, I booked a room.' },
          { type: 'speak', prompt: 'As staff.', hanzi: '请给我您的护照。', pinyin: 'Qǐng gěi wǒ nín de hùzhào.', english: 'May I have your passport, please?' },
        ],
      },
    ],
  },
];


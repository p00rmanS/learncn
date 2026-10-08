import type { Block, Lesson, Word } from './types';
import { W } from './words';
import { EXTRA, MORE_LESSONS } from './lessonsMore';
import { PART3_LESSONS } from './lessonsPart3';
import { PART4_LESSONS } from './lessonsPart4';
import { PART5_LESSONS } from './lessonsPart5';

export const MODULES = [
  {
    id: 'sound' as const,
    title: 'Sound Bootcamp',
    blurb: 'Pinyin and tones first. Every habit you build here makes the rest easier.',
  },
  {
    id: 'convo' as const,
    title: 'First Conversations',
    blurb: 'Greet people, introduce yourself, count, and ask simple questions.',
  },
  {
    id: 'hanzi' as const,
    title: 'Reading Characters',
    blurb: 'See characters as parts you can understand, not random drawings.',
  },
  {
    id: 'patterns' as const,
    title: 'Core Patterns',
    blurb: 'The sentence patterns that unlock most everyday Mandarin.',
  },
  {
    id: 'daily' as const,
    title: 'Everyday Life',
    blurb: 'Family, food, shopping, time and the question words you need every day.',
  },
  {
    id: 'talk' as const,
    title: 'Natural Conversation',
    blurb: 'Fillers, reactions and everyday phrases that make you sound like you belong in the conversation.',
  },
  {
    id: 'food' as const,
    title: 'Restaurant Toolkit',
    blurb: 'Order, handle allergies and spice, pay, fix problems, and take orders as staff.',
  },
  {
    id: 'work' as const,
    title: 'Work and Service',
    blurb: 'Talk about jobs and welcome guests the way service staff do.',
  },
];

const BASE_LESSONS: Lesson[] = [
  // ───────────────────────── SOUND BOOTCAMP ─────────────────────────
  {
    id: 'sounds',
    module: 'sound',
    title: 'How Mandarin sounds work',
    subtitle: 'Pinyin, syllables and why we start with your ears',
    minutes: 6,
    goal: 'Break any Mandarin syllable into an initial, a final and a tone.',
    pages: [
      {
        kicker: 'Start here',
        title: 'Sound first, characters later',
        blocks: [
          {
            type: 'text',
            body: [
              'Mandarin is a tonal language: the pitch pattern of a syllable is part of the word. Get that right early and everything else gets easier.',
              'So for now you do not need to read characters. Every word in this course comes with audio and pinyin.',
              'Pinyin is a way of writing Mandarin sounds with the Latin alphabet. It is a tool for learning sounds, not English spelling. A few letters, like q, x and zh, do not sound the way you expect.',
            ],
          },
          {
            type: 'taglish',
            body: 'Hindi mo kailangan mag-memorize ng characters ngayon. Tainga muna ang gagamitin natin. Ang pinyin ay parang phonetic spelling ng Mandarin, pero may mga letra na iba ang tunog kumpara sa English, kaya makinig muna bago magbasa.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'Every syllable has three parts',
        blocks: [
          {
            type: 'text',
            body: ['Each syllable is built from an initial (the starting consonant), a final (the vowel part) and a tone. Some syllables have no initial, like ài.'],
          },
          {
            type: 'table',
            head: ['Syllable', 'Initial', 'Final', 'Tone'],
            rows: [
              ['mā', 'm', 'a', '1 · high flat'],
              ['hǎo', 'h', 'ao', '3 · low dip'],
              ['shì', 'sh', 'i', '4 · sharp fall'],
              ['rén', 'r', 'en', '2 · rising'],
            ],
            caption: 'The tone mark sits on the main vowel of the final.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Find the final',
        blocks: [
          {
            type: 'quiz',
            question: 'In the syllable hǎo, which part is the final?',
            options: ['h', 'ao', 'hao'],
            answer: 1,
            explain: 'h is the initial, ao is the final, and the mark on a shows the tone.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Break it apart',
        blocks: [
          {
            type: 'quiz',
            question: 'Which breakdown of shì is correct?',
            options: ['sh + i + tone 4', 's + hi + tone 4', 'sh + i + tone 1'],
            answer: 0,
            explain: 'sh is a single initial (two letters, one sound). The ì mark is tone 4, a sharp fall.',
          },
        ],
      },
    ],
  },

  {
    id: 'tones',
    module: 'sound',
    title: 'The four tones',
    subtitle: 'Hear them, see them, say them',
    minutes: 8,
    goal: 'Hear the difference between tones 1 to 4 and say each one.',
    pages: [
      {
        kicker: 'Learn',
        title: 'One syllable, four meanings',
        blocks: [
          {
            type: 'text',
            body: ['Tap each card to hear it. The line shows how your pitch moves: higher on the graph means higher in your voice.'],
          },
          {
            type: 'tones',
            items: [
              { tone: 1, word: W.ma1 },
              { tone: 2, word: W.ma2 },
              { tone: 3, word: W.ma3 },
              { tone: 4, word: W.ma4 },
            ],
          },
          {
            type: 'taglish',
            body: 'Isipin mo na melody ng word ang tone. Same letters, pero kapag nagbago ang pitch, ibang word na. Sa Tagalog, emotion lang ang nagbabago kapag tinaasan mo ang tono. Sa Mandarin, ang meaning mismo ang nagbabago.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'Tricks to remember the shapes',
        blocks: [
          {
            type: 'table',
            head: ['Tone', 'Shape', 'Think of'],
            rows: [
              ['1', 'High, flat', 'Holding one steady note'],
              ['2', 'Rising', '"Huh?" or "Really?"'],
              ['3', 'Low, dipping', '"Hmm…"'],
              ['4', 'Sharp fall', '"Stop!"'],
            ],
          },
          {
            type: 'tip',
            label: 'Memory aid',
            body: 'These comparisons are for remembering the pitch shape only. You do not need to stretch the vowel or act it out when you speak normally.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Spot the third tone',
        blocks: [
          {
            type: 'quiz',
            question: 'Which syllable is the third tone, low and dipping?',
            options: ['mā', 'má', 'mǎ', 'mà'],
            answer: 2,
            explain: 'The curved mark ˇ looks like the dip. mǎ (horse) is tone 3.',
          },
        ],
      },
      {
        kicker: 'Listen',
        title: 'Which one did you hear?',
        blocks: [
          {
            type: 'quiz',
            question: 'Play the audio. Which word do you hear?',
            audio: '马',
            options: ['mā · mom', 'má · hemp', 'mǎ · horse', 'mà · to scold'],
            answer: 2,
            explain: 'The voice dips low, so it is tone 3: mǎ, horse.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Why tones matter',
        blocks: [
          {
            type: 'quiz',
            question: 'You want to say "horse" (mǎ) but use tone 1 by mistake. What word do you actually say?',
            options: ['mā · mom', 'má · hemp', 'mà · to scold'],
            answer: 0,
            explain: 'Tone 1 gives mā, "mom". One wrong tone can change the word completely.',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Say the word, then play your recording back.', hanzi: '妈', pinyin: 'mā', english: 'mom · high and flat' },
          { type: 'speak', prompt: 'Now the falling one.', hanzi: '骂', pinyin: 'mà', english: 'to scold · sharp fall' },
        ],
      },
    ],
  },

  {
    id: 'neutral',
    module: 'sound',
    title: 'Neutral tone and the low third tone',
    subtitle: 'Light syllables, and how tone 3 really sounds in speech',
    minutes: 6,
    goal: 'Say words that end in a light syllable, like māma and xièxie.',
    pages: [
      {
        kicker: 'Learn',
        title: 'The neutral tone',
        blocks: [
          {
            type: 'text',
            body: [
              'Some syllables are said light and short, with no tone of their own. Their pitch simply follows the syllable before them. In pinyin they carry no mark.',
              'You already know several: the second syllable of māma, bàba and xièxie, and the question particle ma.',
            ],
          },
          { type: 'vocab', words: [W.mama, W.baba, W.xiexie, W.ma] },
        ],
      },
      {
        kicker: 'Learn',
        title: 'Tone 3 in real speech',
        blocks: [
          {
            type: 'text',
            body: [
              'The full dip-then-rise of tone 3 mostly happens when it stands alone or ends a phrase.',
              'When another syllable follows, tone 3 usually stays low and flat, with no rise. This is called the half third tone, and it is how native speakers say 好吃 (hǎo chī).',
            ],
          },
          {
            type: 'tip',
            label: 'Try this',
            body: 'Say hǎo on its own with a full dip and rise. Then say hǎo chī (tasty) and keep hǎo low, with no rise before chī.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Light or full?',
        blocks: [
          {
            type: 'quiz',
            question: 'How is the second syllable of bàba pronounced?',
            options: ['Full, high and flat', 'Light and short', 'Rising'],
            answer: 1,
            explain: 'The second ba is neutral tone: light and quick. Only the first syllable carries a full tone (4).',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Spot the neutral tone',
        blocks: [
          {
            type: 'quiz',
            question: 'Which of these has no neutral tone syllable?',
            options: ['māma', 'xièxie', 'zàijiàn'],
            answer: 2,
            explain: 'zàijiàn (goodbye) is tone 4 + tone 4. In māma and xièxie the second syllable is light.',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Full tone first, then a light second syllable.', hanzi: '爸爸', pinyin: 'bàba', english: 'dad' },
          { type: 'speak', prompt: 'Let the second syllable be short and soft.', hanzi: '谢谢', pinyin: 'xièxie', english: 'thank you' },
        ],
      },
    ],
  },

  {
    id: 'sandhi',
    module: 'sound',
    title: 'Tone changes you hear every day',
    subtitle: 'Why 你好 is said ní hǎo, and why 不 sometimes says bú',
    minutes: 7,
    goal: 'Apply the two most common tone changes: 3+3 and 不 before tone 4.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Two third tones in a row',
        blocks: [
          {
            type: 'text',
            body: [
              'When two third tones meet, the first one becomes tone 2. This is why 你好 is written nǐ hǎo but said ní hǎo.',
              'Textbooks and dictionaries usually keep the original tone mark. Your ears will hear the changed one.',
            ],
          },
          { type: 'vocab', words: [W.nihao, W.henhao] },
        ],
      },
      {
        kicker: 'Learn',
        title: 'The word 不 changes too',
        blocks: [
          {
            type: 'text',
            body: [
              '不 is normally bù (tone 4). Before another 4th tone it becomes bú (tone 2), so the two falling tones do not crash into each other.',
              'In this course we write the pinyin as it is spoken.',
            ],
          },
          { type: 'vocab', words: [W.bushi, W.budui, W.buhao, W.bukeqi] },
          {
            type: 'tip',
            label: 'Coming later',
            body: 'The number 一 (yī) also changes tone depending on what follows. We will meet it in the numbers lesson.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Say it like a native',
        blocks: [
          {
            type: 'quiz',
            question: 'You see 你好 (nǐ hǎo). How do people actually say it?',
            options: ['nǐ hǎo (3 + 3)', 'ní hǎo (2 + 3)', 'nī hǎo (1 + 3)'],
            answer: 1,
            explain: 'The first of two third tones becomes tone 2: ní hǎo.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Which 不?',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you say 不 in 不是 (is not)?',
            options: ['bù', 'bú', 'bǔ'],
            answer: 1,
            explain: 'shì is tone 4, so 不 changes to tone 2: bú shì.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Apply the rule',
        blocks: [
          {
            type: 'quiz',
            question: '很好 (very good) is written hěn hǎo. How do you say it?',
            options: ['hén hǎo', 'hěn hào', 'hèn hǎo'],
            answer: 0,
            explain: 'Same 3 + 3 rule as 你好: the first tone 3 becomes tone 2.',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Say it with the changed first tone.', hanzi: '你好', pinyin: 'ní hǎo', english: 'hello' },
          { type: 'speak', prompt: '不 becomes bú before a falling tone.', hanzi: '不是', pinyin: 'bú shì', english: 'is not' },
        ],
      },
    ],
  },

  {
    id: 'tricky',
    module: 'sound',
    title: 'Tricky consonants and ü',
    subtitle: 'q, x, zh, ch, sh, z, c, s and the sound English lacks',
    minutes: 8,
    goal: 'Tell apart the sounds learners most often mix up.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Letters that do not mean what you think',
        blocks: [
          {
            type: 'table',
            head: ['Sound', 'Rough guide', 'Watch out'],
            rows: [
              ['q', 'a light "ch" with a puff of air', 'Not an English "k" or "kw"'],
              ['x', 'a light "sh", tongue tip behind the lower teeth', 'Not an English "x"'],
              ['j', 'a soft "j", no puff of air', 'Pairs with q and x'],
              ['zh ch sh', 'tongue tip curled slightly back', 'Deeper than English "ch" and "sh"'],
              ['z c s', 'tongue tip forward, near the teeth', 'z is like the "ds" in "kids"'],
            ],
            caption: 'These are approximations. Use the audio as your real reference.',
          },
          {
            type: 'taglish',
            body: 'Ang q ay hindi "kyu". Isipin mo ang mahinang "ch" na may kasamang hangin. At tandaan: ang p, t, k sa Mandarin ay may puff of air, hindi tulad ng Tagalog na wala.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'Puff of air: b vs p',
        blocks: [
          {
            type: 'text',
            body: [
              'p, t, k, q, ch, c are aspirated: you release a small puff of air. b, d, g, j, zh, z are not.',
              'Hold a tissue in front of your mouth. It should move for pà but barely for bà.',
            ],
          },
          {
            type: 'pairs',
            pairs: [
              { a: W.ba4, b: W.pa4, note: 'bà has no puff, pà has a puff.' },
            ],
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'Pairs that sound close',
        blocks: [
          {
            type: 'pairs',
            pairs: [
              { a: W.si, b: W.shi10, note: 's is tongue-forward, sh is tongue-curled.' },
              { a: W.qi, b: W.chi, note: 'q is light and forward, ch is deeper.' },
              { a: W.lu, b: W.lv, note: 'ü is "ee" with rounded lips, like saying "ee" while whistling.' },
            ],
          },
          { type: 'vocab', title: 'One more to remember', words: [W.qu] },
          {
            type: 'tip',
            label: 'Spelling rule',
            body: 'After j, q, x and y, the letter u is really ü. So 去 is written qù but the vowel is ü. That is why the dots are dropped.',
          },
        ],
      },
      {
        kicker: 'Listen',
        title: 'Four or ten?',
        blocks: [
          {
            type: 'quiz',
            question: 'Play the audio. Which number do you hear?',
            audio: '四',
            options: ['sì · four', 'shí · ten'],
            answer: 0,
            explain: 'sì is tongue-forward with a falling tone. shí rises and uses the curled tongue.',
          },
        ],
      },
      {
        kicker: 'Listen',
        title: 'Seven or eat?',
        blocks: [
          {
            type: 'quiz',
            question: 'Play the audio. Which word do you hear?',
            audio: '吃',
            options: ['qī · seven', 'chī · to eat'],
            answer: 1,
            explain: 'chī has the deeper, tongue-curled "ch". qī is lighter and further forward.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'What is that u?',
        blocks: [
          {
            type: 'quiz',
            question: 'In qù, the vowel u is really pronounced like…',
            options: ['"oo" as in "moon"', 'ü, a rounded "ee"', 'English "kyu"'],
            answer: 1,
            explain: 'After j, q, x and y the written u stands for ü.',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Light and forward, with a small puff of air.', hanzi: '七', pinyin: 'qī', english: 'seven' },
          { type: 'speak', prompt: 'Curve the tongue tip back a little.', hanzi: '吃', pinyin: 'chī', english: 'to eat' },
        ],
      },
    ],
  },

  // ───────────────────────── FIRST CONVERSATIONS ─────────────────────────
  {
    id: 'greetings',
    module: 'convo',
    title: 'Hello, thanks and sorry',
    subtitle: 'The phrases you will use ten times a day',
    minutes: 8,
    goal: 'Greet someone, thank them, apologise and say goodbye.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Greetings',
        blocks: [
          {
            type: 'text',
            body: ['你好 is the greeting you already know. 您好 is the same, with the respectful "you". Use it with elders, customers and people you want to show respect to.'],
          },
          { type: 'vocab', words: [W.nihao, W.ninhao, W.zaoshanghao, W.zaijian] },
          {
            type: 'tip',
            label: 'Memory aid',
            body: '你 (you) + 好 (good). Literally "you good", naturally "hello". Do not memorise it as sound alone. Connect the pieces.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'Thanks and sorry',
        blocks: [
          { type: 'vocab', words: [W.xiexie, W.bukeqi, W.duibuqi, W.meiguanxi, W.qing] },
          {
            type: 'taglish',
            body: 'Pareho ng pattern sa English: may "thank you / you\'re welcome" at "sorry / it\'s okay". Ang 不客气 ay parang "no need to be formal", kaya natural na sagot sa 谢谢.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Two short conversations',
        blocks: [
          {
            type: 'dialogue',
            title: 'Morning at a café',
            lines: [
              { speaker: 'A', hanzi: '早上好！', pinyin: 'Zǎoshang hǎo!', english: 'Good morning!' },
              { speaker: 'B', hanzi: '早上好！', pinyin: 'Zǎoshang hǎo!', english: 'Good morning!' },
              { speaker: 'A', hanzi: '谢谢！', pinyin: 'Xièxie!', english: 'Thank you!' },
              { speaker: 'B', hanzi: '不客气。', pinyin: 'Bú kèqi.', english: "You're welcome." },
            ],
          },
          {
            type: 'dialogue',
            title: 'A small collision',
            lines: [
              { speaker: 'A', hanzi: '对不起！', pinyin: 'Duìbuqǐ!', english: "I'm sorry!" },
              { speaker: 'B', hanzi: '没关系。', pinyin: 'Méi guānxi.', english: "It's okay." },
              { speaker: 'B', hanzi: '再见！', pinyin: 'Zàijiàn!', english: 'Goodbye!' },
              { speaker: 'A', hanzi: '再见！', pinyin: 'Zàijiàn!', english: 'Goodbye!' },
            ],
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Reply to thanks',
        blocks: [
          {
            type: 'quiz',
            question: 'Someone says 谢谢. What is the natural reply?',
            options: ['不客气', '对不起', '再见'],
            answer: 0,
            explain: '不客气 (bú kèqi) means "you\'re welcome".',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Reply to an apology',
        blocks: [
          {
            type: 'quiz',
            question: 'Someone says 对不起. What is the natural reply?',
            options: ['谢谢', '没关系', '早上好'],
            answer: 1,
            explain: '没关系 (méi guānxi) means "it\'s okay, no problem".',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Who is it for?',
        blocks: [
          {
            type: 'quiz',
            question: 'You are greeting an older customer. Which is the most respectful?',
            options: ['你好', '您好', '再见'],
            answer: 1,
            explain: '您 (nín) is the respectful form of 你.',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'The most common greeting.', hanzi: '你好', pinyin: 'ní hǎo', english: 'hello' },
          { type: 'speak', prompt: 'Polite and warm.', hanzi: '不客气', pinyin: 'bú kèqi', english: "you're welcome" },
        ],
      },
    ],
  },

  {
    id: 'intro',
    module: 'convo',
    title: 'Introducing yourself',
    subtitle: 'Your name, where you are from, and meeting someone new',
    minutes: 10,
    goal: 'Say your name and nationality, and ask someone their name.',
    pages: [
      {
        kicker: 'Learn',
        title: 'The words you need',
        blocks: [
          { type: 'vocab', words: [W.wo, W.ni, W.ta1, W.ta2, W.shi4, W.jiao, W.shenme, W.mingzi] },
        ],
      },
      {
        kicker: 'Learn',
        title: 'Two patterns',
        blocks: [
          {
            type: 'table',
            head: ['Pattern', 'Example', 'Meaning'],
            rows: [
              ['我 叫 + name', '我叫 James。', 'My name is James.'],
              ['我 是 + identity', '我是学生。', 'I am a student.'],
              ['你 叫 什么 名字？', '你叫什么名字？', 'What is your name?'],
            ],
          },
          {
            type: 'text',
            body: ['There is no am, is, are, were. One word, 是, covers them all, and it never changes.'],
          },
          {
            type: 'taglish',
            body: 'Walang pagbabago sa verb: 是 lang ito para sa "am, is, are". Hindi mo kailangang mag-memorize ng iba\'t ibang anyo.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'Where are you from?',
        blocks: [
          { type: 'vocab', words: [W.ren, W.zhongguo, W.feilvbin, W.xuesheng, W.renshi] },
          {
            type: 'text',
            body: ['Say a country, then 人 (person) to get the nationality: 菲律宾人 is a Filipino, 中国人 is a Chinese person.'],
          },
        ],
      },
      {
        kicker: 'Make it yours',
        title: 'Your own sentence',
        blocks: [
          { type: 'text', body: ['Type your name, then listen to your first Mandarin introduction.'] },
          { type: 'myname' },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Meeting someone',
        blocks: [
          {
            type: 'dialogue',
            title: 'Nice to meet you',
            lines: [
              { speaker: 'A', hanzi: '你好！我叫李明。你叫什么名字？', pinyin: 'Nǐ hǎo! Wǒ jiào Lǐ Míng. Nǐ jiào shénme míngzi?', english: "Hello! My name is Li Ming. What's your name?" },
              { speaker: 'B', hanzi: '我叫 James。很高兴认识你。', pinyin: 'Wǒ jiào James. Hěn gāoxìng rènshi nǐ.', english: 'My name is James. Nice to meet you.' },
              { speaker: 'A', hanzi: '我是中国人。', pinyin: 'Wǒ shì Zhōngguó rén.', english: 'I am Chinese.' },
              { speaker: 'B', hanzi: '我是菲律宾人。', pinyin: 'Wǒ shì Fēilǜbīn rén.', english: 'I am Filipino.' },
            ],
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Say your name',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you say "My name is Ana"?',
            options: ['我叫 Ana。', '叫 Ana 我。', 'Ana 叫是我。'],
            answer: 0,
            explain: 'Pattern: 我 + 叫 + name.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Read the question',
        blocks: [
          {
            type: 'quiz',
            question: 'What does 你叫什么名字？ ask?',
            options: ["What's your name?", 'Where are you from?', 'Who is he?'],
            answer: 0,
            explain: '什么 means "what" and 名字 means "name".',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Say your nationality',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you say "I am Filipino"?',
            options: ['我是菲律宾人。', '我叫菲律宾人。', '你是菲律宾人。'],
            answer: 0,
            explain: '是 links "I" to an identity. 叫 is only for names.',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Ask the question.', hanzi: '你叫什么名字？', pinyin: 'Nǐ jiào shénme míngzi?', english: "What's your name?" },
          { type: 'speak', prompt: 'Say you are Filipino.', hanzi: '我是菲律宾人。', pinyin: 'Wǒ shì Fēilǜbīn rén.', english: 'I am Filipino.' },
        ],
      },
    ],
  },

  {
    id: 'numbers',
    module: 'convo',
    title: 'Numbers 0 to 99',
    subtitle: 'Count, read prices, and give a phone number',
    minutes: 10,
    goal: 'Count to 99 and say any number from 0 to 99.',
    pages: [
      {
        kicker: 'Learn',
        title: 'One to five',
        blocks: [{ type: 'vocab', words: [W.n1, W.n2, W.n3, W.si, W.n5] }],
      },
      {
        kicker: 'Learn',
        title: 'Six to ten, and zero',
        blocks: [
          { type: 'vocab', words: [W.n6, W.qi, W.n8, W.n9, W.shi10, W.n0] },
          {
            type: 'tip',
            label: 'Good to know',
            body: '八 (bā) sounds like 发 (fā, "to get rich"), so 8 is popular in prices and phone numbers. 四 (sì) sounds like 死 (sǐ, "death"), so some people avoid it.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'Counting is logical',
        blocks: [
          {
            type: 'text',
            body: ['Past ten, Chinese just stacks the pieces: 11 is "ten-one", 20 is "two-ten", 23 is "two-ten-three". There is nothing new to memorise.'],
          },
          {
            type: 'table',
            head: ['Number', 'Hanzi', 'Pinyin'],
            rows: [
              ['11', '十一', 'shí yī'],
              ['12', '十二', 'shí èr'],
              ['20', '二十', 'èr shí'],
              ['35', '三十五', 'sān shí wǔ'],
              ['99', '九十九', 'jiǔ shí jiǔ'],
            ],
          },
          {
            type: 'taglish',
            body: 'Mas madali pa ito kaysa sa English. Walang "eleven" o "twelve" na kailangang kabisaduhin. 十 + 一 = 11, ganoon lang.',
          },
        ],
      },
      {
        kicker: 'Listen',
        title: 'Which number?',
        blocks: [
          {
            type: 'quiz',
            question: 'Play the audio. Which number do you hear?',
            audio: '六',
            options: ['三 · 3', '六 · 6', '八 · 8', '九 · 9'],
            answer: 1,
            explain: 'liù is tone 4, a sharp fall. 六 means 6.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Read a number',
        blocks: [
          {
            type: 'quiz',
            question: 'What number is 二十三?',
            options: ['13', '23', '32'],
            answer: 1,
            explain: '二 (2) + 十 (10) + 三 (3) reads as two-ten-three: 23.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Order matters',
        blocks: [
          {
            type: 'quiz',
            question: 'What is 五十?',
            options: ['15', '50', '500'],
            answer: 1,
            explain: '五十 is five-ten: 50. Ten-five, 十五, is 15.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Write a number',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you write 15?',
            options: ['十五', '五十', '一五'],
            answer: 0,
            explain: 'Ten then five: 十五.',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Count one to five.', hanzi: '一二三四五', pinyin: 'yī èr sān sì wǔ', english: '1 2 3 4 5' },
          { type: 'speak', prompt: 'Now six to ten.', hanzi: '六七八九十', pinyin: 'liù qī bā jiǔ shí', english: '6 7 8 9 10' },
        ],
      },
    ],
  },

  {
    id: 'questions',
    module: 'convo',
    title: 'Asking yes/no questions',
    subtitle: 'The particle 吗 and how to answer',
    minutes: 9,
    goal: 'Ask a simple yes/no question and answer it.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Add 吗 to ask',
        blocks: [
          {
            type: 'text',
            body: [
              'To turn a statement into a yes/no question, add 吗 at the end. The word order does not change.',
            ],
          },
          {
            type: 'table',
            head: ['Statement', 'Question'],
            rows: [
              ['你是学生。 You are a student.', '你是学生吗？ Are you a student?'],
              ['你有水。 You have water.', '你有水吗？ Do you have water?'],
              ['你好。 You are good.', '你好吗？ How are you?'],
            ],
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'Answering: repeat the verb',
        blocks: [
          {
            type: 'text',
            body: ['Mandarin has no single "yes" or "no". You answer by repeating the verb, or negating it.'],
          },
          { type: 'vocab', words: [W.shi4, W.bushi, W.you, W.meiyou] },
          {
            type: 'taglish',
            body: 'Hindi tulad ng "oo" at "hindi" na pwedeng gamitin sa lahat. Uulitin mo ang verb: Tanong: 你是学生吗？ Sagot: 是 (oo) o 不是 (hindi).',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'Words for a café',
        blocks: [
          { type: 'vocab', words: [W.hen, W.hao, W.bu, W.shui, W.kafei, W.cha] },
          {
            type: 'tip',
            label: 'Good to know',
            body: 'With adjectives, 很 is usually added: 我很好 means "I am good". Here 很 is just filling its slot, not shouting "very".',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Small talk',
        blocks: [
          {
            type: 'dialogue',
            title: 'How are you?',
            lines: [
              { speaker: 'A', hanzi: '你好吗？', pinyin: 'Nǐ hǎo ma?', english: 'How are you?' },
              { speaker: 'B', hanzi: '我很好，谢谢。', pinyin: 'Wǒ hěn hǎo, xièxie.', english: "I'm good, thank you." },
              { speaker: 'A', hanzi: '你是学生吗？', pinyin: 'Nǐ shì xuésheng ma?', english: 'Are you a student?' },
              { speaker: 'B', hanzi: '是，我是学生。', pinyin: 'Shì, wǒ shì xuésheng.', english: 'Yes, I am a student.' },
              { speaker: 'A', hanzi: '你有水吗？', pinyin: 'Nǐ yǒu shuǐ ma?', english: 'Do you have water?' },
              { speaker: 'B', hanzi: '没有。', pinyin: 'Méiyǒu.', english: "No, I don't." },
            ],
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Make it a question',
        blocks: [
          {
            type: 'quiz',
            question: 'Complete the question: 你是学生___？',
            options: ['吗', '不', '没有'],
            answer: 0,
            explain: '吗 at the end makes a yes/no question.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Say "no"',
        blocks: [
          {
            type: 'quiz',
            question: '你是学生吗？ Answer "No, I am not".',
            options: ['不是', '没有', '不吗'],
            answer: 0,
            explain: 'The question uses 是, so the negative answer is 不是.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Say "I don\'t have"',
        blocks: [
          {
            type: 'quiz',
            question: '你有水吗？ Answer "No, I do not have any".',
            options: ['不有', '没有', '不是'],
            answer: 1,
            explain: '有 is always negated with 没: 没有.',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Ask how someone is.', hanzi: '你好吗？', pinyin: 'ní hǎo ma?', english: 'How are you?' },
          { type: 'speak', prompt: 'Answer.', hanzi: '我很好，谢谢。', pinyin: 'Wǒ hěn hǎo, xièxie.', english: "I'm good, thank you." },
        ],
      },
    ],
  },
];

const moduleOrder = (l: Lesson) => MODULES.findIndex((m) => m.id === l.module);

/** All lessons in learning order, with extra tips merged into the base lessons. */
export const LESSONS: Lesson[] = [...BASE_LESSONS, ...MORE_LESSONS, ...PART3_LESSONS, ...PART4_LESSONS, ...PART5_LESSONS]
  .map((l) => {
    const extra = EXTRA[l.id];
    if (!extra) return l;
    return { ...l, pages: l.pages.map((p, i) => (extra[i] ? { ...p, blocks: [...p.blocks, ...extra[i]] } : p)) };
  })
  .map((l, i) => ({ l, i }))
  .sort((a, b) => moduleOrder(a.l) - moduleOrder(b.l) || a.i - b.i)
  .map(({ l }) => l);

export function getLesson(id: string): Lesson | undefined {
  return LESSONS.find((l) => l.id === id);
}

/** All distinct words a lesson teaches (from vocab, tone and pair blocks). */
export function lessonWords(lesson: Lesson): Word[] {
  const seen = new Map<string, Word>();
  const add = (x: Word) => seen.set(x.id, x);
  for (const page of lesson.pages) {
    for (const b of page.blocks as Block[]) {
      if (b.type === 'vocab') b.words.forEach(add);
      else if (b.type === 'tones') b.items.forEach((i) => add(i.word));
      else if (b.type === 'pairs') b.pairs.forEach((p) => { add(p.a); add(p.b); });
    }
  }
  return [...seen.values()];
}

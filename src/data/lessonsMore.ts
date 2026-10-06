import type { Block, Lesson } from './types';
import { W } from './words';
import { W2 } from './wordsMore';

/* ───────────────────────── New lessons ───────────────────────── */

export const MORE_LESSONS: Lesson[] = [
  // ─────────── First Conversations (continued) ───────────
  {
    id: 'survival',
    module: 'convo',
    title: "When you don't understand",
    subtitle: 'Six phrases that keep a conversation alive',
    minutes: 9,
    goal: 'Ask someone to repeat, slow down, or explain, and say what you can speak.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Your lifeline phrases',
        blocks: [
          {
            type: 'text',
            body: ['You will not understand everything at first, and that is normal. These phrases turn confusion into practice instead of silence.'],
          },
          { type: 'vocab', words: [W2.dong, W2.ting, W2.shuo, W2.man, W2.zai, W2.yidian] },
          {
            type: 'taglish',
            body: 'Hindi ka dapat mahiya na hindi mo maintindihan. Ang mga parirala dito ang "reset button" mo: sasabihin mo lang na ulitin o bagalan, tuloy pa rin ang usapan.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'Say it as a sentence',
        blocks: [
          {
            type: 'table',
            head: ['Say this', 'Pinyin', 'Means'],
            rows: [
              ['我不懂。', 'Wǒ bù dǒng.', "I don't understand."],
              ['我听不懂。', 'Wǒ tīng bu dǒng.', "I can't make out what I hear."],
              ['请再说一遍。', 'Qǐng zài shuō yí biàn.', 'Please say it once more.'],
              ['请说慢一点。', 'Qǐng shuō màn yìdiǎn.', 'Please speak a bit slower.'],
              ['这是什么意思？', 'Zhè shì shénme yìsi?', 'What does this mean?'],
            ],
          },
          {
            type: 'pro',
            body: 'Learn 请再说一遍 as one block, not word by word. Native speakers react to the whole chunk, and it comes out faster when you are nervous.',
          },
          {
            type: 'remember',
            body: 'Link the sounds to the idea: 慢 màn sounds like "man-ay-ay, slooow". 再 zài means "again", like a tired "zzzai" when someone repeats the same thing a third time.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'What can you speak?',
        blocks: [
          { type: 'vocab', words: [W2.hui, W2.zhongwen, W2.yingyu, W2.yisi] },
          {
            type: 'text',
            body: ['会 (huì) means you can do something you have learned, like speak a language. A little is enough: 一点 (yìdiǎn).'],
          },
          {
            type: 'dialogue',
            title: 'At the market',
            lines: [
              { speaker: 'A', hanzi: '你会说中文吗？', pinyin: 'Nǐ huì shuō Zhōngwén ma?', english: 'Can you speak Chinese?' },
              { speaker: 'B', hanzi: '我会说一点。', pinyin: 'Wǒ huì shuō yìdiǎn.', english: 'I can speak a little.' },
              { speaker: 'A', hanzi: '你会说英语吗？', pinyin: 'Nǐ huì shuō Yīngyǔ ma?', english: 'Can you speak English?' },
              { speaker: 'B', hanzi: '我会。请说慢一点。', pinyin: 'Wǒ huì. Qǐng shuō màn yìdiǎn.', english: 'I can. Please speak more slowly.' },
            ],
          },
          {
            type: 'pro',
            body: 'Say 我会说一点中文 early in a conversation. People slow down and use simpler words, which is exactly the "comprehensible input" you need.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Ask to repeat',
        blocks: [
          {
            type: 'quiz',
            question: 'You missed what someone said. What do you say?',
            options: ['请再说一遍', '请说中文吗', '我是学生'],
            answer: 0,
            explain: '请再说一遍 means "please say it once more".',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Slow down',
        blocks: [
          {
            type: 'quiz',
            question: 'Someone is speaking too fast. Which phrase helps?',
            options: ['请说慢一点', '我不是中国人', '你叫什么名字'],
            answer: 0,
            explain: '慢 (màn) means slow, and 一点 means a little: "speak a little slower".',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Can or cannot',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you say "I can speak a little Chinese"?',
            options: ['我会说一点中文。', '我是说一点中文。', '我叫说中文。'],
            answer: 0,
            explain: '会 + verb says you can do something you have learned.',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Practise the lifeline.', hanzi: '请再说一遍。', pinyin: 'Qǐng zài shuō yí biàn.', english: 'Please say it once more.' },
          { type: 'speak', prompt: 'Tell people what you can do.', hanzi: '我会说一点中文。', pinyin: 'Wǒ huì shuō yìdiǎn Zhōngwén.', english: 'I can speak a little Chinese.' },
        ],
      },
    ],
  },

  // ─────────────────────────── Characters ───────────────────────────
  {
    id: 'parts',
    module: 'hanzi',
    title: 'Characters are built from parts',
    subtitle: 'Why 好, 明 and 休 are not random drawings',
    minutes: 9,
    goal: 'Split simple characters into parts and use the parts to remember them.',
    pages: [
      {
        kicker: 'Start here',
        title: 'Not random pictures',
        blocks: [
          {
            type: 'text',
            body: [
              'Most Chinese characters are built from smaller parts, like LEGO. Once you know a few dozen parts, new characters start to look familiar instead of scary.',
              'Parts usually do one of two jobs: they hint at the meaning, or they hint at the sound.',
            ],
          },
          {
            type: 'taglish',
            body: 'Hindi random drawings ang characters. Parang LEGO sila: may mga piraso na may kahulugan. Kapag natutunan mo ang mga piraso, mas madali nang tandaan ang buong character.',
          },
          {
            type: 'pro',
            body: 'Do not try to memorise a character as a whole picture. Say its parts out loud: "woman plus child". Your memory holds stories far better than shapes.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'Seven building blocks',
        blocks: [
          { type: 'vocab', words: [W.ren, W2.nv, W2.zi, W2.kou, W2.mu, W2.ri, W2.yue] },
          {
            type: 'tip',
            label: 'Good to know',
            body: '人 changes shape when it is a part on the left: 亻. You will see it in 你, 他 and 休. It still means "person".',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'Combine them',
        blocks: [
          {
            type: 'table',
            head: ['Character', 'Parts', 'Meaning', 'Pinyin'],
            rows: [
              ['好', '女 woman + 子 child', 'good', 'hǎo'],
              ['明', '日 sun + 月 moon', 'bright', 'míng'],
              ['休', '亻 person + 木 tree', 'to rest', 'xiū'],
              ['林', '木 tree + 木 tree', 'woods', 'lín'],
            ],
            caption: 'These stories are memory aids. They are not always the real history of the character.',
          },
          { type: 'vocab', words: [W.hao, W2.ming, W2.xiu, W2.lin] },
          {
            type: 'remember',
            body: 'Make a tiny movie for each. 休: a person leans against a tree to rest. 明: sun and moon both in the sky, so it is bright. 林: one tree plus one tree makes woods. The sillier the picture, the better it sticks.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'Parts that hint at sound',
        blocks: [
          {
            type: 'text',
            body: [
              'Many characters pair a meaning part with a sound part. 妈 (mā, mom) is 女 (woman) for meaning plus 马 (mǎ) for sound. 吗 (ma, the question particle) is 口 (mouth) plus the same 马.',
              'The sound hint is close, but the tone often differs: 马 mǎ, 妈 mā, 吗 ma, 骂 mà.',
            ],
          },
          {
            type: 'table',
            head: ['Character', 'Meaning part', 'Sound part', 'Pinyin'],
            rows: [
              ['妈', '女 woman', '马 mǎ', 'mā'],
              ['吗', '口 mouth', '马 mǎ', 'ma'],
              ['骂', '口口 mouths', '马 mǎ', 'mà'],
            ],
          },
          {
            type: 'pro',
            body: 'When you meet a new character, look for a part you already know. It often tells you how to pronounce it, or at least gets you close. This is the biggest shortcut in learning to read.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Split it',
        blocks: [
          {
            type: 'quiz',
            question: 'Which two parts make 好?',
            options: ['女 + 子', '日 + 月', '木 + 木'],
            answer: 0,
            explain: '好 = 女 (woman) + 子 (child). It is a memory aid for "good".',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Build it',
        blocks: [
          {
            type: 'quiz',
            question: 'Which character means "bright" (sun + moon)?',
            options: ['休', '明', '林'],
            answer: 1,
            explain: '明 (míng) combines 日 and 月.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Find the sound hint',
        blocks: [
          {
            type: 'quiz',
            question: 'In 妈 (mā), which part hints at the sound?',
            options: ['女', '马', 'Neither'],
            answer: 1,
            explain: '马 (mǎ) is the sound hint. 女 (woman) is the meaning hint.',
          },
        ],
      },
    ],
  },

  {
    id: 'strokes',
    module: 'hanzi',
    title: 'Stroke order basics',
    subtitle: 'Seven rules that fit almost every character',
    minutes: 7,
    goal: 'Know the stroke order rules and apply them to simple characters.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Why order matters',
        blocks: [
          {
            type: 'text',
            body: [
              'Characters are written stroke by stroke in a set order. Following it makes your writing faster, neater, and easier to read, and it helps you recognise handwritten characters.',
              'Writing is optional in this course, but a few minutes here makes every character feel more logical.',
            ],
          },
          {
            type: 'pro',
            body: 'Even if you plan to only type, write each new character a few times with pen and paper. Your hand remembers the shape better than your eyes do.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'The basic strokes',
        blocks: [
          {
            type: 'table',
            head: ['Name', 'Pinyin', 'Direction'],
            rows: [
              ['横', 'héng', 'Horizontal, left to right'],
              ['竖', 'shù', 'Vertical, top to bottom'],
              ['撇', 'piě', 'Left-falling, down to the left'],
              ['捺', 'nà', 'Right-falling, down to the right'],
              ['点', 'diǎn', 'Dot, a short press'],
              ['提', 'tí', 'Rising flick, up to the right'],
            ],
          },
          {
            type: 'remember',
            body: 'You already know two of these names: 点 diǎn "dot" appears in 一点, and 竖 and 横 are just "vertical" and "horizontal". Name the stroke aloud as you write it.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'The rules',
        blocks: [
          {
            type: 'table',
            head: ['Rule', 'Example'],
            rows: [
              ['1. Top to bottom', '三: top line first'],
              ['2. Left to right', '你: 亻 before 尔'],
              ['3. Horizontal before vertical when they cross', '十: 一 then 丨'],
              ['4. Left-falling before right-falling', '人: 丿 then ㇏'],
              ['5. Middle before the sides', '小: centre stroke, then left, then right'],
              ['6. Outside before inside', '日: box first'],
              ['7. Close the box last', '日: finish with the bottom line'],
            ],
          },
          { type: 'vocab', words: [W.shi10, W.ren, W2.da, W2.xiao, W2.ri] },
          {
            type: 'taglish',
            body: 'Kung nalilito ka, tandaan ang dalawang pangunahing rule: taas pababa, kaliwa pakanan. Ito ang tama sa halos lahat ng character.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Which stroke first?',
        blocks: [
          {
            type: 'quiz',
            question: 'In 十, which stroke do you write first?',
            options: ['The horizontal 一', 'The vertical 丨'],
            answer: 0,
            explain: 'When strokes cross, horizontal comes before vertical.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Count the strokes',
        blocks: [
          {
            type: 'quiz',
            question: 'How many strokes does 大 have?',
            options: ['2', '3', '4'],
            answer: 1,
            explain: '大 is written with a horizontal, a left-falling and a right-falling stroke.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Close the box',
        blocks: [
          {
            type: 'quiz',
            question: 'In the box shape of 日, which stroke comes last?',
            options: ['The top', 'The bottom line that closes it', 'The middle line'],
            answer: 1,
            explain: 'Outside before inside, and the bottom closes the box last.',
          },
        ],
      },
    ],
  },

  // ─────────────────────────── Everyday Life ───────────────────────────
  {
    id: 'thisthat',
    module: 'daily',
    title: 'This, that and counting things',
    subtitle: 'Point at things and say how many',
    minutes: 9,
    goal: 'Say "this is…", "that is…" and count objects with measure words.',
    pages: [
      {
        kicker: 'Learn',
        title: 'This and that',
        blocks: [
          { type: 'vocab', words: [W2.zhe, W2.na, W2.shouji, W2.shu, W2.pengyou] },
          {
            type: 'table',
            head: ['Pattern', 'Example', 'Meaning'],
            rows: [
              ['这是 + noun', '这是手机。', 'This is a phone.'],
              ['那是 + noun', '那是书。', 'That is a book.'],
              ['这是什么？', '这是什么？', 'What is this?'],
            ],
          },
          {
            type: 'remember',
            body: 'Both 这 and 那 are tone 4, so only the first sound tells them apart. 那 nà starts with n, like "nandoon" (over there). 这 zhè is its near-and-here partner, with the curled-tongue zh.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'Measure words',
        blocks: [
          {
            type: 'text',
            body: ['Between a number and a noun, Chinese adds a measure word: 三个人, "three [unit] person". The most common one is 个 (gè). Others match the thing: 本 for books, 杯 for cups.'],
          },
          { type: 'vocab', words: [W2.ge, W2.ben, W.n3, W2.liang] },
          {
            type: 'taglish',
            body: 'Kilala mo na ito sa Tagalog: "tatlong piraso ng tinapay", "dalawang baso ng tubig". Ganoon din sa Mandarin, kailangan ng "piraso/baso" sa pagitan ng bilang at bagay.',
          },
          {
            type: 'pro',
            body: 'When in doubt, use 个. It is understood almost everywhere, even when a more exact measure word exists. Add the exact ones gradually.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'Two: 二 or 两?',
        blocks: [
          {
            type: 'text',
            body: ['For counting out loud, "two" is 二 (èr). Before a measure word, use 两 (liǎng): 两个人, 两本书. In numbers like 12 or 22, it stays 二.'],
          },
          {
            type: 'dialogue',
            title: 'At a friend\'s place',
            lines: [
              { speaker: 'A', hanzi: '这是什么？', pinyin: 'Zhè shì shénme?', english: 'What is this?' },
              { speaker: 'B', hanzi: '这是我的手机。', pinyin: 'Zhè shì wǒ de shǒujī.', english: 'This is my phone.' },
              { speaker: 'A', hanzi: '那是书吗？', pinyin: 'Nà shì shū ma?', english: 'Is that a book?' },
              { speaker: 'B', hanzi: '是，我有两本书。', pinyin: 'Shì, wǒ yǒu liǎng běn shū.', english: 'Yes, I have two books.' },
            ],
          },
          {
            type: 'pro',
            body: 'If you can only remember one rule: number + measure word + noun, in that order. 一个朋友, 两本书, 三杯茶.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Say "this"',
        blocks: [
          {
            type: 'quiz',
            question: 'Which means "This is a phone"?',
            options: ['这是手机。', '那是手机。', '这有手机。'],
            answer: 0,
            explain: '这 = this, 是 = is, 手机 = phone.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Two books',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you say "two books"?',
            options: ['两本书', '二本书', '本两书'],
            answer: 0,
            explain: 'Use 两 before a measure word, then the measure word, then the noun.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Word order',
        blocks: [
          {
            type: 'quiz',
            question: 'Which order is right for "three people"?',
            options: ['三个人', '人三个', '个三人'],
            answer: 0,
            explain: 'Number, measure word, noun: 三 + 个 + 人.',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Point at something near you.', hanzi: '这是我的手机。', pinyin: 'Zhè shì wǒ de shǒujī.', english: 'This is my phone.' },
          { type: 'speak', prompt: 'Count it.', hanzi: '我有两本书。', pinyin: 'Wǒ yǒu liǎng běn shū.', english: 'I have two books.' },
        ],
      },
    ],
  },

  {
    id: 'family',
    module: 'daily',
    title: 'Family and friends',
    subtitle: 'Brothers, sisters, and the little word 的',
    minutes: 9,
    goal: 'Name your family members and say "my mom", "my friend".',
    pages: [
      {
        kicker: 'Learn',
        title: 'Brothers and sisters',
        blocks: [
          {
            type: 'text',
            body: ['Chinese always tells you whether a sibling is older or younger, just like Filipino does with kuya and ate.'],
          },
          { type: 'vocab', words: [W2.gege, W2.jiejie, W2.didi, W2.meimei, W.mama, W.baba, W2.jia] },
          {
            type: 'remember',
            body: 'Kuya = 哥哥 gēge. Ate = 姐姐 jiějie. You already have the right idea in Filipino, so just attach the sounds. For younger siblings, remember "didi" (弟弟) is a boy and "meimei" (妹妹) is a girl, with the "mei" like "may-may".',
          },
          {
            type: 'taglish',
            body: 'Swerte ka: kilala na ng Filipino ang pagkakaiba ng mas matanda at mas bata. Kuya = 哥哥, Ate = 姐姐. Ang bago lang ay ang mga tunog at tone.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'Saying "my"',
        blocks: [
          {
            type: 'text',
            body: ['的 links a possessor to the thing: 我的手机, "my phone". It is the "\'s" in "Ana\'s". With close family, it is often dropped: 我妈妈, 我哥哥.'],
          },
          { type: 'vocab', words: [W2.de, W2.he] },
          {
            type: 'table',
            head: ['Pattern', 'Example', 'Meaning'],
            rows: [
              ['I + 的 + noun', '我的朋友', 'my friend'],
              ['name + 的 + noun', '李明的手机', "Li Ming's phone"],
              ['I + family (no 的)', '我妈妈', 'my mom'],
            ],
          },
          {
            type: 'pro',
            body: 'Pronounce 的 as a light, quick "duh" (neutral tone). It is one of the most common words in Chinese, and getting it light is a big step toward sounding natural.',
          },
          {
            type: 'remember',
            body: 'Think of 的 as "glue". Whatever is on its left gets attached to what is on its right. 我 + 的 + 书 = my book. The glue is invisible in English, but always there in Chinese.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Talking about family',
        blocks: [
          {
            type: 'dialogue',
            title: 'Do you have siblings?',
            lines: [
              { speaker: 'A', hanzi: '你有哥哥吗？', pinyin: 'Nǐ yǒu gēge ma?', english: 'Do you have an older brother?' },
              { speaker: 'B', hanzi: '有，我有一个哥哥和一个妹妹。', pinyin: 'Yǒu, wǒ yǒu yí ge gēge hé yí ge mèimei.', english: 'Yes, I have an older brother and a younger sister.' },
              { speaker: 'A', hanzi: '我没有哥哥。', pinyin: 'Wǒ méiyǒu gēge.', english: "I don't have an older brother." },
              { speaker: 'B', hanzi: '我的朋友也没有。', pinyin: 'Wǒ de péngyou yě méiyǒu.', english: "My friend doesn't either." },
            ],
          },
          {
            type: 'tip',
            label: 'Sound note',
            body: '一个 is said yí ge. 一 changes to tone 2 before a 4th tone (个 is tone 4). It is the same idea as 不 → bú.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Older or younger?',
        blocks: [
          {
            type: 'quiz',
            question: 'Which word means "older sister" (like ate)?',
            options: ['姐姐', '妹妹', '弟弟'],
            answer: 0,
            explain: '姐姐 (jiějie) is older sister. 妹妹 is younger sister and 弟弟 is younger brother.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'My friend',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you say "my friend"?',
            options: ['我的朋友', '朋友我的', '我朋友的'],
            answer: 0,
            explain: 'Possessor + 的 + thing.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Which one?',
        blocks: [
          {
            type: 'quiz',
            question: 'Which is the younger brother?',
            options: ['哥哥', '弟弟', '爸爸'],
            answer: 1,
            explain: '弟弟 (dìdi) is a younger brother, 哥哥 (gēge) is an older brother.',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Say it with light second syllables.', hanzi: '我有一个哥哥和一个妹妹。', pinyin: 'Wǒ yǒu yí ge gēge hé yí ge mèimei.', english: 'I have an older brother and a younger sister.' },
        ],
      },
    ],
  },

  {
    id: 'food',
    module: 'daily',
    title: 'Ordering food and drink',
    subtitle: 'Walk into a restaurant and order with confidence',
    minutes: 10,
    goal: 'Order a meal and a drink politely.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Food and drink words',
        blocks: [
          { type: 'vocab', words: [W2.mifan, W2.miantiao, W2.pingguo, W.shui, W.cha, W.kafei] },
          {
            type: 'remember',
            body: '咖啡 kāfēi sounds just like "coffee", so there is nothing to memorise. 面条 miàntiáo: think "mee-an-tee-ow", like long noodles stretched out. 米饭 mǐfàn is rice: 米 is "rice" on its own, 饭 is the cooked meal.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'I want, I would like',
        blocks: [
          { type: 'vocab', words: [W2.yao, W2.xiang, W2.he1, W2.gei, W.chi, W2.qingwen] },
          {
            type: 'table',
            head: ['Say this', 'Meaning', 'Feel'],
            rows: [
              ['我要面条。', 'I want noodles.', 'Direct, fine in a shop or café'],
              ['我想吃面条。', "I'd like to eat noodles.", 'Softer'],
              ['请给我一杯茶。', 'Please give me a cup of tea.', 'Polite'],
            ],
          },
          {
            type: 'pro',
            body: 'Add 请 (please) at the start of any request. It is short, easy, and makes you sound polite immediately.',
          },
          {
            type: 'taglish',
            body: 'Ang 要 ay direct, parang "gusto ko ito" sa tindahan. Ang 想 ay mas malambot, parang "gusto ko sana". Pwede mong gamitin ang 请 para laging magalang.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'A cup, a bowl',
        blocks: [
          { type: 'vocab', words: [W2.bei, W2.wan] },
          {
            type: 'text',
            body: ['Remember the measure words: number + measure word + noun. 一杯茶 is "one cup of tea". 一碗面条 is "one bowl of noodles".'],
          },
          {
            type: 'dialogue',
            title: 'At a small restaurant',
            lines: [
              { speaker: 'W', hanzi: '您好！您想吃什么？', pinyin: 'Nín hǎo! Nín xiǎng chī shénme?', english: 'Hello! What would you like to eat?' },
              { speaker: 'G', hanzi: '我想吃面条。', pinyin: 'Wǒ xiǎng chī miàntiáo.', english: "I'd like noodles." },
              { speaker: 'W', hanzi: '您想喝什么？', pinyin: 'Nín xiǎng hē shénme?', english: 'What would you like to drink?' },
              { speaker: 'G', hanzi: '请给我一杯茶。', pinyin: 'Qǐng gěi wǒ yì bēi chá.', english: 'Please give me a cup of tea.' },
              { speaker: 'W', hanzi: '好的。', pinyin: 'Hǎo de.', english: 'Okay.' },
              { speaker: 'G', hanzi: '谢谢！', pinyin: 'Xièxie!', english: 'Thank you!' },
            ],
          },
          {
            type: 'pro',
            body: 'Three third tones in a row, like 请给我 (qǐng gěi wǒ), are common. Do not worry about the exact tone changes: say it smoothly, keeping the last one low and the earlier ones relaxed.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Order tea',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you say "Please give me a cup of tea"?',
            options: ['请给我一杯茶。', '请我给茶一杯。', '我请给杯茶。'],
            answer: 0,
            explain: '请 + 给 + 我 + number + measure word + noun.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Eat or drink?',
        blocks: [
          {
            type: 'quiz',
            question: 'Which verb goes with 茶 (tea)?',
            options: ['吃', '喝', '给'],
            answer: 1,
            explain: '喝 (hē) means to drink. 吃 (chī) is to eat.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'The right measure word',
        blocks: [
          {
            type: 'quiz',
            question: 'Which measure word goes with 茶 (a cup of tea)?',
            options: ['本', '杯', '碗 (bowl)'],
            answer: 1,
            explain: '杯 (bēi) is for cups and glasses.',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Order a meal.', hanzi: '我想吃面条。', pinyin: 'Wǒ xiǎng chī miàntiáo.', english: "I'd like noodles." },
          { type: 'speak', prompt: 'Order a drink.', hanzi: '请给我一杯茶。', pinyin: 'Qǐng gěi wǒ yì bēi chá.', english: 'Please give me a cup of tea.' },
        ],
      },
    ],
  },

  {
    id: 'money',
    module: 'daily',
    title: 'Prices and shopping',
    subtitle: 'Ask the price, say it is too expensive, and ask for less',
    minutes: 10,
    goal: 'Ask a price, understand the answer, and politely ask for a lower price.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Money words',
        blocks: [
          { type: 'vocab', words: [W2.qian, W2.kuai, W2.duoshao, W2.gui, W2.pianyi, W2.tai] },
          {
            type: 'text',
            body: ['In speech, the unit of money is 块 (kuài). 十五块 is "fifteen yuan". The written form is 元 or ¥, but you will say 块.'],
          },
          {
            type: 'remember',
            body: '块 kuài sounds like "kwhy". A 块 is also a "chunk" (a block): a chunk of money. 太 tài is "too": 太贵了 is "too expensive". Remember 贵 guì with "gwee": it hurts the wallet.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'Bigger numbers',
        blocks: [
          { type: 'vocab', words: [W2.bai, W.shi10, W.n2, W2.liang] },
          {
            type: 'table',
            head: ['Number', 'Hanzi', 'Pinyin'],
            rows: [
              ['100', '一百', 'yì bǎi'],
              ['200', '两百', 'liǎng bǎi'],
              ['150', '一百五十', 'yì bǎi wǔ shí'],
              ['25 yuan', '二十五块', 'èr shí wǔ kuài'],
            ],
          },
          {
            type: 'pro',
            body: 'For 200 and above, 两百 is the natural way. For 20 and 22, it is always 二十 and 二十二. Hundreds with 两, tens with 二.',
          },
          {
            type: 'taglish',
            body: 'Walang "at" sa pagitan ng numbers. 一百五十 ay literal na "isang daan, limang sampu", ibig sabihin 100 + 5 × 10 = 150. Madali kapag naintindihan mo ang pattern.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'At the market',
        blocks: [
          { type: 'vocab', words: [W2.neng, W2.yidian] },
          {
            type: 'dialogue',
            title: 'Asking the price',
            lines: [
              { speaker: 'A', hanzi: '这个多少钱？', pinyin: 'Zhè ge duōshao qián?', english: 'How much is this?' },
              { speaker: 'B', hanzi: '十五块。', pinyin: 'Shíwǔ kuài.', english: 'Fifteen yuan.' },
              { speaker: 'A', hanzi: '太贵了！能便宜一点吗？', pinyin: 'Tài guì le! Néng piányi yìdiǎn ma?', english: 'Too expensive! Can it be a bit cheaper?' },
              { speaker: 'B', hanzi: '好的，十二块。', pinyin: 'Hǎo de, shí èr kuài.', english: 'Okay, twelve yuan.' },
              { speaker: 'A', hanzi: '谢谢！', pinyin: 'Xièxie!', english: 'Thank you!' },
            ],
          },
          {
            type: 'pro',
            body: 'Say 太…了 with a smile: 太贵了 is a friendly "that is pricey!". Follow it with 能便宜一点吗？ and you have a polite, standard way to ask for a better price. Not every shop negotiates, so read the situation.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Ask the price',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you ask "How much is this?"',
            options: ['这个多少钱？', '这个几块钱人？', '这个是钱吗？'],
            answer: 0,
            explain: '多少钱 means "how much money". Put it after the thing.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Read the price',
        blocks: [
          {
            type: 'quiz',
            question: 'What does 二十五块 mean?',
            options: ['25 yuan', '52 yuan', '205 yuan'],
            answer: 0,
            explain: '二 + 十 + 五 = 2 × 10 + 5 = 25.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Too much',
        blocks: [
          {
            type: 'quiz',
            question: 'Which means "Too expensive!"?',
            options: ['太贵了', '太便宜了', '不贵吗'],
            answer: 0,
            explain: '太 + adjective + 了 means "too ___".',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Ask the price.', hanzi: '这个多少钱？', pinyin: 'Zhè ge duōshao qián?', english: 'How much is this?' },
          { type: 'speak', prompt: 'Ask for a better price, politely.', hanzi: '能便宜一点吗？', pinyin: 'Néng piányi yìdiǎn ma?', english: 'Can it be a bit cheaper?' },
        ],
      },
    ],
  },

  {
    id: 'time',
    module: 'daily',
    title: 'Time, days and dates',
    subtitle: 'Tell the time and talk about today, tomorrow and the week',
    minutes: 10,
    goal: 'Ask and tell the time, name the days of the week, and say today, tomorrow and yesterday.',
    pages: [
      {
        kicker: 'Learn',
        title: 'What time is it?',
        blocks: [
          { type: 'vocab', words: [W2.xianzai, W2.ji, W2.dian, W2.fen, W2.ban] },
          {
            type: 'table',
            head: ['Time', 'Hanzi', 'Pinyin'],
            rows: [
              ['3:00', '三点', 'sān diǎn'],
              ['3:30', '三点半', 'sān diǎn bàn'],
              ['3:15', '三点十五分', 'sān diǎn shíwǔ fēn'],
              ['2:00', '两点', 'liǎng diǎn'],
            ],
          },
          {
            type: 'pro',
            body: 'For "2 o\'clock", always say 两点 (liǎng diǎn), never 二点. Use 二 for minutes: 两点二十.',
          },
          {
            type: 'remember',
            body: '点 diǎn is "dot" and "o\'clock": the little dot on the clock face. 半 bàn means "half", like 半 in Tagalog "kalahati".',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'Days',
        blocks: [
          { type: 'vocab', words: [W2.jintian, W2.mingtian, W2.zuotian, W2.xingqi, W2.wanshang] },
          {
            type: 'table',
            head: ['Day', 'Hanzi', 'Pinyin'],
            rows: [
              ['Monday', '星期一', 'xīngqī yī'],
              ['Wednesday', '星期三', 'xīngqī sān'],
              ['Saturday', '星期六', 'xīngqī liù'],
              ['Sunday', '星期天', 'xīngqī tiān'],
            ],
          },
          {
            type: 'taglish',
            body: 'Madali ito: Monday ay "linggo-isa", Tuesday "linggo-dalawa", at iba pa. Binibilang mo lang mula 一 hanggang 六. Ang Linggo lang ang espesyal: 星期天 o 星期日.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Time before the verb',
        blocks: [
          {
            type: 'text',
            body: ['In Chinese, the time goes before the verb: 我明天去学校, "I tomorrow go to school". Time words never come at the end of the sentence like in English.'],
          },
          {
            type: 'dialogue',
            title: 'Checking the time',
            lines: [
              { speaker: 'A', hanzi: '今天星期几？', pinyin: 'Jīntiān xīngqī jǐ?', english: 'What day is it today?' },
              { speaker: 'B', hanzi: '今天星期三。', pinyin: 'Jīntiān xīngqī sān.', english: "Today is Wednesday." },
              { speaker: 'A', hanzi: '现在几点？', pinyin: 'Xiànzài jǐ diǎn?', english: 'What time is it now?' },
              { speaker: 'B', hanzi: '现在两点半。', pinyin: 'Xiànzài liǎng diǎn bàn.', english: "It's two thirty." },
            ],
          },
          {
            type: 'pro',
            body: 'The question 几 asks for a small number, like a time or weekday. For bigger things such as price, use 多少. Learn them as a pair: 几 for small, 多少 for large.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Say 2:00',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you say "2 o\'clock"?',
            options: ['两点', '二点', '两个点'],
            answer: 0,
            explain: 'Use 两 for "two" before 点.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Half past',
        blocks: [
          {
            type: 'quiz',
            question: 'What time is 三点半?',
            options: ['3:30', '3:15', '5:30'],
            answer: 0,
            explain: '半 means half: half past three.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Word order',
        blocks: [
          {
            type: 'quiz',
            question: 'Which is correct for "I go to school tomorrow"?',
            options: ['我明天去学校。', '我去学校明天。', '明天我学校去。'],
            answer: 0,
            explain: 'Time goes before the verb: 我 + 明天 + 去 + 学校.',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Ask the time.', hanzi: '现在几点？', pinyin: 'Xiànzài jǐ diǎn?', english: 'What time is it now?' },
          { type: 'speak', prompt: 'Say the day.', hanzi: '今天星期三。', pinyin: 'Jīntiān xīngqī sān.', english: 'Today is Wednesday.' },
        ],
      },
    ],
  },

  {
    id: 'qwords',
    module: 'daily',
    title: 'Who, where, why, how',
    subtitle: 'Question words that stay where the answer goes',
    minutes: 9,
    goal: 'Use 谁, 哪里, 为什么, 怎么 and 什么 to ask open questions.',
    pages: [
      {
        kicker: 'Learn',
        title: 'The key idea',
        blocks: [
          {
            type: 'text',
            body: ['In English you move the question word to the front: "Where are you going?". In Chinese, the question word stays exactly where the answer would be.'],
          },
          {
            type: 'table',
            head: ['Answer', 'Question'],
            rows: [
              ['我去学校。 I go to school.', '你去哪里？ Where do you go?'],
              ['他是我的朋友。 He is my friend.', '他是谁？ Who is he?'],
              ['这是手机。 This is a phone.', '这是什么？ What is this?'],
            ],
          },
          {
            type: 'taglish',
            body: 'Sa Tagalog, nauuna ang "ano" o "sino": "Sino siya?" Sa Mandarin, ibang-iba: iniiwan ang question word sa pwesto ng sagot. 他是谁? ay literal na "Siya ay sino?".',
          },
          {
            type: 'remember',
            body: 'Do a "fill-in-the-blank" swap. Write the answer sentence, then replace the unknown piece with the question word: 我去学校 → 我去哪里. No other change needed.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'Question words',
        blocks: [
          { type: 'vocab', words: [W.shenme, W2.shei, W2.nali, W2.weishenme, W2.zenme, W2.xuexiao, W2.xue] },
          {
            type: 'pro',
            body: 'Remember 谁 as "shéi" (like "shay"). Some people also say shuí, and both are normal. When two question words are tricky, practise them in a pattern: 谁 who, 哪里 where, 什么 what, 为什么 why, 怎么 how.',
          },
          {
            type: 'dialogue',
            title: 'Getting to know someone',
            lines: [
              { speaker: 'A', hanzi: '你去哪里？', pinyin: 'Nǐ qù nǎlǐ?', english: 'Where are you going?' },
              { speaker: 'B', hanzi: '我去学校。', pinyin: 'Wǒ qù xuéxiào.', english: "I'm going to school." },
              { speaker: 'A', hanzi: '你为什么学中文？', pinyin: 'Nǐ wèishénme xué Zhōngwén?', english: 'Why do you study Chinese?' },
              { speaker: 'B', hanzi: '我的朋友是中国人。', pinyin: 'Wǒ de péngyou shì Zhōngguórén.', english: 'My friend is Chinese.' },
            ],
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Where?',
        blocks: [
          {
            type: 'quiz',
            question: 'Which asks "Where are you going?"',
            options: ['你去哪里？', '哪里你去？', '你哪里是？'],
            answer: 0,
            explain: 'The question word stays where the answer goes: 你去 + 哪里.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Who?',
        blocks: [
          {
            type: 'quiz',
            question: 'He is my friend. Turn this into "Who is he?"',
            options: ['他是谁？', '谁他是？', '他谁是？'],
            answer: 0,
            explain: 'Replace the unknown (my friend) with 谁.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Why?',
        blocks: [
          {
            type: 'quiz',
            question: 'Which word means "why"?',
            options: ['为什么', '怎么', '什么'],
            answer: 0,
            explain: '为什么 (wèishénme) means why. 怎么 is how and 什么 is what.',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Ask where.', hanzi: '你去哪里？', pinyin: 'Nǐ qù nǎlǐ?', english: 'Where are you going?' },
          { type: 'speak', prompt: 'Ask who.', hanzi: '他是谁？', pinyin: 'Tā shì shéi?', english: 'Who is he?' },
        ],
      },
    ],
  },

  {
    id: 'bumei',
    module: 'daily',
    title: '不 or 没?',
    subtitle: 'Two ways to say no, and when to use each',
    minutes: 8,
    goal: 'Choose between 不 and 没 to say "not" and "did not".',
    pages: [
      {
        kicker: 'Learn',
        title: 'Two kinds of "no"',
        blocks: [
          {
            type: 'text',
            body: [
              '不 (bù) says "is not" or "does not": habits, general facts, opinions and the future. 我不喝咖啡: I don\'t drink coffee.',
              '没 (méi) says "did not" or "does not have": it negates 有 and things that did not happen. 我没有钱: I have no money. 我昨天没吃饭: I did not eat yesterday.',
            ],
          },
          { type: 'vocab', words: [W.bu, W2.mei, W2.qian, W2.rou, W2.chifan, W2.zuotian] },
          {
            type: 'taglish',
            body: 'Isipin mo ang 不 bilang "hindi" (general / ayaw / hindi ako), at ang 没 bilang "wala" o "hindi pa / hindi nangyari". Halimbawa: 我没有钱 = "wala akong pera".',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'A quick test',
        blocks: [
          {
            type: 'table',
            head: ['Situation', 'Use', 'Example'],
            rows: [
              ['I never / do not usually…', '不', '我不吃肉。 I do not eat meat.'],
              ['It is not…', '不', '他不是学生。 He is not a student.'],
              ['I do not have…', '没有', '我没有钱。 I have no money.'],
              ['I did not (past)…', '没', '我没吃饭。 I did not eat.'],
            ],
          },
          {
            type: 'remember',
            body: 'Two shortcuts. (1) 有 is always 没有, never 不有. (2) If you are talking about yesterday or something that has not happened yet, think 没. Everything else, think 不.',
          },
          {
            type: 'pro',
            body: 'When you say 我没吃 (I did not eat), do not add 了. The 没 already says it did not happen. This is a classic beginner mistake.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'No money',
        blocks: [
          {
            type: 'quiz',
            question: 'Which means "I have no money"?',
            options: ['我没有钱。', '我不有钱。', '我没钱有。'],
            answer: 0,
            explain: '有 is negated with 没: 没有.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Not a student',
        blocks: [
          {
            type: 'quiz',
            question: 'Which means "He is not a student"?',
            options: ['他不是学生。', '他没是学生。', '他是不学生。'],
            answer: 0,
            explain: '是 is negated with 不: 不是.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Did not eat',
        blocks: [
          {
            type: 'quiz',
            question: 'Which means "I did not eat yesterday"?',
            options: ['我昨天没吃饭。', '我昨天不吃饭了。', '我没昨天吃饭。'],
            answer: 0,
            explain: 'For something that did not happen, use 没 before the verb.',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Say you do not eat meat.', hanzi: '我不吃肉。', pinyin: 'Wǒ bù chī ròu.', english: 'I do not eat meat.' },
          { type: 'speak', prompt: 'Say you did not eat yet.', hanzi: '我昨天没吃饭。', pinyin: 'Wǒ zuótiān méi chī fàn.', english: 'I did not eat yesterday.' },
        ],
      },
    ],
  },
];

/* ───────────────── Extra tips for the first 9 lessons ─────────────────
   Keyed by lesson id → page index → blocks appended to that page. */

export const EXTRA: Record<string, Record<number, Block[]>> = {
  sounds: {
    0: [
      { type: 'pro', body: 'Use headphones for this course. Tone differences are subtle, and laptop speakers blur them.' },
      { type: 'remember', body: 'Close your eyes and listen first, then read the pinyin. If you read first, your English brain will fill in the wrong sounds.' },
    ],
    1: [
      { type: 'remember', body: 'Treat every syllable as a three-slot formula: [initial][final][tone]. Each time you meet a new one, name the slots aloud. After about 20 syllables it becomes automatic.' },
      { type: 'taglish', body: 'Parang recipe: sangkap 1 ay ang initial, sangkap 2 ay ang final, at ang pangatlong sangkap ay ang tone. Kapag kulang ang isa, ibang word na ang lalabas.' },
    ],
  },
  tones: {
    0: [
      { type: 'pro', body: 'Exaggerate tones at first, make them bigger than feels natural. Most beginners flatten them, and exaggeration trains the right pitch movements. You will shrink them naturally.' },
      { type: 'remember', body: 'Draw each tone in the air with your hand as you say it: flat, up, down then up, down. Moving your hand makes the shape stick in your body memory.' },
    ],
    1: [
      { type: 'pro', body: 'Record yourself saying mā má mǎ mà and compare it with the audio once a week. The difference gets smaller each time, and the progress is motivating.' },
    ],
  },
  neutral: {
    0: [
      { type: 'pro', body: 'A neutral syllable is not just a different pitch. It is shorter and quieter. If it sounds loud or long, it is probably not neutral.' },
      { type: 'remember', body: 'Think of the second syllable like the "-by" in "baby": quick and weak. māma, bàba: the first syllable carries the weight, and the second just falls off.' },
      { type: 'taglish', body: 'Parang pabulong na dulo ng salita. Malakas ang una, mahina at mabilis ang pangalawa, tulad ng "mama" kapag mabilis mong sinabi.' },
    ],
  },
  sandhi: {
    0: [
      { type: 'remember', body: 'Say "ní hǎo" like "knee how": "knee" rises (tone 2), then "how" is low (tone 3). Hearing it as two English words makes it easy to copy.' },
      { type: 'pro', body: 'Do not apply the tone rules consciously in conversation. Practise whole chunks (你好, 很好, 老师) until they feel automatic, and the rule happens by itself.' },
    ],
    1: [
      { type: 'taglish', body: 'Dalawang "pababa" na tone na magkasunod ay parang banggaan. Para hindi bumangga, tinataas ang una: bù + shì → bú shì.' },
    ],
  },
  tricky: {
    0: [
      { type: 'pro', body: 'Use a mirror. For x, spread your lips as if smiling. For sh, round your lips a little. Seeing the difference helps your mouth learn it faster than listening alone.' },
      { type: 'remember', body: 'x = "smiling sh" (lips spread, tongue flat). zh/ch/sh = "pouty" (lips rounded, tongue back). z/c/s = "hissing" (teeth almost together).' },
    ],
  },
  greetings: {
    0: [
      { type: 'pro', body: '你好 is polite and safe, especially with strangers and in shops. With friends, people often skip it and use something more casual, but you can never go wrong with it.' },
    ],
    1: [
      { type: 'remember', body: '不客气 is "no guest-manners": 客 means guest and 气 means air or manner. It means "no need to be formal". It is a memory aid, so you remember the idea of being relaxed.' },
    ],
  },
  intro: {
    1: [
      { type: 'pro', body: 'In Chinese names, the family name comes first: 李明 Lǐ Míng is Mr. Li, with the given name Ming. Introduce yourself with your own order, but expect this order when you meet people.' },
      { type: 'remember', body: 'Think of 是 as an equals sign: 我 = 学生. It joins two nouns, and unlike English, it never changes form.' },
    ],
  },
  numbers: {
    2: [
      { type: 'remember', body: 'Treat it as math. 十五 is 10 + 5 = 15. 五十 is 5 × 10 = 50. Say the math in your head the first few times.' },
      { type: 'pro', body: 'Practise by reading license plates, prices and clock times in Chinese as you go through your day. Numbers are the fastest way to build real listening speed.' },
    ],
  },
  questions: {
    0: [
      { type: 'remember', body: '吗 is a spoken question mark. Stick it at the end and nothing else in the sentence moves. 你好。→ 你好吗？' },
      { type: 'pro', body: 'Do not look for a word for "yes". Answer by repeating the verb: 有, 是, 会. It makes your answers sound natural and builds sentence patterns at the same time.' },
    ],
  },
};

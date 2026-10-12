import type { Lesson } from './types';
import { W2 } from './wordsMore';
import { W4 } from './wordsPart4';
import { W6 } from './wordsPart6';
import { W7 } from './wordsPart7';

export const PART7_LESSONS: Lesson[] = [
  // ═════════════════════════ CORE PATTERNS ═════════════════════════
  {
    id: 'measure2',
    module: 'patterns',
    title: 'More measure words',
    subtitle: 'A ticket, a cat, a car, a bottle',
    minutes: 8,
    goal: 'Count tickets, animals, vehicles and bottles with the right measure word.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Match the word to the shape',
        blocks: [
          { type: 'vocab', words: [W7.zhang, W7.zhi, W7.liang_veh, W7.ping, W7.yixie] },
          {
            type: 'table',
            head: ['Measure word', 'Used for', 'Example'],
            rows: [
              ['张 zhāng', 'flat things: tickets, paper, tables', '一张票'],
              ['只 zhī', 'small animals', '一只猫'],
              ['辆 liàng', 'vehicles', '一辆车'],
              ['瓶 píng', 'bottles', '一瓶水'],
              ['些 xiē', 'an unspecified amount', '一些朋友'],
            ],
          },
          { type: 'vocab', title: 'Things to count', words: [W7.piao, W7.mao, W7.gou, W7.che] },
          {
            type: 'taglish',
            body: 'Parang "isang piraso", "isang baso", "isang hayop": kapag may uri ang bagay, may sariling salita rin sa Mandarin. Kung hindi mo alam, gamitin ang 个 at maiintindihan ka pa rin.',
          },
          {
            type: 'remember',
            body: 'Picture the shape. 张 has 弓 (a bow, stretched flat). 辆 has 车 (vehicle) inside. 瓶 has 瓦 (clay) because bottles were once clay. 只 is a tiny animal. When you can picture the object, the measure word follows.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'At the ticket office',
        blocks: [
          {
            type: 'dialogue',
            title: 'Counting things',
            lines: [
              { speaker: 'A', hanzi: '我要两张票。', pinyin: 'Wǒ yào liǎng zhāng piào.', english: 'I need two tickets.' },
              { speaker: 'B', hanzi: '好的。还要别的吗？', pinyin: 'Hǎo de. Hái yào biéde ma?', english: 'Okay. Anything else?' },
              { speaker: 'A', hanzi: '再来一瓶水。', pinyin: 'Zài lái yì píng shuǐ.', english: 'One more bottle of water.' },
            ],
          },
          {
            type: 'pro',
            body: 'Always use 两 (liǎng) for "two" before a measure word: 两张票, 两只猫, 两瓶水. Say 一 + measure word to mean "a": 一只猫 is "a cat".',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'A ticket',
        blocks: [
          {
            type: 'quiz',
            question: 'Which measure word goes with 票 (ticket)?',
            options: ['只', '张', '瓶'],
            answer: 1,
            explain: '张 is for flat things like tickets.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'A cat',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you say "a cat"?',
            options: ['一张猫', '一瓶猫', '一只猫'],
            answer: 2,
            explain: '只 is for small animals.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Two bottles',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you say "two bottles of water"?',
            options: ['二瓶水', '两瓶水', '两只水'],
            answer: 1,
            explain: 'Use 两 before a measure word, and 瓶 for bottles.',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Ask for tickets.', hanzi: '我要两张票。', pinyin: 'Wǒ yào liǎng zhāng piào.', english: 'I need two tickets.' },
          { type: 'speak', prompt: 'Order water.', hanzi: '再来一瓶水。', pinyin: 'Zài lái yì píng shuǐ.', english: 'One more bottle of water.' },
        ],
      },
    ],
  },

  // ═════════════════════════ NATURAL CONVERSATION ═════════════════════════
  {
    id: 'opinions',
    module: 'talk',
    title: 'Giving your opinion',
    subtitle: 'I think, I agree, it is interesting',
    minutes: 9,
    goal: 'Share and soften opinions, and agree or disagree politely.',
    pages: [
      {
        kicker: 'Learn',
        title: 'I think…',
        blocks: [
          { type: 'vocab', words: [W7.juede, W7.tongyi, W7.youyisi, W7.meiyisi, W7.haowan, W7.nan, W7.rongyi] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['我觉得中文很有意思。', 'I think Chinese is interesting.'],
              ['我觉得有一点难。', 'I think it is a little hard.'],
              ['你觉得呢？', 'What do you think?'],
              ['我同意。', 'I agree.'],
              ['我不太同意。', "I don't quite agree."],
            ],
          },
          {
            type: 'pro',
            body: '我觉得 softens your opinion, like "I feel that…". Native speakers use it a lot to avoid sounding blunt. Add 不太 for polite disagreement: 我不太同意 is much gentler than 我不同意.',
          },
          {
            type: 'taglish',
            body: 'Parang "sa tingin ko" sa Tagalog: 我觉得 = "sa tingin ko". At ang 你觉得呢 ay "ikaw, ano sa tingin mo?". Madalas itong magamit para magpakita ng galang sa opinyon ng iba.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Talking about learning',
        blocks: [
          {
            type: 'dialogue',
            title: 'What do you think of Chinese?',
            lines: [
              { speaker: 'A', hanzi: '你觉得中文难吗？', pinyin: 'Nǐ juéde Zhōngwén nán ma?', english: 'Do you think Chinese is hard?' },
              { speaker: 'B', hanzi: '我觉得有一点难，但是很有意思。', pinyin: 'Wǒ juéde yǒu yìdiǎn nán, dànshì hěn yǒu yìsi.', english: 'I think it is a little hard, but very interesting.' },
              { speaker: 'A', hanzi: '我同意！你觉得声调容易吗？', pinyin: 'Wǒ tóngyì! Nǐ juéde shēngdiào róngyì ma?', english: 'I agree! Do you think tones are easy?' },
              { speaker: 'B', hanzi: '不太容易。', pinyin: 'Bú tài róngyì.', english: 'Not very easy.' },
            ],
          },
          {
            type: 'remember',
            body: '有意思 literally means "has meaning". 没意思 means "has no meaning", which is "boring". The word 意思 (meaning) is the key: 有 or 没 tells you whether it is worth your time.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Interesting',
        blocks: [
          {
            type: 'quiz',
            question: 'Which means "interesting"?',
            options: ['没意思', '有意思', '很难'],
            answer: 1,
            explain: '有意思 means interesting. 没意思 means boring.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Soften it',
        blocks: [
          {
            type: 'quiz',
            question: 'You disagree but want to be gentle. What do you say?',
            options: ['我不太同意。', '你错了。', '我同意。'],
            answer: 0,
            explain: '不太 softens the disagreement.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Ask for their view',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you ask "What do you think?"',
            options: ['你是觉得？', '你觉得呢？', '你觉得什么人？'],
            answer: 1,
            explain: '你觉得呢 asks for their opinion.',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Share a view.', hanzi: '我觉得中文很有意思。', pinyin: 'Wǒ juéde Zhōngwén hěn yǒu yìsi.', english: 'I think Chinese is interesting.' },
          { type: 'speak', prompt: 'Ask back.', hanzi: '你觉得呢？', pinyin: 'Nǐ juéde ne?', english: 'What do you think?' },
        ],
      },
    ],
  },

  {
    id: 'feelings',
    module: 'talk',
    title: 'Feelings and needs',
    subtitle: 'Happy, nervous, hungry, thirsty, sleepy',
    minutes: 9,
    goal: 'Say how you feel and comfort someone else.',
    pages: [
      {
        kicker: 'Learn',
        title: 'How do you feel?',
        blocks: [
          { type: 'vocab', words: [W7.kaixin, W7.nanguo, W7.shengqi, W7.jinzhang, W7.danxin] },
          {
            type: 'remember',
            body: 'Many feeling words contain 心 (heart): 开心 (open heart = happy), 担心 (carry a heart = worry). 难过 is "hard to pass" (a hard time). 紧张 is "tight and stretched", like a tense string. Memory aids, but they match the feeling.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'Body needs',
        blocks: [
          { type: 'vocab', words: [W7.e, W7.ke, W7.kun, W7.bie] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['我很开心。', 'I am very happy.'],
              ['我饿了。', "I'm hungry (now)."],
              ['我渴了。', "I'm thirsty (now)."],
              ['别担心。', "Don't worry."],
            ],
          },
          {
            type: 'pro',
            body: 'For body needs, use 了 to show you have just become hungry or thirsty: 我饿了, 我渴了. It marks the change ("now I am hungry"), the same 了 you learned for new situations.',
          },
          {
            type: 'taglish',
            body: 'Pareho ng "gutom na ako" at "uhaw na ako": ang 了 ay ang "na". At ang 别担心 ay "huwag kang mag-alala", na madalas mong gamitin para sa isang kaibigan.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Comforting a friend',
        blocks: [
          { type: 'vocab', words: [W7.kaoshi] },
          {
            type: 'dialogue',
            title: 'Before an exam',
            lines: [
              { speaker: 'A', hanzi: '你怎么了？', pinyin: 'Nǐ zěnme le?', english: "What's wrong?" },
              { speaker: 'B', hanzi: '我很紧张，明天有考试。', pinyin: 'Wǒ hěn jǐnzhāng, míngtiān yǒu kǎoshì.', english: "I'm nervous, I have an exam tomorrow." },
              { speaker: 'A', hanzi: '别担心，加油！', pinyin: 'Bié dānxīn, jiāyóu!', english: "Don't worry, you can do it!" },
              { speaker: 'B', hanzi: '谢谢你。我也饿了，我们去吃饭吧。', pinyin: 'Xièxie nǐ. Wǒ yě è le, wǒmen qù chī fàn ba.', english: "Thank you. I'm hungry too, let's go eat." },
            ],
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Hungry',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you say "I am hungry"?',
            options: ['我饿了。', '我渴了。', '我困了。'],
            answer: 0,
            explain: '饿 means hungry. 渴 is thirsty and 困 is sleepy.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Comfort',
        blocks: [
          {
            type: 'quiz',
            question: 'A friend is nervous. What do you say?',
            options: ['别担心，加油！', '我很生气。', '你饿了吗？'],
            answer: 0,
            explain: '别担心 means "don\'t worry" and 加油 means "you can do it".',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Say you are nervous.', hanzi: '我很紧张。', pinyin: 'Wǒ hěn jǐnzhāng.', english: "I'm nervous." },
          { type: 'speak', prompt: 'Comfort someone.', hanzi: '别担心，加油！', pinyin: 'Bié dānxīn, jiāyóu!', english: "Don't worry, you can do it!" },
        ],
      },
    ],
  },

  {
    id: 'plans',
    module: 'talk',
    title: 'Making plans and inviting people',
    subtitle: 'Are you free? Shall we? My treat.',
    minutes: 10,
    goal: 'Invite someone, make plans, and say it is your treat.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Free time and plans',
        blocks: [
          { type: 'vocab', words: [W7.youkong, W7.dasuan, W7.wan, W7.haibian] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['这个周末你有空吗？', 'Are you free this weekend?'],
              ['我打算去海边玩。', 'I plan to go to the beach.'],
              ['我们一起去，好吗？', "Let's go together, okay?"],
              ['好啊！', 'Sure!'],
            ],
          },
          {
            type: 'pro',
            body: 'Add 好吗？ after a suggestion to ask "okay?" It turns a statement into a friendly request: 我们一起去，好吗？ Reply 好啊 or 可以.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'The "A not A" question',
        blocks: [
          {
            type: 'text',
            body: [
              'Another way to ask a yes/no question is to repeat the verb with 不 or 没 in the middle: 你想不想去？ ("Do you want, not want, to go?") or 你有没有空？ ("Do you have, not have, free time?").',
              'It sounds natural and a little more direct than 吗.',
            ],
          },
          {
            type: 'table',
            head: ['With 吗', 'A-not-A'],
            rows: [
              ['你想去吗？', '你想不想去？'],
              ['你有空吗？', '你有没有空？'],
              ['好吗？', '好不好？'],
            ],
          },
          {
            type: 'remember',
            body: 'Say it as a mirror: verb, 不, verb. 想不想, 好不好, 是不是. Reply by choosing one half: 想 or 不想. One tap picks "yes" or "no".',
          },
          {
            type: 'tip',
            label: 'Culture',
            body: '我请你 (wǒ qǐng nǐ) means "my treat". Offering to pay is a common, warm gesture. If someone offers, you can say 谢谢，下次我请你 ("Thanks, next time my treat").',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Weekend plans',
        blocks: [
          {
            type: 'dialogue',
            title: 'Inviting a friend',
            lines: [
              { speaker: 'A', hanzi: '这个周末你有空吗？', pinyin: 'Zhè ge zhōumò nǐ yǒu kòng ma?', english: 'Are you free this weekend?' },
              { speaker: 'B', hanzi: '有空。你想不想去海边玩？', pinyin: 'Yǒu kòng. Nǐ xiǎng bu xiǎng qù hǎibiān wán?', english: 'Yes. Would you like to go to the beach?' },
              { speaker: 'A', hanzi: '好啊！我们一起去吧。', pinyin: 'Hǎo a! Wǒmen yìqǐ qù ba.', english: "Sure! Let's go together." },
              { speaker: 'B', hanzi: '吃饭我请你。', pinyin: 'Chī fàn wǒ qǐng nǐ.', english: "Lunch is my treat." },
              { speaker: 'A', hanzi: '谢谢，下次我请你！', pinyin: 'Xièxie, xià cì wǒ qǐng nǐ!', english: 'Thanks, next time my treat!' },
            ],
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Are you free?',
        blocks: [
          {
            type: 'quiz',
            question: 'Which asks "Are you free this weekend?"',
            options: ['这个周末你有空吗？', '这个周末你是空吗？', '这个周末你空有吗？'],
            answer: 0,
            explain: '有空 means to have free time.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'A-not-A',
        blocks: [
          {
            type: 'quiz',
            question: 'Which is an "A-not-A" question meaning "Do you want to go?"',
            options: ['你想去吗？', '你想不想去？', '你不想去吗？'],
            answer: 1,
            explain: 'The verb is repeated with 不 in between: 想不想.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'My treat',
        blocks: [
          {
            type: 'quiz',
            question: 'You want to offer to pay. What do you say?',
            options: ['我请你。', '我是你。', '我叫你。'],
            answer: 0,
            explain: '我请你 means "my treat".',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Invite someone.', hanzi: '这个周末你有空吗？', pinyin: 'Zhè ge zhōumò nǐ yǒu kòng ma?', english: 'Are you free this weekend?' },
          { type: 'speak', prompt: 'Offer to pay.', hanzi: '吃饭我请你。', pinyin: 'Chī fàn wǒ qǐng nǐ.', english: "Lunch is my treat." },
        ],
      },
    ],
  },

  // ═════════════════════════ EVERYDAY LIFE ═════════════════════════
  {
    id: 'market',
    module: 'daily',
    title: 'At the market: fruit, vegetables and weight',
    subtitle: 'Ask the price per 斤 and say how much you want',
    minutes: 9,
    goal: 'Buy fruit and vegetables by weight and ask the price.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Fruit and vegetables',
        blocks: [
          { type: 'vocab', words: [W2.pingguo, W7.xiangjiao, W7.xigua, W7.putao, W7.tudou, W7.xihongshi, W7.qingcai] },
          {
            type: 'remember',
            body: '西红柿 is "western red persimmon": 西 (western), 红 (red), 柿 (persimmon), the name for tomato. 香蕉 is "fragrant banana": 香 means fragrant. Learn the first character and you can almost guess the rest.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'Buying by the 斤',
        blocks: [
          { type: 'vocab', words: [W7.jin, W7.gongjin, W7.xinxian] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['苹果多少钱一斤？', 'How much are apples per jin?'],
              ['六块一斤。', '6 yuan per jin.'],
              ['我要两斤。', "I'll take two jin."],
              ['这个新鲜吗？', 'Is this fresh?'],
            ],
          },
          {
            type: 'pro',
            body: '1 斤 is 500 grams, half a kilo. Prices at wet markets are almost always "per 斤". The question is 多少钱一斤？, which flows exactly like "how much per kilo". 2 斤 is 1 kilo.',
          },
          {
            type: 'taglish',
            body: 'Parang "magkano ang isang kilo?" sa palengke natin: 多少钱一斤? Sa Tsina, ang 斤 ay kalahating kilo, kaya kung gusto mo ng isang kilo, sabihin ang 两斤 o 一公斤.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'At a fruit stall',
        blocks: [
          {
            type: 'dialogue',
            title: 'Buying apples',
            lines: [
              { speaker: 'G', hanzi: '你好，苹果多少钱一斤？', pinyin: 'Nǐ hǎo, píngguǒ duōshao qián yì jīn?', english: 'Hello, how much are apples per jin?' },
              { speaker: 'S', hanzi: '六块一斤，很新鲜。', pinyin: 'Liù kuài yì jīn, hěn xīnxiān.', english: '6 yuan per jin, very fresh.' },
              { speaker: 'G', hanzi: '我要两斤。', pinyin: 'Wǒ yào liǎng jīn.', english: "I'll take two jin." },
              { speaker: 'S', hanzi: '还要别的吗？', pinyin: 'Hái yào biéde ma?', english: 'Anything else?' },
              { speaker: 'G', hanzi: '不用了，谢谢。一共多少钱？', pinyin: 'Búyòng le, xièxie. Yígòng duōshao qián?', english: 'No thanks. How much altogether?' },
            ],
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Price per jin',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you ask "How much per jin?"',
            options: ['多少钱一斤？', '一斤钱多少是？', '多少斤钱？'],
            answer: 0,
            explain: '多少钱 + 一斤.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'How much is that?',
        blocks: [
          {
            type: 'quiz',
            question: 'How much weight is 两斤?',
            options: ['500 g', '1 kg', '2 kg'],
            answer: 1,
            explain: '1 斤 is 500 g, so 两斤 is 1 kg.',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Ask the price.', hanzi: '苹果多少钱一斤？', pinyin: 'Píngguǒ duōshao qián yì jīn?', english: 'How much are apples per jin?' },
          { type: 'speak', prompt: 'Order.', hanzi: '我要两斤。', pinyin: 'Wǒ yào liǎng jīn.', english: "I'll take two jin." },
        ],
      },
    ],
  },

  {
    id: 'home',
    module: 'daily',
    title: 'Where is it? Home and things',
    subtitle: 'On the table, in the bag, I cannot find my keys',
    minutes: 9,
    goal: 'Say where objects are and ask about something you cannot find.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Things at home',
        blocks: [
          { type: 'vocab', words: [W7.zhuozi, W7.yizi, W7.chuang, W7.men, W7.bao, W2.shouji, W4.yaoshi] },
        ],
      },
      {
        kicker: 'Learn',
        title: 'On, in and under',
        blocks: [
          { type: 'vocab', words: [W7.shang, W7.li, W7.xia, W7.waimian] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['手机在桌子上。', 'The phone is on the table.'],
              ['钥匙在包里。', 'The keys are in the bag.'],
              ['猫在椅子下面。', 'The cat is under the chair.'],
              ['我找不到钥匙。', "I can't find my keys."],
            ],
          },
          {
            type: 'pro',
            body: 'The pattern is thing + 在 + object + 上/里/下. Say 在桌子上 ("at the table-on") for "on the table". For "where is my phone?", say 我的手机在哪里？ or the shorter 我的手机呢？ (呢 asks "where is…?").',
          },
          {
            type: 'taglish',
            body: 'Parang "nasa ibabaw ng mesa" at "nasa loob ng bag": ang 在…上 ay "nasa ibabaw", ang 在…里 ay "nasa loob". At ang 呢 ay "nasaan na?" kapag nawawala ang isang bagay.',
          },
          {
            type: 'remember',
            body: '上 looks like something resting on a line (on top), 下 like something hanging below the line. Draw the line and place the dot above or below.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Looking for the keys',
        blocks: [
          { type: 'vocab', words: [W7.zhaobudao] },
          {
            type: 'dialogue',
            title: 'Running late',
            lines: [
              { speaker: 'A', hanzi: '我的钥匙呢？我找不到。', pinyin: 'Wǒ de yàoshi ne? Wǒ zhǎo bu dào.', english: "Where are my keys? I can't find them." },
              { speaker: 'B', hanzi: '在桌子上。', pinyin: 'Zài zhuōzi shang.', english: 'On the table.' },
              { speaker: 'A', hanzi: '没有。手机呢？', pinyin: 'Méiyǒu. Shǒujī ne?', english: "Not there. And my phone?" },
              { speaker: 'B', hanzi: '在你的包里。', pinyin: 'Zài nǐ de bāo li.', english: 'In your bag.' },
            ],
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'On the table',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you say "The phone is on the table"?',
            options: ['手机桌子在上。', '手机在桌子上。', '手机上在桌子。'],
            answer: 1,
            explain: 'Thing + 在 + object + 上.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Where is it?',
        blocks: [
          {
            type: 'quiz',
            question: 'Which is a short way to ask "Where are my keys?"',
            options: ['我的钥匙呢？', '我的钥匙吗？', '我的钥匙不？'],
            answer: 0,
            explain: 'Noun + 呢 asks "where is…?".',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Say where it is.', hanzi: '手机在桌子上。', pinyin: 'Shǒujī zài zhuōzi shang.', english: 'The phone is on the table.' },
          { type: 'speak', prompt: 'Ask.', hanzi: '我的钥匙呢？', pinyin: 'Wǒ de yàoshi ne?', english: 'Where are my keys?' },
        ],
      },
    ],
  },

  {
    id: 'turns',
    module: 'daily',
    title: 'Giving and following directions',
    subtitle: 'Go straight, turn left, cross the road',
    minutes: 10,
    goal: 'Follow simple directions on the street and give them back.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Street words',
        blocks: [
          { type: 'vocab', words: [W7.yizhi, W7.zuozhuan, W7.youzhuan, W7.hongludeng, W7.lukou, W7.duimian, W7.ditiezhan] },
          {
            type: 'remember',
            body: '红绿灯 is just "red-green-light": 红 (red) + 绿 (green) + 灯 (lamp). 路口 is "road mouth": the place where roads open into each other. 左转 and 右转 are left and right + "turn", so learn 转 once and you have both.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'Put it together',
        blocks: [
          { type: 'vocab', words: [W7.di, W7.fenzhong, W7.zoulu] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['一直走。', 'Go straight.'],
              ['到红绿灯，左转。', 'At the traffic light, turn left.'],
              ['第二个路口右转。', 'Turn right at the second intersection.'],
              ['地铁站在对面。', 'The subway station is across the road.'],
              ['走路五分钟。', "It's a five-minute walk."],
            ],
          },
          {
            type: 'pro',
            body: 'Understand first, speak second. You will hear directions far more often than you give them. Listen for 一直走, 左转, 右转, 第几个 and 到. Together they tell you the whole route.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Asking the way',
        blocks: [
          {
            type: 'dialogue',
            title: 'To the subway',
            lines: [
              { speaker: 'A', hanzi: '请问，去地铁站怎么走？', pinyin: 'Qǐngwèn, qù dìtiězhàn zěnme zǒu?', english: 'Excuse me, how do I get to the subway station?' },
              { speaker: 'B', hanzi: '一直走，到红绿灯左转。', pinyin: 'Yìzhí zǒu, dào hónglǜdēng zuǒ zhuǎn.', english: 'Go straight, turn left at the traffic light.' },
              { speaker: 'A', hanzi: '远吗？', pinyin: 'Yuǎn ma?', english: 'Is it far?' },
              { speaker: 'B', hanzi: '不远，走路五分钟。', pinyin: 'Bù yuǎn, zǒulù wǔ fēnzhōng.', english: "Not far, a five-minute walk." },
              { speaker: 'A', hanzi: '谢谢！', pinyin: 'Xièxie!', english: 'Thank you!' },
            ],
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Turn left',
        blocks: [
          {
            type: 'quiz',
            question: 'Which means "turn left at the traffic light"?',
            options: ['到红绿灯右转', '到红绿灯左转', '到红绿灯一直走'],
            answer: 1,
            explain: '左转 means turn left. 右转 is turn right.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'A short walk',
        blocks: [
          {
            type: 'quiz',
            question: 'What does 走路五分钟 mean?',
            options: ['A five-minute walk', 'Five minutes by subway', 'Five stops away'],
            answer: 0,
            explain: '走路 is "to walk" and 五分钟 is five minutes.',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Ask the way.', hanzi: '请问，去地铁站怎么走？', pinyin: 'Qǐngwèn, qù dìtiězhàn zěnme zǒu?', english: 'How do I get to the subway station?' },
          { type: 'speak', prompt: 'Give directions.', hanzi: '一直走，到红绿灯左转。', pinyin: 'Yìzhí zǒu, dào hónglǜdēng zuǒ zhuǎn.', english: 'Go straight, turn left at the light.' },
        ],
      },
    ],
  },

  {
    id: 'wifi',
    module: 'daily',
    title: 'WiFi, phone and charging',
    subtitle: 'The questions every traveller asks',
    minutes: 8,
    goal: 'Ask for WiFi, a password and somewhere to charge your phone.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Tech words',
        blocks: [
          { type: 'vocab', words: [W7.wuxianwang, W7.mima, W7.chongdian, W7.chongdianqi, W7.meidian, W7.diannao, W7.xinhao] },
          {
            type: 'remember',
            body: '没电 is "no electricity", which is the same as "out of battery". 充电 is "fill with electricity". And 电 appears in 电脑, 电话, 电影, 充电 and 没电: learn 电 once and you know five words.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'Useful questions',
        blocks: [
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['请问有WiFi吗？', 'Excuse me, do you have WiFi?'],
              ['WiFi密码是多少？', 'What is the WiFi password?'],
              ['我的手机没电了。', 'My phone is out of battery.'],
              ['可以在这里充电吗？', 'Can I charge it here?'],
              ['信号不好。', 'The signal is bad.'],
            ],
          },
          {
            type: 'pro',
            body: 'For numbers in a password, read each digit one by one and say 1 as yāo. If the password is hard to understand, hand over your phone and say 请你写一下 (qǐng nǐ xiě yíxià, "please write it").',
          },
          {
            type: 'taglish',
            body: 'Isang pangunahing tanong ng bawat turista: "May WiFi po ba?" Sa Mandarin, sabihin lang ang 请问有WiFi吗? Pareho rin ang istruktura ng "may charger ba?" at "pwede bang mag-charge dito?".',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'At a café',
        blocks: [
          {
            type: 'dialogue',
            title: 'Asking for WiFi',
            lines: [
              { speaker: 'G', hanzi: '请问有WiFi吗？', pinyin: 'Qǐngwèn yǒu WiFi ma?', english: 'Excuse me, do you have WiFi?' },
              { speaker: 'S', hanzi: '有，密码在菜单上。', pinyin: 'Yǒu, mìmǎ zài càidān shang.', english: 'Yes, the password is on the menu.' },
              { speaker: 'G', hanzi: '谢谢。我的手机没电了，可以在这里充电吗？', pinyin: 'Xièxie. Wǒ de shǒujī méi diàn le, kěyǐ zài zhèlǐ chōngdiàn ma?', english: "Thanks. My phone's out of battery, can I charge it here?" },
              { speaker: 'S', hanzi: '可以，在那里。', pinyin: 'Kěyǐ, zài nàlǐ.', english: 'Sure, over there.' },
            ],
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Out of battery',
        blocks: [
          {
            type: 'quiz',
            question: 'Which means "My phone is out of battery"?',
            options: ['我的手机没电了。', '我的手机没有了。', '我的手机不充了。'],
            answer: 0,
            explain: '没电 means out of battery.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Password',
        blocks: [
          {
            type: 'quiz',
            question: 'You want the WiFi password. What do you ask?',
            options: ['WiFi密码是多少？', 'WiFi吃饭是多少？', 'WiFi信号吗？'],
            answer: 0,
            explain: '密码 means password.',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Ask for WiFi.', hanzi: '请问有WiFi吗？', pinyin: 'Qǐngwèn yǒu WiFi ma?', english: 'Do you have WiFi?' },
          { type: 'speak', prompt: 'Ask to charge.', hanzi: '可以在这里充电吗？', pinyin: 'Kěyǐ zài zhèlǐ chōngdiàn ma?', english: 'Can I charge it here?' },
        ],
      },
    ],
  },

  {
    id: 'tickets',
    module: 'daily',
    title: 'Buying train and plane tickets',
    subtitle: 'Ask for a ticket, the day, and the departure time',
    minutes: 10,
    goal: 'Buy a ticket and understand the day, time and price.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Ticket words',
        blocks: [
          { type: 'vocab', words: [W7.piao, W7.huochepiao, W7.jipiao, W7.huochezhan, W7.chufa, W7.natian] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['我要买一张去上海的火车票。', 'I want to buy a train ticket to Shanghai.'],
              ['哪天？', 'Which day?'],
              ['几点出发？', 'What time does it depart?'],
              ['请给我护照。', 'May I have your passport?'],
            ],
          },
          {
            type: 'pro',
            body: 'In China, train tickets are real-name tickets. Foreigners show a passport at the window and at the gate. Arrive early, and keep your passport handy, because staff will ask for it more than once.',
          },
          {
            type: 'remember',
            body: 'Build it like a recipe: 我要买 + 一张 + 去 + place + 的 + ticket. 去上海的火车票 literally says "going-to-Shanghai\'s train ticket". 的 links the destination to the ticket.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'At the ticket window',
        blocks: [
          {
            type: 'dialogue',
            title: 'Buying a ticket',
            lines: [
              { speaker: 'G', hanzi: '你好，我要买一张去上海的火车票。', pinyin: 'Nǐ hǎo, wǒ yào mǎi yì zhāng qù Shànghǎi de huǒchēpiào.', english: 'Hello, I want a train ticket to Shanghai.' },
              { speaker: 'S', hanzi: '哪天？', pinyin: 'Nǎ tiān?', english: 'Which day?' },
              { speaker: 'G', hanzi: '明天，早上八点出发。', pinyin: 'Míngtiān, zǎoshang bā diǎn chūfā.', english: 'Tomorrow, departing at 8 a.m.' },
              { speaker: 'S', hanzi: '请给我护照。一共四百块。', pinyin: 'Qǐng gěi wǒ hùzhào. Yígòng sì bǎi kuài.', english: 'Passport please. 400 yuan altogether.' },
            ],
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Buy a ticket',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you say "I want a train ticket to Shanghai"?',
            options: ['我要买一张去上海的火车票。', '我买火车票的上海去一张。', '我是上海的一张火车票。'],
            answer: 0,
            explain: '我要买 + 一张 + 去上海的 + 火车票.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Departure',
        blocks: [
          {
            type: 'quiz',
            question: 'What does 几点出发？ ask?',
            options: ['What time does it depart?', 'Which day?', 'How much?'],
            answer: 0,
            explain: '几点 is "what time" and 出发 is "depart".',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Buy a ticket.', hanzi: '我要买一张去上海的火车票。', pinyin: 'Wǒ yào mǎi yì zhāng qù Shànghǎi de huǒchēpiào.', english: 'I want a train ticket to Shanghai.' },
          { type: 'speak', prompt: 'Ask the time.', hanzi: '几点出发？', pinyin: 'Jǐ diǎn chūfā?', english: 'What time does it depart?' },
        ],
      },
    ],
  },

  {
    id: 'describe',
    module: 'daily',
    title: 'Describing people',
    subtitle: 'Tall, young, glasses, short hair',
    minutes: 8,
    goal: 'Describe how someone looks, for example to a friend or a guard.',
    pages: [
      {
        kicker: 'Learn',
        title: 'How someone looks',
        blocks: [
          { type: 'vocab', words: [W6.gao, W6.ai, W7.shuai, W7.nianqing, W7.shou, W7.toufa, W7.chang2, W7.duan, W7.dai, W7.yanjing] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['他很高，戴眼镜。', 'He is tall and wears glasses.'],
              ['她的头发很长。', 'Her hair is long.'],
              ['我朋友很年轻。', 'My friend is young.'],
              ['他是什么样的人？', 'What kind of person is he?'],
            ],
          },
          {
            type: 'pro',
            body: 'Be gentle when describing bodies. Chinese speakers will directly say 胖 (heavy) in everyday talk, but as a learner, stick to neutral words like 高, 矮, 年轻 and hair or clothing, so you do not offend anyone.',
          },
          {
            type: 'remember',
            body: '戴 means "to wear" for glasses, hats, watches and jewellery. For clothes, use 穿 (chuān). Remember 戴 as "decorate your face and head": glasses, hat, earrings. 穿 is for what you put on your body.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Finding a friend',
        blocks: [
          {
            type: 'dialogue',
            title: 'At the station',
            lines: [
              { speaker: 'A', hanzi: '你的朋友是什么样的人？', pinyin: 'Nǐ de péngyou shì shénme yàng de rén?', english: 'What does your friend look like?' },
              { speaker: 'B', hanzi: '他很高，戴眼镜，头发很短。', pinyin: 'Tā hěn gāo, dài yǎnjìng, tóufa hěn duǎn.', english: 'He is tall, wears glasses and has short hair.' },
              { speaker: 'A', hanzi: '我看到他了！', pinyin: 'Wǒ kàndào tā le!', english: 'I see him!' },
            ],
          },
          {
            type: 'taglish',
            body: 'Pareho ng ating "matangkad, naka-salamin, maikli ang buhok": 高, 戴眼镜, 头发很短. Mahalagang matutunan ito kapag may hinahanap kang tao sa istasyon o airport.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Glasses',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you say "He wears glasses"?',
            options: ['他戴眼镜。', '他穿眼镜。', '他是眼镜。'],
            answer: 0,
            explain: '戴 is used for glasses, hats and watches.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Hair',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you say "Her hair is long"?',
            options: ['她的头发很短。', '她的头发很长。', '她很头发长。'],
            answer: 1,
            explain: '长 means long. 短 means short.',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Describe someone.', hanzi: '他很高，戴眼镜。', pinyin: 'Tā hěn gāo, dài yǎnjìng.', english: 'He is tall and wears glasses.' },
          { type: 'speak', prompt: 'Describe hair.', hanzi: '她的头发很长。', pinyin: 'Tā de tóufa hěn cháng.', english: 'Her hair is long.' },
        ],
      },
    ],
  },
];


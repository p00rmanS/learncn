import type { Lesson, Page } from './types';
import { W2 } from './wordsMore';
import { W3 } from './wordsExtra';
import { W4 } from './wordsPart4';
import { W5 } from './wordsPart5';
import { W6 } from './wordsPart6';
import { W7 } from './wordsPart7';
import { W8 } from './wordsKids';
import { W9 } from './wordsPart9';
import { W10 } from './wordsPart10';

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

const grownUp = (body: string) => ({ type: 'tip' as const, label: 'For the grown-up', body });

export const PART9_LESSONS: Lesson[] = [
  // ═════════════════════════ EVERYDAY LIFE ═════════════════════════
  {
    id: 'metro',
    module: 'daily',
    title: 'Riding the metro',
    subtitle: 'Stations, lines, transfers and exits',
    minutes: 9,
    goal: 'Find your station, change lines and take the right exit.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Metro words',
        blocks: [
          { type: 'vocab', words: [W7.ditiezhan, W10.zhan_station, W10.xian_line, W10.huancheng, W10.xiayizhan, W10.chukou] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['去天安门，坐几号线？', 'Which line goes to Tiananmen?'],
              ['坐一号线，在国贸换乘十号线。', 'Take Line 1 and transfer to Line 10 at Guomao.'],
              ['下一站是什么站？', 'What is the next station?'],
              ['请问，哪个出口？', 'Excuse me, which exit?'],
            ],
          },
          {
            type: 'pro',
            body: 'Lines are numbered with 号线: 二号线 is "Line 2". Listen to the announcement: 下一站 (next stop) then the name. When it says 请从…口出站, that is "please exit from…", usually followed by the exit letter.',
          },
          {
            type: 'remember',
            body: '站 means "to stand" and also "a stop where you stand": 地铁站, 火车站. And 换乘 is "change + ride": 换 (swap) + 乘 (ride). You already know 换钱 and 换 from other lessons.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Asking at the station',
        blocks: [
          { type: 'vocab', words: [W10.cong] },
          {
            type: 'dialogue',
            title: 'On the platform',
            lines: [
              { speaker: 'A', hanzi: '请问，去机场坐几号线？', pinyin: 'Qǐngwèn, qù jīchǎng zuò jǐ hào xiàn?', english: 'Excuse me, which line goes to the airport?' },
              { speaker: 'B', hanzi: '你坐十号线，在三元桥换乘机场线。', pinyin: 'Nǐ zuò shí hào xiàn, zài Sānyuánqiáo huànchéng jīchǎng xiàn.', english: 'Take Line 10, then transfer to the airport line at Sanyuanqiao.' },
              { speaker: 'A', hanzi: '谢谢！下一站是哪里？', pinyin: 'Xièxie! Xià yí zhàn shì nǎlǐ?', english: 'Thanks! Where is the next stop?' },
              { speaker: 'B', hanzi: '下一站是三元桥。', pinyin: 'Xià yí zhàn shì Sānyuánqiáo.', english: 'The next stop is Sanyuanqiao.' },
            ],
          },
          {
            type: 'taglish',
            body: 'Pareho ng MRT at LRT sa Maynila: kailangan mong malaman ang linya, kung saan bababa, at kung saan lilipat. 换乘 ay "lipat ng linya", 出口 ay "labasan", at 下一站 ay "susunod na istasyon".',
          },
        ],
      },
      quiz('Line 2', 'How do you say "Line 2"?', ['二号线', '二个线', '第二楼'], 0, '号线 is the word for a numbered line.'),
      quiz('Transfer', 'Which word means "transfer" (change lines)?', ['换乘', '出口', '下一站'], 0, '换乘 means to transfer.'),
      speak([
        { prompt: 'Ask which line.', hanzi: '请问，去机场坐几号线？', pinyin: 'Qǐngwèn, qù jīchǎng zuò jǐ hào xiàn?', english: 'Which line goes to the airport?' },
        { prompt: 'Ask the next stop.', hanzi: '下一站是什么站？', pinyin: 'Xià yí zhàn shì shénme zhàn?', english: 'What is the next station?' },
      ]),
    ],
  },

  {
    id: 'sightseeing',
    module: 'daily',
    title: 'Sightseeing and taking photos',
    subtitle: 'Tickets, guides, and asking someone to take your photo',
    minutes: 9,
    goal: 'Buy an entrance ticket, ask about a guide, and ask for a photo.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Tourist words',
        blocks: [
          { type: 'vocab', words: [W10.jingdian, W10.menpiao, W10.daoyou, W10.canguan, W10.paizhao, W10.zhaopian] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['门票多少钱？', 'How much is the entrance ticket?'],
              ['学生有优惠吗？', 'Is there a student discount?'],
              ['可以拍照吗？', 'May I take photos?'],
              ['请帮我们拍张照。', 'Please take a photo of us.'],
              ['我们想参观故宫。', 'We want to visit the Forbidden City.'],
            ],
          },
          {
            type: 'pro',
            body: 'To ask a stranger for a photo, say 请帮我们拍张照 and hand over your phone. 张 is the measure word for photos, so 拍一张照 means "take one photo". Use 谢谢 right after.',
          },
          {
            type: 'remember',
            body: '拍照 is "pat + photo": 拍 means to pat or tap. You tap the screen to take a photo, so the word feels natural. 照片 is the result: "photo-piece".',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'At a famous place',
        blocks: [
          { type: 'vocab', words: [W10.gugong] },
          {
            type: 'dialogue',
            title: 'Buying tickets',
            lines: [
              { speaker: 'G', hanzi: '你好，两张门票多少钱？', pinyin: 'Nǐ hǎo, liǎng zhāng ménpiào duōshao qián?', english: 'Hello, how much for two tickets?' },
              { speaker: 'S', hanzi: '一百块一张。学生五十块。', pinyin: 'Yì bǎi kuài yì zhāng. Xuésheng wǔshí kuài.', english: '100 yuan each. Students 50.' },
              { speaker: 'G', hanzi: '我们有一个导游吗？', pinyin: 'Wǒmen yǒu yí ge dǎoyóu ma?', english: 'Do we get a guide?' },
              { speaker: 'S', hanzi: '有，请在那里等。', pinyin: 'Yǒu, qǐng zài nàlǐ děng.', english: 'Yes, please wait over there.' },
            ],
          },
        ],
      },
      quiz('Photo', 'How do you ask someone to take a photo of you?', ['请帮我们拍张照。', '请给我们照片吃。', '请我们拍你。'], 0, '拍张照 means take a photo.'),
      quiz('Ticket', 'Which means "entrance ticket"?', ['门票', '火车票', '机票'], 0, '门 is a gate, so 门票 is a gate ticket.'),
      speak([
        { prompt: 'Ask the price.', hanzi: '门票多少钱？', pinyin: 'Ménpiào duōshao qián?', english: 'How much is the entrance ticket?' },
        { prompt: 'Ask for a photo.', hanzi: '请帮我们拍张照。', pinyin: 'Qǐng bāng wǒmen pāi zhāng zhào.', english: 'Please take a photo of us.' },
      ]),
    ],
  },

  {
    id: 'sim',
    module: 'daily',
    title: 'SIM cards and mobile data',
    subtitle: 'Buying a SIM, topping up and asking about data',
    minutes: 8,
    goal: 'Buy a SIM card and ask how much data you have.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Phone words',
        blocks: [
          { type: 'vocab', words: [W10.shoujika, W10.liuliang, W10.chongzhi, W4.huzhao] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['我想买一张手机卡。', 'I would like to buy a SIM card.'],
              ['有多少流量？', 'How much data is there?'],
              ['我想充值一百块。', 'I would like to top up 100 yuan.'],
              ['需要护照吗？', 'Do I need my passport?'],
            ],
          },
          {
            type: 'pro',
            body: 'In mainland China, SIM cards need real-name registration, so bring your passport. The shop will scan it. Ask 能用多久？ ("how long will it last?") before you pay.',
          },
          {
            type: 'taglish',
            body: 'Parang bumili ng SIM sa airport: 手机卡 ay "SIM card", 流量 ay "data", at 充值 ay "mag-load". Dalhin ang passport, at tanungin ang 多少流量 at 能用多久.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'At the shop',
        blocks: [
          {
            type: 'dialogue',
            title: 'Buying a SIM',
            lines: [
              { speaker: 'G', hanzi: '你好，我想买一张手机卡。', pinyin: 'Nǐ hǎo, wǒ xiǎng mǎi yì zhāng shǒujīkǎ.', english: 'Hello, I want to buy a SIM card.' },
              { speaker: 'S', hanzi: '好的，请给我您的护照。', pinyin: 'Hǎo de, qǐng gěi wǒ nín de hùzhào.', english: 'Okay, may I have your passport?' },
              { speaker: 'G', hanzi: '有多少流量？能用多久？', pinyin: 'Yǒu duōshao liúliàng? Néng yòng duō jiǔ?', english: 'How much data? How long can I use it?' },
              { speaker: 'S', hanzi: '三十天，二十个G。', pinyin: 'Sānshí tiān, èrshí ge G.', english: '30 days, 20 gigabytes.' },
            ],
          },
        ],
      },
      quiz('SIM', 'Which means "SIM card"?', ['手机卡', '流量', '充值'], 0, '手机卡 is a phone card.'),
      quiz('Top up', 'What does 充值 mean?', ['top up', 'cut off', 'log in'], 0, '充值 is to top up credit.'),
      speak([
        { prompt: 'Buy a SIM.', hanzi: '我想买一张手机卡。', pinyin: 'Wǒ xiǎng mǎi yì zhāng shǒujīkǎ.', english: 'I want to buy a SIM card.' },
        { prompt: 'Ask about data.', hanzi: '有多少流量？', pinyin: 'Yǒu duōshao liúliàng?', english: 'How much data is there?' },
      ]),
    ],
  },

  {
    id: 'post',
    module: 'daily',
    title: 'Sending a parcel',
    subtitle: 'Post office, courier and writing the address',
    minutes: 8,
    goal: 'Send a parcel and ask how long it takes.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Post words',
        blocks: [
          { type: 'vocab', words: [W10.youju, W10.kuaidi, W10.ji_mail, W10.baoguo, W6.dizhi, W10.xie_write] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['我想寄一个包裹。', 'I would like to send a parcel.'],
              ['寄到菲律宾要几天？', 'How many days to the Philippines?'],
              ['请写一下地址。', 'Please write the address.'],
              ['可以用快递吗？', 'Can I use courier?'],
            ],
          },
          {
            type: 'pro',
            body: 'Addresses in Chinese go from big to small: country, city, street, building. If you must write one, show it on your phone and say 请帮我写一下 ("please help me write it") so a person can write the Chinese characters for you.',
          },
          {
            type: 'remember',
            body: '寄 means "to send by mail": think of the roof (宀) for an address. 快递 is "fast + deliver", the everyday word for courier, and 包裹 is "wrap + wrapped thing", a parcel.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'At the counter',
        blocks: [
          {
            type: 'dialogue',
            title: 'Sending to the Philippines',
            lines: [
              { speaker: 'G', hanzi: '你好，我想寄一个包裹去菲律宾。', pinyin: 'Nǐ hǎo, wǒ xiǎng jì yí ge bāoguǒ qù Fēilǜbīn.', english: 'Hello, I want to send a parcel to the Philippines.' },
              { speaker: 'S', hanzi: '好的，请写一下地址。', pinyin: 'Hǎo de, qǐng xiě yíxià dìzhǐ.', english: 'Okay, please write the address.' },
              { speaker: 'G', hanzi: '要几天？', pinyin: 'Yào jǐ tiān?', english: 'How many days will it take?' },
              { speaker: 'S', hanzi: '大概一个星期。', pinyin: 'Dàgài yí ge xīngqī.', english: 'About a week.' },
            ],
          },
        ],
      },
      quiz('Send', 'Which verb means "to mail or send"?', ['寄', '写', '拍'], 0, '寄 jì is to send by post.'),
      quiz('Parcel', 'Which one is a parcel?', ['包裹', '地址', '邮局'], 0, '包裹 bāoguǒ is a parcel.'),
      speak([
        { prompt: 'At the counter.', hanzi: '我想寄一个包裹。', pinyin: 'Wǒ xiǎng jì yí ge bāoguǒ.', english: 'I want to send a parcel.' },
        { prompt: 'Ask the time.', hanzi: '寄到菲律宾要几天？', pinyin: 'Jì dào Fēilǜbīn yào jǐ tiān?', english: 'How many days to the Philippines?' },
      ]),
    ],
  },

  {
    id: 'haircut',
    module: 'daily',
    title: 'At the hair salon',
    subtitle: 'Short, a bit shorter, and not too short',
    minutes: 8,
    goal: 'Ask for a haircut and say how you want it.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Hair words',
        blocks: [
          { type: 'vocab', words: [W10.lifadian, W10.lifa, W10.jian_cut, W10.xitou, W7.toufa, W7.chang2, W7.duan] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['我想剪头发。', 'I would like a haircut.'],
              ['请剪短一点。', 'Please cut it a bit shorter.'],
              ['不要太短。', 'Not too short.'],
              ['先洗头吗？', 'Wash first?'],
            ],
          },
          {
            type: 'pro',
            body: 'To say "a bit more": adjective + 一点, as in 短一点 (a bit shorter) and 长一点 (a bit longer). To say "not too": 不要太…, as in 不要太短. Two small patterns that solve nearly every salon conversation.',
          },
          {
            type: 'remember',
            body: '剪 is "to cut with scissors", while 理 means to tidy. 理发 is "tidy the hair", the formal word for a haircut, and 剪头发 is "scissors the hair", what people actually say.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'In the chair',
        blocks: [
          {
            type: 'dialogue',
            title: 'A haircut',
            lines: [
              { speaker: 'S', hanzi: '你想怎么剪？', pinyin: 'Nǐ xiǎng zěnme jiǎn?', english: 'How would you like it cut?' },
              { speaker: 'G', hanzi: '请剪短一点，不要太短。', pinyin: 'Qǐng jiǎn duǎn yìdiǎn, bú yào tài duǎn.', english: 'Please cut it a bit shorter, not too short.' },
              { speaker: 'S', hanzi: '好的，先洗头吧。', pinyin: 'Hǎo de, xiān xǐ tóu ba.', english: "Okay, let's wash it first." },
              { speaker: 'G', hanzi: '谢谢！', pinyin: 'Xièxie!', english: 'Thank you!' },
            ],
          },
        ],
      },
      quiz('A bit shorter', 'How do you say "a bit shorter"?', ['短一点', '短很', '太短一点'], 0, 'Adjective + 一点.'),
      quiz('Not too short', 'How do you say "not too short"?', ['不要太短', '太不短', '短不要太'], 0, '不要太 + adjective.'),
      speak([
        { prompt: 'Ask for a cut.', hanzi: '我想剪头发。', pinyin: 'Wǒ xiǎng jiǎn tóufa.', english: 'I want a haircut.' },
        { prompt: 'Say how.', hanzi: '请剪短一点，不要太短。', pinyin: 'Qǐng jiǎn duǎn yìdiǎn, bú yào tài duǎn.', english: 'A bit shorter, not too short.' },
      ]),
    ],
  },

  // ═════════════════════════ CORE PATTERNS ═════════════════════════
  {
    id: 'timeclauses',
    module: 'patterns',
    title: 'Before, after and "when"',
    subtitle: 'Join two actions in time',
    minutes: 9,
    goal: 'Say what you do before and after something, and what you were like "when…".',
    pages: [
      {
        kicker: 'Learn',
        title: 'Before and after',
        blocks: [
          { type: 'vocab', words: [W10.yiqian, W10.yihou, W10.shihou, W10.xiaoshihou] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['吃饭以前，我洗手。', 'Before eating, I wash my hands.'],
              ['吃饭以后，我刷牙。', 'After eating, I brush my teeth.'],
              ['我小时候喜欢画画。', 'When I was little, I liked drawing.'],
              ['我在中国的时候，天天吃面条。', 'When I was in China, I ate noodles every day.'],
            ],
          },
          {
            type: 'pro',
            body: 'The time clause comes first and ends with 以前, 以后 or 的时候. The main action comes second: 吃饭以前, 我洗手. In English the order is the opposite, so practise saying the first part, pause, then the second.',
          },
          {
            type: 'taglish',
            body: 'Parang "bago kumain, naghuhugas ako ng kamay" at "pagkatapos kumain, nagsisipilyo ako". Ang 以前 ay "bago", ang 以后 ay "pagkatapos", at ang 的时候 ay "noong / kapag".',
          },
          {
            type: 'remember',
            body: 'Think of a timeline: 以前 points to the left (before), 以后 to the right (after). 前 means front or before, and 后 means back or after, as in 前面 and 后面 that you know for places.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Talking about habits',
        blocks: [
          {
            type: 'dialogue',
            title: 'Before and after',
            lines: [
              { speaker: 'A', hanzi: '你吃饭以前做什么？', pinyin: 'Nǐ chī fàn yǐqián zuò shénme?', english: 'What do you do before eating?' },
              { speaker: 'B', hanzi: '我先洗手，然后吃饭。', pinyin: 'Wǒ xiān xǐ shǒu, ránhòu chī fàn.', english: 'I wash my hands first, then eat.' },
              { speaker: 'A', hanzi: '你小时候喜欢吃什么？', pinyin: 'Nǐ xiǎo shíhou xǐhuan chī shénme?', english: 'What did you like to eat when you were little?' },
              { speaker: 'B', hanzi: '我小时候喜欢吃苹果。', pinyin: 'Wǒ xiǎo shíhou xǐhuan chī píngguǒ.', english: 'When I was little I liked eating apples.' },
            ],
          },
        ],
      },
      quiz('Before', 'How do you say "Before eating"?', ['吃饭以前', '以前吃饭了', '吃饭前吗'], 0, 'Clause + 以前.'),
      quiz('When I was little', 'What does 小时候 mean?', ['when I was little', 'next year', 'every day'], 0, '小 is small and 时候 is time.'),
      speak([
        { prompt: 'Say a habit.', hanzi: '吃饭以前，我洗手。', pinyin: 'Chī fàn yǐqián, wǒ xǐ shǒu.', english: 'Before eating, I wash my hands.' },
        { prompt: 'Say a memory.', hanzi: '我小时候喜欢画画。', pinyin: 'Wǒ xiǎo shíhou xǐhuan huà huà.', english: 'When I was little, I liked drawing.' },
      ]),
    ],
  },

  {
    id: 'choices',
    module: 'patterns',
    title: 'Which one? Making choices',
    subtitle: 'Which, or, either: and choosing',
    minutes: 8,
    goal: 'Ask "which one?", choose between options and say "either is fine".',
    pages: [
      {
        kicker: 'Learn',
        title: 'Which one?',
        blocks: [
          { type: 'vocab', words: [W10.nage_which, W10.xuan, W6.haishi, W10.huozhe, W5.douxing] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['你要哪个？', 'Which one do you want?'],
              ['这个还是那个？', 'This one or that one?'],
              ['茶或者咖啡都可以。', 'Tea or coffee, either is fine.'],
              ['我选这个。', "I'll pick this one."],
            ],
          },
          {
            type: 'pro',
            body: 'Both mean "or", but in different places. 还是 is for questions that force a choice (你要茶还是咖啡？). 或者 is for statements where several options are fine (茶或者咖啡都可以). Hear the difference: question versus statement.',
          },
          {
            type: 'remember',
            body: 'Think "question mark → 还是" and "full stop → 或者". If a question mark ends the sentence, use 还是. If it is a plain statement, use 或者.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Choosing a drink',
        blocks: [
          {
            type: 'dialogue',
            title: 'At a café',
            lines: [
              { speaker: 'S', hanzi: '你要茶还是咖啡？', pinyin: 'Nǐ yào chá háishi kāfēi?', english: 'Tea or coffee?' },
              { speaker: 'G', hanzi: '都可以。哪个好喝？', pinyin: 'Dōu kěyǐ. Nǎge hǎohē?', english: 'Either is fine. Which is nice?' },
              { speaker: 'S', hanzi: '茶很好喝。', pinyin: 'Chá hěn hǎohē.', english: 'The tea is very nice.' },
              { speaker: 'G', hanzi: '好，我选茶。', pinyin: 'Hǎo, wǒ xuǎn chá.', english: "Okay, I'll pick the tea." },
            ],
          },
        ],
      },
      quiz('Which', 'Which means "which one"?', ['哪个', '那个', '这个'], 0, '哪 is "which"; 那 is "that". Note the tones: nǎ and nà.'),
      quiz('A question', 'Which fits "Tea or coffee?" as a question?', ['茶还是咖啡？', '茶或者咖啡？', '茶是咖啡？'], 0, '还是 is for choice questions.'),
      speak([
        { prompt: 'Ask which.', hanzi: '你要哪个？', pinyin: 'Nǐ yào nǎge?', english: 'Which one do you want?' },
        { prompt: 'Say either is fine.', hanzi: '茶或者咖啡都可以。', pinyin: 'Chá huòzhě kāfēi dōu kěyǐ.', english: 'Tea or coffee, either is fine.' },
      ]),
    ],
  },

  // ═════════════════════════ LITTLE LEARNERS ═════════════════════════
  {
    id: 'k-twinkle',
    module: 'kinder',
    track: 'kids',
    title: 'Song: Twinkle, Twinkle (一闪一闪亮晶晶)',
    subtitle: 'The star song, in Chinese',
    minutes: 7,
    goal: 'Sing the Chinese version of "Twinkle, Twinkle, Little Star".',
    pages: [
      {
        kicker: 'Sing',
        title: 'The star song',
        blocks: [
          {
            type: 'text',
            body: ['This is the same tune as "Twinkle, Twinkle, Little Star". The Chinese words describe stars hanging in the sky like little eyes.'],
          },
          {
            type: 'dialogue',
            title: 'The song',
            lines: [
              { speaker: '♪', hanzi: '一闪一闪亮晶晶，', pinyin: 'Yì shǎn yì shǎn liàng jīngjīng,', english: 'Twinkle, twinkle, shining bright,' },
              { speaker: '♪', hanzi: '满天都是小星星。', pinyin: 'Mǎn tiān dōu shì xiǎo xīngxing.', english: 'The sky is full of little stars.' },
              { speaker: '♪', hanzi: '挂在天上放光明，', pinyin: 'Guà zài tiānshang fàng guāngmíng,', english: 'Hanging in the sky, giving light,' },
              { speaker: '♪', hanzi: '好像许多小眼睛。', pinyin: 'Hǎoxiàng xǔduō xiǎo yǎnjing.', english: 'Like many little eyes.' },
            ],
          },
          { type: 'vocab', words: [W10.shan_flash, W10.liangjingjing, W10.mantian, W10.guangming, W10.haoxiang, W10.xuduo] },
          {
            type: 'pro',
            body: 'Sing slowly the first time. Notice 一闪 is yì shǎn: 一 turns to tone 4 before tone 3. 亮晶晶 is a "sparkly" word: 晶晶 doubled makes it feel more sparkly, the way Chinese doubles words for charm.',
          },
          {
            type: 'remember',
            body: 'Open and close your hand like a twinkling star on each 一闪. Point up for 天上, make big round eyes for 眼睛. Actions fix the words in a child\'s memory faster than any card.',
          },
          grownUp('Sing it at night with the lights low. Familiar tunes help a child focus on the new words.'),
        ],
      },
      quiz('Stars', 'What are the little stars like?', ['little eyes', 'little birds', 'little fish'], 0, '眼睛 are eyes.'),
      quiz('Sky', 'Where are the stars?', ['in the sky', 'in the water', 'in the kitchen'], 0, '天上 is in the sky.'),
      speak([
        { prompt: 'Sing the first line.', hanzi: '一闪一闪亮晶晶，满天都是小星星。', pinyin: 'Yì shǎn yì shǎn liàng jīngjīng, mǎn tiān dōu shì xiǎo xīngxing.', english: 'Twinkle, twinkle, the sky is full of stars.' },
        { prompt: 'Sing the end.', hanzi: '挂在天上放光明，好像许多小眼睛。', pinyin: 'Guà zài tiānshang fàng guāngmíng, hǎoxiàng xǔduō xiǎo yǎnjing.', english: 'Hanging in the sky, like many little eyes.' },
      ]),
    ],
  },

  {
    id: 'k-weather',
    module: 'kinder',
    track: 'kids',
    title: 'Sun, rain, wind and snow',
    subtitle: 'How is the weather today?',
    minutes: 6,
    goal: 'Name weather words and say what the weather is like.',
    pages: [
      {
        kicker: 'Look and listen',
        title: 'Look out the window',
        blocks: [
          { type: 'vocab', words: [W8.taiyang, W3.xiayu, W8.feng, W8.yun, W8.xiaxue, W3.re, W3.leng] },
          {
            type: 'remember',
            body: 'Act out each one! 太阳: make a big circle with your arms. 下雨: wiggle your fingers down like rain. 风: blow and sway. 云: draw a fluffy cloud. 下雪: float your hands down slowly. 热: fan yourself. 冷: shiver.',
          },
          {
            type: 'pro',
            body: 'Ask 今天天气怎么样？ every morning and let your child answer with one word: 热, 冷, 下雨. In Chinese you can answer with just the weather word, no verb needed.',
          },
          {
            type: 'play',
            title: "Let's play",
            body: 'Weather reporter! The child stands at the window and announces: "今天下雨!" or "今天很热!" The grown-up draws the matching picture on a calendar.',
          },
        ],
      },
      quiz('Rain', 'Which means "it is raining"?', ['下雨', '下雪', '有风'], 0, '雨 is rain.'),
      quiz('Cold', 'Which one means "cold"?', ['冷', '热', '云'], 0, '冷 lěng is cold.'),
      speak([
        { prompt: 'Be the reporter!', hanzi: '今天天气很好。', pinyin: 'Jīntiān tiānqì hěn hǎo.', english: 'The weather is nice today.' },
        { prompt: 'Shiver!', hanzi: '今天很冷。', pinyin: 'Jīntiān hěn lěng.', english: 'It is cold today.' },
      ]),
    ],
  },

  {
    id: 'e-jobs',
    module: 'elementary',
    track: 'kids',
    title: 'When I grow up',
    subtitle: 'Doctor, teacher, chef, firefighter',
    minutes: 7,
    goal: 'Say what job you want to do when you grow up.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Jobs',
        blocks: [
          { type: 'vocab', words: [W3.yisheng, W3.laoshi, W10.chushi, W10.xiaofangyuan, W9.jingcha, W10.siji, W10.nongmin] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['我长大想当医生。', 'When I grow up I want to be a doctor.'],
              ['爸爸是司机。', 'Dad is a driver.'],
              ['你长大想当什么？', 'What do you want to be when you grow up?'],
            ],
          },
          { type: 'vocab', title: 'Key words', words: [W10.zhangda, W10.dang] },
          {
            type: 'pro',
            body: '当 (dāng) means "to work as" or "to become": 我想当老师. For what someone is right now, use 是: 他是老师. So 当 looks forward and 是 says what is true now.',
          },
          {
            type: 'remember',
            body: 'Many job words end in a sound that tells you the person: 师 (shī, expert) in 老师 and 厨师, 员 (yuán, member) in 消防员. Spot the ending and you can guess "this is a person".',
          },
        ],
      },
      {
        kicker: "Let's play",
        title: 'Dress-up',
        blocks: [
          {
            type: 'play',
            title: "Let's play",
            body: 'Dress up and act. A child pretends to be a doctor, chef, or firefighter and says "我想当…". The grown-up asks: "你是什么？" and the child answers "我是…". Switch roles every minute.',
          },
          {
            type: 'dialogue',
            title: 'Show and tell',
            lines: [
              { speaker: 'T', hanzi: '你长大想当什么？', pinyin: 'Nǐ zhǎng dà xiǎng dāng shénme?', english: 'What do you want to be when you grow up?' },
              { speaker: 'K', hanzi: '我想当厨师。', pinyin: 'Wǒ xiǎng dāng chúshī.', english: 'I want to be a chef.' },
              { speaker: 'T', hanzi: '为什么？', pinyin: 'Wèishénme?', english: 'Why?' },
              { speaker: 'K', hanzi: '因为我喜欢做饭。', pinyin: 'Yīnwèi wǒ xǐhuan zuò fàn.', english: 'Because I like cooking.' },
            ],
          },
          grownUp('This lesson is a lovely chance to talk about dreams. Let your child answer in English first, then teach the Chinese word together.'),
        ],
      },
      quiz('Doctor', 'Which one is a doctor?', ['医生', '老师', '司机'], 0, '医生 yīshēng is a doctor.'),
      quiz('Want to be', 'Which means "I want to be a teacher"?', ['我想当老师', '我想吃老师', '我想去老师'], 0, '想当 means want to become.'),
      speak([
        { prompt: 'Say your dream job.', hanzi: '我长大想当医生。', pinyin: 'Wǒ zhǎng dà xiǎng dāng yīshēng.', english: 'When I grow up I want to be a doctor.' },
        { prompt: 'Ask a friend.', hanzi: '你长大想当什么？', pinyin: 'Nǐ zhǎng dà xiǎng dāng shénme?', english: 'What do you want to be?' },
      ]),
    ],
  },

  {
    id: 'e-fruit',
    module: 'elementary',
    track: 'kids',
    title: 'Fruit and vegetables',
    subtitle: 'Oranges, strawberries, carrots and corn',
    minutes: 7,
    goal: 'Name ten fruits and vegetables and say which you like.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Fruit',
        blocks: [
          { type: 'vocab', words: [W2.pingguo, W7.xiangjiao, W7.xigua, W7.putao, W10.chengzi, W10.caomei] },
          {
            type: 'remember',
            body: 'Many fruit and plant words contain 艹 on top (grass or plant): 草莓 (strawberry), 葡萄 (grapes), 苹果 (apple). When you see 艹, think "plant". That is a radical, a meaning hint.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'Vegetables',
        blocks: [
          { type: 'vocab', words: [W7.tudou, W7.xihongshi, W10.huluobo, W10.yumi, W7.qingcai] },
          {
            type: 'pro',
            body: 'Say 我喜欢吃… (I like eating…) and 我不喜欢吃… (I do not like eating…). Pattern for any food: I + 喜欢吃 + food. Say it three times with three different foods and it will stick.',
          },
          {
            type: 'play',
            title: "Let's play",
            body: 'Rainbow plate. Draw or arrange pretend food by colour. The child says each one: "红色的西红柿", "黄色的玉米", "橙色的橙子". Then tell what you like: "我喜欢吃草莓".',
          },
          grownUp('Pair this with a real trip to a market. Point at things and say the Chinese name, then let your child repeat.'),
        ],
      },
      quiz('Strawberry', 'Which one is a strawberry?', ['草莓', '葡萄', '橙子'], 0, '草莓 cǎoméi is a strawberry.'),
      quiz('Corn', 'Which one is corn?', ['玉米', '土豆', '胡萝卜'], 0, '玉米 yùmǐ is corn.'),
      speak([
        { prompt: 'Say what you like.', hanzi: '我喜欢吃草莓。', pinyin: 'Wǒ xǐhuan chī cǎoméi.', english: 'I like eating strawberries.' },
        { prompt: 'Say what you do not like.', hanzi: '我不喜欢吃胡萝卜。', pinyin: 'Wǒ bù xǐhuan chī húluóbo.', english: 'I do not like eating carrots.' },
      ]),
    ],
  },
];


import type { Lesson, Page } from './types';
import { W } from './words';
import { W2 } from './wordsMore';
import { W3 } from './wordsExtra';
import { W4 } from './wordsPart4';
import { W6 } from './wordsPart6';
import { W8 } from './wordsKids';
import { W9 } from './wordsPart9';

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

export const PART8_LESSONS: Lesson[] = [
  // ═════════════════════════ CORE PATTERNS ═════════════════════════
  {
    id: 'frequency',
    module: 'patterns',
    title: 'How often? Always, sometimes, never',
    subtitle: 'Talk about habits and how many times',
    minutes: 9,
    goal: 'Say how often you do something and count how many times.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Always to never',
        blocks: [
          { type: 'vocab', words: [W9.zongshi, W6.changchang, W9.youshihou, W9.henshao, W9.conglaibu] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['我总是七点起床。', 'I always get up at seven.'],
              ['我常常喝咖啡。', 'I often drink coffee.'],
              ['我有时候看电影。', 'I sometimes watch movies.'],
              ['我很少吃肉。', 'I rarely eat meat.'],
              ['我从来不喝酒。', 'I never drink alcohol.'],
            ],
          },
          {
            type: 'pro',
            body: 'Frequency words go before the verb, right after the subject, like time words: 我常常喝咖啡. Use 从来不 for a lifelong habit of "never", and 没…过 for "have not yet ever": 我没去过 vs 我从来不去.',
          },
          {
            type: 'remember',
            body: 'Put them on a ladder from high to low: 总是 (100%), 常常 (75%), 有时候 (40%), 很少 (10%), 从来不 (0%). Say them in order, going down the ladder.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'How many times?',
        blocks: [
          { type: 'vocab', words: [W9.meizhou, W9.ci_times] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['我每周去三次。', 'I go three times a week.'],
              ['我去过两次北京。', "I've been to Beijing twice."],
              ['请再说一次。', 'Please say it one more time.'],
            ],
          },
          {
            type: 'taglish',
            body: 'Sa Tagalog, "tatlong beses sa isang linggo". Sa Mandarin, ang bilang ng beses (次) ay inilalagay pagkatapos ng verb: 去三次 = "pumunta nang tatlong beses". Ihambing: ang oras ay nauuna, ang bilang ng beses ay sumusunod.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Talking about habits',
        blocks: [
          {
            type: 'dialogue',
            title: 'Gym talk',
            lines: [
              { speaker: 'A', hanzi: '你常常跑步吗？', pinyin: 'Nǐ chángcháng pǎobù ma?', english: 'Do you often go running?' },
              { speaker: 'B', hanzi: '我每周跑三次。你呢？', pinyin: 'Wǒ měi zhōu pǎo sān cì. Nǐ ne?', english: 'I run three times a week. And you?' },
              { speaker: 'A', hanzi: '我很少跑步，但是我总是走路上班。', pinyin: 'Wǒ hěn shǎo pǎobù, dànshì wǒ zǒngshì zǒulù shàngbān.', english: 'I rarely run, but I always walk to work.' },
            ],
          },
        ],
      },
      quiz('Often', 'Which word means "often"?', ['常常', '很少', '从来不'], 0, '常常 chángcháng means often.'),
      quiz('Three times', 'How do you say "three times a week"?', ['每周三次', '三次每周', '周每三次'], 0, '每周 then the number, then 次.'),
      quiz('Never', 'Which one means "never"?', ['从来不', '总是', '有时候'], 0, '从来不 means never, as a habit.'),
      speak([
        { prompt: 'Say a habit.', hanzi: '我总是七点起床。', pinyin: 'Wǒ zǒngshì qī diǎn qǐchuáng.', english: 'I always get up at seven.' },
        { prompt: 'Count the times.', hanzi: '我每周跑三次。', pinyin: 'Wǒ měi zhōu pǎo sān cì.', english: 'I run three times a week.' },
      ]),
    ],
  },

  // ═════════════════════════ EVERYDAY LIFE ═════════════════════════
  {
    id: 'bignumbers',
    module: 'daily',
    title: 'Big numbers: hundreds, thousands, years',
    subtitle: '一百零五, 两千, 一万, and why Chinese counts in 10,000s',
    minutes: 10,
    goal: 'Say and understand numbers up to the tens of thousands, and years.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Hundreds and thousands',
        blocks: [
          { type: 'vocab', words: [W2.bai, W9.qian_thousand, W9.wan_tenk, W.n0] },
          {
            type: 'table',
            head: ['Number', 'Hanzi', 'Pinyin'],
            rows: [
              ['105', '一百零五', 'yì bǎi líng wǔ'],
              ['110', '一百一十', 'yì bǎi yī shí'],
              ['1,000', '一千', 'yì qiān'],
              ['2,000', '两千', 'liǎng qiān'],
              ['10,000', '一万', 'yí wàn'],
              ['20,000', '两万', 'liǎng wàn'],
            ],
          },
          {
            type: 'pro',
            body: 'Say 零 (líng, "zero") when a gap appears inside a number: 105 is 一百零五, not 一百五. One 零 covers any number of skipped zeros, so 1,005 is 一千零五.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'Counting in 10,000s',
        blocks: [
          {
            type: 'text',
            body: ['English groups digits in threes (thousand, million). Chinese groups in fours: 万 (10,000) and 亿 (100 million). So 100,000 is 十万, "ten ten-thousands", and 1,000,000 is 一百万, "a hundred ten-thousands".'],
          },
          {
            type: 'remember',
            body: 'Do the maths in 万: 30,000 is 三万 (3 × 10,000). 250,000 is 二十五万 (25 × 10,000). When you hear 万, stop and multiply by ten thousand. It feels odd for a week, then clicks.',
          },
          {
            type: 'tip',
            label: 'Years',
            body: 'Say years digit by digit: 2026 is 二零二六年 (èr líng èr liù nián). Do not say "two thousand twenty-six".',
          },
          {
            type: 'taglish',
            body: 'Kung sanay ka sa "sampung libo" (10,000), pareho ang pag-iisip: 一万 = sampung libo. Mas natural pa nga ito para sa Pilipino kaysa sa English "ten thousand".',
          },
        ],
      },
      quiz('Zero', 'How do you say 105?', ['一百零五', '一百五', '一零五'], 0, 'A skipped place needs 零: 一百零五.'),
      quiz('Ten thousand', 'What is 三万?', ['30,000', '3,000', '300,000'], 0, '万 is 10,000, so 三万 is 30,000.'),
      quiz('A year', 'How do you say the year 2026?', ['二零二六年', '两千二十六年', '二千零二十六个'], 0, 'Years are read digit by digit.'),
      speak([
        { prompt: 'Say a price.', hanzi: '一百零五块', pinyin: 'yì bǎi líng wǔ kuài', english: '105 yuan' },
        { prompt: 'Say a big number.', hanzi: '两万', pinyin: 'liǎng wàn', english: '20,000' },
      ]),
    ],
  },

  {
    id: 'bank',
    module: 'daily',
    title: 'At the bank: exchange and withdraw money',
    subtitle: 'Exchange rates, ATMs and what to bring',
    minutes: 9,
    goal: 'Exchange money, withdraw cash and ask about the rate.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Money words',
        blocks: [
          { type: 'vocab', words: [W9.yinhang, W9.quqian, W9.huanqian, W9.huilv, W9.renminbi, W9.meiyuan, W9.biso, W9.qukuanji] },
          {
            type: 'remember',
            body: '人民币 literally means "the people\'s money": 人民 (the people) + 币 (currency). The unit you say aloud is 块 (kuài), the unit you see written is 元. 美元 is "American yuan", with 美 meaning beautiful, short for America.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'What to say',
        blocks: [
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['我想换钱。', 'I would like to exchange money.'],
              ['今天的汇率是多少？', "What's today's exchange rate?"],
              ['取款机在哪里？', 'Where is the ATM?'],
              ['我想取钱。', 'I want to withdraw money.'],
            ],
          },
          {
            type: 'pro',
            body: 'Bring your passport. Banks and exchange counters in China ask for it every time you change money. And say 请给我小钞 (small notes) if you want change that is easy to spend.',
          },
          {
            type: 'taglish',
            body: 'Para sa mga Pilipinong biyahero: 菲律宾比索 (Fēilǜbīn bǐsuǒ) ang peso. Pwede mong sabihin ang "我想换比索" kung gusto mong magpapalit. Dalhin lagi ang passport.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'At the counter',
        blocks: [
          {
            type: 'dialogue',
            title: 'Exchanging dollars',
            lines: [
              { speaker: 'G', hanzi: '你好，我想换钱。', pinyin: 'Nǐ hǎo, wǒ xiǎng huàn qián.', english: 'Hello, I want to exchange money.' },
              { speaker: 'S', hanzi: '您想换什么？', pinyin: 'Nín xiǎng huàn shénme?', english: 'What currency?' },
              { speaker: 'G', hanzi: '我有美元，想换人民币。', pinyin: 'Wǒ yǒu měiyuán, xiǎng huàn rénmínbì.', english: 'I have US dollars, I want yuan.' },
              { speaker: 'S', hanzi: '请给我您的护照。', pinyin: 'Qǐng gěi wǒ nín de hùzhào.', english: 'May I have your passport?' },
            ],
          },
        ],
      },
      quiz('Exchange', 'How do you say "I want to exchange money"?', ['我想换钱。', '我想取钱人。', '我想银行。'], 0, '换钱 is to exchange money.'),
      quiz('ATM', 'What does 取款机 mean?', ['ATM', 'bank', 'passport'], 0, '取款机 is an ATM.'),
      speak([
        { prompt: 'At the bank.', hanzi: '我想换钱。', pinyin: 'Wǒ xiǎng huàn qián.', english: 'I want to exchange money.' },
        { prompt: 'Ask the rate.', hanzi: '今天的汇率是多少？', pinyin: 'Jīntiān de huìlǜ shì duōshao?', english: "What's today's exchange rate?" },
      ]),
    ],
  },

  {
    id: 'discount',
    module: 'daily',
    title: 'Discounts and returns',
    subtitle: 'The tricky 八折, special offers and bringing something back',
    minutes: 8,
    goal: 'Understand discount signs and ask to return something.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Discount words',
        blocks: [
          { type: 'vocab', words: [W9.dazhe, W9.youhui, W9.tuihuo] },
          {
            type: 'table',
            head: ['Sign says', 'You pay', 'Discount'],
            rows: [
              ['九折 (jiǔ zhé)', '90%', '10% off'],
              ['八折 (bā zhé)', '80%', '20% off'],
              ['七折 (qī zhé)', '70%', '30% off'],
              ['五折 (wǔ zhé)', '50%', 'half price'],
            ],
            caption: 'The number tells you what you pay, not what you save.',
          },
          {
            type: 'pro',
            body: 'This catches every beginner: 八折 does not mean "80% off". It means you pay 80%, so you save 20%. A low number means a bigger discount: 五折 is half price, 三折 is 70% off.',
          },
          {
            type: 'remember',
            body: 'Read 折 as "fold". 八折 means "folded to eight tenths". A bigger fold (a smaller number) means a cheaper price. Picture a cloth folded down to 80% of its size.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'In a shop',
        blocks: [
          {
            type: 'dialogue',
            title: 'Asking for a discount, then a return',
            lines: [
              { speaker: 'A', hanzi: '这个能打折吗？', pinyin: 'Zhè ge néng dǎzhé ma?', english: 'Can I get a discount on this?' },
              { speaker: 'B', hanzi: '今天有优惠，八折。', pinyin: 'Jīntiān yǒu yōuhuì, bā zhé.', english: "There's an offer today, 20% off." },
              { speaker: 'A', hanzi: '太好了！这个可以退货吗？', pinyin: 'Tài hǎo le! Zhè ge kěyǐ tuìhuò ma?', english: 'Great! Can this be returned?' },
              { speaker: 'B', hanzi: '可以，请带发票。', pinyin: 'Kěyǐ, qǐng dài fāpiào.', english: 'Yes, please bring the receipt.' },
            ],
          },
        ],
      },
      quiz('Eight tenths', 'A sign says 八折. What do you pay?', ['80%', '20%', '8%'], 0, '八折 means you pay 80% of the price.'),
      quiz('Half price', 'Which sign means half price?', ['五折', '一折', '九折'], 0, '五折 means pay 50%.'),
      speak([
        { prompt: 'Ask for a discount.', hanzi: '这个能打折吗？', pinyin: 'Zhè ge néng dǎzhé ma?', english: 'Can I get a discount on this?' },
        { prompt: 'Ask about returns.', hanzi: '这个可以退货吗？', pinyin: 'Zhè ge kěyǐ tuìhuò ma?', english: 'Can this be returned?' },
      ]),
    ],
  },

  {
    id: 'floors',
    module: 'daily',
    title: 'Floors, elevators and stairs',
    subtitle: 'Which floor? Take the elevator',
    minutes: 7,
    goal: 'Ask which floor something is on and use the elevator.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Floor words',
        blocks: [
          { type: 'vocab', words: [W9.lou, W9.dianti, W9.louti] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['几楼？', 'Which floor?'],
              ['在三楼。', "It's on the third floor."],
              ['电梯在哪里？', 'Where is the elevator?'],
              ['我们坐电梯上楼。', "Let's take the elevator up."],
            ],
          },
          {
            type: 'pro',
            body: 'In China, 一楼 is the ground floor, as in the US. Floors are numbered like this: 一楼, 二楼, 三楼. A basement is 地下一层 (dìxià yī céng), which you will see on lift buttons.',
          },
          {
            type: 'remember',
            body: '楼 is "a building" and "a floor". Count the floors like numbers plus 楼: 三楼 is "three-floor". For "up" use 上楼 and for "down" use 下楼, the same 上 and 下 you know from 上班 and 下班.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'In the mall',
        blocks: [
          {
            type: 'dialogue',
            title: 'Finding the shoe shop',
            lines: [
              { speaker: 'A', hanzi: '请问，鞋店在几楼？', pinyin: 'Qǐngwèn, xiédiàn zài jǐ lóu?', english: 'Excuse me, which floor is the shoe shop on?' },
              { speaker: 'B', hanzi: '在三楼，你可以坐电梯。', pinyin: 'Zài sān lóu, nǐ kěyǐ zuò diàntī.', english: "On the third floor. You can take the elevator." },
              { speaker: 'A', hanzi: '电梯在哪里？', pinyin: 'Diàntī zài nǎlǐ?', english: 'Where is the elevator?' },
              { speaker: 'B', hanzi: '在左边。', pinyin: 'Zài zuǒbian.', english: 'On the left.' },
            ],
          },
        ],
      },
      quiz('Which floor?', 'How do you ask "Which floor?"', ['几楼？', '多少楼人？', '哪里楼？'], 0, '几 asks for a small number.'),
      quiz('Ground floor', 'Which is the ground floor?', ['一楼', '零楼', '二楼'], 0, '一楼 is the ground floor.'),
      speak([
        { prompt: 'Ask the floor.', hanzi: '请问，鞋店在几楼？', pinyin: 'Qǐngwèn, xiédiàn zài jǐ lóu?', english: 'Which floor is the shoe shop on?' },
        { prompt: 'Find the lift.', hanzi: '电梯在哪里？', pinyin: 'Diàntī zài nǎlǐ?', english: 'Where is the elevator?' },
      ]),
    ],
  },

  {
    id: 'lost',
    module: 'daily',
    title: 'Lost something? Asking for help',
    subtitle: 'Lost wallet or passport, calling the police',
    minutes: 9,
    goal: 'Report a lost item and ask for help.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Help words',
        blocks: [
          { type: 'vocab', words: [W9.jingcha, W9.diu, W9.qianbao, W9.dashiguan, W9.baojing] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['我的钱包丢了。', 'My wallet is lost.'],
              ['我的护照丢了。', 'My passport is lost.'],
              ['请帮我。', 'Please help me.'],
              ['请叫警察。', 'Please call the police.'],
              ['菲律宾大使馆在哪里？', 'Where is the Philippine embassy?'],
            ],
          },
          {
            type: 'pro',
            body: 'The police number in mainland China is 110. Say it as yāo yāo líng. If your passport is lost, go to the police first for a report, then to your embassy. Take photos of your passport before you travel.',
          },
          {
            type: 'remember',
            body: '丢了 is the "lost it" pattern: thing + 丢了. 我的手机丢了, 我的包丢了. It is the same 了 you know for a changed situation: "now it is gone".',
          },
          {
            type: 'taglish',
            body: 'Ang "nawala ang wallet ko" ay 我的钱包丢了. Ang 了 ay ang "na-": nawala na. Tandaan ang 110 para sa pulis at ang 大使馆 para sa embahada ng Pilipinas.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'At the police station',
        blocks: [
          {
            type: 'dialogue',
            title: 'Reporting a lost wallet',
            lines: [
              { speaker: 'G', hanzi: '你好，我的钱包丢了。', pinyin: 'Nǐ hǎo, wǒ de qiánbāo diū le.', english: 'Hello, my wallet is lost.' },
              { speaker: 'P', hanzi: '你在哪里丢的？', pinyin: 'Nǐ zài nǎlǐ diū de?', english: 'Where did you lose it?' },
              { speaker: 'G', hanzi: '可能在地铁上。', pinyin: 'Kěnéng zài dìtiě shang.', english: 'Maybe on the subway.' },
              { speaker: 'P', hanzi: '请给我您的护照。', pinyin: 'Qǐng gěi wǒ nín de hùzhào.', english: 'May I have your passport?' },
            ],
          },
        ],
      },
      quiz('Lost', 'How do you say "My phone is lost"?', ['我的手机丢了。', '我的手机丢人。', '手机我丢吗？'], 0, '丢了 means lost.'),
      quiz('Police', 'What do you say to ask someone to call the police?', ['请叫警察。', '请吃警察。', '请买警察。'], 0, '叫警察 means call the police.'),
      speak([
        { prompt: 'Report it.', hanzi: '我的钱包丢了。', pinyin: 'Wǒ de qiánbāo diū le.', english: 'My wallet is lost.' },
        { prompt: 'Ask for help.', hanzi: '请帮我。请叫警察。', pinyin: 'Qǐng bāng wǒ. Qǐng jiào jǐngchá.', english: 'Please help me. Please call the police.' },
      ]),
    ],
  },

  {
    id: 'festivals',
    module: 'daily',
    title: 'Festivals: Spring Festival and Mid-Autumn',
    subtitle: 'Red envelopes, dumplings, mooncakes and greetings',
    minutes: 8,
    goal: 'Greet people during the main Chinese festivals.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Two big festivals',
        blocks: [
          { type: 'vocab', words: [W9.chunjie, W9.zhongqiujie, W9.hongbao, W9.jiaozi, W9.yuebing, W9.gongxifacai] },
          {
            type: 'text',
            body: [
              '春节 (Chūnjié), the Spring Festival, is Chinese New Year. It is in January or February, follows the lunar calendar, and is a time for family reunions, dumplings and red envelopes.',
              '中秋节 (Zhōngqiūjié) is the Mid-Autumn Festival in autumn. Families gather, look at the full moon and eat mooncakes.',
            ],
          },
          {
            type: 'pro',
            body: 'Greet people with 新年快乐 (xīnnián kuàilè) or 春节快乐. 恭喜发财 (gōngxǐ fācái) wishes prosperity and is common. When you receive a 红包, accept it with both hands and say 谢谢.',
          },
          {
            type: 'remember',
            body: 'The red in 红包 is a lucky colour. Link the festivals to their food: 春节 means 饺子 (dumplings), 中秋节 means 月饼 (mooncakes). The word 月 (moon) is right inside 月饼.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'New Year greetings',
        blocks: [
          {
            type: 'dialogue',
            title: 'At a family dinner',
            lines: [
              { speaker: 'A', hanzi: '新年快乐！恭喜发财！', pinyin: 'Xīnnián kuàilè! Gōngxǐ fācái!', english: 'Happy New Year! Wishing you prosperity!' },
              { speaker: 'B', hanzi: '新年快乐！这是你的红包。', pinyin: 'Xīnnián kuàilè! Zhè shì nǐ de hóngbāo.', english: 'Happy New Year! This is your red envelope.' },
              { speaker: 'A', hanzi: '谢谢！饺子很好吃。', pinyin: 'Xièxie! Jiǎozi hěn hǎochī.', english: 'Thank you! The dumplings are delicious.' },
            ],
          },
          {
            type: 'taglish',
            body: 'Parang "Maligayang Bagong Taon" at ang aginaldo ng Pasko: ang 红包 ay ang "ang pao" na kilala rin sa Pilipinas. Ang "ang pao" ay galing sa Hokkien at kapareho ng ideya.',
          },
        ],
      },
      quiz('New Year greeting', 'Which wishes someone Happy New Year?', ['新年快乐', '生日快乐', '再见'], 0, '新年快乐 means Happy New Year.'),
      quiz('Mooncake', 'Which festival has mooncakes?', ['中秋节', '春节', '生日'], 0, '月饼 are eaten at the Mid-Autumn Festival.'),
      speak([
        { prompt: 'Greet someone.', hanzi: '新年快乐！恭喜发财！', pinyin: 'Xīnnián kuàilè! Gōngxǐ fācái!', english: 'Happy New Year! Wishing you prosperity!' },
        { prompt: 'Say thanks.', hanzi: '谢谢你的红包。', pinyin: 'Xièxie nǐ de hóngbāo.', english: 'Thank you for the red envelope.' },
      ]),
    ],
  },

  {
    id: 'pharmacy',
    module: 'daily',
    title: 'At the pharmacy',
    subtitle: 'A cold, a cough and how to take medicine',
    minutes: 8,
    goal: 'Describe a cold and understand how to take the medicine.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Pharmacy words',
        blocks: [
          { type: 'vocab', words: [W9.yaodian, W9.ganmao, W9.kesou, W4.fashao, W9.chiyao, W9.pian] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['我感冒了。', 'I have a cold.'],
              ['我咳嗽，也发烧。', 'I cough and I have a fever.'],
              ['每天三次，每次一片。', 'Three times a day, one tablet each time.'],
              ['饭后吃。', 'Take after meals.'],
            ],
          },
          {
            type: 'pro',
            body: 'Dosage follows a pattern: 每天 (x) 次，每次 (y) 片. Listen for the two numbers: how many times a day, and how many tablets each time. And always ask 饭前还是饭后？ ("before or after meals?").',
          },
          {
            type: 'remember',
            body: 'Link 药 to a word you know: 药店 is "medicine shop", 吃药 is "eat medicine" (Chinese says "eat" for medicine, not "take"). 感冒 literally is "feel a cold".',
          },
          grownUp('This is for general learning, not medical advice. In a real emergency, call 120 (ambulance in mainland China) or go to a hospital.'),
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Buying cold medicine',
        blocks: [
          { type: 'vocab', words: [W9.fanhou] },
          {
            type: 'dialogue',
            title: 'At the counter',
            lines: [
              { speaker: 'G', hanzi: '你好，我感冒了。', pinyin: 'Nǐ hǎo, wǒ gǎnmào le.', english: 'Hello, I have a cold.' },
              { speaker: 'S', hanzi: '你发烧吗？', pinyin: 'Nǐ fāshāo ma?', english: 'Do you have a fever?' },
              { speaker: 'G', hanzi: '没有，我只咳嗽。', pinyin: 'Méiyǒu, wǒ zhǐ késou.', english: 'No, I only cough.' },
              { speaker: 'S', hanzi: '每天三次，每次一片，饭后吃。', pinyin: 'Měitiān sān cì, měi cì yí piàn, fàn hòu chī.', english: 'Three times a day, one tablet each time, after meals.' },
            ],
          },
        ],
      },
      quiz('A cold', 'How do you say "I have a cold"?', ['我感冒了。', '我感冒吃。', '我是感冒。'], 0, '感冒了 means caught a cold.'),
      quiz('After meals', 'What does 饭后吃 mean?', ['take after meals', 'take before sleep', 'do not take'], 0, '饭后 means after meals.'),
      speak([
        { prompt: 'Describe it.', hanzi: '我感冒了，也咳嗽。', pinyin: 'Wǒ gǎnmào le, yě késou.', english: 'I have a cold and I cough.' },
        { prompt: 'Ask.', hanzi: '饭前吃还是饭后吃？', pinyin: 'Fàn qián chī háishi fàn hòu chī?', english: 'Before or after meals?' },
      ]),
    ],
  },

  // ═════════════════════════ WORK AND SERVICE ═════════════════════════
  {
    id: 'hotel2',
    module: 'work',
    title: 'Hotel requests and problems',
    subtitle: 'Air conditioning, hot water, towels and checking out',
    minutes: 9,
    goal: 'Make requests and report problems in a hotel, as a guest or as staff.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Room words',
        blocks: [
          { type: 'vocab', words: [W9.kongtiao, W9.reshui, W9.maojin, W9.dasao, W9.fangka, W9.tuifang] },
          {
            type: 'table',
            head: ['Say this', 'Who', 'Meaning'],
            rows: [
              ['空调坏了。', 'Guest', 'The air conditioning is broken.'],
              ['没有热水。', 'Guest', 'There is no hot water.'],
              ['请给我两条毛巾。', 'Guest', 'Please give me two towels.'],
              ['请打扫房间。', 'Guest', 'Please clean the room.'],
              ['我们马上派人来。', 'Staff', "We'll send someone right away."],
            ],
          },
          {
            type: 'pro',
            body: 'For a problem, give the item and then 坏了 (broken) or 没有 (there is none). Then add 请… for the request. For staff: 对不起 first, then 马上. Short and polite always beats long and perfect.',
          },
          {
            type: 'remember',
            body: 'Measure word for towels: 条 (long, thin things), as in 两条毛巾. And 退房 means "return the room": 退 is "give back", the same 退 in 退货.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'A problem and a fix',
        blocks: [
          {
            type: 'dialogue',
            title: 'At the front desk',
            lines: [
              { speaker: 'G', hanzi: '你好，我的房间没有热水。', pinyin: 'Nǐ hǎo, wǒ de fángjiān méiyǒu rèshuǐ.', english: 'Hello, there is no hot water in my room.' },
              { speaker: 'S', hanzi: '对不起！我们马上派人来。', pinyin: 'Duìbuqǐ! Wǒmen mǎshàng pài rén lái.', english: "Sorry! We'll send someone right away." },
              { speaker: 'G', hanzi: '谢谢。几点退房？', pinyin: 'Xièxie. Jǐ diǎn tuìfáng?', english: 'Thanks. What time is checkout?' },
              { speaker: 'S', hanzi: '中午十二点。', pinyin: 'Zhōngwǔ shí’èr diǎn.', english: 'Twelve noon.' },
            ],
          },
        ],
      },
      quiz('Broken', 'How do you say "The AC is broken"?', ['空调坏了。', '空调不好吃。', '空调去了。'], 0, '坏了 means broken.'),
      quiz('Check out', 'What does 几点退房 ask?', ['What time is checkout?', 'Which room?', 'How many nights?'], 0, '退房 is check out.'),
      speak([
        { prompt: 'Report a problem.', hanzi: '我的房间没有热水。', pinyin: 'Wǒ de fángjiān méiyǒu rèshuǐ.', english: 'There is no hot water in my room.' },
        { prompt: 'As staff.', hanzi: '对不起，我们马上来。', pinyin: 'Duìbuqǐ, wǒmen mǎshàng lái.', english: "Sorry, we're coming right away." },
      ]),
    ],
  },

  {
    id: 'office',
    module: 'work',
    title: 'In the office: meetings and email',
    subtitle: 'Boss, meeting, printing and sending a file',
    minutes: 9,
    goal: 'Talk about a meeting, ask a coworker for help and mention email.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Office words',
        blocks: [
          { type: 'vocab', words: [W9.bangongshi, W9.laoban, W9.kaihui, W9.huiyi, W9.fayoujian, W9.dayin] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['我们十点开会。', 'We have a meeting at ten.'],
              ['老板在办公室。', 'The boss is in the office.'],
              ['请发邮件给我。', 'Please email it to me.'],
              ['请帮我打印这个。', 'Please help me print this.'],
            ],
          },
          {
            type: 'pro',
            body: 'Time goes before the verb: 我们十点开会 ("we ten o\'clock have meeting"). To ask a favour, start with 请 and add 帮我 (help me): 请帮我打印. It sounds friendly and professional.',
          },
          {
            type: 'remember',
            body: '开会 literally "open a meeting". 开 means open or start, and shows up in 开始 (to begin), 开心 (happy) and 开门 (open the door). 会议 is the noun "meeting", 开会 is the action.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'A busy morning',
        blocks: [
          {
            type: 'dialogue',
            title: 'Two coworkers',
            lines: [
              { speaker: 'A', hanzi: '你知道几点开会吗？', pinyin: 'Nǐ zhīdào jǐ diǎn kāihuì ma?', english: 'Do you know what time the meeting is?' },
              { speaker: 'B', hanzi: '十点，老板已经在办公室了。', pinyin: 'Shí diǎn, lǎobǎn yǐjīng zài bàngōngshì le.', english: "Ten. The boss is already in the office." },
              { speaker: 'A', hanzi: '好的，请帮我打印这个。', pinyin: 'Hǎo de, qǐng bāng wǒ dǎyìn zhè ge.', english: 'Okay, please help me print this.' },
              { speaker: 'B', hanzi: '没问题。', pinyin: 'Méi wèntí.', english: 'No problem.' },
            ],
          },
        ],
      },
      quiz('A meeting', 'How do you say "We have a meeting at ten"?', ['我们十点开会。', '我们开会十点。', '开会我们点十。'], 0, 'Time goes before the verb.'),
      quiz('Email', 'What does 发邮件 mean?', ['send an email', 'print a file', 'open a meeting'], 0, '发邮件 means send an email.'),
      speak([
        { prompt: 'Say the meeting time.', hanzi: '我们十点开会。', pinyin: 'Wǒmen shí diǎn kāihuì.', english: 'We have a meeting at ten.' },
        { prompt: 'Ask for a favour.', hanzi: '请帮我打印这个。', pinyin: 'Qǐng bāng wǒ dǎyìn zhè ge.', english: 'Please help me print this.' },
      ]),
    ],
  },

  // ═════════════════════════ LITTLE LEARNERS ═════════════════════════
  {
    id: 'k-rhyme',
    module: 'kinder',
    track: 'kids',
    title: 'Rhyme: 一二三四五',
    subtitle: 'A counting rhyme every child in China knows',
    minutes: 6,
    goal: 'Say the counting rhyme and understand what it says.',
    pages: [
      {
        kicker: 'Sing',
        title: 'Count and climb',
        blocks: [
          {
            type: 'dialogue',
            title: 'The rhyme',
            lines: [
              { speaker: '♪', hanzi: '一二三四五，', pinyin: 'Yī èr sān sì wǔ,', english: 'One, two, three, four, five,' },
              { speaker: '♪', hanzi: '上山打老虎。', pinyin: 'Shàng shān dǎ lǎohǔ.', english: 'Up the mountain to catch a tiger.' },
              { speaker: '♪', hanzi: '老虎没打到，', pinyin: 'Lǎohǔ méi dǎ dào,', english: "The tiger wasn't caught," },
              { speaker: '♪', hanzi: '打到小松鼠。', pinyin: 'Dǎ dào xiǎo sōngshǔ.', english: 'But a little squirrel was.' },
            ],
          },
          { type: 'vocab', words: [W9.shangshan, W9.da_hit, W8.laohu, W9.songshu] },
          {
            type: 'pro',
            body: 'Clap the rhythm: five claps for 一二三四五. When we count aloud, 一 is always yī (tone 1). Say it with a strong, steady beat so the tones stay clear, even at speed.',
          },
          {
            type: 'remember',
            body: 'Act it out: count on your fingers, climb a mountain with your hands, hunt a tiger (roar!), and then wiggle a squirrel\'s tail. A rhyme with actions is a rhyme you remember for life.',
          },
          grownUp('Many Chinese adults still know this rhyme by heart. Say it together, then speed up each round. It teaches numbers, rhythm and the tiger word in one go.'),
        ],
      },
      quiz('Climb', 'What does 上山 mean?', ['go up the mountain', 'eat noodles', 'go home'], 0, '山 is mountain and 上 is up.'),
      quiz('Squirrel', 'Which one is the squirrel?', ['松鼠', '老虎', '小猫'], 0, '松鼠 sōngshǔ is squirrel.'),
      speak([
        { prompt: 'Clap along.', hanzi: '一二三四五，上山打老虎。', pinyin: 'Yī èr sān sì wǔ, shàng shān dǎ lǎohǔ.', english: 'One two three four five, up the mountain to catch a tiger.' },
        { prompt: 'Finish the rhyme.', hanzi: '老虎没打到，打到小松鼠。', pinyin: 'Lǎohǔ méi dǎ dào, dǎ dào xiǎo sōngshǔ.', english: 'No tiger, but a little squirrel.' },
      ]),
    ],
  },

  {
    id: 'k-vehicles',
    module: 'kinder',
    track: 'kids',
    title: 'Cars, trains and planes',
    subtitle: 'Vehicles and the sounds they make',
    minutes: 6,
    goal: 'Name six vehicles and make their sounds in Chinese.',
    pages: [
      {
        kicker: 'Look and listen',
        title: 'Things that go',
        blocks: [
          { type: 'vocab', words: [W9.qiche, W4.huoche, W4.feiji, W9.zixingche, W9.chuan_boat, W4.ditie] },
          {
            type: 'remember',
            body: 'Many have 车 (chē, "vehicle") in them: 汽车, 火车, 自行车. 火车 is "fire vehicle", because the first trains ran on fire. 飞机 is "flying machine". Look for 车 and you know it is a vehicle.',
          },
          {
            type: 'pro',
            body: 'Practise the sounds: 汽车 "dī dī" (the horn), 火车 "wū wū" (the whistle), 飞机 "wēng wēng" (the engine). Make the sound as you say the word, with big, silly voices.',
          },
          {
            type: 'play',
            title: "Let's play",
            body: 'Vehicle charades! One person makes a vehicle sound and moves like it. The other says the name in Chinese: 汽车! 火车! 飞机! Switch roles and go faster each round.',
          },
        ],
      },
      quiz('Train', 'Which one is a train?', ['火车', '汽车', '船'], 0, '火车 huǒchē is a train.'),
      quiz('Boat', 'Which one is a boat?', ['船', '飞机', '自行车'], 0, '船 chuán is a boat.'),
      speak([
        { prompt: 'Honk the horn!', hanzi: '汽车', pinyin: 'qìchē', english: 'car' },
        { prompt: 'Flap your wings!', hanzi: '飞机', pinyin: 'fēijī', english: 'airplane' },
      ]),
    ],
  },

  {
    id: 'k-clothes',
    module: 'kinder',
    track: 'kids',
    title: 'Getting dressed',
    subtitle: 'Hat, shirt, pants, shoes and socks',
    minutes: 6,
    goal: 'Name clothes and say what you are wearing.',
    pages: [
      {
        kicker: 'Look and listen',
        title: 'What shall I wear?',
        blocks: [
          { type: 'vocab', words: [W9.maozi, W6.yifu, W6.kuzi, W9.wazi, W6.xie, W9.chuan_wear] },
          {
            type: 'pro',
            body: 'Use 穿 (chuān) for clothes, socks and shoes: 穿衣服, 穿鞋. Use 戴 (dài) for hats: 戴帽子. Two verbs, because Chinese separates "put on your body" from "put on your head".',
          },
          {
            type: 'remember',
            body: 'Put on each item as you say it. 穿 sounds like "chwan": pretend you are pulling clothes on. 戴 sounds like "dye" with a falling tone: put a hat on your head.',
          },
          {
            type: 'play',
            title: "Let's play",
            body: 'Dress a teddy bear. The grown-up says: 穿裤子! 穿袜子! 戴帽子! The child puts each item on the bear. Then the child gives the commands.',
          },
          grownUp('Practise on the way out of the door each morning. Say the clothes names as your child dresses.'),
        ],
      },
      quiz('Hat', 'Which one is a hat?', ['帽子', '袜子', '裤子'], 0, '帽子 màozi is a hat.'),
      quiz('Socks', 'Which one is socks?', ['袜子', '鞋', '衣服'], 0, '袜子 wàzi is socks.'),
      speak([
        { prompt: 'Say what you wear.', hanzi: '我穿衣服。', pinyin: 'Wǒ chuān yīfu.', english: 'I am wearing clothes.' },
        { prompt: 'Put on a hat!', hanzi: '我戴帽子。', pinyin: 'Wǒ dài màozi.', english: 'I am wearing a hat.' },
      ]),
    ],
  },

  {
    id: 'e-manners',
    module: 'elementary',
    track: 'kids',
    title: 'Magic words',
    subtitle: 'Please, thank you, sorry and excuse me',
    minutes: 6,
    goal: 'Use the five magic words that make people smile.',
    pages: [
      {
        kicker: 'Learn',
        title: 'The five magic words',
        blocks: [
          {
            type: 'text',
            body: ['In every language, a few small words open doors. In Chinese they are 请, 谢谢, 对不起, 没关系 and 请问. Say them often and people will be glad to help you.'],
          },
          { type: 'vocab', words: [W.qing, W.xiexie, W.duibuqi, W.meiguanxi, W2.qingwen] },
          {
            type: 'pro',
            body: '请 is a short, high-low sound: "chǐng", with a low, dipping tone. Say it with a smile and a little bow of your head. Add 请 at the start of any request, and it sounds kind at once.',
          },
          {
            type: 'remember',
            body: 'Match each word to a hand movement. 请: open your palm, offering something. 谢谢: put your hands together. 对不起: put your hand on your heart. 没关系: wave your hand, "it\'s okay". 请问: raise one finger, "may I ask?"',
          },
        ],
      },
      {
        kicker: "Let's play",
        title: 'Magic words game',
        blocks: [
          {
            type: 'play',
            title: "Let's play",
            body: 'Pretend to be in a shop. The child asks for something: "请给我苹果". The grown-up gives it. The child says "谢谢". The grown-up says "不客气". Add a pretend bump: "对不起!" "没关系!" Give a sticker for every magic word.',
          },
          grownUp('Praise the magic words, not just the right answer. A child who says 请 and 谢谢 by habit is already speaking naturally.'),
        ],
      },
      quiz('Please', 'Which one means "please"?', ['请', '谢谢', '再见'], 0, '请 qǐng means please.'),
      quiz('Sorry', 'What do you say when you bump into someone?', ['对不起', '谢谢', '你好'], 0, '对不起 means sorry.'),
      speak([
        { prompt: 'Ask politely.', hanzi: '请给我水。', pinyin: 'Qǐng gěi wǒ shuǐ.', english: 'Please give me water.' },
        { prompt: 'Say thank you.', hanzi: '谢谢你！', pinyin: 'Xièxie nǐ!', english: 'Thank you!' },
      ]),
    ],
  },

  {
    id: 'e-home',
    module: 'elementary',
    track: 'kids',
    title: 'Rooms in my house',
    subtitle: 'Kitchen, bedroom, living room and garden',
    minutes: 7,
    goal: 'Name rooms in a house and say what you do in each.',
    pages: [
      {
        kicker: 'Learn',
        title: 'My house',
        blocks: [
          { type: 'vocab', words: [W9.fangzi, W9.keting, W9.chufang, W9.woshi, W3.xishoujian, W9.huayuan] },
          {
            type: 'remember',
            body: '卧室 is "lie-down room": 卧 means to lie down. 厨房 is "cook room". 客厅 is "guest hall": 客 means guest. Many room names tell you what you do in them.',
          },
          {
            type: 'pro',
            body: 'To say where you do something, put the place before the verb: 我在厨房吃饭 means "I eat in the kitchen". The place comes first, so say 在 + room + the action.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Where is everyone?',
        blocks: [
          { type: 'vocab', words: [W9.zuofan] },
          {
            type: 'dialogue',
            title: 'At home',
            lines: [
              { speaker: 'K', hanzi: '妈妈在哪里？', pinyin: 'Māma zài nǎlǐ?', english: 'Where is Mom?' },
              { speaker: 'D', hanzi: '妈妈在厨房做饭。', pinyin: 'Māma zài chúfáng zuò fàn.', english: 'Mom is cooking in the kitchen.' },
              { speaker: 'K', hanzi: '弟弟呢？', pinyin: 'Dìdi ne?', english: 'And little brother?' },
              { speaker: 'D', hanzi: '弟弟在客厅看书。', pinyin: 'Dìdi zài kètīng kàn shū.', english: 'He is reading in the living room.' },
            ],
          },
          {
            type: 'play',
            title: "Let's play",
            body: 'Walk around your home with the child. At each room stop and say its name in Chinese. Then play "where am I?": the grown-up goes to a room and the child guesses with "你在厨房吗?"',
          },
        ],
      },
      quiz('Kitchen', 'Which one is the kitchen?', ['厨房', '卧室', '花园'], 0, '厨房 chúfáng is the kitchen.'),
      quiz('Bedroom', 'Which one is the bedroom?', ['卧室', '客厅', '厨房'], 0, '卧室 wòshì is the bedroom.'),
      speak([
        { prompt: 'Say where Mom is.', hanzi: '妈妈在厨房。', pinyin: 'Māma zài chúfáng.', english: 'Mom is in the kitchen.' },
        { prompt: 'Say where you sleep.', hanzi: '我在卧室睡觉。', pinyin: 'Wǒ zài wòshì shuìjiào.', english: 'I sleep in the bedroom.' },
      ]),
    ],
  },

  {
    id: 'e-calendar',
    module: 'elementary',
    track: 'kids',
    title: 'Days and months',
    subtitle: 'What day is it today?',
    minutes: 7,
    goal: 'Say the days of the week, the months and today\'s date.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Days of the week',
        blocks: [
          { type: 'vocab', words: [W2.xingqi, W9.rili, W2.jintian, W2.mingtian, W2.zuotian] },
          {
            type: 'table',
            head: ['Day', 'Hanzi', 'Pinyin'],
            rows: [
              ['Monday', '星期一', 'xīngqī yī'],
              ['Tuesday', '星期二', 'xīngqī èr'],
              ['Wednesday', '星期三', 'xīngqī sān'],
              ['Thursday', '星期四', 'xīngqī sì'],
              ['Friday', '星期五', 'xīngqī wǔ'],
              ['Saturday', '星期六', 'xīngqī liù'],
              ['Sunday', '星期天', 'xīngqī tiān'],
            ],
          },
          {
            type: 'pro',
            body: 'Days are just the numbers 1 to 6 after 星期. Sunday is the exception: 星期天 or 星期日. Chant it: 星期一，星期二，星期三，一直到星期天.',
          },
          {
            type: 'remember',
            body: 'Hold a calendar and count the days with your finger: Monday is one, so 星期一. If you know numbers, you know the days. Months follow the same idea: 一月, 二月, 三月… up to 十二月.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'What day is it?',
        blocks: [
          {
            type: 'dialogue',
            title: 'Looking at the calendar',
            lines: [
              { speaker: 'K', hanzi: '今天星期几？', pinyin: 'Jīntiān xīngqī jǐ?', english: 'What day is it today?' },
              { speaker: 'M', hanzi: '今天星期三。', pinyin: 'Jīntiān xīngqī sān.', english: 'Today is Wednesday.' },
              { speaker: 'K', hanzi: '明天呢？', pinyin: 'Míngtiān ne?', english: 'And tomorrow?' },
              { speaker: 'M', hanzi: '明天星期四。', pinyin: 'Míngtiān xīngqī sì.', english: 'Tomorrow is Thursday.' },
            ],
          },
          {
            type: 'play',
            title: "Let's play",
            body: 'Every morning, ask: "今天星期几？" and let the child answer. Tick the day on a calendar. After a week, ask about "明天" and "昨天".',
          },
        ],
      },
      quiz('Friday', 'Which one is Friday?', ['星期五', '星期六', '星期四'], 0, '五 is five, so 星期五 is Friday.'),
      quiz('Sunday', 'Which one is Sunday?', ['星期天', '星期七', '星期日历'], 0, 'Sunday is 星期天 or 星期日.'),
      speak([
        { prompt: 'Ask the day.', hanzi: '今天星期几？', pinyin: 'Jīntiān xīngqī jǐ?', english: 'What day is it today?' },
        { prompt: 'Answer.', hanzi: '今天星期三。', pinyin: 'Jīntiān xīngqī sān.', english: 'Today is Wednesday.' },
      ]),
    ],
  },
];


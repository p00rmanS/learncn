import type { Lesson, Page } from './types';
import { W } from './words';
import { W2 } from './wordsMore';
import { W3 } from './wordsExtra';
import { W4 } from './wordsPart4';
import { W5 } from './wordsPart5';
import { W6 } from './wordsPart6';
import { W7 } from './wordsPart7';
import { W9 } from './wordsPart9';
import { W11 } from './wordsPart11';

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

export const PART10_LESSONS: Lesson[] = [
  // ═════════════════════════ RESTAURANT TOOLKIT ═════════════════════════
  {
    id: 'hotpot',
    module: 'food',
    title: 'Hot pot night',
    subtitle: 'Choose a broth, order the meat, make your sauce',
    minutes: 10,
    goal: 'Order a hot pot meal, choose a broth and ask for a dipping sauce.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Hot pot words',
        blocks: [
          { type: 'vocab', words: [W11.huoguo, W11.guodi, W11.yuanyang, W11.qingtang, W5.la] },
          {
            type: 'text',
            body: ['火锅 (huǒguō) is a shared pot of simmering broth at the table. You choose a 锅底 (broth), order raw ingredients, and cook them yourself by dipping them in. 涮 (shuàn) is the word for this dip-cooking.'],
          },
          {
            type: 'pro',
            body: 'If you cannot handle spice, ask for 鸳鸯锅 (yuānyāngguō): a pot split in two, one side spicy and one side clear. Everyone at the table can eat. Say 一个鸳鸯锅 and you are sorted.',
          },
          {
            type: 'remember',
            body: '鸳鸯 are mandarin ducks, a pair that stays together, so a split pot with two broths is a "duck pair" pot. And 涮 has 水 (water) on its side: you dip things in water.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'What to put in',
        blocks: [
          { type: 'vocab', words: [W11.yangrou, W11.niurou, W11.doufu, W7.qingcai, W11.zhanliao, W11.shuan] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['我们要一个鸳鸯锅。', 'We would like a split pot.'],
              ['再来一份羊肉。', 'One more portion of lamb.'],
              ['蘸料在哪里？', 'Where is the dipping sauce?'],
              ['不要太辣。', 'Not too spicy.'],
            ],
          },
          {
            type: 'taglish',
            body: 'Parang "shabu-shabu" o "samgyupsal": ikaw ang magluluto sa mesa. Ang 火锅 ay "pugon ng sabaw", ang 蘸料 ay "sawsawan", at ang 涮 ay ang paglubog ng karne sa sabaw.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'At the table',
        blocks: [
          {
            type: 'dialogue',
            title: 'Ordering hot pot',
            lines: [
              { speaker: 'S', hanzi: '欢迎光临！您要什么锅底？', pinyin: 'Huānyíng guānglín! Nín yào shénme guōdǐ?', english: 'Welcome! Which broth would you like?' },
              { speaker: 'G', hanzi: '我们要一个鸳鸯锅。', pinyin: 'Wǒmen yào yí ge yuānyāngguō.', english: 'We would like a split pot.' },
              { speaker: 'S', hanzi: '还要什么？', pinyin: 'Hái yào shénme?', english: 'What else would you like?' },
              { speaker: 'G', hanzi: '一份羊肉，一份牛肉，还有豆腐。', pinyin: 'Yí fèn yángròu, yí fèn niúròu, hái yǒu dòufu.', english: 'One portion of lamb, one of beef, and tofu.' },
            ],
          },
        ],
      },
      quiz('Split pot', 'Which pot is half spicy and half mild?', ['鸳鸯锅', '清汤锅', '辣锅'], 0, '鸳鸯锅 is the split pot.'),
      quiz('Sauce', 'What is 蘸料?', ['dipping sauce', 'soup base', 'tofu'], 0, '蘸 is to dip, and 料 is ingredients.'),
      speak([
        { prompt: 'Order the pot.', hanzi: '我们要一个鸳鸯锅。', pinyin: 'Wǒmen yào yí ge yuānyāngguō.', english: 'We would like a split pot.' },
        { prompt: 'Order meat.', hanzi: '再来一份羊肉。', pinyin: 'Zài lái yí fèn yángròu.', english: 'One more portion of lamb.' },
      ]),
    ],
  },

  {
    id: 'breakfast',
    module: 'food',
    title: 'Chinese breakfast',
    subtitle: 'Soy milk, buns, fried dough and congee',
    minutes: 8,
    goal: 'Order a typical Chinese breakfast.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Breakfast foods',
        blocks: [
          { type: 'vocab', words: [W11.doujiang, W11.youtiao, W11.baozi, W11.mantou, W11.zhou, W5.jidan] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['我要两个包子和一杯豆浆。', 'I would like two buns and a soy milk.'],
              ['咸豆浆还是甜豆浆？', 'Savoury or sweet soy milk?'],
              ['再来一根油条。', 'One more fried dough stick.'],
              ['这是什么馅儿的？', 'What is the filling?'],
            ],
          },
          {
            type: 'pro',
            body: 'Count buns with 个 and fried sticks with 根 (gēn, long thin things): 两个包子, 一根油条. And ask for the filling with 什么馅儿的？ (shénme xiànr de) when you are given a choice.',
          },
          {
            type: 'remember',
            body: '油条 is "oil strip": 油 (oil) + 条 (long strip, the same 条 as in 一条裤子). 豆浆 is "bean + thick liquid": soy milk. Name the parts and you can read the menu.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'At the breakfast stall',
        blocks: [
          { type: 'vocab', words: [W5.xian, W5.tian] },
          {
            type: 'dialogue',
            title: 'Ordering breakfast',
            lines: [
              { speaker: 'G', hanzi: '你好，我要两个包子。', pinyin: 'Nǐ hǎo, wǒ yào liǎng ge bāozi.', english: 'Hello, I would like two buns.' },
              { speaker: 'S', hanzi: '还要别的吗？', pinyin: 'Hái yào biéde ma?', english: 'Anything else?' },
              { speaker: 'G', hanzi: '一杯豆浆，要甜的。', pinyin: 'Yì bēi dòujiāng, yào tián de.', english: 'A soy milk, sweet please.' },
              { speaker: 'S', hanzi: '一共八块。', pinyin: 'Yígòng bā kuài.', english: '8 yuan in total.' },
            ],
          },
          {
            type: 'taglish',
            body: 'Parang "pandesal at kape" sa umaga natin: sa Tsina, ang 包子 at 豆浆 ang karaniwang almusal. Ang 甜 ay "matamis" at ang 咸 ay "maalat", at puwede kang pumili.',
          },
        ],
      },
      quiz('Soy milk', 'Which one is soy milk?', ['豆浆', '油条', '馒头'], 0, '豆浆 dòujiāng is soy milk.'),
      quiz('Sweet', 'How do you say "Sweet, please"?', ['要甜的', '要咸的', '要辣的'], 0, '甜 is sweet.'),
      speak([
        { prompt: 'Order buns.', hanzi: '我要两个包子。', pinyin: 'Wǒ yào liǎng ge bāozi.', english: 'I would like two buns.' },
        { prompt: 'Order a drink.', hanzi: '一杯豆浆，要甜的。', pinyin: 'Yì bēi dòujiāng, yào tián de.', english: 'A soy milk, sweet please.' },
      ]),
    ],
  },

  {
    id: 'booking',
    module: 'food',
    title: 'Booking a table',
    subtitle: 'Reserve by phone and give your name',
    minutes: 9,
    goal: 'Reserve a table by phone, as a guest or as the person taking the booking.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Booking words',
        blocks: [
          { type: 'vocab', words: [W11.yuding, W11.weizi, W11.baojian, W11.jinwan, W11.guixing, W11.xing_surname] },
          {
            type: 'table',
            head: ['Say this', 'Who', 'Meaning'],
            rows: [
              ['我想预订今晚七点的位子。', 'Guest', 'I would like to reserve a table for 7 tonight.'],
              ['几位？', 'Staff', 'How many people?'],
              ['请问您贵姓？', 'Staff', 'May I have your surname?'],
              ['我姓李。', 'Guest', 'My surname is Li.'],
              ['有包间吗？', 'Guest', 'Do you have a private room?'],
            ],
          },
          {
            type: 'pro',
            body: '贵姓 (guìxìng) is the polite way to ask a surname, literally "your honourable surname". Only use it to ask, never for yourself: for yourself say 我姓…. Staff in China often take a booking under the surname plus 先生 (sir) or 女士 (madam).',
          },
          {
            type: 'remember',
            body: 'The pattern for time is 今晚 + number + 点: 今晚七点 is "tonight at seven". You already have the parts: 今 (this, in 今天) + 晚 (evening, in 晚上).',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'On the phone',
        blocks: [
          {
            type: 'dialogue',
            title: 'Reserving a table',
            lines: [
              { speaker: 'G', hanzi: '喂，你好，我想预订今晚七点的位子。', pinyin: 'Wèi, nǐ hǎo, wǒ xiǎng yùdìng jīnwǎn qī diǎn de wèizi.', english: 'Hello, I would like to reserve a table for 7 tonight.' },
              { speaker: 'S', hanzi: '好的，几位？', pinyin: 'Hǎo de, jǐ wèi?', english: 'Certainly, how many people?' },
              { speaker: 'G', hanzi: '四位。', pinyin: 'Sì wèi.', english: 'Four.' },
              { speaker: 'S', hanzi: '请问您贵姓？', pinyin: 'Qǐngwèn nín guìxìng?', english: 'May I have your surname?' },
              { speaker: 'G', hanzi: '我姓李。', pinyin: 'Wǒ xìng Lǐ.', english: 'My surname is Li.' },
            ],
          },
        ],
      },
      quiz('Surname', 'How do you politely ask for someone\'s surname?', ['请问您贵姓？', '你叫什么？', '你是什么人？'], 0, '贵姓 is the polite way to ask.'),
      quiz('Reserve', 'Which means "to reserve"?', ['预订', '付款', '退房'], 0, '预订 yùdìng means reserve or book.'),
      speak([
        { prompt: 'Make a booking.', hanzi: '我想预订今晚七点的位子。', pinyin: 'Wǒ xiǎng yùdìng jīnwǎn qī diǎn de wèizi.', english: 'I would like to reserve a table for 7 tonight.' },
        { prompt: 'Give your surname.', hanzi: '我姓李。', pinyin: 'Wǒ xìng Lǐ.', english: 'My surname is Li.' },
      ]),
    ],
  },

  {
    id: 'tablemanners',
    module: 'food',
    title: 'Table manners and toasting',
    subtitle: 'Chopsticks, cheers and being a good guest',
    minutes: 8,
    goal: 'Use common table phrases and avoid a few chopstick mistakes.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Table words',
        blocks: [
          { type: 'vocab', words: [W11.kuaizi, W11.shaozi, W11.panzi, W11.ganbei, W11.manman, W11.chibao, W11.qingke] },
          {
            type: 'table',
            head: ['Say this', 'When'],
            rows: [
              ['干杯！', 'Cheers!'],
              ['慢慢吃。', 'The host: take your time eating.'],
              ['我吃饱了，谢谢。', "I'm full, thank you."],
              ['今天我请客。', "Today it's my treat."],
            ],
          },
          {
            type: 'tip',
            label: 'Etiquette',
            body: 'Never stick chopsticks upright in a bowl of rice: it looks like incense at a funeral. Rest them across the bowl or on the holder. And do not pass food from chopstick to chopstick; use a serving spoon.',
          },
          {
            type: 'pro',
            body: 'The host usually orders for the table and fills your cup. A polite guest says 谢谢 and lightly taps two fingers on the table. To refuse more food, say 我吃饱了 with a smile, as 不要 can feel blunt.',
          },
          {
            type: 'remember',
            body: '干杯 is "dry the cup": 干 means dry, 杯 means cup. So the toast means "empty your cup". 筷子 and 勺子 end in 子, the same light ending you saw in 桌子 and 椅子, so say the second syllable softly.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'At a dinner',
        blocks: [
          {
            type: 'dialogue',
            title: 'A toast',
            lines: [
              { speaker: 'H', hanzi: '今天我请客。慢慢吃！', pinyin: 'Jīntiān wǒ qǐngkè. Mànmàn chī!', english: "Today is my treat. Take your time!" },
              { speaker: 'G', hanzi: '谢谢你！干杯！', pinyin: 'Xièxie nǐ! Gānbēi!', english: 'Thank you! Cheers!' },
              { speaker: 'H', hanzi: '再吃一点吧。', pinyin: 'Zài chī yìdiǎn ba.', english: 'Have a little more.' },
              { speaker: 'G', hanzi: '不用了，我吃饱了。', pinyin: 'Búyòng le, wǒ chībǎo le.', english: "No, thanks, I'm full." },
            ],
          },
        ],
      },
      quiz('Cheers', 'What do you say when raising a glass?', ['干杯', '再见', '请坐'], 0, '干杯 means cheers.'),
      quiz('Full', 'How do you politely say "I\'m full"?', ['我吃饱了', '我不吃了饭', '我很饿'], 0, '吃饱了 means to have eaten enough.'),
      speak([
        { prompt: 'Raise your glass.', hanzi: '谢谢你！干杯！', pinyin: 'Xièxie nǐ! Gānbēi!', english: 'Thank you! Cheers!' },
        { prompt: 'Decline politely.', hanzi: '不用了，我吃饱了。', pinyin: 'Búyòng le, wǒ chībǎo le.', english: "No, thanks, I'm full." },
      ]),
    ],
  },

  // ═════════════════════════ EVERYDAY LIFE ═════════════════════════
  {
    id: 'hospital',
    module: 'daily',
    title: 'At the hospital',
    subtitle: 'Register, describe the problem, follow advice',
    minutes: 9,
    goal: 'Register at a hospital, explain what hurts and understand simple advice.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Hospital words',
        blocks: [
          { type: 'vocab', words: [W11.guahao, W11.kanbing, W11.bing, W4.yiyuan, W11.yateng, W11.xiuxi, W11.duohe] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['我想挂号。', 'I would like to register.'],
              ['哪里不舒服？', 'Where does it hurt? (What is wrong?)'],
              ['我牙疼。', 'I have a toothache.'],
              ['多休息，多喝水。', 'Rest more, drink plenty of water.'],
            ],
          },
          {
            type: 'pro',
            body: 'In large Chinese hospitals you 挂号 (register) first, then wait for your number, then see the doctor. Bring your passport. Ask 在哪里挂号？ ("where do I register?") at the entrance.',
          },
          {
            type: 'remember',
            body: '挂号 is "hang number": you hang your name on the list and get a number. 看病 is "look at the illness": you see a doctor. Both have the same four-tone ending 号 and 病, so they sound like a pair.',
          },
          grownUp('This is general language learning, not medical advice. In an emergency in mainland China call 120, or go straight to the emergency department (急诊).'),
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Seeing the doctor',
        blocks: [
          {
            type: 'dialogue',
            title: 'A consultation',
            lines: [
              { speaker: 'D', hanzi: '你哪里不舒服？', pinyin: 'Nǐ nǎlǐ bù shūfu?', english: 'What is troubling you?' },
              { speaker: 'P', hanzi: '我头疼，也发烧了。', pinyin: 'Wǒ tóu téng, yě fāshāo le.', english: 'I have a headache, and I have a fever.' },
              { speaker: 'D', hanzi: '多休息，多喝水。', pinyin: 'Duō xiūxi, duō hē shuǐ.', english: 'Rest more and drink plenty of water.' },
              { speaker: 'D', hanzi: '这个药，每天吃三次。', pinyin: 'Zhè ge yào, měitiān chī sān cì.', english: 'Take this medicine three times a day.' },
            ],
          },
        ],
      },
      quiz('Register', 'Which means "to register at a hospital"?', ['挂号', '看病', '休息'], 0, '挂号 is to register.'),
      quiz('Advice', 'What does 多喝水 mean?', ['drink plenty of water', 'eat more food', 'sleep early'], 0, '多 is more, 喝 is drink, 水 is water.'),
      speak([
        { prompt: 'At the desk.', hanzi: '我想挂号。', pinyin: 'Wǒ xiǎng guà hào.', english: 'I would like to register.' },
        { prompt: 'Describe it.', hanzi: '我头疼，也发烧了。', pinyin: 'Wǒ tóu téng, yě fāshāo le.', english: 'I have a headache and a fever.' },
      ]),
    ],
  },

  {
    id: 'online',
    module: 'daily',
    title: 'Shopping online',
    subtitle: 'In stock, free shipping, place an order, refund',
    minutes: 9,
    goal: 'Chat with a seller, place an order and ask for a refund.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Online shopping words',
        blocks: [
          { type: 'vocab', words: [W11.wanggou, W11.youhuo, W11.xiadan, W11.fukuan, W11.baoyou, W11.fahuo, W11.tuikuan] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['这个有货吗？', 'Is this in stock?'],
              ['包邮吗？', 'Is shipping free?'],
              ['我已经下单了。', 'I have already placed my order.'],
              ['什么时候发货？', 'When will you ship?'],
              ['我想退款。', 'I would like a refund.'],
            ],
          },
          {
            type: 'pro',
            body: 'Most Chinese online shops let you chat with the seller. Open with 你好，这个有货吗？ and end with 谢谢. Short, polite messages get the fastest replies, and many sellers answer in seconds.',
          },
          {
            type: 'remember',
            body: 'Break each word into a verb and its target: 下单 is "put down an order", 付款 is "pay money" (款 means sum of money), 发货 is "send goods", 退款 is "return money". Same 退 as in 退货 and 退房.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Chatting with the seller',
        blocks: [
          {
            type: 'dialogue',
            title: 'A chat',
            lines: [
              { speaker: 'B', hanzi: '你好，这个有货吗？', pinyin: 'Nǐ hǎo, zhè ge yǒu huò ma?', english: 'Hello, is this in stock?' },
              { speaker: 'S', hanzi: '有货，包邮。', pinyin: 'Yǒu huò, bāoyóu.', english: 'Yes, and shipping is free.' },
              { speaker: 'B', hanzi: '我已经付款了，什么时候发货？', pinyin: 'Wǒ yǐjīng fùkuǎn le, shénme shíhou fāhuò?', english: 'I have already paid. When will you ship?' },
              { speaker: 'S', hanzi: '今天就发货。', pinyin: 'Jīntiān jiù fāhuò.', english: 'We will ship today.' },
            ],
          },
        ],
      },
      quiz('Stock', 'How do you ask "Is it in stock?"', ['有货吗？', '包邮吗？', '退款吗？'], 0, '有货 means in stock.'),
      quiz('Refund', 'What does 我想退款 mean?', ['I would like a refund', 'I would like to order', 'I would like to ship'], 0, '退款 is a refund.'),
      speak([
        { prompt: 'Ask the seller.', hanzi: '你好，这个有货吗？', pinyin: 'Nǐ hǎo, zhè ge yǒu huò ma?', english: 'Hello, is this in stock?' },
        { prompt: 'Ask about shipping.', hanzi: '什么时候发货？', pinyin: 'Shénme shíhou fāhuò?', english: 'When will you ship?' },
      ]),
    ],
  },

  // ═════════════════════════ WORK AND SERVICE ═════════════════════════
  {
    id: 'interview',
    module: 'work',
    title: 'A job interview',
    subtitle: 'Introduce yourself, talk about experience, ask about the job',
    minutes: 10,
    goal: 'Introduce yourself in an interview and talk about experience and languages.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Interview words',
        blocks: [
          { type: 'vocab', words: [W11.mianshi, W11.yingpin, W11.jianli, W11.jingyan, W11.jieshao, W11.zhong] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['我来应聘服务员。', "I'm here to apply for the waiter job."],
              ['请介绍一下自己。', 'Please introduce yourself.'],
              ['我有两年经验。', 'I have two years of experience.'],
              ['我会说三种语言。', 'I can speak three languages.'],
              ['这是我的简历。', 'This is my resume.'],
            ],
          },
          {
            type: 'pro',
            body: 'Answer 请介绍一下自己 in three short steps: name and country, experience, then why this job. For example: 我叫…，我是菲律宾人，我有两年经验，我很喜欢这个工作. Short and clear beats long and perfect.',
          },
          {
            type: 'remember',
            body: '种 is the measure word for "kinds" (a kind of language, a kind of food): 三种语言. And 经验 is "pass-through test": you have been through the test of experience. 简历 is "simple record", your resume.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'In the interview room',
        blocks: [
          { type: 'vocab', words: [W11.gongzi, W11.qingjia] },
          {
            type: 'dialogue',
            title: 'The interview',
            lines: [
              { speaker: 'M', hanzi: '你好，请介绍一下自己。', pinyin: 'Nǐ hǎo, qǐng jièshào yíxià zìjǐ.', english: 'Hello, please introduce yourself.' },
              { speaker: 'A', hanzi: '我叫Ana，我是菲律宾人，我有两年经验。', pinyin: 'Wǒ jiào Ana, wǒ shì Fēilǜbīn rén, wǒ yǒu liǎng nián jīngyàn.', english: 'I am Ana, I am Filipino, and I have two years of experience.' },
              { speaker: 'M', hanzi: '你会说什么语言？', pinyin: 'Nǐ huì shuō shénme yǔyán?', english: 'Which languages do you speak?' },
              { speaker: 'A', hanzi: '我会说三种语言：英语、他加禄语和一点中文。', pinyin: 'Wǒ huì shuō sān zhǒng yǔyán: Yīngyǔ, Tǎjiālùyǔ hé yìdiǎn Zhōngwén.', english: 'I speak three languages: English, Tagalog and a little Chinese.' },
            ],
          },
        ],
      },
      quiz('Experience', 'How do you say "I have two years of experience"?', ['我有两年经验', '我是两年经验', '我两年有经验是'], 0, '有 + number + 年 + 经验.'),
      quiz('Apply', 'Which means "to apply for a job"?', ['应聘', '请假', '加班'], 0, '应聘 means to apply.'),
      speak([
        { prompt: 'Introduce yourself.', hanzi: '我是菲律宾人，我有两年经验。', pinyin: 'Wǒ shì Fēilǜbīn rén, wǒ yǒu liǎng nián jīngyàn.', english: 'I am Filipino, and I have two years of experience.' },
        { prompt: 'Hand over your resume.', hanzi: '这是我的简历。', pinyin: 'Zhè shì wǒ de jiǎnlì.', english: 'This is my resume.' },
      ]),
    ],
  },

  {
    id: 'service2',
    module: 'work',
    title: 'Handling a complaint',
    subtitle: 'Apologise, solve, and thank the guest',
    minutes: 9,
    goal: 'Apologise sincerely, offer to fix a problem and close the conversation politely.',
    pages: [
      {
        kicker: 'Learn',
        title: 'The three-step reply',
        blocks: [
          { type: 'vocab', words: [W11.baoqian, W11.tianmafan, W11.chuli, W5.mashang, W5.huan, W11.tuikuan] },
          {
            type: 'table',
            head: ['Step', 'Say this', 'Meaning'],
            rows: [
              ['1. Apologise', '非常抱歉，给您添麻烦了。', "I'm very sorry for the trouble."],
              ['2. Solve', '我们马上处理，请稍等。', "We'll handle it right away, one moment."],
              ['3. Close', '谢谢您的理解。', 'Thank you for your understanding.'],
            ],
          },
          {
            type: 'pro',
            body: 'Always follow the order: sorry, fix, thanks. 抱歉 is stronger than 对不起 and fits service settings. Use 您 (not 你) and keep your voice calm. A guest who feels heard often calms down before you finish the fix.',
          },
          {
            type: 'remember',
            body: 'Say the three steps as a chant: 抱歉 → 处理 → 谢谢. Sorry, handle, thank. 添麻烦 literally means "add trouble": you apologise for the trouble you added to their day.',
          },
          {
            type: 'taglish',
            body: 'Parang "pasensya na po, aayusin na namin, salamat po sa pang-unawa". Ang tatlong hakbang ay palaging pareho: humingi ng paumanhin, ayusin, magpasalamat. Gamitin ang 您 para sa paggalang.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'A wrong order',
        blocks: [
          { type: 'vocab', words: [W11.lijie] },
          {
            type: 'dialogue',
            title: 'Fixing a mistake',
            lines: [
              { speaker: 'G', hanzi: '不好意思，这不是我点的菜。', pinyin: 'Bù hǎoyìsi, zhè bú shì wǒ diǎn de cài.', english: "Excuse me, this isn't the dish I ordered." },
              { speaker: 'S', hanzi: '非常抱歉，给您添麻烦了。', pinyin: 'Fēicháng bàoqiàn, gěi nín tiān máfan le.', english: "I'm very sorry for the trouble." },
              { speaker: 'S', hanzi: '我们马上给您换。', pinyin: 'Wǒmen mǎshàng gěi nín huàn.', english: "We'll swap it for you right away." },
              { speaker: 'G', hanzi: '没关系，谢谢。', pinyin: 'Méi guānxi, xièxie.', english: "It's okay, thank you." },
            ],
          },
        ],
      },
      quiz('Apology', 'Which is the stronger, service-style apology?', ['非常抱歉', '你好', '再见'], 0, '抱歉 is a formal apology.'),
      quiz('Order', 'What is the right order of a complaint reply?', ['Apologise, fix, thank', 'Thank, fix, apologise', 'Fix, thank, apologise'], 0, 'Sorry, solve, thanks.'),
      speak([
        { prompt: 'Apologise.', hanzi: '非常抱歉，给您添麻烦了。', pinyin: 'Fēicháng bàoqiàn, gěi nín tiān máfan le.', english: "I'm very sorry for the trouble." },
        { prompt: 'Offer a fix.', hanzi: '我们马上给您换。', pinyin: 'Wǒmen mǎshàng gěi nín huàn.', english: "We'll swap it for you right away." },
      ]),
    ],
  },

  // ═════════════════════════ LITTLE LEARNERS ═════════════════════════
  {
    id: 'k-toys',
    module: 'kinder',
    track: 'kids',
    title: 'My toys',
    subtitle: 'Balls, blocks, dolls, and sharing',
    minutes: 6,
    goal: 'Name toys and say "Let\'s play together" and "I\'ll share".',
    pages: [
      {
        kicker: 'Look and listen',
        title: 'Toy box',
        blocks: [
          { type: 'vocab', words: [W11.wanju, W11.qiu, W11.jimu, W11.wawa, W9.qiche] },
          {
            type: 'remember',
            body: 'Hold each toy as you say it. 球 is round like a ball (and the character has a "ball" shape). 积木 means "stack wood": 积 is to pile up, 木 is wood. Build a tower while you say it!',
          },
          {
            type: 'pro',
            body: 'The second syllable of 娃娃 is light: wá-wa. Double words like 娃娃 and 星星 are friendly and small-sounding. They come up a lot in children\'s speech: 宝宝 (baby), 球球 (little ball).',
          },
          {
            type: 'play',
            title: "Let's play",
            body: 'Hide a toy in a box. The child feels it and guesses in Chinese: "是球吗?" ("is it a ball?"). Reveal, then say together: "对!" or "不是!" Swap roles.',
          },
        ],
      },
      {
        kicker: 'Look and listen',
        title: 'Sharing',
        blocks: [
          { type: 'vocab', words: [W11.fenxiang] },
          {
            type: 'dialogue',
            title: 'Playing together',
            lines: [
              { speaker: 'A', hanzi: '我们一起玩吧！', pinyin: 'Wǒmen yìqǐ wán ba!', english: "Let's play together!" },
              { speaker: 'B', hanzi: '好啊！这是我的积木。', pinyin: 'Hǎo a! Zhè shì wǒ de jīmù.', english: 'Okay! These are my blocks.' },
              { speaker: 'A', hanzi: '我和你分享我的球。', pinyin: 'Wǒ hé nǐ fēnxiǎng wǒ de qiú.', english: "I'll share my ball with you." },
            ],
          },
          grownUp('Sharing is a habit you can name in Chinese: "我们分享!" Praise it when you see it.'),
        ],
      },
      quiz('Ball', 'Which one is a ball?', ['球', '娃娃', '积木'], 0, '球 qiú is a ball.'),
      quiz('Doll', 'Which one is a doll?', ['娃娃', '汽车', '玩具'], 0, '娃娃 wáwa is a doll.'),
      speak([
        { prompt: 'Invite a friend.', hanzi: '我们一起玩吧！', pinyin: 'Wǒmen yìqǐ wán ba!', english: "Let's play together!" },
        { prompt: 'Say what you have.', hanzi: '这是我的球。', pinyin: 'Zhè shì wǒ de qiú.', english: 'This is my ball.' },
      ]),
    ],
  },

  {
    id: 'e-park',
    module: 'elementary',
    track: 'kids',
    title: 'At the park',
    subtitle: 'Slide, swing, jump and run',
    minutes: 7,
    goal: 'Name things at the park and say what you like to do there.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Park words',
        blocks: [
          { type: 'vocab', words: [W11.gongyuan, W11.huati, W11.qiuqian, W11.tiao, W4.paobu] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['我们去公园玩。', "Let's go to the park to play."],
              ['我喜欢玩滑梯。', 'I like to play on the slide.'],
              ['我会跳，也会跑。', 'I can jump and I can run.'],
              ['秋千很好玩！', 'The swing is fun!'],
            ],
          },
          {
            type: 'pro',
            body: 'Say 在公园玩 for "play at the park": the place goes before the verb. And 玩 can take things: 玩滑梯 (play on the slide), 玩球 (play with a ball). One verb, many uses.',
          },
          {
            type: 'remember',
            body: '滑梯 is "slip ladder": 滑 means to slide and 梯 means ladder. 秋千 has 秋 (autumn) because swinging used to be a festival game in autumn. A fun fact makes the word stay.',
          },
        ],
      },
      {
        kicker: "Let's play",
        title: 'Park game',
        blocks: [
          {
            type: 'play',
            title: "Let's play",
            body: 'Simon says at the park. The grown-up says: "跳!" (jump!), "跑!" (run!), "玩滑梯!" The child acts it out. Then the child gives the commands.',
          },
          {
            type: 'dialogue',
            title: 'At the park',
            lines: [
              { speaker: 'A', hanzi: '我们去公园玩吧！', pinyin: 'Wǒmen qù gōngyuán wán ba!', english: "Let's go to the park!" },
              { speaker: 'B', hanzi: '好！我喜欢玩滑梯。', pinyin: 'Hǎo! Wǒ xǐhuan wán huátī.', english: 'Okay! I like the slide.' },
              { speaker: 'A', hanzi: '我喜欢玩秋千。', pinyin: 'Wǒ xǐhuan wán qiūqiān.', english: 'I like the swing.' },
            ],
          },
          grownUp('Say the Chinese word at the park as it happens: "跳!" when your child jumps, "滑!" on the slide. Real moments teach faster than flashcards.'),
        ],
      },
      quiz('Slide', 'Which one is a slide?', ['滑梯', '秋千', '公园'], 0, '滑梯 huátī is a slide.'),
      quiz('Jump', 'What does 跳 mean?', ['to jump', 'to run', 'to swim'], 0, '跳 tiào is to jump.'),
      speak([
        { prompt: 'Suggest the park.', hanzi: '我们去公园玩吧！', pinyin: 'Wǒmen qù gōngyuán wán ba!', english: "Let's go to the park!" },
        { prompt: 'Say your favourite.', hanzi: '我喜欢玩滑梯。', pinyin: 'Wǒ xǐhuan wán huátī.', english: 'I like the slide.' },
      ]),
    ],
  },
];

/* Reserved so future lessons here need no import edits. */
void W;
void W2;
void W3;
void W6;

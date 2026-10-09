import type { Lesson } from './types';
import { W } from './words';
import { W2 } from './wordsMore';
import { W3 } from './wordsExtra';
import { W4 } from './wordsPart4';
import { W5 } from './wordsPart5';
import { W6 } from './wordsPart6';

export const PART6_LESSONS: Lesson[] = [
  // ═════════════════════════ CORE PATTERNS ═════════════════════════
  {
    id: 'compare',
    module: 'patterns',
    title: 'Comparing things with 比',
    subtitle: 'Taller than, cheaper than, the same as',
    minutes: 9,
    goal: 'Compare two things using 比, 更, 没有 and 一样.',
    pages: [
      {
        kicker: 'Learn',
        title: 'A 比 B + adjective',
        blocks: [
          { type: 'vocab', words: [W6.bi, W6.gao, W6.ai, W6.geng] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['我比你高。', 'I am taller than you.'],
              ['这个比那个贵。', 'This one is more expensive than that one.'],
              ['这个比那个贵一点。', 'This one is a little more expensive.'],
              ['这个更好。', 'This one is even better.'],
            ],
          },
          {
            type: 'pro',
            body: 'Do not use 很 with 比. Say 我比你高, never 我比你很高. For "a little" or "a lot", add the amount after the adjective: 高一点 or 高很多.',
          },
          {
            type: 'taglish',
            body: 'Madali ito: A 比 B + adjective ay "mas ___ si A kaysa kay B". Ang 比 ay ang "kaysa". Dagdagan lang ng 一点 para sa "medyo".',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'Not as… and the same',
        blocks: [
          { type: 'vocab', words: [W6.yiyang, W6.gen] },
          {
            type: 'table',
            head: ['Pattern', 'Example', 'Meaning'],
            rows: [
              ['A 没有 B + adjective', '我没有他高。', 'I am not as tall as him.'],
              ['A 跟 B 一样 + adjective', '这个跟那个一样贵。', 'This is as expensive as that.'],
            ],
          },
          {
            type: 'remember',
            body: '比 is for "more than". To say "not as…", swap it for 没有: 我没有他高. To say "equal", use 一样 ("one kind"): 跟…一样. Three tools: 比 more, 没有 less, 一样 equal.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'At the market',
        blocks: [
          {
            type: 'dialogue',
            title: 'Which one?',
            lines: [
              { speaker: 'A', hanzi: '这个比那个贵吗？', pinyin: 'Zhè ge bǐ nà ge guì ma?', english: 'Is this more expensive than that one?' },
              { speaker: 'B', hanzi: '对，这个贵一点。', pinyin: 'Duì, zhè ge guì yìdiǎn.', english: 'Yes, this one is a little more expensive.' },
              { speaker: 'A', hanzi: '那个便宜，但是没有这个好。', pinyin: 'Nà ge piányi, dànshì méiyǒu zhè ge hǎo.', english: "That one is cheap, but it's not as good as this one." },
            ],
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Taller than',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you say "I am taller than you"?',
            options: ['我比你高。', '我比你很高。', '我很比你高。'],
            answer: 0,
            explain: 'Never use 很 with 比.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Not as good',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you say "That one is not as good as this one"?',
            options: ['那个没有这个好。', '那个比这个不好。', '那个不比这个很好。'],
            answer: 0,
            explain: 'A 没有 B + adjective says "A is not as … as B".',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'The same',
        blocks: [
          {
            type: 'quiz',
            question: 'Which means "These two are the same price"?',
            options: ['这个跟那个一样贵。', '这个比那个一样贵。', '这个没有那个一样。'],
            answer: 0,
            explain: 'A 跟 B 一样 + adjective.',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Compare.', hanzi: '这个比那个贵一点。', pinyin: 'Zhè ge bǐ nà ge guì yìdiǎn.', english: 'This one is a bit pricier.' },
          { type: 'speak', prompt: 'Say not as good.', hanzi: '那个没有这个好。', pinyin: 'Nà ge méiyǒu zhè ge hǎo.', english: "That one isn't as good as this." },
        ],
      },
    ],
  },

  {
    id: 'experience',
    module: 'patterns',
    title: 'Have you ever…? 过',
    subtitle: 'Talk about places you have been and things you have tried',
    minutes: 9,
    goal: 'Say and ask whether you have ever done something.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Verb + 过',
        blocks: [
          { type: 'vocab', words: [W6.guo_exp, W6.beijing, W6.shanghai] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['我去过北京。', 'I have been to Beijing.'],
              ['你去过上海吗？', 'Have you ever been to Shanghai?'],
              ['我没去过。', "I haven't (been there)."],
              ['你吃过这个吗？', 'Have you ever tried this?'],
            ],
          },
          {
            type: 'taglish',
            body: 'Parang "nakapunta na ako" o "nakakain na ako ng ___" sa Tagalog. Ang 过 ay ang "na-" na nagsasabing minsan nang nangyari sa buhay mo.',
          },
          {
            type: 'remember',
            body: '过 means "pass through". 我去过北京 = "I have passed through Beijing". So 过 is about life experience, and the negative uses 没 + verb + 过.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: '过 or 了?',
        blocks: [
          {
            type: 'pro',
            body: '了 says an action finished (我吃了, "I ate"). 过 says you have that experience at some point in life (我吃过, "I have eaten it before"). If you could add "ever" in English, use 过.',
          },
          {
            type: 'dialogue',
            title: 'Travel talk',
            lines: [
              { speaker: 'A', hanzi: '你去过中国吗？', pinyin: 'Nǐ qù guo Zhōngguó ma?', english: 'Have you ever been to China?' },
              { speaker: 'B', hanzi: '我去过北京，没去过上海。', pinyin: 'Wǒ qù guo Běijīng, méi qù guo Shànghǎi.', english: "I've been to Beijing, but not Shanghai." },
              { speaker: 'A', hanzi: '你吃过北京菜吗？', pinyin: 'Nǐ chī guo Běijīng cài ma?', english: 'Have you tried Beijing food?' },
              { speaker: 'B', hanzi: '吃过，很好吃。', pinyin: 'Chī guo, hěn hǎochī.', english: "Yes, it's delicious." },
            ],
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Been there',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you say "I have been to Beijing"?',
            options: ['我去过北京。', '我去了过北京。', '我过去北京。'],
            answer: 0,
            explain: 'Verb + 过 shows experience.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Never been',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you say "I have never been to Shanghai"?',
            options: ['我没去过上海。', '我不去过上海。', '我没去了上海。'],
            answer: 0,
            explain: 'Negative: 没 + verb + 过.',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Ask about experience.', hanzi: '你去过中国吗？', pinyin: 'Nǐ qù guo Zhōngguó ma?', english: 'Have you ever been to China?' },
          { type: 'speak', prompt: 'Answer.', hanzi: '我没去过，我想去。', pinyin: 'Wǒ méi qù guo, wǒ xiǎng qù.', english: "I haven't, I'd like to." },
        ],
      },
    ],
  },

  {
    id: 'because',
    module: 'patterns',
    title: 'Because, so, but, if',
    subtitle: 'Link your ideas into longer sentences',
    minutes: 10,
    goal: 'Give reasons and conditions with 因为, 所以, 但是 and 如果.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Four linking words',
        blocks: [
          { type: 'vocab', words: [W6.yinwei, W6.suoyi, W6.danshi, W6.ruguo, W6.jiu] },
          {
            type: 'table',
            head: ['Pattern', 'Example', 'Meaning'],
            rows: [
              ['因为…，所以…', '因为我很忙，所以我不去。', "Because I'm busy, I'm not going."],
              ['…，但是…', '我想去，但是我没有钱。', "I'd like to go, but I have no money."],
              ['如果…，就…', '如果下雨，我就在家。', "If it rains, I'll stay home."],
            ],
          },
          {
            type: 'taglish',
            body: 'Pareho sa Tagalog: "Dahil abala ako, kaya hindi ako pupunta." Ang 因为 ay "dahil" at ang 所以 ay "kaya". Sa Mandarin, madalas na magkasama ang dalawa, hindi tulad ng English.',
          },
          {
            type: 'pro',
            body: 'Unlike English, Chinese often uses both halves: 因为…所以…. You can drop one, especially in speech, but using both is always correct and clear. Same with 如果…就….',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Giving a reason',
        blocks: [
          {
            type: 'dialogue',
            title: 'Declining an invitation',
            lines: [
              { speaker: 'A', hanzi: '你明天来吗？', pinyin: 'Nǐ míngtiān lái ma?', english: 'Are you coming tomorrow?' },
              { speaker: 'B', hanzi: '我想去，但是我很忙。', pinyin: 'Wǒ xiǎng qù, dànshì wǒ hěn máng.', english: "I'd like to, but I'm busy." },
              { speaker: 'A', hanzi: '如果你不忙，就来吧。', pinyin: 'Rúguǒ nǐ bù máng, jiù lái ba.', english: 'If you are not busy, then come.' },
              { speaker: 'B', hanzi: '好，谢谢你。', pinyin: 'Hǎo, xièxie nǐ.', english: 'Okay, thank you.' },
            ],
          },
          {
            type: 'remember',
            body: '就 is the "then" that answers 如果. Picture a seesaw: 如果 on one side (the condition), 就 on the other (the result). If you have one, add the other.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Because',
        blocks: [
          {
            type: 'quiz',
            question: 'Which means "Because I am tired, I am not going"?',
            options: ['因为我累，所以我不去。', '所以我累，因为我不去。', '因为我累，但是我不去。'],
            answer: 0,
            explain: '因为 gives the reason, 所以 gives the result.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'But',
        blocks: [
          {
            type: 'quiz',
            question: 'Which word means "but"?',
            options: ['但是', '所以', '如果'],
            answer: 0,
            explain: '但是 (dànshì) means "but".',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'If',
        blocks: [
          {
            type: 'quiz',
            question: 'Complete: 如果明天下雨，我___在家。',
            options: ['就', '但是', '因为'],
            answer: 0,
            explain: '如果…就… means "if…then…".',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Give a reason.', hanzi: '因为我很忙，所以我不去。', pinyin: 'Yīnwèi wǒ hěn máng, suǒyǐ wǒ bú qù.', english: "Because I'm busy, I'm not going." },
          { type: 'speak', prompt: 'Say if…then.', hanzi: '如果下雨，我就在家。', pinyin: 'Rúguǒ xià yǔ, wǒ jiù zài jiā.', english: "If it rains, I'll stay home." },
        ],
      },
    ],
  },

  {
    id: 'timing',
    module: 'patterns',
    title: 'Already, just, about to, not yet',
    subtitle: 'Say when things happen',
    minutes: 9,
    goal: 'Use 已经, 刚, 快…了, 还没 and 正在 to describe timing.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Five timing words',
        blocks: [
          { type: 'vocab', words: [W6.yijing, W6.gang, W5.kuai4, W6.zhengzai, W5.hai2] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['我已经吃了。', 'I have already eaten.'],
              ['我刚到。', 'I just arrived.'],
              ['快下雨了。', "It's about to rain."],
              ['我还没吃饭。', "I haven't eaten yet."],
              ['我正在吃饭。', 'I am in the middle of eating.'],
            ],
          },
          {
            type: 'pro',
            body: 'All these words go before the verb, right after the subject. 我已经吃了, 我刚到, 我正在吃. Same rule as 也 and 都.',
          },
          {
            type: 'taglish',
            body: 'Parang "na" (已经), "kakarating lang" (刚), "malapit na" (快…了), "hindi pa" (还没), at "ngayon ay" (正在). Mas madaling tandaan kapag iniuugnay mo sa Tagalog.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Where are you?',
        blocks: [
          {
            type: 'dialogue',
            title: 'On the phone',
            lines: [
              { speaker: 'A', hanzi: '你在哪里？', pinyin: 'Nǐ zài nǎlǐ?', english: 'Where are you?' },
              { speaker: 'B', hanzi: '我刚下班，快到了。', pinyin: 'Wǒ gāng xiàbān, kuài dào le.', english: "I just got off work, almost there." },
              { speaker: 'A', hanzi: '我已经到了，我正在等你。', pinyin: 'Wǒ yǐjīng dào le, wǒ zhèngzài děng nǐ.', english: "I'm already here, I'm waiting for you." },
              { speaker: 'B', hanzi: '对不起，我还没吃饭。', pinyin: 'Duìbuqǐ, wǒ hái méi chī fàn.', english: "Sorry, I haven't eaten yet." },
            ],
          },
          {
            type: 'remember',
            body: 'Pair them as opposites. 已经…了 = done. 还没 = not yet. 快…了 = nearly. 刚 = just now. 正在 = in the middle. Five points on one timeline.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Already',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you say "I have already eaten"?',
            options: ['我已经吃了。', '我吃已经了。', '已经我吃了。'],
            answer: 0,
            explain: '已经 goes before the verb.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'About to',
        blocks: [
          {
            type: 'quiz',
            question: 'Which means "It is about to rain"?',
            options: ['快下雨了。', '已经下雨了。', '还没下雨。'],
            answer: 0,
            explain: '快…了 means "about to".',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Not yet',
        blocks: [
          {
            type: 'quiz',
            question: 'Which means "I haven\'t eaten yet"?',
            options: ['我还没吃饭。', '我不吃饭了。', '我没有吃饭了。'],
            answer: 0,
            explain: '还没 + verb means "not yet".',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Say you just arrived.', hanzi: '我刚到。', pinyin: 'Wǒ gāng dào.', english: 'I just arrived.' },
          { type: 'speak', prompt: 'Say what you are doing.', hanzi: '我正在等你。', pinyin: 'Wǒ zhèngzài děng nǐ.', english: "I'm waiting for you." },
        ],
      },
    ],
  },

  // ═════════════════════════ EVERYDAY LIFE ═════════════════════════
  {
    id: 'clothes',
    module: 'daily',
    title: 'Shopping for clothes',
    subtitle: 'Try things on, ask for another size, say it fits',
    minutes: 10,
    goal: 'Ask to try something on, ask for another size, and say whether it fits.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Clothes and measure words',
        blocks: [
          { type: 'vocab', words: [W6.yifu, W6.kuzi, W6.xie, W6.jian, W6.tiao, W6.shuang] },
          {
            type: 'text',
            body: ['Each kind of clothing has its own measure word: 一件衣服 (a top), 一条裤子 (a pair of pants), 一双鞋 (a pair of shoes).'],
          },
          {
            type: 'remember',
            body: '件 is for things you wear on top (tops, jackets). 条 is for long things (pants, scarves). 双 is for pairs (shoes, socks). Pair them in your head: 件-top, 条-long, 双-pair.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'Try it on',
        blocks: [
          { type: 'vocab', words: [W6.shi_try, W6.yixia, W6.heshi, W6.shiyijian] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['我可以试一下吗？', 'May I try it on?'],
              ['有大一点的吗？', 'Do you have a bigger one?'],
              ['有小一点的吗？', 'Do you have a smaller one?'],
              ['太小了。', "It's too small."],
              ['很合适！我要这件。', "It fits well! I'll take this one."],
            ],
          },
          {
            type: 'pro',
            body: '大一点的 means "a slightly bigger one". 的 stands for the noun you left out, so you can ask 有大一点的吗？ without repeating "clothes". Swap 大 for 小, 长 (long) or 短 (short).',
          },
          {
            type: 'taglish',
            body: 'Ito ang "may mas malaki ba?" mo: 有大一点的吗? Hindi mo kailangang sabihin ang pangalan ng damit. Ituro mo lang at gamitin ang 大一点 o 小一点.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'In the shop',
        blocks: [
          {
            type: 'dialogue',
            title: 'Trying a shirt',
            lines: [
              { speaker: 'G', hanzi: '你好，这件衣服多少钱？', pinyin: 'Nǐ hǎo, zhè jiàn yīfu duōshao qián?', english: 'Hello, how much is this top?' },
              { speaker: 'S', hanzi: '一百二十块。', pinyin: 'Yì bǎi èrshí kuài.', english: '120 yuan.' },
              { speaker: 'G', hanzi: '我可以试一下吗？', pinyin: 'Wǒ kěyǐ shì yíxià ma?', english: 'May I try it on?' },
              { speaker: 'S', hanzi: '可以，试衣间在那里。', pinyin: 'Kěyǐ, shìyījiān zài nàlǐ.', english: 'Sure, the fitting room is over there.' },
              { speaker: 'G', hanzi: '太小了。有大一点的吗？', pinyin: 'Tài xiǎo le. Yǒu dà yìdiǎn de ma?', english: "It's too small. Do you have a bigger one?" },
              { speaker: 'S', hanzi: '有。这件很合适。', pinyin: 'Yǒu. Zhè jiàn hěn héshì.', english: 'Yes. This one fits well.' },
            ],
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Try it on',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you ask "May I try it on?"',
            options: ['我可以试一下吗？', '我试可以一下吗？', '我可以试吗一下？'],
            answer: 0,
            explain: '可以 + 试一下 + 吗.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'A bigger one',
        blocks: [
          {
            type: 'quiz',
            question: 'It is too small. What do you ask?',
            options: ['有大一点的吗？', '有小一点的吗？', '太大了吗？'],
            answer: 0,
            explain: '大一点的 means "a slightly bigger one".',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Measure word',
        blocks: [
          {
            type: 'quiz',
            question: 'Which measure word goes with 裤子 (pants)?',
            options: ['条', '件', '双'],
            answer: 0,
            explain: '条 is for pants and other long things.',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Ask to try on.', hanzi: '我可以试一下吗？', pinyin: 'Wǒ kěyǐ shì yíxià ma?', english: 'May I try it on?' },
          { type: 'speak', prompt: 'Ask for another size.', hanzi: '有大一点的吗？', pinyin: 'Yǒu dà yìdiǎn de ma?', english: 'Do you have a bigger one?' },
        ],
      },
    ],
  },

  {
    id: 'taxi',
    module: 'daily',
    title: 'Taxi and delivery',
    subtitle: 'Tell the driver where to go and order food to your door',
    minutes: 9,
    goal: 'Direct a taxi driver and arrange a delivery.',
    pages: [
      {
        kicker: 'Learn',
        title: 'In the taxi',
        blocks: [
          { type: 'vocab', words: [W6.dache, W6.shifu, W6.dizhi, W6.ting] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['师傅，去机场。', 'Driver, to the airport please.'],
              ['去这个地址。', 'To this address.'],
              ['请在这里停。', 'Please stop here.'],
              ['多少钱？', 'How much is it?'],
            ],
          },
          {
            type: 'pro',
            body: 'Show the address on your phone and say 去这个地址. Drivers in mainland China are politely called 师傅 (shīfu). In ride-hailing apps like Didi (滴滴), the address is already set, so you only need to greet and confirm.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'Delivery',
        blocks: [
          { type: 'vocab', words: [W6.waimai, W6.song] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['我点了外卖。', 'I ordered delivery.'],
              ['请送到这个地址。', 'Please deliver to this address.'],
              ['外卖到了吗？', 'Has the delivery arrived?'],
            ],
          },
          {
            type: 'taglish',
            body: 'Parang Grab o Foodpanda: 打车 ang pag-book ng sasakyan, 外卖 ang food delivery. Madalas app ang gagamitin, pero kapag kausap mo na ang driver, 师傅 at 请在这里停 ang kailangan mo.',
          },
          {
            type: 'remember',
            body: '外卖 literally means "outside sell" (food sold to go outside). 送 means "send": 送到 is "deliver to". Link it: 外卖 + 送到 = food delivered.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'A short ride',
        blocks: [
          {
            type: 'dialogue',
            title: 'In a taxi',
            lines: [
              { speaker: 'G', hanzi: '师傅，你好。去机场。', pinyin: 'Shīfu, nǐ hǎo. Qù jīchǎng.', english: 'Hello driver. To the airport.' },
              { speaker: 'D', hanzi: '好的。', pinyin: 'Hǎo de.', english: 'Okay.' },
              { speaker: 'G', hanzi: '请在这里停。多少钱？', pinyin: 'Qǐng zài zhèlǐ tíng. Duōshao qián?', english: 'Please stop here. How much?' },
              { speaker: 'D', hanzi: '三十五块。', pinyin: 'Sānshíwǔ kuài.', english: '35 yuan.' },
              { speaker: 'G', hanzi: '谢谢师傅！', pinyin: 'Xièxie shīfu!', english: 'Thanks, driver!' },
            ],
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Stop here',
        blocks: [
          {
            type: 'quiz',
            question: 'You want to get out. What do you say?',
            options: ['请在这里停。', '请去这里。', '请给我钱。'],
            answer: 0,
            explain: '停 means stop. 在这里 means here.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'The address',
        blocks: [
          {
            type: 'quiz',
            question: 'You show your phone with the address. What do you say?',
            options: ['去这个地址。', '我是地址。', '这个地址吃饭。'],
            answer: 0,
            explain: '去 + this address.',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Greet the driver.', hanzi: '师傅，你好。去机场。', pinyin: 'Shīfu, nǐ hǎo. Qù jīchǎng.', english: 'Hello driver. To the airport.' },
          { type: 'speak', prompt: 'Ask them to stop.', hanzi: '请在这里停。', pinyin: 'Qǐng zài zhèlǐ tíng.', english: 'Please stop here.' },
        ],
      },
    ],
  },

  {
    id: 'routine',
    module: 'daily',
    title: 'Your daily routine',
    subtitle: 'Talk about a normal day, from waking up to bed',
    minutes: 9,
    goal: 'Describe your daily routine with times and frequency words.',
    pages: [
      {
        kicker: 'Learn',
        title: 'A day in words',
        blocks: [
          { type: 'vocab', words: [W6.qichuang, W4.zaocan, W6.shangban, W6.xiaban, W3.shuijiao, W6.meitian, W6.changchang] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['我每天七点起床。', 'I get up at 7 every day.'],
              ['我八点上班。', 'I start work at 8.'],
              ['我六点下班。', 'I finish work at 6.'],
              ['我常常十一点睡觉。', 'I often go to bed at 11.'],
            ],
          },
          {
            type: 'pro',
            body: 'Order: subject + frequency + time + action. 我每天七点起床 ("I every day at seven get up"). Time and frequency always come before the verb.',
          },
          {
            type: 'remember',
            body: '上 is "go up/into" and 下 is "go down/out". 上班 is "go into work" and 下班 is "go out of work". The same 上/下 appears in 上课 (start class) and 下课 (end class).',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'People around you',
        blocks: [
          { type: 'vocab', words: [W6.xuexi, W6.tongxue, W6.tongshi] },
          {
            type: 'taglish',
            body: 'Pareho sa buhay natin: 同事 ang katrabaho, 同学 ang kaklase. Parehong may 同 (magkasama), kaya madaling tandaan: "kasama sa trabaho" at "kasama sa pag-aaral".',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Comparing days',
        blocks: [
          {
            type: 'dialogue',
            title: 'With a coworker',
            lines: [
              { speaker: 'A', hanzi: '你每天几点起床？', pinyin: 'Nǐ měitiān jǐ diǎn qǐchuáng?', english: 'What time do you get up each day?' },
              { speaker: 'B', hanzi: '我每天六点半起床。', pinyin: 'Wǒ měitiān liù diǎn bàn qǐchuáng.', english: 'I get up at 6:30 every day.' },
              { speaker: 'A', hanzi: '你几点下班？', pinyin: 'Nǐ jǐ diǎn xiàbān?', english: 'What time do you finish work?' },
              { speaker: 'B', hanzi: '我常常六点下班。', pinyin: 'Wǒ chángcháng liù diǎn xiàbān.', english: 'I usually finish at 6.' },
            ],
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Word order',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you say "I get up at 7 every day"?',
            options: ['我每天七点起床。', '我起床每天七点。', '每天我起床七点。'],
            answer: 0,
            explain: 'Frequency and time go before the verb.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Going to work',
        blocks: [
          {
            type: 'quiz',
            question: 'Which means "to finish work"?',
            options: ['下班', '上班', '睡觉'],
            answer: 0,
            explain: '下班 is "go out of work". 上班 is "start work".',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Say your routine.', hanzi: '我每天七点起床。', pinyin: 'Wǒ měitiān qī diǎn qǐchuáng.', english: 'I get up at 7 every day.' },
          { type: 'speak', prompt: 'Ask someone.', hanzi: '你几点下班？', pinyin: 'Nǐ jǐ diǎn xiàbān?', english: 'What time do you finish work?' },
        ],
      },
    ],
  },

  {
    id: 'family2',
    module: 'daily',
    title: 'Your whole family',
    subtitle: 'Parents, grandparents, children, and how many people live at home',
    minutes: 9,
    goal: 'Talk about your family, including grandparents and children.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Parents and children',
        blocks: [
          { type: 'vocab', words: [W6.fumu, W6.erzi, W6.nver, W6.haizi, W6.yeye, W6.nainai] },
          {
            type: 'table',
            head: ['Relative', 'Hanzi', 'Pinyin'],
            rows: [
              ["Father's father", '爷爷', 'yéye'],
              ["Father's mother", '奶奶', 'nǎinai'],
              ["Mother's father", '外公', 'wàigōng'],
              ["Mother's mother", '外婆', 'wàipó'],
            ],
            caption: 'Chinese names the side of the family. Filipino lola and lolo do not.',
          },
          {
            type: 'taglish',
            body: 'Sa Tagalog, "lolo" at "lola" lang para sa dalawang panig. Sa Mandarin, hiwalay ang pangalan ng lolo at lola sa panig ng tatay (爷爷, 奶奶) at sa panig ng nanay (外公, 外婆).',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'How many in your family?',
        blocks: [
          {
            type: 'text',
            body: ['To count family members, use the measure word 口 (kǒu): 你家有几口人？ "How many people are in your family?" And answer: 我家有五口人.'],
          },
          {
            type: 'pro',
            body: 'For a list of people in Chinese, use the short pause mark 、 between items, not a comma: 爸爸、妈妈、哥哥和我. Say 和 only before the last item.',
          },
          {
            type: 'dialogue',
            title: 'Family talk',
            lines: [
              { speaker: 'A', hanzi: '你家有几口人？', pinyin: 'Nǐ jiā yǒu jǐ kǒu rén?', english: 'How many people are in your family?' },
              { speaker: 'B', hanzi: '我家有五口人：爸爸、妈妈、哥哥、妹妹和我。', pinyin: 'Wǒ jiā yǒu wǔ kǒu rén: bàba, māma, gēge, mèimei hé wǒ.', english: 'Five: dad, mom, older brother, younger sister and me.' },
              { speaker: 'A', hanzi: '你有孩子吗？', pinyin: 'Nǐ yǒu háizi ma?', english: 'Do you have children?' },
              { speaker: 'B', hanzi: '有，我有一个儿子。', pinyin: 'Yǒu, wǒ yǒu yí ge érzi.', english: 'Yes, I have a son.' },
            ],
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Which grandfather?',
        blocks: [
          {
            type: 'quiz',
            question: 'Which word means your mother\'s father?',
            options: ['外公', '爷爷', '爸爸'],
            answer: 0,
            explain: '外公 is the maternal grandfather. 爷爷 is the paternal grandfather.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Family size',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you ask "How many people are in your family?"',
            options: ['你家有几口人？', '你家有多少人口？', '你家人几口有？'],
            answer: 0,
            explain: '几口人 is the natural everyday question.',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Ask.', hanzi: '你家有几口人？', pinyin: 'Nǐ jiā yǒu jǐ kǒu rén?', english: 'How many people are in your family?' },
          { type: 'speak', prompt: 'Answer.', hanzi: '我家有五口人。', pinyin: 'Wǒ jiā yǒu wǔ kǒu rén.', english: 'There are five of us.' },
        ],
      },
    ],
  },

  {
    id: 'countries',
    module: 'daily',
    title: 'Countries, cities and languages',
    subtitle: 'Where you are from, where you live, what you speak',
    minutes: 9,
    goal: 'Say where you are from and live, and which languages you speak.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Countries',
        blocks: [
          { type: 'vocab', words: [W6.na_which, W6.guo_country, W.feilvbin, W.zhongguo, W6.meiguo, W6.yingguo, W6.riben, W6.hanguo] },
          {
            type: 'remember',
            body: '国 means "country" and it is inside every country name: 中国, 美国, 英国, 韩国. Learn the short form: 哪国人 means "which-country person", and the answer swaps in the country name: 菲律宾人.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'Where you live and what you speak',
        blocks: [
          { type: 'vocab', words: [W6.manila, W6.zhuzai, W6.yuyan, W6.tajialuyu, W2.yingyu, W2.zhongwen] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['你是哪国人？', 'Which country are you from?'],
              ['我是菲律宾人。', 'I am Filipino.'],
              ['我住在马尼拉。', 'I live in Manila.'],
              ['你会说什么语言？', 'Which languages do you speak?'],
              ['我会说他加禄语、英语和一点中文。', 'I speak Tagalog, English and a little Chinese.'],
            ],
          },
          {
            type: 'pro',
            body: 'Put 住在 before the place: 我住在马尼拉. For more than one language, list them with 、 and end with 和: 英语、他加禄语和一点中文.',
          },
          {
            type: 'taglish',
            body: 'Para sa mga Pilipino: 菲律宾人 ang Filipino, at 他加禄语 ang Tagalog. Pwede mo ring sabihin ang 菲律宾语 para sa "Filipino" na wika, pero mas tiyak ang 他加禄语 para sa Tagalog.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Meeting someone',
        blocks: [
          {
            type: 'dialogue',
            title: 'Where are you from?',
            lines: [
              { speaker: 'A', hanzi: '你是哪国人？', pinyin: 'Nǐ shì nǎ guó rén?', english: 'Which country are you from?' },
              { speaker: 'B', hanzi: '我是菲律宾人，我住在马尼拉。', pinyin: 'Wǒ shì Fēilǜbīn rén, wǒ zhù zài Mǎnílā.', english: 'I am Filipino, I live in Manila.' },
              { speaker: 'A', hanzi: '你会说什么语言？', pinyin: 'Nǐ huì shuō shénme yǔyán?', english: 'Which languages do you speak?' },
              { speaker: 'B', hanzi: '我会说他加禄语和英语，还会说一点中文。', pinyin: 'Wǒ huì shuō Tǎjiālùyǔ hé Yīngyǔ, hái huì shuō yìdiǎn Zhōngwén.', english: 'I speak Tagalog and English, and a little Chinese too.' },
            ],
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Which country?',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you ask "Which country are you from?"',
            options: ['你是哪国人？', '你是什么国？', '你哪里国人？'],
            answer: 0,
            explain: '哪国人 means "which-country person".',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Where you live',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you say "I live in Manila"?',
            options: ['我住在马尼拉。', '我在住马尼拉。', '我马尼拉住在。'],
            answer: 0,
            explain: '住在 + place.',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Say where you are from and live.', hanzi: '我是菲律宾人，我住在马尼拉。', pinyin: 'Wǒ shì Fēilǜbīn rén, wǒ zhù zài Mǎnílā.', english: 'I am Filipino, I live in Manila.' },
          { type: 'speak', prompt: 'Say your languages.', hanzi: '我会说他加禄语和英语。', pinyin: 'Wǒ huì shuō Tǎjiālùyǔ hé Yīngyǔ.', english: 'I speak Tagalog and English.' },
        ],
      },
    ],
  },

  {
    id: 'cafe',
    module: 'food',
    title: 'Ordering drinks: milk tea and coffee',
    subtitle: 'Size, ice, sugar and extras, the way people really order',
    minutes: 10,
    goal: 'Order a drink and customise its size, ice and sugar.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Drink words',
        blocks: [
          { type: 'vocab', words: [W6.naicha, W.kafei, W.cha, W6.guozhi, W6.pijiu, W6.zhenzhu] },
          {
            type: 'remember',
            body: '奶茶 is "milk tea": 奶 (milk) + 茶 (tea). 果汁 is "fruit juice": 果 (fruit) + 汁 (juice). 啤酒 sounds like "pee-jyoh", close to "beer". Most drink names are just two parts glued together.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'Make it your way',
        blocks: [
          { type: 'vocab', words: [W6.dabei, W6.xiaobei, W6.bing, W6.qubing, W6.tang, W6.shaotang, W6.haishi] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['我要一杯奶茶。', "I'd like a milk tea."],
              ['大杯还是小杯？', 'Large or small?'],
              ['去冰，少糖。', 'No ice, less sugar.'],
              ['要加珍珠吗？', 'Would you like pearls added?'],
              ['热的还是冰的？', 'Hot or iced?'],
            ],
          },
          {
            type: 'pro',
            body: '还是 means "or" in questions where someone must choose: 大杯还是小杯？ For statements, "or" is 或者. Reply by repeating the choice: 大杯.',
          },
          {
            type: 'taglish',
            body: 'Parang order sa milk tea shop dito: "less sugar, no ice". 少糖 ay "less sugar" at 去冰 ay "no ice". Pwede mo ring sabihin ang 正常糖 (zhèngcháng táng) para sa "regular sugar".',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'At the counter',
        blocks: [
          {
            type: 'dialogue',
            title: 'Ordering milk tea',
            lines: [
              { speaker: 'S', hanzi: '您好，您想喝什么？', pinyin: 'Nín hǎo, nín xiǎng hē shénme?', english: 'Hello, what would you like to drink?' },
              { speaker: 'G', hanzi: '我要一杯奶茶。', pinyin: 'Wǒ yào yì bēi nǎichá.', english: "I'd like a milk tea." },
              { speaker: 'S', hanzi: '大杯还是小杯？', pinyin: 'Dà bēi háishi xiǎo bēi?', english: 'Large or small?' },
              { speaker: 'G', hanzi: '大杯。去冰，少糖。', pinyin: 'Dà bēi. Qù bīng, shǎo táng.', english: 'Large. No ice, less sugar.' },
              { speaker: 'S', hanzi: '要加珍珠吗？', pinyin: 'Yào jiā zhēnzhū ma?', english: 'Add pearls?' },
              { speaker: 'G', hanzi: '好的，谢谢。', pinyin: 'Hǎo de, xièxie.', english: 'Yes please, thanks.' },
            ],
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'No ice',
        blocks: [
          {
            type: 'quiz',
            question: 'You want "no ice, less sugar". What do you say?',
            options: ['去冰，少糖。', '多冰，多糖。', '热的，小杯。'],
            answer: 0,
            explain: '去冰 is no ice and 少糖 is less sugar.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Large or small',
        blocks: [
          {
            type: 'quiz',
            question: 'What does 大杯还是小杯？ ask?',
            options: ['Large or small?', 'Hot or iced?', 'How much?'],
            answer: 0,
            explain: '还是 offers a choice between two options.',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Order a drink.', hanzi: '我要一杯奶茶。', pinyin: 'Wǒ yào yì bēi nǎichá.', english: "I'd like a milk tea." },
          { type: 'speak', prompt: 'Customise it.', hanzi: '大杯，去冰，少糖。', pinyin: 'Dà bēi, qù bīng, shǎo táng.', english: 'Large, no ice, less sugar.' },
        ],
      },
    ],
  },
];


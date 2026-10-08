import type { Lesson } from './types';
import { W } from './words';
import { W5 } from './wordsPart5';

export const PART5_LESSONS: Lesson[] = [
  // ═════════════════════════ NATURAL CONVERSATION ═════════════════════════
  {
    id: 'reactions',
    module: 'talk',
    title: 'Reacting while you listen',
    subtitle: 'Short replies that keep a conversation going',
    minutes: 9,
    goal: 'React naturally with "really?", "right!", "of course" and "I don\'t know".',
    pages: [
      {
        kicker: 'Learn',
        title: 'Listener words',
        blocks: [
          {
            type: 'text',
            body: ['In real conversation, a lot of what you say is not new information. It is a small reaction that shows you are listening. These short replies make you sound much more natural than full sentences.'],
          },
          { type: 'vocab', words: [W5.shima, W5.zhende, W5.duia, W5.meicuo, W5.dangran, W5.keneng, W5.zhidao] },
          {
            type: 'taglish',
            body: 'Parang "Talaga?", "Oo nga!", "Siyempre!", "Baka" at "Hindi ko alam" sa Tagalog. Kapag natutunan mo ang mga ito, mas natural ang daloy ng usapan mo, kahit simple lang ang grammar mo.',
          },
          {
            type: 'remember',
            body: 'Match each one to a feeling. 是吗 = mild surprise. 真的吗 = strong surprise. 对啊 / 没错 = agreement. 当然 = obviously yes. 可能 = maybe. 不知道 = no idea. Say the feeling in English, then the Mandarin reply.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'Sound natural',
        blocks: [
          {
            type: 'pro',
            body: 'Use a rising or surprised tone on 是吗 and 真的吗 and a flat, agreeing tone on 对啊 and 没错. The same words with different feeling sound completely different, just like in English "Really?" versus "Really.".',
          },
          {
            type: 'table',
            head: ['They say', 'You can reply', 'Feeling'],
            rows: [
              ['我昨天去了北京。', '是吗？', 'Oh, is that so?'],
              ['我明天要去北京！', '真的吗？', 'Really?! No way!'],
              ['这家饭店很好吃。', '对啊！', 'Yeah, right!'],
              ['你明天来吗？', '当然！', 'Of course!'],
              ['你知道他在哪里吗？', '不知道。', "I don't know."],
            ],
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Keeping it going',
        blocks: [
          {
            type: 'dialogue',
            title: 'Chatting about food',
            lines: [
              { speaker: 'A', hanzi: '这家饭店很好吃。', pinyin: 'Zhè jiā fàndiàn hěn hǎochī.', english: 'This restaurant is delicious.' },
              { speaker: 'B', hanzi: '真的吗？', pinyin: 'Zhēn de ma?', english: 'Really?' },
              { speaker: 'A', hanzi: '当然！你明天来吗？', pinyin: 'Dāngrán! Nǐ míngtiān lái ma?', english: 'Of course! Are you coming tomorrow?' },
              { speaker: 'B', hanzi: '可能。我不知道。', pinyin: 'Kěnéng. Wǒ bù zhīdào.', english: "Maybe. I don't know." },
            ],
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Show surprise',
        blocks: [
          {
            type: 'quiz',
            question: 'A friend says "I\'m going to Beijing tomorrow!" You are really surprised. What do you say?',
            options: ['真的吗？', '没错。', '当然。'],
            answer: 0,
            explain: '真的吗 shows strong surprise.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Agree',
        blocks: [
          {
            type: 'quiz',
            question: 'A friend says the food is great, and you agree. What do you say?',
            options: ['对啊！', '不知道。', '可能。'],
            answer: 0,
            explain: '对啊 shows agreement.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Not sure',
        blocks: [
          {
            type: 'quiz',
            question: 'Which means "Maybe"?',
            options: ['可能', '当然', '没错'],
            answer: 0,
            explain: '可能 means maybe or possibly.',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Say it with surprise.', hanzi: '真的吗？', pinyin: 'Zhēn de ma?', english: 'Really?' },
          { type: 'speak', prompt: 'Say it with agreement.', hanzi: '对啊！没错。', pinyin: 'Duì a! Méi cuò.', english: "Yeah! That's right." },
        ],
      },
    ],
  },

  {
    id: 'fillers',
    module: 'talk',
    title: 'Fillers: buy yourself thinking time',
    subtitle: '嗯, 那个, 就是, 然后, 其实 and how Chinese speakers pause',
    minutes: 10,
    goal: 'Use common filler words to pause and keep your turn while you think.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Why fillers matter',
        blocks: [
          {
            type: 'text',
            body: [
              'Every language has words that mean almost nothing but signal "I am thinking" or "I am not finished". In English: um, like, you know. Chinese has its own set.',
              'Using them makes you sound more natural, and lets you keep talking while you search for the next word.',
            ],
          },
          { type: 'vocab', words: [W5.en, W5.nage, W5.jiushi, W5.ranhou, W5.qishi, W5.duile, W5.zenmeshuone] },
          {
            type: 'taglish',
            body: 'Parang "ano...", "eh...", "kasi...", "tapos..." sa Tagalog. Ang 那个 ay ang "ano" ng Mandarin: ginagamit habang nag-iisip ka ng susunod na sasabihin.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'What each one does',
        blocks: [
          {
            type: 'table',
            head: ['Filler', 'Job', 'English feel'],
            rows: [
              ['嗯', 'agree or show you are listening', 'mm-hm'],
              ['那个…', 'pause while you search for a word', 'um…'],
              ['就是…', 'restart or clarify', "I mean… / it's just…"],
              ['然后…', 'continue a story', 'and then…'],
              ['其实…', 'give a different view', 'actually…'],
              ['对了…', 'switch to a new topic', 'oh, right…'],
              ['怎么说呢…', 'stall while you decide how to say it', 'how do I put it…'],
            ],
          },
          {
            type: 'pro',
            body: 'Choose one or two fillers and use them on purpose, such as 那个 and 然后. Do not try all seven at once. A few well-placed fillers sound natural, but too many sound nervous.',
          },
          {
            type: 'remember',
            body: 'Pair each filler with an English sound you already make: 那个 = "um", 其实 = "actually", 然后 = "and then", 嗯 = "mm-hm". When you catch yourself saying the English filler, swap in the Chinese one.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Thinking out loud',
        blocks: [
          {
            type: 'dialogue',
            title: 'Ordering with fillers',
            lines: [
              { speaker: 'W', hanzi: '您想吃什么？', pinyin: 'Nín xiǎng chī shénme?', english: 'What would you like to eat?' },
              { speaker: 'G', hanzi: '嗯，那个…我想吃面条。', pinyin: 'Èn, nàge… wǒ xiǎng chī miàntiáo.', english: "Mm, um… I'd like noodles." },
              { speaker: 'G', hanzi: '对了，请不要太辣。', pinyin: 'Duì le, qǐng bú yào tài là.', english: 'Oh right, please not too spicy.' },
              { speaker: 'W', hanzi: '好的，没问题。', pinyin: 'Hǎo de, méi wèntí.', english: 'Okay, no problem.' },
            ],
          },
          {
            type: 'tip',
            label: 'Good to know',
            body: '那个 is usually written nàge but often said nèige. Both are the same word. Native speakers use both, so do not worry if you hear either.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Which filler?',
        blocks: [
          {
            type: 'quiz',
            question: 'You need a moment to think of the next word. Which filler fits?',
            options: ['那个…', '再见', '谢谢'],
            answer: 0,
            explain: '那个 works like "um…" while you search for a word.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'New topic',
        blocks: [
          {
            type: 'quiz',
            question: 'You suddenly remember something. Which word introduces it, like "oh, by the way"?',
            options: ['对了', '其实', '嗯'],
            answer: 0,
            explain: '对了 signals "oh right, by the way".',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Actually',
        blocks: [
          {
            type: 'quiz',
            question: 'Which means "actually"?',
            options: ['其实', '然后', '就是'],
            answer: 0,
            explain: '其实 introduces a different or truer view.',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Pause naturally, then order.', hanzi: '嗯，那个…我想吃面条。', pinyin: 'Èn, nàge… wǒ xiǎng chī miàntiáo.', english: "Mm, um… I'd like noodles." },
          { type: 'speak', prompt: 'Add something at the end.', hanzi: '对了，请不要太辣。', pinyin: 'Duì le, qǐng bú yào tài là.', english: 'Oh right, please not too spicy.' },
        ],
      },
    ],
  },

  {
    id: 'flex',
    module: 'talk',
    title: 'Easygoing phrases',
    subtitle: 'Whatever, about the same, never mind, no problem',
    minutes: 8,
    goal: 'Use relaxed everyday phrases for choices, agreement and "never mind".',
    pages: [
      {
        kicker: 'Learn',
        title: 'Relaxed replies',
        blocks: [
          { type: 'vocab', words: [W5.suibian, W5.douxing, W5.chabuduo, W5.suanle, W5.meiwenti, W5.haoba] },
          {
            type: 'table',
            head: ['Situation', 'Say'],
            rows: [
              ['"What do you want to eat?" and you do not mind', '随便 / 都行'],
              ['Two things are about the same', '差不多'],
              ['You drop it', '算了'],
              ['Someone asks for a favour', '没问题'],
              ['You agree reluctantly', '好吧'],
            ],
          },
          {
            type: 'taglish',
            body: 'Parang "kahit ano", "halos pareho", "wag na lang", "walang problema" at "sige na nga". Pang-araw-araw na salita ito, at madalas silang marinig sa totoong usapan.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'Handle with care',
        blocks: [
          {
            type: 'pro',
            body: '随便 can sound indifferent if you say it flat when someone is trying to be kind. Say 都行 or 我都可以 with a smile, and add 谢谢 when someone offers you a choice.',
          },
          {
            type: 'remember',
            body: '算了 = "calculate it as done", a way of saying "let it go". And 差不多 means "difference not much" (差 is difference, 不多 is not much). The literal meanings are memory aids.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Deciding together',
        blocks: [
          {
            type: 'dialogue',
            title: 'Where to eat',
            lines: [
              { speaker: 'A', hanzi: '你想吃什么？', pinyin: 'Nǐ xiǎng chī shénme?', english: 'What do you want to eat?' },
              { speaker: 'B', hanzi: '随便，你呢？', pinyin: 'Suíbiàn, nǐ ne?', english: 'Anything. And you?' },
              { speaker: 'A', hanzi: '面条和米饭差不多，都行。', pinyin: 'Miàntiáo hé mǐfàn chàbuduō, dōu xíng.', english: 'Noodles and rice are about the same, either is fine.' },
              { speaker: 'B', hanzi: '好吧，吃面条吧。', pinyin: 'Hǎo ba, chī miàntiáo ba.', english: "Okay then, let's have noodles." },
            ],
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'No preference',
        blocks: [
          {
            type: 'quiz',
            question: 'Someone asks "What do you want to eat?" and you do not mind. Which is the natural reply?',
            options: ['随便', '算了', '没错'],
            answer: 0,
            explain: '随便 means "anything is fine".',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Never mind',
        blocks: [
          {
            type: 'quiz',
            question: 'You decide to drop the topic. What do you say?',
            options: ['算了', '没问题', '差不多'],
            answer: 0,
            explain: '算了 means "forget it".',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'No preference.', hanzi: '都行，谢谢。', pinyin: 'Dōu xíng, xièxie.', english: 'Either is fine, thanks.' },
          { type: 'speak', prompt: 'Agree to help.', hanzi: '没问题！', pinyin: 'Méi wèntí!', english: 'No problem!' },
        ],
      },
    ],
  },

  {
    id: 'smalltalk',
    module: 'talk',
    title: 'Small talk: hello again, goodbye for now',
    subtitle: 'Greet someone you know and say a warm goodbye',
    minutes: 9,
    goal: 'Greet someone you have not seen in a while and say a friendly goodbye.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Catching up',
        blocks: [
          { type: 'vocab', words: [W5.haojiu, W5.zuijin, W5.haixing] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['好久不见！', 'Long time no see!'],
              ['最近怎么样？', "How have you been lately?"],
              ['还行，你呢？', "So-so, and you?"],
              ['最近很忙。', "I've been busy lately."],
            ],
          },
          {
            type: 'pro',
            body: 'Honest answers are fine, but the polite default is 还行 or 挺好的. Save the long story for later. If someone says 最近怎么样 and you say 还行, they will usually ask a follow-up.',
          },
          {
            type: 'remember',
            body: '好久不见 is a literal translation of "good long (time) not see". Say it as a chunk, and picture a big hug as you say it.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'Saying goodbye',
        blocks: [
          { type: 'vocab', words: [W5.manzou, W5.lushang, W5.xiaci, W.zaijian] },
          {
            type: 'taglish',
            body: 'Parang "Ingat!" at "Sige, kita-kits!" sa Tagalog. Ang 慢走 ay sinasabi ng host sa umaalis na bisita, at ang 路上小心 ay parang "ingat sa daan".',
          },
          {
            type: 'pro',
            body: '慢走 is said to someone leaving, and it sounds warm. The person leaving usually replies 好的，再见 or 谢谢. It is one of the nicest phrases to know when you host guests or work in service.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Meeting an old friend',
        blocks: [
          {
            type: 'dialogue',
            title: 'On the street',
            lines: [
              { speaker: 'A', hanzi: '好久不见！最近怎么样？', pinyin: 'Hǎojiǔ bú jiàn! Zuìjìn zěnmeyàng?', english: 'Long time no see! How have you been?' },
              { speaker: 'B', hanzi: '还行，最近很忙。你呢？', pinyin: 'Hái xíng, zuìjìn hěn máng. Nǐ ne?', english: "So-so, I've been busy. And you?" },
              { speaker: 'A', hanzi: '我也是。下次见！', pinyin: 'Wǒ yě shì. Xià cì jiàn!', english: 'Me too. See you next time!' },
              { speaker: 'B', hanzi: '路上小心！再见。', pinyin: 'Lùshang xiǎoxīn! Zàijiàn.', english: 'Be careful on the way! Goodbye.' },
            ],
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Long time no see',
        blocks: [
          {
            type: 'quiz',
            question: 'You meet a friend after a long time. What do you say?',
            options: ['好久不见！', '不用了', '没事'],
            answer: 0,
            explain: '好久不见 means "long time no see".',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'How have you been?',
        blocks: [
          {
            type: 'quiz',
            question: 'What does 最近怎么样？ ask?',
            options: ['How have you been lately?', 'Where are you going?', 'What time is it?'],
            answer: 0,
            explain: '最近 is recently and 怎么样 is "how is it".',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Farewell',
        blocks: [
          {
            type: 'quiz',
            question: 'A guest is leaving and you are the host. What do you say?',
            options: ['慢走', '欢迎光临', '请坐'],
            answer: 0,
            explain: '慢走 is a warm goodbye to someone leaving.',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Greet a friend.', hanzi: '好久不见！最近怎么样？', pinyin: 'Hǎojiǔ bú jiàn! Zuìjìn zěnmeyàng?', english: 'Long time no see! How have you been?' },
          { type: 'speak', prompt: 'Say goodbye.', hanzi: '下次见！路上小心。', pinyin: 'Xià cì jiàn! Lùshang xiǎoxīn.', english: 'See you next time! Be careful.' },
        ],
      },
    ],
  },

  {
    id: 'polite',
    module: 'talk',
    title: 'Polite phrases: sorry, no need, thanks for the trouble',
    subtitle: 'Excuse me, no thanks, and "I\'m fine"',
    minutes: 8,
    goal: 'Get attention politely, decline an offer, and reply when someone apologises.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Four phrases',
        blocks: [
          { type: 'vocab', words: [W5.buhaoyisi, W5.mafan, W5.meishi, W5.buyong] },
          {
            type: 'table',
            head: ['Situation', 'Say'],
            rows: [
              ['Get someone\'s attention', '不好意思，请问…'],
              ['Someone offers and you decline', '不用了，谢谢。'],
              ['You are asking for a small favour', '麻烦你了。'],
              ['Someone says sorry and you reply', '没事。'],
            ],
          },
          {
            type: 'taglish',
            body: 'Ang 不好意思 ay parang "pasensya na po" at "excuse me" at "nakakahiya" sa isang salita. Isa sa pinakamagandang parirala para sa Filipino learners dahil sobrang dami ng gamit.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'When to use each',
        blocks: [
          {
            type: 'pro',
            body: 'Use 不用了，谢谢 to politely refuse: a shop assistant, a free sample, a second helping. The 了 makes it softer than a flat 不用, and 谢谢 keeps it friendly.',
          },
          {
            type: 'remember',
            body: '麻烦 means "troublesome". 麻烦你了 literally says "you have been troubled", a polite way of thanking someone who did you a favour. The pair of 不好意思 and 麻烦你了 covers most polite situations.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Everyday politeness',
        blocks: [
          {
            type: 'dialogue',
            title: 'In a shop',
            lines: [
              { speaker: 'A', hanzi: '不好意思，请问洗手间在哪里？', pinyin: 'Bù hǎoyìsi, qǐngwèn xǐshǒujiān zài nǎlǐ?', english: 'Excuse me, where is the restroom?' },
              { speaker: 'B', hanzi: '在那里。你想喝水吗？', pinyin: 'Zài nàlǐ. Nǐ xiǎng hē shuǐ ma?', english: 'Over there. Would you like some water?' },
              { speaker: 'A', hanzi: '不用了，谢谢。麻烦你了。', pinyin: 'Búyòng le, xièxie. Máfan nǐ le.', english: "No thanks. Sorry for the trouble." },
              { speaker: 'B', hanzi: '没事！', pinyin: 'Méishì!', english: "It's nothing!" },
            ],
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'No thank you',
        blocks: [
          {
            type: 'quiz',
            question: 'A shop assistant offers you a free sample, but you do not want one. What do you say?',
            options: ['不用了，谢谢。', '没事。', '好久不见。'],
            answer: 0,
            explain: '不用了，谢谢 politely declines.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Reply to sorry',
        blocks: [
          {
            type: 'quiz',
            question: 'Someone bumps into you and says 不好意思. A casual reply?',
            options: ['没事', '麻烦你了', '再见'],
            answer: 0,
            explain: '没事 means "it\'s nothing".',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Get attention.', hanzi: '不好意思，请问…', pinyin: 'Bù hǎoyìsi, qǐngwèn…', english: 'Excuse me, may I ask…' },
          { type: 'speak', prompt: 'Decline politely.', hanzi: '不用了，谢谢。', pinyin: 'Búyòng le, xièxie.', english: 'No thanks.' },
        ],
      },
    ],
  },

  {
    id: 'wishes',
    module: 'talk',
    title: 'Wishes, congratulations and encouragement',
    subtitle: 'Happy birthday, good luck, go for it',
    minutes: 8,
    goal: 'Wish someone well, congratulate them, and encourage them.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Warm words',
        blocks: [
          { type: 'vocab', words: [W5.kuaile, W5.gongxi, W5.jiayou, W5.zhu, W5.haoyun, W5.xinnian] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['生日快乐！', 'Happy birthday!'],
              ['新年快乐！', 'Happy New Year!'],
              ['恭喜你！', 'Congratulations!'],
              ['祝你好运！', 'Good luck to you!'],
              ['加油！', 'You can do it! Keep going!'],
            ],
          },
          {
            type: 'remember',
            body: '加油 literally means "add fuel", like adding gas to a car, so it means "keep going". 快乐 is "fast + joy" in sound, but literally "happy + joyful". Quick memory aids to make the words stick.',
          },
          {
            type: 'taglish',
            body: 'Ang 加油 ay parang "Laban!" o "Kaya mo yan!" sa Tagalog. Isa ito sa pinaka-madalas na marinig sa mga kaibigan na nag-eexam, nagtatrabaho, o tumatakbo.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'Receiving a compliment',
        blocks: [
          {
            type: 'text',
            body: ['If someone says 你的中文很好！ ("Your Chinese is good!"), a natural humble reply is 谢谢，我还在学。 ("Thanks, I am still learning.")'],
          },
          {
            type: 'pro',
            body: 'Accept compliments with 谢谢 and add 我还在学. It is warm, honest, and shows you are keen to learn. Saying 哪里哪里 is classic but old-fashioned, so 谢谢 is safer.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Celebrating',
        blocks: [
          {
            type: 'dialogue',
            title: 'A birthday',
            lines: [
              { speaker: 'A', hanzi: '生日快乐！', pinyin: 'Shēngrì kuàilè!', english: 'Happy birthday!' },
              { speaker: 'B', hanzi: '谢谢！', pinyin: 'Xièxie!', english: 'Thank you!' },
              { speaker: 'A', hanzi: '祝你好运，加油！', pinyin: 'Zhù nǐ hǎoyùn, jiāyóu!', english: 'Good luck to you, keep it up!' },
              { speaker: 'B', hanzi: '你的中文很好！', pinyin: 'Nǐ de Zhōngwén hěn hǎo!', english: 'Your Chinese is good!' },
              { speaker: 'A', hanzi: '谢谢，我还在学。', pinyin: 'Xièxie, wǒ hái zài xué.', english: "Thanks, I'm still learning." },
            ],
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Birthday wish',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you say "Happy birthday"?',
            options: ['生日快乐', '新年快乐', '恭喜你'],
            answer: 0,
            explain: '生日 is birthday and 快乐 is happy.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Encourage',
        blocks: [
          {
            type: 'quiz',
            question: 'A friend is about to take an exam. What do you say?',
            options: ['加油！', '算了', '没事'],
            answer: 0,
            explain: '加油 means "you can do it, keep going".',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Wish a friend.', hanzi: '生日快乐！祝你好运！', pinyin: 'Shēngrì kuàilè! Zhù nǐ hǎoyùn!', english: 'Happy birthday! Good luck!' },
          { type: 'speak', prompt: 'Reply to a compliment.', hanzi: '谢谢，我还在学。', pinyin: 'Xièxie, wǒ hái zài xué.', english: "Thanks, I'm still learning." },
        ],
      },
    ],
  },

  {
    id: 'contact',
    module: 'talk',
    title: 'Phone calls and exchanging contacts',
    subtitle: 'Answer the phone, ask for someone, add each other on WeChat',
    minutes: 10,
    goal: 'Make a simple phone call, ask for someone, and swap contact details.',
    pages: [
      {
        kicker: 'Learn',
        title: 'On the phone',
        blocks: [
          { type: 'vocab', words: [W5.wei, W5.zhao, W5.buzai, W5.dianhua, W5.haoma] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['喂，你好！', 'Hello! (on the phone)'],
              ['我找李明。', "I'm looking for Li Ming."],
              ['他不在。', "He's not here."],
              ['请等一下。', 'Please wait a moment.'],
            ],
          },
          {
            type: 'pro',
            body: '喂 is the phone hello. In dictionaries it is wèi, but you will often hear wéi. Both are fine. Answer a call with 喂，你好 and ask for someone with 我找 plus the name.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'Swapping contacts',
        blocks: [
          { type: 'vocab', words: [W5.weixin, W5.jia3] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['我们加微信吧。', "Let's add each other on WeChat."],
              ['你的电话号码是多少？', "What's your phone number?"],
              ['我的号码是…', 'My number is…'],
            ],
          },
          {
            type: 'tip',
            label: 'Good to know',
            body: 'In mainland China, people swap WeChat rather than phone numbers. In other places the app will differ, but 加微信 is the pattern: 加 means "add".',
          },
          {
            type: 'remember',
            body: 'When reading a phone number, say each digit one by one, with 1 as yāo (so it is not confused with 7). Practise with your own number: it is the best way to lock in the numbers.',
          },
          {
            type: 'taglish',
            body: 'Pareho ng Tagalog "idagdag kita sa WeChat": ang 加 ay "add". Sa numero ng telepono, basahin ang bawat digit nang isa-isa at gamitin ang yāo para sa 1.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'A phone call',
        blocks: [
          {
            type: 'dialogue',
            title: 'Calling a friend',
            lines: [
              { speaker: 'A', hanzi: '喂，你好！我找李明。', pinyin: 'Wèi, nǐ hǎo! Wǒ zhǎo Lǐ Míng.', english: "Hello! I'm looking for Li Ming." },
              { speaker: 'B', hanzi: '他不在。', pinyin: 'Tā bú zài.', english: "He's not here." },
              { speaker: 'A', hanzi: '好的。我们加微信吧。', pinyin: 'Hǎo de. Wǒmen jiā Wēixìn ba.', english: "Okay. Let's add each other on WeChat." },
              { speaker: 'B', hanzi: '好啊！你的电话号码是多少？', pinyin: 'Hǎo a! Nǐ de diànhuà hàomǎ shì duōshao?', english: "Sure! What's your phone number?" },
            ],
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Ask for someone',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you say "I\'m looking for Li Ming" on the phone?',
            options: ['我找李明。', '我去李明。', '我是李明找。'],
            answer: 0,
            explain: '找 means to look for or ask for.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Not here',
        blocks: [
          {
            type: 'quiz',
            question: 'What does 他不在 mean?',
            options: ["He's not here.", "He's very busy.", 'He is a student.'],
            answer: 0,
            explain: '不在 means "not here / not in".',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Add a contact',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you suggest "Let\'s add each other on WeChat"?',
            options: ['我们加微信吧。', '我们微信加。', '加我们微信吗？'],
            answer: 0,
            explain: '吧 turns it into a friendly suggestion.',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Answer a call.', hanzi: '喂，你好！我找李明。', pinyin: 'Wèi, nǐ hǎo! Wǒ zhǎo Lǐ Míng.', english: "Hello! I'm looking for Li Ming." },
          { type: 'speak', prompt: 'Swap contacts.', hanzi: '我们加微信吧。', pinyin: 'Wǒmen jiā Wēixìn ba.', english: "Let's add each other on WeChat." },
        ],
      },
    ],
  },

  // ═════════════════════════ RESTAURANT TOOLKIT ═════════════════════════
  {
    id: 'menu',
    module: 'food',
    title: 'Reading the menu and ordering',
    subtitle: 'Ask for the menu, get a recommendation, order your dishes',
    minutes: 10,
    goal: 'Ask for the menu, ask for recommendations and order several dishes.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Menu words',
        blocks: [
          { type: 'vocab', words: [W5.caidan, W5.cai, W5.diancai, W5.tuijian, W5.fen] },
          {
            type: 'pro',
            body: '点 (diǎn) has three jobs: o\'clock (三点), a little (一点), and "to order" (点菜). Same character, same sound, different meaning from context. Learn all three together.',
          },
          {
            type: 'remember',
            body: '点 literally means a dot. You "dot" the dishes you want on the menu with your pen: 点菜. That is also why 点 means "a little bit" (a dot of something) and "o\'clock" (the dot on the clock). A memory aid.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'Ask and order',
        blocks: [
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['请给我菜单。', 'May I have the menu, please?'],
              ['你们有什么推荐的？', 'What do you recommend?'],
              ['我要这个。', "I'll have this one."],
              ['我要一份面条。', "I'll have a portion of noodles."],
              ['再来一个。', 'One more, please.'],
            ],
          },
          {
            type: 'taglish',
            body: 'Kung hindi mo mabasa ang pangalan ng ulam, ituro mo lang at sabihin: 我要这个. Ito ang pinaka-simple at pinaka-ligtas na paraan para mag-order, kahit sa unang araw mo.',
          },
          {
            type: 'pro',
            body: 'Point at the menu and say 我要这个 ("I want this one"). It always works, even if you cannot read the dish names. Add 请 at the start to sound polite.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Ordering a meal',
        blocks: [
          {
            type: 'dialogue',
            title: 'At a restaurant',
            lines: [
              { speaker: 'G', hanzi: '不好意思，请给我菜单。', pinyin: 'Bù hǎoyìsi, qǐng gěi wǒ càidān.', english: 'Excuse me, may I have the menu?' },
              { speaker: 'G', hanzi: '你们有什么推荐的？', pinyin: 'Nǐmen yǒu shénme tuījiàn de?', english: 'What do you recommend?' },
              { speaker: 'W', hanzi: '这个很好吃。', pinyin: 'Zhè ge hěn hǎochī.', english: 'This one is delicious.' },
              { speaker: 'G', hanzi: '好，我要这个，再来一份米饭。', pinyin: 'Hǎo, wǒ yào zhè ge, zài lái yí fèn mǐfàn.', english: "Okay, I'll have this, and one more portion of rice." },
            ],
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Ask for the menu',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you ask "May I have the menu, please?"',
            options: ['请给我菜单。', '请我给菜单。', '我给请菜单。'],
            answer: 0,
            explain: '请 + 给 + 我 + thing.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Recommendations',
        blocks: [
          {
            type: 'quiz',
            question: 'Which asks "What do you recommend?"',
            options: ['你们有什么推荐的？', '你们什么菜单？', '推荐你什么有？'],
            answer: 0,
            explain: '推荐 means to recommend.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'The three jobs of 点',
        blocks: [
          {
            type: 'quiz',
            question: 'What does 点菜 mean?',
            options: ['to order dishes', 'to cook a meal', 'to pay the bill'],
            answer: 0,
            explain: '点 here means "to order", and 菜 means dishes.',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Ask for the menu.', hanzi: '不好意思，请给我菜单。', pinyin: 'Bù hǎoyìsi, qǐng gěi wǒ càidān.', english: 'Excuse me, may I have the menu?' },
          { type: 'speak', prompt: 'Point and order.', hanzi: '我要这个，再来一份米饭。', pinyin: 'Wǒ yào zhè ge, zài lái yí fèn mǐfàn.', english: "I'll have this, and one more rice." },
        ],
      },
    ],
  },

  {
    id: 'diet',
    module: 'food',
    title: 'Spice, taste, allergies and diets',
    subtitle: 'Say what you can and cannot eat, and how you like it',
    minutes: 10,
    goal: 'Describe taste preferences and explain allergies or a vegetarian diet.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Taste words',
        blocks: [
          { type: 'vocab', words: [W5.la, W5.tian, W5.xian, W5.suan, W5.shao, W5.duo, W5.buyao] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['我不吃辣。', "I don't eat spicy food."],
              ['请不要太辣。', 'Please do not make it too spicy.'],
              ['少放一点盐。', 'Go easy on the salt.'],
              ['我喜欢甜的。', 'I like sweet things.'],
              ['微辣', 'mildly spicy (as listed on menus)'],
            ],
          },
          {
            type: 'pro',
            body: 'Spice levels on menus often read 微辣 (mild), 中辣 (medium) and 特辣 (extra hot). If you are unsure, order 微辣 or say 请不要太辣. Chinese spicy food can be much hotter than expected.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'Allergies and diets',
        blocks: [
          { type: 'vocab', words: [W5.dui4, W5.guomin, W5.huasheng, W5.jidan, W5.niunai, W5.haixian, W5.chisu] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['我对花生过敏。', 'I am allergic to peanuts.'],
              ['我对海鲜过敏。', 'I am allergic to seafood.'],
              ['我吃素。', 'I am vegetarian.'],
              ['这个有鸡蛋吗？', 'Does this have egg?'],
            ],
          },
          {
            type: 'tip',
            label: 'Safety',
            body: 'For a serious allergy, say it clearly and early: 我对花生过敏，很严重 (wǒ duì huāshēng guòmǐn, hěn yánzhòng, "it is serious"). Also, check with staff, because a dish can contain an ingredient that is not on the menu.',
          },
          {
            type: 'taglish',
            body: 'Ang pattern ay: 我对 + [bagay] + 过敏 = "Allergic ako sa [bagay]". Ang 对 dito ay parang "sa" o "toward". Pwede mong palitan ang bagay ng kahit anong pagkain.',
          },
          {
            type: 'remember',
            body: 'Remember the pattern 我对___过敏 as a fill-in-the-blank. Memorise just one: 我对花生过敏. Then swap the food word whenever you need to.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Explaining your needs',
        blocks: [
          {
            type: 'dialogue',
            title: 'At a restaurant',
            lines: [
              { speaker: 'W', hanzi: '您想吃什么？', pinyin: 'Nín xiǎng chī shénme?', english: 'What would you like?' },
              { speaker: 'G', hanzi: '我吃素，我对花生过敏。', pinyin: 'Wǒ chī sù, wǒ duì huāshēng guòmǐn.', english: "I'm vegetarian and allergic to peanuts." },
              { speaker: 'W', hanzi: '好的。要辣的吗？', pinyin: 'Hǎo de. Yào là de ma?', english: 'Okay. Would you like it spicy?' },
              { speaker: 'G', hanzi: '请不要太辣。', pinyin: 'Qǐng bú yào tài là.', english: 'Please not too spicy.' },
            ],
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Not too spicy',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you say "Please do not make it too spicy"?',
            options: ['请不要太辣。', '请太辣不要。', '请不辣要太。'],
            answer: 0,
            explain: '请 + 不要 + 太 + adjective.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Allergies',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you say "I am allergic to seafood"?',
            options: ['我对海鲜过敏。', '我是海鲜过敏。', '我过敏对海鲜。'],
            answer: 0,
            explain: '我对 + thing + 过敏.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Vegetarian',
        blocks: [
          {
            type: 'quiz',
            question: 'Which means "I am vegetarian"?',
            options: ['我吃素。', '我不吃饭。', '我是辣。'],
            answer: 0,
            explain: '吃素 means to eat a vegetarian diet.',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Explain an allergy.', hanzi: '我对花生过敏。', pinyin: 'Wǒ duì huāshēng guòmǐn.', english: 'I am allergic to peanuts.' },
          { type: 'speak', prompt: 'Ask for less spice.', hanzi: '请不要太辣。', pinyin: 'Qǐng bú yào tài là.', english: 'Please not too spicy.' },
        ],
      },
    ],
  },

  {
    id: 'paying',
    module: 'food',
    title: 'Paying the bill',
    subtitle: 'Ask for the check, pay by card or phone, and take leftovers home',
    minutes: 10,
    goal: 'Ask for the bill, choose how to pay, and ask for a receipt or takeaway.',
    pages: [
      {
        kicker: 'Learn',
        title: 'The bill',
        blocks: [
          { type: 'vocab', words: [W5.maidan, W5.jiezhang, W5.yigong, W5.yong] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['服务员，买单！', 'Waiter, the check please!'],
              ['一共多少钱？', 'How much is it altogether?'],
              ['我们结账。', "We'd like to pay."],
            ],
          },
          {
            type: 'pro',
            body: 'In many restaurants you ask at the till or call the waiter with 服务员 (or 你好). 买单 is the everyday way to ask for the bill. 结账 is a little more formal.',
          },
          {
            type: 'tip',
            label: 'Good to know',
            body: 'Tipping is not usual in mainland China restaurants. Paying the bill amount is enough.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'How to pay',
        blocks: [
          { type: 'vocab', words: [W5.shuaka, W5.xianjin, W5.weixin, W5.zhifubao, W5.fapiao, W5.dabao] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['可以刷卡吗？', 'Can I pay by card?'],
              ['可以用微信吗？', 'Can I use WeChat?'],
              ['我用现金。', "I'll pay in cash."],
              ['请给我发票。', 'May I have a receipt?'],
              ['请帮我打包。', 'Please pack this to go.'],
            ],
          },
          {
            type: 'taglish',
            body: 'Pareho sa atin ang "pwede bang card?" Kaya laging magtanong muna: 可以刷卡吗? bago kumain, lalo na sa maliit na tindahan. Marami ay QR code (微信 o 支付宝) lang.',
          },
          {
            type: 'remember',
            body: '打包 means "hit and pack". Picture patting down a bag to fit your leftovers. It is a memory aid for the word that means takeaway. 请帮我打包 uses 帮 ("help"), which you know from 请帮我.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Settling up',
        blocks: [
          {
            type: 'dialogue',
            title: 'At the till',
            lines: [
              { speaker: 'G', hanzi: '服务员，买单！', pinyin: 'Fúwùyuán, mǎidān!', english: 'Waiter, the check please!' },
              { speaker: 'W', hanzi: '一共八十五块。', pinyin: 'Yígòng bāshíwǔ kuài.', english: 'Eighty-five yuan in total.' },
              { speaker: 'G', hanzi: '可以刷卡吗？', pinyin: 'Kěyǐ shuā kǎ ma?', english: 'Can I pay by card?' },
              { speaker: 'W', hanzi: '可以。', pinyin: 'Kěyǐ.', english: 'Yes.' },
              { speaker: 'G', hanzi: '请帮我打包。谢谢！', pinyin: 'Qǐng bāng wǒ dǎbāo. Xièxie!', english: 'Please pack this to go. Thanks!' },
            ],
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Ask for the bill',
        blocks: [
          {
            type: 'quiz',
            question: 'Which phrase asks for the check?',
            options: ['买单！', '点菜！', '欢迎光临！'],
            answer: 0,
            explain: '买单 means "the check, please".',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Pay by card',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you ask "Can I pay by card?"',
            options: ['可以刷卡吗？', '刷卡可以我吗？', '我卡刷可以？'],
            answer: 0,
            explain: '可以 + verb + 吗.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Leftovers',
        blocks: [
          {
            type: 'quiz',
            question: 'You want to take leftovers home. What do you say?',
            options: ['请帮我打包。', '请给我菜单。', '我不吃辣。'],
            answer: 0,
            explain: '打包 means to pack to go.',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Ask for the check.', hanzi: '服务员，买单！', pinyin: 'Fúwùyuán, mǎidān!', english: 'Waiter, the check please!' },
          { type: 'speak', prompt: 'Ask how to pay.', hanzi: '可以刷卡吗？', pinyin: 'Kěyǐ shuā kǎ ma?', english: 'Can I pay by card?' },
        ],
      },
    ],
  },

  {
    id: 'fixes',
    module: 'food',
    title: 'When something goes wrong',
    subtitle: 'Wrong dish, slow service, can I change it?',
    minutes: 9,
    goal: 'Politely handle a slow order, a wrong dish, or a request to change something.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Polite problem-solving',
        blocks: [
          { type: 'vocab', words: [W5.kuai4, W5.hai2, W5.huan] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['我的菜还没来。', "My dish hasn't come yet."],
              ['请快一点，谢谢。', 'Please be a bit quicker, thanks.'],
              ['这个不是我点的。', "This isn't what I ordered."],
              ['可以换一个吗？', 'Could I change it?'],
              ['再来一杯水。', 'One more glass of water.'],
            ],
          },
          {
            type: 'pro',
            body: 'Start every complaint with 不好意思 and end with 谢谢. It is not about being weak, it is about being polite so staff want to help. The same words, said calmly, get the fastest fix.',
          },
          {
            type: 'remember',
            body: '还没 = "still not yet". Use 还没 + verb for something that has not happened: 还没来 (has not come), 还没吃 (have not eaten). Link it to 没, which you know from 没有.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'What staff will say',
        blocks: [
          { type: 'vocab', words: [W5.mashang, W5.shaodeng] },
          {
            type: 'taglish',
            body: 'Para sa mga nagtatrabaho sa restaurant: 马上来 ("papunta na po") at 请稍等 ("saglit lang po") ang pinaka-madalas na sasabihin mo sa bisita. Gamitin ang 对不起 kung nagkamali ka.',
          },
          {
            type: 'dialogue',
            title: 'A mix-up',
            lines: [
              { speaker: 'G', hanzi: '不好意思，这个不是我点的。', pinyin: 'Bù hǎoyìsi, zhè ge bú shì wǒ diǎn de.', english: "Excuse me, this isn't what I ordered." },
              { speaker: 'W', hanzi: '对不起！请稍等，马上来。', pinyin: 'Duìbuqǐ! Qǐng shāoděng, mǎshàng lái.', english: "Sorry! Please wait a moment, coming right away." },
              { speaker: 'G', hanzi: '没事，谢谢。', pinyin: 'Méishì, xièxie.', english: "No problem, thanks." },
            ],
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Not ordered',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you say "This isn\'t what I ordered"?',
            options: ['这个不是我点的。', '这个我不是点。', '我点不是这个的。'],
            answer: 0,
            explain: '点 means to order, and the pattern is 不是我点的.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Not yet',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you say "My dish hasn\'t come yet"?',
            options: ['我的菜还没来。', '我的菜不来了。', '我的菜没还来。'],
            answer: 0,
            explain: '还没 + verb means "not yet".',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Staff reply',
        blocks: [
          {
            type: 'quiz',
            question: 'As staff, what do you say to mean "just a moment, coming right up"?',
            options: ['请稍等，马上来。', '请坐，欢迎光临。', '再见，慢走。'],
            answer: 0,
            explain: '稍等 is "wait a moment" and 马上来 is "coming right away".',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Report a mix-up.', hanzi: '不好意思，这个不是我点的。', pinyin: 'Bù hǎoyìsi, zhè ge bú shì wǒ diǎn de.', english: "Excuse me, this isn't what I ordered." },
          { type: 'speak', prompt: 'As staff.', hanzi: '请稍等，马上来。', pinyin: 'Qǐng shāoděng, mǎshàng lái.', english: 'Please wait, coming right away.' },
        ],
      },
    ],
  },

  {
    id: 'takeorder',
    module: 'food',
    title: 'Taking an order (for staff)',
    subtitle: 'What servers say from "ready to order?" to "anything else?"',
    minutes: 10,
    goal: 'Take a guest\'s order in Mandarin, from greeting to bringing the dish.',
    pages: [
      {
        kicker: 'Learn',
        title: 'The server\'s script',
        blocks: [
          { type: 'vocab', words: [W5.biede, W5.haiyao, W5.mashang, W5.shaodeng] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['您想点什么？', 'What would you like to order?'],
              ['要辣的吗？', 'Would you like it spicy?'],
              ['还要别的吗？', 'Anything else?'],
              ['请稍等，马上来。', 'One moment, coming right up.'],
              ['您的菜来了，请慢用。', "Your dish is here, enjoy."],
            ],
          },
          {
            type: 'pro',
            body: 'Always use 您 for guests and finish with 请慢用 when the food arrives. These two touches are what guests in China notice as good service. 请 + short verb is the pattern for nearly every instruction.',
          },
          {
            type: 'taglish',
            body: 'Para sa mga nagtatrabaho sa restaurant, hindi mo kailangan ng mahabang Mandarin. Matuto ng limang pangungusap na ito nang buo, at kaya mo nang mag-serve ng karamihan ng bisita.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'A full order',
        blocks: [
          {
            type: 'dialogue',
            title: 'Server and guest',
            lines: [
              { speaker: 'S', hanzi: '您好，您想点什么？', pinyin: 'Nín hǎo, nín xiǎng diǎn shénme?', english: 'Hello, what would you like to order?' },
              { speaker: 'G', hanzi: '我要一份面条。', pinyin: 'Wǒ yào yí fèn miàntiáo.', english: "I'd like a portion of noodles." },
              { speaker: 'S', hanzi: '要辣的吗？', pinyin: 'Yào là de ma?', english: 'Spicy?' },
              { speaker: 'G', hanzi: '不要太辣。', pinyin: 'Bú yào tài là.', english: 'Not too spicy.' },
              { speaker: 'S', hanzi: '好的。还要别的吗？', pinyin: 'Hǎo de. Hái yào biéde ma?', english: 'Okay. Anything else?' },
              { speaker: 'G', hanzi: '不用了，谢谢。', pinyin: 'Búyòng le, xièxie.', english: "No, thanks." },
              { speaker: 'S', hanzi: '请稍等，马上来。', pinyin: 'Qǐng shāoděng, mǎshàng lái.', english: 'One moment, coming right up.' },
            ],
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Anything else?',
        blocks: [
          {
            type: 'quiz',
            question: 'You want to ask the guest "Anything else?"',
            options: ['还要别的吗？', '要辣的吗？', '几位？'],
            answer: 0,
            explain: '还要别的吗 means "anything else?".',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Spicy?',
        blocks: [
          {
            type: 'quiz',
            question: 'You want to ask "Would you like it spicy?"',
            options: ['要辣的吗？', '要别的吗？', '您想点什么？'],
            answer: 0,
            explain: '辣 means spicy, 要辣的吗 asks if they want the spicy one.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Serving',
        blocks: [
          {
            type: 'quiz',
            question: 'You put the dish on the table. Which is the polite phrase?',
            options: ['请慢用。', '再见。', '不好意思。'],
            answer: 0,
            explain: '请慢用 means "please enjoy".',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Take the order.', hanzi: '您好，您想点什么？', pinyin: 'Nín hǎo, nín xiǎng diǎn shénme?', english: 'Hello, what would you like to order?' },
          { type: 'speak', prompt: 'Check for more.', hanzi: '还要别的吗？', pinyin: 'Hái yào biéde ma?', english: 'Anything else?' },
          { type: 'speak', prompt: 'Serve.', hanzi: '您的菜来了，请慢用。', pinyin: 'Nín de cài lái le, qǐng màn yòng.', english: 'Your dish is here, enjoy.' },
        ],
      },
    ],
  },
];


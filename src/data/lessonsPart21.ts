import type { Block, Lesson, Page, Word } from './types';
import { W22 } from './wordsPart22';

type Quiz = { q: string; opts: string[]; ans: number; exp: string };
type Speak = { prompt: string; hanzi: string; pinyin: string; english: string };

interface TopicOpts {
  id: string;
  module: Lesson['module'];
  title: string;
  subtitle: string;
  minutes: number;
  goal: string;
  overview: string[];
  tlOverview: string;
  words: Word[];
  formula: { head: string[]; rows: string[][] };
  pro: string;
  mistake: string;
  dialogue: { title: string; lines: { speaker: string; hanzi: string; pinyin: string; english: string }[] };
  remember: string;
  tlRemember: string;
  quiz: [Quiz, Quiz];
  speak: [Speak, Speak];
}

/** Builds one lesson in the six-part shape: overview, deep dive, practice, remember, check, speak. */
function topic(o: TopicOpts): Lesson {
  const deep: Block[] = [
    { type: 'vocab', title: 'Words for this lesson', words: o.words },
    { type: 'table', head: o.formula.head, rows: o.formula.rows, caption: 'The pattern, step by step' },
    { type: 'pro', body: o.pro },
    { type: 'tip', label: 'Common mistake', body: o.mistake },
  ];
  const pages: Page[] = [
    {
      kicker: 'Overview',
      title: 'Why this matters',
      blocks: [
        { type: 'text', title: 'The idea', body: o.overview },
        { type: 'taglish', body: o.tlOverview },
      ],
    },
    { kicker: 'Deep dive', title: 'Build it piece by piece', blocks: deep },
    {
      kicker: 'Practice',
      title: 'Hear it in a real exchange',
      blocks: [{ type: 'dialogue', title: o.dialogue.title, lines: o.dialogue.lines }],
    },
    {
      kicker: 'Remember',
      title: 'Remember moment',
      blocks: [
        { type: 'remember', body: o.remember },
        { type: 'taglish', body: o.tlRemember },
      ],
    },
    {
      kicker: 'Check',
      title: 'Quick check',
      blocks: o.quiz.map((z) => ({ type: 'quiz' as const, question: z.q, options: z.opts, answer: z.ans, explain: z.exp })),
    },
    {
      kicker: 'Speak',
      title: 'Your turn',
      blocks: o.speak.map((s) => ({ type: 'speak' as const, prompt: s.prompt, hanzi: s.hanzi, pinyin: s.pinyin, english: s.english })),
    },
  ];
  return { id: o.id, module: o.module, title: o.title, subtitle: o.subtitle, minutes: o.minutes, goal: o.goal, pages };
}

export const PART21_LESSONS: Lesson[] = [
  topic({
    id: 'signs-everyday',
    module: 'daily',
    title: 'Reading signs: entrance, exit, no parking',
    subtitle: 'The signs you see every day in China',
    minutes: 9,
    goal: 'Read the common signs for entrance, exit, forbidden, and be careful, and ask if you can park.',
    overview: [
      'Signs in public places are short and fixed. Once you know a few characters, you can find the exit, the entrance and the rules without help.',
      'Most signs use two-character words. Learn the pair, and you will recognise the sign even if the rest of the text is new.',
    ],
    tlOverview: 'Maikli at pirmi ang mga karatula sa pampublikong lugar. Kapag alam mo ang ilang karakter, kaya mo nang hanapin ang labasan, pasukan, at mga patakaran nang walang tulong.',
    words: [W22.rukou, W22.chukou, W22.jinzhi, W22.zhuyi, W22.xiaoxin],
    formula: {
      head: ['Sign', 'Say it', 'Meaning'],
      rows: [
        ['入口 (entrance)', 'rùkǒu', 'Enter here (入 = enter)'],
        ['出口 (exit)', 'chūkǒu', 'Leave here (出 = go out)'],
        ['禁止 + action', 'jìnzhǐ', 'No ... (for example, 禁止停车)'],
        ['注意 / 小心', 'zhùyì / xiǎoxīn', 'Pay attention / be careful'],
      ],
    },
    pro: 'Read the pair as a shape: 入口 is "in + mouth" and 出口 is "out + mouth". Once you see 口 (mouth) at the end, you know the word is about a passage or door.',
    mistake: 'Do not read 禁止 as "stop" on its own. It means "no" and it needs an action after it, like 禁止停车 (no parking) or 禁止吸烟 (no smoking).',
    dialogue: {
      title: 'Can I park here?',
      lines: [
        { speaker: 'A', hanzi: '这里可以停车吗？', pinyin: 'Zhèli kěyǐ tíngchē ma?', english: 'Can I park here?' },
        { speaker: 'B', hanzi: '不可以，有禁止的标志。', pinyin: 'Bù kěyǐ, yǒu jìnzhǐ de biāozhì.', english: 'No, there is a no-parking sign.' },
      ],
    },
    remember: 'Read a sign in three steps: find the verb (停车, 吸烟), find 禁止 or 注意 for the rule, then check the direction word (入, 出). That is most signs.',
    tlRemember: 'Basahin ang karatula sa tatlong hakbang: hanapin ang pandiwa (停车, 吸烟), hanapin ang 禁止 o 注意 para sa patakaran, saka tingnan ang direksyon (入, 出). Ganito ang karamihan ng karatula.',
    quiz: [
      { q: 'What does 入口 mean?', opts: ['entrance', 'exit', 'restroom'], ans: 0, exp: '入口 (rùkǒu) is entrance. 出口 is exit, and 厕所 is restroom.' },
      { q: 'What does 禁止停车 tell you?', opts: ['No parking', 'Parking is free', 'Park here'], ans: 0, exp: '禁止 means no or forbidden, and 停车 means park. Together: no parking.' },
    ],
    speak: [
      { prompt: 'Ask a guard where the exit is.', hanzi: '出口在左边。', pinyin: 'Chūkǒu zài zuǒbian.', english: 'The exit is on the left.' },
      { prompt: 'Tell someone to be careful.', hanzi: '请注意安全。', pinyin: 'Qǐng zhùyì ānquán.', english: 'Please pay attention to safety.' },
    ],
  }),

  topic({
    id: 'appearance',
    module: 'talk',
    title: 'Describing people: tall, slim, handsome',
    subtitle: 'How to describe what someone looks like',
    minutes: 10,
    goal: 'Describe a person\'s height, build, age and looks, and say what they look like in a few words.',
    overview: [
      'Describing a person is one of the most common things you do in a conversation: finding a friend at a station, or telling someone what a new classmate looks like.',
      'The adjectives are the same ones you already know for objects: 高, 矮, 胖, 瘦. The difference is that you describe people with 很 or 比 and a body word.',
    ],
    tlOverview: 'Isa sa pinakakaraniwang ginagawa ang paglalarawan ng tao sa usapan: paghahanap sa kaibigan sa istasyon, o pagsasabi kung ano ang itsura ng bagong kaklase. Ginagamit mo pa rin ang mga pang-uring alam mo, gaya ng 高, 矮, 胖, 瘦.',
    words: [W22.gao, W22.ai, W22.pang, W22.shou, W22.shuai, W22.lao, W22.piaoliang, W22.nianqing, W22.toufa],
    formula: {
      head: ['Describe', 'Say it', 'Meaning'],
      rows: [
        ['他很高。', 'Tā hěn gāo.', 'He is tall.'],
        ['她很瘦。', 'Tā hěn shòu.', 'She is slim.'],
        ['他头发很短。', 'Tā tóufa hěn duǎn.', 'His hair is short.'],
        ['她看起来很年轻。', 'Tā kàn qǐlái hěn niánqīng.', 'She looks young.'],
      ],
    },
    pro: 'Use 看起来 (looks like) for a first impression: 他看起来很年轻 (he looks young). It is safer than stating someone\'s age, and it sounds natural in a friendly conversation.',
    mistake: 'Do not call someone 胖 or 老 in front of them to be funny. 胖 can sound rude when used about a person directly. Say 比较壮 (sturdy) or 看起来很精神 instead, to stay polite.',
    dialogue: {
      title: 'What is he like?',
      lines: [
        { speaker: 'A', hanzi: '他是什么样的人？', pinyin: 'Tā shì shénme yàng de rén?', english: 'What kind of person is he?' },
        { speaker: 'B', hanzi: '他很高，头发很短。', pinyin: 'Tā hěn gāo, tóufa hěn duǎn.', english: 'He is tall and has short hair.' },
      ],
    },
    remember: 'Build a description in this order: height (高/矮), build (瘦/胖), hair or look (头发, 漂亮, 帅), then age (年轻/老). Four short steps cover almost anyone.',
    tlRemember: 'Buuin ang paglalarawan sa ganitong ayos: taas (高/矮), katawan (瘦/胖), buhok o itsura (头发, 漂亮, 帅), saka edad (年轻/老). Apat na maiikling hakbang ang sapat para sa halos kahit sino.',
    quiz: [
      { q: 'What does 帅 mean?', opts: ['handsome', 'ugly', 'old'], ans: 0, exp: '帅 (shuài) is handsome. 老 is old, and 矮 is short.' },
      { q: 'What does 胖 mean?', opts: ['plump; fat', 'thin', 'tall'], ans: 0, exp: '胖 (pàng) is plump or fat. 瘦 is thin, and 高 is tall.' },
    ],
    speak: [
      { prompt: 'Say she is pretty.', hanzi: '她很漂亮。', pinyin: 'Tā hěn piàoliang.', english: 'She is pretty.' },
      { prompt: 'Say he looks young.', hanzi: '他看起来很年轻。', pinyin: 'Tā kàn qǐlái hěn niánqīng.', english: 'He looks young.' },
    ],
  }),

  topic({
    id: 'gifts-celebrations',
    module: 'daily',
    title: 'Gifts and red envelopes',
    subtitle: 'Giving, receiving and sending good wishes',
    minutes: 10,
    goal: 'Offer a gift politely, thank someone for one, and send New Year wishes with a red envelope.',
    overview: [
      'Giving and receiving gifts is an important part of Chinese celebrations. People often refuse a gift at first before accepting, and they thank the giver warmly.',
      'The red envelope (红包) is a classic gift at New Year and weddings. It holds money, and it is often given with a short wish.',
    ],
    tlOverview: 'Mahalaga ang pagbibigay at pagtanggap ng regalo sa mga pagdiriwang ng Chinese. Madalas tumanggi muna ang tao bago tanggapin, at nagpapasalamat sila nang mainit. Ang 红包 ay klasikong regalo tuwing Bagong Taon at kasal.',
    words: [W22.liwu, W22.hongbao, W22.song, W22.zhufu, W22.shoudao],
    formula: {
      head: ['Situation', 'Say it', 'Meaning'],
      rows: [
        ['Giving a gift', '这是给你的礼物。', 'This is a gift for you.'],
        ['Receiving a gift', '谢谢，我收到了。', 'Thank you, I received it.'],
        ['Sending a red envelope', '我送你一个红包。', 'I give you a red envelope.'],
        ['New Year wish', '祝你新年快乐。', 'Wishing you a happy New Year.'],
      ],
    },
    pro: 'Refuse a gift once before accepting: 不用了 (you do not need to). Then accept with 谢谢. This shows politeness, and the giver will usually insist.',
    mistake: 'Do not open a gift in front of the giver right away in very formal settings. Thank them first, and open it later, unless they ask you to open it now.',
    dialogue: {
      title: 'A gift for you',
      lines: [
        { speaker: 'A', hanzi: '这是给你的礼物。', pinyin: 'Zhè shì gěi nǐ de lǐwù.', english: 'This is a gift for you.' },
        { speaker: 'B', hanzi: '谢谢，我收到了。', pinyin: 'Xièxie, wǒ shōudào le.', english: 'Thank you, I have received it.' },
      ],
    },
    remember: 'Gift phrases come in pairs: giving is 送, and receiving is 收到. Thanks is 谢谢, and the wish is 祝 + you + wish, as in 祝你新年快乐.',
    tlRemember: 'Magkapares ang mga parirala ng regalo: ang pagbibigay ay 送, at ang pagtanggap ay 收到. Ang pasasalamat ay 谢谢, at ang hiling ay 祝 + ikaw + hiling, gaya ng 祝你新年快乐.',
    quiz: [
      { q: 'What is a 红包?', opts: ['red envelope with money', 'red dress', 'red wine'], ans: 0, exp: '红包 (hóngbāo) is a red envelope with money, often given at New Year.' },
      { q: 'What does 礼物 mean?', opts: ['gift', 'ticket', 'letter'], ans: 0, exp: '礼物 (lǐwù) is gift or present. 票 is ticket, and 信 is letter.' },
    ],
    speak: [
      { prompt: 'Say you give a red envelope.', hanzi: '我送你一个红包。', pinyin: 'Wǒ sòng nǐ yí gè hóngbāo.', english: 'I give you a red envelope.' },
      { prompt: 'Wish someone a happy New Year.', hanzi: '祝你新年快乐。', pinyin: 'Zhù nǐ xīnnián kuàilè.', english: 'Wishing you a happy New Year.' },
    ],
  }),

  topic({
    id: 'workplace',
    module: 'work',
    title: 'At work: meetings, bosses and overtime',
    subtitle: 'Everyday words for an office day',
    minutes: 11,
    goal: 'Talk about meetings, colleagues, reports, finishing work and overtime with a boss.',
    overview: [
      'Office conversations are short and to the point. Most of the time you talk about when a meeting starts, who you work with, and when you finish.',
      'Learn the time words with the work words: 下班 (finish work), 加班 (overtime) and 开会 (have a meeting) are the core set for most offices.',
    ],
    tlOverview: 'Maikli at diretso ang usapan sa opisina. Kadalasan, pinag-uusapan ang oras ng pulong, mga katrabaho, at kung kailan matatapos. Pag-aralan ang mga salita sa oras kasama ng mga salita sa trabaho.',
    words: [W22.huiyi, W22.tongshi, W22.laoban, W22.baogao, W22.xiaban, W22.jiaban],
    formula: {
      head: ['Situation', 'Say it', 'Meaning'],
      rows: [
        ['Ask about a meeting', '会议几点开始？', 'What time does the meeting start?'],
        ['Talk about colleagues', '我的同事很友好。', 'My colleagues are friendly.'],
        ['Finish work', '你今天几点下班？', 'What time do you finish work today?'],
        ['Overtime', '今天要加班。', 'I have to work overtime today.'],
      ],
    },
    pro: 'Use 要 with 加班 for a required task: 今天要加班 (I have to work late today). Use 可以 to ask if you may leave: 我可以先下班吗？ (may I leave first?).',
    mistake: 'Do not say 我要下班 to mean "I am going home now" in a meeting. 下班 is "finish work for the day", so say 我先走了 (I am heading off) if you are leaving early.',
    dialogue: {
      title: 'When do you finish?',
      lines: [
        { speaker: 'A', hanzi: '你今天几点下班？', pinyin: 'Nǐ jīntiān jǐ diǎn xiàbān?', english: 'What time do you finish work today?' },
        { speaker: 'B', hanzi: '今天要加班。', pinyin: 'Jīntiān yào jiābān.', english: 'I have to work overtime today.' },
      ],
    },
    remember: 'Three office verbs to learn first: 开会 (hold a meeting), 下班 (finish work), 加班 (work overtime). Put the time or day in front, and the verb follows, as in 今天要加班.',
    tlRemember: 'Tatlong pandiwa sa opisina na unahin: 开会 (magpulong), 下班 (matapos ang trabaho), 加班 (mag-overtime). Ilagay ang oras o araw sa unahan, saka sumunod ang pandiwa, gaya ng 今天要加班.',
    quiz: [
      { q: 'What does 下班 mean?', opts: ['to finish work', 'to start work', 'to take a break'], ans: 0, exp: '下班 (xiàbān) means finish work for the day. 上班 means start work.' },
      { q: 'What does 老板 mean?', opts: ['boss', 'colleague', 'customer'], ans: 0, exp: '老板 (lǎobǎn) is boss or owner. 同事 is colleague, and 客人 is guest or customer.' },
    ],
    speak: [
      { prompt: 'Ask what time the meeting starts.', hanzi: '会议几点开始？', pinyin: 'Huìyì jǐ diǎn kāishǐ?', english: 'What time does the meeting start?' },
      { prompt: 'Say your colleague is friendly.', hanzi: '我的同事很友好。', pinyin: 'Wǒ de tóngshì hěn yǒuhǎo.', english: 'My colleague is friendly.' },
    ],
  }),

  topic({
    id: 'learner-phrases',
    module: 'talk',
    title: 'Asking how to say it: repeat, slow down, meaning',
    subtitle: 'The phrases every learner needs in a real conversation',
    minutes: 9,
    goal: 'Ask what a word means, ask someone to repeat or slow down, and ask how to say something.',
    overview: [
      'Real conversations stop often. You will not understand every word, and that is normal. The most useful skill is asking for help in Chinese.',
      'Five short phrases cover most situations: how do you say it, what does it mean, please say it again, please say it slower, and a polite please at the start.',
    ],
    tlOverview: 'Madalas huminto ang totoong usapan. Hindi mo maiintindihan ang bawat salita, at normal lang iyon. Ang pinakamahalagang kasanayan ay ang paghingi ng tulong sa Chinese. Limang maiikling parirala ang sapat sa karamihan ng sitwasyon.',
    words: [W22.zenmeshuo, W22.yisi, W22.yibian, W22.man, W22.qing],
    formula: {
      head: ['Ask for', 'Say it', 'Meaning'],
      rows: [
        ['How to say it', '这个怎么说？', 'How do you say this?'],
        ['What it means', '这个词什么意思？', 'What does this word mean?'],
        ['Say it again', '请再说一遍。', 'Please say it once more.'],
        ['Slow down', '请说慢一点。', 'Please speak a bit slower.'],
      ],
    },
    pro: 'Start with 请 (please) to sound polite: 请再说一遍 (please say it once more). Add 一点 to any verb to make it gentle: 说慢一点 (a bit slower).',
    mistake: 'Do not say 我不懂 (I do not understand) as your only answer. It ends the conversation. Ask 什么意思？ or 请再说一遍 to keep going.',
    dialogue: {
      title: 'What does it mean?',
      lines: [
        { speaker: 'A', hanzi: '这个词什么意思？', pinyin: 'Zhège cí shénme yìsi?', english: 'What does this word mean?' },
        { speaker: 'B', hanzi: '意思是椅子。', pinyin: 'Yìsi shì yǐzi.', english: 'It means chair.' },
      ],
    },
    remember: 'Three questions cover most help: 怎么说 (how do you say it), 什么意思 (what does it mean), 请再说一遍 (please repeat). Learn these three before any others.',
    tlRemember: 'Tatlong tanong ang sumasagot sa karamihan ng pangangailangan: 怎么说 (paano sabihin), 什么意思 (ano ang ibig sabihin), 请再说一遍 (pakiulit). Pag-aralan muna ang tatlong ito bago ang iba.',
    quiz: [
      { q: 'What does 怎么说 mean?', opts: ['how do you say', 'how do you spell', 'how much'], ans: 0, exp: '怎么说 (zěnme shuō) asks how to say something. 多少钱 is how much.' },
      { q: 'What does 慢 mean?', opts: ['slow', 'fast', 'far'], ans: 0, exp: '慢 (màn) is slow. 快 (kuài) is fast.' },
    ],
    speak: [
      { prompt: 'Ask someone to say it again.', hanzi: '请再说一遍。', pinyin: 'Qǐng zài shuō yíbiàn.', english: 'Please say it once more.' },
      { prompt: 'Ask someone to slow down.', hanzi: '请说慢一点。', pinyin: 'Qǐng shuō màn yìdiǎn.', english: 'Please speak a bit slower.' },
    ],
  }),
];

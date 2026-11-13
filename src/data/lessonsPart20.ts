import type { Block, Lesson, Page, Word } from './types';
import { W21 } from './wordsPart21';

type Quiz = { q: string; opts: string[]; ans: number; exp: string };
type Speak = { prompt: string; hanzi: string; pinyin: string; english: string };

interface GrammarOpts {
  id: string;
  level: 1 | 2 | 3 | 4;
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

const LEVEL_NAME = { 1: 'Beginner', 2: 'Elementary', 3: 'Intermediate', 4: 'Advanced' } as const;

/** Builds one grammar lesson in the same six-part shape: overview, deep dive, practice, remember, check, speak. */
export function grammar(o: GrammarOpts): Lesson {
  const deep: Block[] = [
    { type: 'vocab', title: 'Words for this pattern', words: o.words },
    { type: 'table', head: o.formula.head, rows: o.formula.rows, caption: 'The pattern, step by step' },
    { type: 'pro', body: o.pro },
    { type: 'tip', label: 'Common mistake', body: o.mistake },
  ];
  const pages: Page[] = [
    {
      kicker: 'Overview',
      title: 'Why this pattern matters',
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
  return {
    id: o.id,
    module: 'grammar',
    title: o.title,
    subtitle: `Level ${o.level} · ${LEVEL_NAME[o.level]}: ${o.subtitle}`,
    minutes: o.minutes,
    goal: o.goal,
    pages,
  };
}

export const PART20_LESSONS: Lesson[] = [
  grammar({
    id: 'gram-zhe',
    level: 1,
    title: 'Something is still happening: 着',
    subtitle: 'Doors open, people sitting, lights on',
    minutes: 10,
    goal: 'Describe a state that continues with 着, such as a door that is open or a person who is sitting.',
    overview: [
      '着 (zhe) is a small particle that you add after a verb. It says the state is still going on: the door is still open, the lamp is still on, the person is still sitting.',
      'Use it for positions and conditions, not for actions that finished. That is the key difference from 了.',
    ],
    tlOverview: 'Ang 着 ay maliit na particle na inilalagay pagkatapos ng pandiwa. Ipinapakita nitong patuloy pa rin ang kalagayan: bukas pa rin ang pinto, nakabukas pa rin ang ilaw, nakaupo pa rin ang tao. Hindi ito para sa tapos nang kilos; iyon ang pagkakaiba nito sa 了.',
    words: [W21.men, W21.kai, W21.guan, W21.zuo, W21.zhan, W21.deng, W21.zhe],
    formula: {
      head: ['Pattern', 'Example', 'Meaning'],
      rows: [
        ['Object + verb + 着', '门开着。', 'The door is open.'],
        ['Verb + 着', '他坐着。', 'He is sitting.'],
        ['Verb + 着 + 吃/看', '他站着吃饭。', 'He is eating standing up.'],
      ],
    },
    pro: 'Say 着 with verbs of position or state: 坐, 站, 开, 关, 躺. "Sitting", "standing", "open", "closed" are all natural with 着.',
    mistake: 'Do not use 着 for a finished action like "I ate". For that, use 了 (我吃了). 着 means "still in that state", not "already done".',
    dialogue: {
      title: 'Is the door open?',
      lines: [
        { speaker: 'A', hanzi: '门开着吗？', pinyin: 'Mén kāi zhe ma?', english: 'Is the door open?' },
        { speaker: 'B', hanzi: '开着，请进。', pinyin: 'Kāi zhe, qǐng jìn.', english: 'It is open, come in.' },
      ],
    },
    remember: 'Think of 着 as "still in that position". 灯开着 = the light is on (and still on). Once you add 了 at the end, the meaning changes to something that just happened.',
    tlRemember: 'Isipin ang 着 bilang "nasa ganoong posisyon pa rin". 灯开着 = nakabukas ang ilaw (at bukas pa rin). Kapag nilagyan mo ng 了 sa dulo, nagbabago ang kahulugan tungo sa bagong nangyari.',
    quiz: [
      { q: 'What does 门开着 mean?', opts: ['The door is open', 'Open the door', 'The door opened'], ans: 0, exp: '门开着 (mén kāi zhe) means the door is open and stays that way. 开门 means open the door.' },
      { q: 'Which sentence shows a state that continues?', opts: ['他坐着。', '他坐了。', '他坐过。'], ans: 0, exp: '他坐着 means he is sitting (the state continues). 了 and 过 both point to finished actions.' },
    ],
    speak: [
      { prompt: 'Say the light is on.', hanzi: '灯开着。', pinyin: 'Dēng kāi zhe.', english: 'The light is on.' },
      { prompt: 'Say he is eating while standing.', hanzi: '他站着吃饭。', pinyin: 'Tā zhàn zhe chī fàn.', english: 'He is eating while standing.' },
    ],
  }),

  grammar({
    id: 'gram-yibian',
    level: 1,
    title: 'Two things at once: 一边…一边',
    subtitle: 'Eat and read, sing and dance',
    minutes: 10,
    goal: 'Say that two actions happen at the same time with 一边…一边.',
    overview: [
      '一边…一边 (yìbiān … yìbiān) links two actions that happen together. Put a verb after each 一边. It is the Chinese way to say "while doing this, I am doing that".',
      'Both verbs must be actions you can do at the same time, like eating and watching TV. You cannot use it for two actions that happen one after another.',
    ],
    tlOverview: 'Ang 一边…一边 ay nag-uugnay ng dalawang kilos na nangyayari nang sabay. Maglagay ng pandiwa pagkatapos ng bawat 一边. Ito ang paraan ng Chinese para sabihing "habang ginagawa ko ito, ginagawa ko rin iyon".',
    words: [W21.yibian, W21.kan, W21.chi, W21.shu, W21.fan, W21.shuo, W21.xie],
    formula: {
      head: ['Pattern', 'Example', 'Meaning'],
      rows: [
        ['一边 + verb 1，一边 + verb 2', '一边吃饭，一边看书。', 'Eating and reading at the same time.'],
        ['一边 + verb 1 + 一边 + verb 2', '我一边走一边说。', 'I talk while walking.'],
      ],
    },
    pro: 'Choose two verbs that can both go on at once: 吃/看, 听/写, 走/说, 唱/跳. If one action has to finish before the other starts, use 然后 (then) instead.',
    mistake: 'Do not drop the second 一边. Both parts are needed: 一边吃，一边看 (correct) rather than 一边吃看 (wrong).',
    dialogue: {
      title: 'What are you doing?',
      lines: [
        { speaker: 'A', hanzi: '你在做什么？', pinyin: 'Nǐ zài zuò shénme?', english: 'What are you doing?' },
        { speaker: 'B', hanzi: '一边做饭，一边听音乐。', pinyin: 'Yì biān zuò fàn, yì biān tīng yīnyuè.', english: 'I am cooking while listening to music.' },
      ],
    },
    remember: 'Think of 一边 as "on one side" and the second 一边 as "on the other side". Two hands doing two jobs: one 一边 for each action.',
    tlRemember: 'Isipin ang 一边 bilang "sa isang tabi" at ang pangalawang 一边 bilang "sa kabilang tabi". Parang dalawang kamay na may dalawang gawain: isang 一边 para sa bawat kilos.',
    quiz: [
      { q: 'What does 一边…一边 express?', opts: ['Two things at the same time', 'First one, then the other', 'Either this or that'], ans: 0, exp: 'Two actions at the same time. For one after another, use 然后.' },
      { q: 'Which is correct?', opts: ['我一边走，一边说。', '我一边走说。', '我走一边说。'], ans: 0, exp: 'Both parts need 一边 with a comma between them: 我一边走，一边说.' },
    ],
    speak: [
      { prompt: 'Say you talk while you walk.', hanzi: '我一边走一边说。', pinyin: 'Wǒ yì biān zǒu yì biān shuō.', english: 'I talk while I walk.' },
      { prompt: 'Say she sings and dances at once.', hanzi: '她一边唱歌，一边跳舞。', pinyin: 'Tā yì biān chàng gē, yì biān tiào wǔ.', english: 'She sings while she dances.' },
    ],
  }),

  grammar({
    id: 'gram-yue-yue',
    level: 2,
    title: 'More and more: 越…越 and 越来越',
    subtitle: 'The more you learn, the more you like it',
    minutes: 11,
    goal: 'Say a change grows steadily with 越来越, and link two things that rise together with 越…越.',
    overview: [
      '越来越 (yuèláiyuè) means "more and more". It describes a change that keeps going, like the weather getting colder.',
      '越…越 (yuè … yuè) links two parts that rise together: the more you study, the more you learn. You will hear both in everyday speech.',
    ],
    tlOverview: 'Ang 越来越 ay nangangahulugang "lalong-lalo". Inilalarawan nito ang pagbabagong patuloy, gaya ng lalong ginawin ang panahon. Ang 越…越 naman ay nagdurugtong ng dalawang bagay na sabay tumataas: kung lalo kang mag-aral, lalo kang matututo.',
    words: [W21.yue, W21.yuelaiyue, W21.xue, W21.leng, W21.lai, W21.hao],
    formula: {
      head: ['Pattern', 'Example', 'Meaning'],
      rows: [
        ['越来越 + adjective', '天气越来越冷。', 'The weather is getting colder and colder.'],
        ['越 + verb + 越 + adjective', '我越学越喜欢。', 'The more I learn, the more I like it.'],
        ['越 + adjective + 越 + adjective', '越快越好。', 'The faster the better.'],
      ],
    },
    pro: 'Use 越来越 in front of an adjective for a steady change. Use 越…越 for the "the more…the more" link. Both can be used with 好: 越快越好 = "the faster, the better".',
    mistake: 'Do not say 越很冷 or 越来越很冷. Drop 很 after 越来越: write 越来越冷 (more and more cold).',
    dialogue: {
      title: 'How is your Chinese?',
      lines: [
        { speaker: 'A', hanzi: '你的中文怎么样？', pinyin: 'Nǐ de Zhōngwén zěnmeyàng?', english: 'How is your Chinese?' },
        { speaker: 'B', hanzi: '我越学越喜欢。', pinyin: 'Wǒ yuè xué yuè xǐhuan.', english: 'The more I study, the more I like it.' },
      ],
    },
    remember: 'Read 越 as "the more it goes" and 越来越 as "more coming, more". Two 越 are a pair: the first is the cause, the second is the result.',
    tlRemember: 'Basahin ang 越 bilang "habang lumalala". Ang 越来越 ay "dumarami pa, lalo pa". Dalawang 越 ang magkapares: ang una ang dahilan, ang pangalawa ang resulta.',
    quiz: [
      { q: 'What does 越来越 mean?', opts: ['more and more', 'less and less', 'very much'], ans: 0, exp: '越来越 (yuèláiyuè) means more and more. 越来越冷 = getting colder.' },
      { q: 'Which means "the faster, the better"?', opts: ['越快越好', '快快好', '很快很好'], ans: 0, exp: '越快越好 uses 越…越 to link speed with quality.' },
    ],
    speak: [
      { prompt: 'Say the weather is getting colder.', hanzi: '天气越来越冷。', pinyin: 'Tiānqì yuèláiyuè lěng.', english: 'The weather is getting colder and colder.' },
      { prompt: 'Say the more you learn, the more you like it.', hanzi: '我越学越喜欢。', pinyin: 'Wǒ yuè xué yuè xǐhuan.', english: 'The more I learn, the more I like it.' },
    ],
  }),

  grammar({
    id: 'gram-suiran',
    level: 2,
    title: 'Although… but: 虽然…但是',
    subtitle: 'Admit one thing, then say the contrast',
    minutes: 11,
    goal: 'Admit a fact with 虽然 and then give the contrast with 但是.',
    overview: [
      '虽然…但是 (suīrán … dànshì) works like "although … but". First you admit something, then you turn to the contrast.',
      'It is very common in speech and writing. You can also drop 但是 in casual talk and just use 虽然…，但…',
    ],
    tlOverview: 'Ang 虽然…但是 ay gaya ng "bagaman … ngunit". Una mong aaminin ang isang bagay, saka mo ilalahad ang kabaligtaran. Madalas itong gamitin sa usapan at sulatin.',
    words: [W21.suiran, W21.danshi, W21.lei, W21.kaixin, W21.pianyi, W21.gui],
    formula: {
      head: ['Pattern', 'Example', 'Meaning'],
      rows: [
        ['虽然 + fact，但是 + contrast', '虽然很累，但是很开心。', 'Although tired, I am happy.'],
        ['虽然 + fact，可是 + contrast', '虽然很便宜，可是不好。', 'Although cheap, it is not good.'],
        ['虽然 + fact，但 + contrast (casual)', '虽然贵，但好吃。', 'Although expensive, it tastes good.'],
      ],
    },
    pro: 'Use 虽然 for the thing that is true, and put the twist after the comma. Both halves are complete sentences, so the second half can have its own subject: 虽然我很累，但我很开心。',
    mistake: 'Do not use 虽然 and 但是 when there is no contrast. 虽然很好，但是很贵 works. 虽然很好，但是很好 does not make sense.',
    dialogue: {
      title: 'Is it expensive?',
      lines: [
        { speaker: 'A', hanzi: '这个贵吗？', pinyin: 'Zhège guì ma?', english: 'Is this expensive?' },
        { speaker: 'B', hanzi: '虽然贵，但是很好吃。', pinyin: 'Suīrán guì, dànshì hěn hǎochī.', english: 'Although it is expensive, it is very tasty.' },
      ],
    },
    remember: 'Think "admit, then turn". 虽然 is the admission, 但是 is the turn. Say the first half, pause, then the twist.',
    tlRemember: 'Isipin ang "amin, saka iba". Ang 虽然 ang pag-amin, ang 但是 ang pagbaliktad. Sabihin ang unang bahagi, huminto, saka ang pagbabalik.',
    quiz: [
      { q: 'What does 虽然…但是 mean?', opts: ['although… but', 'because… so', 'if… then'], ans: 0, exp: '虽然…但是 is "although… but". 因为…所以 is "because… so".' },
      { q: 'Which sentence is correct?', opts: ['虽然很累，但是很开心。', '虽然很累，但是很累。', '因为很累，但是很开心。'], ans: 0, exp: 'The contrast is "tired, but happy". The other choices do not contrast or use the wrong pair.' },
    ],
    speak: [
      { prompt: 'Say you are tired but happy.', hanzi: '虽然很累，但是很开心。', pinyin: 'Suīrán hěn lèi, dànshì hěn kāixīn.', english: 'Although I am tired, I am very happy.' },
      { prompt: 'Say it is cheap but not good.', hanzi: '虽然很便宜，但是不好。', pinyin: 'Suīrán hěn piányi, dànshì bù hǎo.', english: 'Although it is cheap, it is not good.' },
    ],
  }),

  grammar({
    id: 'gram-lian-dou',
    level: 2,
    title: 'Even him: 连…都',
    subtitle: 'Surprise with "even"',
    minutes: 11,
    goal: 'Use 连…都 to say "even" and surprise someone with an unexpected example.',
    overview: [
      '连…都 (lián … dōu) means "even". You put the surprising item between 连 and 都. It tells the listener that even this unlikely thing is included.',
      'The thing after 连 is usually the surprise: even a child knows it, even the teacher forgot, even he cannot cook.',
    ],
    tlOverview: 'Ang 连…都 ay nangangahulugang "kahit". Ilalagay mo ang nakakagulat na bagay sa pagitan ng 连 at 都. Ipinapakita nitong kahit ang bagay na iyon ay kasama, kahit hindi mo inaasahan.',
    words: [W21.lian, W21.dou, W21.zhidao, W21.ta, W21.chi, W21.fan],
    formula: {
      head: ['Pattern', 'Example', 'Meaning'],
      rows: [
        ['连 + surprise + 都 + verb', '连他都不知道。', 'Even he does not know.'],
        ['连 + surprise + 都 + verb', '连饭都不会做。', 'He cannot even cook rice.'],
        ['我 + 连 + name + 都 + verb', '我连名字都忘了。', 'I even forgot the name.'],
      ],
    },
    pro: 'Put the surprising noun or person right after 连. Keep 都 right before the verb. 连饭都不会做 = "cannot even cook rice": the surprise is the rice.',
    mistake: 'Do not forget 都. 连他知道 is wrong; you need 连他都知道. The 都 is what makes the "even" work.',
    dialogue: {
      title: 'Can he cook?',
      lines: [
        { speaker: 'A', hanzi: '他会做饭吗？', pinyin: 'Tā huì zuò fàn ma?', english: 'Can he cook?' },
        { speaker: 'B', hanzi: '连饭都不会做。', pinyin: 'Lián fàn dōu bú huì zuò.', english: 'He cannot even cook rice.' },
      ],
    },
    remember: 'Read 连…都 as "even… all". The thing after 连 is the surprise, and 都 closes the sentence on it.',
    tlRemember: 'Basahin ang 连…都 bilang "kahit… man". Ang bagay pagkatapos ng 连 ang nakakagulat, at ang 都 ang nagtatapos dito.',
    quiz: [
      { q: 'What does 连…都 mean?', opts: ['even', 'only', 'also'], ans: 0, exp: '连…都 means "even". 只 means only, and 也 means also.' },
      { q: 'Which sentence is correct?', opts: ['连孩子都知道。', '连孩子知道。', '孩子连都知道。'], ans: 0, exp: 'The 都 must come before the verb: 连孩子都知道 (even a child knows).' },
    ],
    speak: [
      { prompt: 'Say even a child knows.', hanzi: '连孩子都知道。', pinyin: 'Lián háizi dōu zhīdao.', english: 'Even a child knows.' },
      { prompt: 'Say you forgot even the name.', hanzi: '我连名字都忘了。', pinyin: 'Wǒ lián míngzi dōu wàng le.', english: 'I even forgot the name.' },
    ],
  }),

  grammar({
    id: 'gram-chadian',
    level: 3,
    title: 'Almost happened: 差点',
    subtitle: 'Nearly late, nearly fell',
    minutes: 11,
    goal: 'Say something almost happened but did not, using 差点 with the right tense.',
    overview: [
      '差点 (chàdiǎn) means "nearly" or "almost", and it is used for something that nearly happened but did not. Usually it is a close call, like almost being late.',
      'Because the event did not happen, the sentence is about an unwanted or unexpected outcome that was avoided.',
    ],
    tlOverview: 'Ang 差点 ay nangangahulugang "muntik na". Ginagamit ito sa bagay na muntik nang mangyari pero hindi natuloy. Karaniwan itong close call, gaya ng muntik ka nang mahuli.',
    words: [W21.chadian, W21.chidao, W21.shuaidao, W21.kai, W21.zuo],
    formula: {
      head: ['Pattern', 'Example', 'Meaning'],
      rows: [
        ['差点 + 没/不 + verb', '我差点没起床。', 'I nearly did not get up (but I did).'],
        ['差点 + verb + 了', '我差点忘了。', 'I nearly forgot.'],
        ['差点 + verb', '他差点摔倒。', 'He nearly fell over.'],
      ],
    },
    pro: 'Use 差点 for a near miss. It is often followed by 没 to show the bad thing did not happen: 差点没赶上 (nearly missed it). Keep the bad outcome in the verb.',
    mistake: 'Do not use 差点 for a good thing you want. 差点买到 means you almost bought it and did not. Use 差点 only for near misses.',
    dialogue: {
      title: 'Why are you late?',
      lines: [
        { speaker: 'A', hanzi: '你今天怎么迟到了？', pinyin: 'Nǐ jīntiān zěnme chídào le?', english: 'Why were you late today?' },
        { speaker: 'B', hanzi: '差点没起床！', pinyin: 'Chà diǎn méi qǐchuáng!', english: 'I almost did not get up!' },
      ],
    },
    remember: 'Think "almost hit by a bus, but missed". 差点 is the near-miss word; 没 usually follows to say it did not happen.',
    tlRemember: 'Isipin ang "muntik nang masagasaan, pero hindi natuloy." Ang 差点 ang salita ng muntik, at karaniwang sinusundan ng 没 para sabihing hindi ito nangyari.',
    quiz: [
      { q: 'What does 差点 mean?', opts: ['almost (did not happen)', 'a little bit', 'exactly'], ans: 0, exp: '差点 (chàdiǎn) means almost or nearly, usually for a near miss.' },
      { q: 'Which sentence is a correct near miss?', opts: ['我差点忘了。', '我差点买到。', '差点我很好。'], ans: 0, exp: '差点忘了 = nearly forgot (but did not). 差点买到 is a wrong use for a wanted outcome.' },
    ],
    speak: [
      { prompt: 'Say you nearly forgot.', hanzi: '我差点忘了。', pinyin: 'Wǒ chà diǎn wàng le.', english: 'I nearly forgot.' },
      { prompt: 'Say he nearly fell over.', hanzi: '他差点摔倒。', pinyin: 'Tā chà diǎn shuāidǎo.', english: 'He nearly fell over.' },
    ],
  }),

  grammar({
    id: 'gram-bei',
    level: 3,
    title: 'Something was done to it: 被',
    subtitle: 'The passive voice in everyday speech',
    minutes: 12,
    goal: 'Describe what happened to a thing with 被, and say who did it when it matters.',
    overview: [
      '被 (bèi) makes the passive voice: the thing at the start of the sentence has something done to it. "My book was borrowed" becomes 我的书被借走了.',
      'In everyday speech, the doer is often left out: 门被关上了 (the door was closed) does not say who closed it. That is normal.',
    ],
    tlOverview: 'Ginagawang passive ng 被 ang pangungusap: ang paksa sa simula ay may ginawang kilos dito. Halimbawa, "nahiram ang libro ko" ay nagiging 我的书被借走了. Madalas hindi binabanggit ang gumawa, at ayos lang iyon.',
    words: [W21.bei, W21.jie, W21.zou, W21.shu, W21.fan, W21.wan, W21.guan],
    formula: {
      head: ['Pattern', 'Example', 'Meaning'],
      rows: [
        ['Thing + 被 + doer + verb', '我的书被他借走了。', 'My book was borrowed by him.'],
        ['Thing + 被 + verb (doer left out)', '门被关上了。', 'The door was closed.'],
        ['Thing + 被 + verb + complement', '饭被吃完了。', 'The food was all eaten.'],
      ],
    },
    pro: 'The verb after 被 needs something extra: a direction (走, 上), a result (完, 好), or 了. A bare verb is not enough: 饭被吃完了, not 饭被吃.',
    mistake: 'Do not use 被 for a neutral action with no result. 我被吃饭 is wrong. Say 饭被吃了 or 饭被吃完了 instead.',
    dialogue: {
      title: 'Where is the cake?',
      lines: [
        { speaker: 'A', hanzi: '蛋糕呢？', pinyin: 'Dàngāo ne?', english: 'Where is the cake?' },
        { speaker: 'B', hanzi: '被我吃完了。', pinyin: 'Bèi wǒ chī wán le.', english: 'I ate it all.' },
      ],
    },
    remember: 'Start with the thing, not the doer: 书被借走了 = "the book was borrowed away". 被 signals that something happened to the thing in front.',
    tlRemember: 'Simulan sa bagay, hindi sa gumawa: 书被借走了 = "nahiram na ang libro". Ang 被 ay senyales na may nangyari sa bagay na nasa unahan.',
    quiz: [
      { q: 'What does 被 show in a sentence?', opts: ['Something was done to the subject (passive)', 'A question', 'The past tense of any verb'], ans: 0, exp: '被 marks the passive: the subject receives the action.' },
      { q: 'Which sentence is complete and correct?', opts: ['门被关上了。', '门被关。', '门被我。'], ans: 0, exp: '门被关上了 has a result (上) and 了. A bare 被关 is not finished.' },
    ],
    speak: [
      { prompt: 'Say your book was borrowed.', hanzi: '我的书被借走了。', pinyin: 'Wǒ de shū bèi jiè zǒu le.', english: 'My book was borrowed away.' },
      { prompt: 'Say the door was closed.', hanzi: '门被关上了。', pinyin: 'Mén bèi guān shàng le.', english: 'The door was closed.' },
    ],
  }),

  grammar({
    id: 'gram-cai-jiu',
    level: 3,
    title: 'Late or early? 才 and 就',
    subtitle: 'Two small words that change the meaning',
    minutes: 12,
    goal: 'Tell apart "only at seven" (才) from "already at seven" (就), and use each correctly.',
    overview: [
      '才 (cái) and 就 (jiù) both sit in the same spot, before the verb, and both relate to time. The difference is the attitude: 才 says later than expected, 就 says earlier than expected.',
      'Compare 他七点才来 (he came only at seven, late) with 他七点就来了 (he came as early as seven).',
    ],
    tlOverview: 'Parehong nasa unahan ng pandiwa ang 才 at 就, at parehong tungkol sa oras. Ang pagkakaiba ay ang pananaw: ang 才 ay mas huli kaysa inaasahan, ang 就 ay mas maaga kaysa inaasahan. Ihambing ang 他七点才来 (dumating lang siya ng alas-siyete, huli) at 他七点就来了 (dumating siya nang alas-siyete pa lang, maaga).',
    words: [W21.cai, W21.jiu, W21.lai, W21.ta, W21.zhidao],
    formula: {
      head: ['Sentence', 'Meaning', 'Feeling'],
      rows: [
        ['他七点才来。', 'He only came at seven.', 'Later than you expected'],
        ['他七点就来了。', 'He came as early as seven.', 'Earlier than you expected'],
        ['他才五岁。', 'He is only five.', 'Younger than you expected'],
      ],
    },
    pro: 'Listen for the feeling: 才 in a sentence about time usually sounds like "only", and 就 usually sounds like "already" or "as early as". Speakers are often less precise than this, but the feeling is the key.',
    mistake: 'Do not use 就 and 才 with the same sentence and expect the same meaning. 他七点就来 and 他七点才来 are opposites. Pick one based on how late or early it feels.',
    dialogue: {
      title: 'When did he arrive?',
      lines: [
        { speaker: 'A', hanzi: '他几点到？', pinyin: 'Tā jǐ diǎn dào?', english: 'What time did he arrive?' },
        { speaker: 'B', hanzi: '他九点才到。', pinyin: 'Tā jiǔ diǎn cái dào.', english: 'He only arrived at nine.' },
      ],
    },
    remember: 'Read 才 as "only, finally" (later than wanted) and 就 as "already, as soon as" (sooner than wanted). Ask yourself: is it late or early?',
    tlRemember: 'Basahin ang 才 bilang "lang, sa wakas" (mas huli sa gusto) at ang 就 bilang "na, agad" (mas maaga sa gusto). Itanong sa sarili: huli ba o maaga?',
    quiz: [
      { q: '他七点才来 means:', opts: ['He came only at seven (late)', 'He came at seven, early', 'He came at seven too'], ans: 0, exp: '才 shows the time was later than expected, so it means "only at seven".' },
      { q: 'Which sentence shows he came early?', opts: ['他七点就来了。', '他七点才来。', '他七点来。'], ans: 0, exp: '就 shows "as early as seven", so it means he came early.' },
    ],
    speak: [
      { prompt: 'Say you went to sleep at ten, early.', hanzi: '我十点就睡了。', pinyin: 'Wǒ shí diǎn jiù shuì le.', english: 'I went to sleep as early as ten.' },
      { prompt: 'Say he is only five.', hanzi: '他才五岁。', pinyin: 'Tā cái wǔ suì.', english: 'He is only five years old.' },
    ],
  }),

  grammar({
    id: 'gram-zhiyao',
    level: 4,
    title: 'As long as… then: 只要…就',
    subtitle: 'Set one condition and state the result',
    minutes: 12,
    goal: 'State a condition with 只要 and its result with 就, the way you would argue or encourage someone.',
    overview: [
      '只要…就 (zhǐyào … jiù) means "as long as … then". It gives one condition that is enough to get the result. It is very handy for encouragement and decisions.',
      'Compare it with 如果…就 (if … then): 只要 sounds more certain, because the one condition is enough.',
    ],
    tlOverview: 'Ang 只要…就 ay nangangahulugang "basta… ay". Nagbibigay ito ng isang kundisyon na sapat para makuha ang resulta. Kapaki-pakinabang ito sa paghihikayat at pagdedesisyon.',
    words: [W21.zhiyao, W21.nuli, W21.chenggong, W21.neng, W21.dou, W21.wulun],
    formula: {
      head: ['Pattern', 'Example', 'Meaning'],
      rows: [
        ['只要 + condition，就 + result', '只要努力，就能成功。', 'As long as you work hard, you can succeed.'],
        ['只要 + condition，就 + result', '只要你去，我就去。', 'As long as you go, I will go.'],
        ['无论 + choice，都 + result', '无论天气怎么样，我都去。', 'No matter the weather, I will go.'],
      ],
    },
    pro: 'Use 就 to hold the result, and 能 for ability: 只要努力，就能成功 (as long as you try, you can succeed). 无论 is the stronger version: it says the result holds no matter the choice, paired with 都.',
    mistake: 'Do not use 只要 for a condition that is hard to meet, then say 但是 for the twist. 只要 is for something reachable. For "even if", use 即使…也.',
    dialogue: {
      title: 'Rain tomorrow?',
      lines: [
        { speaker: 'A', hanzi: '明天下雨，我们还去吗？', pinyin: 'Míngtiān xiàyǔ, wǒmen hái qù ma?', english: 'It rains tomorrow, are we still going?' },
        { speaker: 'B', hanzi: '只要你去，我就去。', pinyin: 'Zhǐyào nǐ qù, wǒ jiù qù.', english: 'As long as you go, I will go too.' },
      ],
    },
    remember: 'Read 只要 as "one thing is enough", and 就 as "then it happens". The 只要 part is the single key; the 就 part is the door it opens.',
    tlRemember: 'Basahin ang 只要 bilang "sapat na ang isang bagay", at ang 就 bilang "kung gayon, mangyayari". Ang bahaging 只要 ang susi; ang bahaging 就 ang pintong nabubuksan nito.',
    quiz: [
      { q: 'What does 只要…就 mean?', opts: ['as long as… then', 'even if… still', 'because… so'], ans: 0, exp: '只要…就 gives one condition that is enough for the result.' },
      { q: 'Which means "no matter the weather, I will go"?', opts: ['无论天气怎么样，我都去。', '只要天气好，我就去。', '因为天气好，我就去。'], ans: 0, exp: '无论…都 means "no matter what". 只要 needs a condition to be met.' },
    ],
    speak: [
      { prompt: 'Say as long as you try, you can succeed.', hanzi: '只要努力，就能成功。', pinyin: 'Zhǐyào nǔlì, jiù néng chénggōng.', english: 'As long as you work hard, you can succeed.' },
      { prompt: 'Say no matter the weather, you will go.', hanzi: '无论天气怎么样，我都去。', pinyin: 'Wúlùn tiānqì zěnmeyàng, wǒ dōu qù.', english: 'No matter what the weather is, I will go.' },
    ],
  }),

  grammar({
    id: 'gram-budan',
    level: 4,
    title: 'Not only… but also: 不但…而且',
    subtitle: 'Build a stronger argument in two steps',
    minutes: 12,
    goal: 'Praise or describe something in two steps with 不但…而且 and link it to a clear point.',
    overview: [
      '不但…而且 (bú dàn … érqiě) means "not only … but also". It stacks two good points, with the stronger one usually second.',
      'It is a favourite in reviews, interviews and speeches, because it sounds organised and confident.',
    ],
    tlOverview: 'Ang 不但…而且 ay nangangahulugang "hindi lang… kundi pati". Pinagsasama nito ang dalawang magandang punto, at karaniwang mas malakas ang ikalawa. Paborito ito sa mga review, panayam, at talumpati.',
    words: [W21.budan, W21.erqie, W21.congming, W21.nuli, W21.kan, W21.xie, W21.shuo],
    formula: {
      head: ['Pattern', 'Example', 'Meaning'],
      rows: [
        ['不但 + A，而且 + B', '他不但聪明，而且很努力。', 'He is not only smart but also hardworking.'],
        ['不但 + verb 1，而且 + verb 2', '我不但会说，而且会写。', 'I can not only speak but also write.'],
        ['这家店 + 不但…而且…', '不但便宜，而且好吃。', 'Not only cheap, but also tasty.'],
      ],
    },
    pro: 'Put the stronger point after 而且. The second half is the surprise or the main point. Keep both halves parallel: adjective with adjective, verb with verb.',
    mistake: 'Do not mix a noun in one half with an adjective in the other. 不但聪明，而且很多朋友 sounds broken. Make both halves the same type.',
    dialogue: {
      title: 'How is the shop?',
      lines: [
        { speaker: 'A', hanzi: '这家店怎么样？', pinyin: 'Zhè jiā diàn zěnmeyàng?', english: 'How is this shop?' },
        { speaker: 'B', hanzi: '不但便宜，而且好吃。', pinyin: 'Bú dàn piányi, érqiě hǎochī.', english: 'Not only cheap, but also tasty.' },
      ],
    },
    remember: 'Build it in two steps: 不但 introduces the first point, 而且 adds the stronger second point. If you can say "not only A, also B", you can use the pattern.',
    tlRemember: 'Buuin ito sa dalawang hakbang: ang 不但 ang unang punto, at ang 而且 ang mas malakas na ikalawa. Kung kaya mong sabihing "hindi lang A, kundi pati B", kaya mo na ang pattern.',
    quiz: [
      { q: 'What does 不但…而且 mean?', opts: ['not only… but also', 'not… because', 'not yet'], ans: 0, exp: '不但…而且 means "not only… but also". 不是…因为 would be a different sentence.' },
      { q: 'Which sentence is grammatically parallel?', opts: ['他不但聪明，而且很努力。', '他不但聪明，而且很多朋友。', '他不但很聪明，朋友。'], ans: 0, exp: 'Both halves are adjective-like descriptions: 聪明 and 很努力.' },
    ],
    speak: [
      { prompt: 'Say she is not only pretty but also smart.', hanzi: '她不但漂亮，而且聪明。', pinyin: 'Tā bú dàn piàoliang, érqiě cōngmíng.', english: 'She is not only pretty but also smart.' },
      { prompt: 'Say you can not only speak but also write.', hanzi: '我不但会说，而且会写。', pinyin: 'Wǒ bú dàn huì shuō, érqiě huì xiě.', english: 'I can not only speak but also write.' },
    ],
  }),
];

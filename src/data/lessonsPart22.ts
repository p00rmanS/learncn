import type { Lesson } from './types';
import { grammar } from './lessonsPart20';
import { W23 } from './wordsPart23';

/** Grammar Ladder, batch two: ordinals, durations, modal verbs, result verbs and softer contrast words. */
export const PART22_LESSONS: Lesson[] = [
  grammar({
    id: 'gram-ordinal',
    level: 1,
    title: 'First, second, third: 第',
    subtitle: 'Put things in order',
    minutes: 9,
    goal: 'Say the order of things with 第 and use 第一次 for "the first time".',
    overview: [
      '第 (dì) turns a number into an order: 第一 is first, 第二 is second, 第三 is third. It works like "-th" in English.',
      'The most useful form is 第一次 (the first time), which you can use in almost any conversation about trying something new.',
    ],
    tlOverview: 'Ginagawang pagkakasunod ng 第 ang bilang: ang 第一 ay una, ang 第二 ay pangalawa, ang 第三 ay pangatlo. Parang "-th" sa Ingles. Pinakagamit ang 第一次, o "unang beses".',
    words: [W23.diyi, W23.dier, W23.disan, W23.diyici, W23.ge],
    formula: {
      head: ['Pattern', 'Example', 'Meaning'],
      rows: [
        ['第 + number', '第一、第二、第三', 'first, second, third'],
        ['我是第一次 + verb', '我是第一次来。', 'It is my first time here.'],
        ['这是第几次 + verb?', '这是你第几次来？', 'Which time is this for you?'],
        ['他是第 + number + 个', '他是第二个。', 'He is the second one.'],
      ],
    },
    pro: 'Say 第一次 (the first time) before the verb: 我是第一次吃 (this is my first time eating it). It is easier than explaining "I have never tried" with 没吃过.',
    mistake: 'Do not put 第 in front of a measure word when you mean a count. 三个人 is three people. 第三个人 means the third person in a line or order.',
    dialogue: {
      title: 'First time here?',
      lines: [
        { speaker: 'A', hanzi: '这是你第几次来？', pinyin: 'Zhè shì nǐ dì jǐ cì lái?', english: 'Which time is this that you have come?' },
        { speaker: 'B', hanzi: '我是第一次来。', pinyin: 'Wǒ shì dì yī cì lái.', english: 'It is my first time here.' },
      ],
    },
    remember: 'Read 第 as "in order". 第一 is "in order one", and 第一次 is "order-one time". Once you know the number, the 第 in front tells you it is an order, not a count.',
    tlRemember: 'Basahin ang 第 bilang "ayon sa pagkakasunod". Ang 第一 ay "pagkakasunod na isa", at ang 第一次 ay "unang beses". Kapag alam mo na ang bilang, ang 第 sa unahan ay senyales na pagkakasunod ito, hindi bilang.',
    quiz: [
      { q: 'What does 第一次 mean?', opts: ['the first time', 'once again', 'one time only'], ans: 0, exp: '第一次 (dìyīcì) is "the first time". 再一次 would be "once again".' },
      { q: 'What does 第二 mean?', opts: ['second', 'two people', 'twice'], ans: 0, exp: '第二 (dìèr) is second in an order. 两个 is two of something.' },
    ],
    speak: [
      { prompt: 'Say this is my first time.', hanzi: '我是第一次来。', pinyin: 'Wǒ shì dì yī cì lái.', english: 'It is my first time coming.' },
      { prompt: 'Say you are the third in the line.', hanzi: '我是第三个。', pinyin: 'Wǒ shì dì sān gè.', english: 'I am the third one.' },
    ],
  }),

  grammar({
    id: 'gram-duration',
    level: 1,
    title: 'How long? 多久 and time spans',
    subtitle: 'An hour, two years, three days',
    minutes: 10,
    goal: 'Ask how long something took with 多久 and say a duration after the verb.',
    overview: [
      '多久 (duō jiǔ) asks "how long". The answer is a duration, like 一个小时 (one hour) or 两年 (two years), and it comes after the verb.',
      'This is different from asking a time of day. 几点 asks the time, and 多久 asks how long it lasted.',
    ],
    tlOverview: 'Ang 多久 ay nagtatanong ng "gaano katagal". Ang sagot ay tagal, gaya ng 一个小时 (isang oras) o 两年 (dalawang taon), at nasa likod ito ng pandiwa. Iba ito sa 几点 na nagtatanong ng oras ng araw.',
    words: [W23.duojiu, W23.xiaoshi, W23.tian, W23.nian, W23.liang, W23.deng, W23.zhu],
    formula: {
      head: ['Pattern', 'Example', 'Meaning'],
      rows: [
        ['verb + 了 + duration', '我学了一个小时。', 'I studied for one hour.'],
        ['verb + 了 + duration', '我学了两年。', 'I studied for two years.'],
        ['你 + verb + 了 + 多久？', '你等了多久？', 'How long did you wait?'],
        ['verb + 了 + duration (stay)', '我住了三天。', 'I stayed for three days.'],
      ],
    },
    pro: 'Put the duration after the verb, not before it. 我学了两年 is right. 我两年学了 is wrong. Use 了 after the verb when the time is finished.',
    mistake: 'Do not use 几 with a span of time. 几个小时 means "a few hours" and is for a guess. For an exact span, say 一个小时 or 两个小时.',
    dialogue: {
      title: 'How long did you wait?',
      lines: [
        { speaker: 'A', hanzi: '你等了多久？', pinyin: 'Nǐ děng le duō jiǔ?', english: 'How long did you wait?' },
        { speaker: 'B', hanzi: '等了一个小时。', pinyin: 'Děng le yí gè xiǎoshí.', english: 'I waited for one hour.' },
      ],
    },
    remember: 'The time span sits right after the verb, like a suffix: 等了一个小时, 学了两年, 住了三天. Once you learn 了 + duration, you can make most time sentences.',
    tlRemember: 'Ang tagal ay nasa likod mismo ng pandiwa, parang suffix: 等了一个小时, 学了两年, 住了三天. Kapag natutunan mo ang 了 + tagal, kaya mo nang buuin ang karamihan ng pangungusap tungkol sa oras.',
    quiz: [
      { q: 'What does 多久 mean?', opts: ['how long', 'how far', 'how much'], ans: 0, exp: '多久 (duō jiǔ) is "how long". 多远 is how far, and 多少钱 is how much.' },
      { q: 'Which sentence is correct?', opts: ['我学了两年。', '我两年学了。', '我学两年了了。'], ans: 0, exp: 'The duration comes after the verb: 我学了两年 (I studied for two years).' },
    ],
    speak: [
      { prompt: 'Say you stayed for three days.', hanzi: '我住了三天。', pinyin: 'Wǒ zhù le sān tiān.', english: 'I stayed for three days.' },
      { prompt: 'Say he studied Chinese for two years.', hanzi: '他学了两年中文。', pinyin: 'Tā xué le liǎng nián Zhōngwén.', english: 'He studied Chinese for two years.' },
    ],
  }),

  grammar({
    id: 'gram-youdian',
    level: 2,
    title: 'A bit: 有点 and 一点',
    subtitle: 'Complain softly, or ask for a little change',
    minutes: 10,
    goal: 'Use 有点 for "a bit" with something unwanted, and 一点 for "a little more" when you ask for a change.',
    overview: [
      '有点 (yǒudiǎn) and 一点 (yìdiǎn) both mean "a bit", but they are used in different places. 有点 goes before an adjective and usually signals something you do not like.',
      '一点 goes after an adjective, and asks for a small change: 便宜一点 means "a bit cheaper, please".',
    ],
    tlOverview: 'Parehong "konti" ang 有点 at 一点, pero magkaiba ang gamit. Ang 有点 ay nasa unahan ng pang-uri at kadalasang nagpapakitang hindi mo gusto. Ang 一点 naman ay nasa likod ng pang-uri at humihingi ng maliit na pagbabago, gaya ng 便宜一点.',
    words: [W23.youdian, W23.yidian, W23.kuai, W23.gui, W23.lei, W23.e],
    formula: {
      head: ['Pattern', 'Example', 'Meaning'],
      rows: [
        ['有点 + adjective (unwanted)', '我有点累。', 'I am a bit tired.'],
        ['有点 + adjective (unwanted)', '我有点饿。', 'I am a bit hungry.'],
        ['adjective + 一点 (ask for change)', '这个贵一点。', 'This one is a little more expensive.'],
        ['请 + adjective + 一点', '请快一点。', 'Please be a bit quicker.'],
      ],
    },
    pro: 'Use 一点 after the verb or adjective to ask for a small change: 说慢一点 (a bit slower), 便宜一点吧 (a bit cheaper, please). 吧 at the end makes it a soft request.',
    mistake: 'Do not use 有点 to ask for a favour. 有点贵 is a complaint. For a request, say 便宜一点 or 能不能便宜一点？',
    dialogue: {
      title: 'How do you feel?',
      lines: [
        { speaker: 'A', hanzi: '你累吗？', pinyin: 'Nǐ lèi ma?', english: 'Are you tired?' },
        { speaker: 'B', hanzi: '有点累，想睡觉。', pinyin: 'Yǒu diǎn lèi, xiǎng shuìjiào.', english: 'A bit tired, I want to sleep.' },
      ],
    },
    remember: 'Read 有点 as "a bit, unfortunately" (before the adjective) and 一点 as "a little more, please" (after the adjective). One complains, the other asks.',
    tlRemember: 'Basahin ang 有点 bilang "konti, sa kasamaang-palad" (bago ang pang-uri), at ang 一点 bilang "konti pa, pakiusap" (pagkatapos ng pang-uri). Ang isa ay reklamo, ang isa ay hiling.',
    quiz: [
      { q: 'What does 有点 usually show?', opts: ['a bit (something unwanted)', 'a lot', 'never'], ans: 0, exp: '有点 (yǒudiǎn) before an adjective usually signals something you do not like, like 有点贵.' },
      { q: 'Which sentence asks for a small change?', opts: ['便宜一点吧。', '有点便宜。', '一点便宜。'], ans: 0, exp: '便宜一点 asks for a bit cheaper. 有点便宜 is a neutral or negative remark about the price.' },
    ],
    speak: [
      { prompt: 'Say you are a bit hungry.', hanzi: '我有点饿。', pinyin: 'Wǒ yǒu diǎn è.', english: 'I am a bit hungry.' },
      { prompt: 'Ask for a cheaper price.', hanzi: '便宜一点吧。', pinyin: 'Piányi yìdiǎn ba.', english: 'A bit cheaper, please.' },
    ],
  }),

  grammar({
    id: 'gram-modals',
    level: 2,
    title: 'Should, must, had better: 应该, 必须, 最好',
    subtitle: 'Give advice and rules without sounding harsh',
    minutes: 11,
    goal: 'Use 应该, 必须 and 最好 to give advice, state a rule, and suggest a safe option.',
    overview: [
      '应该 (yīnggāi) means "should", and it gives soft advice. 必须 (bìxū) means "must" and states a firm need. 最好 (zuìhǎo) means "had better", a friendly suggestion with a practical reason.',
      'Choosing the right one changes how strong you sound, so pick the modal that fits the situation.',
    ],
    tlOverview: 'Ang 应该 ay "dapat", at malambot itong payo. Ang 必须 ay "kailangan", at matibay na pangangailangan. Ang 最好 ay "mas mabuting", isang magiliw na mungkahi na may praktikal na dahilan.',
    words: [W23.yinggai, W23.bixu, W23.zuihao, W23.bie, W23.huzhao, W23.dai, W23.kaoshi],
    formula: {
      head: ['Modal', 'Example', 'Strength'],
      rows: [
        ['应该 + verb', '你应该早点睡。', 'Soft advice: you should'],
        ['必须 + verb', '你必须带护照。', 'Firm rule: you must'],
        ['最好 + verb', '你最好别迟到。', 'Friendly tip: you had better not be late'],
        ['最好 + 别 + verb', '你最好别迟到。', 'Negative: it is best not to'],
      ],
    },
    pro: 'Put the modal before the verb: 应该睡, 必须带, 最好别. Use 别 (do not) with 最好 for a friendly warning. It sounds like advice, not an order.',
    mistake: 'Do not use 必须 for simple advice. 你必须早点睡 sounds like a hard order. Use 应该 for advice, and save 必须 for a real requirement.',
    dialogue: {
      title: 'An exam tomorrow',
      lines: [
        { speaker: 'A', hanzi: '我明天要考试。', pinyin: 'Wǒ míngtiān yào kǎoshì.', english: 'I have an exam tomorrow.' },
        { speaker: 'B', hanzi: '那你应该早点睡。', pinyin: 'Nà nǐ yīnggāi zǎodiǎn shuì.', english: 'Then you should go to sleep early.' },
      ],
    },
    remember: 'Strength ladder: 应该 (should, soft advice), 最好 (had better, friendly tip), 必须 (must, firm). Choose the softest one that is still clear.',
    tlRemember: 'Hagdan ng lakas: 应该 (dapat, malambot na payo), 最好 (mas mabuting, magiliw na tip), 必须 (kailangan, matibay). Piliin ang pinakamalambot na malinaw pa rin.',
    quiz: [
      { q: 'What does 必须 mean?', opts: ['must; have to', 'may', 'should maybe'], ans: 0, exp: '必须 (bìxū) is must or have to. 可以 is may, and 应该 is should.' },
      { q: 'Which sentence is a friendly tip?', opts: ['你最好别迟到。', '你必须别迟到。', '你应该迟到。'], ans: 0, exp: '最好 gives a friendly tip. 必须 would sound like a firm order.' },
    ],
    speak: [
      { prompt: 'Say you must bring your passport.', hanzi: '你必须带护照。', pinyin: 'Nǐ bìxū dài hùzhào.', english: 'You must bring your passport.' },
      { prompt: 'Give a friendly tip: do not be late.', hanzi: '你最好别迟到。', pinyin: 'Nǐ zuìhǎo bié chídào.', english: 'You had better not be late.' },
    ],
  }),

  grammar({
    id: 'gram-jieguo',
    level: 3,
    title: 'Done and understood: result verbs',
    subtitle: '看完, 听懂, 做好, 做错',
    minutes: 12,
    goal: 'Use result verbs like 看完, 听懂, 做好 and 做错 to say how an action ended.',
    overview: [
      'A result verb joins an action with its result. 看完 is "finish watching", 听懂 is "understand by listening", 做错 is "do it wrong". The second part shows how the action ended.',
      'These pairs are very common in study and everyday talk, and they are the way Chinese expresses success or failure in one word.',
    ],
    tlOverview: 'Pinagsasama ng result verb ang kilos at ang resulta nito. Ang 看完 ay "natapos panoorin", ang 听懂 ay "naintindihan sa pakikinig", at ang 做错 ay "nagkamali sa paggawa". Ipinapakita ng ikalawang bahagi kung paano natapos ang kilos.',
    words: [W23.kanwan, W23.tingdong, W23.zuohao, W23.zuocuo, W23.zuoye, W23.ben, W23.shu],
    formula: {
      head: ['Result verb', 'Example', 'Meaning'],
      rows: [
        ['看完', '我看完了这本书。', 'I finished reading this book.'],
        ['听懂', '我听懂了。', 'I understood (by listening).'],
        ['做好', '作业做好了吗？', 'Did you finish the homework well?'],
        ['做错', '我做错了一个。', 'I got one wrong.'],
      ],
    },
    pro: 'Put 了 after the whole result verb: 看完了, 听懂了, 做错了. The 了 marks that the action and its result are both done. For a negative, use 没: 还没做完 (not finished yet).',
    mistake: 'Do not use 不 for "not finished". Say 没 with a result verb: 还没做完 (I have not finished it yet). 不做完 is a different meaning.',
    dialogue: {
      title: 'Is the homework done?',
      lines: [
        { speaker: 'A', hanzi: '作业做好了吗？', pinyin: 'Zuòyè zuò hǎo le ma?', english: 'Did you finish the homework well?' },
        { speaker: 'B', hanzi: '还没做完。', pinyin: 'Hái méi zuò wán.', english: 'Not finished yet.' },
      ],
    },
    remember: 'Read a result verb as "action, then the result": 看完 = look until finished, 听懂 = listen until understood, 做错 = do and it is wrong. Learn the pair once, and the meaning follows.',
    tlRemember: 'Basahin ang result verb bilang "kilos, saka ang resulta": 看完 = panoorin hanggang matapos, 听懂 = pakinggan hanggang maintindihan, 做错 = gawin at mali ang lumabas.',
    quiz: [
      { q: 'What does 看完 mean?', opts: ['to finish watching or reading', 'to look at', 'to see clearly'], ans: 0, exp: '看完 (kànwán) means to finish watching or reading. 看 alone is just to look.' },
      { q: 'Which sentence means "not finished yet"?', opts: ['还没做完。', '还不做完。', '还做完了。'], ans: 0, exp: '还没做完 uses 没 for "not yet". 还做完了 says it is already finished.' },
    ],
    speak: [
      { prompt: 'Say you understood by listening.', hanzi: '我听懂了。', pinyin: 'Wǒ tīng dǒng le.', english: 'I understood it by listening.' },
      { prompt: 'Say you got one wrong.', hanzi: '我做错了一个。', pinyin: 'Wǒ zuò cuò le yí gè.', english: 'I got one wrong.' },
    ],
  }),

  grammar({
    id: 'gram-yiwei',
    level: 3,
    title: 'I thought… actually: 以为 and 其实',
    subtitle: 'Correct a wrong belief with grace',
    minutes: 11,
    goal: 'Say what you thought with 以为, then correct it with 其实.',
    overview: [
      '以为 (yǐwéi) means "I thought", and it usually introduces something that turned out not to be true. 其实 (qíshí) means "actually", and it gives the correct fact.',
      'Pairing them is the natural way to say "I thought X, but actually Y".',
    ],
    tlOverview: 'Ang 以为 ay "akala ko", at kadalasang sinusundan ito ng bagay na hindi pala totoo. Ang 其实 ay "sa totoo lang", at ibinibigay nito ang tamang impormasyon. Magkapares sila para sabihing "akala ko X, pero sa totoo ay Y".',
    words: [W23.yiwei, W23.qishi, W23.jintian, W23.xingqi, W23.mingtian, W23.chi],
    formula: {
      head: ['Pattern', 'Example', 'Meaning'],
      rows: [
        ['我以为 + fact (wrong)', '我以为今天是星期一。', 'I thought today was Monday.'],
        ['其实 + fact (correct)', '其实今天是星期二。', 'Actually, today is Tuesday.'],
        ['我以为 + verb (wrong)', '我以为你来了。', 'I thought you had come.'],
        ['其实 + 我 + not (correct)', '其实我不知道。', 'Actually, I did not know.'],
      ],
    },
    pro: 'Keep the wrong idea after 以为, then give the real fact after 其实. The contrast does the work, so you do not need 但是 as well.',
    mistake: 'Do not use 其实 alone to mean "I thought". 其实 is for the true fact. Use 以为 for the belief, and 其实 for the correction.',
    dialogue: {
      title: 'Is there a holiday?',
      lines: [
        { speaker: 'A', hanzi: '你不是说今天放假吗？', pinyin: 'Nǐ bú shì shuō jīntiān fàngjià ma?', english: 'Did you not say there is a holiday today?' },
        { speaker: 'B', hanzi: '我以为放假，其实要上课。', pinyin: 'Wǒ yǐwéi fàngjià, qíshí yào shàngkè.', english: 'I thought it was a holiday, but actually we have class.' },
      ],
    },
    remember: 'Two-step story: 以为 is the belief you had, 其实 is the truth. Say the belief first, then the truth, and the surprise is built in.',
    tlRemember: 'Kuwento sa dalawang hakbang: ang 以为 ang paniniwala mo noon, ang 其实 ang totoo. Sabihin muna ang paniniwala, saka ang totoo, at kasama na ang sorpresa.',
    quiz: [
      { q: 'What does 以为 mean?', opts: ['thought (but it turned out otherwise)', 'was sure', 'was going to'], ans: 0, exp: '以为 (yǐwéi) means you thought something, which often was not true. 确定 means sure.' },
      { q: 'What does 其实 mean?', opts: ['actually', 'maybe', 'almost'], ans: 0, exp: '其实 (qíshí) means actually or in fact. 也许 is maybe.' },
    ],
    speak: [
      { prompt: 'Say you thought he had come.', hanzi: '我以为你来了。', pinyin: 'Wǒ yǐwéi nǐ lái le.', english: 'I thought you had come.' },
      { prompt: 'Say actually you do not know.', hanzi: '其实我不知道。', pinyin: 'Qíshí wǒ bù zhīdao.', english: 'Actually, I do not know.' },
    ],
  }),

  grammar({
    id: 'gram-buru',
    level: 3,
    title: 'Not as good as: 不如',
    subtitle: 'Compare, and suggest a better option',
    minutes: 10,
    goal: 'Use 不如 to say one option is not as good as another, or that it would be better to do something else.',
    overview: [
      '不如 (bù rú) means "not as good as". It compares two things and says the second is better, or it suggests a better choice.',
      'You can use it to compare, like 他不如我高 (he is not as tall as me), or to suggest a better option, like 今天不如明天去 (going tomorrow is better than today).',
    ],
    tlOverview: 'Ang 不如 ay nangangahulugang "hindi kasing galing ng". Naghahambing ito ng dalawang bagay, at sinasabing mas mabuti ang ikalawa. Puwede ring mungkahi ito ng mas magandang pagpipilian.',
    words: [W23.buru, W23.gao, W23.mingtian, W23.jintian, W23.qu, W23.zhu],
    formula: {
      head: ['Pattern', 'Example', 'Meaning'],
      rows: [
        ['A + 不如 + B + adjective', '他不如我高。', 'He is not as tall as me.'],
        ['A + 不如 + B + verb', '今天不如明天去。', 'It is better to go tomorrow than today.'],
        ['打车 + 不如 + 坐地铁 + 快', '打车不如坐地铁快。', 'Taking a taxi is not as fast as the metro.'],
      ],
    },
    pro: 'Keep the two things in the order A 不如 B. The subject is the thing that is worse. 他不如我高 says he is less tall. Use 比 for the opposite direction when the comparison is positive.',
    mistake: 'Do not use 不如 as a plain "not". 我不如去 is wrong for "I do not want to go". 不如 needs a comparison: A 不如 B.',
    dialogue: {
      title: 'Taxi or metro?',
      lines: [
        { speaker: 'A', hanzi: '坐地铁还是打车？', pinyin: 'Zuò dìtiě háishi dǎchē?', english: 'Metro or taxi?' },
        { speaker: 'B', hanzi: '打车不如坐地铁快。', pinyin: 'Dǎchē bù rú zuò dìtiě kuài.', english: 'A taxi is not as fast as the metro.' },
      ],
    },
    remember: 'Say the weaker option first, then 不如, then the better one: 打车 不如 坐地铁. It reads as "A is not as good as B".',
    tlRemember: 'Sabihin muna ang mas mahinang pagpipilian, saka 不如, saka ang mas mabuti: 打车 不如 坐地铁. Binabasa ito bilang "mas mahina ang A kaysa B".',
    quiz: [
      { q: 'What does 不如 mean?', opts: ['not as good as; it would be better to', 'not at all', 'not yet'], ans: 0, exp: '不如 (bù rú) compares two things, or suggests a better choice. 不 alone is simply "not".' },
      { q: 'Which sentence says he is not as tall as me?', opts: ['他不如我高。', '我不如他高。', '他比我不高。'], ans: 0, exp: '他不如我高: he is the weaker side of the comparison.' },
    ],
    speak: [
      { prompt: 'Suggest going tomorrow instead.', hanzi: '今天不如明天去。', pinyin: 'Jīntiān bù rú míngtiān qù.', english: 'It would be better to go tomorrow than today.' },
      { prompt: 'Say he is not as tall as you.', hanzi: '他不如我高。', pinyin: 'Tā bù rú wǒ gāo.', english: 'He is not as tall as I am.' },
    ],
  }),

  grammar({
    id: 'gram-buguo',
    level: 4,
    title: 'Good, but…: 不过 and 只是',
    subtitle: 'Soften a contrast the way native speakers do',
    minutes: 12,
    goal: 'Use 不过 and 只是 to add a gentle contrast after a positive or hopeful statement.',
    overview: [
      '不过 (búguò) and 只是 (zhǐshì) both add a softer contrast than 但是. They are common in reviews, polite refusals and friendly conversations.',
      '不过 usually comes after a positive statement and adds a small drawback. 只是 often sounds like "the only thing is", and it is a soft way to give a reason you cannot.',
    ],
    tlOverview: 'Ang 不过 at 只是 ay mas malambot na pagkontra kaysa 但是. Madalas silang gamitin sa review, sa magalang na pagtanggi, at sa magiliw na usapan. Ang 不过 ay karaniwang sumusunod sa positibong pahayag. Ang 只是 ay parang "ang problema lang".',
    words: [W23.buguo, W23.zhishi, W23.xiang, W23.shijian, W23.hao, W23.canting, W23.gui, W23.zenmeyang, W23.chi],
    formula: {
      head: ['Pattern', 'Example', 'Meaning'],
      rows: [
        ['positive，不过 + drawback', '这个好，不过有点贵。', 'This one is good, but a bit expensive.'],
        ['positive，不过 + drawback', '这本书好看，不过很长。', 'This book is good, but it is long.'],
        ['想 + verb，只是 + reason', '我想去，只是没时间。', 'I want to go, but I just do not have time.'],
      ],
    },
    pro: 'Use 不过 for a gentle drawback after praise, and 只是 when you want to give a soft reason that stops you. Both keep the tone friendly, so they suit polite replies.',
    mistake: 'Do not use 不过 for a hard contrast like "I wanted to, but I could not" when the reason is serious. For that, use 但是 or 可是 so the contrast is clear.',
    dialogue: {
      title: 'How was the restaurant?',
      lines: [
        { speaker: 'A', hanzi: '这家餐厅怎么样？', pinyin: 'Zhè jiā cāntīng zěnmeyàng?', english: 'How is this restaurant?' },
        { speaker: 'B', hanzi: '好吃，不过有点贵。', pinyin: 'Hǎo chī, bú guò yǒu diǎn guì.', english: 'Tasty, but a bit expensive.' },
      ],
    },
    remember: 'Praise first, then 不过 with a small drawback: 好吃，不过有点贵. Use 只是 when the drawback is a reason you cannot do something: 我想去，只是没时间.',
    tlRemember: 'Papuri muna, saka 不过 kasama ang maliit na kulang: 好吃，不过有点贵. Gamitin ang 只是 kapag ang kulang ay dahilan kung bakit hindi mo magawa: 我想去，只是没时间.',
    quiz: [
      { q: 'What does 不过 mean?', opts: ['but; however (softer)', 'not over', 'also'], ans: 0, exp: '不过 (búguò) adds a softer contrast. 不 is not and 过 is over or passed, so the phrase is not a literal "not over".' },
      { q: 'Which sentence uses 只是 for a soft reason?', opts: ['我想去，只是没时间。', '我想去，只是。', '我只是想去。'], ans: 0, exp: '只是 gives a soft reason that stops you: 我想去，只是没时间 (I want to go, just no time).' },
    ],
    speak: [
      { prompt: 'Say the book is good but long.', hanzi: '这本书好看，不过很长。', pinyin: 'Zhè běn shū hǎo kàn, bú guò hěn cháng.', english: 'This book is good, but it is long.' },
      { prompt: 'Say you want to go, but have no time.', hanzi: '我想去，只是没时间。', pinyin: 'Wǒ xiǎng qù, zhǐshì méi shíjiān.', english: 'I want to go, but I just do not have time.' },
    ],
  }),
];

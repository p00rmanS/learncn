import type { Lesson, Page } from './types';
import { W18 } from './wordsPart18';

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

const kidsWay = (body: string) => ({ type: 'tip' as const, label: 'How kids learn it', body });
const locals = (body: string) => ({ type: 'tip' as const, label: 'What locals say', body });

export const PART17_LESSONS: Lesson[] = [
  {
    id: 'fnd-senses',
    module: 'foundations',
    title: 'The five senses',
    subtitle: 'Look, listen, smell, taste and touch',
    minutes: 10,
    goal: 'Name the five senses and say whether something looks, sounds, smells or tastes good.',
    pages: [
      {
        kicker: 'Overview',
        title: 'Learn with your senses',
        blocks: [
          {
            type: 'text',
            title: 'Five ways to know the world',
            body: [
              'Young children learn the world through sight, hearing, smell, taste and touch long before they can read. Words for the senses come early for this reason.',
              'Chinese makes this easy: most sense verbs are short, and you add 好 (good) in front to say something is pleasant.',
            ],
          },
          {
            type: 'taglish',
            body: 'Natututo ang mga bata sa mundo sa pamamagitan ng pandama: paningin, pandinig, amoy, lasa, at hipo. Madali ang mga salitang ito sa Chinese, dahil maikli ang mga pandiwa at idinadagdag mo ang 好 para sabihing maganda ang isang bagay.',
          },
        ],
      },
      {
        kicker: 'Deep dive',
        title: 'The senses and how they feel',
        blocks: [
          {
            type: 'vocab',
            title: 'Sense words',
            words: [W18.kan, W18.ting, W18.wen, W18.chang, W18.mo, W18.shengyin, W18.weidao, W18.haochi, W18.haowen, W18.haoting, W18.haokan],
          },
          {
            type: 'table',
            head: ['Sense', 'Verb', 'Trick'],
            rows: [
              ['Sight', '看 (kàn)', 'Look at, watch, or read'],
              ['Hearing', '听 (tīng)', 'Listen to music or a voice'],
              ['Smell', '闻 (wén)', 'Sniff a flower'],
              ['Taste', '尝 (cháng)', 'Taste a little bit, like a sample'],
              ['Touch', '摸 (mō)', 'Feel a soft toy'],
            ],
          },
          kidsWay('Close your eyes and guess the sense. Ask a friend to hold up a snack or play a sound, then say 好吃 or 好听. Children learn senses by testing them, so do the same.'),
          {
            type: 'pro',
            body: 'Put 好 before a sense verb to say it is nice: 好吃 (tasty), 好闻 (smells good), 好听 (sounds nice), 好看 (pretty). It is the quickest way to give a compliment.',
          },
        ],
      },
      {
        kicker: 'What locals say',
        title: 'Compliments and feedback',
        blocks: [
          locals('"好吃！" is what people say after a meal. Saying it to the cook is a warm and polite compliment.'),
          locals('"闻起来好香" means "it smells so good". People use 闻起来 (it smells like) when they are about to eat.'),
          {
            type: 'dialogue',
            title: 'Try this',
            lines: [
              { speaker: 'A', hanzi: '你尝尝这个。', pinyin: 'Nǐ chángchang zhège.', english: 'Try this one.' },
              { speaker: 'B', hanzi: '好吃！', pinyin: 'Hǎochī!', english: 'Tasty!' },
            ],
          },
        ],
      },
      {
        kicker: 'Remember',
        title: 'Remember moment',
        blocks: [
          {
            type: 'remember',
            body: 'Sense verb plus 好 gives "pleasant": 好听 is nice to hear, 好闻 is nice to smell. Learn the pattern once and you can make a new word for any sense.',
          },
          {
            type: 'taglish',
            body: 'Ang sense na pandiwa kasama ang 好 ay nangangahulugang kaaya-aya: ang 好听 ay maganda pakinggan, at ang 好闻 ay mabango. Isang pattern lang ito na puwede mong gamitin sa iba pang pandama.',
          },
        ],
      },
      quiz('Listen', 'What does 听 mean?', ['to listen', 'to smell', 'to touch'], 0, '听 (tīng) means to listen or hear. 闻 is to smell and 摸 is to touch.'),
      quiz('Tasty', 'What does 好吃 mean?', ['tasty', 'pretty', 'noisy'], 0, '好吃 (hǎochī) means tasty. 好看 means pretty, and 好听 means nice to hear.'),
      speak([
        { prompt: 'Say this smells good.', hanzi: '这个好闻。', pinyin: 'Zhège hǎowén.', english: 'This smells good.' },
        { prompt: 'Say you can hear a sound.', hanzi: '我听见声音。', pinyin: 'Wǒ tīngjiàn shēngyīn.', english: 'I can hear a sound.' },
      ]),
    ],
  },

  {
    id: 'fnd-kitchen',
    module: 'foundations',
    title: 'Things in the kitchen',
    subtitle: 'Bowl, chopsticks, spoon, cup and plate',
    minutes: 10,
    goal: 'Name the basic tableware, ask for a pair of chopsticks, and say you are full.',
    pages: [
      {
        kicker: 'Overview',
        title: 'The table is set',
        blocks: [
          {
            type: 'text',
            title: 'Words for every meal',
            body: [
              'Almost every Chinese meal uses a bowl, chopsticks and a shared plate. Learning these words lets you join a meal and help set the table.',
              'Most of these words end in 子 (zi), a small and everyday ending. You will see it on many household words.',
            ],
          },
          {
            type: 'taglish',
            body: 'Halos bawat pagkain sa Chinese ay gumagamit ng mangkok, pamalito, at pinggan na pinagsasaluhan. Kapag alam mo ang mga salitang ito, makakasali ka sa kainan at makakatulong sa paghahanda ng mesa.',
          },
        ],
      },
      {
        kicker: 'Deep dive',
        title: 'Tableware words',
        blocks: [
          {
            type: 'vocab',
            title: 'Kitchen and table',
            words: [W18.wan, W18.kuaizi, W18.shaozi, W18.beizi, W18.panzi, W18.dao, W18.guo, W18.cai, W18.xi, W18.shuang],
          },
          {
            type: 'table',
            head: ['Item', 'Say it', 'Trick'],
            rows: [
              ['碗 (bowl)', 'wǎn', 'Hold it close for rice'],
              ['筷子 (chopsticks)', 'kuàizi', 'Always come in a pair'],
              ['勺子 (spoon)', 'sháozi', 'Used for soup'],
              ['盘子 (plate)', 'pánzi', 'Shared dishes go here'],
            ],
          },
          kidsWay('Set a toy table with a bowl, cup and spoon. Hand each item to a friend and say its name, the way children learn words during play.'),
          {
            type: 'pro',
            body: 'Count chopsticks as a pair: 一双筷子 (yì shuāng kuàizi). Use 双 for pairs of things, not 个, when you talk about chopsticks.',
          },
        ],
      },
      {
        kicker: 'What locals say',
        title: 'At the table',
        blocks: [
          locals('"吃饭了！" (dinner is ready!) is what the cook calls out. Everyone comes to the table when they hear it.'),
          locals('"我吃饱了" means "I am full". Locals say it politely, even if they only ate a little.'),
          {
            type: 'dialogue',
            title: 'Dinner time',
            lines: [
              { speaker: 'A', hanzi: '吃饭了！', pinyin: 'Chīfàn le!', english: 'Dinner is ready!' },
              { speaker: 'B', hanzi: '我去拿碗和筷子。', pinyin: 'Wǒ qù ná wǎn hé kuàizi.', english: 'I will go and get the bowls and chopsticks.' },
            ],
          },
        ],
      },
      {
        kicker: 'Remember',
        title: 'Remember moment',
        blocks: [
          {
            type: 'remember',
            body: 'The 子 ending is a small, everyday tail: 筷子, 勺子, 盘子, 杯子, 椅子. When you see 子 at the end of a word, it is usually an ordinary noun.',
          },
          {
            type: 'taglish',
            body: 'Ang 子 sa dulo ng salita ay karaniwang tanda ng pangngalan, gaya ng 筷子 (chopsticks), 勺子 (kutsara), at 盘子 (plato). Kapag nakita mo ito, madalas ay pangngalan ang salita.',
          },
        ],
      },
      quiz('Bowl', 'What does 碗 mean?', ['bowl', 'cup', 'plate'], 0, '碗 (wǎn) is bowl. 杯子 is cup and 盘子 is plate.'),
      quiz('Chopsticks', 'What is 筷子?', ['chopsticks', 'spoon', 'knife'], 0, '筷子 (kuàizi) is chopsticks. 勺子 is spoon and 刀 is knife.'),
      speak([
        { prompt: 'Say you are full.', hanzi: '我吃饱了。', pinyin: 'Wǒ chī bǎo le.', english: 'I am full.' },
        { prompt: 'Ask for a pair of chopsticks.', hanzi: '请给我一双筷子。', pinyin: 'Qǐng gěi wǒ yì shuāng kuàizi.', english: 'Please give me a pair of chopsticks.' },
      ]),
    ],
  },

  {
    id: 'fnd-insects',
    module: 'foundations',
    title: 'Insects in the garden',
    subtitle: 'Bug, butterfly, bee and ant',
    minutes: 10,
    goal: 'Name four common insects, say they are pretty or fly, and describe where they are.',
    pages: [
      {
        kicker: 'Overview',
        title: 'Bugs are the first animals kids notice',
        blocks: [
          {
            type: 'text',
            title: 'Small creatures, big interest',
            body: [
              'Children notice bugs before they notice almost anything else. A butterfly on a flower or an ant on the path is a natural first lesson.',
              'Many insect words share the 虫 (bug) radical, so one clue helps you recognise several words at once.',
            ],
          },
          {
            type: 'taglish',
            body: 'Ang mga bata ang unang napapansin ang mga insekto. Maraming salitang insekto ang may 虫 (insekto) na bahagi, kaya isang palatandaan lang ang kailangan mong matandaan para sa marami.',
          },
        ],
      },
      {
        kicker: 'Deep dive',
        title: 'Garden insects',
        blocks: [
          {
            type: 'vocab',
            title: 'Insect words',
            words: [W18.chongzi, W18.hudie, W18.mifeng, W18.mayi, W18.fei, W18.haokan],
          },
          {
            type: 'table',
            head: ['Insect', 'Say it', 'Trick'],
            rows: [
              ['蝴蝶 (butterfly)', 'húdié', 'Two colourful wings'],
              ['蜜蜂 (bee)', 'mìfēng', 'Honey + bee'],
              ['蚂蚁 (ant)', 'mǎyǐ', 'Tiny workers on the ground'],
              ['虫子 (bug)', 'chóngzi', 'The general word for any bug'],
            ],
          },
          kidsWay('Go outside and find a bug. Point, name it, and say 好看 if it is pretty. Children learn words best when they can see the thing they are naming.'),
          {
            type: 'pro',
            body: 'Use 小 (small) with 虫子 for something tiny and friendly: 小虫子 (little bug). Parents use it to make bugs sound less scary to children.',
          },
        ],
      },
      {
        kicker: 'What locals say',
        title: 'Talking about bugs',
        blocks: [
          locals('"有虫子" means "there is a bug". People say it when they spot one in the kitchen or a room.'),
          locals('"小蜜蜂" (little bee) is a common nickname for a cheerful child. It is a warm way to describe a busy kid.'),
          {
            type: 'dialogue',
            title: 'In the garden',
            lines: [
              { speaker: 'A', hanzi: '花园里有蝴蝶。', pinyin: 'Huāyuán lǐ yǒu húdié.', english: 'There is a butterfly in the garden.' },
              { speaker: 'B', hanzi: '好看！我也想看。', pinyin: 'Hǎokàn! Wǒ yě xiǎng kàn.', english: 'Pretty! I want to see it too.' },
            ],
          },
        ],
      },
      {
        kicker: 'Remember',
        title: 'Remember moment',
        blocks: [
          {
            type: 'remember',
            body: 'The 虫 radical looks like a little bug. Spot it in 蚂蚁, 蜜蜂, 蝴蝶 and 虫子, and you will know these words are about insects.',
          },
          {
            type: 'taglish',
            body: 'Ang radikal na 虫 ay mukhang maliit na insekto. Hanapin ito sa 蚂蚁, 蜜蜂, 蝴蝶 at 虫子, at malalaman mo agad na tungkol ito sa insekto.',
          },
        ],
      },
      quiz('Bee', 'What does 蜜蜂 mean?', ['bee', 'ant', 'butterfly'], 0, '蜜蜂 (mìfēng) is bee. 蚂蚁 is ant and 蝴蝶 is butterfly.'),
      quiz('Fly', 'What does 飞 mean?', ['to fly', 'to run', 'to sing'], 0, '飞 (fēi) means to fly. 跑 is to run, and 唱 is to sing.'),
      speak([
        { prompt: 'Say the butterfly is pretty.', hanzi: '蝴蝶很好看。', pinyin: 'Húdié hěn hǎokàn.', english: 'The butterfly is pretty.' },
        { prompt: 'Say the ant is on the ground.', hanzi: '蚂蚁在地上。', pinyin: 'Mǎyǐ zài dì shàng.', english: 'The ant is on the ground.' },
      ]),
    ],
  },
];

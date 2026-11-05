import type { Lesson, Page } from './types';
import { W19 } from './wordsPart19';

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

export const PART18_LESSONS: Lesson[] = [
  {
    id: 'fnd-tastes',
    module: 'foundations',
    title: 'Sweet, salty, sour, bitter, spicy',
    subtitle: 'The five tastes children notice first',
    minutes: 10,
    goal: 'Name the five basic tastes and say whether a food is sweet, salty or spicy.',
    pages: [
      {
        kicker: 'Overview',
        title: 'Five tastes on the tongue',
        blocks: [
          {
            type: 'text',
            title: 'Taste is the first food word',
            body: [
              'Babies know sweet and sour long before they can talk. Taste words are some of the first food words a child learns to say.',
              'Chinese uses one short adjective for each taste, so you can describe almost any dish with just a few words.',
            ],
          },
          {
            type: 'taglish',
            body: 'Alam na ng sanggol ang matamis at maasim bago pa siya makapagsalita. Isang maikling pang-uri lang ang bawat lasa sa Chinese, kaya kaunting salita lang ang kailangan para ilarawan ang halos anumang pagkain.',
          },
        ],
      },
      {
        kicker: 'Deep dive',
        title: 'The taste words',
        blocks: [
          {
            type: 'vocab',
            title: 'Taste words',
            words: [W19.tian, W19.xian, W19.suan, W19.ku, W19.la, W19.haochi],
          },
          {
            type: 'table',
            head: ['Taste', 'Say it', 'Think of'],
            rows: [
              ['甜 (sweet)', 'tián', 'Candy and fruit'],
              ['咸 (salty)', 'xián', 'Chips and soy sauce'],
              ['酸 (sour)', 'suān', 'Lemon and vinegar'],
              ['苦 (bitter)', 'kǔ', 'Dark, strong tea'],
              ['辣 (spicy)', 'là', 'Chilli peppers'],
            ],
          },
          kidsWay('Taste a sweet, salty and sour snack in turn, and say the word before each bite. Children link a word to a taste much faster when they can taste it too.'),
          {
            type: 'pro',
            body: 'Say 不太 (bú tài) with a taste word to soften it: 不太辣 means "not very spicy". It is a polite way to warn someone before they eat.',
          },
        ],
      },
      {
        kicker: 'What locals say',
        title: 'Talking about flavour',
        blocks: [
          locals('"你能吃辣吗？" (can you eat spicy food?) is a common question before a hotpot or a Sichuan meal. Locals ask it because many dishes are very spicy.'),
          locals('"好甜啊！" is what people say about a sweet dessert. The 啊 at the end makes it sound warm and friendly.'),
          {
            type: 'dialogue',
            title: 'Is it spicy?',
            lines: [
              { speaker: 'A', hanzi: '这个辣吗？', pinyin: 'Zhège là ma?', english: 'Is this spicy?' },
              { speaker: 'B', hanzi: '不辣，很甜。', pinyin: 'Bú là, hěn tián.', english: 'Not spicy, it is sweet.' },
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
            body: 'Two taste words share a shape: 甜 (sweet) has 舌 (tongue) inside it, so think of tasting with your tongue. The 口 (mouth) radical shows up in lots of food words too.',
          },
          {
            type: 'taglish',
            body: 'May 舌 (dila) sa loob ng 甜 (matamis), kaya isipin mong tinitikman ito ng dila. Madalas ding lumalabas ang 口 (bibig) sa maraming salita tungkol sa pagkain.',
          },
        ],
      },
      quiz('Sweet', 'What does 甜 mean?', ['sweet', 'sour', 'salty'], 0, '甜 (tián) is sweet. 酸 is sour and 咸 is salty.'),
      quiz('Spicy', 'What does 辣 mean?', ['spicy', 'bitter', 'cold'], 0, '辣 (là) is spicy. 苦 is bitter, and 冷 is cold.'),
      speak([
        { prompt: 'Say this food is sweet.', hanzi: '这个很甜。', pinyin: 'Zhège hěn tián.', english: 'This one is sweet.' },
        { prompt: 'Say watermelon is sweet.', hanzi: '西瓜是甜的。', pinyin: 'Xīguā shì tián de.', english: 'Watermelon is sweet.' },
      ]),
    ],
  },

  {
    id: 'fnd-rice-noodles',
    module: 'foundations',
    title: 'Rice, noodles and dumplings',
    subtitle: 'The staples that fill every meal',
    minutes: 10,
    goal: 'Name the common staples, ask what someone wants to eat, and order a dish.',
    pages: [
      {
        kicker: 'Overview',
        title: 'The base of every meal',
        blocks: [
          {
            type: 'text',
            title: 'Staples come first',
            body: [
              'Rice, noodles and bread are the staples that fill a child up. Almost every meal in China has one of them.',
              'Dumplings and buns are the favourites kids remember, and their names follow simple patterns you can learn quickly.',
            ],
          },
          {
            type: 'taglish',
            body: 'Ang kanin, pansit, at tinapay ang mga pangunahing pagkain na nagpapabusog sa mga bata. Halos bawat pagkain sa Chinese ay may isa sa mga ito, at ang mga pangalan nila ay sumusunod sa simpleng pattern.',
          },
        ],
      },
      {
        kicker: 'Deep dive',
        title: 'Staples on the table',
        blocks: [
          {
            type: 'vocab',
            title: 'Staples',
            words: [W19.mifan, W19.miantiao, W19.jiaozi, W19.baozi, W19.mantou, W19.mianbao],
          },
          {
            type: 'table',
            head: ['Food', 'Say it', 'Trick'],
            rows: [
              ['米饭 (rice)', 'mǐfàn', '米 (rice grain) + 饭 (meal)'],
              ['面条 (noodles)', 'miàntiáo', '面 (flour) + 条 (strip)'],
              ['饺子 (dumplings)', 'jiǎozi', 'Pleated and folded by hand'],
              ['包子 (steamed bun)', 'bāozi', 'Bao means "wrap"'],
            ],
          },
          kidsWay('Make a pretend meal with paper bowls. Name each staple as you put it down, the way children learn food words during play.'),
          {
            type: 'pro',
            body: 'Use 一碗 (a bowl of) for rice and noodles: 一碗米饭, 一碗面条. Use 个 for buns and dumplings: 一个包子, 一个饺子.',
          },
        ],
      },
      {
        kicker: 'What locals say',
        title: 'Ordering a staple',
        blocks: [
          locals('"你想吃什么？" (what do you want to eat?) is the usual question at home. Locals answer with the dish, like 我想吃饺子.'),
          locals('"包子很热" means "the bun is hot". Locals warn kids about hot steamed buns because the filling can burn the mouth.'),
          {
            type: 'dialogue',
            title: 'Dinner choice',
            lines: [
              { speaker: 'A', hanzi: '你想吃什么？', pinyin: 'Nǐ xiǎng chī shénme?', english: 'What do you want to eat?' },
              { speaker: 'B', hanzi: '我想吃饺子。', pinyin: 'Wǒ xiǎng chī jiǎozi.', english: 'I want to eat dumplings.' },
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
            body: 'Many food words are two parts: 米 (rice grain) plus 饭 (meal) gives 米饭, and 面 (flour) plus 包 (wrap) gives 面包 bread. Split the word and the meaning shows itself.',
          },
          {
            type: 'taglish',
            body: 'Maraming salita sa pagkain ay dalawang bahagi: ang 米 (butil ng bigas) at 饭 (kanin) ay nagiging 米饭. Hatiin ang salita at makikita mo na agad ang kahulugan.',
          },
        ],
      },
      quiz('Dumplings', 'What does 饺子 mean?', ['dumplings', 'bread', 'noodles'], 0, '饺子 (jiǎozi) is dumplings. 面包 is bread and 面条 is noodles.'),
      quiz('Bread', 'What does 面包 mean?', ['bread', 'noodles', 'rice'], 0, '面包 (miànbāo) is bread. 面条 is noodles and 米饭 is rice.'),
      speak([
        { prompt: 'Say you want to eat rice.', hanzi: '我想吃米饭。', pinyin: 'Wǒ xiǎng chī mǐfàn.', english: 'I want to eat rice.' },
        { prompt: 'Say the bun is hot.', hanzi: '包子很热。', pinyin: 'Bāozi hěn rè.', english: 'The bun is hot.' },
      ]),
    ],
  },

  {
    id: 'fnd-meat-fish-egg',
    module: 'foundations',
    title: 'Eggs, meat and fish',
    subtitle: 'Chicken, beef, pork, fish and shrimp',
    minutes: 10,
    goal: 'Name the common proteins, say what you eat or do not eat, and say a dish is delicious.',
    pages: [
      {
        kicker: 'Overview',
        title: 'Protein on the plate',
        blocks: [
          {
            type: 'text',
            title: 'Eggs and meat',
            body: [
              'Eggs, chicken, beef, pork and fish are the protein foods children see on almost every table. Learning them lets you talk about what you like.',
              'Many of these words use 肉 (meat) or 蛋 (egg) as a clue, so one part of the word tells you the family.',
            ],
          },
          {
            type: 'taglish',
            body: 'Ang itlog, manok, baka, baboy, isda, at hipon ang mga pagkaing protina na nakikita ng mga bata sa halos bawat hapag. Ang 肉 (karne) at 蛋 (itlog) ay madalas na palatandaan ng grupo ng salita.',
          },
        ],
      },
      {
        kicker: 'Deep dive',
        title: 'Eggs, meat and seafood',
        blocks: [
          {
            type: 'vocab',
            title: 'Protein words',
            words: [W19.jidan, W19.jirou, W19.niurou, W19.zhurou, W19.yu, W19.xia],
          },
          {
            type: 'table',
            head: ['Food', 'Say it', 'Trick'],
            rows: [
              ['鸡蛋 (egg)', 'jīdàn', 'Chicken egg, the everyday egg'],
              ['鸡肉 (chicken)', 'jīròu', '肉 = meat'],
              ['牛肉 (beef)', 'niúròu', '牛 = cow'],
              ['猪肉 (pork)', 'zhūròu', '猪 = pig'],
            ],
          },
          kidsWay('Sort toy food into two piles: meat and fish, eggs and milk. Name each pile as you sort, so kids learn the food families first.'),
          {
            type: 'pro',
            body: 'Say 不吃 (bù chī) for "I do not eat": 我不吃猪肉 (I do not eat pork). Use 不 with 吃 and 喜欢 for food likes and dislikes.',
          },
        ],
      },
      {
        kicker: 'What locals say',
        title: 'Likes and dislikes',
        blocks: [
          locals('"我不吃牛肉" (I do not eat beef) is a common line. Locals often say it politely at a family meal before the food is served.'),
          locals('"鸡蛋很嫩" means "the egg is tender". People praise the texture of a good steamed egg this way.'),
          {
            type: 'dialogue',
            title: 'Breakfast eggs',
            lines: [
              { speaker: 'A', hanzi: '早饭吃什么？', pinyin: 'Zǎofàn chī shénme?', english: 'What do you eat for breakfast?' },
              { speaker: 'B', hanzi: '我吃两个鸡蛋。', pinyin: 'Wǒ chī liǎng gè jīdàn.', english: 'I eat two eggs.' },
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
            body: 'For meat, look for 肉 at the end: 鸡肉, 牛肉, 猪肉. For fish and shrimp, look at the radical: 鱼 (fish) and 虾 (shrimp) have a clear fish or insect-like shape.',
          },
          {
            type: 'taglish',
            body: 'Para sa karne, hanapin ang 肉 sa dulo: 鸡肉, 牛肉, 猪肉. Para sa isda at hipon, tandaan ang 鱼 at 虾, na madaling makilala sa hugis nila.',
          },
        ],
      },
      quiz('Fish', 'What does 鱼 mean?', ['fish', 'shrimp', 'beef'], 0, '鱼 (yú) is fish. 虾 is shrimp and 牛肉 is beef.'),
      quiz('Egg', 'What does 鸡蛋 mean?', ['egg', 'chicken', 'fish'], 0, '鸡蛋 (jīdàn) is egg. 鸡肉 is chicken meat and 鱼 is fish.'),
      speak([
        { prompt: 'Say you do not eat pork.', hanzi: '我不吃猪肉。', pinyin: 'Wǒ bù chī zhūròu.', english: 'I do not eat pork.' },
        { prompt: 'Say the fish is delicious.', hanzi: '鱼很好吃。', pinyin: 'Yú hěn hǎochī.', english: 'The fish is delicious.' },
      ]),
    ],
  },

  {
    id: 'fnd-drinks',
    module: 'foundations',
    title: 'Drinks: water, milk, juice and tea',
    subtitle: 'Ask for something to drink',
    minutes: 9,
    goal: 'Name common drinks, ask what someone wants to drink, and order a cup.',
    pages: [
      {
        kicker: 'Overview',
        title: 'Something to drink',
        blocks: [
          {
            type: 'text',
            title: 'The first drink words',
            body: [
              'Water and milk are the first drinks a child asks for. Juice, tea and cola come next, and they follow the same simple question pattern.',
              'When you want a drink, the question is always "what do you want to drink?" and the answer is the drink name with 一杯 (a cup of).',
            ],
          },
          {
            type: 'taglish',
            body: 'Tubig at gatas ang mga unang inumin na hinihingi ng mga bata. Sumunod ang katas, tsaa, at cola. Ang tanong ay laging "anong gusto mong inumin?" at ang sagot ay ang pangalan ng inumin kasama ang 一杯 (isang baso ng).',
          },
        ],
      },
      {
        kicker: 'Deep dive',
        title: 'Drinks you will order',
        blocks: [
          {
            type: 'vocab',
            title: 'Drink words',
            words: [W19.shui, W19.niunai, W19.guozhi, W19.cha, W19.kafei, W19.kele],
          },
          {
            type: 'table',
            head: ['Drink', 'Say it', 'Trick'],
            rows: [
              ['水 (water)', 'shuǐ', 'Water is the simplest drink'],
              ['牛奶 (milk)', 'niúnǎi', 'Cow + milk'],
              ['果汁 (juice)', 'guǒzhī', 'Fruit + juice'],
              ['可乐 (cola)', 'kělè', 'Tasty and fizzy'],
            ],
          },
          kidsWay('Line up cups with pretend drinks and ask a friend, "你要喝什么？", then pour the answer. Children learn drink words by asking for them.'),
          {
            type: 'pro',
            body: 'Use 要 (want) and 喝 (drink) together: 我要喝水 (I want to drink water). In a shop, you can drop 喝 and just say 我要一杯果汁.',
          },
        ],
      },
      {
        kicker: 'What locals say',
        title: 'Ordering a drink',
        blocks: [
          locals('"你要喝什么？" (what would you like to drink?) is the first question at most homes and cafes. Locals answer with a short phrase, like 一杯茶.'),
          locals('Many locals drink hot water at meals. "我喝热水" is a common and healthy line you will hear.'),
          {
            type: 'dialogue',
            title: 'What would you like?',
            lines: [
              { speaker: 'A', hanzi: '你要喝什么？', pinyin: 'Nǐ yào hē shénme?', english: 'What would you like to drink?' },
              { speaker: 'B', hanzi: '我要一杯牛奶。', pinyin: 'Wǒ yào yì bēi niúnǎi.', english: 'I would like a cup of milk.' },
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
            body: 'The 水 radical (three drops of water) shows up in drink-related words in some forms. For the everyday drinks, 水, 茶 and 奶 are the core words to learn first.',
          },
          {
            type: 'taglish',
            body: 'Ang radikal na 水 (patak ng tubig) ay makikita sa ilang salitang inumin. Para sa araw-araw na inumin, unahin mong matutunan ang 水, 茶 at 奶.',
          },
        ],
      },
      quiz('Milk', 'What does 牛奶 mean?', ['milk', 'juice', 'tea'], 0, '牛奶 (niúnǎi) is milk. 果汁 is juice and 茶 is tea.'),
      quiz('Cola', 'What does 可乐 mean?', ['cola', 'coffee', 'water'], 0, '可乐 (kělè) is cola. 咖啡 is coffee and 水 is water.'),
      speak([
        { prompt: 'Say you drink water.', hanzi: '我喝水。', pinyin: 'Wǒ hē shuǐ.', english: 'I drink water.' },
        { prompt: 'Say juice is sweet.', hanzi: '果汁是甜的。', pinyin: 'Guǒzhī shì tián de.', english: 'Juice is sweet.' },
      ]),
    ],
  },

  {
    id: 'fnd-snacks',
    module: 'foundations',
    title: 'Snacks and sweets',
    subtitle: 'Cake, cookies, candy, ice cream and chocolate',
    minutes: 10,
    goal: 'Name common snacks and sweets, ask for one, and say you like it.',
    pages: [
      {
        kicker: 'Overview',
        title: 'Treats kids remember',
        blocks: [
          {
            type: 'text',
            title: 'Small treats, big words',
            body: [
              'Cake, cookies and ice cream are the treats children ask for most. Learning these names gives you an easy way to talk about rewards and celebrations.',
              'Many of these words borrow sounds from English, so they are easy to spot once you hear them.',
            ],
          },
          {
            type: 'taglish',
            body: 'Ang keyk, biskwit, at ice cream ang mga pagkaing hinihingi ng mga bata. Maraming salita rito ang may tunog na hiram sa Ingles, kaya madali silang makilala kapag narinig mo na.',
          },
        ],
      },
      {
        kicker: 'Deep dive',
        title: 'Sweets and snacks',
        blocks: [
          {
            type: 'vocab',
            title: 'Treat words',
            words: [W19.dangao, W19.binggan, W19.tang, W19.bingqilin, W19.qiaokeli, W19.shutiao],
          },
          {
            type: 'table',
            head: ['Treat', 'Say it', 'Trick'],
            rows: [
              ['蛋糕 (cake)', 'dàngāo', 'Egg + cake'],
              ['饼干 (cookie)', 'bǐnggān', 'Dry and crunchy'],
              ['冰淇淋 (ice cream)', 'bīngqílín', 'Ice + cream, sounds like the English'],
              ['巧克力 (chocolate)', 'qiǎokèlì', 'Sounds close to "chocolate"'],
            ],
          },
          kidsWay('Pretend to share a cake: cut it, count the pieces, and say 一块 for each slice. Children learn counting and treat words together this way.'),
          {
            type: 'pro',
            body: 'Use 一块 (a piece of) for cake, cookies and chocolate: 一块蛋糕, 一块巧克力. Use 一个 for a whole ice cream or a cookie.',
          },
        ],
      },
      {
        kicker: 'What locals say',
        title: 'Sharing a treat',
        blocks: [
          locals('"给你一块" (here, have a piece) is how people offer snacks. Locals rarely eat alone when they have treats at home.'),
          locals('"好吃！再来一块" means "delicious, have another piece". It is a warm way to say thanks and to ask for more.'),
          {
            type: 'dialogue',
            title: 'Want some cake?',
            lines: [
              { speaker: 'A', hanzi: '你想吃蛋糕吗？', pinyin: 'Nǐ xiǎng chī dàngāo ma?', english: 'Do you want some cake?' },
              { speaker: 'B', hanzi: '想！我要一块。', pinyin: 'Xiǎng! Wǒ yào yí kuài.', english: 'Yes! I want one piece.' },
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
            body: 'The 糖 (sugar) character shows up in sweets: 糖果 means candy. When you want something sweet, look for 糖 in the word and you will know it is a treat.',
          },
          {
            type: 'taglish',
            body: 'Ang 糖 (asukal) ay makikita sa mga matamis: ang 糖果 ay kendi. Kapag may gusto kang matamis, hanapin ang 糖 sa salita at alam mo nang panghimagas ito.',
          },
        ],
      },
      quiz('Ice cream', 'What does 冰淇淋 mean?', ['ice cream', 'chocolate', 'cake'], 0, '冰淇淋 (bīngqílín) is ice cream. 巧克力 is chocolate and 蛋糕 is cake.'),
      quiz('Sugar', 'What does 糖 mean?', ['sugar or candy', 'salt', 'rice'], 0, '糖 (táng) means sugar or candy. 盐 is salt and 米 is rice.'),
      speak([
        { prompt: 'Say you like ice cream.', hanzi: '我喜欢冰淇淋。', pinyin: 'Wǒ xǐhuan bīngqílín.', english: 'I like ice cream.' },
        { prompt: 'Say this biscuit is sweet.', hanzi: '这块饼干很甜。', pinyin: 'Zhè kuài bǐnggān hěn tián.', english: 'This biscuit is sweet.' },
      ]),
    ],
  },

  {
    id: 'fnd-morning',
    module: 'foundations',
    title: 'My morning routine',
    subtitle: 'Get up, brush teeth, wash face, get dressed, go to school',
    minutes: 11,
    goal: 'Describe your morning in order and say what time you do each thing.',
    pages: [
      {
        kicker: 'Overview',
        title: 'The routine every child learns',
        blocks: [
          {
            type: 'text',
            title: 'Same steps, every day',
            body: [
              'Children learn a morning routine in a fixed order: get up, wash, brush, dress, eat, go to school. Saying the steps in order is easy because they happen every day.',
              'Use 先 (first) and 然后 (then) to put the steps in order, just as you would in English.',
            ],
          },
          {
            type: 'taglish',
            body: 'Natututo ang mga bata ng nakagawiang umaga sa tiyak na pagkakasunod: bumangon, maghilamos, magsipilyo, magbihis, kumain, at pumasok sa paaralan. Gamitin ang 先 (una) at 然后 (saka) para ayusin ang mga hakbang.',
          },
        ],
      },
      {
        kicker: 'Deep dive',
        title: 'Steps in order',
        blocks: [
          {
            type: 'vocab',
            title: 'Morning words',
            words: [W19.qichuang, W19.shuaya, W19.xilian, W19.chuanyifu, W19.zaofan, W19.shangxue],
          },
          {
            type: 'table',
            head: ['Step', 'Say it', 'Trick'],
            rows: [
              ['起床 (get up)', 'qǐchuáng', 'Rise + bed'],
              ['刷牙 (brush teeth)', 'shuāyá', 'Brush + teeth'],
              ['洗脸 (wash face)', 'xǐliǎn', 'Wash + face'],
              ['穿衣服 (get dressed)', 'chuānyīfu', 'Wear + clothes'],
            ],
          },
          kidsWay('Make a picture chart of the four morning steps and point to each one in order each morning. Kids learn routines by following the same picture every day.'),
          {
            type: 'pro',
            body: 'Put the time before the verb: 我七点起床 (I get up at seven), 我早上刷牙 (I brush my teeth in the morning). Time goes first, action second.',
          },
        ],
      },
      {
        kicker: 'What locals say',
        title: 'Morning talk',
        blocks: [
          locals('"该起床了！" (time to get up!) is what parents call out most mornings. Kids often answer with "再睡五分钟" (five more minutes).'),
          locals('"快点，要迟到了" means "hurry up, we will be late". Locals say it a lot on school mornings.'),
          {
            type: 'dialogue',
            title: 'Time to get up',
            lines: [
              { speaker: 'A', hanzi: '你几点起床？', pinyin: 'Nǐ jǐ diǎn qǐchuáng?', english: 'What time do you get up?' },
              { speaker: 'B', hanzi: '我七点起床。', pinyin: 'Wǒ qī diǎn qǐchuáng.', english: 'I get up at seven.' },
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
            body: 'The 床 in 起床 is the bed, and the 学 in 上学 is study. Put the verb first and the place or thing after it: 起床 is "rise from bed", 上学 is "go to study".',
          },
          {
            type: 'taglish',
            body: 'Ang 床 sa 起床 ay kama, at ang 学 sa 上学 ay pag-aaral. Ang 起床 ay "bumangon sa kama", at ang 上学 ay "pumasok para mag-aral".',
          },
        ],
      },
      quiz('Brush teeth', 'What does 刷牙 mean?', ['brush teeth', 'wash face', 'take a bath'], 0, '刷牙 (shuāyá) is brush teeth. 洗脸 is wash face.'),
      quiz('Get up', 'What does 起床 mean?', ['get up', 'go to bed', 'go to school'], 0, '起床 (qǐchuáng) is get up. 睡觉 is go to sleep and 上学 is go to school.'),
      speak([
        { prompt: 'Say you brush your teeth in the morning.', hanzi: '我早上刷牙。', pinyin: 'Wǒ zǎoshang shuāyá.', english: 'I brush my teeth in the morning.' },
        { prompt: 'Say you go to school at seven.', hanzi: '我七点上学。', pinyin: 'Wǒ qī diǎn shàngxué.', english: 'I go to school at seven.' },
      ]),
    ],
  },

  {
    id: 'fnd-cooking-verbs',
    module: 'foundations',
    title: 'How food is cooked',
    subtitle: 'Boil, stir-fry, steam, bake, deep-fry and cut',
    minutes: 11,
    goal: 'Name six basic cooking verbs and say what you can cook.',
    pages: [
      {
        kicker: 'Overview',
        title: 'Verbs in the kitchen',
        blocks: [
          {
            type: 'text',
            title: 'One verb per method',
            body: [
              'Every cooking method has its own verb in Chinese. Once you know the verbs, you can describe any dish you see on a menu.',
              'Most of these verbs are short, so they are easy to hear in a kitchen or a restaurant.',
            ],
          },
          {
            type: 'taglish',
            body: 'May sariling pandiwa ang bawat paraan ng pagluluto sa Chinese. Kapag alam mo ang mga pandiwang ito, kaya mo nang ilarawan ang anumang ulam sa menu.',
          },
        ],
      },
      {
        kicker: 'Deep dive',
        title: 'Six cooking verbs',
        blocks: [
          {
            type: 'vocab',
            title: 'Cooking verbs',
            words: [W19.zhu, W19.chao, W19.zheng, W19.kao, W19.zha, W19.qie],
          },
          {
            type: 'table',
            head: ['Method', 'Say it', 'Think of'],
            rows: [
              ['煮 (boil)', 'zhǔ', 'Noodles in a pot of water'],
              ['炒 (stir-fry)', 'chǎo', 'Vegetables in a hot wok'],
              ['蒸 (steam)', 'zhēng', 'Dumplings and buns in a steamer'],
              ['烤 (bake or grill)', 'kǎo', 'Bread in an oven'],
            ],
          },
          kidsWay('Use play dough: press it flat for 切 (cut), roll it into a ball for 煮 (boil), and pretend to stir for 炒. Acting out the verb helps kids remember it.'),
          {
            type: 'pro',
            body: 'Put the verb before the food: 炒菜 (stir-fry vegetables), 蒸包子 (steam buns), 煮面条 (boil noodles). You can also say 会 + verb to say you know how: 我会炒菜 (I can stir-fry).',
          },
        ],
      },
      {
        kicker: 'What locals say',
        title: 'In the kitchen',
        blocks: [
          locals('"我来切" (let me cut it) is a common offer when someone is helping in the kitchen. It is polite to offer to help this way.'),
          locals('"炸的" means "fried". Locals often name a dish by how it is cooked, like 炸鸡 (fried chicken).'),
          {
            type: 'dialogue',
            title: 'Can you cook?',
            lines: [
              { speaker: 'A', hanzi: '你会炒菜吗？', pinyin: 'Nǐ huì chǎo cài ma?', english: 'Can you stir-fry vegetables?' },
              { speaker: 'B', hanzi: '会，我会煮饺子。', pinyin: 'Huì, wǒ huì zhǔ jiǎozi.', english: 'Yes, I can boil dumplings.' },
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
            body: 'The 火 (fire) radical is at the side of 煮, 炒, 烤 and 炸. When you see 火 on the left, the word is usually about heat and cooking.',
          },
          {
            type: 'taglish',
            body: 'Ang radikal na 火 (apoy) ay nasa gilid ng 煮, 炒, 烤 at 炸. Kapag nakita mo ang 火 sa kaliwa, kadalasan tungkol sa init at pagluluto ang salita.',
          },
        ],
      },
      quiz('Stir-fry', 'What does 炒 mean?', ['stir-fry', 'steam', 'boil'], 0, '炒 (chǎo) means stir-fry. 蒸 is steam and 煮 is boil.'),
      quiz('Steam', 'What does 蒸 mean?', ['steam', 'bake', 'cut'], 0, '蒸 (zhēng) means steam. 烤 is bake and 切 is cut.'),
      speak([
        { prompt: 'Say you can steam buns.', hanzi: '我会蒸包子。', pinyin: 'Wǒ huì zhēng bāozi.', english: 'I can steam buns.' },
        { prompt: 'Ask someone to cut it.', hanzi: '请切一下。', pinyin: 'Qǐng qiē yíxià.', english: 'Please cut it once.' },
      ]),
    ],
  },

  {
    id: 'fnd-playtime',
    module: 'foundations',
    title: 'Playtime: run, jump, draw and sing',
    subtitle: 'Kindergarten activities and toys',
    minutes: 10,
    goal: 'Name common play activities and toys, and invite a friend to play.',
    pages: [
      {
        kicker: 'Overview',
        title: 'Learning through play',
        blocks: [
          {
            type: 'text',
            title: 'Play is how kids learn',
            body: [
              'Kindergarten children learn most of their words during play. Running, jumping, drawing and singing are the activities they talk about all day.',
              'Start with a simple invitation: 我们一起玩吧 (let us play together). It is the phrase every child uses first.',
            ],
          },
          {
            type: 'taglish',
            body: 'Sa kindergarten, karamihan ng salita ng mga bata ay natututunan habang naglalaro. Ang pagtakbo, pagtalon, pagguhit, at pagkanta ang mga bagay na pinag-uusapan nila buong araw. Simulan sa 我们一起玩吧 (laro tayo).',
          },
        ],
      },
      {
        kicker: 'Deep dive',
        title: 'Activities and toys',
        blocks: [
          {
            type: 'vocab',
            title: 'Play words',
            words: [W19.wan, W19.pao, W19.tiao, W19.huahua, W19.changge, W19.wanju],
          },
          {
            type: 'table',
            head: ['Activity', 'Say it', 'Trick'],
            rows: [
              ['玩 (play)', 'wán', 'Use it with any game'],
              ['跑 (run)', 'pǎo', 'Running feet'],
              ['画画 (draw)', 'huàhuà', 'Draw + draw, say it twice'],
              ['唱歌 (sing)', 'chànggē', 'Sing a song'],
            ],
          },
          kidsWay('Play a game of "Simon Says" in Chinese. Say 跑, 跳 or 画画 and let kids act it out. Children remember verbs best when they move their bodies.'),
          {
            type: 'pro',
            body: 'Use 玩 with a game or toy: 玩玩具 (play with toys), 玩球 (play ball). Add 吧 at the end to suggest: 我们唱歌吧 (let us sing).',
          },
        ],
      },
      {
        kicker: 'What locals say',
        title: 'Inviting a friend to play',
        blocks: [
          locals('"好，我们去跑" is a quick "yes, let us go run". Kids say it right after one friend suggests a game.'),
          locals('"你玩什么？" (what are you playing?) is what a parent or friend asks when they walk past a game.'),
          {
            type: 'dialogue',
            title: 'Let us play',
            lines: [
              { speaker: 'A', hanzi: '我们一起玩吧。', pinyin: 'Wǒmen yìqǐ wán ba.', english: 'Let us play together.' },
              { speaker: 'B', hanzi: '好，我们去跑。', pinyin: 'Hǎo, wǒmen qù pǎo.', english: 'Good, let us go run.' },
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
            body: 'Doubled words sound happy: 画画 (draw), 看看 (take a look), 尝尝 (taste a little). Repeating the verb makes it casual and friendly, like "let me just draw".',
          },
          {
            type: 'taglish',
            body: 'Ang pag-uulit ng pandiwa ay nagiging magaan at palakaibigan: 画画 (magguhit lang), 看看 (tingnan lang), 尝尝 (tikman lang). Parang sinasabing "sandali lang".',
          },
        ],
      },
      quiz('Toy', 'What does 玩具 mean?', ['toy', 'game', 'ball'], 0, '玩具 (wánjù) is toy. 玩 is to play, and 球 (qiú) is ball.'),
      quiz('Run', 'What does 跑 mean?', ['to run', 'to jump', 'to sing'], 0, '跑 (pǎo) means to run. 跳 is to jump and 唱歌 is to sing.'),
      speak([
        { prompt: 'Say you like to draw.', hanzi: '我喜欢画画。', pinyin: 'Wǒ xǐhuan huàhuà.', english: 'I like to draw.' },
        { prompt: 'Invite a friend to sing.', hanzi: '我们唱歌吧。', pinyin: 'Wǒmen chànggē ba.', english: 'Let us sing.' },
      ]),
    ],
  },
];

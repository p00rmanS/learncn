import type { Lesson, Page } from './types';
import { W16 } from './wordsPart16';

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

export const PART15_LESSONS: Lesson[] = [
  {
    id: 'fnd-body',
    module: 'foundations',
    title: 'Parts of the body',
    subtitle: 'Head, eyes, hands, feet and the words for pain',
    minutes: 10,
    goal: 'Name the main body parts and say where something hurts.',
    pages: [
      {
        kicker: 'Overview',
        title: 'Start with your own body',
        blocks: [
          {
            type: 'text',
            title: 'Why body words first',
            body: [
              'Every child learns body words first because they point at things. You can touch your nose while you say 鼻子. That link between word and body makes it stick.',
              'These words also let you explain a problem at a pharmacy or doctor, so they are useful early.',
            ],
          },
          {
            type: 'taglish',
            body: 'Ang mga salita sa katawan ang unang natututunan ng mga bata, dahil maituturo mo ito sa sarili mo. Kapag may masakit sa iyo, ang pagturo sa bahaging iyon ang pinakamabilis na paraan para maintindihan ka.',
          },
        ],
      },
      {
        kicker: 'Deep dive',
        title: 'The main body parts',
        blocks: [
          {
            type: 'vocab',
            title: 'Head to toe',
            words: [W16.tou, W16.yanjing, W16.erduo, W16.bizi, W16.zui, W16.bozi, W16.jianbang, W16.shou, W16.shouzhi, W16.duzi, W16.tui, W16.jiao],
          },
          {
            type: 'table',
            head: ['Body part', 'Say it', 'Trick'],
            rows: [
              ['头 (head)', 'tóu', 'The top of your body'],
              ['眼睛 (eyes)', 'yǎnjing', 'Two eyes, one word: 眼睛'],
              ['手 (hand)', 'shǒu', 'Wave your shǒu to say hello'],
              ['脚 (foot)', 'jiǎo', 'Stamp your jiǎo on the floor'],
            ],
          },
          kidsWay('Touch each part while you say it, then close your eyes and point. Kids do this with "Head, shoulders, knees and toes" in English, so do the same with 头, 肩膀, 腿 and 脚.'),
          {
            type: 'pro',
            body: 'Use 很 with 疼 to say something hurts: 我的头很疼 (my head hurts). You do not need a new word for each part.',
          },
        ],
      },
      {
        kicker: 'What locals say',
        title: 'Everyday body talk',
        blocks: [
          locals('"肚子疼" is how people say stomach ache. "头疼" is headache. Locals will ask 哪里不舒服？ (where does it hurt?) first.'),
          locals('"眼睛累了" (my eyes are tired) is a common line after screen time. People say it casually to take a break.'),
          {
            type: 'dialogue',
            title: 'Where does it hurt?',
            lines: [
              { speaker: 'A', hanzi: '你哪里不舒服？', pinyin: 'Nǐ nǎli bù shūfu?', english: 'Where do you feel unwell?' },
              { speaker: 'B', hanzi: '我的肚子疼。', pinyin: 'Wǒ de dùzi téng.', english: 'My stomach hurts.' },
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
            body: 'Touch your body and say the word. Body words stick fastest when your hand and mouth work together. Start with 头, 手, 脚 and 眼睛: four words cover most daily needs.',
          },
          {
            type: 'taglish',
            body: 'Hawakan ang bahagi ng katawan habang sinasabi ang salita. Sa ganitong paraan, mabilis itong tumatatak, kagaya ng ginagawa ng mga bata.',
          },
        ],
      },
      quiz('Body part', 'Which word means hand?', ['手', '头', '脚'], 0, '手 (shǒu) is hand. 头 is head and 脚 is foot.'),
      quiz('Pain', 'How do you say "my head hurts"?', ['我的头很疼', '我的手很大', '我的脚很快'], 0, '我的头很疼 uses 疼 for pain. The other sentences describe size or speed.'),
      speak([
        { prompt: 'Say your head hurts.', hanzi: '我的头很疼。', pinyin: 'Wǒ de tóu hěn téng.', english: 'My head hurts.' },
        { prompt: 'Ask someone to raise their hand.', hanzi: '请举起你的手。', pinyin: 'Qǐng jǔ qǐ nǐ de shǒu.', english: 'Please raise your hand.' },
      ]),
    ],
  },

  {
    id: 'fnd-clock',
    module: 'foundations',
    title: 'Telling the time',
    subtitle: 'O’clock, half past, quarter past, morning and evening',
    minutes: 12,
    goal: 'Tell the time on the hour, half past and quarter past, and say when you do things.',
    pages: [
      {
        kicker: 'Overview',
        title: 'The clock in four parts',
        blocks: [
          {
            type: 'text',
            title: 'How a time is built',
            body: [
              'Chinese time works like English: hour, then 点 (o\'clock), then minutes. The difference is the order of the small words.',
              'Once you know 点, 分, 半 and 刻, you can read almost any clock.',
            ],
          },
          {
            type: 'taglish',
            body: 'Ang 点 ay "oras" o o\'clock. Ang 分 ay minuto, ang 半 ay kalahati (half), at ang 刻 ay labinlimang minuto (quarter). Kapag alam mo ang apat na ito, kaya mo nang basahin ang oras.',
          },
        ],
      },
      {
        kicker: 'Deep dive',
        title: 'Reading the clock',
        blocks: [
          {
            type: 'vocab',
            title: 'Clock words',
            words: [W16.dian, W16.fen, W16.ban, W16.ke, W16.xianzai, W16.ji, W16.zaoshang, W16.xiawu, W16.wanshang],
          },
          {
            type: 'table',
            head: ['Time', 'Say it', 'Literal'],
            rows: [
              ['3:00', '三点', 'three o\'clock'],
              ['3:30', '三点半', 'three, half'],
              ['3:15', '三点一刻', 'three, one quarter'],
              ['3:05', '三点零五分', 'three, zero five minutes'],
            ],
          },
          kidsWay('Draw a clock on paper and move the hands while you say the time. Kids learn time fastest by moving the hands themselves, so do the same with 点, 半 and 刻.'),
          {
            type: 'pro',
            body: 'Use 差 for "to" the hour (for example 差五分八点, five minutes to eight). Most people say it this way in daily speech.',
          },
        ],
      },
      {
        kicker: 'What locals say',
        title: 'What people actually say',
        blocks: [
          locals('"现在几点？" is the usual question. Locals answer quickly with the hour: 三点半.'),
          locals('"早上" and "下午" are used for morning and afternoon, and 晚上 for night. Locals rarely say "PM" or "AM".'),
          {
            type: 'dialogue',
            title: 'What time is it?',
            lines: [
              { speaker: 'A', hanzi: '现在几点？', pinyin: 'Xiànzài jǐ diǎn?', english: 'What time is it now?' },
              { speaker: 'B', hanzi: '现在三点半。', pinyin: 'Xiànzài sān diǎn bàn.', english: 'It is half past three now.' },
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
            body: 'Read the time in the order: hour, 点, then 分 or 半 or 刻. "Three o\'clock thirty" becomes 三点三十分 or simply 三点半. Locals usually say 半 for thirty.',
          },
          {
            type: 'taglish',
            body: 'Basahin ang oras sa ganitong ayos: oras, 点, saka 半 o 刻 o 分. Ang 三点半 ay "tatlo at kalahati", na madalas gamitin ng mga Chinese.',
          },
        ],
      },
      quiz('Half past', 'How do you say 3:30?', ['三点半', '半三点', '三刻点'], 0, '三点半 is "three, half". 半 is used for thirty minutes.'),
      quiz('Morning', 'Which word means "morning"?', ['早上', '晚上', '下午'], 0, '早上 is morning. 晚上 is evening or night, and 下午 is afternoon.'),
      speak([
        { prompt: 'Ask what time it is.', hanzi: '现在几点？', pinyin: 'Xiànzài jǐ diǎn?', english: 'What time is it now?' },
        { prompt: 'Say you eat breakfast at seven.', hanzi: '我七点吃早饭。', pinyin: 'Wǒ qī diǎn chī zǎofàn.', english: 'I eat breakfast at seven.' },
      ]),
    ],
  },

  {
    id: 'fnd-compass',
    module: 'foundations',
    title: 'Directions and positions',
    subtitle: 'North, south, left, right, in front, behind, opposite',
    minutes: 11,
    goal: 'Give and follow simple directions and describe where something is.',
    pages: [
      {
        kicker: 'Overview',
        title: 'Four compass words and six position words',
        blocks: [
          {
            type: 'text',
            title: 'Why directions matter',
            body: [
              'Direction words are how you find your way. Once you know 东, 南, 西, 北 and 左, 右, 前, 后, most instructions are just combinations.',
              'Pair each word with a picture: east is where the sun rises, and 东 looks like the sun rising through a tree.',
            ],
          },
          {
            type: 'taglish',
            body: 'Ang 东, 南, 西, 北 ay silangan, timog, kanluran at hilaga. Ang 左 at 右 ay kaliwa at kanan. Ang 前 at 后 ay harap at likod. Madali itong tandaan kapag nagturo ka gamit ang kamay.',
          },
        ],
      },
      {
        kicker: 'Deep dive',
        title: 'Where things are',
        blocks: [
          {
            type: 'vocab',
            title: 'Direction words',
            words: [W16.dong, W16.nan, W16.xi, W16.bei, W16.zuo, W16.you, W16.qian, W16.hou, W16.shang, W16.xia, W16.lili, W16.wai, W16.duimian, W16.pangbian, W16.yinhang],
          },
          {
            type: 'table',
            head: ['Phrase', 'Meaning', 'Hint'],
            rows: [
              ['在前面', 'in front', 'Point ahead'],
              ['在后面', 'behind', 'Point back'],
              ['在左边', 'on the left', 'Hold your left hand up'],
              ['在对面', 'opposite', 'Across the street'],
            ],
          },
          kidsWay('Play "Simon says" with the words: 左手 (left hand), 右手 (right hand), 前面 (front), 后面 (back). Children learn position words faster when they move.'),
          {
            type: 'pro',
            body: 'Add 边 to make a side: 左边 (left side), 右边 (right side), 旁边 (next to). Locals drop 边 in quick speech, so 左 alone also works.',
          },
        ],
      },
      {
        kicker: 'What locals say',
        title: 'How people give directions',
        blocks: [
          locals('"前面左转" (turn left ahead) is the most common way to give a direction. Locals often add "走几分钟" (walk a few minutes).'),
          locals('"就在对面" (it is right across) is how people reassure you the place is close.'),
          {
            type: 'dialogue',
            title: 'Finding the bank',
            lines: [
              { speaker: 'A', hanzi: '银行在哪里？', pinyin: 'Yínháng zài nǎli?', english: 'Where is the bank?' },
              { speaker: 'B', hanzi: '在学校对面。', pinyin: 'Zài xuéxiào duìmiàn.', english: 'It is across from the school.' },
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
            body: 'Compass words are on a map: 北 is up, 南 is down, 东 is right, 西 is left. For everyday movement, 左 and 右 matter more, so say them with your hands.',
          },
          {
            type: 'taglish',
            body: 'Isipin ang mapa: nasa itaas ang 北, nasa ibaba ang 南, nasa kanan ang 东, at nasa kaliwa ang 西. Para sa paglalakad, mas madalas ang 左 at 右.',
          },
        ],
      },
      quiz('Left', 'Which word means "left"?', ['左', '右', '东'], 0, '左 is left and 右 is right. 东 is east.'),
      quiz('Opposite', 'What does 对面 mean?', ['opposite; across from', 'behind', 'inside'], 0, '对面 means across from or opposite.'),
      speak([
        { prompt: 'Ask where the bank is.', hanzi: '银行在哪里？', pinyin: 'Yínháng zài nǎli?', english: 'Where is the bank?' },
        { prompt: 'Give a direction.', hanzi: '前面左转。', pinyin: 'Qiánmiàn zuǒ zhuǎn.', english: 'Turn left ahead.' },
      ]),
    ],
  },

  {
    id: 'fnd-fruit',
    module: 'foundations',
    title: 'Fruit',
    subtitle: 'Apples, bananas, watermelon and the words to buy them',
    minutes: 9,
    goal: 'Name common fruits and say which ones you like.',
    pages: [
      {
        kicker: 'Overview',
        title: 'Fruit is an easy start',
        blocks: [
          {
            type: 'text',
            title: 'Why fruit',
            body: [
              'Fruit words are short, concrete and everywhere: markets, shops, and family meals. Kids learn them first because they can taste and see them.',
              'Many fruit names end in 果 (guǒ, fruit) or 子 (zi, small thing), which gives you a pattern.',
            ],
          },
          {
            type: 'taglish',
            body: 'Ang 水果 ay prutas. Maraming pangalan ng prutas ang may 果 (guǒ) o 子 (zi) sa dulo, kaya kapag nakita mo ang pattern, mas madali nang tandaan.',
          },
        ],
      },
      {
        kicker: 'Deep dive',
        title: 'The common fruits',
        blocks: [
          {
            type: 'vocab',
            title: 'Fruit basket',
            words: [W16.shuiguo, W16.pingguo, W16.xiangjiao, W16.juzi, W16.putao, W16.xigua, W16.caomei, W16.taozi, W16.mangguo, W16.li2],
          },
          {
            type: 'table',
            head: ['Pattern', 'Examples', 'Hint'],
            rows: [
              ['…果 (fruit)', '苹果, 芒果, 水果', 'The guǒ ending means fruit'],
              ['…子 (small thing)', '橘子, 桃子', 'Common in everyday words'],
              ['…瓜 (melon)', '西瓜', 'Melons end in guā'],
            ],
          },
          kidsWay('Name the fruit you see at the market out loud, one by one. Kids learn by naming what is in front of them.'),
          {
            type: 'pro',
            body: 'Fruit is sold by weight. Say 一斤 (half a kilo, one jīn) before the fruit: 一斤苹果 (a jīn of apples).',
          },
        ],
      },
      {
        kicker: 'What locals say',
        title: 'Buying fruit',
        blocks: [
          locals('"甜不甜？" (is it sweet?) is the first question at a fruit stall. Sellers often let you taste a piece first.'),
          locals('"我要这个" (I want this one) is the easiest way to buy when you point.'),
          {
            type: 'dialogue',
            title: 'At the fruit stall',
            lines: [
              { speaker: 'A', hanzi: '你喜欢什么水果？', pinyin: 'Nǐ xǐhuan shénme shuǐguǒ?', english: 'What fruit do you like?' },
              { speaker: 'B', hanzi: '我喜欢葡萄和西瓜。', pinyin: 'Wǒ xǐhuan pútao hé xīguā.', english: 'I like grapes and watermelon.' },
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
            body: 'Learn one pattern and you get many words for free: 果 for fruit, 瓜 for melons, 子 for small round things. 苹果, 西瓜 and 橘子 show all three.',
          },
          {
            type: 'taglish',
            body: 'Tandaan ang pattern: 果 para sa prutas, 瓜 para sa melon, at 子 para sa maliliit at bilog. Ang 苹果, 西瓜 at 橘子 ay halimbawa ng tatlo.',
          },
        ],
      },
      quiz('Fruit', 'Which word means "apple"?', ['苹果', '西瓜', '橘子'], 0, '苹果 (píngguǒ) is apple. 西瓜 is watermelon and 橘子 is orange.'),
      quiz('Watermelon', 'Which fruit ends in 瓜 (melon)?', ['西瓜', '香蕉', '葡萄'], 0, '西瓜 is watermelon. 瓜 means melon.'),
      speak([
        { prompt: 'Say you like watermelon.', hanzi: '我喜欢吃西瓜。', pinyin: 'Wǒ xǐhuan chī xīguā.', english: 'I like eating watermelon.' },
        { prompt: 'Say this apple is sweet.', hanzi: '这个苹果很甜。', pinyin: 'Zhège píngguǒ hěn tián.', english: 'This apple is very sweet.' },
      ]),
    ],
  },

  {
    id: 'fnd-veg',
    module: 'foundations',
    title: 'Vegetables',
    subtitle: 'Cabbage, potato, tomato, carrot and the market words',
    minutes: 10,
    goal: 'Name common vegetables and buy a few at a market.',
    pages: [
      {
        kicker: 'Overview',
        title: 'The vegetables you will cook with',
        blocks: [
          {
            type: 'text',
            title: 'Vegetables in daily life',
            body: [
              'Vegetables are the core of Chinese home cooking. You will hear them at every market and in almost every recipe.',
              'Learn the names of the basics first: cabbage, potato, tomato, carrot, cucumber. Then you can order any stir-fry.',
            ],
          },
          {
            type: 'taglish',
            body: 'Ang 蔬菜 ay gulay. Madalas itong pinagmumulan ng mga lutong bahay ng Chinese. Simulan sa mga basic: repolyo (白菜), patatas (土豆), kamatis (西红柿), at karot (胡萝卜).',
          },
        ],
      },
      {
        kicker: 'Deep dive',
        title: 'Common vegetables',
        blocks: [
          {
            type: 'vocab',
            title: 'The vegetable stall',
            words: [W16.shucai, W16.baicai, W16.huluobo, W16.tudou, W16.xihongshi, W16.huanggua, W16.qiezi, W16.qingcai, W16.yumi],
          },
          {
            type: 'table',
            head: ['Vegetable', 'Say it', 'Trick'],
            rows: [
              ['白菜', 'báicài', 'White vegetable; the common cabbage'],
              ['西红柿', 'xīhóngshì', 'Western red food; tomato'],
              ['土豆', 'tǔdòu', 'Earth bean; potato'],
              ['胡萝卜', 'húluóbo', 'Carrot; sounds like "hoo-loo-baw"'],
            ],
          },
          kidsWay('Use a picture book or a real stall. Point to each vegetable, say the name, then ask a yes or no question: 这是胡萝卜吗？ (Is this a carrot?).'),
          {
            type: 'pro',
            body: 'Tomato is written 西红柿 but people also say 番茄 (fānqié) in some places. 西红柿 is the one you will hear most in daily life.',
          },
        ],
      },
      {
        kicker: 'What locals say',
        title: 'At the vegetable stall',
        blocks: [
          locals('"要一斤白菜" (one jīn of cabbage) is how you buy vegetables. A jīn is half a kilo.'),
          locals('"还要别的吗？" (anything else?) is the seller\'s usual question at the end.'),
          {
            type: 'dialogue',
            title: 'Shopping for vegetables',
            lines: [
              { speaker: 'A', hanzi: '你买什么菜？', pinyin: 'Nǐ mǎi shénme cài?', english: 'What vegetables are you buying?' },
              { speaker: 'B', hanzi: '买白菜和西红柿。', pinyin: 'Mǎi báicài hé xīhóngshì.', english: 'I am buying cabbage and tomatoes.' },
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
            body: 'Build a dish in your head: 西红柿炒鸡蛋 (tomato and egg stir-fry) uses only two vegetables and two foods. Remember the dish, and the words come with it.',
          },
          {
            type: 'taglish',
            body: 'Isipin ang putahe: 西红柿炒鸡蛋 (tomato at itlog na gisado). Kapag naaalala mo ang putahe, kasama na rin ang mga salita.',
          },
        ],
      },
      quiz('Potato', 'Which word means "potato"?', ['土豆', '白菜', '茄子'], 0, '土豆 (tǔdòu) is potato. 白菜 is cabbage and 茄子 is eggplant.'),
      quiz('Tomato', 'What is 西红柿?', ['tomato', 'carrot', 'corn'], 0, '西红柿 is tomato. 胡萝卜 is carrot and 玉米 is corn.'),
      speak([
        { prompt: 'Ask for a kilo of tomatoes.', hanzi: '我要一斤西红柿。', pinyin: 'Wǒ yào yì jīn xīhóngshì.', english: 'I want one jīn of tomatoes.' },
        { prompt: 'Name two vegetables.', hanzi: '土豆和胡萝卜。', pinyin: 'Tǔdòu hé húluóbo.', english: 'Potato and carrot.' },
      ]),
    ],
  },

  {
    id: 'fnd-meals',
    module: 'foundations',
    title: 'Meals of the day',
    subtitle: 'Breakfast, lunch, dinner and everyday foods',
    minutes: 10,
    goal: 'Name the three main meals and say what you eat at each.',
    pages: [
      {
        kicker: 'Overview',
        title: 'Three meals, one rhythm',
        blocks: [
          {
            type: 'text',
            title: 'The daily rhythm',
            body: [
              'Meals are a great way to learn: they happen every day, and they come with a time of day. That is three basic words in one routine.',
              '早饭 (breakfast), 午饭 (lunch) and 晚饭 (dinner) all end in 饭 (fàn, meal or rice). Once you know 饭, you know the meal pattern.',
            ],
          },
          {
            type: 'taglish',
            body: 'Ang 饭 ay kanin o pagkain. Ang 早饭, 午饭 at 晚饭 ay almusal, tanghalian at hapunan. Tandaan na lahat ay may 饭 sa dulo.',
          },
        ],
      },
      {
        kicker: 'Deep dive',
        title: 'Food words',
        blocks: [
          {
            type: 'vocab',
            title: 'Meals and foods',
            words: [W16.zaofan, W16.wufan, W16.wanfan, W16.jidan, W16.niunai, W16.miantiao, W16.jiaozi, W16.yu, W16.jirou, W16.zhurou, W16.cha, W16.kafei],
          },
          {
            type: 'table',
            head: ['Meal', 'Typical foods', 'Say it'],
            rows: [
              ['早饭 (breakfast)', '鸡蛋, 牛奶, 豆浆', 'Wǒ zǎoshang chī jīdàn hé niúnǎi.'],
              ['午饭 (lunch)', '面条, 米饭', 'Wǔfàn chī miàntiáo.'],
              ['晚饭 (dinner)', '饺子, 鱼, 鸡肉', 'Wǎnfàn chī jiǎozi ba.'],
            ],
          },
          kidsWay('Draw three plates on paper and put one food on each. Say the meal name, then the food. Children remember meals through the plate picture.'),
          {
            type: 'pro',
            body: 'Chinese breakfast often includes something hot like congee (粥) or noodles. Do not be surprised if breakfast is not sweet.',
          },
        ],
      },
      {
        kicker: 'What locals say',
        title: 'Mealtime talk',
        blocks: [
          locals('"吃饭了！" (time to eat!) is what a family calls out when dinner is ready. Answer with "来了" (coming!).'),
          locals('"你吃了吗？" (have you eaten?) is a common greeting. It can mean "how are you" more than a real question.'),
          {
            type: 'dialogue',
            title: 'Breakfast talk',
            lines: [
              { speaker: 'A', hanzi: '你早饭吃什么？', pinyin: 'Nǐ zǎofàn chī shénme?', english: 'What do you eat for breakfast?' },
              { speaker: 'B', hanzi: '我吃鸡蛋和牛奶。', pinyin: 'Wǒ chī jīdàn hé niúnǎi.', english: 'I eat eggs and milk.' },
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
            body: 'Remember 饭 as "meal". Breakfast is 早 (early), lunch is 午 (noon), dinner is 晚 (evening). Early, noon, evening: the three meals are just three times of the day.',
          },
          {
            type: 'taglish',
            body: 'Alalahanin: 早 ang umaga, 午 ang tanghali, at 晚 ang gabi. Kaya ang almusal, tanghalian at hapunan ay tatlong oras lang ng araw.',
          },
        ],
      },
      quiz('Breakfast', 'What is 早饭?', ['breakfast', 'lunch', 'dinner'], 0, '早 is early, so 早饭 is breakfast. 午饭 is lunch and 晚饭 is dinner.'),
      quiz('Egg', 'Which word means "egg"?', ['鸡蛋', '牛奶', '鸡肉'], 0, '鸡蛋 is egg. 牛奶 is milk and 鸡肉 is chicken meat.'),
      speak([
        { prompt: 'Say what you eat for breakfast.', hanzi: '我早上吃鸡蛋和牛奶。', pinyin: 'Wǒ zǎoshang chī jīdàn hé niúnǎi.', english: 'In the morning I eat eggs and milk.' },
        { prompt: 'Suggest dumplings for dinner.', hanzi: '晚饭吃饺子吧。', pinyin: 'Wǎnfàn chī jiǎozi ba.', english: 'Let us have dumplings for dinner.' },
      ]),
    ],
  },

  {
    id: 'fnd-animals',
    module: 'foundations',
    title: 'Animals',
    subtitle: 'Farm animals, pets, and the sounds they make',
    minutes: 9,
    goal: 'Name common animals and say what pet or animal you see.',
    pages: [
      {
        kicker: 'Overview',
        title: 'Animals from the farm and the home',
        blocks: [
          {
            type: 'text',
            title: 'Animals you already know',
            body: [
              'Animal words are easy to picture, and many have a simple sound. Children learn them with toy animals and sound effects.',
              'Many animal words are short: 猫, 狗, 牛, 鸭. Learn them as a group of farm animals and pet animals.',
            ],
          },
          {
            type: 'taglish',
            body: 'Madaling tandaan ang mga hayop dahil nakikita mo sila. Ang 猫 ay pusa, ang 狗 ay aso, ang 牛 ay baka, at ang 鸭 ay itik. Pangkatin sila: alagang hayop at hayop sa bukid.',
          },
        ],
      },
      {
        kicker: 'Deep dive',
        title: 'Farm and pet animals',
        blocks: [
          {
            type: 'vocab',
            title: 'Animal names',
            words: [W16.dongwu, W16.gou, W16.mao, W16.zhu, W16.niu, W16.yang, W16.jichicken, W16.ya, W16.hu, W16.xiong, W16.ma, W16.niao, W16.xiao],
          },
          {
            type: 'table',
            head: ['Group', 'Animals', 'Trick'],
            rows: [
              ['Pets', '猫, 狗', 'Animals that live in the house'],
              ['Farm', '牛, 羊, 猪, 鸡, 鸭', 'Animals on a farm'],
              ['Wild', '虎, 熊, 马, 鸟', 'Big or free-living animals'],
            ],
          },
          kidsWay('Sort toy animals into the three groups on a table. Say the name and the group out loud. Sorting builds memory better than repeating a list.'),
          {
            type: 'pro',
            body: '小 (xiǎo) makes it small: 小猫 (kitten), 小狗 (puppy). Adding 小 to an animal name is what locals do with young animals and pets.',
          },
        ],
      },
      {
        kicker: 'What locals say',
        title: 'Talking about animals',
        blocks: [
          locals('"这只猫好可爱" (this cat is so cute) is what people say to pet owners. 可爱 is the everyday word for cute.'),
          locals('"你家有狗吗？" (do you have a dog at home?) is a friendly way to start talking about pets.'),
          {
            type: 'dialogue',
            title: 'Looking at a puppy',
            lines: [
              { speaker: 'A', hanzi: '你看，那是什么动物？', pinyin: 'Nǐ kàn, nà shì shénme dòngwù?', english: 'Look, what animal is that?' },
              { speaker: 'B', hanzi: '那是一只小狗。', pinyin: 'Nà shì yì zhī xiǎo gǒu.', english: 'That is a puppy.' },
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
            body: 'The measure word for animals is 只 (zhī): 一只猫, 一只狗. Say "one 只 animal" every time: 一只鸡, 两只鸭. This one word makes you sound natural.',
          },
          {
            type: 'taglish',
            body: 'Ang 只 ang panukat para sa hayop: 一只猫, 一只狗. Tandaan na lagi itong gamitin, halimbawa 一只鸡, 两只鸭.',
          },
        ],
      },
      quiz('Cat', 'Which word means "cat"?', ['猫', '狗', '鸭'], 0, '猫 (māo) is cat. 狗 is dog and 鸭 is duck.'),
      quiz('Measure word', 'Which measure word goes with animals like cats?', ['只', '个', '本'], 0, '只 is the measure word for animals. 个 is for many general things and 本 is for books.'),
      speak([
        { prompt: 'Say this is a little cat.', hanzi: '这是一只小猫。', pinyin: 'Zhè shì yì zhī xiǎo māo.', english: 'This is a little cat.' },
        { prompt: 'Say your family has a dog.', hanzi: '我家有一条狗。', pinyin: 'Wǒ jiā yǒu yì tiáo gǒu.', english: 'My family has a dog.' },
      ]),
    ],
  },

  {
    id: 'fnd-subjects',
    module: 'foundations',
    title: 'School subjects and rooms',
    subtitle: 'Maths, art, English, the classroom, the kitchen and the living room',
    minutes: 10,
    goal: 'Name school subjects and the rooms in a home.',
    pages: [
      {
        kicker: 'Overview',
        title: 'Where you learn and where you live',
        blocks: [
          {
            type: 'text',
            title: 'Two everyday maps',
            body: [
              'School subjects and home rooms are the words you hear when you ask about someone\'s day or show someone around.',
              'Most subjects end in 学 (study) or 语 (language). Rooms are often 厨房 (kitchen) or 房间 (room).',
            ],
          },
          {
            type: 'taglish',
            body: 'Ang 数学 ay maths, ang 美术 ay sining, ang 英语 ay English. Ang 厨房 ay kusina, ang 客厅 ay sala, at ang 房间 ay kuwarto. Kapag tinanong ka tungkol sa klase o bahay, ito ang kailangan mo.',
          },
        ],
      },
      {
        kicker: 'Deep dive',
        title: 'Subjects and rooms',
        blocks: [
          {
            type: 'vocab',
            title: 'School and home',
            words: [W16.xuexiao, W16.jiaoshi, W16.shuxue, W16.yuwen, W16.yingyu, W16.tiyu, W16.meishu, W16.lishi, W16.shangke, W16.fangjian, W16.chufang, W16.keting, W16.weishengjian, W16.woshi],
          },
          {
            type: 'table',
            head: ['Subject', 'Say it', 'Trick'],
            rows: [
              ['数学 (maths)', 'shùxué', 'Shù is number; xué is study'],
              ['语文 (Chinese)', 'yǔwén', 'Language and writing'],
              ['英语 (English)', 'yīngyǔ', 'English language'],
              ['体育 (PE)', 'tǐyù', 'Body and education'],
            ],
          },
          kidsWay('Walk through your home and name each room out loud. Then name each subject while you point at your timetable. Children learn places by walking them.'),
          {
            type: 'pro',
            body: 'Say 上数学课 (go to maths class) with 上 for attend. You say 上 with any class: 上课 is the general "to attend class".',
          },
        ],
      },
      {
        kicker: 'What locals say',
        title: 'Talking about school and home',
        blocks: [
          locals('"你今天上什么课？" (what classes do you have today?) is a normal question between students.'),
          locals('"厨房在客厅旁边" (the kitchen is beside the living room) is how people describe their flat when showing a guest around.'),
          {
            type: 'dialogue',
            title: 'Your classes',
            lines: [
              { speaker: 'A', hanzi: '你今天上什么课？', pinyin: 'Nǐ jīntiān shàng shénme kè?', english: 'What classes do you have today?' },
              { speaker: 'B', hanzi: '上数学课。', pinyin: 'Shàng shùxué kè.', english: 'I have maths.' },
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
            body: 'The 学 in a subject means study: 数学 is number-study, 历史 is history. Rooms work the same way: 厨房 is "cooking room". Learn the pattern and the word follows.',
          },
          {
            type: 'taglish',
            body: 'Ang 学 sa dulo ng asignatura ay pag-aaral. Ang 厨房 ay "silid ng pagluluto". Kapag naintindihan mo ang pattern, madaling tandaan ang iba.',
          },
        ],
      },
      quiz('Maths', 'Which word means "maths"?', ['数学', '美术', '体育'], 0, '数学 (shùxué) is maths. 美术 is art and 体育 is PE.'),
      quiz('Kitchen', 'What is 厨房?', ['kitchen', 'bedroom', 'bathroom'], 0, '厨房 is kitchen. 卧室 is bedroom and 卫生间 is bathroom.'),
      speak([
        { prompt: 'Say you have maths today.', hanzi: '我喜欢数学和英语。', pinyin: 'Wǒ xǐhuan shùxué hé yīngyǔ.', english: 'I like maths and English.' },
        { prompt: 'Describe where the kitchen is.', hanzi: '厨房在客厅旁边。', pinyin: 'Chúfáng zài kètīng pángbiān.', english: 'The kitchen is beside the living room.' },
      ]),
    ],
  },
];

import type { Lesson, Page } from './types';
import { W20 } from './wordsPart20';

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

export const PART19_LESSONS: Lesson[] = [
  {
    id: 'fnd-bathroom',
    module: 'foundations',
    title: 'Bath time and bathroom things',
    subtitle: 'Soap, towel, toothbrush, toothpaste and comb',
    minutes: 10,
    goal: 'Name the things you use for washing, say you are having a bath, and ask where the towel is.',
    pages: [
      {
        kicker: 'Overview',
        title: 'Clean and ready',
        blocks: [
          {
            type: 'text',
            title: 'Words for washing',
            body: [
              'Bath time and tooth brushing are the daily habits children learn to name first, because a parent says the words at the same time every day.',
              'Most of these words are two syllables and use 洗 (wash) or 牙 (tooth) as a clue.',
            ],
          },
          {
            type: 'taglish',
            body: 'Ang paliligo at pagsisipilyo ang mga araw-araw na gawaing unang natutunang ipangalan ng mga bata. Karamihan sa mga salitang ito ay dalawang pantig at may 洗 (hugas) o 牙 (ngipin) bilang palatandaan.',
          },
        ],
      },
      {
        kicker: 'Deep dive',
        title: 'Things in the bathroom',
        blocks: [
          {
            type: 'vocab',
            title: 'Bathroom words',
            words: [W20.xizao, W20.maojin, W20.feizao, W20.yagao, W20.yashua, W20.shuzi, W20.yushi, W20.cesuo],
          },
          {
            type: 'table',
            head: ['Item', 'Say it', 'Trick'],
            rows: [
              ['牙刷 (toothbrush)', 'yáshuā', '牙 (tooth) + 刷 (brush)'],
              ['牙膏 (toothpaste)', 'yágāo', '牙 (tooth) + 膏 (paste)'],
              ['毛巾 (towel)', 'máojīn', 'The soft fluffy one'],
              ['肥皂 (soap)', 'féizào', 'Use it with 洗手 (wash hands)'],
            ],
          },
          kidsWay('Lay out a toothbrush, soap and towel on a tray before bath time. Name each one as you hand it over, so the words come with the routine.'),
          {
            type: 'pro',
            body: 'Use 用 (use) to say what you use: 我用牙膏刷牙 (I use toothpaste to brush my teeth). Put 用 + the item before the action.',
          },
        ],
      },
      {
        kicker: 'What locals say',
        title: 'Bath time at home',
        blocks: [
          locals('"你要洗澡吗？" (do you want to take a bath?) is the usual question from a parent in the evening. Kids often answer "等一下" (wait a moment).'),
          locals('"厕所在哪里？" (where is the toilet?) is a polite question to ask in someone else\'s home or in a shop. Locals will point the way.'),
          {
            type: 'dialogue',
            title: 'Where is the towel?',
            lines: [
              { speaker: 'A', hanzi: '你要洗澡吗？', pinyin: 'Nǐ yào xǐzǎo ma?', english: 'Do you want to have a bath?' },
              { speaker: 'B', hanzi: '要，毛巾在哪里？', pinyin: 'Yào, máojīn zài nǎ lǐ?', english: 'Yes, where is the towel?' },
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
            body: 'Pair the verb and the thing: 洗澡 (wash the body), 洗手 (wash hands), 洗脸 (wash face). The verb 洗 stays the same and only the body part changes.',
          },
          {
            type: 'taglish',
            body: 'Ipares ang pandiwa sa bagay: 洗澡 (maligo), 洗手 (maghugas ng kamay), 洗脸 (maghilamos). Nananatili ang 洗 at nagbabago lang ang bahagi ng katawan.',
          },
        ],
      },
      quiz('Toothbrush', 'What does 牙刷 mean?', ['toothbrush', 'toothpaste', 'towel'], 0, '牙刷 (yáshuā) is toothbrush. 牙膏 is toothpaste and 毛巾 is towel.'),
      quiz('Towel', 'What does 毛巾 mean?', ['towel', 'soap', 'comb'], 0, '毛巾 (máojīn) is towel. 肥皂 is soap and 梳子 is comb.'),
      speak([
        { prompt: 'Say you brush your teeth with toothpaste.', hanzi: '我用牙膏刷牙。', pinyin: 'Wǒ yòng yágāo shuāyá.', english: 'I brush my teeth with toothpaste.' },
        { prompt: 'Say you are having a bath.', hanzi: '我洗澡。', pinyin: 'Wǒ xǐzǎo.', english: 'I am having a bath.' },
      ]),
    ],
  },

  {
    id: 'fnd-music',
    module: 'foundations',
    title: 'Music and instruments',
    subtitle: 'Piano, guitar, drum and violin',
    minutes: 10,
    goal: 'Name four common instruments, say you play one, and say you like music.',
    pages: [
      {
        kicker: 'Overview',
        title: 'Sounds children make',
        blocks: [
          {
            type: 'text',
            title: 'Music from the first years',
            body: [
              'Many children start music early with a drum or a toy piano. Naming instruments gives you a fun way to talk about hobbies and school activities.',
              'Use 弹 (play, for strings and keys) and 打 (hit, for drums) to say how you play each one.',
            ],
          },
          {
            type: 'taglish',
            body: 'Maraming bata ang nagsisimula sa musika nang maaga gamit ang drum o laruang piano. Ang pagbanggit ng mga instrumento ay masaya at nakakatulong sa pag-usapan ang libangan at mga aktibidad sa paaralan. Gamitin ang 弹 (tugtog sa kuwerdas o susi) at 打 (hampas sa drum).',
          },
        ],
      },
      {
        kicker: 'Deep dive',
        title: 'Instruments and sounds',
        blocks: [
          {
            type: 'vocab',
            title: 'Music words',
            words: [W20.yinyue, W20.gangqin, W20.tan, W20.gu, W20.jita, W20.xiaotiqin],
          },
          {
            type: 'table',
            head: ['Instrument', 'Say it', 'Trick'],
            rows: [
              ['钢琴 (piano)', 'gāngqín', 'Steel + zither'],
              ['鼓 (drum)', 'gǔ', 'Hit it with 打'],
              ['吉他 (guitar)', 'jítā', 'Borrowed from English'],
              ['小提琴 (violin)', 'xiǎotíqín', 'Small + lift + zither'],
            ],
          },
          kidsWay('Clap a rhythm and name the instrument that could play it. Kids learn instrument names by making the sound first, so tap a drum or hum a piano line.'),
          {
            type: 'pro',
            body: 'Use 会 (know how) with 弹 for a skill you have: 我会弹吉他 (I can play guitar). Use 一点 (a little) to be modest: 会一点 (I know a little).',
          },
        ],
      },
      {
        kicker: 'What locals say',
        title: 'Music talk',
        blocks: [
          locals('"你会弹钢琴吗？" (can you play the piano?) is a common question at a family party. Locals often answer "会一点" to sound humble.'),
          locals('"好听！" is what people say after a good performance. Kids are very proud when they hear it.'),
          {
            type: 'dialogue',
            title: 'Can you play?',
            lines: [
              { speaker: 'A', hanzi: '你会弹钢琴吗？', pinyin: 'Nǐ huì tán gāngqín ma?', english: 'Can you play the piano?' },
              { speaker: 'B', hanzi: '会一点。', pinyin: 'Huì yìdiǎn.', english: 'A little.' },
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
            body: 'The 钅 (metal) radical sits on the left of 钢 (steel) and 铃 (bell). When you see it, think of metal, like the strings and keys in many instruments.',
          },
          {
            type: 'taglish',
            body: 'Ang radikal na 钅 (metal) ay nasa kaliwa ng 钢 at 铃. Kapag nakita mo ito, isipin ang metal, gaya ng mga kuwerdas at susi ng maraming instrumento.',
          },
        ],
      },
      quiz('Piano', 'What does 钢琴 mean?', ['piano', 'guitar', 'drum'], 0, '钢琴 (gāngqín) is piano. 吉他 is guitar and 鼓 is drum.'),
      quiz('Drum', 'What does 鼓 mean?', ['drum', 'violin', 'flute'], 0, '鼓 (gǔ) is drum. 小提琴 is violin.'),
      speak([
        { prompt: 'Say you like music.', hanzi: '我喜欢音乐。', pinyin: 'Wǒ xǐhuan yīnyuè.', english: 'I like music.' },
        { prompt: 'Say you can play the guitar.', hanzi: '我会弹吉他。', pinyin: 'Wǒ huì tán jítā.', english: 'I can play the guitar.' },
      ]),
    ],
  },

  {
    id: 'fnd-spices',
    module: 'foundations',
    title: 'Salt, oil, vinegar and garlic',
    subtitle: 'The seasonings in every kitchen',
    minutes: 10,
    goal: 'Name the common seasonings, say what goes into a dish, and say you do not want something.',
    pages: [
      {
        kicker: 'Overview',
        title: 'What makes food taste good',
        blocks: [
          {
            type: 'text',
            title: 'Seasonings you will see',
            body: [
              'Salt, soy sauce, vinegar and oil sit on almost every kitchen counter. Ginger, garlic and spring onion add flavour to most stir-fries.',
              'Children often ask what goes in a dish, so these words come up at the dinner table as much as in cooking class.',
            ],
          },
          {
            type: 'taglish',
            body: 'Ang asin, toyo, suka, at mantika ay nasa halos bawat kusina. Ang luya, bawang, at sibuyas-dahon ay nagdaragdag ng lasa sa karamihan ng stir-fry. Madalas itong pag-usapan sa hapag kainan.',
          },
        ],
      },
      {
        kicker: 'Deep dive',
        title: 'Seasonings in the kitchen',
        blocks: [
          {
            type: 'vocab',
            title: 'Seasoning words',
            words: [W20.yan, W20.jiangyou, W20.cu, W20.you, W20.cong, W20.jiang, W20.suan],
          },
          {
            type: 'table',
            head: ['Seasoning', 'Say it', 'Trick'],
            rows: [
              ['盐 (salt)', 'yán', 'Salt is the first seasoning'],
              ['酱油 (soy sauce)', 'jiàngyóu', 'Dark and salty'],
              ['醋 (vinegar)', 'cù', 'A sour liquid for dumplings'],
              ['葱 (spring onion)', 'cōng', 'Green and fresh'],
            ],
          },
          kidsWay('Smell each seasoning from a small bowl and say its name. Children learn seasonings through smell and taste, the same way they learn fruit.'),
          {
            type: 'pro',
            body: 'Use 放 (put in) for adding seasoning: 放盐 (add salt), 放醋 (add vinegar). Use 不要 (do not want) to refuse: 我不要放醋 (I do not want vinegar).',
          },
        ],
      },
      {
        kicker: 'What locals say',
        title: 'Seasoning at the table',
        blocks: [
          locals('"少放盐" means "less salt, please". Locals often say it when they cook for elders or for children.'),
          locals('"好香！" (it smells great) is what people say when the garlic and ginger hit the wok.'),
          {
            type: 'dialogue',
            title: 'Add some salt?',
            lines: [
              { speaker: 'A', hanzi: '这个要放盐吗？', pinyin: 'Zhège yào fàng yán ma?', english: 'Do you want to add salt to this?' },
              { speaker: 'B', hanzi: '要一点。', pinyin: 'Yào yìdiǎn.', english: 'A little, please.' },
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
            body: '葱 and 蒜 have the plant radical 艹 at the top, and 姜 is a root used for flavour. 醋 and 油 are liquids you pour.',
          },
          {
            type: 'taglish',
            body: 'May 艹 (halaman) sa itaas ng 葱 at 蒜, at ang 姜 ay ugat na ginagamit sa lasa. Ang 醋 at 油 ay likido na binubuhos.',
          },
        ],
      },
      quiz('Vinegar', 'What does 醋 mean?', ['vinegar', 'soy sauce', 'oil'], 0, '醋 (cù) is vinegar. 酱油 is soy sauce and 油 is oil.'),
      quiz('Ginger', 'What does 姜 mean?', ['ginger', 'garlic', 'spring onion'], 0, '姜 (jiāng) is ginger. 蒜 is garlic and 葱 is spring onion.'),
      speak([
        { prompt: 'Say you do not want vinegar.', hanzi: '我不要放醋。', pinyin: 'Wǒ bú yào fàng cù.', english: 'I do not want vinegar added.' },
        { prompt: 'Say the spring onion and ginger smell good.', hanzi: '葱和姜很香。', pinyin: 'Cōng hé jiāng hěn xiāng.', english: 'The spring onion and ginger smell good.' },
      ]),
    ],
  },

  {
    id: 'fnd-beans-tofu',
    module: 'foundations',
    title: 'Beans, tofu and peanuts',
    subtitle: 'Soy milk for breakfast and tofu in every dish',
    minutes: 10,
    goal: 'Name common beans and bean foods, say you drink soy milk, and say you like tofu.',
    pages: [
      {
        kicker: 'Overview',
        title: 'Beans, tofu and peanuts',
        blocks: [
          {
            type: 'text',
            title: 'A big family of beans',
            body: [
              'Beans are a big part of Chinese food. Tofu and soy milk are everyday foods, and peanuts show up in snacks, sauces and desserts.',
              'The 豆 (bean) character is the clue. Most bean foods have 豆 in their name.',
            ],
          },
          {
            type: 'taglish',
            body: 'Malaki ang bahagi ng beans sa pagkaing Chinese. Ang tokwa at toyo-gatas ay pang-araw-araw na pagkain, at ang mani ay makikita sa meryenda, sarsa, at panghimagas. Ang 豆 (beans) ang palatandaan, dahil karamihan sa mga pagkaing beans ay may 豆 sa pangalan.',
          },
        ],
      },
      {
        kicker: 'Deep dive',
        title: 'Bean foods',
        blocks: [
          {
            type: 'vocab',
            title: 'Beans and grains',
            words: [W20.dou, W20.doufu, W20.doujiang, W20.huasheng, W20.mi, W20.mianfen],
          },
          {
            type: 'table',
            head: ['Food', 'Say it', 'Trick'],
            rows: [
              ['豆腐 (tofu)', 'dòufu', '豆 (bean) + 腐 (soft)'],
              ['豆浆 (soy milk)', 'dòujiāng', '豆 (bean) + 浆 (milk-like liquid)'],
              ['花生 (peanut)', 'huāshēng', 'Flower + born, it grows under the soil'],
              ['面粉 (flour)', 'miànfěn', 'Noodles and buns start here'],
            ],
          },
          kidsWay('Let children feel a block of tofu and a peanut shell. Name each thing as they touch it, so the word comes with a texture.'),
          {
            type: 'pro',
            body: 'Put 很 with a food and a taste to describe it: 豆浆很好喝 (soy milk is very nice to drink). 好喝 means nice to drink, and it works like 好吃 for food.',
          },
        ],
      },
      {
        kicker: 'What locals say',
        title: 'Breakfast beans',
        blocks: [
          locals('"早上喝豆浆" (drink soy milk in the morning) is a common breakfast habit. Locals often grab a cup from a stall on the way to work.'),
          locals('"豆腐很嫩" means "the tofu is very soft". People praise fresh tofu this way.'),
          {
            type: 'dialogue',
            title: 'Breakfast drink',
            lines: [
              { speaker: 'A', hanzi: '早上喝豆浆吗？', pinyin: 'Zǎoshang hē dòujiāng ma?', english: 'Do you drink soy milk in the morning?' },
              { speaker: 'B', hanzi: '喝，很好喝。', pinyin: 'Hē, hěn hǎohē.', english: 'Yes, it tastes very good.' },
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
            body: 'The 豆 (bean) character is a good hook. 豆腐 (tofu), 豆浆 (soy milk) and 豆 itself all share it, so once you spot 豆, you know the food comes from beans.',
          },
          {
            type: 'taglish',
            body: 'Ang 豆 (beans) ay magandang tanda. Ang 豆腐 (tokwa), 豆浆 (toyo-gatas) at ang 豆 mismo ay may iisang bahaging ito, kaya kapag nakita mo ang 豆, alam mong galing sa beans ang pagkain.',
          },
        ],
      },
      quiz('Tofu', 'What does 豆腐 mean?', ['tofu', 'bean sprout', 'soy milk'], 0, '豆腐 (dòufu) is tofu. 豆浆 is soy milk and 豆芽 is bean sprout.'),
      quiz('Peanut', 'What does 花生 mean?', ['peanut', 'walnut', 'sesame'], 0, '花生 (huāshēng) is peanut. 核桃 is walnut and 芝麻 is sesame.'),
      speak([
        { prompt: 'Say you like tofu.', hanzi: '我喜欢豆腐。', pinyin: 'Wǒ xǐhuan dòufu.', english: 'I like tofu.' },
        { prompt: 'Say the peanuts smell good.', hanzi: '花生很香。', pinyin: 'Huāshēng hěn xiāng.', english: 'The peanuts smell good.' },
      ]),
    ],
  },

  {
    id: 'fnd-soup',
    module: 'foundations',
    title: 'Soup, porridge and rice',
    subtitle: 'Warm bowls for a cold day',
    minutes: 10,
    goal: 'Name soup, porridge and rice, ask someone if they want soup, and say a dish is hot.',
    pages: [
      {
        kicker: 'Overview',
        title: 'A warm bowl',
        blocks: [
          {
            type: 'text',
            title: 'Soup and porridge',
            body: [
              'Soup and porridge are the warm foods children are given when they are sick or cold. Adults have them for breakfast or dinner too.',
              'Use 碗 (bowl) as the measure word with soup and porridge, just like you do with rice.',
            ],
          },
          {
            type: 'taglish',
            body: 'Ang sabaw at lugaw ang mga maiinit na pagkain na ibinibigay sa mga batang may sakit o nilalamig. Ginagamit din ito ng matatanda sa almusal o hapunan. Gamitin ang 碗 (mangkok) bilang panukat sa sabaw at lugaw.',
          },
        ],
      },
      {
        kicker: 'Deep dive',
        title: 'Soup and rice',
        blocks: [
          {
            type: 'vocab',
            title: 'Soup and rice words',
            words: [W20.tang, W20.jitang, W20.zhou, W20.fan, W20.he],
          },
          {
            type: 'table',
            head: ['Food', 'Say it', 'Trick'],
            rows: [
              ['汤 (soup)', 'tāng', 'Any soup, hot and liquid'],
              ['鸡汤 (chicken soup)', 'jītāng', 'Chicken + soup'],
              ['粥 (porridge)', 'zhōu', 'Rice cooked soft in water'],
              ['饭 (rice or meal)', 'fàn', 'Also means "meal"'],
            ],
          },
          kidsWay('Pour a pretend soup into a bowl with a spoon, then say 喝汤 (drink soup). Children learn drinking words when they can copy the action.'),
          {
            type: 'pro',
            body: 'Use 一碗 (a bowl of) with soup and porridge: 一碗鸡汤, 一碗粥. Use 喝 for soup and porridge, and 吃 for rice and noodles.',
          },
        ],
      },
      {
        kicker: 'What locals say',
        title: 'Warm food talk',
        blocks: [
          locals('"你要喝汤吗？" is a common offer at a family dinner. Locals often say "要，谢谢" as a short reply.'),
          locals('"汤很热，慢点喝" means "the soup is hot, drink slowly". Parents say it to children every time.'),
          {
            type: 'dialogue',
            title: 'Chicken soup?',
            lines: [
              { speaker: 'A', hanzi: '你要喝汤吗？', pinyin: 'Nǐ yào hē tāng ma?', english: 'Do you want some soup?' },
              { speaker: 'B', hanzi: '要，我要一碗鸡汤。', pinyin: 'Yào, wǒ yào yì wǎn jītāng.', english: 'Yes, I would like a bowl of chicken soup.' },
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
            body: 'The 饭 (rice or meal) character shows up in many meal words, such as 吃饭 (eat a meal) and 早饭 (breakfast). Once you know 饭 means meal, the other words follow.',
          },
          {
            type: 'taglish',
            body: 'Ang 饭 (kanin o pagkain) ay makikita sa maraming salita tungkol sa pagkain, gaya ng 吃饭 (kumain) at 早饭 (almusal). Kapag alam mong ang 饭 ay pagkain, madali nang sundan ang iba.',
          },
        ],
      },
      quiz('Soup', 'What does 汤 mean?', ['soup', 'rice', 'noodles'], 0, '汤 (tāng) is soup. 饭 is rice or meal and 面条 is noodles.'),
      quiz('Porridge', 'What does 粥 mean?', ['porridge (congee)', 'bread', 'milk'], 0, '粥 (zhōu) is porridge, also called congee. 面包 is bread and 牛奶 is milk.'),
      speak([
        { prompt: 'Say you drink porridge.', hanzi: '我喝粥。', pinyin: 'Wǒ hē zhōu.', english: 'I drink porridge.' },
        { prompt: 'Say the soup is hot.', hanzi: '汤很热。', pinyin: 'Tāng hěn rè.', english: 'The soup is hot.' },
      ]),
    ],
  },

  {
    id: 'fnd-western-food',
    module: 'foundations',
    title: 'Burgers, pizza and sandwiches',
    subtitle: 'Western food children ask for',
    minutes: 10,
    goal: 'Name common Western foods, ask someone if they want pizza, and say you want a burger.',
    pages: [
      {
        kicker: 'Overview',
        title: 'Foods from far away',
        blocks: [
          {
            type: 'text',
            title: 'Borrowed food words',
            body: [
              'Many Western foods have names that sound like the English word. Children learn these words quickly because they hear them on TV and in ads.',
              'Once you can say the sound, you can order from a Western menu in any Chinese city.',
            ],
          },
          {
            type: 'taglish',
            body: 'Maraming pagkaing Kanluranin ang may pangalang kahawig ng tunog sa Ingles. Mabilis itong natutunan ng mga bata dahil naririnig nila sa TV at patalastas. Kapag alam mo ang tunog, puwede ka nang mag-order sa anumang menu ng Kanluranin sa China.',
          },
        ],
      },
      {
        kicker: 'Deep dive',
        title: 'Western favourites',
        blocks: [
          {
            type: 'vocab',
            title: 'Western food words',
            words: [W20.hanbao, W20.pisa, W20.shala, W20.regou, W20.sanmingzhi],
          },
          {
            type: 'table',
            head: ['Food', 'Say it', 'Trick'],
            rows: [
              ['汉堡 (hamburger)', 'hànbǎo', 'Sounds close to "burger"'],
              ['披萨 (pizza)', 'pīsà', 'Sounds close to "pizza"'],
              ['沙拉 (salad)', 'shālā', 'Sounds close to "salad"'],
              ['三明治 (sandwich)', 'sānmíngzhì', 'Three bright layers'],
            ],
          },
          kidsWay('Pick a favourite from a picture menu and say its name before you point. Children learn borrowed words by matching the sound to the picture.'),
          {
            type: 'pro',
            body: 'Use 也 (also) to say you want the same as someone: 我也想吃汉堡 (I also want to eat a burger). It is a short way to agree.',
          },
        ],
      },
      {
        kicker: 'What locals say',
        title: 'Ordering a quick meal',
        blocks: [
          locals('"我要一个汉堡" is the usual way to order a single burger at a fast-food counter. Locals say 一个 before the food name.'),
          locals('"薯条要吗？" (do you want fries?) is what a cashier asks next. Many people say "要" with a smile.'),
          {
            type: 'dialogue',
            title: 'Pizza or burger?',
            lines: [
              { speaker: 'A', hanzi: '你想吃披萨吗？', pinyin: 'Nǐ xiǎng chī pīsà ma?', english: 'Do you want to eat pizza?' },
              { speaker: 'B', hanzi: '想，我也想吃汉堡。', pinyin: 'Xiǎng, wǒ yě xiǎng chī hànbǎo.', english: 'Yes, I also want to eat a burger.' },
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
            body: 'The 堡 in 汉堡 means fort, and the 堡 sound is the "burg" in burger. When a borrowed word has a sound-match, the characters are chosen for the sound, not the meaning.',
          },
          {
            type: 'taglish',
            body: 'Ang 堡 sa 汉堡 ay nangangahulugang kuta, pero ang tunog nito ay malapit sa "burg" ng burger. Kapag hiram na salita ang may tugmang tunog, ang mga karakter ay pinili para sa tunog, hindi sa kahulugan.',
          },
        ],
      },
      quiz('Hamburger', 'What does 汉堡 mean?', ['hamburger', 'pizza', 'salad'], 0, '汉堡 (hànbǎo) is hamburger. 披萨 is pizza and 沙拉 is salad.'),
      quiz('Salad', 'What does 沙拉 mean?', ['salad', 'sandwich', 'hot dog'], 0, '沙拉 (shālā) is salad. 三明治 is sandwich and 热狗 is hot dog.'),
      speak([
        { prompt: 'Say you want pizza.', hanzi: '我想吃披萨。', pinyin: 'Wǒ xiǎng chī pīsà.', english: 'I want to eat pizza.' },
        { prompt: 'Say the sandwich is delicious.', hanzi: '三明治很好吃。', pinyin: 'Sānmíngzhì hěn hǎochī.', english: 'The sandwich is delicious.' },
      ]),
    ],
  },
];

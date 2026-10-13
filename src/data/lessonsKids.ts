import type { Lesson, Page } from './types';
import { W } from './words';
import { W2 } from './wordsMore';
import { W3 } from './wordsExtra';
import { W4 } from './wordsPart4';
import { W5 } from './wordsPart5';
import { W6 } from './wordsPart6';
import { W7 } from './wordsPart7';
import { W8 } from './wordsKids';

/* Helpers keep the lesson data short and consistent. */
const quiz = (title: string, question: string, options: string[], answer: number, explain: string): Page => ({
  kicker: 'Check',
  title,
  blocks: [{ type: 'quiz', question, options, answer, explain }],
});

const speak = (items: { prompt: string; hanzi: string; pinyin: string; english: string }[]): Page => ({
  kicker: 'Say it',
  title: 'Your turn',
  blocks: items.map((i) => ({ type: 'speak' as const, ...i })),
});

const grownUp = (body: string) => ({ type: 'tip' as const, label: 'For the grown-up', body });

export const KIDS_LESSONS: Lesson[] = [
  // ═════════════════════════ KINDER (ages 3 to 5) ═════════════════════════
  {
    id: 'k-vowels',
    module: 'kinder',
    track: 'kids',
    title: 'Six mouth shapes: a o e i u ü',
    subtitle: 'The first song every Chinese child learns',
    minutes: 6,
    goal: 'Make the six vowel sounds with the right mouth shape.',
    pages: [
      {
        kicker: 'Look and listen',
        title: 'Open wide, round, smile!',
        blocks: [
          {
            type: 'text',
            body: ['Chinese children start with six sounds. Each one has its own mouth shape. Look in a mirror and make each shape!'],
          },
          { type: 'vocab', words: [W8.ayi, W8.gongji, W8.e_goose, W6.yifu, W8.wuya, W8.yu_fish] },
          {
            type: 'remember',
            body: 'A: open your mouth wide like at the doctor. O: make a round circle like a ball. E: smile a little and say "uh". I: smile big, teeth showing. U: tiny round lips like blowing a candle. Ü: say "ee" but with round lips, like a fish!',
          },
          {
            type: 'pro',
            body: 'The tone mark sits on the vowel, so the song is: ā ō é yī wū yū. Say it slowly, then faster. The vowels do not change shape in the middle, so hold the same mouth shape from start to end.',
          },
          grownUp('Sit in front of a mirror together. Children learn Mandarin sounds by watching mouths. Go slowly and praise every attempt.'),
        ],
      },
      {
        kicker: 'Let\'s play',
        title: 'Mouth-shape game',
        blocks: [
          {
            type: 'play',
            title: "Let's play",
            body: 'Grown-up shows a mouth shape without a sound. Child guesses: a, o, e, i, u or ü. Then swap! Whoever guesses right does a happy dance.',
          },
          {
            type: 'taglish',
            body: 'Para sa mga magulang: ito ay parang "A, E, I, O, U" na ginagawa natin sa Pilipinas, pero iba ang pagkakasunod-sunod at may ü pa. Gamitin ang salamin para makita ng bata ang hugis ng bibig.',
          },
        ],
      },
      quiz('Which animal?', 'Which one has the "ü" sound, with round lips like "ee"?', ['鱼 (fish)', '鹅 (goose)', '乌鸦 (crow)'], 0, '鱼 yú is the ü sound. Round your lips and say "ee".'),
      quiz('Open wide', 'Which sound needs your mouth wide open?', ['a', 'u', 'i'], 0, 'a is "ah", the widest mouth shape.'),
      speak([
        { prompt: 'Open wide!', hanzi: '阿姨', pinyin: 'āyí', english: 'auntie' },
        { prompt: 'Round lips, like a fish!', hanzi: '鱼', pinyin: 'yú', english: 'fish' },
      ]),
    ],
  },

  {
    id: 'k-initials1',
    module: 'kinder',
    track: 'kids',
    title: 'The bo-po-mo-fo song',
    subtitle: 'b p m f   d t n l   g k h',
    minutes: 7,
    goal: 'Say the first eleven consonants with a picture word for each.',
    pages: [
      {
        kicker: 'Look and listen',
        title: 'Four sounds for your lips',
        blocks: [
          { type: 'vocab', words: [W.baba, W2.pingguo, W.mama, W4.feiji] },
          {
            type: 'text',
            body: ['b, p, m, f all use your lips. Say them together: bō, pō, mō, fō!'],
          },
          {
            type: 'pro',
            body: 'b and p are twins. p has a puff of air, b does not. Hold a tissue in front of your mouth and say pō: it moves! Now say bō: it hardly moves.',
          },
          {
            type: 'remember',
            body: 'b = baba (dad). p = pingguo (apple) goes "pop!". m = mama (mom) hums mmm. f = feiji (airplane) whooshes "fff".',
          },
          grownUp('The tissue trick is the single best way to teach b versus p. Do it every day for a week.'),
        ],
      },
      {
        kicker: 'Look and listen',
        title: 'Tongue sounds: d t n l',
        blocks: [
          { type: 'vocab', words: [W2.didi, W8.tuzi, W8.niu, W8.laohu] },
          {
            type: 'remember',
            body: 'd = didi (little brother) and t = tuzi (rabbit) are twins: t has the puff of air. n = niu (cow) says "nnn". l = laohu (tiger) says "lll". Touch the tip of your tongue to the roof of your mouth.',
          },
        ],
      },
      {
        kicker: 'Look and listen',
        title: 'Throat sounds: g k h',
        blocks: [
          { type: 'vocab', words: [W2.gege, W3.kan, W2.he1] },
          {
            type: 'play',
            title: "Let's play",
            body: 'Chant it with a clap on every sound: bō pō mō fō, dē tē nē lē, gē kē hē. Do it three times, each one faster!',
          },
          {
            type: 'pro',
            body: 'g and k are twins too: k has the puff of air. So the puff pairs are b/p, d/t and g/k. Say each pair with a tissue.',
          },
        ],
      },
      quiz('Puff or no puff?', 'Which sound has a puff of air?', ['p', 'b', 'm'], 0, 'p has a puff. b is its twin without a puff.'),
      quiz('Mama', 'Which sound starts 妈妈 (mom)?', ['m', 'f', 'p'], 0, 'māma starts with m. Hum "mmm".'),
      speak([
        { prompt: 'Puff of air on the p!', hanzi: '苹果', pinyin: 'píngguǒ', english: 'apple' },
        { prompt: 'Say it softly.', hanzi: '妈妈', pinyin: 'māma', english: 'mom' },
      ]),
    ],
  },

  {
    id: 'k-initials2',
    module: 'kinder',
    track: 'kids',
    title: 'Smile sounds and curly-tongue sounds',
    subtitle: 'j q x   zh ch sh r   z c s',
    minutes: 7,
    goal: 'Tell the smile, curly-tongue and buzzing groups apart.',
    pages: [
      {
        kicker: 'Look and listen',
        title: 'Smile sounds: j q x',
        blocks: [
          { type: 'vocab', words: [W8.ji_chicken, W.qi, W7.xigua] },
          {
            type: 'remember',
            body: 'These three need a big SMILE: jī, qī, xī. Say "cheese!" for the camera and keep that smile while you say them. j is soft, q has a puff, x is like a quiet "sh".',
          },
          {
            type: 'pro',
            body: 'q is not "k" like in English. Think of a quiet "ch" in "cheese". Smile with your teeth showing, and your tongue stays flat and forward.',
          },
        ],
      },
      {
        kicker: 'Look and listen',
        title: 'Curly-tongue sounds: zh ch sh r',
        blocks: [
          { type: 'vocab', words: [W8.zhu_pig, W.chi, W8.shou_hand, W2.ri] },
          {
            type: 'remember',
            body: 'For zh ch sh r, curl your tongue back a little like a snail shell. Pig (zhū) is a curly-tongue animal. Eat (chī) has a puff. Hand (shǒu) and sun/day (rì) are curly too.',
          },
        ],
      },
      {
        kicker: 'Look and listen',
        title: 'Buzzing sounds: z c s',
        blocks: [
          { type: 'vocab', words: [W3.zou, W8.cao, W.n3] },
          {
            type: 'play',
            title: "Let's play",
            body: 'Be a bee! Say zzz, ccc, sss with your tongue touching behind your front teeth. Then be a snail: curl the tongue and say zh, ch, sh. Then smile like a photo: j, q, x.',
          },
          {
            type: 'pro',
            body: 'Remember the three families: SMILE (j q x), SNAIL (zh ch sh r), BEE (z c s). Same letters, three different tongue positions. If you can name the family, you can find the sound.',
          },
          grownUp('This is the hardest group for many learners. Do not worry about perfection. Play the "bee, snail, smile" game until the tongue positions feel automatic.'),
        ],
      },
      quiz('Which family?', 'Which family uses a big smile?', ['j q x (smile)', 'zh ch sh r (snail)', 'z c s (bee)'], 0, 'j, q and x are the smile family.'),
      quiz('Pig', '猪 (pig) starts with a curly-tongue sound. Which?', ['zh', 'z', 'j'], 0, 'zhū starts with zh, the curly-tongue family.'),
      speak([
        { prompt: 'Smile!', hanzi: '七', pinyin: 'qī', english: 'seven' },
        { prompt: 'Curl your tongue!', hanzi: '吃', pinyin: 'chī', english: 'to eat' },
      ]),
    ],
  },

  {
    id: 'k-hello',
    module: 'kinder',
    track: 'kids',
    title: 'Hello, friend!',
    subtitle: 'Say hi, bye and thank you with a wave',
    minutes: 5,
    goal: 'Greet a friend and say goodbye and thank you.',
    pages: [
      {
        kicker: 'Look and listen',
        title: 'Hello and goodbye',
        blocks: [
          { type: 'vocab', words: [W.nihao, W.zaijian, W.xiexie, W.bukeqi] },
          {
            type: 'remember',
            body: 'Wave your hand for 你好 (hello) and 再见 (goodbye). Put your hands together and bow your head a little for 谢谢 (thank you). Use your body so your brain remembers!',
          },
          {
            type: 'pro',
            body: 'Say "nee how" for 你好, with a rising "nee" and a low "how". The second syllable of 谢谢 is soft, so say "shyeh-shyeh" with the second "shyeh" short and quiet.',
          },
        ],
      },
      {
        kicker: "Let's play",
        title: 'Meet a teddy bear',
        blocks: [
          {
            type: 'play',
            title: "Let's play",
            body: 'Pick a teddy bear. Wave and say 你好! Give the bear a snack and say 谢谢. The bear says 不客气. When the bear leaves, wave and say 再见!',
          },
          {
            type: 'dialogue',
            title: 'Hello, Teddy!',
            lines: [
              { speaker: 'K', hanzi: '你好！', pinyin: 'Nǐ hǎo!', english: 'Hello!' },
              { speaker: 'T', hanzi: '你好！', pinyin: 'Nǐ hǎo!', english: 'Hello!' },
              { speaker: 'K', hanzi: '谢谢！', pinyin: 'Xièxie!', english: 'Thank you!' },
              { speaker: 'T', hanzi: '不客气。再见！', pinyin: 'Bú kèqi. Zàijiàn!', english: "You're welcome. Bye!" },
            ],
          },
        ],
      },
      quiz('Wave hello', 'What do you say when you wave hello?', ['你好', '再见', '谢谢'], 0, '你好 means hello.'),
      quiz('Say thanks', 'Someone gives you a present. What do you say?', ['谢谢', '再见', '你好'], 0, '谢谢 means thank you.'),
      speak([
        { prompt: 'Wave your hand!', hanzi: '你好！', pinyin: 'Nǐ hǎo!', english: 'Hello!' },
        { prompt: 'Wave goodbye!', hanzi: '再见！', pinyin: 'Zàijiàn!', english: 'Goodbye!' },
      ]),
    ],
  },

  {
    id: 'k-count',
    module: 'kinder',
    track: 'kids',
    title: 'Count on your fingers, 1 to 10',
    subtitle: 'yī, èr, sān… and the secret one-hand trick',
    minutes: 7,
    goal: 'Count from one to ten and show each number with your fingers.',
    pages: [
      {
        kicker: 'Look and listen',
        title: 'One to five',
        blocks: [
          { type: 'vocab', words: [W.n1, W.n2, W.n3, W.si, W.n5] },
          {
            type: 'remember',
            body: 'Hold up that many fingers as you say the number. 一 is one line, 二 is two lines, 三 is three lines! Then it gets different: 四 and 五 look more complicated.',
          },
          {
            type: 'pro',
            body: '四 sì (four) and 十 shí (ten) sound alike to many learners. For 四, keep your tongue flat and forward and fall sharply. For 十, curl your tongue back a little and rise.',
          },
        ],
      },
      {
        kicker: 'Look and listen',
        title: 'Six to ten',
        blocks: [
          { type: 'vocab', words: [W.n6, W.qi, W.n8, W.n9, W.shi10] },
          {
            type: 'play',
            title: 'The one-hand trick',
            body: 'Chinese children count to ten on ONE hand! 1, 2, 3, 4 are the same fingers. For 5, hold out all five fingers. 6: stick out your thumb and little finger like a phone. 7: bring all fingertips together in a pinch. 8: stick out your thumb and pointer like a gun. 9: curl your pointer like a hook. 10: make a fist, or cross your pointers into a plus sign.',
          },
          grownUp('These finger gestures are traditional in China. Learn them yourself first, so you can show them with confidence.'),
        ],
      },
      {
        kicker: "Let's play",
        title: 'Counting song',
        blocks: [
          {
            type: 'play',
            title: "Let's play",
            body: 'Count to ten as you march in place: 一、二、三、四、五、六、七、八、九、十! Count the toys, the stairs, the bites of food. Every day, count something.',
          },
          {
            type: 'taglish',
            body: 'Pareho ng "isa, dalawa, tatlo" na ginagamit natin: kantahin ito habang naglalakad o nagbibilang ng laruan. Mas madaling matandaan kapag may galaw at tunog.',
          },
        ],
      },
      quiz('Two', 'Which number is 二?', ['2', '3', '4'], 0, '二 is two lines: two.'),
      quiz('Seven or ten?', 'Which number is 十?', ['10', '7', '4'], 0, '十 looks like a plus sign and means ten.'),
      speak([
        { prompt: 'Count with your fingers!', hanzi: '一二三四五', pinyin: 'yī èr sān sì wǔ', english: '1 2 3 4 5' },
        { prompt: 'Keep going!', hanzi: '六七八九十', pinyin: 'liù qī bā jiǔ shí', english: '6 7 8 9 10' },
      ]),
    ],
  },

  {
    id: 'k-colors',
    module: 'kinder',
    track: 'kids',
    title: 'Rainbow colors',
    subtitle: 'hóng, huáng, lán, lǜ, bái, hēi',
    minutes: 6,
    goal: 'Name six colors and say "a red apple".',
    pages: [
      {
        kicker: 'Look and listen',
        title: 'Six colors',
        blocks: [
          { type: 'vocab', words: [W8.hong, W8.huang, W8.lan, W.lv, W8.bai_white, W8.hei] },
          {
            type: 'remember',
            body: 'Match each color to something you know. 红 hóng = red apple. 黄 huáng = yellow banana. 蓝 lán = blue sky. 绿 lǜ = green grass. 白 bái = white milk. 黑 hēi = black night.',
          },
          {
            type: 'pro',
            body: 'Four of these colors are tone 2 (hóng, huáng, lán, bái): they all RISE, like asking a question. Only 绿 lǜ falls and 黑 hēi stays high. Say the four rising ones together: hóng, huáng, lán, bái!',
          },
        ],
      },
      {
        kicker: "Let's play",
        title: 'Color hunt',
        blocks: [
          {
            type: 'play',
            title: "Let's play",
            body: 'Colour hunt! The grown-up calls a color: "找红色！" (zhǎo hóngsè, find red!). The child runs and touches something red. Then it is the child\'s turn to call. Use any color you know.',
          },
          { type: 'vocab', title: 'Things to color', words: [W2.pingguo, W7.xiangjiao, W8.taiyang] },
          grownUp('Say the color name every time you point at something: "红色的苹果" (a red apple). Repetition in context is how children learn best.'),
        ],
      },
      quiz('Red', 'Which color is 红?', ['red', 'blue', 'green'], 0, '红 hóng is red.'),
      quiz('Grass', 'What color is the grass?', ['绿 (green)', '黄 (yellow)', '黑 (black)'], 0, '绿 lǜ is green.'),
      speak([
        { prompt: 'Say it with a rising tone!', hanzi: '红色的苹果', pinyin: 'hóngsè de píngguǒ', english: 'a red apple' },
        { prompt: 'Look at the sky!', hanzi: '蓝色的天', pinyin: 'lánsè de tiān', english: 'a blue sky' },
      ]),
    ],
  },

  {
    id: 'k-animals',
    module: 'kinder',
    track: 'kids',
    title: 'Animal friends and their sounds',
    subtitle: 'Cat, dog, bird, panda and more',
    minutes: 8,
    goal: 'Name ten animals and make their Chinese sounds.',
    pages: [
      {
        kicker: 'Look and listen',
        title: 'Meet the animals',
        blocks: [
          { type: 'vocab', words: [W7.mao, W7.gou, W8.niao, W8.yu_fish, W8.tuzi, W8.laohu] },
          {
            type: 'remember',
            body: 'Make the animal with your body! 猫: curl your fingers like paws. 狗: pant with your tongue out. 鸟: flap your arms. 鱼: wiggle your hand like swimming. 兔子: hold two fingers like ears. 老虎: show your claws and roar.',
          },
          {
            type: 'pro',
            body: 'Two animals are easy to mix up in your ear: 猫 māo (cat) has a flat tone, and 狗 gǒu (dog) dips. Practice "māo, gǒu" with one flat hand and one dipping hand.',
          },
        ],
      },
      {
        kicker: 'Look and listen',
        title: 'More animals',
        blocks: [
          { type: 'vocab', words: [W8.daxiang, W8.houzi, W8.xiongmao] },
          {
            type: 'taglish',
            body: 'Hindi mo kailangang maghanap ng larawan: ang 熊猫 (xióngmāo) ay "panda" na literal na "bear-cat". At ang 大象 ay "malaking elepante". Pwedeng ilarawan ng magulang sa bata sa Tagalog bago sabihin sa Mandarin.',
          },
        ],
      },
      {
        kicker: 'Look and listen',
        title: 'What does it say?',
        blocks: [
          { type: 'vocab', title: 'Animal sounds in Chinese', words: [W8.miaomiao, W8.wangwang, W8.moumou, W8.miemie] },
          {
            type: 'play',
            title: "Let's play",
            body: 'Animal charades! The grown-up makes a sound, the child names the animal in Chinese. Cat says 喵喵, dog says 汪汪, cow says 哞哞, sheep says 咩咩. Then switch.',
          },
          grownUp('Animal sounds are different in every language, and that is part of the fun. Let the child laugh at the differences.'),
        ],
      },
      quiz('Cat or dog?', 'Which animal says 喵喵?', ['猫 (cat)', '狗 (dog)', '牛 (cow)'], 0, '喵喵 miāo miāo is the cat sound.'),
      quiz('Fish', 'Which one is the fish?', ['鱼', '鸟', '猫'], 0, '鱼 yú is a fish.'),
      speak([
        { prompt: 'Roar like a tiger!', hanzi: '老虎', pinyin: 'lǎohǔ', english: 'tiger' },
        { prompt: 'Meow!', hanzi: '喵喵', pinyin: 'miāo miāo', english: 'meow meow' },
      ]),
    ],
  },

  {
    id: 'k-body',
    module: 'kinder',
    track: 'kids',
    title: 'My body: head, eyes, hands',
    subtitle: 'Touch your nose! Clap your hands!',
    minutes: 7,
    goal: 'Name body parts and follow action commands in Chinese.',
    pages: [
      {
        kicker: 'Look and listen',
        title: 'Face and body',
        blocks: [
          { type: 'vocab', words: [W4.tou, W8.yanjing, W8.erduo, W8.bizi, W8.zuiba, W8.shou_hand, W8.jiao_foot] },
          {
            type: 'pro',
            body: 'Be careful: 眼睛 yǎnjing (eyes) and 眼镜 yǎnjìng (glasses) sound almost the same. Eyes have a light, short second syllable. Glasses have a sharp falling second syllable.',
          },
          {
            type: 'remember',
            body: 'Point to each body part as you say it. 眼睛 has 目 (an eye turned on its side) inside. 耳朵 has 耳, which looks like an ear. Your body is the best flashcard.',
          },
        ],
      },
      {
        kicker: "Let's play",
        title: 'Simon says in Chinese',
        blocks: [
          { type: 'vocab', title: 'Action words', words: [W8.momo, W8.paipai, W8.duoduo] },
          {
            type: 'play',
            title: "Let's play",
            body: 'Play "Simon says"! The grown-up says: 摸摸鼻子! (touch your nose), 拍拍手! (clap!), 跺跺脚! (stamp your feet!). The child does the action. Say each command twice, then the child says it back.',
          },
          grownUp('Reduplication (摸摸, 拍拍) is how Mandarin makes commands gentle and friendly for children. The second syllable is light.'),
        ],
      },
      quiz('Nose', 'Which body part is 鼻子?', ['nose', 'ear', 'mouth'], 0, '鼻子 bízi is nose.'),
      quiz('Clap!', 'What does 拍拍手 tell you to do?', ['Clap your hands', 'Wash your hands', 'Wave goodbye'], 0, '拍 means to pat or clap.'),
      speak([
        { prompt: 'Touch your nose!', hanzi: '摸摸鼻子', pinyin: 'mō mo bízi', english: 'touch your nose' },
        { prompt: 'Clap your hands!', hanzi: '拍拍手', pinyin: 'pāi pai shǒu', english: 'clap your hands' },
      ]),
    ],
  },

  {
    id: 'k-family',
    module: 'kinder',
    track: 'kids',
    title: 'My family and "I love you"',
    subtitle: 'Mama, baba, brothers, sisters, grandparents',
    minutes: 7,
    goal: 'Name family members and say "I love you" in Chinese.',
    pages: [
      {
        kicker: 'Look and listen',
        title: 'Who is in my family?',
        blocks: [
          { type: 'vocab', words: [W.mama, W.baba, W2.gege, W2.jiejie, W2.didi, W2.meimei, W6.yeye, W6.nainai] },
          {
            type: 'remember',
            body: 'Chinese family words use a double sound: māma, bàba, gēge, jiějie, dìdi, mèimei, yéye, nǎinai. The second one is soft and quick. Many babies say these first, in every language!',
          },
          {
            type: 'pro',
            body: 'The second syllable is light, so do not say bàba as "ba-BA". Say "BA-ba": strong, then quick. Clap on the first sound and let the second be a tiny tap.',
          },
        ],
      },
      {
        kicker: 'Look and listen',
        title: 'I love you',
        blocks: [
          { type: 'vocab', words: [W8.ai_love, W8.woainini] },
          {
            type: 'play',
            title: "Let's play",
            body: 'Draw your family. Point to each person and say who they are: "这是妈妈, 这是爸爸". Then give a big hug and say 我爱你!',
          },
          {
            type: 'taglish',
            body: 'Madaling tandaan ang "kuya" at "ate": 哥哥 (gēge) at 姐姐 (jiějie). Ang "I love you" naman ay 我爱你 (wǒ ài nǐ), pareho ng "mahal kita" na may sarili ring himig.',
          },
          grownUp('Chinese says "I love you" less often in daily life than English, so a hug and a 我爱你 at bedtime feels special and warm.'),
        ],
      },
      quiz('Older brother', 'Which one is older brother (kuya)?', ['哥哥', '弟弟', '妹妹'], 0, '哥哥 gēge is older brother.'),
      quiz('Love', 'What does 我爱你 mean?', ['I love you', 'I see you', 'I miss you'], 0, '爱 means love.'),
      speak([
        { prompt: 'Say it with a hug!', hanzi: '我爱你', pinyin: 'wǒ ài nǐ', english: 'I love you' },
        { prompt: 'Say it softly.', hanzi: '妈妈，爸爸', pinyin: 'māma, bàba', english: 'mom, dad' },
      ]),
    ],
  },

  {
    id: 'k-food',
    module: 'kinder',
    track: 'kids',
    title: 'Yummy food',
    subtitle: 'Apples, bananas, milk, rice and "I like it!"',
    minutes: 6,
    goal: 'Name seven foods and say what you like and are hungry for.',
    pages: [
      {
        kicker: 'Look and listen',
        title: 'What is for lunch?',
        blocks: [
          { type: 'vocab', words: [W2.pingguo, W7.xiangjiao, W7.xigua, W5.niunai, W.shui, W2.mifan, W5.jidan] },
          {
            type: 'remember',
            body: 'Pretend to eat each food! 苹果: crunch an apple. 香蕉: peel a banana. 牛奶: sip from a cup. 米饭: eat with chopsticks. 鸡蛋: crack an egg. Food words are easy to remember when your mouth is moving.',
          },
          {
            type: 'pro',
            body: 'Say 好吃! (hǎochī, yummy) after every taste. The tone on 好 is low and short (half-third), so it flows right into chī. A good listener hears "how-chee".',
          },
        ],
      },
      {
        kicker: "Let's play",
        title: 'Picnic time',
        blocks: [
          {
            type: 'play',
            title: "Let's play",
            body: 'Set up a pretend picnic. The child picks a food: "我要苹果!" (I want an apple). The grown-up hands it over: "给你". The child says "谢谢" and "好吃!" Then say "我饿了" (I\'m hungry) and "我渴了" (I\'m thirsty).',
          },
          { type: 'vocab', words: [W7.e, W7.ke, W3.haochi] },
          grownUp('Practice in real meals: ask the child "你要什么?" (nǐ yào shénme, what do you want?) and let them answer with one word.'),
        ],
      },
      quiz('Yummy!', 'What does 好吃 mean?', ['yummy', 'hungry', 'thirsty'], 0, '好吃 means tasty.'),
      quiz('Hungry', 'Which means "I\'m hungry"?', ['我饿了', '我渴了', '我困了'], 0, '饿 means hungry.'),
      speak([
        { prompt: 'Ask nicely!', hanzi: '我要苹果。', pinyin: 'Wǒ yào píngguǒ.', english: 'I want an apple.' },
        { prompt: 'Say yummy!', hanzi: '好吃！谢谢！', pinyin: 'Hǎochī! Xièxie!', english: 'Yummy! Thank you!' },
      ]),
    ],
  },

  {
    id: 'k-song',
    module: 'kinder',
    track: 'kids',
    title: 'Song: Two Tigers (两只老虎)',
    subtitle: 'The most famous Chinese children\'s song',
    minutes: 7,
    goal: 'Sing the first verse of "Two Tigers" and understand it.',
    pages: [
      {
        kicker: 'Sing',
        title: 'Two Tigers',
        blocks: [
          {
            type: 'text',
            body: ['This is a traditional children\'s song. The tune is the same as "Frère Jacques" or "Brother John", so you already know it!'],
          },
          {
            type: 'dialogue',
            title: 'The song',
            lines: [
              { speaker: '♪', hanzi: '两只老虎，两只老虎，', pinyin: 'Liǎng zhī lǎohǔ, liǎng zhī lǎohǔ,', english: 'Two tigers, two tigers,' },
              { speaker: '♪', hanzi: '跑得快，跑得快，', pinyin: 'Pǎo de kuài, pǎo de kuài,', english: 'Running fast, running fast,' },
              { speaker: '♪', hanzi: '一只没有耳朵，一只没有尾巴，', pinyin: 'Yì zhī méiyǒu ěrduo, yì zhī méiyǒu wěiba,', english: 'One has no ears, one has no tail,' },
              { speaker: '♪', hanzi: '真奇怪，真奇怪。', pinyin: 'Zhēn qíguài, zhēn qíguài.', english: 'How strange, how strange.' },
            ],
          },
          {
            type: 'pro',
            body: 'Sing slowly first and say each line as a chant, then add the tune. In the song, 一只 is pronounced yì zhī, because 一 changes to tone 4 before tone 1. Songs hide tone rules in plain sight.',
          },
          {
            type: 'remember',
            body: 'Use actions: hold up two fingers for 两, run your fingers for 跑, cover your ears for 没有耳朵, wag a pretend tail for 尾巴, and shrug for 真奇怪.',
          },
          grownUp('Sing it together at bedtime or in the car. A song is the easiest way for a child to absorb tones and rhythm.'),
        ],
      },
      {
        kicker: 'Learn the words',
        title: 'Words in the song',
        blocks: [
          {
            type: 'table',
            head: ['Word', 'Pinyin', 'Meaning'],
            rows: [
              ['两只', 'liǎng zhī', 'two (animals)'],
              ['老虎', 'lǎohǔ', 'tiger'],
              ['跑得快', 'pǎo de kuài', 'runs fast'],
              ['没有', 'méiyǒu', 'does not have'],
              ['耳朵', 'ěrduo', 'ears'],
              ['尾巴', 'wěiba', 'tail'],
              ['真奇怪', 'zhēn qíguài', 'how strange'],
            ],
          },
          {
            type: 'play',
            title: "Let's play",
            body: 'Make a tiger puppet from a paper bag. Sing the song. When you sing "没有耳朵", hide the puppet\'s ears. When you sing "没有尾巴", hide its tail. Silly and unforgettable.',
          },
        ],
      },
      quiz('How many?', 'How many tigers are in the song?', ['Two (两只)', 'Three (三只)', 'One (一只)'], 0, '两只 means two (animals).'),
      quiz('Fast', 'What does 跑得快 mean?', ['runs fast', 'sleeps long', 'eats a lot'], 0, '跑 means run, and 快 means fast.'),
      speak([
        { prompt: 'Sing the first line.', hanzi: '两只老虎，两只老虎', pinyin: 'Liǎng zhī lǎohǔ, liǎng zhī lǎohǔ', english: 'Two tigers, two tigers' },
        { prompt: 'Sing the last line.', hanzi: '真奇怪，真奇怪', pinyin: 'Zhēn qíguài, zhēn qíguài', english: 'How strange, how strange' },
      ]),
    ],
  },

  {
    id: 'k-night',
    module: 'kinder',
    track: 'kids',
    title: 'Good night routine',
    subtitle: 'Wash hands, brush teeth, sweet dreams',
    minutes: 6,
    goal: 'Follow a bedtime routine in Chinese.',
    pages: [
      {
        kicker: 'Look and listen',
        title: 'Bedtime words',
        blocks: [
          { type: 'vocab', words: [W8.xishou, W8.shuaya, W3.shuijiao, W8.wanan, W8.haomeng] },
          {
            type: 'remember',
            body: 'Act out the routine: scrub your hands (洗手), brush your teeth (刷牙), lay your head on a pillow (睡觉), then whisper 晚安. A quiet whisper helps the tone shape stay clear.',
          },
          {
            type: 'pro',
            body: 'Whisper 晚安 (wǎn\'ān) with a gentle voice: wǎn is low and dips, ān is high and flat. The "n" at the end of wǎn flows straight into the "ān": say it as one smooth wave.',
          },
        ],
      },
      {
        kicker: "Let's play",
        title: 'The bedtime song',
        blocks: [
          {
            type: 'play',
            title: "Let's play",
            body: 'Make this the nightly routine. Say 洗手, 刷牙, 睡觉 as you do each one. At the end hug and whisper 晚安, 好梦 (good night, sweet dreams). After a week your child will say it first.',
          },
          {
            type: 'dialogue',
            title: 'Good night',
            lines: [
              { speaker: 'M', hanzi: '洗手，刷牙，睡觉！', pinyin: 'Xǐ shǒu, shuā yá, shuìjiào!', english: 'Wash hands, brush teeth, sleep!' },
              { speaker: 'K', hanzi: '妈妈，晚安。', pinyin: 'Māma, wǎn’ān.', english: 'Mom, good night.' },
              { speaker: 'M', hanzi: '晚安，好梦。我爱你。', pinyin: 'Wǎn’ān, hǎo mèng. Wǒ ài nǐ.', english: 'Good night, sweet dreams. I love you.' },
            ],
          },
          grownUp('Routines are the fastest way for a child to learn. Do it in the same order every night so the words attach to actions.'),
        ],
      },
      quiz('Brush', 'What does 刷牙 mean?', ['brush teeth', 'wash hands', 'go to bed'], 0, '刷牙 means brush teeth.'),
      quiz('Sweet dreams', 'Which one means "sweet dreams"?', ['好梦', '晚安', '再见'], 0, '好梦 means good dreams.'),
      speak([
        { prompt: 'Whisper it.', hanzi: '晚安', pinyin: 'wǎn’ān', english: 'good night' },
        { prompt: 'Whisper again.', hanzi: '好梦', pinyin: 'hǎo mèng', english: 'sweet dreams' },
      ]),
    ],
  },

  {
    id: 'k-feelings',
    module: 'kinder',
    track: 'kids',
    title: 'How do you feel?',
    subtitle: 'Happy, sad, angry, scared, tired, hungry',
    minutes: 6,
    goal: 'Name six feelings and say how you feel.',
    pages: [
      {
        kicker: 'Look and listen',
        title: 'Feeling faces',
        blocks: [
          { type: 'vocab', words: [W7.kaixin, W7.nanguo, W7.shengqi, W8.haipa, W3.lei, W7.e] },
          {
            type: 'remember',
            body: 'Make each face as you say it! 开心: big smile. 难过: sad face. 生气: puffed cheeks. 害怕: wide eyes. 累: yawn. 饿: rub your tummy. Showing the feeling makes the word stick.',
          },
          {
            type: 'pro',
            body: '开心 kāixīn has two high flat sounds, so keep your voice level like a smooth road: kāi-xīn. 生气 shēngqì starts high and ends with a sharp fall, like a short angry stomp.',
          },
        ],
      },
      {
        kicker: "Let's play",
        title: 'Feeling charades',
        blocks: [
          {
            type: 'play',
            title: "Let's play",
            body: 'The child picks a face. The grown-up asks: "你开心吗?" (are you happy?). The child answers: "我很开心" or "我不开心". Then comfort with 别怕 (don\'t be scared) or 没关系 (it\'s okay).',
          },
          { type: 'vocab', words: [W8.biepa, W.meiguanxi] },
          grownUp('Naming feelings in a new language can be easier than in your first. Try 你怎么了? (what\'s wrong?) when a child is upset.'),
        ],
      },
      quiz('Happy', 'Which one means happy?', ['开心', '生气', '难过'], 0, '开心 means happy.'),
      quiz('Scared', 'Which one means scared?', ['害怕', '开心', '饿'], 0, '害怕 means scared.'),
      speak([
        { prompt: 'Show a big smile!', hanzi: '我很开心。', pinyin: 'Wǒ hěn kāixīn.', english: 'I am very happy.' },
        { prompt: 'Comfort a friend.', hanzi: '别怕！', pinyin: 'Bié pà!', english: "Don't be scared!" },
      ]),
    ],
  },

  // ═════════════════════════ ELEMENTARY (ages 6 to 10) ═════════════════════════
  {
    id: 'e-school',
    module: 'elementary',
    track: 'kids',
    title: 'In the classroom',
    subtitle: 'Teacher, classmates, pencils and classroom rules',
    minutes: 9,
    goal: 'Name classroom things and follow simple classroom instructions.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Things in the classroom',
        blocks: [
          { type: 'vocab', words: [W3.laoshi, W6.tongxue, W2.shu, W8.bi_pen, W8.benzi, W8.shubao, W8.heiban, W8.jiaoshi] },
          {
            type: 'remember',
            body: '书包 is "book-bag": 书 (book) + 包 (bag). 黑板 is "black board": 黑 (black) + 板 (board). 教室 is "teaching room": 教 (teach) + 室 (room). Many Chinese words are built like puzzle pieces.',
          },
          {
            type: 'pro',
            body: 'Greet the teacher with 老师好! (lǎoshī hǎo). Chinese students say this at the start of class. The first tone-3 changes to tone 2: say "láoshī hǎo".',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'Classroom commands',
        blocks: [
          { type: 'vocab', words: [W8.zuoxia, W8.zhanqilai, W8.anjing, W8.jushou, W8.tingdong] },
          {
            type: 'table',
            head: ['Teacher says', 'Pinyin', 'Meaning'],
            rows: [
              ['请坐下。', 'Qǐng zuòxia.', 'Please sit down.'],
              ['请站起来。', 'Qǐng zhàn qǐlái.', 'Please stand up.'],
              ['请安静。', 'Qǐng ānjìng.', 'Please be quiet.'],
              ['请举手。', 'Qǐng jǔ shǒu.', 'Please raise your hand.'],
              ['你听懂了吗？', 'Nǐ tīngdǒng le ma?', 'Did you understand?'],
            ],
          },
          {
            type: 'play',
            title: "Let's play",
            body: 'Play teacher! One child is the teacher and gives the commands. Everyone follows. The best listener becomes the next teacher.',
          },
          grownUp('Use the commands in the real classroom or at home. Children follow commands before they can say them, so this is a "listening first" activity.'),
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Class begins',
        blocks: [
          {
            type: 'dialogue',
            title: 'The first morning',
            lines: [
              { speaker: 'S', hanzi: '老师好！', pinyin: 'Lǎoshī hǎo!', english: 'Good morning, teacher!' },
              { speaker: 'T', hanzi: '同学们好！请坐下。', pinyin: 'Tóngxuémen hǎo! Qǐng zuòxia.', english: 'Hello, students! Please sit down.' },
              { speaker: 'T', hanzi: '你听懂了吗？', pinyin: 'Nǐ tīngdǒng le ma?', english: 'Did you understand?' },
              { speaker: 'S', hanzi: '听懂了，谢谢老师。', pinyin: 'Tīngdǒng le, xièxie lǎoshī.', english: 'Yes, I understood, thank you.' },
            ],
          },
        ],
      },
      quiz('Sit down', 'What does 请坐下 mean?', ['Please sit down', 'Please stand up', 'Please be quiet'], 0, '坐 means sit.'),
      quiz('Raise your hand', 'You know the answer. What does the teacher want you to do?', ['举手', '安静', '坐下'], 0, '举手 means raise your hand.'),
      speak([
        { prompt: 'Greet the teacher.', hanzi: '老师好！', pinyin: 'Lǎoshī hǎo!', english: 'Good morning, teacher!' },
        { prompt: 'Say you understand.', hanzi: '我听懂了。', pinyin: 'Wǒ tīngdǒng le.', english: 'I understood.' },
      ]),
    ],
  },

  {
    id: 'e-day',
    module: 'elementary',
    track: 'kids',
    title: 'My school day',
    subtitle: 'Get up, go to school, do homework, sleep',
    minutes: 8,
    goal: 'Tell the steps of your school day in order.',
    pages: [
      {
        kicker: 'Learn',
        title: 'From morning to night',
        blocks: [
          { type: 'vocab', words: [W6.qichuang, W8.shuaya, W4.zaocan, W8.shangxue, W8.fangxue, W8.huijia, W8.zuoye, W3.shuijiao] },
          {
            type: 'remember',
            body: '上学 is "go up to school" and 放学 is "let school out". 上 means going into something, and 放 means letting something go. So 上学 and 放学 are a pair, like in and out.',
          },
          {
            type: 'pro',
            body: 'Order matters in Chinese. Say the time first, then the action: 七点起床, 八点上学, 三点放学. Use ordinary numbers: 七点 qī diǎn, 八点 bā diǎn, 三点 sān diǎn.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Tell your day',
        blocks: [
          {
            type: 'dialogue',
            title: 'After school',
            lines: [
              { speaker: 'M', hanzi: '你几点起床？', pinyin: 'Nǐ jǐ diǎn qǐchuáng?', english: 'What time do you get up?' },
              { speaker: 'K', hanzi: '我七点起床，八点上学。', pinyin: 'Wǒ qī diǎn qǐchuáng, bā diǎn shàngxué.', english: 'I get up at seven and go to school at eight.' },
              { speaker: 'M', hanzi: '你几点放学？', pinyin: 'Nǐ jǐ diǎn fàngxué?', english: 'What time does school finish?' },
              { speaker: 'K', hanzi: '三点放学，回家做作业。', pinyin: 'Sān diǎn fàngxué, huíjiā zuò zuòyè.', english: 'At three. Then I go home and do homework.' },
            ],
          },
          {
            type: 'play',
            title: "Let's play",
            body: 'Draw four pictures: getting up, school, home, sleeping. Put them in a row. Point at each one and say the step. Then mix them up and let the child put them back in order.',
          },
          grownUp('Sequencing is great for language learning. Let the child tell the day in order, even if only with the key words.'),
        ],
      },
      quiz('School out', 'Which one means "school is out"?', ['放学', '上学', '起床'], 0, '放学 means school is out.'),
      quiz('Homework', 'What does 做作业 mean?', ['do homework', 'go to school', 'eat breakfast'], 0, '作业 means homework.'),
      speak([
        { prompt: 'Tell your morning.', hanzi: '我七点起床，八点上学。', pinyin: 'Wǒ qī diǎn qǐchuáng, bā diǎn shàngxué.', english: 'I get up at seven and go to school at eight.' },
        { prompt: 'Tell your afternoon.', hanzi: '三点放学，回家做作业。', pinyin: 'Sān diǎn fàngxué, huíjiā zuò zuòyè.', english: 'School out at three, homework at home.' },
      ]),
    ],
  },

  {
    id: 'e-seasons',
    module: 'elementary',
    track: 'kids',
    title: 'Four seasons and weather',
    subtitle: 'Spring, summer, autumn, winter',
    minutes: 7,
    goal: 'Name the seasons and describe the weather in each.',
    pages: [
      {
        kicker: 'Learn',
        title: 'The four seasons',
        blocks: [
          { type: 'vocab', words: [W8.chuntian, W8.xiatian, W8.qiutian, W8.dongtian] },
          {
            type: 'remember',
            body: 'All four end with 天 (tiān, sky or day). 春天 spring: flowers come out. 夏天 summer: the sun is hot. 秋天 autumn: leaves fall. 冬天 winter: it is cold. Act out each season with your body.',
          },
          {
            type: 'pro',
            body: '春 chūn and 秋 qiū both start with a puff of air and a smile-like mouth. Practice by saying "chūn-tiān, qiū-tiān" with a tissue in front of your mouth. It should flutter on the first sound of each word.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'Weather in each season',
        blocks: [
          { type: 'vocab', words: [W3.re, W3.leng, W3.xiayu, W8.xiaxue, W8.feng] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['春天来了。', 'Spring has come.'],
              ['夏天很热。', 'Summer is hot.'],
              ['秋天有风。', 'There is wind in autumn.'],
              ['冬天很冷，下雪了。', 'Winter is cold, and it has snowed.'],
            ],
          },
          {
            type: 'play',
            title: "Let's play",
            body: 'Spin a pencil on a drawing of the four seasons. When it points to one, the child says the season and one thing about it: 夏天很热! The grown-up joins in with 冬天很冷!',
          },
          {
            type: 'taglish',
            body: 'Sa Pilipinas, tag-init at tag-ulan lang tayo, pero sa Tsina ay may apat na panahon. Magandang pagkakataon ito para pag-usapan ang pagkakaiba ng panahon sa dalawang bansa.',
          },
        ],
      },
      quiz('Winter', 'Which one is winter?', ['冬天', '夏天', '春天'], 0, '冬 dōng is winter.'),
      quiz('Snow', 'What does 下雪 mean?', ['to snow', 'to rain', 'windy'], 0, '雪 is snow, and 下 means falls.'),
      speak([
        { prompt: 'Say it with a shiver!', hanzi: '冬天很冷，下雪了。', pinyin: 'Dōngtiān hěn lěng, xià xuě le.', english: 'Winter is cold, and it has snowed.' },
        { prompt: 'Say it with a big smile!', hanzi: '春天来了。', pinyin: 'Chūntiān lái le.', english: 'Spring has come.' },
      ]),
    ],
  },

  {
    id: 'e-sports',
    module: 'elementary',
    track: 'kids',
    title: 'Sports and games',
    subtitle: 'Football, basketball, swimming, bike',
    minutes: 7,
    goal: 'Say which sports you play and like.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Move your body',
        blocks: [
          { type: 'vocab', words: [W8.tizuqiu, W8.dalanqiu, W8.youyong, W4.paobu, W8.qichezi, W8.youxi] },
          {
            type: 'remember',
            body: 'Each verb tells you how the ball moves: 踢 is a kick (football), 打 is hit or play (basketball). So 踢足球 and 打篮球 use different verbs in Chinese, even though English uses "play" for both.',
          },
          {
            type: 'pro',
            body: 'The verb for the sport depends on the action. Kick: 踢. Hit or play with hands: 打. Ride: 骑. Swim: 游. Learn the verb together with the sport, as a chunk.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'What do you like?',
        blocks: [
          {
            type: 'dialogue',
            title: 'At recess',
            lines: [
              { speaker: 'A', hanzi: '你喜欢什么运动？', pinyin: 'Nǐ xǐhuan shénme yùndòng?', english: 'What sport do you like?' },
              { speaker: 'B', hanzi: '我喜欢踢足球，你呢？', pinyin: 'Wǒ xǐhuan tī zúqiú, nǐ ne?', english: 'I like football. And you?' },
              { speaker: 'A', hanzi: '我喜欢游泳，也会骑自行车。', pinyin: 'Wǒ xǐhuan yóuyǒng, yě huì qí zìxíngchē.', english: 'I like swimming, and I can ride a bike too.' },
            ],
          },
          {
            type: 'play',
            title: "Let's play",
            body: 'Sport mime game. A child acts out a sport. Others guess in Chinese: "踢足球!" "游泳!" The first to guess correctly acts next.',
          },
          grownUp('运动 (yùndòng) means sport or exercise. It is a handy word to learn: 你喜欢什么运动？'),
        ],
      },
      quiz('Swimming', 'What does 游泳 mean?', ['swimming', 'running', 'riding'], 0, '游泳 means to swim.'),
      quiz('Football', 'Which one is football?', ['踢足球', '打篮球', '骑自行车'], 0, '踢 is kick, so 踢足球 is football.'),
      speak([
        { prompt: 'Say your sport.', hanzi: '我喜欢踢足球。', pinyin: 'Wǒ xǐhuan tī zúqiú.', english: 'I like football.' },
        { prompt: 'Say what you can do.', hanzi: '我会游泳。', pinyin: 'Wǒ huì yóuyǒng.', english: 'I can swim.' },
      ]),
    ],
  },

  {
    id: 'e-nature',
    module: 'elementary',
    track: 'kids',
    title: 'Sun, moon and stars',
    subtitle: 'Nature words you can see every day',
    minutes: 7,
    goal: 'Name things in nature and say where they are.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Look up, look around',
        blocks: [
          { type: 'vocab', words: [W8.taiyang, W8.yueliang, W8.xingxing, W8.yun, W8.shan, W8.hua_flower, W8.shu_tree, W3.he2] },
          {
            type: 'remember',
            body: 'Many nature characters started as pictures: 日 was a round sun, 月 was a crescent moon, 山 is three peaks, 木 is a tree with roots. Look at the shape and picture the real thing.',
          },
          {
            type: 'pro',
            body: '月亮 yuèliang (moon) has a light second syllable, so it sounds like "yweh-lyang", not "yue-LIANG". The first syllable carries the weight.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'What is in the sky?',
        blocks: [
          {
            type: 'text',
            body: ['To say where something is, use 在: 太阳在天上 (the sun is in the sky). 天上有星星 means "there are stars in the sky".'],
          },
          { type: 'vocab', words: [W8.tianshang] },
          {
            type: 'dialogue',
            title: 'Night sky',
            lines: [
              { speaker: 'A', hanzi: '天上有什么？', pinyin: 'Tiānshang yǒu shénme?', english: "What's in the sky?" },
              { speaker: 'B', hanzi: '天上有月亮和星星。', pinyin: 'Tiānshang yǒu yuèliang hé xīngxing.', english: 'There is a moon and stars in the sky.' },
              { speaker: 'A', hanzi: '太阳呢？', pinyin: 'Tàiyang ne?', english: 'And the sun?' },
              { speaker: 'B', hanzi: '太阳在白天出来。', pinyin: 'Tàiyang zài báitiān chūlái.', english: 'The sun comes out in the daytime.' },
            ],
          },
          {
            type: 'play',
            title: "Let's play",
            body: 'Go outside or look out the window. Take turns: "我看到…" (I see…). Say what you see: 云, 树, 花, 山, 太阳. First to find five things wins.',
          },
        ],
      },
      quiz('Moon', 'Which one is the moon?', ['月亮', '太阳', '星星'], 0, '月亮 yuèliang is moon.'),
      quiz('Tree', 'What does 树 mean?', ['tree', 'flower', 'mountain'], 0, '树 shù is tree.'),
      speak([
        { prompt: 'Look up!', hanzi: '天上有月亮和星星。', pinyin: 'Tiānshang yǒu yuèliang hé xīngxing.', english: 'There is a moon and stars in the sky.' },
        { prompt: 'Say what you see.', hanzi: '我看到花和树。', pinyin: 'Wǒ kàndào huā hé shù.', english: 'I see flowers and trees.' },
      ]),
    ],
  },

  {
    id: 'e-shapes',
    module: 'elementary',
    track: 'kids',
    title: 'Shapes and sizes',
    subtitle: 'Round, square, triangle, big, small',
    minutes: 6,
    goal: 'Name shapes and describe size.',
    pages: [
      {
        kicker: 'Learn',
        title: 'What shape is it?',
        blocks: [
          { type: 'vocab', words: [W8.xingzhuang, W8.yuan_round, W8.fang, W8.sanjiaoxing, W2.da, W2.xiao, W6.gao] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['这是什么形状？', 'What shape is this?'],
              ['这是圆的。', 'This is round.'],
              ['这是方的。', 'This is square.'],
              ['这个大，那个小。', 'This one is big, that one is small.'],
            ],
          },
          {
            type: 'remember',
            body: '圆 looks like a circle with a lid on top. 方 looks like a box. 三角形 is "three-corner-shape": 三 (three) + 角 (corner) + 形 (shape). If you know the numbers, you can read it.',
          },
          {
            type: 'pro',
            body: 'Contrast words come in pairs. Learn big with small (大/小), tall with short (高/矮), long with short (长/短). Say each pair together and your memory links them.',
          },
        ],
      },
      {
        kicker: "Let's play",
        title: 'Shape hunt',
        blocks: [
          {
            type: 'play',
            title: "Let's play",
            body: 'Shape hunt around the room. The child finds a round thing and says "这是圆的!" A square thing: "这是方的!" Then compare two things: "这个大，那个小".',
          },
          grownUp('Use a shape-sorting toy or cut shapes from paper. Children learn vocabulary faster when they can touch and sort objects.'),
        ],
      },
      quiz('Round', 'Which one is round?', ['圆', '方', '三角形'], 0, '圆 yuán is round.'),
      quiz('Big', 'What does 大 mean?', ['big', 'small', 'tall'], 0, '大 is big.'),
      speak([
        { prompt: 'Point to something round.', hanzi: '这是圆的。', pinyin: 'Zhè shì yuán de.', english: 'This is round.' },
        { prompt: 'Compare two things.', hanzi: '这个大，那个小。', pinyin: 'Zhè ge dà, nà ge xiǎo.', english: 'This one is big, that one is small.' },
      ]),
    ],
  },

  {
    id: 'e-party',
    module: 'elementary',
    track: 'kids',
    title: 'Birthday party',
    subtitle: 'Cake, candles, gifts and a birthday song',
    minutes: 8,
    goal: 'Sing happy birthday in Chinese and talk about a party.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Party words',
        blocks: [
          { type: 'vocab', words: [W4.shengri, W5.kuaile, W8.dangao, W8.liwu, W8.chuilazhu, W8.xuyuan] },
          {
            type: 'remember',
            body: '吹蜡烛 is "blow out candles": 吹 is blow (look at the mouth 口 in it). 许愿 is "make a wish". 蛋糕 is "egg-cake", because the first cakes had egg in them. Picture each action and say it as you do it.',
          },
          {
            type: 'pro',
            body: '礼物 lǐwù (gift) has two falling-rising sounds: lǐ dips low, wù falls sharply. Say it like "lee-woo" with a bounce. In real speech, the first tone 3 stays low and quick.',
          },
        ],
      },
      {
        kicker: 'Sing',
        title: 'Happy Birthday',
        blocks: [
          {
            type: 'dialogue',
            title: 'The birthday song',
            lines: [
              { speaker: '♪', hanzi: '祝你生日快乐，', pinyin: 'Zhù nǐ shēngrì kuàilè,', english: 'Happy birthday to you,' },
              { speaker: '♪', hanzi: '祝你生日快乐，', pinyin: 'Zhù nǐ shēngrì kuàilè,', english: 'Happy birthday to you,' },
              { speaker: '♪', hanzi: '祝你生日快乐，', pinyin: 'Zhù nǐ shēngrì kuàilè,', english: 'Happy birthday to you,' },
              { speaker: '♪', hanzi: '祝你生日快乐！', pinyin: 'Zhù nǐ shēngrì kuàilè!', english: 'Happy birthday to you!' },
            ],
          },
          {
            type: 'play',
            title: "Let's play",
            body: 'Hold a pretend party. Sing the song to a stuffed toy, pretend to blow out candles, make a wish (许愿), and open a gift (礼物). Say 谢谢 for every present!',
          },
          grownUp('The tune is the same as the English Happy Birthday. Use the familiar melody so the child can focus on the Chinese words.'),
        ],
      },
      quiz('Cake', 'Which one is cake?', ['蛋糕', '礼物', '蜡烛'], 0, '蛋糕 dàngāo is cake.'),
      quiz('Gift', 'What does 礼物 mean?', ['gift', 'cake', 'wish'], 0, '礼物 lǐwù is gift.'),
      speak([
        { prompt: 'Sing it!', hanzi: '祝你生日快乐！', pinyin: 'Zhù nǐ shēngrì kuàilè!', english: 'Happy birthday to you!' },
        { prompt: 'Say thank you for the gift.', hanzi: '谢谢你的礼物！', pinyin: 'Xièxie nǐ de lǐwù!', english: 'Thank you for the gift!' },
      ]),
    ],
  },

  {
    id: 'e-pets',
    module: 'elementary',
    track: 'kids',
    title: 'My pet',
    subtitle: 'Talk about a cat or a dog you love',
    minutes: 7,
    goal: 'Describe a pet: name, what it is like, what it does.',
    pages: [
      {
        kicker: 'Learn',
        title: 'My pet is…',
        blocks: [
          { type: 'vocab', words: [W8.chongwu, W8.xiaomao, W8.xiaogou, W8.ta_it, W8.keai] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['我有一只小猫。', 'I have a kitten.'],
              ['它叫咪咪。', "Its name is Mimi."],
              ['它很可爱。', 'It is very cute.'],
              ['我喜欢和它玩。', 'I like playing with it.'],
            ],
          },
          {
            type: 'pro',
            body: 'Use 只 as the measure word for small animals: 一只小猫, 两只小狗. And it is 它 (tā, "it") for animals, not 他 or 她, which are for people. All three sound exactly alike.',
          },
          {
            type: 'remember',
            body: '它 has a roof 宀 over a snake-like shape: a little animal under a roof. It is the "it" for pets and things. 他 has 亻 (person), 她 has 女 (woman), and 它 has 宀 (roof).',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Tell us about your pet',
        blocks: [
          {
            type: 'dialogue',
            title: 'Show and tell',
            lines: [
              { speaker: 'T', hanzi: '你有宠物吗？', pinyin: 'Nǐ yǒu chǒngwù ma?', english: 'Do you have a pet?' },
              { speaker: 'K', hanzi: '有，我有一只小猫。', pinyin: 'Yǒu, wǒ yǒu yì zhī xiǎomāo.', english: 'Yes, I have a kitten.' },
              { speaker: 'T', hanzi: '它叫什么名字？', pinyin: 'Tā jiào shénme míngzi?', english: 'What is its name?' },
              { speaker: 'K', hanzi: '它叫咪咪，它很可爱。', pinyin: 'Tā jiào Mīmī, tā hěn kě’ài.', english: 'Its name is Mimi, and it is very cute.' },
            ],
          },
          {
            type: 'play',
            title: "Let's play",
            body: 'Show and tell! Bring a picture or a toy animal. Each child says: "我有一只…, 它叫…, 它很可爱." Clap after each child finishes.',
          },
        ],
      },
      quiz('Kitten', 'Which one is a kitten?', ['小猫', '小狗', '宠物'], 0, '小猫 xiǎomāo is kitten.'),
      quiz('It', 'Which word means "it" for an animal?', ['它', '他', '她'], 0, '它 is used for animals and things.'),
      speak([
        { prompt: 'Tell us about your pet.', hanzi: '我有一只小猫，它很可爱。', pinyin: 'Wǒ yǒu yì zhī xiǎomāo, tā hěn kě’ài.', english: 'I have a kitten, and it is very cute.' },
        { prompt: 'Say its name.', hanzi: '它叫咪咪。', pinyin: 'Tā jiào Mīmī.', english: 'Its name is Mimi.' },
      ]),
    ],
  },
];


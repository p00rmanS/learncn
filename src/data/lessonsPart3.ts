import type { Lesson } from './types';
import { W } from './words';
import { W2 } from './wordsMore';
import { W3 } from './wordsExtra';

export const PART3_LESSONS: Lesson[] = [
  // ─────────────────────────── Reading Characters ───────────────────────────
  {
    id: 'radicals',
    module: 'hanzi',
    title: 'Radicals: meaning clues',
    subtitle: 'The small parts that tell you what a character is about',
    minutes: 10,
    goal: 'Recognise six common radicals and use them to guess what a character relates to.',
    pages: [
      {
        kicker: 'Learn',
        title: 'What is a radical?',
        blocks: [
          {
            type: 'text',
            body: [
              'A radical is a part of a character that usually hints at its meaning. Dictionaries sort characters by radical, but for you the point is simpler: a radical gives you a clue about the topic.',
              'You have already met many without knowing it. 说, 请, 谢, 谁 and 认识 all contain the same speech radical, 讠. Every one of them is about speaking or knowing.',
            ],
          },
          {
            type: 'taglish',
            body: 'Ang radical ay parang "category tag" ng character. Kapag nakita mo ang 讠, alam mo agad na may kinalaman ito sa salita o pagsasalita, kahit hindi mo pa kilala ang buong character.',
          },
          {
            type: 'pro',
            body: 'When you meet a new character, name the radical first. It narrows the meaning before you even look up the word, and it is a big help for remembering.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'Six radicals to know first',
        blocks: [
          {
            type: 'table',
            head: ['Radical', 'Meaning', 'Examples'],
            rows: [
              ['讠', 'speech', '说 请 谢 谁 话'],
              ['饣', 'food', '饭'],
              ['忄', 'heart, feeling', '怕 忙 快'],
              ['扌', 'hand, action', '把 拔 打'],
              ['氵', 'water', '河'],
              ['门', 'gate, door', '问 间'],
            ],
            caption: 'These shapes are simplified forms of fuller characters: 言 speech, 食 food, 心 heart, 手 hand, 水 water.',
          },
          { type: 'vocab', words: [W3.hua, W3.fan, W3.he2, W3.wen] },
          {
            type: 'remember',
            body: 'Make a quick story for each: 讠 is "a mouth opening to speak". 忄 is "a heart standing upright with feelings". 氵 is "three drops of water". 门 is a gate with two posts. These are memory aids, not the real history.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'Use the clue',
        blocks: [
          {
            type: 'text',
            body: ['怕 (pà, afraid) has 忄 for feeling. 忙 (máng, busy) has 忄 too. 问 (wèn, to ask) puts a mouth 口 inside a gate 门: someone calling at a door.'],
          },
          {
            type: 'pro',
            body: 'Radicals hint at topic only. Do not expect them to give exact meanings or sounds. They are a first guess that you confirm with the context.',
          },
          {
            type: 'remember',
            body: 'Pair radicals with words you already know. 说 请 谢 谁: all about speech or people. 饭: food. 怕 忙: feelings. If you can name the radical, you can sort new characters into a group in your head.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Which radical?',
        blocks: [
          {
            type: 'quiz',
            question: 'Which radical do 说, 请 and 谢 share?',
            options: ['讠 (speech)', '氵 (water)', '扌 (hand)'],
            answer: 0,
            explain: 'All three are about speaking or words, so they carry the speech radical 讠.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Guess the topic',
        blocks: [
          {
            type: 'quiz',
            question: 'A new character 河 has the radical 氵. What is it probably about?',
            options: ['Water', 'Food', 'Speech'],
            answer: 0,
            explain: '氵 is the water radical. 河 (hé) means river.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Feelings',
        blocks: [
          {
            type: 'quiz',
            question: 'Which of these has the heart radical 忄?',
            options: ['怕', '饭', '问'],
            answer: 0,
            explain: '怕 (pà, afraid) has 忄. 饭 has 饣 and 问 has 门.',
          },
        ],
      },
    ],
  },

  // ─────────────────────────── Core Patterns ───────────────────────────
  {
    id: 'verbs',
    module: 'patterns',
    title: 'Everyday verbs',
    subtitle: 'Go, come, buy, look: verbs that never change form',
    minutes: 9,
    goal: 'Build simple subject, verb, object sentences with common action verbs.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Action words',
        blocks: [
          { type: 'vocab', words: [W.qu, W3.lai, W3.kan, W3.mai, W3.zou, W3.zuo] },
          {
            type: 'remember',
            body: 'Use the tone as a hint. 去 qù falls, like something moving away from you. 来 lái rises, like pulling something toward you. It is a memory aid, but the shape matches the idea.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'Verbs never change',
        blocks: [
          {
            type: 'text',
            body: [
              'Chinese verbs have no endings: no -s, -ed or -ing. 去 is the same for "go", "goes" and "went". Time words tell you when.',
              'The pattern is simple: subject + verb + object.',
            ],
          },
          {
            type: 'table',
            head: ['Sentence', 'Meaning'],
            rows: [
              ['我去学校。', 'I go to school.'],
              ['我看书。', 'I read a book.'],
              ['我买苹果。', 'I buy apples.'],
              ['你来我家。', 'You come to my home.'],
            ],
          },
          {
            type: 'taglish',
            body: 'Walang "kumain, kumakain, kakain" sa Mandarin. Isa lang ang 吃, at ang oras (kahapon, ngayon, bukas) ang nagsasabi ng panahon. Mas madali kaysa Tagalog!',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'Buy and sell',
        blocks: [
          { type: 'vocab', words: [W.chi, W2.he1, W3.shuijiao, W3.gongzuo, W3.mai4] },
          {
            type: 'pro',
            body: '买 (mǎi, buy) and 卖 (mài, sell) differ only by tone. Learners mix them up constantly, so drill them as a pair: 买 low and dipping, 卖 sharp falling.',
          },
          {
            type: 'remember',
            body: '卖 looks like 买 with an extra 十 on top. Picture putting something on top of the shelf to sell it. 买 is the version without the extra piece: you take it.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Go to school',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you say "I go to school"?',
            options: ['我去学校。', '我学校去。', '去我学校。'],
            answer: 0,
            explain: 'Subject + verb + object: 我 + 去 + 学校.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Buy or sell',
        blocks: [
          {
            type: 'quiz',
            question: 'Which one means "to buy"?',
            options: ['买 (mǎi)', '卖 (mài)'],
            answer: 0,
            explain: '买 mǎi is buy. 卖 mài is sell. Only the tone and the extra 十 differ.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'No endings',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you say "he reads a book" (reading, present)?',
            options: ['他看书。', '他是看书。', '看书他。'],
            answer: 0,
            explain: 'The verb does not change: 他 + 看 + 书.',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Say where you go.', hanzi: '我去学校。', pinyin: 'Wǒ qù xuéxiào.', english: 'I go to school.' },
          { type: 'speak', prompt: 'Say what you buy.', hanzi: '我买苹果。', pinyin: 'Wǒ mǎi píngguǒ.', english: 'I buy apples.' },
        ],
      },
    ],
  },

  {
    id: 'adjectives',
    module: 'patterns',
    title: 'Describing things with adjectives',
    subtitle: 'Why 我很忙 not 我是忙',
    minutes: 9,
    goal: 'Describe how you feel and what things are like with 很, 不 and 太.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Feelings and qualities',
        blocks: [
          { type: 'vocab', words: [W3.gaoxing, W3.lei, W3.mang, W3.haochi, W3.piaoliang, W3.re, W3.leng] },
          {
            type: 'remember',
            body: '高兴 gāoxìng: 高 means high, 兴 is a lift of spirit, so "high spirits". 漂亮 piàoliang sounds like "pyow-lyang", the way you whistle when something looks good. These are memory aids.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'Adjectives do not need 是',
        blocks: [
          {
            type: 'text',
            body: ['In Chinese, adjectives work like verbs. You do not say "I am tired" with 是. You say "I very tired": 我很累.'],
          },
          {
            type: 'table',
            head: ['Pattern', 'Example', 'Meaning'],
            rows: [
              ['很 + adjective', '我很忙。', 'I am busy.'],
              ['不 + adjective', '我不忙。', 'I am not busy.'],
              ['不太 + adjective', '我不太忙。', 'I am not very busy.'],
              ['太 + adjective + 了', '太忙了！', 'So busy!'],
            ],
          },
          {
            type: 'pro',
            body: 'Do not translate 很 as "very" every time. In a plain statement like 我很好, 很 is just filling the slot, and it sounds odd to leave it out. Use 非常 (fēicháng) when you really mean "very".',
          },
          {
            type: 'taglish',
            body: 'Hindi mo kailangan ng "ay": hindi 我是累 kundi 我很累. Isipin mo na parang "Ako ay napakapagod", pero ang "napaka" ay halos kasama na lang sa pattern.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'How are you feeling?',
        blocks: [
          {
            type: 'dialogue',
            title: 'After work',
            lines: [
              { speaker: 'A', hanzi: '你今天忙吗？', pinyin: 'Nǐ jīntiān máng ma?', english: 'Are you busy today?' },
              { speaker: 'B', hanzi: '我很忙，我很累。', pinyin: 'Wǒ hěn máng, wǒ hěn lèi.', english: 'I am busy, I am tired.' },
              { speaker: 'A', hanzi: '明天不忙。', pinyin: 'Míngtiān bù máng.', english: "Tomorrow isn't busy." },
              { speaker: 'B', hanzi: '太好了！', pinyin: 'Tài hǎo le!', english: 'Great!' },
            ],
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'I am tired',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you say "I am very tired"?',
            options: ['我很累。', '我是累。', '我累很。'],
            answer: 0,
            explain: 'Adjectives take 很, not 是.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Not very',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you say "It is not very hot"?',
            options: ['不太热。', '太不热。', '热不太是。'],
            answer: 0,
            explain: '不太 + adjective means "not very".',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Spot the mistake',
        blocks: [
          {
            type: 'quiz',
            question: 'Which sentence is wrong?',
            options: ['我很高兴。', '我是高兴。', '我不高兴。'],
            answer: 1,
            explain: 'Do not use 是 before an adjective. 我很高兴 is the correct form.',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Say how you feel.', hanzi: '我很高兴。', pinyin: 'Wǒ hěn gāoxìng.', english: 'I am happy.' },
          { type: 'speak', prompt: 'Say what is not true.', hanzi: '我不太忙。', pinyin: 'Wǒ bú tài máng.', english: 'I am not very busy.' },
        ],
      },
    ],
  },

  {
    id: 'zai',
    module: 'patterns',
    title: 'Being somewhere: 在',
    subtitle: 'Where things are, and what you are doing right now',
    minutes: 9,
    goal: 'Say where someone is and use 在 for actions in progress.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Three jobs for 在',
        blocks: [
          { type: 'vocab', words: [W3.zai4, W2.jia, W2.xuexiao, W3.gongsi] },
          {
            type: 'table',
            head: ['Use', 'Example', 'Meaning'],
            rows: [
              ['Be at a place', '我在家。', 'I am at home.'],
              ['Do something at a place', '我在家吃饭。', 'I eat at home.'],
              ['Action in progress', '我在吃饭。', 'I am eating.'],
            ],
          },
          {
            type: 'taglish',
            body: 'Parang "nasa" at "ay" sa Tagalog: 我在家 = "Nasa bahay ako". At kapag may verb sa likod, parang "-ing": 我在吃饭 = "Kumakain ako (ngayon)".',
          },
          {
            type: 'remember',
            body: 'Think of 在 as "being at". Same word for the place (我在家) and for "being in the middle of" an action (我在吃). Both mean you are at that point right now.',
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
              { speaker: 'B', hanzi: '我在公司。你在做什么？', pinyin: 'Wǒ zài gōngsī. Nǐ zài zuò shénme?', english: "I'm at the office. What are you doing?" },
              { speaker: 'A', hanzi: '我在家吃饭。', pinyin: 'Wǒ zài jiā chī fàn.', english: "I'm eating at home." },
            ],
          },
          {
            type: 'pro',
            body: 'For "where are you eating?", the place goes before the verb: 你在哪里吃饭？ Never at the end. Chinese puts place and time before the action, always.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'At home',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you say "I am at home"?',
            options: ['我在家。', '我家在。', '我是家。'],
            answer: 0,
            explain: '在 links a person to a place.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Right now',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you say "I am eating (right now)"?',
            options: ['我在吃饭。', '我吃饭在。', '我是吃饭。'],
            answer: 0,
            explain: '在 + verb shows an action in progress.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Place before the verb',
        blocks: [
          {
            type: 'quiz',
            question: 'Which means "I work at the company"?',
            options: ['我在公司工作。', '我工作在公司。', '我工作公司在。'],
            answer: 0,
            explain: 'The place (在公司) goes before the verb (工作).',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Say where you are.', hanzi: '我在家。', pinyin: 'Wǒ zài jiā.', english: 'I am at home.' },
          { type: 'speak', prompt: 'Say what you are doing.', hanzi: '我在学中文。', pinyin: 'Wǒ zài xué Zhōngwén.', english: 'I am studying Chinese.' },
        ],
      },
    ],
  },

  {
    id: 'le',
    module: 'patterns',
    title: 'Finished and changed: 了',
    subtitle: 'The small word with two big jobs',
    minutes: 10,
    goal: 'Use 了 to say something has happened or the situation has changed.',
    pages: [
      {
        kicker: 'Learn',
        title: 'What 了 does',
        blocks: [
          {
            type: 'text',
            body: [
              '了 is not a past-tense marker. It means "completed" or "now it is different". That one idea explains most of its uses.',
              'After a verb, it marks a finished action: 我买了一本书, "I bought a book". At the end of a sentence, it marks a new situation: 下雨了, "it has started raining".',
            ],
          },
          { type: 'vocab', words: [W3.le, W3.mai, W3.xiayu, W2.zuotian] },
          {
            type: 'table',
            head: ['Sentence', 'Meaning', 'Job'],
            rows: [
              ['我买了一本书。', 'I bought a book.', 'completed'],
              ['我吃饭了。', 'I have eaten.', 'completed'],
              ['下雨了。', "It's raining now.", 'new situation'],
              ['太贵了。', 'Too expensive.', 'fixed phrase 太…了'],
            ],
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'When not to use it',
        blocks: [
          {
            type: 'pro',
            body: 'Do not use 了 just because the sentence is in the past. Habits do not need it, and a negative past uses 没: 我昨天没吃饭, not 我昨天不吃饭了. Keep 了 for "this happened" or "things changed".',
          },
          {
            type: 'remember',
            body: 'Think of 了 as a tiny "check mark" ✓ at the end: it says "done, completed, updated". If there is no check mark idea in your sentence, you probably do not need 了.',
          },
          {
            type: 'taglish',
            body: 'Isipin mo na parang "na-" sa Tagalog: "nakain na", "nabili na", "umulan na". Hindi eksaktong past tense, kundi "tapos na" o "nagbago na".',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Done and changed',
        blocks: [
          {
            type: 'dialogue',
            title: 'Catching up',
            lines: [
              { speaker: 'A', hanzi: '你吃饭了吗？', pinyin: 'Nǐ chī fàn le ma?', english: 'Have you eaten?' },
              { speaker: 'B', hanzi: '吃了。你吃了吗？', pinyin: 'Chī le. Nǐ chī le ma?', english: 'Yes, I have. Have you?' },
              { speaker: 'A', hanzi: '我没吃。', pinyin: 'Wǒ méi chī.', english: "No, I haven't." },
              { speaker: 'B', hanzi: '下雨了，我在家吃。', pinyin: 'Xià yǔ le, wǒ zài jiā chī.', english: "It's raining now, I'll eat at home." },
            ],
          },
          {
            type: 'tip',
            label: 'Good to know',
            body: '你吃饭了吗？ is a very common greeting in China, like "How are you?". The honest answer is just 吃了 or 没吃.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Completed action',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you say "I bought a book"?',
            options: ['我买了一本书。', '我买一本书了在。', '我了买一本书。'],
            answer: 0,
            explain: 'Put 了 right after the verb: 买了.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Changed situation',
        blocks: [
          {
            type: 'quiz',
            question: 'Which means "It is raining now (it was not before)"?',
            options: ['下雨了。', '下雨不。', '了下雨。'],
            answer: 0,
            explain: 'Sentence-final 了 marks a new situation.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Past negative',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you say "I did not eat"?',
            options: ['我没吃。', '我不吃了。', '我没吃了。'],
            answer: 0,
            explain: 'Use 没 for a past negative, and do not add 了.',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Ask the classic greeting.', hanzi: '你吃饭了吗？', pinyin: 'Nǐ chī fàn le ma?', english: 'Have you eaten?' },
          { type: 'speak', prompt: 'Answer.', hanzi: '吃了。', pinyin: 'Chī le.', english: 'Yes, I have.' },
        ],
      },
    ],
  },

  // ─────────────────────────── Everyday Life (more) ───────────────────────────
  {
    id: 'weather',
    module: 'daily',
    title: 'The weather',
    subtitle: 'Small talk about hot, cold and rainy days',
    minutes: 7,
    goal: 'Talk about the weather and ask someone how it is.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Weather words',
        blocks: [
          { type: 'vocab', words: [W3.tianqi, W3.re, W3.leng, W3.yu, W3.xiayu, W3.zenmeyang] },
          {
            type: 'remember',
            body: '下雨 literally means "rain falls": 下 is "down/fall", 雨 is rain. And look at 雨: it looks like drops falling from a cloud with a window frame. A memory aid, not the full history.',
          },
          {
            type: 'taglish',
            body: 'Ginagamit ang weather bilang icebreaker sa buong mundo, kasama dito. "今天天气很好" ay pwede mong gamitin kahit kanino bilang panimula.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Talking about today',
        blocks: [
          {
            type: 'text',
            body: ['The pattern is 今天天气 + adjective: 今天天气很热. To ask how it is, say 今天天气怎么样？ For the future, use 会 (huì): 明天会下雨 means "it will rain tomorrow".'],
          },
          {
            type: 'dialogue',
            title: 'Small talk',
            lines: [
              { speaker: 'A', hanzi: '今天天气怎么样？', pinyin: 'Jīntiān tiānqì zěnmeyàng?', english: "How's the weather today?" },
              { speaker: 'B', hanzi: '今天很热。', pinyin: 'Jīntiān hěn rè.', english: "It's hot today." },
              { speaker: 'A', hanzi: '明天会下雨。', pinyin: 'Míngtiān huì xià yǔ.', english: 'It will rain tomorrow.' },
              { speaker: 'B', hanzi: '真的吗？', pinyin: 'Zhēn de ma?', english: 'Really?' },
            ],
          },
          {
            type: 'pro',
            body: '真的吗？ (zhēn de ma, "really?") is a short, useful reaction. Using it keeps a conversation going and tells the other person you are listening.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'How is the weather?',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you ask "How is the weather today?"',
            options: ['今天天气怎么样？', '今天怎么样天气？', '天气今天什么？'],
            answer: 0,
            explain: '怎么样 means "how is it?".',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'It will rain',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you say "It will rain tomorrow"?',
            options: ['明天会下雨。', '会明天下雨。', '明天雨会。'],
            answer: 0,
            explain: 'Time + 会 + verb for a future event.',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Ask about the weather.', hanzi: '今天天气怎么样？', pinyin: 'Jīntiān tiānqì zěnmeyàng?', english: "How's the weather today?" },
          { type: 'speak', prompt: 'Answer.', hanzi: '今天很热。', pinyin: 'Jīntiān hěn rè.', english: "It's hot today." },
        ],
      },
    ],
  },

  {
    id: 'directions',
    module: 'daily',
    title: 'Finding places',
    subtitle: 'Ask where the restroom is and understand the answer',
    minutes: 9,
    goal: 'Ask where a place is and understand left, right, front, behind and next to.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Place words',
        blocks: [
          { type: 'vocab', words: [W3.zuobian, W3.youbian, W3.qianmian, W3.houmian, W3.pangbian, W3.zheli, W3.nali2, W3.xishoujian] },
          {
            type: 'remember',
            body: '右 (yòu, right) contains 口, a mouth: most people eat with the right hand. 左 (zuǒ, left) contains 工, a tool. These are memory aids, so use them only if they help.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'Where is it?',
        blocks: [
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['洗手间在哪里？', 'Where is the restroom?'],
              ['在那里。', "It's over there."],
              ['在左边。', "It's on the left."],
              ['在学校旁边。', "It's next to the school."],
            ],
          },
          {
            type: 'taglish',
            body: 'Katulad ng Tagalog: "Nasaan ang banyo?" → 洗手间在哪里? At ang sagot ay "Nasa kaliwa" → 在左边. Pareho ang istruktura: lugar + nasa + posisyon.',
          },
          {
            type: 'pro',
            body: 'Always start with 请问 (excuse me, may I ask) when asking a stranger: 请问，洗手间在哪里？ It costs one extra word and gets a friendlier answer.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Asking for directions',
        blocks: [
          {
            type: 'dialogue',
            title: 'At a mall',
            lines: [
              { speaker: 'A', hanzi: '请问，洗手间在哪里？', pinyin: 'Qǐngwèn, xǐshǒujiān zài nǎlǐ?', english: 'Excuse me, where is the restroom?' },
              { speaker: 'B', hanzi: '在那里，在左边。', pinyin: 'Zài nàlǐ, zài zuǒbian.', english: "Over there, on the left." },
              { speaker: 'A', hanzi: '谢谢！', pinyin: 'Xièxie!', english: 'Thank you!' },
              { speaker: 'B', hanzi: '不客气。', pinyin: 'Bú kèqi.', english: "You're welcome." },
            ],
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Where is it?',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you ask "Where is the restroom?"',
            options: ['洗手间在哪里？', '在哪里洗手间？', '洗手间哪里是？'],
            answer: 0,
            explain: 'Thing + 在 + 哪里 (the question word stays in the answer position).',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Left or right?',
        blocks: [
          {
            type: 'quiz',
            question: 'Which means "on the right"?',
            options: ['在左边', '在右边', '在前面'],
            answer: 1,
            explain: '右边 is the right side. 左边 is left, 前面 is in front.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Next to',
        blocks: [
          {
            type: 'quiz',
            question: 'Which means "next to the school"?',
            options: ['在学校旁边', '在学校后面', '在学校里面'],
            answer: 0,
            explain: '旁边 means beside or next to. 后面 is behind.',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Ask politely.', hanzi: '请问，洗手间在哪里？', pinyin: 'Qǐngwèn, xǐshǒujiān zài nǎlǐ?', english: 'Excuse me, where is the restroom?' },
          { type: 'speak', prompt: 'Give the answer.', hanzi: '在那里，在左边。', pinyin: 'Zài nàlǐ, zài zuǒbian.', english: 'Over there, on the left.' },
        ],
      },
    ],
  },

  // ─────────────────────────── Work and Service ───────────────────────────
  {
    id: 'jobs',
    module: 'work',
    title: 'Jobs and work',
    subtitle: 'Say what you do and ask others',
    minutes: 8,
    goal: 'Say your job and ask what someone does for work.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Common jobs',
        blocks: [
          { type: 'vocab', words: [W3.laoshi, W3.yisheng, W3.fuwuyuan, W3.jingli, W.xuesheng, W3.gongzuo] },
          {
            type: 'remember',
            body: '老师 lǎoshī has 师, a "master" (teacher). 医生 yīshēng: 生 means "life", so a "life" person: a doctor. 服务员: 服务 is "service", 员 is a person in a role. Many job words end in 员 (yuán), "member of a role".',
          },
          {
            type: 'taglish',
            body: 'Para sa mga nagtatrabaho sa restaurant, hotel o tindahan: 服务员 ang pinakamadalas mong maririnig. Madali pong tandaan: "service + person".',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'Say your job',
        blocks: [
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['你做什么工作？', 'What do you do for work?'],
              ['我是服务员。', 'I am a waiter.'],
              ['我在公司工作。', 'I work at a company.'],
              ['我是学生，我不工作。', "I'm a student, I don't work."],
            ],
          },
          {
            type: 'pro',
            body: '你做什么工作？ literally asks "you do what work?". It is the natural way to ask someone\'s job, and a very polite question to ask in China. Say it with a smile.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Meeting a coworker',
        blocks: [
          {
            type: 'dialogue',
            title: 'First day',
            lines: [
              { speaker: 'A', hanzi: '你好，我叫李明。你做什么工作？', pinyin: 'Nǐ hǎo, wǒ jiào Lǐ Míng. Nǐ zuò shénme gōngzuò?', english: "Hi, I'm Li Ming. What do you do?" },
              { speaker: 'B', hanzi: '我是服务员。你呢？', pinyin: 'Wǒ shì fúwùyuán. Nǐ ne?', english: "I'm a waiter. And you?" },
              { speaker: 'A', hanzi: '我是经理。', pinyin: 'Wǒ shì jīnglǐ.', english: "I'm the manager." },
            ],
          },
          {
            type: 'tip',
            label: 'Good to know',
            body: '你呢？ (nǐ ne) means "and you?" The particle 呢 turns a statement into a "what about you?" question. You will use it constantly.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Ask the job',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you ask "What do you do for work?"',
            options: ['你做什么工作？', '你是什么工作吗？', '工作你什么？'],
            answer: 0,
            explain: '你 + 做 + 什么 + 工作.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Say your job',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you say "I am a teacher"?',
            options: ['我是老师。', '我老师是。', '我叫老师。'],
            answer: 0,
            explain: '是 links "I" to an identity.',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Ask someone.', hanzi: '你做什么工作？', pinyin: 'Nǐ zuò shénme gōngzuò?', english: 'What do you do for work?' },
          { type: 'speak', prompt: 'Answer.', hanzi: '我是服务员。', pinyin: 'Wǒ shì fúwùyuán.', english: 'I am a waiter.' },
        ],
      },
    ],
  },

  {
    id: 'service',
    module: 'work',
    title: 'Welcoming guests',
    subtitle: 'The phrases staff in a restaurant or hotel use every day',
    minutes: 10,
    goal: 'Greet guests, seat them, ask them to wait, and serve them politely.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Greet and seat',
        blocks: [
          { type: 'vocab', words: [W3.huanying, W3.wei, W3.zhebianqing, W3.qingzuo] },
          {
            type: 'text',
            body: ['几位？ (jǐ wèi) asks "how many people?" and the answer uses 位: 两位 is "two people". 位 is the polite measure word for people in service settings.'],
          },
          {
            type: 'remember',
            body: '光临 literally means "bright arrival": 光 is light, 临 is to arrive. Welcoming guests as "your bright arrival" explains the warm tone of 欢迎光临. A memory aid, but it matches the usage.',
          },
        ],
      },
      {
        kicker: 'Learn',
        title: 'Wait, serve, thank',
        blocks: [
          { type: 'vocab', words: [W3.qingdeng, W3.qingmanyong, W.xiexie, W.bukeqi] },
          {
            type: 'pro',
            body: 'Start almost every instruction with 请 and use 您 for guests, not 你. Together they signal respect, and it is exactly what customers expect from service staff.',
          },
          {
            type: 'taglish',
            body: 'Parang "po" at "opo" sa Tagalog: ang 您 at 请 ang nagbibigay ng paggalang. Para sa guests, laging 您, hindi 你.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'A table for two',
        blocks: [
          {
            type: 'dialogue',
            title: 'At the restaurant door',
            lines: [
              { speaker: 'S', hanzi: '欢迎光临！几位？', pinyin: 'Huānyíng guānglín! Jǐ wèi?', english: 'Welcome! How many people?' },
              { speaker: 'G', hanzi: '两位。', pinyin: 'Liǎng wèi.', english: 'Two.' },
              { speaker: 'S', hanzi: '这边请。请坐。', pinyin: 'Zhèbiān qǐng. Qǐng zuò.', english: 'This way please. Please sit.' },
              { speaker: 'S', hanzi: '您想喝什么？', pinyin: 'Nín xiǎng hē shénme?', english: 'What would you like to drink?' },
              { speaker: 'G', hanzi: '请给我一杯水。', pinyin: 'Qǐng gěi wǒ yì bēi shuǐ.', english: 'Please give me a glass of water.' },
              { speaker: 'S', hanzi: '请等一下。', pinyin: 'Qǐng děng yíxià.', english: 'Please wait a moment.' },
              { speaker: 'S', hanzi: '请慢用。', pinyin: 'Qǐng màn yòng.', english: 'Please enjoy.' },
              { speaker: 'G', hanzi: '谢谢！', pinyin: 'Xièxie!', english: 'Thank you!' },
            ],
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Guest arrives',
        blocks: [
          {
            type: 'quiz',
            question: 'A customer walks in. What do you say?',
            options: ['欢迎光临', '请慢用', '再见'],
            answer: 0,
            explain: '欢迎光临 welcomes arriving customers.',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'How many?',
        blocks: [
          {
            type: 'quiz',
            question: 'How do you ask "How many people?"',
            options: ['几位？', '多少钱？', '什么位？'],
            answer: 0,
            explain: '几位 uses 几 (small number) and 位 (polite measure word for people).',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Please wait',
        blocks: [
          {
            type: 'quiz',
            question: 'You need a guest to wait a moment. What do you say?',
            options: ['请等一下', '请慢用', '这边请'],
            answer: 0,
            explain: '请等一下 means "please wait a moment".',
          },
        ],
      },
      {
        kicker: 'Check',
        title: 'Serving food',
        blocks: [
          {
            type: 'quiz',
            question: 'You put the food on the table. What do you say?',
            options: ['请慢用', '欢迎光临', '几位'],
            answer: 0,
            explain: '请慢用 means "please enjoy".',
          },
        ],
      },
      {
        kicker: 'Speak',
        title: 'Your turn',
        blocks: [
          { type: 'speak', prompt: 'Welcome a guest.', hanzi: '欢迎光临！几位？', pinyin: 'Huānyíng guānglín! Jǐ wèi?', english: 'Welcome! How many people?' },
          { type: 'speak', prompt: 'Seat them.', hanzi: '这边请。请坐。', pinyin: 'Zhèbiān qǐng. Qǐng zuò.', english: 'This way please. Please sit.' },
          { type: 'speak', prompt: 'Serve them.', hanzi: '请慢用。', pinyin: 'Qǐng màn yòng.', english: 'Please enjoy.' },
        ],
      },
    ],
  },
];

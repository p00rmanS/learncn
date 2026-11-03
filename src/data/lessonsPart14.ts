import type { Lesson, Page } from './types';
import { W15 } from './wordsPart15';

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

const locals = (body: string) => ({ type: 'tip' as const, label: 'What locals say', body });
const tricks = (body: string) => ({ type: 'tip' as const, label: 'Tip and trick', body });

export const PART14_LESSONS: Lesson[] = [
  {
    id: 'deep-ba',
    module: 'patterns',
    title: 'The little word 吧: suggestions and softening',
    subtitle: 'Let us go, okay, sounds good: how locals use 吧',
    minutes: 12,
    goal: 'Use 吧 to make suggestions, agree softly and soften a request the way locals do.',
    pages: [
      {
        kicker: 'Overview',
        title: 'What 吧 does',
        blocks: [
          {
            type: 'text',
            title: 'Why this matters',
            body: [
              '吧 (ba) is a tiny word at the end of a sentence. It changes the feeling of what you say: a suggestion instead of an order, a guess instead of a fact, or a soft agreement.',
              'You will hear it in almost every casual conversation, so learning it early makes you sound much less stiff.',
            ],
          },
          {
            type: 'taglish',
            body: 'Ang 吧 ay parang "siguro" o "tara na" sa dulo ng pangungusap. Hindi ito nagbabago ng kahulugan ng salita, pero nagpapalambot ito ng tono. Kapag gusto mong magmungkahi nang hindi nag-uutos, lagyan ng 吧.',
          },
        ],
      },
      {
        kicker: 'Deep dive',
        title: 'Three jobs of 吧',
        blocks: [
          {
            type: 'table',
            head: ['Job', 'Example', 'Meaning'],
            rows: [
              ['Suggestion', '我们走吧。', 'Let us go.'],
              ['Soft agreement', '好吧，就这样。', 'Okay then, let it be this way.'],
              ['Guess or assumption', '他应该是学生吧。', 'He is probably a student, right?'],
            ],
          },
          {
            type: 'text',
            title: 'Step by step',
            body: [
              'Put 吧 at the very end, after the verb or the full sentence.',
              'Say 我们 (we) first when you suggest something together, then the action, then 吧.',
              'Pair it with 好 or 行 to show you agree. 行吧 sounds like "fine, if you say so".',
            ],
          },
          tricks('Start with 我们 + verb + 吧 to make any suggestion sound friendly: 我们吃饭吧 (let us eat). It works for almost any activity.'),
          {
            type: 'pro',
            body: 'Do not use 吧 when you are giving a firm command to a stranger. 请 with a polite verb is safer: 请坐 (please sit), not 坐吧.',
          },
        ],
      },
      {
        kicker: 'What locals say',
        title: 'Real things people say',
        blocks: [
          locals('"行吧" is what a friend says when they are not very excited but will go along. It is not rude; it means "okay, fine".'),
          locals('"没问题" is the quick "sure, no problem". In chat, people often send "好的" with a thumbs up instead of a full sentence.'),
          {
            type: 'vocab',
            words: [W15.zou, W15.chifan, W15.women, W15.yiqi, W15.xing, W15.meiwenti],
          },
          {
            type: 'dialogue',
            title: 'Making plans with 吧',
            lines: [
              { speaker: 'A', hanzi: '我们一起去吃饭吧！', pinyin: 'Wǒmen yìqǐ qù chīfàn ba!', english: 'Let us go eat together!' },
              { speaker: 'B', hanzi: '行，没问题！', pinyin: 'Xíng, méi wèntí!', english: 'Sure, no problem!' },
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
            body: '吧 is a "soft landing" word. Think of it as the Chinese version of "let us..." or "right?" at the end of a sentence. If you hear 吧 at the end, the speaker is inviting, not commanding.',
          },
          {
            type: 'taglish',
            body: 'Isipin mong ang 吧 ay parang "tara" o "di ba" sa dulo. Kapag narinig mo ito, malamang ay mungkahi o pag-asa lang ng nagsasalita, hindi utos.',
          },
        ],
      },
      quiz('吧 for suggestions', 'Which sentence makes a friendly suggestion?', ['我们走吧。', '走！', '你走吧走。'], 0, '我们走吧 (let us go) is a soft suggestion. The other options either sound like an order or are not correct.'),
      quiz('行', 'What does 没问题 mean?', ['no problem', 'not yet', 'I do not know'], 0, '没问题 literally means "no problem". Locals say it to confirm quickly.'),
      speak([
        { prompt: 'Suggest going.', hanzi: '我们走吧。', pinyin: 'Wǒmen zǒu ba.', english: 'Let us go.' },
        { prompt: 'Agree softly.', hanzi: '好吧，就这样。', pinyin: 'Hǎo ba, jiù zhèyàng.', english: 'Okay then, let it be this way.' },
      ]),
    ],
  },

  {
    id: 'deep-shide',
    module: 'patterns',
    title: 'Emphasising how: 是…的',
    subtitle: 'Talk about past trips, transport and how things happened',
    minutes: 12,
    goal: 'Use 是…的 to talk about how, when or by what means something happened.',
    pages: [
      {
        kicker: 'Overview',
        title: 'What 是…的 is for',
        blocks: [
          {
            type: 'text',
            title: 'The pattern',
            body: [
              '是…的 wraps around a past action that you already know happened. You use it to highlight the detail: how, when, where, or with whom.',
              'Example: 我是坐火车来的 (I came by train). The fact that you came is already known; 是…的 puts the spotlight on the train.',
            ],
          },
          {
            type: 'taglish',
            body: 'Ang 是…的 ay ginagamit kapag alam na ng kausap ang nangyari, pero gusto mong idiin ang paraan, oras, o lugar. Parang sinasabi mong "ako, sumakay ako ng tren".',
          },
        ],
      },
      {
        kicker: 'Deep dive',
        title: 'Build the pattern',
        blocks: [
          {
            type: 'table',
            head: ['Structure', 'Example', 'Meaning'],
            rows: [
              ['主语 + 是 + 方式 + 动词 + 的', '我是坐飞机来的。', 'I came by plane.'],
              ['主语 + 是 + 时间 + 动词 + 的', '我是昨天到的。', 'I arrived yesterday.'],
              ['主语 + 是 + 怎么 + 动词 + 的', '你是怎么来的？', 'How did you come?'],
            ],
          },
          {
            type: 'text',
            title: 'Rules to remember',
            body: [
              'Put 是 before the detail you want to highlight, and 的 at the end of the sentence.',
              'If the sentence has an object, 的 can come before it or at the end. Both are correct in everyday speech.',
              'Do not use it for simple facts that have not happened yet. Use a plain future sentence instead.',
            ],
          },
          tricks('Ask yourself: "Is this about the detail of a past event?" If yes, reach for 是…的. If no, you probably want a plain sentence.'),
          {
            type: 'pro',
            body: 'The negative form is 不是…的: 我不是坐火车来的 (I did not come by train). You will hear this in travel conversations all the time.',
          },
        ],
      },
      {
        kicker: 'What locals say',
        title: 'Real things people say',
        blocks: [
          locals('"你怎么来的？" is the everyday question. People expect the answer to be a vehicle: 地铁, 火车, 飞机, or just 走 (walked).'),
          locals('"我是走过来的" (I walked over) is a casual and very common answer when someone is nearby.'),
          {
            type: 'vocab',
            words: [W15.shi, W15.de, W15.lai, W15.zuo, W15.huoche, W15.feiji, W15.zuotian, W15.zenme, W15.dao],
          },
          {
            type: 'dialogue',
            title: 'How did you come?',
            lines: [
              { speaker: 'A', hanzi: '你是怎么来的？', pinyin: 'Nǐ shì zěnme lái de?', english: 'How did you come?' },
              { speaker: 'B', hanzi: '我是坐火车来的。', pinyin: 'Wǒ shì zuò huǒchē lái de.', english: 'I came by train.' },
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
            body: '是…的 is a spotlight. Say "是" to point the light at the detail, and "的" to close the sentence. Think of a camera zooming in on "how" or "when".',
          },
          {
            type: 'taglish',
            body: 'Kapag nagtanong ka ng "paano ka pumunta?", ang sagot na may 是…的 ay parang "Sumakay ako ng tren". Ilagay ang 是 bago ang paraan, at 的 sa dulo.',
          },
        ],
      },
      quiz('Use of 是…的', 'What is 是…的 used for?', ['emphasising how, when or where something happened', 'making a question', 'talking about the future'], 0, '是…的 highlights the detail of a past action that both speakers already know about.'),
      quiz('How', 'What does 怎么 mean in 你是怎么来的？', ['how', 'why', 'where'], 0, '怎么 here means "how". 为什么 is the usual word for "why".'),
      speak([
        { prompt: 'Say you arrived yesterday.', hanzi: '我是昨天到的。', pinyin: 'Wǒ shì zuótiān dào de.', english: 'I arrived yesterday.' },
        { prompt: 'Say he came by plane.', hanzi: '他是坐飞机来的。', pinyin: 'Tā shì zuò fēijī lái de.', english: 'He came by plane.' },
      ]),
    ],
  },

  {
    id: 'deep-ba-object',
    module: 'patterns',
    title: 'Moving things with 把',
    subtitle: 'Put it, close it, finish it: the把 sentence',
    minutes: 12,
    goal: 'Use 把 to say what you did to an object, so your sentences sound natural.',
    pages: [
      {
        kicker: 'Overview',
        title: 'Why 把 exists',
        blocks: [
          {
            type: 'text',
            title: 'The idea',
            body: [
              'English says "I put the book on the table." Chinese often prefers to bring the object forward with 把: 我把书放在桌子上.',
              'This is the 把 sentence. It is one of the most useful patterns for everyday instructions and tasks.',
            ],
          },
          {
            type: 'taglish',
            body: 'Ang 把 ay parang pagturo sa bagay na ginalaw mo. Sa halip na "inilagay ko ang libro", sinasabi ng Chinese na "ang libro, inilagay ko na sa mesa". Ang 把 ang nagdadala ng bagay sa unahan.',
          },
        ],
      },
      {
        kicker: 'Deep dive',
        title: 'The 把 shape',
        blocks: [
          {
            type: 'table',
            head: ['Shape', 'Example', 'Meaning'],
            rows: [
              ['主语 + 把 + 东西 + 动词 + 结果', '请把门关上。', 'Please close the door.'],
              ['主语 + 把 + 东西 + 放 + 地点', '我把书放在桌子上。', 'I put the book on the table.'],
              ['主语 + 把 + 作业 + 写完了', '我把作业写完了。', 'I finished writing the homework.'],
            ],
          },
          {
            type: 'text',
            title: 'Three rules',
            body: [
              'The object after 把 must be specific, like 这本书 or 那把钥匙, not a general word like 书.',
              'The verb must do something to the object and usually needs a result word: 完, 上, 好, 在, 掉.',
              'Simple verbs like 看 or 听 do not work with 把 on their own.',
            ],
          },
          tricks('If you want a quick test, check whether the sentence changes the object. 把 is for moving, closing, finishing or changing something.'),
          {
            type: 'pro',
            body: 'Negation goes before 把: 我没把钥匙带来 (I did not bring the key). Do not put 不 or 没 after 把.',
          },
        ],
      },
      {
        kicker: 'What locals say',
        title: 'Real things people say',
        blocks: [
          locals('"请把门关上" is what you hear at a shop or in an office. It is polite when you add 请.'),
          locals('"我把它放好了" means "I put it away properly." People say this when they tidy up for guests.'),
          {
            type: 'vocab',
            words: [W15.shu, W15.zhuozi, W15.men, W15.guan, W15.fang, W15.na, W15.shou, W15.yaoshi, W15.zuoye, W15.xie, W15.wan],
          },
          {
            type: 'dialogue',
            title: 'Tidying up',
            lines: [
              { speaker: 'A', hanzi: '请把门关上。', pinyin: 'Qǐng bǎ mén guān shang.', english: 'Please close the door.' },
              { speaker: 'B', hanzi: '好的，我把书放在桌子上。', pinyin: 'Hǎo de, wǒ bǎ shū fàng zài zhuōzi shang.', english: 'Okay, I will put the book on the table.' },
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
            body: '把 is a moving truck. It picks up the object, carries it to the front of the sentence, and then the verb tells what happened to it. Ask: "What did I do to the thing?"',
          },
          {
            type: 'taglish',
            body: 'Isipin ang 把 bilang kamay na humahawak sa bagay. Kapag may ginawa ka sa isang tiyak na bagay, gamitin ang 把 at sundan ng aksyon at resulta.',
          },
        ],
      },
      quiz('把 meaning', 'When do you use 把?', ['to show what happens to a specific object', 'to ask a question', 'to show the future'], 0, '把 introduces a specific object and then the action done to it.'),
      quiz('放', 'What does 放 mean?', ['to put; to place', 'to take', 'to close'], 0, '放 means to put or place something somewhere.'),
      speak([
        { prompt: 'Ask someone to lock the door.', hanzi: '请把钥匙给我。', pinyin: 'Qǐng bǎ yàoshi gěi wǒ.', english: 'Please give me the key.' },
        { prompt: 'Say you finished the homework.', hanzi: '我把作业写完了。', pinyin: 'Wǒ bǎ zuòyè xiě wán le.', english: 'I finished the homework.' },
      ]),
    ],
  },

  {
    id: 'deep-address',
    module: 'talk',
    title: 'How to address people',
    subtitle: 'Teacher, sir, auntie, master: choosing the right word',
    minutes: 11,
    goal: 'Choose the right polite form of address for teachers, workers, shop staff and strangers.',
    pages: [
      {
        kicker: 'Overview',
        title: 'Why titles matter',
        blocks: [
          {
            type: 'text',
            title: 'The problem',
            body: [
              'In English you can say "excuse me" to anyone. In Chinese, the word you use to call someone shows respect, age and relationship.',
              'Using the right address is one of the fastest ways to sound polite and natural.',
            ],
          },
          {
            type: 'taglish',
            body: 'Sa Chinese, mahalaga ang tawag sa tao. Ang 您 ay magalang na "ikaw", at ang 老师 ay guro. Ang tamang tawag ay nagpapakita ng respeto, kaya pag-aralan ito nang maaga.',
          },
        ],
      },
      {
        kicker: 'Deep dive',
        title: 'Who to call what',
        blocks: [
          {
            type: 'table',
            head: ['Address', 'Use it for', 'Example'],
            rows: [
              ['您 (nín)', 'polite "you" to anyone older or respected', '您好！'],
              ['老师 (lǎoshī)', 'teachers, and often people with expertise', '王老师，您好！'],
              ['师傅 (shīfu)', 'taxi drivers and skilled workers, polite', '师傅，去机场。'],
              ['先生 / 女士', 'Mr. or Ms. (formal, in service or announcements)', '女士，您需要什么？'],
              ['阿姨 (āyí)', 'women of the middle age, friendly tone', '阿姨，这个多少钱？'],
              ['大哥 (dàgē)', 'friendly address for a man of similar age', '大哥，借一下。'],
            ],
          },
          tricks('When unsure, use 您 with a title. 您 plus 老师 or 先生 is safe in almost any place. Avoid 你 when speaking to someone clearly older than you.'),
          {
            type: 'pro',
            body: 'Do not translate "Mr. Wang" as 王先生 in every case. For a colleague or teacher, 王老师 is more natural.',
          },
        ],
      },
      {
        kicker: 'What locals say',
        title: 'Real things people say',
        blocks: [
          locals('"师傅，去这里" is the everyday taxi greeting. A driver will often reply "好嘞" and go.'),
          locals('"阿姨" works for almost any shop lady or market seller. It is warm, not rude, and people answer with a smile.'),
          {
            type: 'vocab',
            words: [W15.nin, W15.laoshi, W15.shifu, W15.xiansheng, W15.nvshi, W15.ayi, W15.dage, W15.xuyao],
          },
          {
            type: 'dialogue',
            title: 'Greeting a teacher',
            lines: [
              { speaker: 'A', hanzi: '王老师，您好！', pinyin: 'Wáng lǎoshī, nín hǎo!', english: 'Hello, Teacher Wang!' },
              { speaker: 'B', hanzi: '你好！请坐。', pinyin: 'Nǐ hǎo! Qǐng zuò.', english: 'Hello! Please sit down.' },
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
            body: '您 is the respectful "you" and 你 is the casual "you". When you are unsure, pick 您 with a title. Locals relax the rule with friends, but they notice when a stranger is too casual.',
          },
          {
            type: 'taglish',
            body: 'Kapag hindi mo sigurado kung ano ang tawag, gamitin ang 您 at ang titulo ng tao. Mas mabuting maging magalang kaysa sobrang kaswal.',
          },
        ],
      },
      quiz('Taxi', 'How do you call a taxi driver politely?', ['师傅', '老师', '先生说'], 0, '师傅 is the usual polite address for a taxi driver or a skilled worker.'),
      quiz('您', 'What does 您 mean?', ['the polite form of you', 'a plural you', 'a formal goodbye'], 0, '您 is the respectful form of 你, used for elders and people you respect.'),
      speak([
        { prompt: 'Call a taxi driver.', hanzi: '师傅，去机场。', pinyin: 'Shīfu, qù jīchǎng.', english: 'Driver, to the airport.' },
        { prompt: 'Speak to a service staff member.', hanzi: '女士，您需要什么？', pinyin: 'Nǚshì, nín xūyào shénme?', english: 'Madam, what do you need?' },
      ]),
    ],
  },

  {
    id: 'deep-chengyu',
    module: 'talk',
    title: 'Four-character idioms (成语)',
    subtitle: 'The short phrases locals use to sound wise and warm',
    minutes: 11,
    goal: 'Understand how chengyu are built and use two everyday ones in a sentence.',
    pages: [
      {
        kicker: 'Overview',
        title: 'What a chengyu is',
        blocks: [
          {
            type: 'text',
            title: 'Short and loaded',
            body: [
              'A 成语 is a four-character idiom. Each one carries a story or a lesson in very few words, and locals use them daily in speech and writing.',
              'You do not need hundreds. Learn a few that you can use in everyday conversation and you will sound much more fluent.',
            ],
          },
          {
            type: 'taglish',
            body: 'Ang 成语 ay apat na salitang may malalim na kahulugan, parang salawikain. Ginagamit ito ng mga Chinese para magsabi ng ugali o damdamin nang maikli lang.',
          },
        ],
      },
      {
        kicker: 'Deep dive',
        title: 'How they are built',
        blocks: [
          {
            type: 'table',
            head: ['Idiom', 'Pinyin', 'Literal', 'Real meaning'],
            rows: [
              ['马马虎虎', 'mǎmahūhu', 'horse, horse, tiger, tiger', 'so-so; not bad, not great'],
              ['一心一意', 'yì xīn yí yì', 'one heart, one mind', 'wholeheartedly; full focus'],
            ],
          },
          {
            type: 'text',
            title: 'Reading a chengyu',
            body: [
              'Many idioms come in pairs of two-character halves, like 一心 + 一意. Read each half as a unit, then combine them.',
              'The literal translation can be silly. The real meaning is what matters: 马马虎虎 is not about horses at all.',
            ],
          },
          tricks('Learn chengyu in sets of two that share a pattern, like 一心一意 and 一步一步 (step by step). The repetition makes them stick.'),
          {
            type: 'pro',
            body: 'Chengyu are great in writing and in speeches. In casual chat, locals usually shorten them: 马马虎虎 alone is already enough.',
          },
        ],
      },
      {
        kicker: 'What locals say',
        title: 'Real things people say',
        blocks: [
          locals('"马马虎虎" is the everyday answer to "how is it?" Locals say it when they are being modest about their progress.'),
          locals('"一心一意" is often said when praising someone who works hard. It sounds respectful and warm.'),
          {
            type: 'vocab',
            words: [W15.mamahuhu, W15.yixinyiyi, W15.zhongwen, W15.zenmeyang, W15.nuli, W15.chengshi, W15.hai, W15.zai, W15.xuexi],
          },
          {
            type: 'dialogue',
            title: 'How is your Chinese?',
            lines: [
              { speaker: 'A', hanzi: '你的中文怎么样？', pinyin: 'Nǐ de Zhōngwén zěnmeyàng?', english: 'How is your Chinese?' },
              { speaker: 'B', hanzi: '马马虎虎，我还在努力。', pinyin: 'Mǎmahūhu, wǒ hái zài nǔlì.', english: 'So-so, I am still working hard.' },
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
            body: 'Think of a chengyu as a tiny story in four characters. 一心一意 is a person whose heart and mind point at the same thing. Remember the story, and the meaning follows.',
          },
          {
            type: 'taglish',
            body: 'Isipin ang bawat 成语 bilang maikling kwento. Kapag naalala mo ang kwento, madali mo nang maaalala ang kahulugan.',
          },
        ],
      },
      quiz('Idiom meaning', 'What does 马马虎虎 mean?', ['so-so; not bad, not great', 'very angry', 'very hungry'], 0, '马马虎虎 is the common way to say "so-so" or "not bad".'),
      quiz('Idiom meaning 2', 'What does 一心一意 mean?', ['wholeheartedly; with full focus', 'in a hurry', 'by accident'], 0, '一心一意 means giving your full heart and attention to something.'),
      speak([
        { prompt: 'Describe someone who studies with full focus.', hanzi: '他一心一意地学习。', pinyin: 'Tā yì xīn yí yì de xuéxí.', english: 'He studies wholeheartedly.' },
        { prompt: 'Say honesty matters.', hanzi: '我们要诚实。', pinyin: 'Wǒmen yào chéngshí.', english: 'We must be honest.' },
      ]),
    ],
  },

  {
    id: 'deep-texting',
    module: 'talk',
    title: 'Chatting like a local',
    subtitle: 'Hi, got it, haha and bye-bye in WeChat style',
    minutes: 10,
    goal: 'Write short, natural messages with the same phrases locals use on WeChat.',
    pages: [
      {
        kicker: 'Overview',
        title: 'Chat is its own language',
        blocks: [
          {
            type: 'text',
            title: 'How people actually write',
            body: [
              'Locals rarely write full polite sentences in chat. They use short phrases, sound words like 哈哈, and quick confirmations.',
              'Learning these lets you reply naturally, not like a textbook.',
            ],
          },
          {
            type: 'taglish',
            body: 'Sa chat, maikli ang mensahe ng mga Chinese. Ang 在吗 ay "nandiyan ka ba?", ang 收到 ay "natanggap ko na", at ang 哈哈 ay tawa lang. Hindi kailangang mahaba ang reply.',
          },
        ],
      },
      {
        kicker: 'Deep dive',
        title: 'The core chat phrases',
        blocks: [
          {
            type: 'table',
            head: ['Chat phrase', 'Literal', 'What it means in chat'],
            rows: [
              ['在吗？', 'are you there?', 'Hi, do you have a minute? (opening a chat)'],
              ['收到', 'received', 'Got it'],
              ['好的', 'good', 'Okay, sure'],
              ['哈哈', 'ha ha', 'Haha (laughing)'],
              ['拜拜', 'bye bye', 'Bye, see you'],
              ['麻烦你了', 'trouble for you', 'Thanks for the trouble (polite thanks)'],
            ],
          },
          tricks('Reply with a single word when the message is simple. 好的 or 收到 is perfectly fine and is what most people send.'),
          {
            type: 'pro',
            body: 'Do not overuse 哈哈 with serious news. If someone shares sad or important news, reply with 抱抱 (a hug) or 辛苦了 (hard work) instead.',
          },
        ],
      },
      {
        kicker: 'What locals say',
        title: 'Real things people say',
        blocks: [
          locals('"在吗？" is the classic opener. People expect you to answer with "在" and then ask what they need.'),
          locals('"哈哈，太好笑了" is how you say something was funny. You will see "哈哈哈" when it is really funny.'),
          {
            type: 'vocab',
            words: [W15.zaima, W15.haha, W15.shoudao, W15.haode, W15.baibai, W15.mafan, W15.huifu, W15.haoxiao, W15.tai],
          },
          {
            type: 'dialogue',
            title: 'A quick chat',
            lines: [
              { speaker: 'A', hanzi: '在吗？', pinyin: 'Zài ma?', english: 'Are you there?' },
              { speaker: 'B', hanzi: '在，有什么事？', pinyin: 'Zài, yǒu shénme shì?', english: 'Yes, what is up?' },
              { speaker: 'A', hanzi: '明天见，拜拜！', pinyin: 'Míngtiān jiàn, bàibai!', english: 'See you tomorrow, bye-bye!' },
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
            body: 'In chat, 在吗 opens the door, 收到 closes it, and 哈哈 keeps the mood light. Three words get you through most conversations.',
          },
          {
            type: 'taglish',
            body: 'Tandaan ang tatlong ito: 在吗 para magbukas, 收到 para kumpirmahin, at 哈哈 para sa tawa. Sapat na ito para makisabay sa chat.',
          },
        ],
      },
      quiz('Chat opener', 'What does 在吗 mean in chat?', ['are you there? (hi, quick question)', 'where are you', 'I am busy'], 0, '在吗 is how people open a chat before asking something.'),
      quiz('Haha', 'What does 哈哈 mean in chat?', ['laughing (haha)', 'crying', 'angry'], 0, '哈哈 is the sound of laughing in written chat.'),
      speak([
        { prompt: 'Confirm you got the message.', hanzi: '收到，谢谢。', pinyin: 'Shōudào, xièxie.', english: 'Got it, thanks.' },
        { prompt: 'Laugh at a joke.', hanzi: '哈哈，太好笑了。', pinyin: 'Hāhā, tài hǎoxiào le.', english: 'Haha, that is so funny.' },
      ]),
    ],
  },
];

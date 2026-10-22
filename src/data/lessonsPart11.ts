import type { Lesson, Page } from './types';
import { W12 } from './wordsPart12';

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

export const PART11_LESSONS: Lesson[] = [
  {
    id: 'phone',
    module: 'daily',
    title: 'Phone calls',
    subtitle: 'Answer, ask who it is, leave a message',
    minutes: 9,
    goal: 'Answer a phone call, ask for someone, and leave a short message.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Phone words',
        blocks: [
          { type: 'vocab', words: [W12.wei, W12.qingwen, W12.dadianhua, W12.dianhua, W12.dengyixia, W12.liuyan, W12.dacuole] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['喂，你好！', 'Hello! (answering the phone)'],
              ['请问，王经理在吗？', 'May I ask, is Manager Wang in?'],
              ['请等一下。', 'Please wait a moment.'],
              ['我可以留言吗？', 'Can I leave a message?'],
            ],
          },
          {
            type: 'taglish',
            body: 'Sa phone, 喂 ang "hello" na ginagamit mo kapag sumasagot. Kapag gusto mong magtanong nang magalang, sabihin ang 请问 muna bago ang tanong. Kung mali ang numero, sabihin lang 打错了, ang "wrong number".',
          },
          {
            type: 'pro',
            body: 'Sa China, madalas sinasagot ang tawag ng 喂 (wéi), hindi ng 你好. Kapag narinig mo ito, alam mong pwede ka nang magsalita.',
          },
          {
            type: 'remember',
            body: 'Ang 喂 ay binibigkas na parang "way". Sabihin ito pagkasagot mo ng tawag, at tandaan na ito ang "hello" sa phone.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'A phone call',
        blocks: [
          {
            type: 'dialogue',
            title: 'Calling the office',
            lines: [
              { speaker: 'A', hanzi: '喂，请问出什么事了？', pinyin: 'Wéi, qǐngwèn chū shénme shì le?', english: 'Hello, what can I help you with?' },
              { speaker: 'B', hanzi: '我找李老师。', pinyin: 'Wǒ zhǎo Lǐ lǎoshī.', english: 'I am looking for Teacher Li.' },
              { speaker: 'A', hanzi: '请等一下。', pinyin: 'Qǐng děng yíxià.', english: 'Please wait a moment.' },
            ],
          },
        ],
      },
      quiz('Leaving a message', 'What does 留言 mean?', ['to leave a message', 'to hang up', 'to answer the call'], 0, '留 is to leave or stay, and 言 is words. Together, 留言 is to leave words for someone.'),
      quiz('Wrong number', 'What do you say if you dialed the wrong number?', ['打错了', '请问', '等一下'], 0, '打错了 means you dialed wrong. 打 is to dial or hit, and 错 is wrong.'),
      speak([
        { prompt: 'Answer the phone.', hanzi: '喂，你好！', pinyin: 'Wéi, nǐ hǎo!', english: 'Hello!' },
        { prompt: 'Ask the caller to wait.', hanzi: '请等一下。', pinyin: 'Qǐng děng yíxià.', english: 'Please wait a moment.' },
      ]),
    ],
  },

  {
    id: 'emergency',
    module: 'daily',
    title: 'Emergencies',
    subtitle: 'Help, call the police, call an ambulance',
    minutes: 9,
    goal: 'Ask for help, say where it hurts, and call the police or an ambulance.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Emergency words',
        blocks: [
          { type: 'vocab', words: [W12.jiuming, W12.baojing, W12.jingcha, W12.jiuhuche, W12.jinji, W12.bushufu] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['救命！', 'Help!'],
              ['请帮我报警。', 'Please help me call the police.'],
              ['我朋友不舒服。', 'My friend is unwell.'],
              ['快叫救护车！', 'Quick, call an ambulance!'],
            ],
          },
          {
            type: 'taglish',
            body: 'Sa emergency, sigaw agad ng 救命 (help!) para may tumulong. Ang 报警 ay tumawag sa pulis at ang 救护车 ay ambulansya. Kapag hindi mo alam ang salita, ituro lang ang nasasaktan at sabihin ang 不舒服.',
          },
          {
            type: 'pro',
            body: 'Sa phone, sabihin muna ang 紧急 (urgent) at ang lugar bago ang detalye. Mas mabilis kumilos ang tumutulong kung malinaw ang lokasyon.',
          },
          {
            type: 'remember',
            body: '救命 ay literal na "save a life". Sigawan nang malakas at mabilis kapag kailangan mo ng tulong: jiù mìng!',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Calling for help',
        blocks: [
          {
            type: 'dialogue',
            title: 'Calling the emergency line',
            lines: [
              { speaker: 'A', hanzi: '喂，请问出什么事了？', pinyin: 'Wéi, qǐngwèn chū shénme shì le?', english: 'Hello, what happened?' },
              { speaker: 'B', hanzi: '我朋友不舒服，快叫救护车！', pinyin: 'Wǒ péngyou bù shūfu, kuài jiào jiùhùchē!', english: 'My friend is unwell, call an ambulance quickly!' },
            ],
          },
        ],
      },
      quiz('Help!', 'Which phrase means "Help!"?', ['救命', '报警', '紧急'], 0, '救命 means help, literally "save a life". 报警 means to call the police.'),
      quiz('Police', 'What does 报警 mean?', ['to call the police', 'to call an ambulance', 'to go to sleep'], 0, '报 is to report and 警 is police. Together, 报警 means to report to the police.'),
      speak([
        { prompt: 'Call for help.', hanzi: '救命！', pinyin: 'Jiùmìng!', english: 'Help!' },
        { prompt: 'Say your friend is unwell.', hanzi: '我朋友不舒服。', pinyin: 'Wǒ péngyou bù shūfu.', english: 'My friend is unwell.' },
      ]),
    ],
  },

  {
    id: 'compliments',
    module: 'talk',
    title: 'Giving and receiving compliments',
    subtitle: 'Praise someone and reply modestly',
    minutes: 8,
    goal: 'Compliment someone and answer a compliment the way Chinese speakers do.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Praise words',
        blocks: [
          { type: 'vocab', words: [W12.kuajiang, W12.piaoliang, W12.congming, W12.haokan, W12.zhongwen, W12.lihai] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['你的中文说得很好！', 'Your Chinese is very good!'],
              ['你很聪明。', 'You are very smart.'],
              ['哪里哪里，你太夸奖了。', 'Oh, no, you flatter me.'],
              ['你真厉害！', 'You are really amazing!'],
            ],
          },
          {
            type: 'taglish',
            body: 'Sa Chinese, madalas hindi tinatanggap agad ang papuri. Ang 哪里哪里 ay parang "naku, hindi naman" at ang 你太夸奖了 ay "sobra ka naman mag-compliment". Ito ang tamang sagot kapag pinuri ka.',
          },
          {
            type: 'pro',
            body: 'Sa tuwing papuri ang sasabihin mo sa mga matatanda, gamitin ang 您 (nín) para magalang. Sa mga kaibigan, 你 ang normal.',
          },
          {
            type: 'remember',
            body: '哪里 ang literal na "saan?", pero kapag inulit mo ito, ibig sabihin "naku, hindi naman". Isipin ito bilang reflex na pagpapakumbaba.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'A compliment exchange',
        blocks: [
          {
            type: 'dialogue',
            title: 'Praise and reply',
            lines: [
              { speaker: 'A', hanzi: '你的中文说得很好！', pinyin: 'Nǐ de Zhōngwén shuō de hěn hǎo!', english: 'Your Chinese is very good!' },
              { speaker: 'B', hanzi: '哪里哪里，你太夸奖了。', pinyin: 'Nǎli nǎli, nǐ tài kuājiǎng le.', english: 'Oh no, you are too kind.' },
            ],
          },
        ],
      },
      quiz('Modest reply', 'How do you reply modestly when someone praises you?', ['哪里哪里，你太夸奖了', '再见', '对不起'], 0, '哪里哪里 and 你太夸奖了 are the classic modest replies to a compliment.'),
      quiz('Impressive', 'What does 厉害 mean?', ['impressive; amazing', 'angry', 'expensive'], 0, '厉害 is what you say when someone is really good at something.'),
      speak([
        { prompt: 'Compliment someone\'s Chinese.', hanzi: '你的中文很好。', pinyin: 'Nǐ de Zhōngwén hěn hǎo.', english: 'Your Chinese is very good.' },
        { prompt: 'Compliment how someone looks.', hanzi: '你很漂亮。', pinyin: 'Nǐ hěn piàoliang.', english: 'You are very pretty.' },
      ]),
    ],
  },

  {
    id: 'cooking',
    module: 'daily',
    title: 'Cooking at home',
    subtitle: 'Cut, stir-fry, steam and boil',
    minutes: 9,
    goal: 'Talk about how you cook a meal and name the main cooking methods.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Cooking words',
        blocks: [
          { type: 'vocab', words: [W12.zuofan, W12.qie, W12.chao, W12.zheng, W12.zhu, W12.yan] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['你会做饭吗？', 'Can you cook?'],
              ['我先切菜，再炒菜。', 'First I cut the vegetables, then stir-fry them.'],
              ['不要放太多盐。', 'Do not add too much salt.'],
              ['我想蒸鱼。', 'I want to steam fish.'],
            ],
          },
          {
            type: 'taglish',
            body: 'Ang 做饭 ay "magluto". Ang 切 ay hiwa, 炒 ay gisa o stir-fry, 蒸 ay steam, at 煮 ay pakuluan. Kapag nagluluto ka, sabihin muna ang paraan, saka ang pagkain.',
          },
          {
            type: 'pro',
            body: 'Madalas ginagamit ang 炒 para sa gulay at karne. Ang 蒸 ay mas healthy dahil hindi kailangan ng maraming mantika.',
          },
          {
            type: 'remember',
            body: '炒 ay may 火 (apoy) sa gilid, kaya niluluto ito sa mainit na kawali. Para sa 蒸, isipin ang singaw na tumataas mula sa palayok.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'In the kitchen',
        blocks: [
          {
            type: 'dialogue',
            title: 'Cooking together',
            lines: [
              { speaker: 'A', hanzi: '你会做饭吗？', pinyin: 'Nǐ huì zuòfàn ma?', english: 'Can you cook?' },
              { speaker: 'B', hanzi: '会一点。我先切菜，再炒菜。', pinyin: 'Huì yìdiǎn. Wǒ xiān qiē cài, zài chǎo cài.', english: 'A little. I cut the vegetables first, then stir-fry them.' },
            ],
          },
        ],
      },
      quiz('Stir-fry', 'What does 炒 mean?', ['to stir-fry', 'to boil', 'to steam'], 0, '炒 is stir-frying in a hot wok.'),
      quiz('Steam', 'What does 蒸 mean?', ['to steam', 'to cut', 'salt'], 0, '蒸 is steaming, like steamed fish or buns.'),
      speak([
        { prompt: 'Say you can cook.', hanzi: '我会做饭。', pinyin: 'Wǒ huì zuòfàn.', english: 'I can cook.' },
        { prompt: 'Say what you cut first.', hanzi: '我先切菜。', pinyin: 'Wǒ xiān qiē cài.', english: 'I cut the vegetables first.' },
      ]),
    ],
  },

  {
    id: 'chores',
    module: 'daily',
    title: 'Household chores',
    subtitle: 'Laundry, dishes, mopping and cleaning up',
    minutes: 9,
    goal: 'Divide chores with someone and say what is clean or dirty.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Chore words',
        blocks: [
          { type: 'vocab', words: [W12.xiyifu, W12.dasao, W12.tuodi, W12.xishou, W12.lajitong, W12.ganjing, W12.zang, W12.jiawu] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['你今天做家务吗？', 'Are you doing chores today?'],
              ['我洗衣服，你拖地。', 'I do the laundry, you mop the floor.'],
              ['房间很干净。', 'The room is very clean.'],
              ['垃圾桶很脏。', 'The trash bin is very dirty.'],
            ],
          },
          {
            type: 'taglish',
            body: 'Ang 家务 ay gawaing bahay. Ang 洗衣服 ay labada, 拖地 ay mop, at 洗碗 ay hugas ng pinggan. Ang 干净 ay malinis at ang 脏 ay marumi.',
          },
          {
            type: 'pro',
            body: 'Sa bahay ng pamilyang Chinese, madalas hinahati ang chores. Kapag nagpasalamat ka sa paglilinis, sabihin ang 辛苦了 (xīnkǔ le), "salamat sa pagod mo".',
          },
          {
            type: 'remember',
            body: '干 ay tuyo at 净 ay malinis. Kaya ang 干净 ay "malinis at tuyo", at ang 脏 ay kabaligtaran nito.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Splitting chores',
        blocks: [
          {
            type: 'dialogue',
            title: 'Who does what',
            lines: [
              { speaker: 'A', hanzi: '你今天做家务吗？', pinyin: 'Nǐ jīntiān zuò jiāwù ma?', english: 'Are you doing chores today?' },
              { speaker: 'B', hanzi: '我洗衣服，你拖地。', pinyin: 'Wǒ xǐ yīfu, nǐ tuō dì.', english: 'I do the laundry, you mop the floor.' },
            ],
          },
        ],
      },
      quiz('Dirty', 'What does 脏 mean?', ['dirty', 'clean', 'heavy'], 0, '脏 means dirty. Its opposite is 干净, clean.'),
      quiz('Dishes', 'What does 洗碗 mean?', ['to wash the dishes', 'to wash clothes', 'to cook dinner'], 0, '洗 is to wash and 碗 is a bowl. 洗碗 is washing the dishes.'),
      speak([
        { prompt: 'Say the room is clean.', hanzi: '房间很干净。', pinyin: 'Fángjiān hěn gānjìng.', english: 'The room is very clean.' },
        { prompt: 'Ask someone to take out the trash.', hanzi: '请把垃圾拿出去。', pinyin: 'Qǐng bǎ lājī ná chūqù.', english: 'Please take the trash out.' },
      ]),
    ],
  },

  {
    id: 'cinema',
    module: 'daily',
    title: 'Going to the cinema',
    subtitle: 'Pick a movie, a seat and snacks',
    minutes: 9,
    goal: 'Invite someone to a movie, ask the show time and order snacks.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Cinema words',
        blocks: [
          { type: 'vocab', words: [W12.dianying, W12.dianyingyuan, W12.zuowei, W12.baomihua, W12.zimu, W12.kaiyan, W12.zhongjian, W12.kan] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['我们去看电影，好不好？', 'Shall we go watch a movie?'],
              ['几点开演？', 'What time does the show start?'],
              ['我们坐中间吧。', 'Let us sit in the middle.'],
              ['我要一份爆米花。', 'I want one popcorn.'],
            ],
          },
          {
            type: 'taglish',
            body: 'Ang 电影院 ay sinehan. Ang 开演 ay magsisimula na ang palabas, at ang 字幕 ay subtitles. Kapag bumili ka, sabihin ang gusto mong upuan gamit ang 中间 (gitna) o 后面 (likod).',
          },
          {
            type: 'pro',
            body: 'Sa China, pwedeng may English subtitles o Chinese lang ang pelikula. Itanong muna ang 有没有字幕? para malaman mo kung maiintindihan mo ang palabas.',
          },
          {
            type: 'remember',
            body: '电影 ay "electric shadow". Isipin ang 影 bilang anino sa screen, at ang 电 bilang kuryente ng projector.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Planning a movie',
        blocks: [
          {
            type: 'dialogue',
            title: 'Movie night',
            lines: [
              { speaker: 'A', hanzi: '我们去看电影，好不好？', pinyin: 'Wǒmen qù kàn diànyǐng, hǎo bu hǎo?', english: 'Shall we go watch a movie?' },
              { speaker: 'B', hanzi: '好啊！几点开演？', pinyin: 'Hǎo a! Jǐ diǎn kāiyǎn?', english: 'Sure! What time does it start?' },
            ],
          },
        ],
      },
      quiz('Show time', 'What does 开演 mean?', ['the show starts', 'the show ends', 'the seat is taken'], 0, '开 is to open or start, and 演 is to perform. 开演 is when the show begins.'),
      quiz('Subtitles', 'What does 字幕 mean?', ['subtitles', 'popcorn', 'seat'], 0, '字 is character or word, and 幕 is a screen. Together, 字幕 is subtitles on the screen.'),
      speak([
        { prompt: 'Suggest a movie.', hanzi: '我们去看电影，好不好？', pinyin: 'Wǒmen qù kàn diànyǐng, hǎo bu hǎo?', english: 'Shall we go watch a movie?' },
        { prompt: 'Order popcorn.', hanzi: '我要一份爆米花。', pinyin: 'Wǒ yào yí fèn bàomǐhuā.', english: 'I want one popcorn.' },
      ]),
    ],
  },

  {
    id: 'apartment',
    module: 'daily',
    title: 'Renting a flat',
    subtitle: 'Monthly rent, deposit, and what is nearby',
    minutes: 10,
    goal: 'Ask about rent, the deposit and the neighbourhood when looking for a flat.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Renting words',
        blocks: [
          { type: 'vocab', words: [W12.zufang, W12.fangzi, W12.yuezu, W12.yajin, W12.woshi, W12.fujin, W12.ditiezhan] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['这个房子月租多少钱？', 'How much is the monthly rent for this flat?'],
              ['押金是多少？', 'How much is the deposit?'],
              ['附近有地铁站吗？', 'Is there a metro station nearby?'],
              ['卧室有几间？', 'How many bedrooms are there?'],
            ],
          },
          {
            type: 'taglish',
            body: 'Ang 月租 ay buwanang upa at ang 押金 ay deposit na ibinabalik kapag umalis ka. Ang 附近 ay malapit, kaya kapag tinanong mo ang 附近有地铁站吗, gusto mong malaman kung malapit ang sakayan.',
          },
          {
            type: 'pro',
            body: 'Bago pumirma, itanong kung kasama ang bayarin sa tubig at kuryente, at alamin kung kailan ibabalik ang 押金.',
          },
          {
            type: 'remember',
            body: '押金 ay may 金 (ginto) sa gilid, parang pera na iniingatan mo. 房子 ay parang bahay na may bubong at pader.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Asking about a flat',
        blocks: [
          {
            type: 'dialogue',
            title: 'Renting a flat',
            lines: [
              { speaker: 'A', hanzi: '这个房子月租多少钱？', pinyin: 'Zhège fángzi yuèzū duōshao qián?', english: 'How much is the monthly rent for this flat?' },
              { speaker: 'B', hanzi: '一个月三千块，押金一个月。', pinyin: 'Yí ge yuè sānqiān kuài, yājīn yí ge yuè.', english: 'Three thousand a month, and a one-month deposit.' },
            ],
          },
        ],
      },
      quiz('Deposit', 'What does 押金 mean?', ['deposit', 'monthly rent', 'bedroom'], 0, '押 is to pledge and 金 is money. 押金 is the deposit you pay upfront.'),
      quiz('Monthly rent', 'What does 月租 mean?', ['monthly rent', 'month', 'moon'], 0, '月 is month or moon, and 租 is rent. 月租 is the rent for one month.'),
      speak([
        { prompt: 'Ask if the flat is big.', hanzi: '房子很大吗？', pinyin: 'Fángzi hěn dà ma?', english: 'Is the flat very big?' },
        { prompt: 'Ask about the metro.', hanzi: '附近有地铁站吗？', pinyin: 'Fùjìn yǒu dìtiězhàn ma?', english: 'Is there a metro station nearby?' },
      ]),
    ],
  },

  {
    id: 'gym',
    module: 'daily',
    title: 'At the gym',
    subtitle: 'Join, work out, run and swim',
    minutes: 9,
    goal: 'Ask about a gym membership and say how often you exercise.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Gym words',
        blocks: [
          { type: 'vocab', words: [W12.jianshenfang, W12.duanlian, W12.paobu, W12.youyong, W12.juzhong, W12.jiaolian, W12.huiyuanka, W12.lei] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['你每天锻炼吗？', 'Do you exercise every day?'],
              ['我每周去健身房三次。', 'I go to the gym three times a week.'],
              ['我想办一张会员卡。', 'I want to get a membership card.'],
              ['我跑步很累。', 'Running makes me very tired.'],
            ],
          },
          {
            type: 'taglish',
            body: 'Ang 健身房 ay gym at ang 锻炼 ay mag-exercise. Ang 教练 ay coach, at ang 会员卡 ay membership card. Kapag nag-jogging ka, sabihin ang 我跑步, at ang 累 ay pagod.',
          },
          {
            type: 'pro',
            body: 'Sa maraming gym sa China, may 教练 na tutulong sa iyo sa unang linggo. Itanong kung may libreng sesyon bago ka bumili ng 会员卡.',
          },
          {
            type: 'remember',
            body: '锻 ay pandayin ang metal at 炼 ay pinuhin. Kaya ang 锻炼 ay "hubugin at palakasin ang katawan" sa pamamagitan ng paulit-ulit na pagsasanay.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Starting a routine',
        blocks: [
          {
            type: 'dialogue',
            title: 'Gym talk',
            lines: [
              { speaker: 'A', hanzi: '你每天锻炼吗？', pinyin: 'Nǐ měitiān duànliàn ma?', english: 'Do you exercise every day?' },
              { speaker: 'B', hanzi: '我每周去健身房三次。', pinyin: 'Wǒ měi zhōu qù jiànshēnfáng sān cì.', english: 'I go to the gym three times a week.' },
            ],
          },
        ],
      },
      quiz('Exercise', 'What does 锻炼 mean?', ['to exercise', 'to sleep', 'to cook'], 0, '锻炼 is to train or exercise your body.'),
      quiz('Coach', 'What does 教练 mean?', ['coach', 'doctor', 'driver'], 0, '教 is to teach and 练 is to practise. A 教练 teaches you to practise.'),
      speak([
        { prompt: 'Ask about a membership.', hanzi: '我想办一张会员卡。', pinyin: 'Wǒ xiǎng bàn yì zhāng huìyuánkǎ.', english: 'I want to get a membership card.' },
        { prompt: 'Say you are tired after running.', hanzi: '我跑步很累。', pinyin: 'Wǒ pǎobù hěn lèi.', english: 'Running makes me very tired.' },
      ]),
    ],
  },
];

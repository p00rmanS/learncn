import type { Lesson, Page } from './types';
import { W13 } from './wordsPart13';
import { W14 } from './wordsPart14';

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

export const PART13_LESSONS: Lesson[] = [
  {
    id: 'dentist',
    module: 'daily',
    title: 'At the dentist',
    subtitle: 'Toothache, brushing and open wide',
    minutes: 8,
    goal: 'Describe a toothache, follow the dentist\'s instructions and talk about brushing.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Dentist words',
        blocks: [
          { type: 'vocab', words: [W14.kanyayi, W14.ya, W14.yateng, W14.shuaya, W14.zhuya, W14.bingli, W14.zui] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['我的牙很疼。', 'My tooth really hurts.'],
              ['张开嘴，让我看看。', 'Open your mouth, let me look.'],
              ['我想看牙医。', 'I want to see the dentist.'],
              ['我每天刷牙两次。', 'I brush my teeth twice a day.'],
            ],
          },
          {
            type: 'taglish',
            body: 'Ang 看牙医 ay magpatingin sa dentista. Ang 牙疼 ay sakit ng ngipin, at ang 蛀牙 ay cavity. Kapag tinawag ka ng dentista, sundin ang 张开嘴 (buksan ang bibig).',
          },
          {
            type: 'pro',
            body: 'Sa China, maraming dentista ang nagbibigay ng 病历 (medical record) na kailangang dalhin sa susunod na visit. Itanong kung may kailangan kang dalhin bago pumunta.',
          },
          {
            type: 'remember',
            body: '看牙医: 看 ay tingnan, 牙 ay ngipin, at 医 ay doktor. Ang 看牙医 ay "tingnan ng doktor ang ngipin".',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'At the clinic',
        blocks: [
          {
            type: 'dialogue',
            title: 'The toothache',
            lines: [
              { speaker: 'A', hanzi: '我的牙很疼。', pinyin: 'Wǒ de yá hěn téng.', english: 'My tooth really hurts.' },
              { speaker: 'B', hanzi: '张开嘴，让我看看。', pinyin: 'Zhāng kāi zuǐ, ràng wǒ kànkan.', english: 'Open your mouth, let me take a look.' },
            ],
          },
        ],
      },
      quiz('Toothache', 'What does 牙疼 mean?', ['toothache', 'headache', 'stomachache'], 0, '牙 is tooth and 疼 is pain. 牙疼 is a toothache.'),
      quiz('Open', 'What does 张开嘴 mean?', ['open your mouth', 'close your eyes', 'raise your hand'], 0, '张开 is to open and 嘴 is mouth.'),
      speak([
        { prompt: 'Say you want to see the dentist.', hanzi: '我想看牙医。', pinyin: 'Wǒ xiǎng kàn yáyī.', english: 'I want to see the dentist.' },
        { prompt: 'Say how often you brush.', hanzi: '我每天刷牙两次。', pinyin: 'Wǒ měitiān shuāyá liǎng cì.', english: 'I brush my teeth twice a day.' },
      ]),
    ],
  },

  {
    id: 'carrent',
    module: 'daily',
    title: 'Renting a car',
    subtitle: 'Licence, insurance and a full tank',
    minutes: 9,
    goal: 'Rent a car, show your licence and ask what insurance covers.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Car rental words',
        blocks: [
          { type: 'vocab', words: [W14.zuche, W14.jiazhao, W14.jiashi, W14.baoxian, W14.youxiang, W14.baokuo, W14.tingche, W14.liang] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['我想租一辆车，三天。', 'I want to rent a car for three days.'],
              ['请给我看一下你的驾照。', 'Please show me your driving licence.'],
              ['保险包括吗？', 'Is insurance included?'],
              ['油箱要加满。', 'The fuel tank must be filled up.'],
            ],
          },
          {
            type: 'taglish',
            body: 'Ang 租车 ay magrenta ng sasakyan, at kailangan ang 驾照 (driving licence). Ang 保险 ay insurance, kaya itanong kung ano ang 包括. Ang 油箱要加满 ay ibalik na puno ang gasolina.',
          },
          {
            type: 'pro',
            body: 'Bago pumirma, kuhanan ng litrato ang sasakyan mula sa lahat ng anggulo. Kapag may gasgas na hindi nakasulat sa kontrata, ituro agad sa staff.',
          },
          {
            type: 'remember',
            body: '驾照: 驾 ay magmaneho at 照 ay lisensya o larawan. Ang 驾照 ay "lisensya sa pagmamaneho".',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'At the rental desk',
        blocks: [
          {
            type: 'dialogue',
            title: 'Renting for three days',
            lines: [
              { speaker: 'A', hanzi: '我想租一辆车，三天。', pinyin: 'Wǒ xiǎng zū yí liàng chē, sān tiān.', english: 'I want to rent a car for three days.' },
              { speaker: 'B', hanzi: '请给我看一下你的驾照。', pinyin: 'Qǐng gěi wǒ kàn yíxià nǐ de jiàzhào.', english: 'Please show me your driving licence.' },
            ],
          },
        ],
      },
      quiz('Licence', 'What does 驾照 mean?', ['driving licence', 'passport', 'visa'], 0, '驾 is to drive and 照 is licence. 驾照 is a driving licence.'),
      quiz('Insurance', 'What does 保险 mean?', ['insurance', 'cash', 'map'], 0, '保险 means insurance.'),
      speak([
        { prompt: 'Ask if insurance is included.', hanzi: '保险包括吗？', pinyin: 'Bǎoxiǎn bāokuò ma?', english: 'Is insurance included?' },
        { prompt: 'Say the tank must be full.', hanzi: '油箱要加满。', pinyin: 'Yóuxiāng yào jiā mǎn.', english: 'The fuel tank must be filled up.' },
      ]),
    ],
  },

  {
    id: 'laundry',
    module: 'daily',
    title: 'At the laundry',
    subtitle: 'Dry cleaning, ironing and collecting your clothes',
    minutes: 8,
    goal: 'Drop off clothes, ask for ironing and collect them with a receipt.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Laundry words',
        blocks: [
          { type: 'vocab', words: [W14.xiyidian, W14.ganxi, W14.yuntang, W14.yifu, W14.chenshan, W14.shouju, W14.qu] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['这件衬衫可以洗吗？', 'Can this shirt be washed?'],
              ['可以，明天下午来取。', 'Yes, come back tomorrow afternoon to pick it up.'],
              ['请帮我熨一下。', 'Please iron this for me.'],
              ['这是收据。', 'This is the receipt.'],
            ],
          },
          {
            type: 'taglish',
            body: 'Ang 洗衣店 ay laundry shop. Ang 干洗 ay dry cleaning at ang 熨烫 ay plantsa. Kapag nagdrop-off ka, itanong kung kailan ang 取 (pick-up), at itago ang 收据 para makuha ang damit.',
          },
          {
            type: 'pro',
            body: 'Basahin ang care label sa loob ng damit. Kung may nakasulat na "干洗", huwag itong labhan sa washing machine.',
          },
          {
            type: 'remember',
            body: '洗衣店: 洗 ay hugas, 衣 ay damit, at 店 ay tindahan. Ang 洗衣店 ay "tindahan ng paghuhugas ng damit".',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Dropping off clothes',
        blocks: [
          {
            type: 'dialogue',
            title: 'The shirt',
            lines: [
              { speaker: 'A', hanzi: '这件衬衫可以洗吗？', pinyin: 'Zhè jiàn chènshān kěyǐ xǐ ma?', english: 'Can this shirt be washed?' },
              { speaker: 'B', hanzi: '可以，明天下午来取。', pinyin: 'Kěyǐ, míngtiān xiàwǔ lái qǔ.', english: 'Yes, come back tomorrow afternoon to pick it up.' },
            ],
          },
        ],
      },
      quiz('Dry cleaning', 'What does 干洗 mean?', ['dry cleaning', 'ironing', 'washing by hand'], 0, '干 is dry and 洗 is wash. 干洗 is dry cleaning.'),
      quiz('Receipt', 'What does 收据 mean?', ['receipt', 'ticket', 'coupon'], 0, '收 is to receive and 据 is evidence. 收据 is a receipt.'),
      speak([
        { prompt: 'Ask for ironing.', hanzi: '请帮我熨一下。', pinyin: 'Qǐng bāng wǒ yùn yíxià.', english: 'Please iron this for me.' },
        { prompt: 'Point to the receipt.', hanzi: '这是收据。', pinyin: 'Zhè shì shōujù.', english: 'This is the receipt.' },
      ]),
    ],
  },

  {
    id: 'concert',
    module: 'talk',
    title: 'Going to a concert',
    subtitle: 'Music, singers, tickets and instruments',
    minutes: 8,
    goal: 'Invite someone to a concert, ask about tickets and say what music you like.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Concert words',
        blocks: [
          { type: 'vocab', words: [W14.yinyuehui, W14.yanchang, W14.piao, W14.geshou, W14.gangqin, W14.xiaotiqin, W14.xihuan, W14.yinyue] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['周末你有没有空？我们去听音乐会吧。', 'Are you free this weekend? Let us go to a concert.'],
              ['票多少钱？', 'How much is a ticket?'],
              ['我喜欢钢琴。', 'I like the piano.'],
              ['这个歌手很厉害。', 'This singer is really amazing.'],
            ],
          },
          {
            type: 'taglish',
            body: 'Ang 音乐会 ay concert at ang 演唱会 ay pop concert. Ang 歌手 ay singer, at ang 钢琴 at 小提琴 ay instrumento. Kapag bumibili ng 票, itanong muna ang presyo bago magbayad.',
          },
          {
            type: 'pro',
            body: 'Maraming concert sa China ang bumibili ng tiket sa app. Bumili nang maaga dahil madalas nauubos ang 票.',
          },
          {
            type: 'remember',
            body: '音乐会: 音乐 ay musika at 会 ay pagtitipon. Ang 音乐会 ay "pagtitipon para sa musika".',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Inviting a friend',
        blocks: [
          {
            type: 'dialogue',
            title: 'Concert plans',
            lines: [
              { speaker: 'A', hanzi: '周末你有没有空？我们去听音乐会吧。', pinyin: 'Zhōumò nǐ yǒu méiyǒu kòng? Wǒmen qù tīng yīnyuèhuì ba.', english: 'Are you free this weekend? Let us go to a concert.' },
              { speaker: 'B', hanzi: '好啊，我很喜欢音乐。', pinyin: 'Hǎo a, wǒ hěn xǐhuan yīnyuè.', english: 'Sure, I really like music.' },
            ],
          },
        ],
      },
      quiz('Concert', 'What does 音乐会 mean?', ['concert', 'music class', 'music shop'], 0, '音乐 is music and 会 is a gathering. 音乐会 is a concert.'),
      quiz('Singer', 'What does 歌手 mean?', ['singer', 'dancer', 'actor'], 0, '歌 is song and 手 is person. 歌手 is a singer.'),
      speak([
        { prompt: 'Ask how much the ticket is.', hanzi: '票多少钱？', pinyin: 'Piào duōshao qián?', english: 'How much is a ticket?' },
        { prompt: 'Say what instrument you like.', hanzi: '我喜欢钢琴。', pinyin: 'Wǒ xǐhuan gāngqín.', english: 'I like the piano.' },
      ]),
    ],
  },

  {
    id: 'apology',
    module: 'talk',
    title: 'Saying sorry',
    subtitle: 'Apologise, accept it and make it right',
    minutes: 7,
    goal: 'Apologise sincerely, accept an apology and ask for forgiveness.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Apology words',
        blocks: [
          { type: 'vocab', words: [W14.duibuqi, W14.meiguanxi, W14.daoqian, W14.yuanliang, W14.zeren, W14.cuo] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['对不起，我迟到了。', 'Sorry, I am late.'],
              ['没关系，你下次要准时。', "It's okay, be on time next time."],
              ['对不起，是我的错。', 'Sorry, it was my fault.'],
              ['请原谅我。', 'Please forgive me.'],
            ],
          },
          {
            type: 'taglish',
            body: 'Ang 对不起 ang pangunahing "sorry". Ang 没关系 ay "okay lang", ang sagot kapag tinanggap na ang paghingi ng tawad. Kapag may pagkakamali ka, sabihin ang 是我的错 para tanggapin ang responsibilidad.',
          },
          {
            type: 'pro',
            body: 'Sa Chinese, madalas sinasabi ang 没关系 bilang "okay lang" kahit may kaunting abala. Kung seryoso ang pagkakamali, sabihin ang 请原谅我 at magbigay ng paliwanag.',
          },
          {
            type: 'remember',
            body: '对不起: karaniwang "sorry". Ang 没关系 ay "walang problema". Iugnay ang dalawa: kapag sorry ka, sagot ay 没关系.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Being late',
        blocks: [
          {
            type: 'dialogue',
            title: 'Late again',
            lines: [
              { speaker: 'A', hanzi: '对不起，我迟到了。', pinyin: 'Duìbuqǐ, wǒ chídào le.', english: 'Sorry, I am late.' },
              { speaker: 'B', hanzi: '没关系，你下次要准时。', pinyin: 'Méi guānxi, nǐ xià cì yào zhǔnshí.', english: "It's okay, be on time next time." },
            ],
          },
        ],
      },
      quiz('Okay', 'What does 没关系 mean?', ['it does not matter; that is okay', 'I do not know', 'see you later'], 0, '没关系 is the common reply when someone apologises.'),
      quiz('Forgive', 'What does 原谅 mean?', ['to forgive', 'to apologise', 'to thank'], 0, '原谅 means to forgive someone.'),
      speak([
        { prompt: 'Take the blame.', hanzi: '对不起，是我的错。', pinyin: 'Duìbuqǐ, shì wǒ de cuò.', english: 'Sorry, it was my fault.' },
        { prompt: 'Ask for forgiveness.', hanzi: '请原谅我。', pinyin: 'Qǐng yuánliàng wǒ.', english: 'Please forgive me.' },
      ]),
    ],
  },

  {
    id: 'exam',
    module: 'daily',
    title: 'Preparing for an exam',
    subtitle: 'Review, nerves, results and passing',
    minutes: 8,
    goal: 'Talk about exam nerves, revision and when results come out.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Exam words',
        blocks: [
          { type: 'vocab', words: [W14.kaoshi, W14.fuxi, W14.jinzhang, W14.tongguo, W14.chengji, W14.yiding] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['你紧张吗？明天考试。', 'Are you nervous? The exam is tomorrow.'],
              ['有点，我复习了很久。', 'A little. I have been revising for a long time.'],
              ['我一定会通过。', 'I will definitely pass.'],
              ['成绩什么时候出来？', 'When will the results come out?'],
            ],
          },
          {
            type: 'taglish',
            body: 'Ang 考试 ay exam at ang 复习 ay pag-review. Kapag kinakabahan ka, sabihin ang 紧张. Ang 通过 ay pumasa, at ang 成绩 ay grade o resulta.',
          },
          {
            type: 'pro',
            body: 'Sa Chinese exams, madalas may malalaking mock test bago ang totoong araw. Gamitin ang mock test para malaman ang kulang sa iyong pagrerebisa.',
          },
          {
            type: 'remember',
            body: '复习: 复 ay ulit at 习 ay pag-aaral. Ang 复习 ay "pag-aaral ulit".',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Before the test',
        blocks: [
          {
            type: 'dialogue',
            title: 'Nerves before exam',
            lines: [
              { speaker: 'A', hanzi: '你紧张吗？明天考试。', pinyin: 'Nǐ jǐnzhāng ma? Míngtiān kǎoshì.', english: 'Are you nervous? The exam is tomorrow.' },
              { speaker: 'B', hanzi: '有点，我复习了很久。', pinyin: 'Yǒudiǎn, wǒ fùxí le hěn jiǔ.', english: 'A little. I have been revising for a long time.' },
            ],
          },
        ],
      },
      quiz('Review', 'What does 复习 mean?', ['to review', 'to cheat', 'to rest'], 0, '复习 means to review or revise what you learned.'),
      quiz('Nervous', 'What does 紧张 mean?', ['nervous', 'relaxed', 'bored'], 0, '紧张 means nervous or tense.'),
      speak([
        { prompt: 'Say you will pass.', hanzi: '我一定会通过。', pinyin: 'Wǒ yídìng huì tōngguò.', english: 'I will definitely pass.' },
        { prompt: 'Ask when results come out.', hanzi: '成绩什么时候出来？', pinyin: 'Chéngjì shénme shíhou chūlái?', english: 'When will the results come out?' },
      ]),
    ],
  },

  {
    id: 'adoptpet',
    module: 'daily',
    title: 'Adopting a pet',
    subtitle: 'Cats, dogs, walks and food',
    minutes: 8,
    goal: 'Talk about pets, say you want to adopt one and describe how you care for it.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Pet words',
        blocks: [
          { type: 'vocab', words: [W14.lingyang, W14.chongwu, W14.mao, W14.gou, W14.siyang, W14.liugou, W14.keai] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['你养宠物吗？', 'Do you keep pets?'],
              ['我想领养一只猫。', 'I want to adopt a cat.'],
              ['它很可爱。', 'It is very cute.'],
              ['我要遛狗。', 'I need to walk the dog.'],
            ],
          },
          {
            type: 'taglish',
            body: 'Ang 领养 ay mag-ampon ng hayop, at ang 宠物 ay alagang hayop. Ang 饲养 ay pag-aalaga, at ang 遛狗 ay paglalakad ng aso. Gamitin ang 它 para sa hayop, at ang 可爱 ay cute.',
          },
          {
            type: 'pro',
            body: 'Maraming shelter ang nagbibigay ng pagsusuri sa kalusugan at pagbabakuna bago ibigay ang hayop. Itanong kung kasama ito sa adoption.',
          },
          {
            type: 'remember',
            body: '领养: 领 ay tumanggap at 养 ay mag-alaga. Ang 领养 ay "tanggapin at alagaan".',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'At the shelter',
        blocks: [
          {
            type: 'dialogue',
            title: 'Do you have a pet?',
            lines: [
              { speaker: 'A', hanzi: '你养宠物吗？', pinyin: 'Nǐ yǎng chǒngwù ma?', english: 'Do you keep pets?' },
              { speaker: 'B', hanzi: '我想领养一只猫。', pinyin: 'Wǒ xiǎng lǐngyǎng yì zhī māo.', english: 'I want to adopt a cat.' },
            ],
          },
        ],
      },
      quiz('Adopt', 'What does 领养 mean?', ['to adopt', 'to buy', 'to lose'], 0, '领养 means to adopt (an animal or a child).'),
      quiz('Walk the dog', 'What does 遛狗 mean?', ['to walk a dog', 'to feed a dog', 'to wash a dog'], 0, '遛 is to take for a walk and 狗 is dog.'),
      speak([
        { prompt: 'Say the pet is cute.', hanzi: '它很可爱。', pinyin: 'Tā hěn kě ài.', english: 'It is very cute.' },
        { prompt: 'Say you need to walk the dog.', hanzi: '我要遛狗。', pinyin: 'Wǒ yào liù gǒu.', english: 'I need to walk the dog.' },
      ]),
    ],
  },

  {
    id: 'match',
    module: 'talk',
    title: 'Watching a football match',
    subtitle: 'Scores, wins, losses and cheering',
    minutes: 7,
    goal: 'Talk about a football match, say who won and cheer for the team.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Match words',
        blocks: [
          { type: 'vocab', words: [W14.bisai, W14.zuqiu, W14.jinqiu, W14.ying, W14.shu, W14.qiumi, W13.jiayou] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['今天有足球比赛，你看吗？', 'There is a football match today, will you watch?'],
              ['我们赢了！', 'We won!'],
              ['他进了一个球。', 'He scored a goal.'],
              ['加油！', 'Come on! Go for it!'],
            ],
          },
          {
            type: 'taglish',
            body: 'Ang 比赛 ay match o competition. Ang 进球 ay makapuntos, at ang 赢 ay manalo. Kapag natalo, ang 输 ang salita. Ang 球迷 ay fan ng isang sports team.',
          },
          {
            type: 'pro',
            body: 'Sa panonood ng match sa China, sinasabing 加油 kahit sino ang kalaban. Ito ang pangkaraniwang cheer ng mga fans.',
          },
          {
            type: 'remember',
            body: '比赛: 比 ay paghambing at 赛 ay kompetisyon. Ang 比赛 ay "paghahambing ng galing".',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Match night',
        blocks: [
          {
            type: 'dialogue',
            title: 'Watching together',
            lines: [
              { speaker: 'A', hanzi: '今天有足球比赛，你看吗？', pinyin: 'Jīntiān yǒu zúqiú bǐsài, nǐ kàn ma?', english: 'There is a football match today, will you watch?' },
              { speaker: 'B', hanzi: '看！我是球迷。', pinyin: 'Kàn! Wǒ shì qiúmí.', english: 'Yes! I am a fan.' },
            ],
          },
        ],
      },
      quiz('Win', 'What does 赢 mean?', ['to win', 'to lose', 'to draw'], 0, '赢 means to win. The opposite is 输, to lose.'),
      quiz('Fan', 'What does 球迷 mean?', ['fan (of a sport)', 'referee', 'coach'], 0, '球 is ball and 迷 is fan. 球迷 is a sports fan.'),
      speak([
        { prompt: 'Celebrate a win.', hanzi: '我们赢了！', pinyin: 'Wǒmen yíng le!', english: 'We won!' },
        { prompt: 'Describe a goal.', hanzi: '他进了一个球。', pinyin: 'Tā jìn le yí ge qiú.', english: 'He scored a goal.' },
      ]),
    ],
  },
];

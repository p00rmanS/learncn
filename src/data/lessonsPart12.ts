import type { Lesson, Page } from './types';
import { W13 } from './wordsPart13';

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

export const PART12_LESSONS: Lesson[] = [
  {
    id: 'birthday',
    module: 'daily',
    title: 'Birthdays',
    subtitle: 'Wish someone happy birthday, give a gift, make a wish',
    minutes: 8,
    goal: 'Wish someone a happy birthday, thank them for a gift and talk about the cake.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Birthday words',
        blocks: [
          { type: 'vocab', words: [W13.shengri, W13.kuaile, W13.dangao, W13.liwu, W13.xuyuan, W13.lazhu, W13.zhufu] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['生日快乐！', 'Happy birthday!'],
              ['谢谢你的礼物。', 'Thank you for the gift.'],
              ['许个愿吧。', 'Make a wish.'],
              ['吹蜡烛！', 'Blow out the candles!'],
            ],
          },
          {
            type: 'taglish',
            body: 'Ang 生日快乐 ang pinakasimpleng bati sa kaarawan. Kapag may binigay na regalo, sabihin ang 谢谢你的礼物. Bago hipan ang kandila, sabihin ang 许个愿吧 para magkaroon ng wish.',
          },
          {
            type: 'pro',
            body: 'Sa China, madalas may 长寿面 (pansit para sa mahabang buhay) sa kaarawan. Kapag may nag-imbita sa iyo, sabihin lang ang 谢谢 at isama ang regalo.',
          },
          {
            type: 'remember',
            body: '生日 ay literal na "birth day": 生 ay ipanganak at 日 ay araw. Isipin ang araw na ipinanganak ka.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Happy birthday',
        blocks: [
          {
            type: 'dialogue',
            title: 'A birthday wish',
            lines: [
              { speaker: 'A', hanzi: '今天是你的生日吧？', pinyin: 'Jīntiān shì nǐ de shēngrì ba?', english: 'Today is your birthday, right?' },
              { speaker: 'B', hanzi: '对，谢谢你！', pinyin: 'Duì, xièxie nǐ!', english: 'Yes, thank you!' },
              { speaker: 'A', hanzi: '生日快乐！', pinyin: 'Shēngrì kuàilè!', english: 'Happy birthday!' },
            ],
          },
        ],
      },
      quiz('Birthday', 'What does 生日 mean?', ['birthday', 'holiday', 'party'], 0, '生日 is birthday. 生 is to be born and 日 is day.'),
      quiz('Wish', 'What does 许愿 mean?', ['to make a wish', 'to say goodbye', 'to lose weight'], 0, '许 is to promise or grant, and 愿 is wish. 许愿 is making a wish.'),
      speak([
        { prompt: 'Wish a friend happy birthday.', hanzi: '生日快乐！', pinyin: 'Shēngrì kuàilè!', english: 'Happy birthday!' },
        { prompt: 'Thank someone for a gift.', hanzi: '谢谢你的礼物。', pinyin: 'Xièxie nǐ de lǐwù.', english: 'Thank you for the gift.' },
      ]),
    ],
  },

  {
    id: 'leave',
    module: 'work',
    title: 'Asking for sick leave',
    subtitle: 'Tell your boss you are sick and need a day off',
    minutes: 9,
    goal: 'Tell someone you are ill, ask for leave and say you will rest.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Sick-leave words',
        blocks: [
          { type: 'vocab', words: [W13.qingjia, W13.shengbing, W13.fashao, W13.xiuxi, W13.gongzuo, W13.mingtian, W13.bangongshi] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['你怎么了？', 'What is wrong?'],
              ['我发烧了，想请假。', 'I have a fever and want to ask for leave.'],
              ['我明天不能来上班。', 'I cannot come to work tomorrow.'],
              ['请好好休息。', 'Please rest well.'],
            ],
          },
          {
            type: 'taglish',
            body: 'Ang 请假 ay humingi ng leave, at ang 发烧 ay lagnat. Sa trabaho, sabihin muna ang dahilan, saka ang araw na hindi ka papasok. Ang 好好休息 ay "magpahinga ka nang mabuti", parang sinasabi ng boss na magpagaling ka.',
          },
          {
            type: 'pro',
            body: 'Sa maraming opisina sa China, kailangang magsabi agad sa boss o sa 同事 bago magsimula ang trabaho. Mas magalang kung sasabihin mo rin kung kailan ka babalik.',
          },
          {
            type: 'remember',
            body: '请假 ay literal na "ask for leave": 请 ay humingi at 假 ay bakasyon o pahinga. Isipin ang 假 bilang "araw na walang pasok".',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Calling in sick',
        blocks: [
          {
            type: 'dialogue',
            title: 'Asking the boss',
            lines: [
              { speaker: 'A', hanzi: '你怎么了？', pinyin: 'Nǐ zěnme le?', english: 'What is wrong?' },
              { speaker: 'B', hanzi: '我发烧了，想请假。', pinyin: 'Wǒ fāshāo le, xiǎng qǐngjià.', english: 'I have a fever and want to ask for leave.' },
              { speaker: 'A', hanzi: '好，好好休息。', pinyin: 'Hǎo, hǎohāo xiūxi.', english: 'Okay, rest well.' },
            ],
          },
        ],
      },
      quiz('Leave', 'What does 请假 mean?', ['to ask for leave', 'to work overtime', 'to get promoted'], 0, '请 is to ask and 假 is leave. 请假 is asking for time off.'),
      quiz('Fever', 'What does 发烧 mean?', ['to have a fever', 'to be cold', 'to be hungry'], 0, '发 is to send out and 烧 is fever. 发烧 is having a fever.'),
      speak([
        { prompt: 'Say you want to ask for leave.', hanzi: '我想请假。', pinyin: 'Wǒ xiǎng qǐngjià.', english: 'I want to ask for leave.' },
        { prompt: 'Say you are unwell today.', hanzi: '我今天不舒服。', pinyin: 'Wǒ jīntiān bù shūfu.', english: 'I am not feeling well today.' },
      ]),
    ],
  },

  {
    id: 'airport',
    module: 'daily',
    title: 'At the airport',
    subtitle: 'Check in, security, your gate and your luggage',
    minutes: 10,
    goal: 'Find your gate, show your passport and talk about your luggage at the airport.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Airport words',
        blocks: [
          { type: 'vocab', words: [W13.jichang, W13.hangban, W13.dengjikou, W13.xingli, W13.anjian, W13.huzhao, W13.dengjipai, W13.dengji] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['你的护照和登机牌在哪里？', 'Where are your passport and boarding pass?'],
              ['登机口在哪里？', 'Where is the boarding gate?'],
              ['我的行李很重。', 'My luggage is heavy.'],
              ['我的航班几点起飞？', 'What time does my flight take off?'],
            ],
          },
          {
            type: 'taglish',
            body: 'Ang 机场 ay airport. Ang 安检 ay security check, kung saan kailangan mong ipakita ang 护照 at 登机牌. Ang 登机口 ay gate, at ang 行李 ay luggage. Kapag hindi mo alam ang gate, itanong agad ang 登机口在哪里?',
          },
          {
            type: 'pro',
            body: 'Karaniwan may nakasulat na gate number sa boarding pass at sa screen ng airport. Pumunta sa gate mga 30 minuto bago umalis para hindi ka mahuli.',
          },
          {
            type: 'remember',
            body: '机场: 机 ay makina o eroplano, at 场 ay lugar. Ang airport ay "lugar ng eroplano".',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Checking in',
        blocks: [
          {
            type: 'dialogue',
            title: 'At the counter',
            lines: [
              { speaker: 'A', hanzi: '你的护照和登机牌在哪里？', pinyin: 'Nǐ de hùzhào hé dēngjīpái zài nǎli?', english: 'Where are your passport and boarding pass?' },
              { speaker: 'B', hanzi: '在这里。', pinyin: 'Zài zhèli.', english: 'Here.' },
            ],
          },
        ],
      },
      quiz('Gate', 'What does 登机口 mean?', ['boarding gate', 'luggage', 'security check'], 0, '登机 is boarding and 口 is opening or gate. 登机口 is the boarding gate.'),
      quiz('Luggage', 'What does 行李 mean?', ['luggage', 'flight', 'passport'], 0, '行李 is luggage or baggage.'),
      speak([
        { prompt: 'Ask where the gate is.', hanzi: '登机口在哪里？', pinyin: 'Dēngjīkǒu zài nǎli?', english: 'Where is the boarding gate?' },
        { prompt: 'Say your luggage is heavy.', hanzi: '我的行李很重。', pinyin: 'Wǒ de xíngli hěn zhòng.', english: 'My luggage is heavy.' },
      ]),
    ],
  },

  {
    id: 'library',
    module: 'daily',
    title: 'At the library',
    subtitle: 'Borrow a book, return it and keep it quiet',
    minutes: 8,
    goal: 'Ask to borrow a book, ask about opening hours and ask people to be quiet.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Library words',
        blocks: [
          { type: 'vocab', words: [W13.tushuguan, W13.jieshu, W13.huanshu, W13.jieshuzheng, W13.anjing, W13.kaimen, W13.shujia] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['我想借书，可以吗？', 'I want to borrow a book, is that okay?'],
              ['请出示你的借书证。', 'Please show your library card.'],
              ['图书馆几点开门？', 'What time does the library open?'],
              ['请安静一点。', 'Please be quiet.'],
            ],
          },
          {
            type: 'taglish',
            body: 'Ang 图书馆 ay library. Ang 借书 ay humiram ng libro at ang 还书 ay ibalik ito. Kailangan mo ng 借书证 para makahiram. Ang 安静 ay tahimik, at ito ang sinasabi sa library para hindi maingay.',
          },
          {
            type: 'pro',
            body: 'Sa library, tahimik ang lahat. Kapag may gustong magtanong, bumulong lang. Kadalasan may oras din ng pagbabalik, kaya itanong ang 期限 (deadline) para hindi ma-late.',
          },
          {
            type: 'remember',
            body: '图书馆: 图 ay larawan, 书 ay libro, at 馆 ay gusali. Isipin mo ang "gusali ng mga libro at larawan".',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Borrowing a book',
        blocks: [
          {
            type: 'dialogue',
            title: 'Library desk',
            lines: [
              { speaker: 'A', hanzi: '我想借书，可以吗？', pinyin: 'Wǒ xiǎng jiè shū, kěyǐ ma?', english: 'I want to borrow a book, is that okay?' },
              { speaker: 'B', hanzi: '可以，请出示你的借书证。', pinyin: 'Kěyǐ, qǐng chūshì nǐ de jièshūzhèng.', english: 'Yes, please show your library card.' },
            ],
          },
        ],
      },
      quiz('Borrow', 'What does 借书 mean?', ['to borrow a book', 'to return a book', 'to read a book'], 0, '借 is to borrow and 书 is book. 还书 is returning a book.'),
      quiz('Quiet', 'What does 安静 mean?', ['quiet', 'loud', 'late'], 0, '安静 means quiet or calm. The opposite is 吵, noisy.'),
      speak([
        { prompt: 'Ask when the library opens.', hanzi: '图书馆几点开门？', pinyin: 'Túshūguǎn jǐ diǎn kāimén?', english: 'What time does the library open?' },
        { prompt: 'Ask someone to be quiet.', hanzi: '请安静一点。', pinyin: 'Qǐng ānjìng yìdiǎn.', english: 'Please be a little quieter.' },
      ]),
    ],
  },

  {
    id: 'bike',
    module: 'daily',
    title: 'Riding a shared bike',
    subtitle: 'Helmets, brakes and a flat tyre',
    minutes: 8,
    goal: 'Talk about riding a shared bike and report a problem with the brakes or tyres.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Bike words',
        blocks: [
          { type: 'vocab', words: [W13.qiche, W13.gongxiang, W13.touku, W13.shache, W13.daqi, W13.chetai, W13.qi] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['你会骑车吗？', 'Can you ride a bike?'],
              ['请戴上头盔。', 'Please wear your helmet.'],
              ['刹车不好。', 'The brakes are not working well.'],
              ['车胎没气了。', 'The tyre is flat.'],
            ],
          },
          {
            type: 'taglish',
            body: 'Ang 骑车 ay mag-bisikleta. Ang 共享单车 ay shared bike na pwedeng rentahan sa app. Kapag may problema sa 刹车 o 车胎, sabihin agad para may mag-ayos. Ang 头盔 ay helmet, kaya huwag kalimutang isuot.',
          },
          {
            type: 'pro',
            body: 'Sa China, karaniwang i-scan mo ang QR code sa bisikleta gamit ang app para mabuksan ang lock. Kung sira ang bisikleta, i-report ito sa app para may magpalit.',
          },
          {
            type: 'remember',
            body: '骑车: 骑 ay sumakay sa hayop o bisikleta, at 车 ay sasakyan. Kaya ang 骑车 ay "sumakay sa sasakyan".',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Riding to work',
        blocks: [
          {
            type: 'dialogue',
            title: 'Bike chat',
            lines: [
              { speaker: 'A', hanzi: '你会骑车吗？', pinyin: 'Nǐ huì qíchē ma?', english: 'Can you ride a bike?' },
              { speaker: 'B', hanzi: '会，我每天骑共享单车。', pinyin: 'Huì, wǒ měitiān qí gòngxiǎng dānchē.', english: 'Yes, I ride a shared bike every day.' },
            ],
          },
        ],
      },
      quiz('Helmet', 'What does 头盔 mean?', ['helmet', 'lock', 'bicycle'], 0, '头 is head and 盔 is helmet. 头盔 is the helmet you wear.'),
      quiz('Brakes', 'What does 刹车 mean?', ['brakes', 'pedal', 'bell'], 0, '刹车 means brakes. 车 is vehicle.'),
      speak([
        { prompt: 'Tell someone to wear a helmet.', hanzi: '请戴上头盔。', pinyin: 'Qǐng dài shàng tóukuī.', english: 'Please put on your helmet.' },
        { prompt: 'Report a flat tyre.', hanzi: '车胎没气了。', pinyin: 'Chētāi méi qì le.', english: 'The tyre is flat.' },
      ]),
    ],
  },

  {
    id: 'appointment',
    module: 'work',
    title: 'Making an appointment',
    subtitle: 'Book a time, reschedule and say sorry for being late',
    minutes: 9,
    goal: 'Book an appointment, ask to reschedule and apologise for being late.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Appointment words',
        blocks: [
          { type: 'vocab', words: [W13.yuyue, W13.gaiqi, W13.quxiao, W13.zhunshi, W13.chidao, W13.yisheng, W13.yijing, W13.man] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['我想预约明天下午三点。', 'I want to book tomorrow at 3 pm.'],
              ['三点已经满了。', '3 pm is already full.'],
              ['我可以改期吗？', 'Can I reschedule?'],
              ['不好意思，我迟到了。', 'Sorry, I am late.'],
            ],
          },
          {
            type: 'taglish',
            body: 'Ang 预约 ay mag-book ng oras. Kung hindi ka makakarating, sabihin ang 改期 (reschedule) o 取消 (cancel). Kapag late ka, sabihin ang 不好意思 at ang 我迟到了.',
          },
          {
            type: 'pro',
            body: 'Magpunta nang 准时, o mas maaga nang kaunti, lalo na sa doktor o opisina. Kapag hindi mo kayang pumunta, tumawag agad.',
          },
          {
            type: 'remember',
            body: '预约: 预 ay nauna at 约 ay kasunduan. Ang 预约 ay "naunang kasunduan" o booking.',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Booking a time',
        blocks: [
          {
            type: 'dialogue',
            title: 'Calling the clinic',
            lines: [
              { speaker: 'A', hanzi: '我想预约明天下午三点。', pinyin: 'Wǒ xiǎng yùyuē míngtiān xiàwǔ sān diǎn.', english: 'I want to book tomorrow at 3 pm.' },
              { speaker: 'B', hanzi: '不好意思，三点已经满了。', pinyin: 'Bù hǎoyìsi, sān diǎn yǐjīng mǎn le.', english: 'Sorry, 3 pm is already full.' },
            ],
          },
        ],
      },
      quiz('Book', 'What does 预约 mean?', ['to make an appointment', 'to cancel', 'to be late'], 0, '预约 means to book or make an appointment in advance.'),
      quiz('Late', 'What does 迟到 mean?', ['to be late', 'to be early', 'to be on time'], 0, '迟 is late and 到 is arrive. 迟到 is arriving late.'),
      speak([
        { prompt: 'Ask to reschedule.', hanzi: '我可以改期吗？', pinyin: 'Wǒ kěyǐ gǎiqī ma?', english: 'Can I reschedule?' },
        { prompt: 'Promise to be on time.', hanzi: '我会准时到。', pinyin: 'Wǒ huì zhǔnshí dào.', english: 'I will arrive on time.' },
      ]),
    ],
  },

  {
    id: 'travel',
    module: 'talk',
    title: 'Talking about travel plans',
    subtitle: 'Where to go, the sea, hiking and visas',
    minutes: 9,
    goal: 'Talk about where you want to travel and ask whether someone has a visa.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Travel words',
        blocks: [
          { type: 'vocab', words: [W13.lvyou, W13.lvxing, W13.dasuan, W13.jiudian, W13.qianzheng, W13.haibian, W13.pashan] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['你打算去哪里旅游？', 'Where do you plan to travel?'],
              ['我想去海边，还有爬山。', 'I want to go to the beach and also go hiking.'],
              ['我们一起去旅行吧。', 'Let us travel together.'],
              ['你有签证吗？', 'Do you have a visa?'],
            ],
          },
          {
            type: 'taglish',
            body: 'Ang 旅游 ay pamamasyal o tourism, at ang 旅行 ay biyahe o trip. Ang 打算 ay plano. Bago pumunta sa ibang bansa, tanungin kung may 签证 (visa) na kailangan.',
          },
          {
            type: 'pro',
            body: 'Bago mag-book ng 酒店 o flight, tingnan kung kailangan ng visa. Maraming bansa ang may online visa application.',
          },
          {
            type: 'remember',
            body: '旅行: 旅 ay paglalakbay at 行 ay lakad o pag-alis. Isipin mo ang "lakad na paglalakbay".',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Where to go',
        blocks: [
          {
            type: 'dialogue',
            title: 'Planning a holiday',
            lines: [
              { speaker: 'A', hanzi: '你打算去哪里旅游？', pinyin: 'Nǐ dǎsuan qù nǎli lǚyóu?', english: 'Where do you plan to travel?' },
              { speaker: 'B', hanzi: '我想去海边，还有爬山。', pinyin: 'Wǒ xiǎng qù hǎibiān, hái yǒu páshān.', english: 'I want to go to the beach and also go hiking.' },
            ],
          },
        ],
      },
      quiz('Visa', 'What does 签证 mean?', ['visa', 'ticket', 'passport'], 0, '签证 is a visa. Passport is 护照.'),
      quiz('Trip', 'What does 旅行 mean?', ['trip; to travel', 'hotel', 'visa'], 0, '旅 is travel and 行 is go. 旅行 is a trip.'),
      speak([
        { prompt: 'Invite someone to travel.', hanzi: '我们一起去旅行吧。', pinyin: 'Wǒmen yìqǐ qù lǚxíng ba.', english: 'Let us travel together.' },
        { prompt: 'Ask about a visa.', hanzi: '你有签证吗？', pinyin: 'Nǐ yǒu qiānzhèng ma?', english: 'Do you have a visa?' },
      ]),
    ],
  },

  {
    id: 'congrats',
    module: 'talk',
    title: 'Congratulations',
    subtitle: 'Good news, promotions, graduations and weddings',
    minutes: 8,
    goal: 'Congratulate someone on good news and reply with a warm wish.',
    pages: [
      {
        kicker: 'Learn',
        title: 'Congratulation words',
        blocks: [
          { type: 'vocab', words: [W13.gongxi, W13.zhuhe, W13.shengzhi, W13.biye, W13.jiehun, W13.xinhun, W13.jiayou] },
          {
            type: 'table',
            head: ['Say this', 'Meaning'],
            rows: [
              ['听说你升职了，恭喜！', 'I heard you got promoted, congratulations!'],
              ['恭喜你毕业！', 'Congratulations on your graduation!'],
              ['祝你新婚快乐。', 'Wishing you a happy marriage.'],
              ['谢谢，你也要加油。', 'Thanks, keep it up too.'],
            ],
          },
          {
            type: 'taglish',
            body: 'Ang 恭喜 ay congratulations, at ang 祝贺 ay pagbati sa mas pormal na paraan. Sa kasal, sabihin ang 新婚快乐. Ang 加油 ay "kaya mo yan" o "galingan mo", na sinasabi kahit bago pa ang laban o pagsusulit.',
          },
          {
            type: 'pro',
            body: 'Sa wedding o graduation, magbigay ng 红包 (red envelope) o regalo. Kapag hindi ka sigurado, sabihin lang ang 恭喜 at ang pangalan ng tao.',
          },
          {
            type: 'remember',
            body: '恭喜: 恭 ay magalang at 喜 ay saya. Isipin ang "magalang na pagbati sa saya ng iba".',
          },
        ],
      },
      {
        kicker: 'Hear it',
        title: 'Good news',
        blocks: [
          {
            type: 'dialogue',
            title: 'A promotion',
            lines: [
              { speaker: 'A', hanzi: '听说你升职了，恭喜！', pinyin: 'Tīngshuō nǐ shēngzhí le, gōngxǐ!', english: 'I heard you got promoted, congratulations!' },
              { speaker: 'B', hanzi: '谢谢！你也要加油。', pinyin: 'Xièxie! Nǐ yě yào jiāyóu.', english: 'Thank you! You keep it up too.' },
            ],
          },
        ],
      },
      quiz('Congrats', 'What does 恭喜 mean?', ['congratulations', 'sorry', 'thank you'], 0, '恭喜 is what you say to congratulate someone.'),
      quiz('Keep going', 'What does 加油 mean in this context?', ['keep it up; go for it', 'hurry up', 'good night'], 0, '加油 literally means add oil. It is used to encourage someone.'),
      speak([
        { prompt: 'Congratulate a graduate.', hanzi: '恭喜你毕业！', pinyin: 'Gōngxǐ nǐ bìyè!', english: 'Congratulations on your graduation!' },
        { prompt: 'Wish a couple happiness.', hanzi: '祝你新婚快乐。', pinyin: 'Zhù nǐ xīnhūn kuàilè.', english: 'Wishing you a happy marriage.' },
      ]),
    ],
  },
];

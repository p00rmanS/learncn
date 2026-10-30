import type { Word } from './types';

const w = (x: Word): Word => x;

/** Words for birthdays, sick leave, airports, the library, shared bikes, appointments, trips and congratulations. */
export const W13 = {
  // ── Birthday ──
  shengri: w({ id: 'p13-shengri', hanzi: '生日', pinyin: 'shēngrì', english: 'birthday', tones: [1, 4] }),
  kuaile: w({ id: 'p13-kuaile', hanzi: '快乐', pinyin: 'kuàilè', english: 'happy; joyful', tones: [4, 4] }),
  zhufu: w({ id: 'p13-zhufu', hanzi: '祝福', pinyin: 'zhùfú', english: 'blessing; best wishes', tones: [4, 2] }),
  dangao: w({ id: 'p13-dangao', hanzi: '蛋糕', pinyin: 'dàngāo', english: 'cake', tones: [4, 1] }),
  liwu: w({ id: 'p13-liwu', hanzi: '礼物', pinyin: 'lǐwù', english: 'gift; present', tones: [3, 4] }),
  xuyuan: w({ id: 'p13-xuyuan', hanzi: '许愿', pinyin: 'xǔyuàn', english: 'to make a wish', tones: [3, 4] }),
  lazhu: w({ id: 'p13-lazhu', hanzi: '蜡烛', pinyin: 'làzhú', english: 'candle', tones: [4, 2] }),

  // ── Sick leave ──
  qingjia: w({ id: 'p13-qingjia', hanzi: '请假', pinyin: 'qǐngjià', english: 'to ask for leave', tones: [3, 4] }),
  shengbing: w({ id: 'p13-shengbing', hanzi: '生病', pinyin: 'shēngbìng', english: 'to be sick', tones: [1, 4] }),
  fashao: w({ id: 'p13-fashao', hanzi: '发烧', pinyin: 'fāshāo', english: 'to have a fever', tones: [1, 1] }),
  xiuxi: w({ id: 'p13-xiuxi', hanzi: '休息', pinyin: 'xiūxi', english: 'to rest', tones: [1, 0] }),
  gongzuo: w({ id: 'p13-gongzuo', hanzi: '工作', pinyin: 'gōngzuò', english: 'work; job', tones: [1, 4] }),
  mingtian: w({ id: 'p13-mingtian', hanzi: '明天', pinyin: 'míngtiān', english: 'tomorrow', tones: [2, 1] }),
  bangongshi: w({ id: 'p13-bangongshi', hanzi: '办公室', pinyin: 'bàngōngshì', english: 'office', tones: [4, 1, 4] }),

  // ── Airport ──
  jichang: w({ id: 'p13-jichang', hanzi: '机场', pinyin: 'jīchǎng', english: 'airport', tones: [1, 3] }),
  dengji: w({ id: 'p13-dengji', hanzi: '登机', pinyin: 'dēngjī', english: 'to board a plane', tones: [1, 1] }),
  hangban: w({ id: 'p13-hangban', hanzi: '航班', pinyin: 'hángbān', english: 'flight', tones: [2, 1] }),
  dengjikou: w({ id: 'p13-dengjikou', hanzi: '登机口', pinyin: 'dēngjīkǒu', english: 'boarding gate', tones: [1, 1, 3] }),
  xingli: w({ id: 'p13-xingli', hanzi: '行李', pinyin: 'xínglǐ', english: 'luggage', tones: [2, 3] }),
  anjian: w({ id: 'p13-anjian', hanzi: '安检', pinyin: 'ānjiǎn', english: 'security check', tones: [1, 3] }),
  huzhao: w({ id: 'p13-huzhao', hanzi: '护照', pinyin: 'hùzhào', english: 'passport', tones: [4, 4] }),
  dengjipai: w({ id: 'p13-dengjipai', hanzi: '登机牌', pinyin: 'dēngjīpái', english: 'boarding pass', tones: [1, 1, 2] }),

  // ── Library ──
  tushuguan: w({ id: 'p13-tushuguan', hanzi: '图书馆', pinyin: 'túshūguǎn', english: 'library', tones: [2, 1, 3] }),
  jieshu: w({ id: 'p13-jieshu', hanzi: '借书', pinyin: 'jièshū', english: 'to borrow a book', tones: [4, 1] }),
  huanshu: w({ id: 'p13-huanshu', hanzi: '还书', pinyin: 'huánshū', english: 'to return a book', tones: [2, 1] }),
  jieshuzheng: w({ id: 'p13-jieshuzheng', hanzi: '借书证', pinyin: 'jièshūzhèng', english: 'library card', tones: [4, 1, 4] }),
  anjing: w({ id: 'p13-anjing', hanzi: '安静', pinyin: 'ānjìng', english: 'quiet', tones: [1, 4] }),
  kaimen: w({ id: 'p13-kaimen', hanzi: '开门', pinyin: 'kāimén', english: 'to open (a door); opening time', tones: [1, 2] }),
  shujia: w({ id: 'p13-shujia', hanzi: '书架', pinyin: 'shūjià', english: 'bookshelf', tones: [1, 4] }),

  // ── Shared bikes ──
  qiche: w({ id: 'p13-qiche', hanzi: '骑车', pinyin: 'qíchē', english: 'to ride a bike', tones: [2, 1] }),
  gongxiang: w({ id: 'p13-gongxiang', hanzi: '共享单车', pinyin: 'gòngxiǎng dānchē', english: 'shared bike', tones: [4, 3, 1, 1] }),
  touku: w({ id: 'p13-touku', hanzi: '头盔', pinyin: 'tóukuī', english: 'helmet', tones: [2, 1] }),
  shache: w({ id: 'p13-shache', hanzi: '刹车', pinyin: 'shāchē', english: 'brakes', tones: [1, 1] }),
  daqi: w({ id: 'p13-daqi', hanzi: '打气', pinyin: 'dǎqì', english: 'to pump air into a tyre', tones: [3, 4] }),
  chetai: w({ id: 'p13-chetai', hanzi: '车胎', pinyin: 'chētāi', english: 'tyre', tones: [1, 1] }),
  qi: w({ id: 'p13-qi', hanzi: '气', pinyin: 'qì', english: 'air; gas', tones: [4] }),

  // ── Appointments ──
  yuyue: w({ id: 'p13-yuyue', hanzi: '预约', pinyin: 'yùyuē', english: 'to make an appointment', tones: [4, 1] }),
  gaiqi: w({ id: 'p13-gaiqi', hanzi: '改期', pinyin: 'gǎiqī', english: 'to reschedule', tones: [3, 1] }),
  quxiao: w({ id: 'p13-quxiao', hanzi: '取消', pinyin: 'qǔxiāo', english: 'to cancel', tones: [3, 1] }),
  zhunshi: w({ id: 'p13-zhunshi', hanzi: '准时', pinyin: 'zhǔnshí', english: 'on time', tones: [3, 2] }),
  chidao: w({ id: 'p13-chidao', hanzi: '迟到', pinyin: 'chídào', english: 'to be late', tones: [2, 4] }),
  yisheng: w({ id: 'p13-yisheng', hanzi: '医生', pinyin: 'yīshēng', english: 'doctor', tones: [1, 1] }),
  yijing: w({ id: 'p13-yijing', hanzi: '已经', pinyin: 'yǐjīng', english: 'already', tones: [3, 1] }),
  man: w({ id: 'p13-man', hanzi: '满', pinyin: 'mǎn', english: 'full; fully booked', tones: [3] }),
  haoyisi: w({ id: 'p13-haoyisi', hanzi: '不好意思', pinyin: 'bù hǎoyìsi', english: 'sorry; excuse me; embarrassed', tones: [4, 3, 4, 0] }),

  // ── Trips ──
  lvyou: w({ id: 'p13-lvyou', hanzi: '旅游', pinyin: 'lǚyóu', english: 'to travel; tourism', tones: [3, 2] }),
  lvxing: w({ id: 'p13-lvxing', hanzi: '旅行', pinyin: 'lǚxíng', english: 'trip; to travel', tones: [3, 2] }),
  jiudian: w({ id: 'p13-jiudian', hanzi: '酒店', pinyin: 'jiǔdiàn', english: 'hotel', tones: [3, 4] }),
  qianzheng: w({ id: 'p13-qianzheng', hanzi: '签证', pinyin: 'qiānzhèng', english: 'visa', tones: [1, 4] }),
  haibian: w({ id: 'p13-haibian', hanzi: '海边', pinyin: 'hǎibiān', english: 'seaside; by the sea', tones: [3, 1] }),
  pashan: w({ id: 'p13-pashan', hanzi: '爬山', pinyin: 'páshān', english: 'to go hiking; to climb a mountain', tones: [2, 1] }),
  dasuan: w({ id: 'p13-dasuan', hanzi: '打算', pinyin: 'dǎsuan', english: 'to plan; to intend', tones: [3, 0] }),

  // ── Congratulations ──
  gongxi: w({ id: 'p13-gongxi', hanzi: '恭喜', pinyin: 'gōngxǐ', english: 'congratulations', tones: [1, 3] }),
  zhuhe: w({ id: 'p13-zhuhe', hanzi: '祝贺', pinyin: 'zhùhè', english: 'to congratulate', tones: [4, 4] }),
  jiehun: w({ id: 'p13-jiehun', hanzi: '结婚', pinyin: 'jiéhūn', english: 'to get married', tones: [2, 1] }),
  xinhun: w({ id: 'p13-xinhun', hanzi: '新婚快乐', pinyin: 'xīnhūn kuàilè', english: 'happy marriage (wedding wish)', tones: [1, 1, 4, 4] }),
  shengzhi: w({ id: 'p13-shengzhi', hanzi: '升职', pinyin: 'shēngzhí', english: 'to be promoted', tones: [1, 2] }),
  biye: w({ id: 'p13-biye', hanzi: '毕业', pinyin: 'bìyè', english: 'to graduate', tones: [4, 4] }),
  jiayou: w({ id: 'p13-jiayou', hanzi: '加油', pinyin: 'jiāyóu', english: 'keep it up; go for it', tones: [1, 2] }),
};

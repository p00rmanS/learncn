import type { Word } from './types';

const w = (x: Word): Word => x;

/** Words for phone calls, emergencies, compliments, cooking, chores, cinema, renting a flat and the gym. */
export const W12 = {
  // ── Phone calls ──
  dadianhua: w({ id: 'p12-dadianhua', hanzi: '打电话', pinyin: 'dǎ diànhuà', english: 'to make a phone call', tones: [3, 4, 4] }),
  dianhua: w({ id: 'p12-dianhua', hanzi: '电话', pinyin: 'diànhuà', english: 'phone; phone call', tones: [4, 4] }),
  wei: w({ id: 'p12-wei', hanzi: '喂', pinyin: 'wéi', english: 'hello (on the phone)', tones: [2] }),
  qingwen: w({ id: 'p12-qingwen', hanzi: '请问', pinyin: 'qǐngwèn', english: 'may I ask', tones: [3, 4] }),
  dengyixia: w({ id: 'p12-dengyixia', hanzi: '等一下', pinyin: 'děng yíxià', english: 'wait a moment', tones: [3, 2, 4], spoken: 'děng yīxià' }),
  liuyan: w({ id: 'p12-liuyan', hanzi: '留言', pinyin: 'liúyán', english: 'to leave a message', tones: [2, 2] }),
  dacuole: w({ id: 'p12-dacuole', hanzi: '打错了', pinyin: 'dǎ cuò le', english: 'wrong number (you dialed wrong)', tones: [3, 4, 0] }),

  // ── Emergencies ──
  jinji: w({ id: 'p12-jinji', hanzi: '紧急', pinyin: 'jǐnjí', english: 'urgent; emergency', tones: [3, 2] }),
  jiuming: w({ id: 'p12-jiuming', hanzi: '救命', pinyin: 'jiùmìng', english: 'help! (literally: save a life)', tones: [4, 4] }),
  baojing: w({ id: 'p12-baojing', hanzi: '报警', pinyin: 'bàojǐng', english: 'to call the police', tones: [4, 3] }),
  jingcha: w({ id: 'p12-jingcha', hanzi: '警察', pinyin: 'jǐngchá', english: 'police officer', tones: [3, 2] }),
  jiuhuche: w({ id: 'p12-jiuhuche', hanzi: '救护车', pinyin: 'jiùhùchē', english: 'ambulance', tones: [4, 4, 1] }),
  bushufu: w({ id: 'p12-bushufu', hanzi: '不舒服', pinyin: 'bù shūfu', english: 'feel unwell; uncomfortable', tones: [4, 1, 0] }),

  // ── Compliments ──
  kuajiang: w({ id: 'p12-kuajiang', hanzi: '夸奖', pinyin: 'kuājiǎng', english: 'to praise; compliment', tones: [1, 3] }),
  piaoliang: w({ id: 'p12-piaoliang', hanzi: '漂亮', pinyin: 'piàoliang', english: 'pretty; beautiful', tones: [4, 0] }),
  congming: w({ id: 'p12-congming', hanzi: '聪明', pinyin: 'cōngming', english: 'smart; clever', tones: [1, 0] }),
  haokan: w({ id: 'p12-haokan', hanzi: '好看', pinyin: 'hǎokàn', english: 'good-looking; nice to look at', tones: [3, 4] }),
  zhongwen: w({ id: 'p12-zhongwen', hanzi: '中文', pinyin: 'Zhōngwén', english: 'Chinese (language)', tones: [1, 2] }),
  lihai: w({ id: 'p12-lihai', hanzi: '厉害', pinyin: 'lìhai', english: 'impressive; amazing', tones: [4, 0] }),

  // ── Cooking ──
  zuofan: w({ id: 'p12-zuofan', hanzi: '做饭', pinyin: 'zuòfàn', english: 'to cook a meal', tones: [4, 4] }),
  qie: w({ id: 'p12-qie', hanzi: '切', pinyin: 'qiē', english: 'to cut; to slice', tones: [1] }),
  chao: w({ id: 'p12-chao', hanzi: '炒', pinyin: 'chǎo', english: 'to stir-fry', tones: [3] }),
  zheng: w({ id: 'p12-zheng', hanzi: '蒸', pinyin: 'zhēng', english: 'to steam', tones: [1] }),
  zhu: w({ id: 'p12-zhu', hanzi: '煮', pinyin: 'zhǔ', english: 'to boil; to cook in water', tones: [3] }),
  yan: w({ id: 'p12-yan', hanzi: '盐', pinyin: 'yán', english: 'salt', tones: [2] }),

  // ── Chores ──
  xiyifu: w({ id: 'p12-xiyifu', hanzi: '洗衣服', pinyin: 'xǐ yīfu', english: 'to do the laundry', tones: [3, 1, 0] }),
  dasao: w({ id: 'p12-dasao', hanzi: '打扫', pinyin: 'dǎsǎo', english: 'to clean; to sweep', tones: [3, 3] }),
  tuodi: w({ id: 'p12-tuodi', hanzi: '拖地', pinyin: 'tuō dì', english: 'to mop the floor', tones: [1, 4] }),
  xishou: w({ id: 'p12-xishou', hanzi: '洗碗', pinyin: 'xǐ wǎn', english: 'to wash the dishes', tones: [3, 3] }),
  lajitong: w({ id: 'p12-lajitong', hanzi: '垃圾桶', pinyin: 'lājītǒng', english: 'trash bin', tones: [1, 1, 3] }),
  ganjing: w({ id: 'p12-ganjing', hanzi: '干净', pinyin: 'gānjìng', english: 'clean', tones: [1, 4] }),
  zang: w({ id: 'p12-zang', hanzi: '脏', pinyin: 'zāng', english: 'dirty', tones: [1] }),
  jiawu: w({ id: 'p12-jiawu', hanzi: '家务', pinyin: 'jiāwù', english: 'household chores', tones: [1, 4] }),
  jintian: w({ id: 'p12-jintian', hanzi: '今天', pinyin: 'jīntiān', english: 'today', tones: [1, 1] }),

  // ── Cinema ──
  dianying: w({ id: 'p12-dianying', hanzi: '电影', pinyin: 'diànyǐng', english: 'movie; film', tones: [4, 3] }),
  dianyingyuan: w({ id: 'p12-dianyingyuan', hanzi: '电影院', pinyin: 'diànyǐngyuàn', english: 'cinema', tones: [4, 3, 4] }),
  zuowei: w({ id: 'p12-zuowei', hanzi: '座位', pinyin: 'zuòwèi', english: 'seat', tones: [4, 4] }),
  baomihua: w({ id: 'p12-baomihua', hanzi: '爆米花', pinyin: 'bàomǐhuā', english: 'popcorn', tones: [4, 3, 1] }),
  zimu: w({ id: 'p12-zimu', hanzi: '字幕', pinyin: 'zìmù', english: 'subtitles', tones: [4, 4] }),
  kaiyan: w({ id: 'p12-kaiyan', hanzi: '开演', pinyin: 'kāiyǎn', english: 'the show starts', tones: [1, 3] }),
  zhongjian: w({ id: 'p12-zhongjian', hanzi: '中间', pinyin: 'zhōngjiān', english: 'middle; in between', tones: [1, 1] }),
  kan: w({ id: 'p12-kan', hanzi: '看', pinyin: 'kàn', english: 'to watch; to look', tones: [4] }),

  // ── Renting a flat ──
  zufang: w({ id: 'p12-zufang', hanzi: '租房', pinyin: 'zūfáng', english: 'to rent a flat; rental', tones: [1, 2] }),
  fangzi: w({ id: 'p12-fangzi', hanzi: '房子', pinyin: 'fángzi', english: 'house; flat', tones: [2, 0] }),
  yue: w({ id: 'p12-yue', hanzi: '月', pinyin: 'yuè', english: 'month; moon', tones: [4] }),
  yuezu: w({ id: 'p12-yuezu', hanzi: '月租', pinyin: 'yuèzū', english: 'monthly rent', tones: [4, 1] }),
  yajin: w({ id: 'p12-yajin', hanzi: '押金', pinyin: 'yājīn', english: 'deposit', tones: [1, 1] }),
  woshi: w({ id: 'p12-woshi', hanzi: '卧室', pinyin: 'wòshì', english: 'bedroom', tones: [4, 4] }),
  fujin: w({ id: 'p12-fujin', hanzi: '附近', pinyin: 'fùjìn', english: 'nearby', tones: [4, 4] }),
  ditiezhan: w({ id: 'p12-ditiezhan', hanzi: '地铁站', pinyin: 'dìtiězhàn', english: 'metro station', tones: [4, 3, 4] }),

  // ── Gym ──
  jianshenfang: w({ id: 'p12-jianshenfang', hanzi: '健身房', pinyin: 'jiànshēnfáng', english: 'gym', tones: [4, 1, 2] }),
  duanlian: w({ id: 'p12-duanlian', hanzi: '锻炼', pinyin: 'duànliàn', english: 'to exercise; to work out', tones: [4, 4] }),
  paobu: w({ id: 'p12-paobu', hanzi: '跑步', pinyin: 'pǎobù', english: 'to run; jogging', tones: [3, 4] }),
  youyong: w({ id: 'p12-youyong', hanzi: '游泳', pinyin: 'yóuyǒng', english: 'to swim; swimming', tones: [2, 3] }),
  juzhong: w({ id: 'p12-juzhong', hanzi: '举重', pinyin: 'jǔzhòng', english: 'weightlifting', tones: [3, 4] }),
  jiaolian: w({ id: 'p12-jiaolian', hanzi: '教练', pinyin: 'jiàoliàn', english: 'coach; trainer', tones: [4, 4] }),
  huiyuanka: w({ id: 'p12-huiyuanka', hanzi: '会员卡', pinyin: 'huìyuánkǎ', english: 'membership card', tones: [4, 2, 3] }),
  lei: w({ id: 'p12-lei', hanzi: '累', pinyin: 'lèi', english: 'tired', tones: [4] }),
  meitian: w({ id: 'p12-meitian', hanzi: '每天', pinyin: 'měitiān', english: 'every day', tones: [3, 1] }),
  meizhou: w({ id: 'p12-meizhou', hanzi: '每周', pinyin: 'měizhōu', english: 'every week', tones: [3, 1] }),
  sanci: w({ id: 'p12-sanci', hanzi: '三次', pinyin: 'sāncì', english: 'three times', tones: [1, 4] }),
};

import type { Word } from './types';

const w = (x: Word): Word => x;

/** Words for the market, home, directions, tech, opinions, feelings, plans, tickets and description lessons. */
export const W7 = {
  // ── Market ──
  xiangjiao: w({ id: 'xiangjiao', hanzi: '香蕉', pinyin: 'xiāngjiāo', english: 'banana', tones: [1, 1] }),
  xigua: w({ id: 'xigua', hanzi: '西瓜', pinyin: 'xīguā', english: 'watermelon', tones: [1, 1] }),
  putao: w({ id: 'putao', hanzi: '葡萄', pinyin: 'pútao', english: 'grapes', tones: [2, 0] }),
  tudou: w({ id: 'tudou', hanzi: '土豆', pinyin: 'tǔdòu', english: 'potato', tones: [3, 4] }),
  xihongshi: w({ id: 'xihongshi', hanzi: '西红柿', pinyin: 'xīhóngshì', english: 'tomato', tones: [1, 2, 4] }),
  qingcai: w({ id: 'qingcai', hanzi: '青菜', pinyin: 'qīngcài', english: 'leafy greens', tones: [1, 4] }),
  jin: w({ id: 'jin_weight', hanzi: '斤', pinyin: 'jīn', english: 'half a kilo (500 g)', tones: [1], note: 'Prices at markets are often "per 斤".' }),
  gongjin: w({ id: 'gongjin', hanzi: '公斤', pinyin: 'gōngjīn', english: 'kilogram', tones: [1, 1] }),
  xinxian: w({ id: 'xinxian', hanzi: '新鲜', pinyin: 'xīnxiān', english: 'fresh', tones: [1, 1] }),

  // ── Home and places ──
  zhuozi: w({ id: 'zhuozi', hanzi: '桌子', pinyin: 'zhuōzi', english: 'table; desk', tones: [1, 0] }),
  yizi: w({ id: 'yizi', hanzi: '椅子', pinyin: 'yǐzi', english: 'chair', tones: [3, 0] }),
  chuang: w({ id: 'chuang', hanzi: '床', pinyin: 'chuáng', english: 'bed', tones: [2] }),
  men: w({ id: 'door', hanzi: '门', pinyin: 'mén', english: 'door; gate', tones: [2] }),
  bao: w({ id: 'bao', hanzi: '包', pinyin: 'bāo', english: 'bag', tones: [1] }),
  shang: w({ id: 'shang', hanzi: '上', pinyin: 'shàng', english: 'on; up', tones: [4] }),
  xia: w({ id: 'xia', hanzi: '下', pinyin: 'xià', english: 'under; down', tones: [4] }),
  li: w({ id: 'li', hanzi: '里', pinyin: 'lǐ', english: 'in; inside', tones: [3] }),
  waimian: w({ id: 'waimian', hanzi: '外面', pinyin: 'wàimian', english: 'outside', tones: [4, 0] }),
  zhaobudao: w({ id: 'zhaobudao', hanzi: '找不到', pinyin: 'zhǎo bu dào', english: "can't find", tones: [3, 0, 4] }),

  // ── Turns and directions ──
  yizhi: w({ id: 'yizhi', hanzi: '一直', pinyin: 'yìzhí', english: 'straight; all the way', tones: [4, 2] }),
  zuozhuan: w({ id: 'zuozhuan', hanzi: '左转', pinyin: 'zuǒ zhuǎn', spoken: 'zuó zhuǎn', english: 'turn left', tones: [3, 3] }),
  youzhuan: w({ id: 'youzhuan', hanzi: '右转', pinyin: 'yòu zhuǎn', english: 'turn right', tones: [4, 3] }),
  hongludeng: w({ id: 'hongludeng', hanzi: '红绿灯', pinyin: 'hónglǜdēng', english: 'traffic light', tones: [2, 4, 1] }),
  lukou: w({ id: 'lukou', hanzi: '路口', pinyin: 'lùkǒu', english: 'intersection', tones: [4, 3] }),
  di: w({ id: 'di', hanzi: '第', pinyin: 'dì', english: 'ordinal prefix (first, second…)', tones: [4] }),
  duimian: w({ id: 'duimian', hanzi: '对面', pinyin: 'duìmiàn', english: 'opposite; across', tones: [4, 4] }),
  ditiezhan: w({ id: 'ditiezhan', hanzi: '地铁站', pinyin: 'dìtiězhàn', english: 'subway station', tones: [4, 3, 4] }),
  fenzhong: w({ id: 'fenzhong', hanzi: '分钟', pinyin: 'fēnzhōng', english: 'minute(s)', tones: [1, 1] }),
  zoulu: w({ id: 'zoulu', hanzi: '走路', pinyin: 'zǒulù', english: 'to walk', tones: [3, 4] }),

  // ── Tech ──
  wuxianwang: w({ id: 'wuxianwang', hanzi: '无线网', pinyin: 'wúxiànwǎng', english: 'WiFi', tones: [2, 4, 3], note: 'People also just say "WiFi".' }),
  mima: w({ id: 'mima', hanzi: '密码', pinyin: 'mìmǎ', english: 'password', tones: [4, 3] }),
  chongdian: w({ id: 'chongdian', hanzi: '充电', pinyin: 'chōngdiàn', english: 'to charge (a device)', tones: [1, 4] }),
  chongdianqi: w({ id: 'chongdianqi', hanzi: '充电器', pinyin: 'chōngdiànqì', english: 'charger', tones: [1, 4, 4] }),
  meidian: w({ id: 'meidian', hanzi: '没电', pinyin: 'méi diàn', english: 'out of battery', tones: [2, 4], literal: 'no electricity' }),
  diannao: w({ id: 'diannao', hanzi: '电脑', pinyin: 'diànnǎo', english: 'computer', tones: [4, 3] }),
  huai: w({ id: 'huai', hanzi: '坏', pinyin: 'huài', english: 'broken; bad', tones: [4] }),
  xinhao: w({ id: 'xinhao', hanzi: '信号', pinyin: 'xìnhào', english: 'signal', tones: [4, 4] }),

  // ── Opinions ──
  juede: w({ id: 'juede', hanzi: '觉得', pinyin: 'juéde', english: 'to feel; to think', tones: [2, 0] }),
  tongyi: w({ id: 'tongyi', hanzi: '同意', pinyin: 'tóngyì', english: 'to agree', tones: [2, 4] }),
  youyisi: w({ id: 'youyisi', hanzi: '有意思', pinyin: 'yǒu yìsi', english: 'interesting', tones: [3, 4, 0] }),
  meiyisi: w({ id: 'meiyisi', hanzi: '没意思', pinyin: 'méi yìsi', english: 'boring', tones: [2, 4, 0] }),
  haowan: w({ id: 'haowan', hanzi: '好玩', pinyin: 'hǎowán', english: 'fun', tones: [3, 2] }),
  nan: w({ id: 'nan', hanzi: '难', pinyin: 'nán', english: 'difficult', tones: [2] }),
  rongyi: w({ id: 'rongyi', hanzi: '容易', pinyin: 'róngyì', english: 'easy', tones: [2, 4] }),

  // ── Feelings ──
  kaixin: w({ id: 'kaixin', hanzi: '开心', pinyin: 'kāixīn', english: 'happy', tones: [1, 1] }),
  nanguo: w({ id: 'nanguo', hanzi: '难过', pinyin: 'nánguò', english: 'sad', tones: [2, 4] }),
  shengqi: w({ id: 'shengqi', hanzi: '生气', pinyin: 'shēngqì', english: 'angry; upset', tones: [1, 4] }),
  jinzhang: w({ id: 'jinzhang', hanzi: '紧张', pinyin: 'jǐnzhāng', english: 'nervous', tones: [3, 1] }),
  e: w({ id: 'e', hanzi: '饿', pinyin: 'è', english: 'hungry', tones: [4] }),
  ke: w({ id: 'ke', hanzi: '渴', pinyin: 'kě', english: 'thirsty', tones: [3] }),
  kun: w({ id: 'kun', hanzi: '困', pinyin: 'kùn', english: 'sleepy', tones: [4] }),
  danxin: w({ id: 'danxin', hanzi: '担心', pinyin: 'dānxīn', english: 'to worry', tones: [1, 1] }),
  bie: w({ id: 'bie', hanzi: '别', pinyin: 'bié', english: "don't (a gentle command)", tones: [2] }),
  kaoshi: w({ id: 'kaoshi', hanzi: '考试', pinyin: 'kǎoshì', english: 'exam; test', tones: [3, 4] }),

  // ── Plans ──
  youkong: w({ id: 'youkong', hanzi: '有空', pinyin: 'yǒu kòng', english: 'to be free (not busy)', tones: [3, 4] }),
  dasuan: w({ id: 'dasuan', hanzi: '打算', pinyin: 'dǎsuàn', english: 'to plan to', tones: [3, 4] }),
  wan: w({ id: 'wan2', hanzi: '玩', pinyin: 'wán', english: 'to have fun; to hang out', tones: [2] }),
  haibian: w({ id: 'haibian', hanzi: '海边', pinyin: 'hǎibiān', english: 'beach; seaside', tones: [3, 1] }),
  qingke: w({ id: 'qingke', hanzi: '我请你', pinyin: 'wǒ qǐng nǐ', english: "my treat", tones: [3, 3, 3], spoken: 'wó qǐng nǐ', literal: 'I invite you' }),

  // ── Measure words ──
  zhang: w({ id: 'zhang', hanzi: '张', pinyin: 'zhāng', english: 'measure word for flat things (tickets, paper, tables)', tones: [1] }),
  zhi: w({ id: 'zhi', hanzi: '只', pinyin: 'zhī', english: 'measure word for small animals', tones: [1] }),
  liang_veh: w({ id: 'liang_veh', hanzi: '辆', pinyin: 'liàng', english: 'measure word for vehicles', tones: [4] }),
  ping: w({ id: 'ping', hanzi: '瓶', pinyin: 'píng', english: 'bottle (measure word)', tones: [2] }),
  yixie: w({ id: 'yixie', hanzi: '一些', pinyin: 'yìxiē', english: 'some; a few', tones: [4, 1] }),
  mao: w({ id: 'mao', hanzi: '猫', pinyin: 'māo', english: 'cat', tones: [1] }),
  gou: w({ id: 'gou', hanzi: '狗', pinyin: 'gǒu', english: 'dog', tones: [3] }),
  che: w({ id: 'che', hanzi: '车', pinyin: 'chē', english: 'car; vehicle', tones: [1] }),

  // ── Tickets ──
  piao: w({ id: 'piao', hanzi: '票', pinyin: 'piào', english: 'ticket', tones: [4] }),
  huochepiao: w({ id: 'huochepiao', hanzi: '火车票', pinyin: 'huǒchēpiào', english: 'train ticket', tones: [3, 1, 4] }),
  jipiao: w({ id: 'jipiao', hanzi: '机票', pinyin: 'jīpiào', english: 'plane ticket', tones: [1, 4] }),
  huochezhan: w({ id: 'huochezhan', hanzi: '火车站', pinyin: 'huǒchēzhàn', english: 'train station', tones: [3, 1, 4] }),
  chufa: w({ id: 'chufa', hanzi: '出发', pinyin: 'chūfā', english: 'to depart', tones: [1, 1] }),
  natian: w({ id: 'natian', hanzi: '哪天', pinyin: 'nǎ tiān', english: 'which day', tones: [3, 1] }),

  // ── Describing people ──
  shuai: w({ id: 'shuai', hanzi: '帅', pinyin: 'shuài', english: 'handsome', tones: [4] }),
  nianqing: w({ id: 'nianqing', hanzi: '年轻', pinyin: 'niánqīng', english: 'young', tones: [2, 1] }),
  shou: w({ id: 'shou', hanzi: '瘦', pinyin: 'shòu', english: 'thin; slim', tones: [4] }),
  toufa: w({ id: 'toufa', hanzi: '头发', pinyin: 'tóufa', english: 'hair', tones: [2, 0] }),
  chang2: w({ id: 'chang2', hanzi: '长', pinyin: 'cháng', english: 'long', tones: [2], note: 'Also read zhǎng (to grow).' }),
  duan: w({ id: 'duan', hanzi: '短', pinyin: 'duǎn', english: 'short (length)', tones: [3] }),
  dai: w({ id: 'dai', hanzi: '戴', pinyin: 'dài', english: 'to wear (glasses, hat, watch)', tones: [4] }),
  yanjing: w({ id: 'yanjing', hanzi: '眼镜', pinyin: 'yǎnjìng', english: 'glasses', tones: [3, 4] }),
} satisfies Record<string, Word>;

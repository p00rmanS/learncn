export interface StoryLine {
  zh: string;
  py: string;
  en: string;
}

export interface StoryWord {
  zh: string;
  py: string;
  en: string;
}

export interface Story {
  id: string;
  title: string;
  titleZh: string;
  level: 'kinder' | 'elementary' | 'adult';
  minutes: number;
  summary: string;
  /** One practical pronunciation or reading tip */
  proTip: string;
  /** Words worth practising out loud, with the sound that matters */
  focus: { py: string; note: string }[];
  words: StoryWord[];
  lines: StoryLine[];
  questions: { question: string; options: string[]; answer: number; explain: string }[];
}

export const LEVEL_LABEL: Record<Story['level'], string> = {
  kinder: 'Kinder · 3 to 5',
  elementary: 'Elementary · 6 to 10',
  adult: 'Adult beginner',
};

export const STORIES: Story[] = [
  /* ───────── Kinder ───────── */
  {
    id: 'little-cat',
    title: 'The Little Cat',
    titleZh: '小猫',
    level: 'kinder',
    minutes: 3,
    summary: 'A white kitten who loves milk and sleeping.',
    proTip: 'Read it aloud together and point at each word. Say "喵喵" (miāo miāo) with a big, round "miao" and let your child copy the cat.',
    focus: [
      { py: 'xiǎomāo', note: 'xiǎo dips low, māo stays high and flat.' },
      { py: 'niúnǎi', note: 'niú rises, nǎi dips: up, then down and up.' },
    ],
    words: [
      { zh: '小猫', py: 'xiǎomāo', en: 'kitten' },
      { zh: '白色', py: 'báisè', en: 'white' },
      { zh: '眼睛', py: 'yǎnjing', en: 'eyes' },
      { zh: '牛奶', py: 'niúnǎi', en: 'milk' },
      { zh: '睡觉', py: 'shuìjiào', en: 'to sleep' },
    ],
    lines: [
      { zh: '这是一只小猫。', py: 'Zhè shì yì zhī xiǎomāo.', en: 'This is a kitten.' },
      { zh: '它是白色的。', py: 'Tā shì báisè de.', en: 'It is white.' },
      { zh: '它有一双大眼睛。', py: 'Tā yǒu yì shuāng dà yǎnjing.', en: 'It has a pair of big eyes.' },
      { zh: '小猫喜欢喝牛奶。', py: 'Xiǎomāo xǐhuan hē niúnǎi.', en: 'The kitten likes to drink milk.' },
      { zh: '小猫也喜欢睡觉。', py: 'Xiǎomāo yě xǐhuan shuìjiào.', en: 'The kitten also likes to sleep.' },
      { zh: '小猫说：“喵喵！”', py: 'Xiǎomāo shuō: “Miāo miāo!”', en: 'The kitten says, "Meow meow!"' },
      { zh: '我爱我的小猫。', py: 'Wǒ ài wǒ de xiǎomāo.', en: 'I love my kitten.' },
    ],
    questions: [
      { question: 'What color is the kitten?', options: ['White', 'Black', 'Red'], answer: 0, explain: '白色 báisè is white.' },
      { question: 'What does the kitten like to drink?', options: ['Milk', 'Water', 'Tea'], answer: 0, explain: '牛奶 niúnǎi is milk.' },
    ],
  },

  {
    id: 'red-apple',
    title: 'The Red Apple',
    titleZh: '红苹果',
    level: 'kinder',
    minutes: 3,
    summary: 'A child wants an apple, but must wash hands first.',
    proTip: 'The word 苹果 (píngguǒ) has two sounds: "ping" rises and "guǒ" dips. Say "ping-gwoh" and let your voice rise, then dip.',
    focus: [
      { py: 'píngguǒ', note: 'ping rises, guǒ dips. The "p" has a puff of air.' },
      { py: 'hǎochī', note: 'hǎo stays low, then chī starts high. Say "how-chee".' },
    ],
    words: [
      { zh: '苹果', py: 'píngguǒ', en: 'apple' },
      { zh: '红色', py: 'hóngsè', en: 'red' },
      { zh: '先', py: 'xiān', en: 'first' },
      { zh: '洗手', py: 'xǐ shǒu', en: 'to wash hands' },
      { zh: '好吃', py: 'hǎochī', en: 'delicious' },
    ],
    lines: [
      { zh: '我有一个苹果。', py: 'Wǒ yǒu yí ge píngguǒ.', en: 'I have an apple.' },
      { zh: '苹果是红色的。', py: 'Píngguǒ shì hóngsè de.', en: 'The apple is red.' },
      { zh: '我想吃苹果。', py: 'Wǒ xiǎng chī píngguǒ.', en: 'I want to eat the apple.' },
      { zh: '妈妈说：“先洗手。”', py: 'Māma shuō: “Xiān xǐ shǒu.”', en: 'Mom says, "Wash your hands first."' },
      { zh: '我洗手了。', py: 'Wǒ xǐ shǒu le.', en: 'I washed my hands.' },
      { zh: '苹果很好吃！', py: 'Píngguǒ hěn hǎochī!', en: 'The apple is delicious!' },
      { zh: '谢谢妈妈！', py: 'Xièxie māma!', en: 'Thank you, Mom!' },
    ],
    questions: [
      { question: 'What must the child do first?', options: ['Wash hands', 'Go to bed', 'Say goodbye'], answer: 0, explain: '先洗手 means "wash hands first".' },
      { question: 'What color is the apple?', options: ['Red', 'Green', 'Yellow'], answer: 0, explain: '红色 hóngsè is red.' },
    ],
  },

  {
    id: 'rainy-day',
    title: 'A Rainy Day',
    titleZh: '下雨了',
    level: 'kinder',
    minutes: 4,
    summary: 'It rains, so a family stays home, then the sun comes out.',
    proTip: 'Notice how 了 (le) at the end of a sentence means "now it is different": 下雨了 (it is raining now), 雨停了 (the rain has stopped).',
    focus: [
      { py: 'xià yǔ', note: 'xià falls sharply, yǔ dips low. Two different shapes in a row.' },
      { py: 'tàiyáng', note: 'tài falls, yáng rises: a fall then a rise.' },
    ],
    words: [
      { zh: '下雨', py: 'xià yǔ', en: 'to rain' },
      { zh: '画画', py: 'huà huà', en: 'to draw' },
      { zh: '面条', py: 'miàntiáo', en: 'noodles' },
      { zh: '太阳', py: 'tàiyáng', en: 'sun' },
      { zh: '外面', py: 'wàimiàn', en: 'outside' },
    ],
    lines: [
      { zh: '今天下雨了。', py: 'Jīntiān xià yǔ le.', en: 'It is raining today.' },
      { zh: '我不能出去玩。', py: 'Wǒ bù néng chūqù wán.', en: 'I cannot go out to play.' },
      { zh: '我在家看书。', py: 'Wǒ zài jiā kàn shū.', en: 'I read a book at home.' },
      { zh: '弟弟在画画。', py: 'Dìdi zài huà huà.', en: 'My little brother is drawing.' },
      { zh: '妈妈做了面条。', py: 'Māma zuò le miàntiáo.', en: 'Mom made noodles.' },
      { zh: '我们一起吃面条。', py: 'Wǒmen yìqǐ chī miàntiáo.', en: 'We eat the noodles together.' },
      { zh: '雨停了，太阳出来了。', py: 'Yǔ tíng le, tàiyáng chūlái le.', en: 'The rain stopped and the sun came out.' },
      { zh: '我们去外面玩！', py: 'Wǒmen qù wàimiàn wán!', en: "Let's go outside to play!" },
    ],
    questions: [
      { question: 'What did Mom make?', options: ['Noodles', 'Cake', 'Soup'], answer: 0, explain: '面条 miàntiáo is noodles.' },
      { question: 'What happened at the end?', options: ['The sun came out', 'It snowed', 'It got dark'], answer: 0, explain: '太阳出来了 means the sun came out.' },
    ],
  },

  /* ───────── Elementary ───────── */
  {
    id: 'first-day',
    title: 'The First Day of School',
    titleZh: '第一天上学',
    level: 'elementary',
    minutes: 4,
    summary: 'A child meets the teacher and makes new friends.',
    proTip: 'In the sentence 我对妈妈说, the pattern 对…说 means "say to…". Try it with other people: 我对老师说, 我对朋友说.',
    focus: [
      { py: 'lǎoshī', note: 'In real speech the first lǎo becomes "láo". Say "láoshī".' },
      { py: 'shūbāo', note: 'Both syllables are high and flat: keep your pitch level.' },
    ],
    words: [
      { zh: '第一天', py: 'dì yī tiān', en: 'the first day' },
      { zh: '新书包', py: 'xīn shūbāo', en: 'new school bag' },
      { zh: '同学们', py: 'tóngxuémen', en: 'classmates (everyone)' },
      { zh: '新朋友', py: 'xīn péngyou', en: 'new friends' },
      { zh: '放学', py: 'fàngxué', en: 'school is out' },
    ],
    lines: [
      { zh: '今天是我上学的第一天。', py: 'Jīntiān shì wǒ shàngxué de dì yī tiān.', en: 'Today is my first day of school.' },
      { zh: '我有一个新书包。', py: 'Wǒ yǒu yí ge xīn shūbāo.', en: 'I have a new school bag.' },
      { zh: '老师很好。', py: 'Lǎoshī hěn hǎo.', en: 'The teacher is nice.' },
      { zh: '老师说：“同学们好！”', py: 'Lǎoshī shuō: “Tóngxuémen hǎo!”', en: 'The teacher says, "Hello, everyone!"' },
      { zh: '我说：“老师好！”', py: 'Wǒ shuō: “Lǎoshī hǎo!”', en: 'I say, "Hello, teacher!"' },
      { zh: '我有很多新朋友。', py: 'Wǒ yǒu hěn duō xīn péngyou.', en: 'I have many new friends.' },
      { zh: '放学了，妈妈在学校外面。', py: 'Fàngxué le, māma zài xuéxiào wàimiàn.', en: 'School is out and Mom is outside the school.' },
      { zh: '我对妈妈说：“我很开心！”', py: 'Wǒ duì māma shuō: “Wǒ hěn kāixīn!”', en: 'I say to Mom, "I am very happy!"' },
    ],
    questions: [
      { question: 'What new thing does the child have?', options: ['A school bag', 'A bike', 'A cat'], answer: 0, explain: '新书包 is a new school bag.' },
      { question: 'How does the child feel at the end?', options: ['Happy', 'Sad', 'Scared'], answer: 0, explain: '开心 means happy.' },
    ],
  },

  {
    id: 'birthday',
    title: 'My Birthday',
    titleZh: '我的生日',
    level: 'elementary',
    minutes: 4,
    summary: 'A birthday with cake, gifts and a song.',
    proTip: 'The word 都 (dōu, "all") goes before the verb: 朋友们都来了 means "all my friends came". Spot where it sits in the sentence.',
    focus: [
      { py: 'shēngrì', note: 'shēng is high and flat, rì falls. The "r" is a soft, buzzing sound.' },
      { py: 'làzhú', note: 'là falls, zhú rises. Curl the tongue for "zh".' },
    ],
    words: [
      { zh: '生日', py: 'shēngrì', en: 'birthday' },
      { zh: '蛋糕', py: 'dàngāo', en: 'cake' },
      { zh: '礼物', py: 'lǐwù', en: 'gift' },
      { zh: '蜡烛', py: 'làzhú', en: 'candle' },
      { zh: '许愿', py: 'xǔ yuàn', en: 'to make a wish' },
    ],
    lines: [
      { zh: '今天是我的生日。', py: 'Jīntiān shì wǒ de shēngrì.', en: 'Today is my birthday.' },
      { zh: '妈妈做了一个大蛋糕。', py: 'Māma zuò le yí ge dà dàngāo.', en: 'Mom made a big cake.' },
      { zh: '朋友们都来了。', py: 'Péngyoumen dōu lái le.', en: 'All my friends have come.' },
      { zh: '他们给我礼物。', py: 'Tāmen gěi wǒ lǐwù.', en: 'They give me gifts.' },
      { zh: '我们一起唱歌：“祝你生日快乐！”', py: 'Wǒmen yìqǐ chànggē: “Zhù nǐ shēngrì kuàilè!”', en: 'We sing together: "Happy birthday to you!"' },
      { zh: '我吹蜡烛，许了一个愿。', py: 'Wǒ chuī làzhú, xǔ le yí ge yuàn.', en: 'I blow out the candles and make a wish.' },
      { zh: '我很开心。', py: 'Wǒ hěn kāixīn.', en: 'I am very happy.' },
    ],
    questions: [
      { question: 'Who made the cake?', options: ['Mom', 'Dad', 'A friend'], answer: 0, explain: '妈妈做了一个大蛋糕.' },
      { question: 'What did the child do with the candles?', options: ['Blew them out and made a wish', 'Gave them away', 'Hid them'], answer: 0, explain: '吹蜡烛 is blow out candles and 许愿 is make a wish.' },
    ],
  },

  {
    id: 'tiger-rabbit',
    title: 'The Tiger and the Rabbit',
    titleZh: '老虎和兔子',
    level: 'elementary',
    minutes: 4,
    summary: 'A scared rabbit finds out the tiger just wants a friend.',
    proTip: 'The word 和 (hé) means "and" and "with". Look at the line 我想和你做朋友: here it means "with", so it says "I want to be friends with you".',
    focus: [
      { py: 'lǎohǔ', note: 'Two low tones in a row: say "láohǔ" (rise, then dip).' },
      { py: 'hàipà', note: 'Two sharp falls. Say them as two firm drops: hài, pà.' },
    ],
    words: [
      { zh: '兔子', py: 'tùzi', en: 'rabbit' },
      { zh: '老虎', py: 'lǎohǔ', en: 'tiger' },
      { zh: '草地', py: 'cǎodì', en: 'meadow' },
      { zh: '害怕', py: 'hàipà', en: 'scared' },
      { zh: '做朋友', py: 'zuò péngyou', en: 'to be friends' },
    ],
    lines: [
      { zh: '小兔子在草地上玩。', py: 'Xiǎo tùzi zài cǎodì shang wán.', en: 'The little rabbit is playing on the meadow.' },
      { zh: '老虎来了。', py: 'Lǎohǔ lái le.', en: 'A tiger comes.' },
      { zh: '老虎说：“你好，小兔子！”', py: 'Lǎohǔ shuō: “Nǐ hǎo, xiǎo tùzi!”', en: 'The tiger says, "Hello, little rabbit!"' },
      { zh: '小兔子很害怕。', py: 'Xiǎo tùzi hěn hàipà.', en: 'The little rabbit is very scared.' },
      { zh: '老虎说：“别怕，我不吃你。”', py: 'Lǎohǔ shuō: “Bié pà, wǒ bù chī nǐ.”', en: 'The tiger says, "Don\'t be scared, I won\'t eat you."' },
      { zh: '“我想和你做朋友。”', py: '“Wǒ xiǎng hé nǐ zuò péngyou.”', en: '"I want to be friends with you."' },
      { zh: '小兔子笑了。', py: 'Xiǎo tùzi xiào le.', en: 'The little rabbit smiled.' },
      { zh: '他们一起玩。', py: 'Tāmen yìqǐ wán.', en: 'They play together.' },
    ],
    questions: [
      { question: 'How does the rabbit feel at first?', options: ['Scared', 'Angry', 'Sleepy'], answer: 0, explain: '害怕 means scared.' },
      { question: 'What does the tiger want?', options: ['To be friends', 'To eat the rabbit', 'To sleep'], answer: 0, explain: '做朋友 means to be friends.' },
    ],
  },

  /* ───────── Adult beginner ───────── */
  {
    id: 'morning',
    title: "Li Ming's Morning",
    titleZh: '李明的早上',
    level: 'adult',
    minutes: 4,
    summary: 'A normal weekday morning, told with times and order words.',
    proTip: 'Notice how order words work: 先 (first) and 然后 (then) go before the verb, just like time words. 他先刷牙，然后吃早餐 = "He first brushes his teeth, then eats breakfast".',
    focus: [
      { py: 'měitiān', note: 'měi is low then rises slightly, tiān is high. Say "may-tyen".' },
      { py: 'ránhòu', note: 'rán rises, hòu falls. The "r" is a soft buzz.' },
    ],
    words: [
      { zh: '每天', py: 'měitiān', en: 'every day' },
      { zh: '起床', py: 'qǐchuáng', en: 'to get up' },
      { zh: '然后', py: 'ránhòu', en: 'and then' },
      { zh: '面包', py: 'miànbāo', en: 'bread' },
      { zh: '同事', py: 'tóngshì', en: 'coworker' },
    ],
    lines: [
      { zh: '李明每天六点半起床。', py: 'Lǐ Míng měitiān liù diǎn bàn qǐchuáng.', en: 'Li Ming gets up at 6:30 every day.' },
      { zh: '他先刷牙，然后吃早餐。', py: 'Tā xiān shuā yá, ránhòu chī zǎocān.', en: 'He brushes his teeth first, and then has breakfast.' },
      { zh: '他常常喝咖啡，吃面包。', py: 'Tā chángcháng hē kāfēi, chī miànbāo.', en: 'He often drinks coffee and eats bread.' },
      { zh: '七点半，他坐地铁去上班。', py: 'Qī diǎn bàn, tā zuò dìtiě qù shàngbān.', en: 'At 7:30 he takes the subway to work.' },
      { zh: '今天地铁里人很多。', py: 'Jīntiān dìtiě li rén hěn duō.', en: 'Today there are a lot of people on the subway.' },
      { zh: '他八点到公司。', py: 'Tā bā diǎn dào gōngsī.', en: 'He arrives at the office at eight.' },
      { zh: '他的同事说：“早上好！”', py: 'Tā de tóngshì shuō: “Zǎoshang hǎo!”', en: 'His coworker says, "Good morning!"' },
      { zh: '李明很高兴。', py: 'Lǐ Míng hěn gāoxìng.', en: 'Li Ming is happy.' },
    ],
    questions: [
      { question: 'What time does Li Ming get up?', options: ['6:30', '7:30', '8:00'], answer: 0, explain: '六点半 is 6:30.' },
      { question: 'How does he go to work?', options: ['By subway', 'By taxi', 'On foot'], answer: 0, explain: '坐地铁 means take the subway.' },
    ],
  },

  {
    id: 'restaurant',
    title: 'Dinner at the Restaurant',
    titleZh: '在饭店吃饭',
    level: 'adult',
    minutes: 4,
    summary: 'Two friends order noodles and rice, and ask for no spice.',
    proTip: 'Listen for 一共 (yígòng, "altogether") near the end. It is the first word you will hear when the check comes, and 一 changes to tone 2 before a 4th tone.',
    focus: [
      { py: 'fúwùyuán', note: 'rise, fall, rise: fú-wù-yuán. Say it with a wave.' },
      { py: 'yígòng', note: '一 becomes tone 2 here, so say "yí-gòng".' },
    ],
    words: [
      { zh: '饭店', py: 'fàndiàn', en: 'restaurant' },
      { zh: '服务员', py: 'fúwùyuán', en: 'waiter; staff' },
      { zh: '辣', py: 'là', en: 'spicy' },
      { zh: '买单', py: 'mǎidān', en: 'the check, please' },
      { zh: '一共', py: 'yígòng', en: 'altogether' },
    ],
    lines: [
      { zh: '星期六，我和朋友去饭店。', py: 'Xīngqī liù, wǒ hé péngyou qù fàndiàn.', en: 'On Saturday, my friend and I go to a restaurant.' },
      { zh: '服务员说：“欢迎光临！几位？”', py: 'Fúwùyuán shuō: “Huānyíng guānglín! Jǐ wèi?”', en: 'The waiter says, "Welcome! How many people?"' },
      { zh: '我们说：“两位。”', py: 'Wǒmen shuō: “Liǎng wèi.”', en: 'We say, "Two."' },
      { zh: '我们要了一份面条，一份米饭。', py: 'Wǒmen yào le yí fèn miàntiáo, yí fèn mǐfàn.', en: 'We order one portion of noodles and one of rice.' },
      { zh: '我朋友不吃辣，所以我们说：“请不要太辣。”', py: 'Wǒ péngyou bù chī là, suǒyǐ wǒmen shuō: “Qǐng bú yào tài là.”', en: 'My friend does not eat spicy food, so we say, "Please not too spicy."' },
      { zh: '菜很好吃。', py: 'Cài hěn hǎochī.', en: 'The food is delicious.' },
      { zh: '我们吃得很开心。', py: 'Wǒmen chī de hěn kāixīn.', en: 'We enjoy eating.' },
      { zh: '我说：“买单！”服务员说：“一共八十五块。”', py: 'Wǒ shuō: “Mǎidān!” Fúwùyuán shuō: “Yígòng bāshíwǔ kuài.”', en: 'I say, "The check, please!" The waiter says, "85 yuan altogether."' },
    ],
    questions: [
      { question: 'What did they ask for about the spice?', options: ['Not too spicy', 'Extra spicy', 'No rice'], answer: 0, explain: '请不要太辣 means "please not too spicy".' },
      { question: 'How much was the bill?', options: ['85 yuan', '58 yuan', '15 yuan'], answer: 0, explain: '八十五块 is 85 yuan.' },
    ],
  },

  {
    id: 'lost-phone',
    title: 'Where Is My Phone?',
    titleZh: '我的手机呢？',
    level: 'adult',
    minutes: 3,
    summary: 'A phone goes missing, and Mom has the answer.',
    proTip: 'Notice 找不到 (zhǎo bu dào, "can\'t find") and 找到了 (zhǎodào le, "found it"). The little word 不 in the middle changes "can" to "cannot", so you can say the same pattern with other verbs.',
    focus: [
      { py: 'zhǎo bu dào', note: 'The 不 in the middle is light and quick, not a full bù.' },
      { py: 'shǒujī', note: 'shǒu stays low, jī is high and flat.' },
    ],
    words: [
      { zh: '找不到', py: 'zhǎo bu dào', en: "can't find" },
      { zh: '桌子', py: 'zhuōzi', en: 'table' },
      { zh: '包', py: 'bāo', en: 'bag' },
      { zh: '找到', py: 'zhǎodào', en: 'to find (successfully)' },
      { zh: '笑', py: 'xiào', en: 'to smile; to laugh' },
    ],
    lines: [
      { zh: '早上，我找不到我的手机。', py: 'Zǎoshang, wǒ zhǎo bu dào wǒ de shǒujī.', en: "This morning I can't find my phone." },
      { zh: '我问妈妈：“我的手机呢？”', py: 'Wǒ wèn māma: “Wǒ de shǒujī ne?”', en: 'I ask Mom, "Where is my phone?"' },
      { zh: '妈妈说：“在桌子上。”', py: 'Māma shuō: “Zài zhuōzi shang.”', en: 'Mom says, "On the table."' },
      { zh: '我看了看，没有。', py: 'Wǒ kàn le kàn, méiyǒu.', en: 'I look, and it is not there.' },
      { zh: '妈妈笑了：“在你的包里！”', py: 'Māma xiào le: “Zài nǐ de bāo li!”', en: 'Mom laughs, "It\'s in your bag!"' },
      { zh: '我找到了！', py: 'Wǒ zhǎodào le!', en: 'I found it!' },
      { zh: '我说：“谢谢妈妈！”', py: 'Wǒ shuō: “Xièxie māma!”', en: 'I say, "Thanks, Mom!"' },
    ],
    questions: [
      { question: 'Where was the phone?', options: ['In the bag', 'On the table', 'In the kitchen'], answer: 0, explain: '在你的包里 means "in your bag".' },
      { question: 'What does 找不到 mean?', options: ["can't find", 'found it', 'want to find'], answer: 0, explain: '不 in the middle means "cannot".' },
    ],
  },

  {
    id: 'beijing',
    title: 'A Trip to Beijing',
    titleZh: '去北京',
    level: 'adult',
    minutes: 5,
    summary: 'A first trip to Beijing by train.',
    proTip: 'Look for 过 and 了. 没去过 means "have never been", and 买了 means "bought". One says "ever", the other says "done".',
    focus: [
      { py: 'Běijīng', note: 'Běi dips low and flat, jīng is high. Say "bay-jing".' },
      { py: 'huǒchē', note: 'huǒ stays low, chē is high. Say "hwoh-chuh".' },
    ],
    words: [
      { zh: '没去过', py: 'méi qù guo', en: 'have never been' },
      { zh: '火车票', py: 'huǒchēpiào', en: 'train ticket' },
      { zh: '出发', py: 'chūfā', en: 'to depart' },
      { zh: '护照', py: 'hùzhào', en: 'passport' },
      { zh: '烤鸭', py: 'kǎoyā', en: 'roast duck' },
    ],
    lines: [
      { zh: '我想去北京。', py: 'Wǒ xiǎng qù Běijīng.', en: 'I want to go to Beijing.' },
      { zh: '我没去过北京。', py: 'Wǒ méi qù guo Běijīng.', en: 'I have never been to Beijing.' },
      { zh: '我买了一张去北京的火车票。', py: 'Wǒ mǎi le yì zhāng qù Běijīng de huǒchēpiào.', en: 'I bought a train ticket to Beijing.' },
      { zh: '火车早上八点出发。', py: 'Huǒchē zǎoshang bā diǎn chūfā.', en: 'The train leaves at eight in the morning.' },
      { zh: '我带了护照和手机。', py: 'Wǒ dài le hùzhào hé shǒujī.', en: 'I brought my passport and phone.' },
      { zh: '到了北京，我很高兴。', py: 'Dào le Běijīng, wǒ hěn gāoxìng.', en: 'When I arrive in Beijing, I am very happy.' },
      { zh: '北京很大，人很多。', py: 'Běijīng hěn dà, rén hěn duō.', en: 'Beijing is big, with many people.' },
      { zh: '我吃了北京烤鸭。', py: 'Wǒ chī le Běijīng kǎoyā.', en: 'I ate Beijing roast duck.' },
    ],
    questions: [
      { question: 'Has the speaker been to Beijing before?', options: ['No', 'Yes', 'Maybe'], answer: 0, explain: '没去过 means "have never been".' },
      { question: 'What did they eat in Beijing?', options: ['Roast duck', 'Noodles', 'Rice'], answer: 0, explain: '烤鸭 kǎoyā is roast duck.' },
    ],
  },
];

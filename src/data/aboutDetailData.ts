export interface DetailLink {
  text: string;
  url: string;
}

export interface EducationDetail {
  degree: string;
  period: string;
  institution: DetailLink;
  thesis?: string;
  advisor?: DetailLink;
}

export interface WorkExperience {
  role: string;
  organization: string;
  period: string;
}

export interface Award {
  eventName: string;
  eventUrl: string;
  projectName?: string;
  projectUrl?: string;
  prizes: string;
}

export interface Activity {
  text: string;
}

export interface Application {
  name: string;
  description?: string;
  links: DetailLink[];
}

export interface Qualification {
  text: string;
}

export interface AccountDetail {
  iconType: 'lucide' | 'fontawesome';
  iconName: string;
  label: string;
  url: string;
}

export const profileInfo = {
  affiliation: '東京大学 総合文化研究科 広域科学専攻 広域システム科学系 博士後期課程 3年',
  lab: '東京大学 馬場研究室',
  email: 'mingzhe-yang [at] g.ecc.u-tokyo.ac.jp',
};

export const accountDetails: AccountDetail[] = [
  { iconType: 'lucide', iconName: 'Github', label: 'GitHub', url: 'https://github.com/mei28' },
  { iconType: 'lucide', iconName: 'User', label: 'Qiita', url: 'https://qiita.com/mei28' },
  { iconType: 'fontawesome', iconName: 'faKaggle', label: 'Kaggle', url: 'https://www.kaggle.com/mei2828' },
  { iconType: 'fontawesome', iconName: 'faAtlassian', label: 'AtCoder', url: 'https://atcoder.jp/users/mei28' },
  { iconType: 'fontawesome', iconName: 'faSpeakerDeck', label: 'Speaker Deck', url: 'https://speakerdeck.com/mei28' },
];

export const educationDetails: EducationDetail[] = [
  {
    degree: '博士 (学術)',
    period: '2022/10 - 2025/09 (予定)',
    institution: { text: '東京大学総合文化研究科広域科学専攻広域システム科学系', url: 'https://system.c.u-tokyo.ac.jp/' },
    advisor: { text: '馬場雪乃', url: 'http://yukinobaba.jp/' },
  },
  {
    degree: '修士 (工学)',
    period: '2020/04 - 2022/03',
    institution: { text: '筑波大学理工情報生命学術院システム情報工学研究群情報理工学位プログラム', url: 'https://www.cs.tsukuba.ac.jp/' },
    thesis: '「公平な判断に向けた公平性配慮型機械学習を用いた機械教示」',
  },
  {
    degree: '学士 (情報工学)',
    period: '2016/04 - 2020/03',
    institution: { text: '筑波大学情報学群情報科学類', url: 'https://www.coins.tsukuba.ac.jp/' },
    thesis: '「教師なし機械教示」',
  },
];

export const workExperiences: WorkExperience[] = [
  { role: 'リサーチアシスタント', organization: '筑波大学', period: '2020/04 - 2022/06' },
  { role: '研究インターン', organization: 'オムロンサイニックエックス', period: '2021/12 - 現在' },
  { role: 'テクニカルスタッフ', organization: '産業技術総合研究所', period: '2018/07 - 2021/12' },
];

export const awards: Award[] = [
  {
    eventName: '2020年度 enPiT 筑波大ワークショップ',
    eventUrl: 'https://enpit.coins.tsukuba.ac.jp/tsukubaws2020/',
    projectName: 'Hobeeeeee!!',
    projectUrl: 'https://hobeeeeee.netlify.app/',
    prizes: '優秀賞, 最優秀賞, 情報理工学位プログラムリーダー特別表彰, 2021/01',
  },
  {
    eventName: 'NYLE HACKATHON IN TSUKUBA 2021',
    eventUrl: 'https://prtimes.jp/main/html/rd/p/000000091.000055900.html',
    projectName: 'Chat-gun',
    projectUrl: 'https://chat-gun.herokuapp.com/',
    prizes: '最優秀賞, 2021/07',
  },
];

export const activities: Activity[] = [
  { text: 'スタッフ, つくばSKIPアカデミー: 2018, 2019/02' },
  { text: 'ボランティアスタッフ, Unite Tokyo2019: 2019/09' },
  { text: '留学生チューター, 筑波大学: 2019/04 - 2019/09' },
  { text: 'Yamada-UIメンテナ: 2024/09 - 現在' },
];

export const applications: Application[] = [
  {
    name: '災害医療クエスト',
    links: [
      { text: 'Android', url: 'https://play.google.com/store/apps/details?id=go.aist.DMQuest' },
      { text: 'iOS', url: 'https://apps.apple.com/jp/app/zai-hai-yi-liaoquest/id1139119937' },
    ],
  },
  {
    name: '災害医療タッチ',
    links: [
      { text: 'Android', url: 'https://play.google.com/store/apps/details?id=go.aist.DMTouch' },
      { text: 'iOS', url: 'https://apps.apple.com/jp/app/zai-hai-yi-liaotatchi/id1139091258' },
    ],
  },
  {
    name: 'ジェスチャーインターフェース',
    links: [
      { text: 'HP', url: 'http://gesture-interface.jp/download/gesture_music/' },
    ],
  },
  {
    name: 'SKYLock',
    description: 'RaspberryPiと自作アンドロイドアプリを組み合わせて利用する，スマートロック＋インターホンのアプリケーションです。',
    links: [
      { text: 'DESIGNSPARK', url: 'https://www.rs-online.com/designspark/skylock-jp' },
      { text: 'GitHub', url: 'https://github.com/mei28/SKY_LOCK' },
    ],
  },
];

export const qualifications: Qualification[] = [
  { text: '普通自動車免許 取得, 2016/09' },
  { text: '基本情報技術者 合格, 2017/04' },
  { text: 'CGエンジニア検定ベーシック 合格, 2017/12' },
  { text: '日本語能力試験N1 満点合格, 2020/12' },
  { text: '実践的ITカリキュラム 修了, 2021/03' },
  { text: '乙種第4類危険物取扱者免状 取得, 2024/09' },
];

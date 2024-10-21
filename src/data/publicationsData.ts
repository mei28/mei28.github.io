import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faBookmark } from '@fortawesome/free-solid-svg-icons/faBookmark';
import '../styles/common.css';

export interface Publication {
  image?: string | null;
  icon?: IconDefinition | null;
  title: string;
  authors: string;
  info: string;
  links: { label: string; url: string }[];
  pickup: boolean;
  year: number;
  tags?: string[];
  notes?: string
}


export const publications: Publication[] = [
  {
    image: '/assets/publication/ACMMM.png',
    title: 'Audio-Visual Self-Supervision for Frame-Level Player-wise Offensive Shot Detection in Table Tennis Matches',
    authors: 'Shinji Tsuji, Atsushi Hashimoto, <span class="highlight-author">Mingzhe Yang</span>, Jiaxin Ma, Hidehito Honda, Kazutoshi Tanaka',
    info: 'Workshop on Multimedia Content Analysis in Sports (MMSports\'24), 2024',
    links: [
      { label: 'Paper', url: 'https://dl.acm.org/doi/abs/10.1145/3689061.3689064' },
      { label: 'HP', url: 'https://omron-sinicx.github.io/audio_visual_self_supervision/' }
    ],
    pickup: true,
    year: 2024,
    tags: ['Peer-reviewed', 'Sports Analytics', 'Audio-Visual']
  },
  {
    image: null,
    title: '人間の判断根拠は文脈によって異なるのか？〜信頼されるXAIに向けた人間の判断根拠理解〜',
    authors: '<span class="highlight-author">楊 明哲</span>, 香川 璃奈, 馬場 雪乃',
    info: '第38回人工知能学会全国大会論文集 (JSAI\'24), 2024',
    links: [
      { label: 'Paper', url: 'https://www.jstage.jst.go.jp/article/pjsai/JSAI2024/0/JSAI2024_2T5OS5b03/_article/-char/ja/' },
      { label: 'Slides', url: 'https://speakerdeck.com/mei28/jsai24-ren-jian-nopan-duan-gen-ju-hawen-mo-niyotuteyi-narunoka-xin-lai-sareruxainixiang-ketaren-jian-nopan-duan-gen-ju-li-jie' },
    ],
    pickup: true,
    year: 2024,
    tags: ['First author', 'Explainable AI', 'Trust AI'],
  },
  {
    image: '/assets/publication/chi24.jpeg',
    title: 'Fair Machine Guidance to Enhance Fair Decision Making in Biased People',
    authors: '<span class="highlight-author">Mingzhe Yang</span>, Hiromi Arai, Naomi Yamashita and Yukino Baba',
    info: 'Proceedings of the CHI Conference on Human Factors in Computing Systems (CHI\'24), 2024',
    links: [
      { label: 'Paper', url: 'https://dl.acm.org/doi/10.1145/3613904.3642627' },
      { label: 'Slides', url: 'https://speakerdeck.com/mei28/chi24-fair-machine-guidance-to-enhance-fair-decision-making-in-biased-people' },
      { label: 'Video', url: 'https://www.youtube.com/watch?v=ZR6GD2ruB-Q' },
    ],
    pickup: true,
    year: 2024,
    tags: ['First author', 'Peer-reviewed', 'Fairness', 'Human-AI Decision Making'],
    notes: '<span class="text-green-600">Acceptance rate = 1060/4028 (26.3%)</span>'
  },
  {
    image: null,
    title: 'Fair Machine Guidance to Enhance Fair Decision Making',
    authors: '<span class="highlight-author">Mingzhe Yang</span>',
    info: 'Proceedings of the AAAI Symposium Series, 2024',
    links: [
      { label: 'Paper', url: 'https://ojs.aaai.org/index.php/AAAI-SS/article/view/31255' },
    ],
    pickup: false,
    year: 2024,
    tags: ['First author', 'Peer-reviewed', 'Fairness',],
  },
  {
    image: null,
    title: 'SwipeGANSpace: Swipe-to-Compare Image Generation via Efficient Latent Space Exploration',
    authors: 'Yuto Nakashima, <span class="highlight-author">Mingzhe Yang</span> and Yukino Baba',
    info: 'Proceedings of the 29th International Conference on Intelligent User Interfaces (IUI\'24), 2024',
    links: [
      { label: 'Paper', url: 'https://dl.acm.org/doi/abs/10.1145/3640543.3645141' },
    ],
    pickup: true,
    year: 2024,
    tags: ['GAN', 'Bayesian Optimization'],
    notes: '<span class="text-green-600">Acceptance rate = 65/250 (26%)</span>'
  },
  {
    image: null,
    title: '文献理解のための人間の応答を利用したプロンプト最適化',
    authors: '今川涼平, 守山慧, <span class="highlight-author">楊明哲</span>, 馬場雪乃',
    info: '言語処理学会第30回年次大会(NLP2024), 2024',
    links: [
      { label: 'Paper', url: '/assets/publication/A5-4.pdf' },
    ],
    pickup: false,
    year: 2024,
    tags: ['NLP', 'LLM'],
  },
  {
    image: null,
    title: '卓球の得点予測における重要要素の分析',
    authors: '<span class="highlight-author">楊明哲</span>, 橋本敦史, 馬家昕, 本田秀仁, 田中 一敏',
    info: '第16回データ工学と情報マネジメントに関するフォーラム (DEIM\'24), 2024',
    links: [
      { label: 'Paper', url: '/assets/publication/T5-A-9-02.pdf' },
      { label: 'Slides', url: 'https://speakerdeck.com/mei28/deim2024-zhuo-qiu-node-dian-yu-ce-niokeruzhong-yao-yao-su-nofen-xi' },
      { label: 'Poster', url: '/assets/publication/deim_poster.pdf' } // Updated URL for local PDF
    ],
    pickup: false,
    tags: ['First author', 'Sports Analytics'],
    year: 2024,
  },
  {
    image: null,
    title: 'SwipeGANSpace: 潜在空間の関心次元探索によるスワイプ操作に基づく嗜好画像生成',
    authors: '中島柚斗, <span class="highlight-author">楊明哲</span>, 馬場雪乃',
    info: '第31回インタラクティブシステムとソフトウェアに関するワークショップ(WISS\'23), 2023',
    links: [
      { label: 'Paper', url: 'https://www.wiss.org/WISS2023Proceedings/data/19.pdf' },
      { label: 'Demo', url: 'https://www.wiss.org/WISS2023Proceedings/data/19.mp4' }
    ],
    pickup: false,
    year: 2023,
    tags: ['Peer-reviewed', 'GAN', 'Bayesian Optimization'],

  },
  {
    image: '/assets/publication/MIRU2023_thumnail.jpg',
    title: '卓球映像からの打球の攻守推定',
    authors: '<span class="highlight-author">楊明哲</span>, 橋本敦史, 馬家昕, 本田秀仁, 田中 一敏',
    info: '画像の認識・理解シンポジウム (MIRU2023), 2023',
    links: [
      { label: 'Paper', url: '/assets/publication/MIRU2023.pdf' },
      { label: 'Poster', url: '/assets/publication/MIRU2023_poster.pdf' }
    ],
    pickup: false,
    year: 2023,
    tags: ['First author', 'Sports Analytics'],
  },
  {
    image: null,
    title: 'スワイプ操作を用いた潜在的空間の探索による嗜好画像生成',
    authors: '中島柚斗, <span class="highlight-author">楊明哲</span>, 馬場雪乃',
    info: '第37回人工知能学会全国大会 (JSAI\'23), 2023',
    links: [
      { label: 'Paper', url: 'https://www.jstage.jst.go.jp/article/pjsai/JSAI2023/0/JSAI2023_2K1GS903/_article/-char/ja' },
      { label: 'Slide', url: 'https://speakerdeck.com/yutonakashima/swipegan-preference-image-generation-by-latent-space-exploration-using-swipe-operation' }
    ],
    pickup: false,
    year: 2023,
    tags: ['GAN', 'Bayesian Optimization'],
  },
  {
    image: null,
    title: 'インタラクティブなスポーツにおけるプレースタイルの変化～卓球の試合における得点パターンを用いた分析～',
    authors: '本田秀仁, <span class="highlight-author">楊明哲</span>, 橋本敦史, 馬家昕, 田中 一敏, 白砂大',
    info: 'HCGシンポジウム2022, 2022',
    links: [
      // { label: 'Paper', url: 'https://www.jstage.jst.go.jp/article/pjsai/JSAI2021/0/JSAI2021_2C3OS9a03/_article/-char/ja/' },
    ],
    pickup: false,
    tags: ['Sports Analytics'],
    year: 2022,
  },
  {
    image: null,
    title: '機械教示と公平性配慮型機械学習を用いた無意識バイアスの矯正',
    authors: '<span class="highlight-author">楊明哲</span>, 荒井ひろみ, 馬場雪乃',
    info: '第35回人工知能学会全国大会 (JSAI\'21), 2021',
    links: [
      { label: 'Paper', url: 'https://www.jstage.jst.go.jp/article/pjsai/JSAI2021/0/JSAI2021_2C3OS9a03/_article/-char/ja/' },
    ],
    pickup: false,
    tags: ['First author', 'Fairness'],
    year: 2021,
  },
  {
    image: null,
    title: 'Iterative Machine Teaching without Teachers',
    authors: '<span class="highlight-author">Mingzhe Yang</span> and Yukino Baba',
    info: 'arXiv preprint arXiv:2006.15339, 2020',
    links: [
      { label: 'Paper', url: 'https://arxiv.org/abs/2006.15339' },
    ],
    pickup: false,
    year: 2020,
    tags: ['First author', 'Machine Teaching'],
  }
];




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
}


export const publications: Publication[] = [
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
  },
  {
    image: null,
    title: '卓球の得点予測における重要要素の分析',
    authors: '<span class="highlight-author">楊明哲</span>, 橋本敦史, 馬家昕, 本田秀仁, 田中 一敏',
    info: '第16回データ工学と情報マネジメントに関するフォーラム (DEIM2024), 2024',
    links: [
      { label: 'Paper', url: '/assets/publication/T5-A-9-02.pdf' },
      { label: 'Slides', url: 'https://speakerdeck.com/mei28/deim2024-zhuo-qiu-node-dian-yu-ce-niokeruzhong-yao-yao-su-nofen-xi' },
      { label: 'Poster', url: '/assets/publication/deim_poster.pdf' } // Updated URL for local PDF
    ],
    pickup: true,
    year: 2024,
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
  },
];




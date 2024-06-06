import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faBookmark, faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import { Sections, sectionTitles, getNextSection } from '../sections';

import '../styles/common.css';

interface Publication {
  image?: string | null;
  icon?: IconDefinition | null;
  title: string;
  authors: string;
  info: string;
  links: { label: string; url: string }[];
}

const publications: Publication[] = [
  {
    image: '/assets/publication/chi24.jpeg',
    title: 'Fair Machine Guidance to Enhance Fair Decision Making in Biased People',
    authors: '<span class="highlight-author">Mingzhe Yang</span>, Hiromi Arai, Naomi Yamashita and Yukino Baba',
    info: 'Proceedings of the CHI Conference on Human Factors in Computing Systems (CHI\'24), 2024',
    links: [
      { label: 'Paper', url: 'https://dl.acm.org/doi/10.1145/3613904.3642627' },
      { label: 'Slides', url: 'https://speakerdeck.com/mei28/chi24-fair-machine-guidance-to-enhance-fair-decision-making-in-biased-people' },
      { label: 'Video', url: 'https://www.youtube.com/watch?v=ZR6GD2ruB-Q' },
    ]
  },
  {
    image: null,
    title: 'Fair Machine Guidance to Enhance Fair Decision Making',
    authors: '<span class="highlight-author">Mingzhe Yang</span>',
    info: 'Proceedings of the AAAI Symposium Series, 2024',
    links: [
      { label: 'Paper', url: 'https://ojs.aaai.org/index.php/AAAI-SS/article/view/31255' },
    ]
  },
  {
    image: null,
    title: 'SwipeGANSpace: Swipe-to-Compare Image Generation via Efficient Latent Space Exploration',
    authors: 'Yuto Nakashima, <span class="highlight-author">Mingzhe Yang</span> and Yukino Baba',
    info: 'Proceedings of the 29th International Conference on Intelligent User Interfaces (IUI\'24), 2024',
    links: [
      { label: 'Paper', url: 'https://dl.acm.org/doi/abs/10.1145/3640543.3645141' },
    ]
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
    ]
  },
  {
    image: '/assets/publication/MIRU2023_thumnail.jpg',
    title: '卓球映像からの打球の攻守推定',
    authors: '<span class="highlight-author">楊明哲</span>, 橋本敦史, 馬家昕, 本田秀仁, 田中 一敏',
    info: '画像の認識・理解シンポジウム (MIRU2023), 2023',
    links: [
      { label: 'Paper', url: '/assets/publication/MIRU2023.pdf' },
      { label: 'Poster', url: '/assets/publication/MIRU2023_poster.pdf' }
    ]
  },
  {
    image: null,
    title: '文献理解のための人間の応答を利用したプロンプト最適化',
    authors: '今川涼平, 守山慧, <span class="highlight-author">楊明哲</span>, 馬場雪乃',
    info: '言語処理学会第30回年次大会(NLP2024), 2024',
    links: [
      { label: 'Paper', url: '/assets/publication/A5-4.pdf' },
    ]
  },
];


const renderPublicationItem = (publication: Publication, index: number): JSX.Element => (
  <div key={index} className="bg-white border border-gray-300 p-4 rounded-lg mb-6">
    <div className="flex flex-col md:flex-row items-center md:items-start">
      <div className="md:mr-4 mb-4 md:mb-0 w-36 flex-shrink-0">
        {publication.image ? (
          <img
            src={publication.image}
            alt={publication.title}
            className="rounded-lg w-full"
          />
        ) : publication.icon ? (
          <FontAwesomeIcon icon={publication.icon} className="text-red-500 w-20 h-20" />
        ) : (
          <FontAwesomeIcon icon={faBookmark} className="text-red-500 w-20 h-20" />
        )}
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold mb-2">
          {publication.title}
        </h3>
        <p className="text-gray-700 italic mb-2" dangerouslySetInnerHTML={{ __html: publication.authors }} />
        <p className="text-gray-600 mb-4">{publication.info}</p>
        <div className="flex flex-wrap gap-2">
          {publication.links.map((link, idx) => (
            <button
              key={idx}
              className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
              onClick={() => {
                const url = link.url;
                window.open(url, '_blank');
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Publications: React.FC = () => {
  return (
    <section id="publications" className="section-container bg-gray-50">
      <p className="section-subtitle">Watch My</p>
      <h1 className="section-title">Publications</h1>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {publications.map(renderPublicationItem)}
      </div>
    </section>
  );
};

export default Publications;


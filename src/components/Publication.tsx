import React from 'react';
import '../styles/PublicationSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faBookmark, faAnglesDown } from '@fortawesome/free-solid-svg-icons';

import chi24pic from '../assets/publication/chi24.jpeg';

interface Publication {
  image?: any | null;
  icon?: IconDefinition | null;
  title: string;
  authors: string;
  info: string;
  links: { label: string; url: string }[];
}

const publications: Publication[] = [
  {
    image: chi24pic,
    title: 'Fair Machine Guidance to Enhance Fair Decision Making in Biased People',
    authors: 'Mingzhe Yang, Hiromi Arai, Naomi Yamashita and Yukino Baba',
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
    authors: 'Mingzhe Yang',
    info: 'Proceedings of the AAAI Symposium Series, 2024',
    links: [
      { label: 'Paper', url: 'https://ojs.aaai.org/index.php/AAAI-SS/article/view/31255' },
    ]
  },
  {
    image: null,
    title: 'SwipeGANSpace: Swipe-to-Compare Image Generation via Efficient Latent Space Exploration',
    authors: 'Yuto Nakashima, Mingzhe Yang and Yukino Baba',
    info: 'Proceedings of the 29th International Conference on Intelligent User Interfaces (IUI\'24), 2024',
    links: [
      { label: 'Paper', url: 'https://dl.acm.org/doi/abs/10.1145/3640543.3645141' },
    ]
  },
  {
    image: null,
    title: '卓球の得点予測における重要要素の分析',
    authors: '楊明哲, 橋本敦史, 馬家昕, 本田秀仁, 田中 一敏',
    info: '第16回データ工学と情報マネジメントに関するフォーラム (DEIM2024), 2024',
    links: [
      { label: 'Paper', url: 'https://dl.acm.org/doi/10.1145/3613904.3642627' },
      { label: 'Slides', url: 'https://speakerdeck.com/mei28/deim2024-zhuo-qiu-node-dian-yu-ce-niokeruzhong-yao-yao-su-nofen-xi' },
      { label: 'Poster', url: '/src/assets/publication/deim_poster.pdf' } // Updated URL for local PDF
    ]
  },
];

const renderPublicationItem = (publication: Publication, index: number): JSX.Element => (
  <div key={index} className="details-container color-container">
    <div className="publication-item">
      <div className="image-container">
        {publication.image ? (
          <img
            src={publication.image}
            alt={publication.title}
            className="publication-img"
          />
        ) : publication.icon ? (
          <FontAwesomeIcon icon={publication.icon} className="custom-icon" />
        ) : (
          <FontAwesomeIcon icon={faBookmark} className="default-icon" />
        )}
      </div>
      <div className="text-container">
        <h3 className="publication-title">
          {publication.title}
        </h3>
        <p className="authors">{publication.authors}</p>
        <p className="info">{publication.info}</p>
        <div className="btn-container">
          {publication.links.map((link, idx) => (
            <button
              key={idx}
              className="btn btn-color-2 publication-btn"
              onClick={() => window.open(link.url)}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </div>
    <FontAwesomeIcon icon={faAnglesDown} className='icon arrow' onClick={() => window.location.href = './#experience'} />
  </div>
);

const Publications: React.FC = () => {
  return (
    <section id="publications">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Publications</h1>
      <div className="experience-details-container">
        {publications.map(renderPublicationItem)}
      </div>
    </section>
  );
};

export default Publications;


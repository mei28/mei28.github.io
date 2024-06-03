import React from 'react';
import '../styles/PublicationSection.css';

interface Publication {
  image: string;
  title: string;
  authors: string;
  info: string;
  links: { label: string; url: string }[];
}

const publications: Publication[] = [
  {
    image: './assets/publication-1.png',
    title: 'Publication One',
    authors: 'Author A, Author B, Author C',
    info: 'Journal of Research, 2021',
    links: [
      { label: 'Slides', url: 'https://example.com/slides' },
      { label: 'Paper', url: 'https://example.com/paper' }
    ]
  },
  {
    image: './assets/publication-2.png',
    title: 'Publication Two',
    authors: 'Author D, Author E, Author F',
    info: 'Conference Proceedings, 2022',
    links: [
      { label: 'Slides', url: 'https://example.com/slides' },
      { label: 'Paper', url: 'https://example.com/paper' }
    ]
  },
];

const renderPublicationItem = (publication: Publication, index: number): JSX.Element => (
  <div key={index} className="details-container color-container">
    <div className="article-container">
      <img
        src={publication.image}
        alt={publication.title}
        className="publication-img"
      />
    </div>
    <h2 className="experience-sub-title publication-title">
      {publication.title}
    </h2>
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


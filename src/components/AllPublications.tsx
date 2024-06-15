import React from 'react';
import { publications, Publication } from '../data/publicationsData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';

// 年ごとに出版物をグループ化する関数
const groupPublicationsByYear = (publications: Publication[]) => {
  return publications.reduce((acc: Record<number, Publication[]>, publication) => {
    const { year } = publication;
    if (!acc[year]) acc[year] = [];
    acc[year].push(publication);
    return acc;
  }, {});
};

const renderPublicationItem = (publication: Publication, index: number) => (
  <div key={index} className="bg-white border border-gray-300 p-4 rounded-lg shadow-md">
    <div className="flex flex-col md:flex-row items-start">
      <div className="flex-1">
        <h3 className="text-xl font-semibold mb-2">{publication.title}</h3>
        <p className="text-gray-700 italic mb-2" dangerouslySetInnerHTML={{ __html: publication.authors }} />
        <p className="text-gray-600 mb-4">{publication.info}</p>
        <div className="flex flex-wrap gap-2">
          {publication.links.map((link, idx) => (
            <button key={idx} className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition" onClick={() => window.open(link.url, '_blank')}>
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const AllPublications: React.FC = () => {
  const groupedPublications = groupPublicationsByYear(publications);

  return (
    <section id="all-publications" className="px-4 py-16 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-12">All Publications</h1>
      {Object.entries(groupedPublications).sort(([yearA], [yearB]) => Number(yearB) - Number(yearA)).map(([year, pubs]) => (
        <div key={year} className="mb-12">
          <h2 className="text-2xl font-bold mb-6">{year}</h2>
          <div className="grid grid-cols-1 gap-4">
            {pubs.map(renderPublicationItem)}
          </div>
        </div>
      ))}
      <div className="text-center mt-8">
        <a href="/" className="inline-block px-6 py-3 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700">
          Back to Home <FontAwesomeIcon icon={faAnglesRight} className="ml-2" />
        </a>
      </div>
    </section>
  );
};

export default AllPublications;


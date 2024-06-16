import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { Sections, sectionTitles, getNextSection } from '../sections';
import { publications, Publication } from '../data/publicationsData';
import '../styles/common.css';


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
  const pickupPublications = publications.filter(pub => pub.pickup);
  return (
    <section id="publications" className="section-container bg-gray-50">
      <p className="section-subtitle">Watch My</p>
      <h1 className="section-title">Publications</h1>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {pickupPublications.map(renderPublicationItem)}
      </div>
      <div className="text-center mt-8">
        <a href="/#/all-publications" className="inline-block px-6 py-3 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700">
          View My All Publications! <FontAwesomeIcon icon={faAnglesRight} className="ml-2" />
        </a>
      </div>
    </section>
  );
};

export default Publications;


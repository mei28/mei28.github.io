// src/components/AllPublications.tsx
import React from 'react';
import { publications, Publication } from '../data/publicationsData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faBookmark, faFilePdf, faImage, faPlay, faVideo, faPersonChalkboard } from '@fortawesome/free-solid-svg-icons';

// 年ごとに出版物をグループ化する関数
const groupPublicationsByYear = (publications: Publication[]) => {
  return publications.reduce((acc: Record<number, Publication[]>, publication) => {
    const { year } = publication;
    if (!acc[year]) acc[year] = [];
    acc[year].push(publication);
    return acc;
  }, {});
};

// リンクの種類に応じてアイコンを返す関数
const getLinkIcon = (label: string) => {
  switch (label.toLowerCase()) {
    case 'paper':
      return faFilePdf;
    case 'poster':
      return faImage;
    case 'demo':
      return faPlay;
    case 'slides':
      return faPersonChalkboard;
    case 'video':
      return faVideo;
    default:
      return faBookmark; // デフォルトアイコン
  }
};

// タグの内容に応じて色を返す関数
const getTagColor = (tag: string) => {
  switch (tag.toLowerCase()) {
    // bg-foo-100, text-foo-800
    case 'first author':
      return 'bg-green-100 text-green-800';
    case 'peer-reviewed':
      return 'bg-blue-100 text-blue-800';
    default:
      return 'bg-gray-100 text-gray-800'; // デフォルトの色
  }
};

// 特定のキーワードの色を変更する関数
const highlightKeywords = (text: string, keywords: string[]) => {
  let highlightedText = text;
  keywords.forEach(keyword => {
    const regex = new RegExp(`(${keyword})`, 'gi');
    highlightedText = highlightedText.replace(regex, '<span class="text-red-500">$1</span>');
  });
  return highlightedText;
};

const renderPublicationItem = (publication: Publication, index: number) => (
  <div key={index} className="bg-white border border-gray-300 p-4 rounded-lg shadow-md">
    <div className="grid grid-cols-1 lg:grid-cols-8 gap-4 items-start">
      {/* 画像 */}
      <div className="lg:col-span-2 flex justify-center items-center">
        {publication.image ? (
          <img
            src={publication.image}
            alt={publication.title}
            className="rounded-lg max-w-full max-h-48 object-cover"
          />
        ) : publication.icon ? (
          <FontAwesomeIcon icon={publication.icon} className="text-red-500 w-20 h-20" />
        ) : (
          <FontAwesomeIcon icon={faBookmark} className="text-red-500 w-20 h-20" />
        )}
      </div>

      {/* 論文情報 */}
      <div className="lg:col-span-4 flex flex-col justify-center">
        <h3 className="text-xl font-semibold mb-2">{publication.title}</h3>
        <p className="text-gray-700 italic mb-2" dangerouslySetInnerHTML={{ __html: publication.authors }} />
        <p className="text-gray-600 mb-4">{publication.info}</p>
        {publication.notes && (
          <p className="text-gray-600 whitespace-pre-line" dangerouslySetInnerHTML={{ __html: highlightKeywords(publication.notes, []) }}></p> // notesを複数行対応し、特定のキーワードをハイライト
        )}
      </div>

      {/* 各種リンク */}
      <div className="lg:col-span-1 flex flex-wrap justify-center gap-2 mb-4 lg:mb-0">
        {publication.links.map((link, idx) => (
          <button
            key={idx}
            className="flex items-center px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
            onClick={() => window.open(link.url, '_blank')}
          >
            <FontAwesomeIcon icon={getLinkIcon(link.label)} className="mr-2" />
            {link.label}
          </button>
        ))}
      </div>

      {/* タグ */}
      <div className="lg:col-span-1 flex flex-wrap justify-center gap-2">
        {publication.tags && (
          <div className="flex flex-wrap justify-center gap-2 mb-2">
            {publication.tags.map((tag, idx) => (
              <span key={idx} className={`px-4 py-1 rounded-full text-sm ${getTagColor(tag)}`}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
);

const AllPublications: React.FC = () => {
  const groupedPublications = groupPublicationsByYear(publications);

  return (
    <section id="all-publications" className="my-8 px-4 py-16 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-12">All Publications</h1>
      {Object.entries(groupedPublications).sort(([yearA], [yearB]) => Number(yearB) - Number(yearA)).map(([year, pubs]) => (
        <div key={year} className="mb-12">
          <h2 className="text-2xl font-bold mb-6">{year}</h2>
          <div className="grid gap-4">
            {pubs.map(renderPublicationItem)}
          </div>
        </div>
      ))}
      <div className="text-center mt-8">
        <a href="/" className="inline-block px-6 py-3 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700">
          Back to Home <FontAwesomeIcon icon={faAnglesLeft} className="ml-2" />
        </a>
      </div>
    </section>
  );
};

export default AllPublications;


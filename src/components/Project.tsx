import React from 'react';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Sections, sectionTitles } from '../sections';
import { ProjectData, projectsData } from '../data/projectsData';
import '../styles/common.css';

const ProjectItem: React.FC<ProjectData> = ({ imgSrc, imgAlt, title, description, links }) => {
  const isExternalLink = (url: string) => {
    return url.startsWith('http://') || url.startsWith('https://');
  };

  const renderImage = (src: string | null, alt: string) => {
    if (!src) {
      return null;
    }

    return <img src={src} alt={alt} className="rounded-2xl w-9/10 h-auto" />;
  };

  return (
    <div className="border border-gray-400 bg-gray-50 p-4 rounded-xl mb-6">
      <div className="mb-4">
        {renderImage(imgSrc, imgAlt)}
      </div>
      <h2 className="text-xl font-semibold mb-2 text-black">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {links.map((link, index) => (
          <button
            key={index}
            className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
            onClick={() => window.location.href = link.url}
          >
            {link.icon && <FontAwesomeIcon icon={link.icon} className="mr-2" />}
            {link.label}
          </button>
        ))}
      </div>
    </div>
  );
};

const ProjectList: React.FC = () => {
  return (
    <section id={Sections.Projects} className="section-container bg-gray-50">
      <p className="text-center text-xl mb-4">Browse My Recent</p>
      <h1 className="text-center text-3xl font-bold mb-12">{sectionTitles[Sections.Projects]}</h1>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2">
        {projectsData.map((project, index) => (
          <ProjectItem
            key={index}
            imgSrc={project.imgSrc}
            imgAlt={project.imgAlt}
            title={project.title}
            description={project.description}
            links={project.links}
          />
        ))}
      </div>

      <div className="text-center mt-8">
        <a href="/#/all-projects" className="inline-block px-6 py-3 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700">
          View My All Projects! <FontAwesomeIcon icon={faAnglesRight} className="ml-2" />
        </a>
      </div>
    </section>
  );
};

export default ProjectList;


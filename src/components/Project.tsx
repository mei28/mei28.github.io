import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import { Sections, sectionTitles, getNextSection } from '../sections';
import { projectsData } from '../data/projectsData';
import '../styles/common.css';

interface Link {
  label: string;
  url: string;
}

interface Project {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  links: Link[];
}

const ProjectItem: React.FC<Project> = ({ imgSrc, imgAlt, title, description, links }) => {
  return (
    <div className="border border-gray-400 bg-gray-50 p-4 rounded-xl mb-6">
      <div className="mb-4">
        <img src={imgSrc} alt={imgAlt} className="rounded-2xl w-9/10 h-auto" />
      </div>
      <h2 className="text-xl font-semibold mb-2 text-black">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {links.map((link, index) => (
          <button
            key={index}
            className="px-4 py-2 border border-gray-400 rounded-full transition hover:bg-gray-200"
            onClick={() => window.location.href = link.url}
          >
            {link.label}
          </button>
        ))}
      </div>
    </div>
  );
};

const Project: React.FC = () => {
  return (
    <section id={Sections.Projects} className="section-container bg-gray-50">
      <p className="text-center text-xl mb-4">Browse My Recent</p>
      <h1 className="text-center text-3xl font-bold mb-12">{sectionTitles[Sections.Projects]}</h1>

      <div className="flex flex-col gap-6">
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
    </section>
  );
};

export default Project;


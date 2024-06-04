import React from 'react';
import '../styles/ProjectSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import { Sections, sectionTitles, getNextSection } from '../sections';

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

const projectData: Project[] = [
  // {
  //   imgSrc: "./assets/project-1.png",
  //   imgAlt: "Project 1",
  //   title: "Project One",
  //   description: "This is a brief description of Project One.",
  //   links: [
  //     { label: "Github", url: "https://github.com/" },
  //     { label: "Live Demo", url: "https://github.com/" }
  //   ]
  // },
  // {
  //   imgSrc: "./assets/project-2.png",
  //   imgAlt: "Project 2",
  //   title: "Project Two",
  //   description: "This is a brief description of Project Two.",
  //   links: [
  //     { label: "Github", url: "https://github.com/" },
  //     { label: "Live Demo", url: "https://github.com/" }
  //   ]
  // },
  // {
  //   imgSrc: "./assets/project-3.png",
  //   imgAlt: "Project 3",
  //   title: "Project Three",
  //   description: "This is a brief description of Project Three.",
  //   links: [
  //     { label: "Github", url: "https://github.com/" },
  //     { label: "Live Demo", url: "https://github.com/" }
  //   ]
  // }
];

const ProjectItem: React.FC<Project> = ({ imgSrc, imgAlt, title, description, links }) => {
  return (
    <div className="details-container color-container">
      <div className="article-container">
        <img src={imgSrc} alt={imgAlt} className="project-img" />
      </div>
      <h2 className="experience-sub-title project-title">{title}</h2>
      <p className="project-description">{description}</p>
      <div className="btn-container">
        {links.map((link, index) => (
          <button
            key={index}
            className="btn btn-color-2 project-btn"
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
  const nextSection = getNextSection(Sections.Projects);

  return (
    <section id={Sections.Projects}>
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">{sectionTitles[Sections.Projects]}</h1>

      <p className="section__text__p2" style={{ textAlign: 'center', margin: '2rem 0' }}>Coming Soon...</p>

      <div className="experience-details-container">
        <div className="about-containers">
          {projectData.map((project, index) => (
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
      </div>
      {nextSection && (
        <FontAwesomeIcon
          icon={faAnglesDown}
          className='icon arrow'
          onClick={() => window.location.href = `#${nextSection}`}
        />
      )}
    </section>
  );
};

export default Project;


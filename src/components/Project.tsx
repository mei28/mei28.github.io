import React from 'react';
import '../styles/ProjectSection.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import { Sections, sectionTitles, getNextSection } from '../sections';

const nextSection = getNextSection(Sections.Projects);

const Project: React.FC = () => {
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src="./assets/project-1.png"
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Project One</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => window.location.href = 'https://github.com/'}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => window.location.href = 'https://github.com/'}
              >
                Live Demo
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src="./assets/project-2.png"
                alt="Project 2"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Project Two</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => window.location.href = 'https://github.com/'}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => window.location.href = 'https://github.com/'}
              >
                Live Demo
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src="./assets/project-3.png"
                alt="Project 3"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Project Three</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => window.location.href = 'https://github.com/'}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => window.location.href = 'https://github.com/'}
              >
                Live Demo
              </button>
            </div>
          </div>
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
  )
};

export default Project;

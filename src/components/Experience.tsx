import React from 'react';
import '../styles/ExperienceSection.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import checkmarkIcon from '../assets/checkmark.png';
import { Sections, sectionTitles, getNextSection } from '../sections';

// Define the Skill interface
interface Skill {
  name: string;
  level: string;
}

const Experience: React.FC = () => {
  // Define the frontend and backend skills arrays with the Skill type
  const frontendSkills: Skill[] = [
    { name: 'HTML', level: 'Experienced' },
    { name: 'CSS', level: 'Experienced' },
    { name: 'SASS', level: 'Intermediate' },
    { name: 'JavaScript', level: 'Basic' },
    { name: 'TypeScript', level: 'Basic' },
    { name: 'Material UI', level: 'Intermediate' }
  ];

  const backendSkills: Skill[] = [
    { name: 'PostgreSQL', level: 'Basic' },
    { name: 'Node JS', level: 'Intermediate' },
    { name: 'Express JS', level: 'Intermediate' },
    { name: 'Git', level: 'Intermediate' }
  ];

  // Define the renderSkills function with the appropriate type
  const renderSkills = (skills: Skill[]) => (
    skills.map((skill, index) => (
      <article key={index}>
        <img src={checkmarkIcon} alt="Experience icon" className="icon" />
        <div>
          <h3>{skill.name}</h3>
          <p>{skill.level}</p>
        </div>
      </article>
    ))
  );

  const nextSection = getNextSection(Sections.Experience);

  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              {renderSkills(frontendSkills)}
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Backend Development</h2>
            <div className="article-container">
              {renderSkills(backendSkills)}
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
  );
};

export default Experience;


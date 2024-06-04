import React from 'react';
import aboutPic from '/assets/about/about-pic.jpg';
import '../styles/AboutSection.css';
import '../styles/Sections.css';
import '../styles/Icons.css';
import '../styles/Buttons.css';
import { Sections, getNextSection } from '../sections';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass, faUserGroup } from '@fortawesome/free-solid-svg-icons';

interface Education {
  degree: string;
  period: string;
  institution: string;
}

interface Interest {
  item: string;
}

const educationDetails: Education[] = [
  {
    degree: 'B.Sc. in Information Engineering',
    period: '2016 - 2020',
    institution: 'University of Tsukuba'
  },
  {
    degree: 'M.Sc. in Engineering',
    period: '2020 - 2022',
    institution: 'University of Tsukuba'
  },
  {
    degree: 'Ph.D. in Arts and Sciences',
    period: '2022 - now',
    institution: 'The University of Tokyo'
  }
];

const interests: Interest[] = [
  { item: 'Human-AI Collaboration' },
  { item: 'Explainable AI' },
  { item: 'Human-Computer Interaction' }
];

const About: React.FC = () => {
  const nextSection = getNextSection(Sections.About);
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img
            src='/assets/about/about-pic.jpg'
            alt="Profile picture"
            className="about-pic"
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <FontAwesomeIcon icon={faMagnifyingGlass} className='icon' />
              <h3>Interests</h3>
              {interests.map((interest, index) => (
                <div key={index} className="interest-item">
                  <li>{interest.item}</li>
                </div>
              ))}
            </div>
            <div className="details-container">
              <FontAwesomeIcon icon={faUserGroup} className='icon' />
              <h3>Education</h3>
              {educationDetails.map((edu, index) => (
                <div key={index} className="education-item">
                  <h4>{edu.degree}</h4>
                  <p>@{edu.institution}, {edu.period}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-container">
            <p>I am a Ph. D. student at the University of Tokyo in Japan.
            </p>
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
}

export default About;


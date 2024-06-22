import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight, faAnglesDown, faMagnifyingGlass, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { Sections, getNextSection } from '../sections';
import '../styles/common.css';

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
  return (
    <section id="about" className="section-container">
      <p className="section-subtitle">Get To Know More</p>
      <h1 className="section-title">About Me</h1>
      <div className="flex flex-wrap lg:flex-nowrap justify-between items-stretch gap-16 lg:gap-12">
        <div className="flex justify-center items-center flex-1 h-96 w-full lg:h-auto lg:w-1/3">
          <img
            src='/assets/about/about-pic.jpg'
            alt="Profile picture"
            className="rounded-2xl object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col lg:w-2/3 gap-8">
          <div className="flex flex-wrap lg:flex-nowrap justify-between items-start gap-8 w-full">
            <div className="flex flex-col justify-between p-6 bg-white rounded-2xl border border-gray-400 text-center flex-1 min-h-full">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="text-2xl mb-4" />
              <h3 className="text-xl font-semibold mb-4">Interests</h3>
              <ul className="text-left flex-grow">
                {interests.map((interest, index) => (
                  <li key={index} className="mb-4 font-semibold">{interest.item}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-between p-6 bg-white rounded-2xl border border-gray-400 text-center flex-1 min-h-full">
              <FontAwesomeIcon icon={faUserGroup} className="text-2xl mb-4" />
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <ul className="text-left flex-grow">
                {educationDetails.map((edu, index) => (
                  <li key={index} className="mb-4">
                    <h4 className="font-semibold">{edu.degree}</h4>
                    <p className="text-gray-600">@{edu.institution}, {edu.period}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center text-gray-800">
            <p>I am a Ph. D. student at the University of Tokyo in Japan.</p>
          </div>

          <div className="text-center mt-8">
            <a href="/#/all-about" className="inline-block px-6 py-3 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700">
              View My Profiles! <FontAwesomeIcon icon={faAnglesRight} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;


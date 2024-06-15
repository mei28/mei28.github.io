import React from 'react';
import { skills } from '../data/skillData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';

const SkillsOverview: React.FC = () => {
  const mainSkills = skills.filter(skill => skill.isHome);

  return (
    <section id="experience" className="section-container py-16">
      <p className="section-subtitle">Explore My</p>
      <h1 className="section-title">Experience</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {mainSkills.map((skill, index) => (
          <div key={index} className="bg-white border border-gray-300 p-6 rounded-lg shadow-md text-center">
            <div className="flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={skill.icon} className="text-4xl mr-2" />
              <h3 className="text-xl font-semibold">{skill.name}</h3>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <p className="text-gray-600 mt-2">{skill.level}%</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <a href="/all-experiences" className="inline-block px-6 py-3 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700">
          View My All Experiences! <FontAwesomeIcon icon={faAnglesRight} className="ml-2" />
        </a>
      </div>
    </section>
  );
};

export default SkillsOverview;


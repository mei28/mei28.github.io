import React from 'react';
import { skills, Skill } from '../data/skillData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import ReactGA from 'react-ga4';

const SkillsDetail: React.FC = () => {

  ReactGA.send({
    hintType: 'pageview',
    page: '/all-experiences',
    title: 'skill page'
  })
  return (
    <section id="skills-detail" className="section-container bg-gray-50 py-16">
      <h1 className="text-3xl font-bold text-center mb-12">All Skills</h1>
      <div className="flex flex-col items-center gap-8">
        <SkillSection title="Programming Languages" type="language" />
        <SkillSection title="Frameworks" type="framework" />
        <SkillSection title="Tools" type="tool" />
      </div>
      <div className="text-center mt-8">
        <a href="/" className="inline-block px-6 py-3 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700">
          <FontAwesomeIcon icon={faAnglesLeft} className="ml-2" /> Back to Home
        </a>
      </div>
    </section>
  );
};

const SkillSection: React.FC<{ title: string, type: string }> = ({ title, type }) => {
  const filteredSkills = skills.filter(skill => skill.type === type);

  return (
    <div className="w-full max-w-4xl">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSkills.map((skill, index) => (
          <div key={index} className="bg-white border border-gray-300 p-4 rounded-lg shadow-md text-center flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-center mb-4">
                {skill.icon && (<FontAwesomeIcon icon={skill.icon} className="text-4xl mr-2" />)}
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              {skill.description && (
                <p className="text-gray-700 mb-4">
                  {skill.description}
                </p>
              )}
            </div>
            <div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="text-gray-600">{skill.level}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsDetail;


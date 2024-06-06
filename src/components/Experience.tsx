import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import { Sections, getNextSection } from '../sections';

// Define the Skill interface
interface Skill {
  name: string;
  level: string;
}

import '../styles/common.css';

const Experience: React.FC = () => {
  // const frontendSkills: Skill[] = [
  //   { name: 'HTML', level: 'Experienced' },
  //   { name: 'CSS', level: 'Experienced' },
  //   { name: 'SASS', level: 'Intermediate' },
  //   { name: 'JavaScript', level: 'Basic' },
  //   { name: 'TypeScript', level: 'Basic' },
  //   { name: 'Material UI', level: 'Intermediate' }
  // ];

  // const backendSkills: Skill[] = [
  //   { name: 'PostgreSQL', level: 'Basic' },
  //   { name: 'Node JS', level: 'Intermediate' },
  //   { name: 'Express JS', level: 'Intermediate' },
  //   { name: 'Git', level: 'Intermediate' }
  // ];

  // const renderSkills = (skills: Skill[]) => (
  //   skills.map((skill, index) => (
  //     <article key={index} className="flex items-center gap-2 w-40">
  //       <img src={checkmarkIcon} alt="Experience icon" className="h-5 w-5" />
  //       <div>
  //         <h3 className="font-semibold">{skill.name}</h3>
  //         <p className="text-gray-600">{skill.level}</p>
  //       </div>
  //     </article>
  //   ))
  // );


  return (
    <section id="experience" className="section-container">
      <p className="section-subtitle">Explore My</p>
      <h1 className="section-title">Experience</h1>

      <p className="text-center my-8">Coming Soon...</p>

      {/*
      <div className="flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8">
          <div className="flex flex-col items-center bg-white p-6 rounded-xl border border-gray-400 w-full md:w-1/2 mb-4">
            <h2 className="text-xl font-semibold mb-4">Frontend Development</h2>
            <div className="flex flex-wrap justify-around gap-6">
              {renderSkills(frontendSkills)}
            </div>
          </div>
          <div className="flex flex-col items-center bg-white p-6 rounded-xl border border-gray-400 w-full md:w-1/2 mb-4">
            <h2 className="text-xl font-semibold mb-4">Backend Development</h2>
            <div className="flex flex-wrap justify-around gap-6">
              {renderSkills(backendSkills)}
            </div>
          </div>
        </div>
      </div>
      */}
    </section >
  );
};

export default Experience;


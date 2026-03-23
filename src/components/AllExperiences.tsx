import React, { useEffect } from 'react';
import { Button, ProgressBar } from '@heroui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import ReactGA from 'react-ga4';
import { skills } from '../data/skillData';

const SkillSection: React.FC<{ title: string; type: string }> = ({ title, type }) => {
  const filteredSkills = skills.filter(skill => skill.type === type);

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6 text-foreground text-center">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-center">
        {filteredSkills.map((skill, index) => (
          <div
            key={index}
            className="bg-surface border border-border p-4 rounded-lg shadow-md flex flex-col items-center gap-4 text-center"
          >
            <div className="flex justify-center items-center gap-2 mb-4">
              {skill.icon && <FontAwesomeIcon icon={skill.icon} size="2x" className="text-blue-600" />}
              <span className="text-xl font-semibold text-foreground/70">{skill.name}</span>
            </div>
            {skill.description && (
              <span className="text-foreground/70 mb-4">{skill.description}</span>
            )}
            <div className="w-full">
              <ProgressBar
                value={skill.level}
                maxValue={100}
                className="w-full mb-2"
                aria-label={`${skill.name} skill level`}
              />
              <span className="text-foreground/70">{skill.level}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillsDetail: React.FC = () => {
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: '/all-experiences', title: 'skill page' });
  }, []);

  return (
    <section id="skills-detail" className="flex flex-col items-center gap-8 py-24 px-4">
      <h1 className="text-3xl font-bold text-center text-foreground">All Skills</h1>

      <div className="flex flex-col gap-8 w-full max-w-6xl items-center">
        <SkillSection title="Programming Languages" type="language" />
        <SkillSection title="Frameworks" type="framework" />
        <SkillSection title="Tools" type="tool" />
      </div>

      <div className="text-center mt-8">
        <a href="/">
          <Button variant="ghost">
            <FontAwesomeIcon icon={faAnglesLeft} /> Back to Home
          </Button>
        </a>
      </div>
    </section>
  );
};

export default SkillsDetail;

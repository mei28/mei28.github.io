import React from 'react';
import { Button, ProgressBar } from '@heroui/react';
import { ArrowRight } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { skills } from '../data/skillData';

const SkillsOverview: React.FC = () => {
  const mainSkills = skills.filter(skill => skill.isHome);

  return (
    <section id="experience" className="py-16 px-4 text-center border-b border-border">
      <p className="text-lg text-muted-foreground mb-2 text-center">Explore My</p>
      <h1 className="text-3xl font-bold text-center mb-8 text-foreground">Experience</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {mainSkills.map((skill, index) => (
          <div
            key={index}
            className="bg-surface border border-border p-6 rounded-lg shadow-md text-center flex flex-col items-center gap-2"
          >
            <div className="flex gap-2 mb-4 items-center justify-center">
              {skill.icon && <FontAwesomeIcon icon={skill.icon} size="2x" className="text-blue-600" />}
              <span className="text-xl font-semibold">{skill.name}</span>
            </div>
            <ProgressBar
              value={skill.level}
              maxValue={100}
              className="w-full"
              aria-label={`${skill.name} skill level`}
            />
            <span className="text-muted-foreground mt-2">{skill.level}%</span>
          </div>
        ))}
      </div>

      <a href="/#/all-experiences" className="inline-block mt-10">
        <Button
          variant="primary"
          size="lg"
        >
          View All Experiences <ArrowRight size={18} />
        </Button>
      </a>
    </section>
  );
};

export default SkillsOverview;

import React from 'react';
import { Button } from '@heroui/react';
import { ArrowRight } from 'lucide-react';
import { Sections, sectionTitles } from '../sections';
import { projects } from '../data/projectsData';
import ProjectCard from './ProjectCard';

const ProjectList: React.FC = () => {
  const homeProjects = projects.filter((p) => p.isHome);

  return (
    <section id={Sections.Projects} className="py-16 px-4 border-b border-border">
      <p className="text-lg text-center text-muted-foreground mb-2">Browse My Recent</p>
      <h1 className="text-3xl font-bold text-center mb-12 text-foreground">
        {sectionTitles[Sections.Projects]}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto max-w-6xl">
        {homeProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>

      <div className="text-center mt-8">
        <a href="/#/all-projects" className="inline-block">
          <Button variant="primary" size="lg">
            View All Projects <ArrowRight size={18} />
          </Button>
        </a>
      </div>
    </section>
  );
};

export default ProjectList;

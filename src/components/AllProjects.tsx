import React, { useEffect } from 'react';
import { Button } from '@heroui/react';
import { ArrowLeft } from 'lucide-react';
import ReactGA from 'react-ga4';
import { projects, categoryOrder, categoryLabels, ProjectCategory } from '../data/projectsData';
import ProjectCard from './ProjectCard';

const AllProjects: React.FC = () => {
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: '/all-projects', title: 'projects page' });
  }, []);

  const grouped = categoryOrder.reduce((acc, category) => {
    acc[category] = projects.filter((p) => p.category === category);
    return acc;
  }, {} as Record<ProjectCategory, typeof projects>);

  return (
    <section id="all-projects" className="py-24 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-12 text-foreground">All Projects</h1>

      {categoryOrder.map((category) => {
        const items = grouped[category];
        if (items.length === 0) return null;
        return (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">
              {categoryLabels[category]}
              <span className="text-base font-normal text-foreground/50 ml-2">({items.length})</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {items.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </div>
          </div>
        );
      })}

      <div className="flex justify-center">
        <a href="/" className="inline-block mt-8">
          <Button variant="ghost">
            <ArrowLeft size={18} /> Back to Home
          </Button>
        </a>
      </div>
    </section>
  );
};

export default AllProjects;

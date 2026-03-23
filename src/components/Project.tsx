import React from 'react';
import { Button, Card } from '@heroui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ArrowRight } from 'lucide-react';
import { Sections, sectionTitles } from '../sections';
import { ProjectData, projectsData } from '../data/projectsData';

const ProjectItem: React.FC<ProjectData> = ({ imgSrc, imgAlt, title, description, links }) => {
  const isExternalLink = (url: string) => url.startsWith('http://') || url.startsWith('https://');

  return (
    <Card className="shadow-md rounded-xl border border-border overflow-hidden">
      {imgSrc && (
        <img src={imgSrc} alt={imgAlt} className="w-full h-auto object-cover" />
      )}
      <Card.Content className="p-6">
        <h3 className="text-xl font-semibold text-foreground/70 mb-2">{title}</h3>
        <p className="text-foreground/60 mb-4">{description}</p>
      </Card.Content>
      <Card.Footer className="p-6 pt-0">
        <div className="flex gap-2 flex-wrap">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target={isExternalLink(link.url) ? '_blank' : '_self'}
              rel={isExternalLink(link.url) ? 'noopener noreferrer' : undefined}
            >
              <Button variant="outline">
                {link.icon && <FontAwesomeIcon icon={link.icon} />}
                {link.label}
              </Button>
            </a>
          ))}
        </div>
      </Card.Footer>
    </Card>
  );
};

const ProjectList: React.FC = () => {
  return (
    <section id={Sections.Projects} className="py-16 px-4 border-b border-border">
      <p className="text-lg text-center text-muted-foreground mb-2">Browse My Recent</p>
      <h1 className="text-3xl font-bold text-center mb-12 text-foreground">
        {sectionTitles[Sections.Projects]}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto max-w-6xl">
        {projectsData.map((project, index) => (
          <ProjectItem
            key={index}
            imgSrc={project.imgSrc}
            imgAlt={project.imgAlt}
            title={project.title}
            description={project.description}
            links={project.links}
          />
        ))}
      </div>

      <div className="text-center mt-8">
        <a href="/#/all-project" className="inline-block">
          <Button
            variant="primary"
            size="lg"
          >
            View All Experiences <ArrowRight size={18} />
          </Button>
        </a>
      </div>
    </section>
  );
};

export default ProjectList;

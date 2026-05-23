import React from 'react';
import { Button, Chip } from '@heroui/react';
import { Project, categoryLabels } from '../data/projectsData';
import { getProjectLinkIcon } from '../utils/projectLinkIcon';

const categoryChipColor = (category: Project['category']): 'success' | 'accent' | 'default' => {
  switch (category) {
    case 'chrome-extension': return 'accent';
    case 'cli': return 'success';
    case 'web-app': return 'accent';
    case 'desktop-app': return 'success';
    case 'neovim-plugin': return 'default';
    case 'mobile-app': return 'accent';
    default: return 'default';
  }
};

const isExternal = (url: string) => url.startsWith('http://') || url.startsWith('https://');

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-surface border border-border rounded-lg shadow-sm p-4 flex flex-col gap-2 h-full">
      {project.image && (
        <div className="w-full h-32 bg-foreground/5 rounded-md flex items-center justify-center overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}

      <div className="flex items-start justify-between gap-2">
        <h3 className="text-base font-semibold text-foreground leading-tight">{project.name}</h3>
        <Chip size="sm" variant="soft" color={categoryChipColor(project.category)} className="shrink-0">
          {categoryLabels[project.category]}
        </Chip>
      </div>

      <p className="text-sm text-foreground/70 flex-1">{project.description}</p>

      {project.tags && project.tags.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {project.tags.map((tag, idx) => (
            <Chip key={idx} size="sm" variant="soft" color="default">
              {tag}
            </Chip>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-1.5 mt-1">
        {project.links.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target={isExternal(link.url) ? '_blank' : '_self'}
            rel={isExternal(link.url) ? 'noopener noreferrer' : undefined}
          >
            <Button size="sm" variant="ghost">
              {getProjectLinkIcon(link.label)}
              {link.label}
            </Button>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;

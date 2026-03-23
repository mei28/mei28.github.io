import React from 'react';
import { Button, Card } from '@heroui/react';
import { Bookmark, ArrowRight } from 'lucide-react';
import { publications, Publication } from '../data/publicationsData';
import { getLinkIcon } from '../utils/icons';

const PublicationItem: React.FC<{ publication: Publication }> = ({ publication }) => {
  return (
    <Card className="border border-border shadow-sm hover:shadow-md transition-shadow">
      <Card.Header className="flex items-start gap-4">
        <div className="w-32 h-32 shrink-0">
          {publication.image ? (
            <img
              src={publication.image}
              alt={publication.title}
              className="rounded-lg w-full h-full object-cover"
            />
          ) : (
            <Bookmark size={64} className="text-red-500 dark:text-red-300" />
          )}
        </div>
        <div className="flex flex-col items-start flex-1">
          <h3 className="text-xl font-semibold text-foreground mb-1">{publication.title}</h3>
          <p
            className="text-sm text-muted-foreground italic"
            dangerouslySetInnerHTML={{ __html: publication.authors }}
          />
          <p className="text-sm text-muted-foreground">{publication.info}</p>
        </div>
      </Card.Header>
      <Card.Footer className="flex flex-wrap gap-2">
        {publication.links.map((link, idx) => {
          const IconComp = getLinkIcon(link.label);
          return (
            <Button
              key={idx}
              size="sm"
              variant="ghost"
              onPress={() => window.open(link.url, '_blank')}
            >
              <IconComp size={16} className="text-red-500 dark:text-red-300" />
              {link.label}
            </Button>
          );
        })}
      </Card.Footer>
    </Card>
  );
};

const Publications: React.FC = () => {
  const pickupPublications = publications.filter(pub => pub.pickup);

  return (
    <section id="publications" className="py-16 px-6 text-center border-b border-border">
      <p className="text-lg text-muted-foreground mb-2">Watch My</p>
      <h1 className="text-3xl font-bold mb-10">Publications</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pickupPublications.map((pub, index) => (
          <PublicationItem key={index} publication={pub} />
        ))}
      </div>
      <a href="/#/all-publications" className="inline-block mt-10">
        <Button
          variant="primary"
          size="lg"
        >
          View All Publications <ArrowRight size={18} />
        </Button>
      </a>
    </section>
  );
};

export default Publications;

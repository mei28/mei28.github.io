import React, { useEffect } from 'react';
import { Button, Chip } from '@heroui/react';
import { Bookmark, ArrowLeft } from 'lucide-react';
import ReactGA from 'react-ga4';
import { publications, Publication } from '../data/publicationsData';
import { getLinkIcon } from '../utils/icons';

const groupPublicationsByYear = (publications: Publication[]) => {
  return publications.reduce((acc: Record<number, Publication[]>, publication) => {
    const { year } = publication;
    if (!acc[year]) acc[year] = [];
    acc[year].push(publication);
    return acc;
  }, {});
};

const getTagColor = (tag: string): "success" | "accent" | "default" => {
  switch (tag.toLowerCase()) {
    case 'first author': return 'success';
    case 'peer-reviewed': return 'accent';
    case 'sports analytics': return 'accent';
    default: return 'default';
  }
};

const PublicationItem: React.FC<{ publication: Publication }> = ({ publication }) => {
  return (
    <div className="bg-surface border border-border p-6 rounded-lg shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-[auto_2fr_auto_auto] gap-4 items-start">
        <div className="flex justify-center items-center">
          {publication.image ? (
            <img src={publication.image} alt={publication.title} className="rounded-lg max-w-full max-h-48" />
          ) : (
            <Bookmark size={64} className="text-red-500 dark:text-red-300" />
          )}
        </div>

        <div className="flex flex-col items-start gap-2">
          <h3 className="text-xl font-semibold text-foreground mb-1">{publication.title}</h3>
          <p
            className="text-sm text-foreground/70 italic"
            dangerouslySetInnerHTML={{ __html: publication.authors }}
          />
          <p className="text-sm text-foreground/70">{publication.info}</p>
          {publication.notes && (
            <p className="text-foreground/70" dangerouslySetInnerHTML={{ __html: publication.notes }} />
          )}
        </div>

        <div className="flex flex-wrap justify-center gap-2">
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
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {publication.tags?.map((tag, idx) => (
            <Chip key={idx} color={getTagColor(tag)} variant="soft" size="sm">
              {tag}
            </Chip>
          ))}
        </div>
      </div>
    </div>
  );
};

const AllPublications: React.FC = () => {
  const groupedPublications = groupPublicationsByYear(publications);

  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: '/all-publications', title: 'publications page' });
  }, []);

  return (
    <section id="all-publications" className="py-24 px-4">
      <h1 className="text-3xl font-bold text-center mb-12 text-foreground">All Publications</h1>
      {Object.entries(groupedPublications)
        .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
        .map(([year, pubs]) => (
          <div key={year} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">{year}</h2>
            <div className="grid gap-4">
              {pubs.map((pub, index) => (
                <PublicationItem key={index} publication={pub} />
              ))}
            </div>
          </div>
        ))}
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

export default AllPublications;

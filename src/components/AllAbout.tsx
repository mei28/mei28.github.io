import React, { useEffect } from 'react';
import { Button, Link } from '@heroui/react';
import { ArrowLeft } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKaggle, faAtlassian, faSpeakerDeck } from '@fortawesome/free-brands-svg-icons';
import ReactGA from 'react-ga4';
import {
  profileInfo, accountDetails, educationDetails,
  workExperiences, awards, activities, applications, qualifications,
} from '../data/aboutDetailData';
import { getLucideIcon } from '../utils/icons';

const faIconMap: Record<string, typeof faKaggle> = {
  faKaggle, faAtlassian, faSpeakerDeck,
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-surface p-8 rounded-lg shadow-md mb-8">
    <h2 className="text-2xl font-semibold mb-4">{title}</h2>
    <div className="flex flex-col items-start gap-3 text-foreground/70">
      {children}
    </div>
  </div>
);

const ExternalLink: React.FC<{ href: string; className?: string; children: React.ReactNode }> = ({ href, className, children }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer" className={className}>
    {children}
  </Link>
);

const AllAbouts: React.FC = () => {
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: '/all-about', title: 'about page' });
  }, []);

  return (
    <section id="all-about" className="py-24 px-4">
      <h1 className="text-3xl font-bold text-center mb-12 text-foreground">About Me</h1>

      {/* Profile */}
      <div className="bg-surface p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Profile</h2>
        <div className="flex flex-col items-start gap-3 text-foreground/70">
          <p>{profileInfo.affiliation}</p>
          <p>{profileInfo.lab}</p>
          <p>mail: <span className="font-mono">{profileInfo.email}</span></p>
        </div>
      </div>

      {/* Accounts */}
      <div className="bg-surface p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Accounts</h2>
        <div className="flex gap-4 flex-wrap">
          {accountDetails.map((account, index) => {
            const LucideIcon = account.iconType === 'lucide' ? getLucideIcon(account.iconName) : null;
            const faIcon = account.iconType === 'fontawesome' ? faIconMap[account.iconName] : null;
            return (
              <ExternalLink
                key={index}
                href={account.url}
                className="text-foreground/60 hover:text-foreground transition-colors flex items-center gap-1"
              >
                {LucideIcon && <LucideIcon size={20} />}
                {faIcon && <FontAwesomeIcon icon={faIcon} className="mr-1" />}
                {account.label}
              </ExternalLink>
            );
          })}
        </div>
      </div>

      {/* Education */}
      <Section title="Education">
        {educationDetails.map((edu, index) => (
          <div key={index}>
            <p>
              <strong>{edu.degree}</strong>, {edu.period}
            </p>
            <ExternalLink href={edu.institution.url} className="text-primary hover:underline">
              {edu.institution.text}
            </ExternalLink>
            {edu.advisor && (
              <p>
                指導教員: <ExternalLink href={edu.advisor.url} className="text-primary hover:underline">{edu.advisor.text}</ExternalLink>
              </p>
            )}
            {edu.thesis && <p>{edu.thesis}</p>}
          </div>
        ))}
      </Section>

      {/* Work Experience */}
      <Section title="Work Experience">
        {workExperiences.map((work, index) => (
          <p key={index}>{work.role}, {work.organization}: {work.period}</p>
        ))}
      </Section>

      {/* Awards */}
      <Section title="Awards">
        {awards.map((award, index) => (
          <div key={index}>
            <ExternalLink href={award.eventUrl} className="text-primary hover:underline">
              {award.eventName}
            </ExternalLink>
            {award.projectName && (
              <p>
                作品名: <ExternalLink href={award.projectUrl!} className="text-primary hover:underline">{award.projectName}</ExternalLink>
              </p>
            )}
            <p>{award.prizes}</p>
          </div>
        ))}
      </Section>

      {/* Activities */}
      <Section title="Activities">
        {activities.map((activity, index) => (
          <p key={index}>{activity.text}</p>
        ))}
      </Section>

      {/* Applications */}
      <Section title="Applications">
        {applications.map((app, index) => (
          <div key={index}>
            <span>{app.name}</span>
            {app.description && <span>: {app.description}</span>}
            {' '}
            {app.links.map((link, idx) => (
              <React.Fragment key={idx}>
                <ExternalLink href={link.url} className="text-primary hover:underline">[{link.text}]</ExternalLink>
                {idx < app.links.length - 1 && ' / '}
              </React.Fragment>
            ))}
          </div>
        ))}
      </Section>

      {/* Qualifications */}
      <Section title="Qualifications">
        {qualifications.map((q, index) => (
          <p key={index}>{q.text}</p>
        ))}
      </Section>

      <div className="flex justify-center mt-8">
        <a href="/">
          <Button variant="ghost">
            <ArrowLeft size={18} /> Back to Home
          </Button>
        </a>
      </div>
    </section>
  );
};

export default AllAbouts;

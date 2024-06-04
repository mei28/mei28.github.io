export enum Sections {
  About = 'about',
  Publications = 'publications',
  Experience = 'experience',
  Projects = 'projects',
  Contact = 'contact',
}

export const sectionTitles: { [key in Sections]: string } = {
  [Sections.About]: 'About',
  [Sections.Publications]: 'Publications',
  [Sections.Experience]: 'Experience',
  [Sections.Projects]: 'Projects',
  [Sections.Contact]: 'Contact',
};

export const sectionOrder: Sections[] = [
  Sections.About,
  Sections.Publications,
  Sections.Experience,
  Sections.Projects,
  Sections.Contact,
];

export const getNextSection = (currentSection: Sections): Sections | null => {
  const currentIndex = sectionOrder.indexOf(currentSection);
  if (currentIndex >= 0 && currentIndex < sectionOrder.length - 1) {
    return sectionOrder[currentIndex + 1];
  }
  return null;
};


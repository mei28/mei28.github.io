export interface ContactInfo {
  iconName: string;
  link?: string;
  text: string;
}

export const contactInfo: ContactInfo[] = [
  {
    iconName: 'Mail',
    text: 'mingzhe-yang [at] g.ecc.u-tokyo.ac.jp',
  },
  {
    iconName: 'Twitter',
    link: 'https://x.com/_mei28_',
    text: 'Twitter (JP)',
  },
  {
    iconName: 'X',
    link: 'https://x.com/_me_i28',
    text: 'Twitter (EN)',
  },
  {
    iconName: 'Linkedin',
    link: 'https://www.linkedin.com/in/mingzhe-yang-3669242bb/',
    text: 'LinkedIn',
  },
];

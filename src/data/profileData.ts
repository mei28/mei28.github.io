export interface Account {
  iconType: 'lucide' | 'fontawesome';
  iconName: string;
  link: string;
}

export const accounts: Account[] = [
  { iconType: 'lucide', iconName: 'Github', link: 'https://github.com/mei28' },
  { iconType: 'lucide', iconName: 'Twitter', link: 'https://x.com/_mei28_' },
  { iconType: 'lucide', iconName: 'GraduationCap', link: 'https://scholar.google.com/citations?user=0PIblkcAAAAJ' },
  { iconType: 'fontawesome', iconName: 'faKaggle', link: 'https://www.kaggle.com/mei2828' },
  { iconType: 'lucide', iconName: 'FileText', link: 'https://speakerdeck.com/mei28' },
  { iconType: 'lucide', iconName: 'Linkedin', link: 'https://linkedin.com/' },
];

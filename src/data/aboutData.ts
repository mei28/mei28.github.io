export interface Education {
  degree: string;
  period: string;
  institution: string;
}

export interface Interest {
  item: string;
}

export const educationDetails: Education[] = [
  {
    degree: 'B.Sc. in Information Engineering',
    period: '2016 - 2020',
    institution: 'University of Tsukuba',
  },
  {
    degree: 'M.Sc. in Engineering',
    period: '2020 - 2022',
    institution: 'University of Tsukuba',
  },
  {
    degree: 'Ph.D. in Arts and Sciences',
    period: '2022 - now',
    institution: 'The University of Tokyo',
  },
];

export const interests: Interest[] = [
  { item: 'Human-AI Collaboration' },
  { item: 'Explainable AI / Trust AI' },
  { item: 'Human-Computer Interaction' },
];

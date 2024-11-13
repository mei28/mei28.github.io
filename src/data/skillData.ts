// src/data/skillData.ts
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faJsSquare, faPython, faReact, faRust, faGitAlt, faDocker, faCss3, faUnity, faHtml5, faGit } from '@fortawesome/free-brands-svg-icons';
import { faLaptop, faTable, faC, faHashtag, faMoon, faDatabase, faPenToSquare, faFlask, faFire, faPaw, faTree } from '@fortawesome/free-solid-svg-icons';

export interface Skill {
  name: string;
  level: number;
  type: 'language' | 'framework' | 'tool';
  isHome?: boolean;
  icon?: IconDefinition | null;
  description?: string | null;
}

export const skills: Skill[] = [
  // language
  {
    name: 'Python',
    level: 95,
    type: 'language',
    isHome: true,
    icon: faPython,
    description: 'Machine Learning',
  },
  {
    name: 'JavaScript/TypeScript',
    level: 70,
    type: 'language',
    isHome: true,
    icon: faJsSquare,
    description: 'Experience platform, Homepage',
  },
  {
    name: 'Rust',
    level: 70,
    type: 'language',
    isHome: true,
    icon: faRust,
    description: 'CLI tool, Backend',
  },
  {
    name: 'Lua',
    level: 70,
    type: 'language',
    icon: faMoon,
    description: 'Neovim, Hammerspoon, Wezterm',
  },
  {
    name: 'C#',
    level: 70,
    type: 'language',
    description: 'Unity',
    icon: faHashtag,
  },
  {
    name: 'C++',
    level: 60,
    type: 'language',
    description: 'Competitive Programming',
    icon: faC,
  },

  // framework
  {
    name: 'PyTorch',
    level: 80,
    type: 'framework',
    isHome: true,
    icon: faFire,
  },
  {
    name: 'LightGBM/XGBoost',
    level: 80,
    icon: faTree,
    type: 'framework',
  },
  {
    name: 'Polars/Pandas',
    level: 90,
    type: 'framework',
    icon: faPaw,
    isHome: true,
  },
  {
    name: 'Numpy',
    level: 90,
    type: 'framework',
    icon: faTable,
  },
  {
    name: 'Flask',
    level: 70,
    type: 'framework',
    icon: faFlask,
  },
  {
    name: 'Django',
    level: 70,
    type: 'framework',
    icon: faLaptop,
  },
  {
    name: 'React',
    level: 70,
    type: 'framework',
    isHome: true,
    icon: faReact,
  },
  {
    name: 'HTML',
    level: 80,
    type: 'framework',
    icon: faHtml5,
  },
  {
    name: 'CSS/SCSS',
    level: 70,
    type: 'framework',
    icon: faCss3,
  },
  {
    name: 'Unity',
    level: 70,
    type: 'framework',
    icon: faUnity,
  },

  // tool
  {
    name: 'Git',
    level: 90,
    type: 'tool',
    icon: faGitAlt,
  },
  {
    name: 'Docker',
    level: 80,
    type: 'tool',
    icon: faDocker,
  },
  {
    name: 'Neovim/Vim',
    level: 80,
    type: 'tool',
    icon: faPenToSquare,
  },
  {
    name: 'PostgreSQL',
    level: 50,
    type: 'tool',
    icon: faDatabase,
  },
];


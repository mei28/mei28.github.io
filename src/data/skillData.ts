// src/data/skillData.ts
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faJsSquare, faPython, faReact, faNodeJs, faGit, faDocker, faSass } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

export interface Skill {
  name: string;
  level: number;
  type: 'language' | 'framework' | 'tool';
  isHome: boolean;
  icon?: IconDefinition | null; // アイコンフィールドを追加
  description?: string | null; // 説明フィールドを追加
}

export const skills: Skill[] = [
  // language
  {
    name: 'Python',
    level: 90,
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
    description: 'Experience platform, homepage',
  },
  {
    name: 'Rust',
    level: 60,
    type: 'language',
    isHome: true,
    icon: null,
    description: null,
  },

  //frame work
  {
    name: 'React',
    level: 85,
    type: 'framework',
    isHome: false,
    icon: faReact,
    description: 'A JavaScript library for building user interfaces.',
  },
  {
    name: 'Node.js',
    level: 75,
    type: 'framework',
    isHome: false,
    icon: faNodeJs,
    description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine.',
  },
  {
    name: 'Sass',
    level: 70,
    type: 'framework',
    isHome: false,
    icon: faSass,
    description: 'A CSS preprocessor that extends CSS with variables and nested rules.',
  },

  //toollfjalfjajfa
  {
    name: 'Git',
    level: 90,
    type: 'tool',
    isHome: false,
    icon: faGit,
    description: 'A distributed version control system.',
  },
  {
    name: 'Docker',
    level: 60,
    type: 'tool',
    isHome: false,
    icon: faDocker,
    description: 'A platform for developing, shipping, and running applications in containers.',
  },
  {
    name: 'PostgreSQL',
    level: 50,
    type: 'tool',
    isHome: false,
    icon: faDatabase,
    description: 'A powerful, open-source object-relational database system.',
  },
];


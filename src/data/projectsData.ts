// import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
// import { faBookmark } from '@fortawesome/free-solid-svg-icons/faBookmark';
import '../styles/common.css';

interface Link {
  label: string;
  url: string;
}

interface Project {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  links: Link[];
}

export const projectsData: Project[] = [
  {
    imgSrc: "./assets/project-3.png",
    imgAlt: "Project 3",
    title: "Explainable AI Research",
    description: "Investigating how human judgement grounds vary with context towards trustworthy XAI.",
    links: [
      { label: "GitHub", url: "https://github.com/mei28/explainable-ai-research" },
      { label: "Paper", url: "https://www.jstage.jst.go.jp/article/pjsai/JSAI2024/0/JSAI2024_2T5OS5b03/_article/-char/ja/" }
    ]
  }
];



import { Heading } from "@chakra-ui/react";
import Link from 'next/link';
import PaperComponent from "../../components/Papers";
import Section from "../../components/Section";

export default function Publications() {
  const preprints = [
    {
      id: '001',
      title: 'Controlling Text-to-Image Diffusion by Orthogonal Finetuning',
      authors: ['Zeju Qiu', 'Weiyang Liu', 'Haiwen Feng', 'Yuxuan Xue', 'Yao Feng', 'Zhen Liu', 'Dan Zhang', 'Adrian Weller', 'Bernhard Schölkopf'],
      year: 2023,
      venue: 'arXiv',
      links: {
        arXiv: 'https://arxiv.org/abs/xxxx.xxxxx',
        code: 'https://github.com/user/repo',
        project: 'https://project-website.com',
      }
    },
    // ...他のプレプリントの論文データ
  ];

  const conferences = [
    {
      id: '002',
      title: 'Another Paper Title',
      authors: ['Author A', 'Author B'],
      year: 2022,
      venue: 'NeurIPS',
      links: {
        paper: 'https://conference-website.com/paper/xxxx',
        code: 'https://github.com/user/repo',
        project: 'https://project-website.com',
      }
    },
  ];


  return (
    <Section>
      <Heading as='h3' variant='section-title'>Publications</Heading>

      <Heading as='h4' size='md'>Preprints</Heading>
      {preprints.map((paper, idx) => (
        <PaperComponent key={idx} paper={paper} />
      ))}

      <Heading as='h4' size='md'>Conferences</Heading>
      {conferences.map((paper, idx) => (
        <PaperComponent key={idx} paper={paper} />
      ))}
    </Section>
  );
}


import { mangifyGif, battleshipGif, watchCoGif } from '@/assets';

export type TprojectData = {
  title: string;
  description: string;
  gif: string;
  githubRepoUrl: string;
  siteUrl: string;
};

export const projectData: TprojectData[] = [
  {
    title: 'mangify',
    description:
      'A full-stack meal planning app written in TS, implemented with React, Node, Express, and PostgreSQL.',
    gif: mangifyGif,
    githubRepoUrl: 'https://github.com/blancpain/mangify',
    siteUrl: 'https://mangify.org',
  },
  {
    title: 'watchCo',
    description: 'A showcase e-commerce site for luxury watches developed with React.',
    gif: watchCoGif,
    githubRepoUrl: 'https://github.com/blancpain/shopping-cart',
    siteUrl: 'https://blancpain.github.io/shopping-cart/',
  },
  {
    title: 'battleships',
    description: 'The classic Battleships game implemented using pure JavaScript, HTML, and CSS',
    gif: battleshipGif,
    githubRepoUrl: 'https://github.com/blancpain/battleship',
    siteUrl: 'https://blancpain.github.io/battleship/',
  },
];

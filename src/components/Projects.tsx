import { Box, Button, Flex, Group, Image, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { motion } from 'framer-motion';
import { nanoid } from 'nanoid';
import { Card } from './Card';
import classes from '../styles/Project.module.css';
import { mangifyGif, battleshipGif, watchCoGif } from '@/assets';

type TprojectData = {
  title: string;
  description: string;
  gif: string;
  githubRepoUrl: string;
  siteUrl: string;
};

const projectData: TprojectData[] = [
  {
    title: 'mangify',
    description:
      'A full-stack meal planning app written in TS, React, Node, Express, and PostgreSQL.',
    gif: mangifyGif,
    githubRepoUrl: 'https://github.com/blancpain/mangify',
    siteUrl: 'https://mangify.org',
  },
  {
    title: 'watchCo',
    description: 'A showcase e-commerce site for luxury watches develped with React.',
    gif: watchCoGif,
    githubRepoUrl: 'https://github.com/blancpain/shopping-cart',
    siteUrl: 'https://blancpain.github.io/shopping-cart/',
  },
  {
    title: 'battleship',
    description:
      'The classic Battleships game implemented using the power trio of web development: JavaScript, HTML, and CSS',
    gif: battleshipGif,
    githubRepoUrl: 'https://github.com/blancpain/battleship',
    siteUrl: 'https://blancpain.github.io/battleship/',
  },
];

// TODO: move styles to separate file, add more projects as some sort of da a structure...
export function Project({ title, gif, description, githubRepoUrl, siteUrl }: TprojectData) {
  // NOTE: custom hook to change direction at smaller screen sizes, if no value we assume true i.e. column
  const isColumn = useMediaQuery('(max-width: 48em)');

  return (
    <Card isColumn={isColumn ?? true}>
      <a href={siteUrl} target="_blank" rel="noopener noreferrer" aria-label="View on GitHub">
        <motion.div whileHover={{ scale: 1.2 }}>
          <Box w={{ base: '100%', xs: '415px', sm: '415px', lg: '400px', xl: '400px' }} mr={70}>
            <Image src={gif} radius="lg" style={{ border: '1px solid #25262B' }} />
          </Box>
        </motion.div>
      </a>
      <Flex direction="column">
        <Text className={classes.title}>{title}</Text>
        <Text className={classes.subTitle}>{description}</Text>
        <Group>
          <Button component="a" href={githubRepoUrl} target="_blank">
            GitHub
          </Button>
          <Button component="a" href={siteUrl} target="_blank">
            Preview
          </Button>
        </Group>
      </Flex>
    </Card>
  );
}

export function Projects() {
  const allProjects = projectData.map((project) => (
    <Project
      key={nanoid()}
      title={project.title}
      gif={project.gif}
      description={project.description}
      githubRepoUrl={project.githubRepoUrl}
      siteUrl={project.siteUrl}
    />
  ));

  return allProjects;
}

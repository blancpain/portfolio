import { Box, Flex, Group, Image, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { nanoid } from 'nanoid';
import { Card } from './Card';
import classes from '../styles/Project.module.css';
import { Link } from './elements/Link';
import type { TprojectData } from '@/content/projects';
import { projectData } from '@/content/projects';

export function Project({ title, gif, description, githubRepoUrl, siteUrl }: TprojectData) {
  // NOTE: mantine hook to change direction at smaller screen sizes, if no value we assume true i.e. column
  const isColumn = useMediaQuery('(max-width: 48em)');

  return (
    <Card isColumn={isColumn ?? true}>
      <Box w={{ base: '100%', xs: '415px', sm: '415px', lg: '450px', xl: '500px' }} mr={70}>
        <Link href={siteUrl}>
          <Image src={gif} radius="lg" style={{ border: '1px solid #25262B' }} />
        </Link>
      </Box>
      <Flex direction="column" gap={10} className={classes.textContainer}>
        <Text className={classes.title}>{title}</Text>
        <Text className={classes.subTitle}>{description}</Text>
        <Group p={0} m={0}>
          <Link href={githubRepoUrl}>
            <Text className={classes.link}>GitHub</Text>
          </Link>
          <Link href={siteUrl}>
            <Text className={classes.link}>Preview</Text>
          </Link>
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

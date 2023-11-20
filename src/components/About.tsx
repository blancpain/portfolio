import { Flex, Text } from '@mantine/core';
import { Card } from './Card';
import classes from '../styles/About.module.css';

export function About() {
  return (
    <Card isColumn>
      <Text className={classes.title}>about</Text>
      <Flex direction="column" className={classes.textContainer}>
        <Text className={classes.text}>
          Finance professional turned full-stack developer based in Sofia, Bulgaria.
        </Text>
        <Text className={classes.text}>
          I love building web apps and exploring new technologies.
        </Text>
        <Text className={classes.text}>Keep scrolling to check out some of my work!</Text>
      </Flex>
    </Card>
  );
}

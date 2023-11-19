import { Flex, Stack, Text } from '@mantine/core';
import { SiTypescript } from '@icons-pack/react-simple-icons';
import { Card } from './Card';
import classes from '../styles/Skills.module.css';

// TODO: skills in data structure

export function Skills() {
  return (
    <Card isColumn>
      <Text className={classes.title}>Skills</Text>
      <Flex gap={10} wrap="wrap" className={classes.skillsContainer}>
        <Stack align="center">
          <SiTypescript color="white" width="60px" height="60px" />
          <Text>TypeScript</Text>
        </Stack>
      </Flex>
    </Card>
  );
}

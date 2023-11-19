import { Flex, Stack, Text } from '@mantine/core';
import { nanoid } from 'nanoid';
import { Card } from './Card';
import classes from '../styles/Skills.module.css';
import type { TskillData } from '@/content/skills';
import { allSkills } from '@/content/skills';

function Skill({ name, icon }: TskillData) {
  return (
    <Stack align="center">
      {icon}
      <Text>{name}</Text>
    </Stack>
  );
}

export function Skills() {
  const skillsList = allSkills.map((skill) => (
    <Skill key={nanoid()} name={skill.name} icon={skill.icon} />
  ));

  return (
    <Card isColumn>
      <Text className={classes.title}>Skills</Text>
      <Flex gap={15} wrap="wrap" className={classes.skillsContainer}>
        {skillsList}
      </Flex>
    </Card>
  );
}

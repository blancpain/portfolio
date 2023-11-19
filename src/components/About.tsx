import { Text } from '@mantine/core';
import { Card } from './Card';
import classes from '../styles/About.module.css';

export function About() {
  return (
    <Card isColumn>
      <Text className={classes.title}>about</Text>
      <Text className={classes.subTitle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae impedit aspernatur
        eaque iusto alias voluptate perferendis harum et, iste ratione corporis dignissimos a, modi
        facilis unde ullam commodi ipsum autem!
      </Text>
    </Card>
  );
}

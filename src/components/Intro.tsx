import { Text } from '@mantine/core';
import { Card } from './Card';
import classes from '../styles/Intro.module.css';

export function Intro() {
  return (
    <Card isColumn>
      <Text className={classes.title}>Yasen Dimitrov</Text>
      <Text className={classes.subTitle}>full-stack web developer</Text>
    </Card>
  );
}

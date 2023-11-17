import { Flex } from '@mantine/core';
import classes from '../styles/Card.module.css';

type CardProps = {
  children: JSX.Element | JSX.Element[];
};

export function Card({ children }: CardProps) {
  return (
    <Flex justify="center" align="center" direction="column" className={classes.container}>
      {children}
    </Flex>
  );
}

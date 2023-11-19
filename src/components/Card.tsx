import { Flex } from '@mantine/core';
import classes from '../styles/Card.module.css';

type CardProps = {
  children: JSX.Element | JSX.Element[];
  isColumn: boolean;
};

export function Card({ children, isColumn }: CardProps) {
  return (
    <Flex
      justify="center"
      align="center"
      direction={isColumn ? 'column' : 'row'}
      wrap="wrap"
      className={classes.container}
    >
      {children}
    </Flex>
  );
}

import { Flex } from '@mantine/core';
import classes from '../styles/Card.module.css';

type CardProps = {
  children: JSX.Element | JSX.Element[];
  isColumn: boolean;
  id?: string;
};

export function Card({ children, isColumn, id }: CardProps) {
  return (
    <Flex
      justify="center"
      align="center"
      direction={isColumn ? 'column' : 'row'}
      wrap="wrap"
      className={classes.container}
      id={id}
    >
      {children}
    </Flex>
  );
}

Card.defaultProps = {
  id: '',
};

import { Button, Stack, Text } from '@mantine/core';
import { IconArrowUpRight } from '@tabler/icons-react';
import { Card } from './Card';
import classes from '../styles/Contact.module.css';
import { Link } from './elements/Link';

export function Contact() {
  return (
    <Card isColumn>
      <Text className={classes.title}>contact</Text>
      <Stack gap={20}>
        <Link href="mailto:y_dimitrov@ymail.com">
          <Button
            variant="transparent"
            size="35px"
            rightSection={<IconArrowUpRight size="2rem" />}
            className={classes.links}
          >
            email
          </Button>
        </Link>
        <Link href="https://github.com/blancpain">
          <Button
            variant="transparent"
            size="35px"
            rightSection={<IconArrowUpRight size="2rem" />}
            className={classes.links}
          >
            github
          </Button>
        </Link>
      </Stack>
    </Card>
  );
}

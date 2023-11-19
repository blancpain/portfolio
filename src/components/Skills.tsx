import { Flex, Text } from '@mantine/core';
import { SiTypescript } from '@icons-pack/react-simple-icons';
import { Card } from './Card';

// TODO: move styles to separate file, add more projects as some sort of da a structure...
export function Skills() {
  return (
    <Card isColumn>
      <Flex direction="column" align="center" justify="space-between" h="100px">
        <SiTypescript color="white" width="60px" height="60px" />
        <Text c="white">TypeScript</Text>
      </Flex>
    </Card>
  );
}

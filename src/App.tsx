import '@mantine/core/styles.css';
import { Paper } from '@mantine/core';
import { About, Intro } from '@/components';

export function App() {
  return (
    <Paper style={{ overflowY: 'auto' }}>
      <Intro />
      <About />
    </Paper>
  );
}

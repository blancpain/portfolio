import '@mantine/core/styles.css';
import { Paper } from '@mantine/core';
import { About, Intro, Projects, Skills } from '@/components';

// TODO: fix font sizes/sizes in general for all the range of screen sizes - too small atm on mobile

export function App() {
  return (
    <Paper style={{ overflowY: 'auto' }}>
      <Intro />
      <About />
      <Projects />
      <Skills />
    </Paper>
  );
}

import '@mantine/core/styles.css';
import { Paper } from '@mantine/core';
import { About, Intro, Projects, Skills, Contact } from '@/components';
import classes from './styles/App.module.css';

export function App() {
  return (
    <Paper className={classes.main}>
      <Intro />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </Paper>
  );
}

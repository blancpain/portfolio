import ReactDOM from 'react-dom/client';
import { MantineProvider, createTheme } from '@mantine/core';
import { App } from './App';

const theme = createTheme({
  /** theme overrides here */
  fontFamily: 'Jost, sans-serif',
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <MantineProvider theme={theme}>
    <App />
  </MantineProvider>,
);

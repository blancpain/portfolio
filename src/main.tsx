import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider, createTheme } from '@mantine/core';
import { App } from './App';

const theme = createTheme({
  /** theme overrides here */
  fontFamily: 'Jost, sans-serif',
});

// TODO: no strict mode for production
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </React.StrictMode>,
);

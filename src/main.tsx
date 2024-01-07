import ReactDOM from 'react-dom/client';
import { MantineProvider, createTheme } from '@mantine/core';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './App';

const theme = createTheme({
  /** theme overrides here */
  fontFamily: 'Jost, sans-serif',
});

const router = createBrowserRouter([
  {
    path: '/portfolio',
    index: true,
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <MantineProvider theme={theme}>
    <RouterProvider router={router} />
  </MantineProvider>,
);

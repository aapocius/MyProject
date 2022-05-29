import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';

import App from './app';
import theme from './styles/theme';

const font = createTheme({
  // typography: {
  //   fontFamily: [
  //     'Lato',
  //     'Montserrat',
  //   ].join(','),
  // },
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

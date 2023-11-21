import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles'; // Aula 6 - Estilos globais e configuração de tema

import App from './App';
import './index.css'

import { deepPurple, red } from '@mui/material/colors'; // Aula 6 - Estilos globais e configuração de tema

const theme = createTheme({ // Aula 6 - Estilos globais e configuração de tema
  palette: {
    primary: {
      main: deepPurple[900],
    },
    secondary: {
      main: red[900],
    }
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
  </ThemeProvider>
  </React.StrictMode>
);


import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import BackgroundCanvas from './components/BackgroundCanvas';
import './App.css';

const greyTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#e0e0e0',
    },
    secondary: {
      main: '#424242',
    },
    background: {
      default: '#616161',
      paper: '#424242',
    },
    text: {
      primary: '#f5f5f5',
      secondary: '#e0e0e0',
    },
  },
  typography: {
    fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
      color: '#e0e0e0',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={greyTheme}>
      <CssBaseline />
      <div className="app-container">
        <BackgroundCanvas />
        <div className="content">
          <Header />
          <About />
          <Gallery />
          <Contact />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

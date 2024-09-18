import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/style.css';
import { ThemeProvider } from './contexts/ThemeContext';
import { LocaleProvider } from './contexts/LocaleContext';

const root = createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <LocaleProvider>
      <App />
    </LocaleProvider>
  </ThemeProvider>,
);

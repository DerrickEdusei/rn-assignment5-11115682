// App.js
import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import AppNavigation from './navigation/AppNavigation';

const App = () => {
  return (
    <ThemeProvider>
      <AppNavigation />
    </ThemeProvider>
  );
};

export default App;

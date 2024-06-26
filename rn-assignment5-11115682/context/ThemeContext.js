// context/ThemeContext.js
import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native';

const ThemeContext = createContext();

const lightTheme = {
  background: '#ffffff',
  text: '#000000',
  cardBackground: '#f9f9f9',
  borderColor: '#e2e2e2',
  subText: '#6e6e6e',
};

const darkTheme = {
  background: '#000000',
  text: '#ffffff',
  cardBackground: '#333333',
  borderColor: '#444444',
  subText: '#9e9e9e',
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

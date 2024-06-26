// context/ThemeContext.js
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const lightTheme = {
  background: '#fff',
  text: '#000',
  color: '#f2f2f2',
  tabsBgColor: '#fff',
  card: '#fff',
  borderColor: '#f4f4f4',
  iconBackground: '#f4f4f4',
  headerBackground: '#fff',
  transactionBackground: '#fff',
  transactionText: '#0D0D26',
};

export const darkTheme = {
  background: '#161622',
  text: '#fff',
  subText: '#a2a2a7',
  card: '#161622',
  color: '#333',
  tabsBgColor: '#27273a',
  borderColor: '#1c1d2a',
  iconBackground: '#1e1e2d',
  headerBackground: '#161622',
  transactionBackground: '#161622',
  transactionText: '#fff',
};

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

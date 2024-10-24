import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [fontSize, setFontSize] = useState(16); // Tamanho da fonte em pixels

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedFontSize = localStorage.getItem('fontSize') || 16;
    setTheme(savedTheme);
    setFontSize(savedFontSize);
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.documentElement.setAttribute('data-fontSize', savedFontSize);
  }, []);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const changeFontSize = (newFontSize) => {
    if (newFontSize < 0) newFontSize = 0; // Impede número negativo
    setFontSize(newFontSize);
    localStorage.setItem('fontSize', newFontSize);
    document.documentElement.setAttribute('data-fontSize', newFontSize);
  };

  return (
    <ThemeContext.Provider
      value={{ theme, fontSize, changeFontSize, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

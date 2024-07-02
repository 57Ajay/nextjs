// components/contexts/theme-context.tsx
'use client';
import { createContext, useState, ReactNode, useContext } from 'react';

type ThemeContextType = {
  dark: boolean;
  toggleDarkMode: () => void;
};

const defaultValue: ThemeContextType = {
  dark: false,
  toggleDarkMode: () => {},
};

const ThemeContext = createContext<ThemeContextType>(defaultValue);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [dark, setDark] = useState(false);

  const toggleDarkMode = () => {
    setDark(!dark);
  };

  return (
    <ThemeContext.Provider value={{ dark, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

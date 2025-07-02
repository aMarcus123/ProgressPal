import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Theme, ThemeName, themes } from '../themes/themes';

const STORAGE_KEY = 'userTheme';

const ThemeContext = createContext<{
  theme: Theme;
  setThemeName: (name: ThemeName) => void;
}>({
  theme: themes.blues,
  setThemeName: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeName, setThemeNameState] = useState<ThemeName>('blues');

  const setThemeName = async (name: ThemeName) => {
    setThemeNameState(name);
    try {
      await AsyncStorage.setItem(STORAGE_KEY, name);
    } catch (e) {
      console.error('Failed to save theme:', e);
    }
  };

  // Load theme on mount
  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem(STORAGE_KEY);
        if (savedTheme && themes[savedTheme as ThemeName]) {
          setThemeNameState(savedTheme as ThemeName);
        }
      } catch (e) {
        console.error('Failed to load theme:', e);
      }
    };
    loadTheme();
  }, []);

  const theme = themes[themeName];

  return (
    <ThemeContext.Provider value={{ theme, setThemeName }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

import { uuid } from '@/components/uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useEffect, useState } from 'react';

export type ProgressEntry = {
  id: string;
  imageUris: string[];    // multiple images per entry
  date: string;
  weight?: number;
};


type ProgressContextType = {
  progressEntries: ProgressEntry[];
  addEntry: (entry: Omit<ProgressEntry, 'id'>) => Promise<void>;
};

export const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [progressEntries, setProgressEntries] = useState<ProgressEntry[]>([]);

  useEffect(() => {
    const loadEntries = async () => {
      try {
        const stored = await AsyncStorage.getItem('progressData');
        if (stored) setProgressEntries(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to load entries', e);
      }
    };
    loadEntries();
  }, []);

  const addEntry = async (entry: Omit<ProgressEntry, 'id'>) => {
    const newEntry: ProgressEntry = { id: uuid(), ...entry };
    const updated = [...progressEntries, newEntry];
    setProgressEntries(updated);
    try {
      await AsyncStorage.setItem('progressData', JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save entry', e);
    }
  };

  return (
    <ProgressContext.Provider value={{ progressEntries, addEntry }}>
      {children}
    </ProgressContext.Provider>
  );
};

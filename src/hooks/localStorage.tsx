'use client'
import { createContext } from 'react';

export const StoragedContext = createContext({
  GetStoraged: (key: string): string[] => [],
  SetStoraged: (key: string, id: string) => {},
  RemoveStoraged: (key: string, id: string) => {}
});

export const ContextStoraged = ({ children }: { children: React.ReactNode }) => {
  const SetStoraged = (key: string, id: string) => {
    if (typeof localStorage !== 'undefined') {
      const storageItems = GetStoraged(key);
      storageItems.push(id);
      localStorage.setItem(key, JSON.stringify(storageItems));
    }
  };

  const RemoveStoraged = (key: string, id: string) => {
    if (typeof localStorage !== 'undefined') {
      const storageItems = GetStoraged(key);
      const updatedStorageItems = storageItems.filter((favoriteId: string) => favoriteId !== id);
      localStorage.setItem(key, JSON.stringify(updatedStorageItems));
    }
  };

  const GetStoraged = (key: string): string[] => {
    let storageItems: string[] = [];
    if (typeof localStorage !== 'undefined') {
      storageItems = JSON.parse(localStorage.getItem(key) ?? '[]') as string[];
    }
    return storageItems;
  };

  return (
    <StoragedContext.Provider value={{ GetStoraged, SetStoraged, RemoveStoraged }}>
      {children}
    </StoragedContext.Provider>
  );
};

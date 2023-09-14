'use client';

export const setLocalStorageItem = (key: string, value: any) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    // Handle any errors here, e.g., if localStorage is disabled or if there's a quota exceeded.
    console.error('Error setting localStorage item:', error);
  }
};

export const getLocalStorageItem = <T>(key: string): T | null => {
  try {
    const storedItem = localStorage.getItem(key);
    if (storedItem !== null) {
      return JSON.parse(storedItem) as T;
    }
    return null;
  } catch (error) {
    // Handle any errors here, e.g., if localStorage is disabled.
    console.error('Error getting localStorage item:', error);
    return null;
  }
};

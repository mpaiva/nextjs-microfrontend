'use client';

import { useState, useEffect } from 'react';
import { store } from '../state/store';

export function useSharedState<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(
    store.getState<T>(key) ?? initialValue
  );

  useEffect(() => {
    const unsubscribe = store.subscribe<T>(key, setValue);
    return () => {
      unsubscribe();
    };
  }, [key]);

  const updateValue = (newValue: T) => {
    store.setState(key, newValue);
  };

  return [value, updateValue] as const;
}
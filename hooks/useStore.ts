'use client';

import { useState, useEffect, useCallback } from 'react';
import { store } from '@/lib/store';

export function useStore<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const [value, setValue] = useState<T>(
    store.getState<T>(key) ?? initialValue
  );

  useEffect(() => {
    const unsubscribe = store.subscribe<T>(key, setValue);
    return () => unsubscribe();
  }, [key]);

  const updateValue = useCallback((newValue: T) => {
    store.setState(key, newValue);
  }, [key]);

  return [value, updateValue];
}
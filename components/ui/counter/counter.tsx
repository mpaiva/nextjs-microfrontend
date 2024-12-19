'use client';

import React from 'react';
import { useSharedState } from '@/lib/backbone-integration/hooks/useSharedState';
import { Button } from '@/components/ui/button';

export function Counter() {
  const [count, setCount] = useSharedState('counter', 0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div className="p-4 bg-white rounded shadow dark:bg-gray-800">
      <h2 className="text-xl font-bold mb-2 dark:text-white">React Counter</h2>
      <Button
        onClick={handleIncrement}
        className="mb-2"
        aria-label="Increment counter"
      >
        Increment Counter
      </Button>
      <p className="mt-2 dark:text-white">Count: {count}</p>
    </div>
  );
}
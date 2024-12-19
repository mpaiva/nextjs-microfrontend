'use client';

import { Button } from '@/components/ui/button';
import { counterActions } from '@/lib/backbone-integration/state/actions';

interface CounterButtonProps {
  currentValue: number;
}

export function CounterButton({ currentValue }: CounterButtonProps) {
  return (
    <Button
      onClick={() => counterActions.increment(currentValue)}
      aria-label="Increment counter"
    >
      Increment Counter: {currentValue}
    </Button>
  );
}
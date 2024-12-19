'use client';

import { CounterButton as SharedCounterButton } from '@/components/shared/counter/Button';

interface CounterButtonProps {
  onClick: () => void;
}

export function CounterButton({ onClick }: CounterButtonProps) {
  return (
    <SharedCounterButton onClick={onClick} framework="react">
      Increment Counter
    </SharedCounterButton>
  );
}
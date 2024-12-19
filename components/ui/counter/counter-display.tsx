'use client';

interface CounterDisplayProps {
  value: number;
}

export function CounterDisplay({ value }: CounterDisplayProps) {
  return (
    <div className="text-lg font-medium">
      Current Count: {value}
    </div>
  );
}
'use client';

interface CounterDisplayProps {
  value: number;
}

/**
 * React-specific counter display component
 * Shows the current count with framework-specific styling
 */
export function CounterDisplay({ value }: CounterDisplayProps) {
  return (
    <div className="text-lg font-medium text-[var(--framework-react)]">
      Count: {value}
    </div>
  );
}
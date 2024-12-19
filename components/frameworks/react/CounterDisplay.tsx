interface CounterDisplayProps {
  value: number;
}

export function CounterDisplay({ value }: CounterDisplayProps) {
  return (
    <div className="mt-4 text-lg font-medium text-[var(--framework-react)]">
      Count: {value}
    </div>
  );
}
interface CounterDisplayProps {
  value: number;
}

export function CounterDisplay({ value }: CounterDisplayProps) {
  return (
    <div className="text-lg font-medium text-[var(--framework-vue)]">
      Count: {value}
    </div>
  );
}
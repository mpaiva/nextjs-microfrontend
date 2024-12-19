import { cn } from '@/lib/utils';

interface CounterDisplayProps {
  value: number;
  framework: 'react' | 'backbone' | 'angular' | 'vue' | 'web';
}

export function CounterDisplay({ value, framework }: CounterDisplayProps) {
  return (
    <p className={cn(
      'text-lg font-medium mt-3',
      {
        'text-[var(--framework-react)]': framework === 'react',
        'text-[var(--framework-backbone)]': framework === 'backbone',
        'text-[var(--framework-angular)]': framework === 'angular',
        'text-[var(--framework-vue)]': framework === 'vue',
        'text-[var(--framework-web)]': framework === 'web',
      }
    )}>
      Count: {value}
    </p>
  );
}
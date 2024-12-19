'use client';

import { cn } from '@/lib/utils';
import type { Framework } from '@/lib/types/framework';

interface CounterDisplayProps {
  value: number;
  framework: Framework;
}

export function CounterDisplay({ value, framework }: CounterDisplayProps) {
  return (
    <div className={cn(
      "text-lg font-medium",
      {
        'text-[var(--framework-react)]': framework === 'react',
        'text-[var(--framework-angular)]': framework === 'angular',
        'text-[var(--framework-vue)]': framework === 'vue',
        'text-[var(--framework-web)]': framework === 'web',
        'text-[var(--framework-htmx)]': framework === 'htmx',
      }
    )}>
      Count: {value}
    </div>
  );
}
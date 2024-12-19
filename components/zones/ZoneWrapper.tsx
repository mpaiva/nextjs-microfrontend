'use client';

import { cn } from '@/lib/utils';
import type { Framework } from '@/lib/types/framework';

interface ZoneWrapperProps {
  children: React.ReactNode;
  framework: Framework;
  title: string;
}

export function ZoneWrapper({ children, framework, title }: ZoneWrapperProps) {
  return (
    <div className={cn(
      'rounded-xl p-6 shadow-lg border-2',
      {
        'border-[var(--framework-react)] bg-[var(--framework-react)]/5': framework === 'react',
        'border-[var(--framework-angular)] bg-[var(--framework-angular)]/5': framework === 'angular',
        'border-[var(--framework-vue)] bg-[var(--framework-vue)]/5': framework === 'vue',
        'border-[var(--framework-web)] bg-[var(--framework-web)]/5': framework === 'web',
        'border-[var(--framework-htmx)] bg-[var(--framework-htmx)]/5': framework === 'htmx',
        'border-[var(--framework-svelte)] bg-[var(--framework-svelte)]/5': framework === 'svelte',
      }
    )}>
      <h2 className={cn(
        'text-xl font-semibold mb-4',
        {
          'text-[var(--framework-react)]': framework === 'react',
          'text-[var(--framework-angular)]': framework === 'angular',
          'text-[var(--framework-vue)]': framework === 'vue',
          'text-[var(--framework-web)]': framework === 'web',
          'text-[var(--framework-htmx)]': framework === 'htmx',
          'text-[var(--framework-svelte)]': framework === 'svelte',
        }
      )}>
        {title}
      </h2>
      {children}
    </div>
  );
}
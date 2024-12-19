'use client';

import { cn } from '@/lib/utils';
import type { Framework } from '@/lib/types/framework';

interface CounterButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  framework: Framework;
}

export function CounterButton({ children, onClick, framework }: CounterButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center px-4 py-2 rounded-lg",
        "text-[var(--button-font-size)] leading-[var(--button-line-height)]",
        "text-white font-medium transition-colors duration-200",
        "focus:outline-none focus:ring-2 focus:ring-offset-2",
        {
          'bg-[var(--framework-react)]': framework === 'react',
          'bg-[var(--framework-angular)]': framework === 'angular',
          'bg-[var(--framework-vue)]': framework === 'vue',
          'bg-[var(--framework-web)]': framework === 'web',
          'bg-[var(--framework-htmx)]': framework === 'htmx',
          'bg-[var(--framework-svelte)]': framework === 'svelte',
        },
        {
          'hover:bg-[var(--framework-react-hover)] focus:ring-[var(--framework-react)]': framework === 'react',
          'hover:bg-[var(--framework-angular-hover)] focus:ring-[var(--framework-angular)]': framework === 'angular',
          'hover:bg-[var(--framework-vue-hover)] focus:ring-[var(--framework-vue)]': framework === 'vue',
          'hover:bg-[var(--framework-web-hover)] focus:ring-[var(--framework-web)]': framework === 'web',
          'hover:bg-[var(--framework-htmx-hover)] focus:ring-[var(--framework-htmx)]': framework === 'htmx',
          'hover:bg-[var(--framework-svelte-hover)] focus:ring-[var(--framework-svelte)]': framework === 'svelte',
        }
      )}
    >
      {children}
    </button>
  );
}
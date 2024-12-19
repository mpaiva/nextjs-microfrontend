import { cn } from '@/lib/utils';
import type { Framework } from '@/lib/types/framework';

export function getFrameworkButtonClasses(framework: Framework): string {
  return cn(
    'inline-flex items-center justify-center',
    'px-4 py-2 rounded-lg',
    'text-[var(--button-font-size)] leading-[var(--button-line-height)]',
    'font-medium transition-colors duration-200',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'text-white',
    `bg-[var(--framework-${framework})]`,
    `hover:bg-[var(--framework-${framework}-hover)]`,
    `focus:ring-[var(--framework-${framework})]`
  );
}

export function getFrameworkDisplayClasses(framework: Framework): string {
  return cn(
    'text-lg font-medium',
    `text-[var(--framework-${framework}-text)]`
  );
}

export function getFrameworkContainerClasses(): string {
  return 'text-center space-y-4';
}
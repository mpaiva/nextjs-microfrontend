import { type Framework } from '../types/framework';
import { cn } from '@/lib/utils';

/**
 * Get framework-specific button classes
 */
export function getFrameworkButtonClasses(framework: Framework): string {
  return cn(
    'inline-flex items-center justify-center px-4 py-2 rounded-lg',
    'text-white font-medium transition-colors duration-200',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    `bg-[var(--framework-${framework})]`,
    `hover:bg-[var(--framework-${framework}-hover)]`,
    `focus:ring-[var(--framework-${framework})]`
  );
}

/**
 * Get framework-specific display classes
 */
export function getFrameworkDisplayClasses(framework: Framework): string {
  return cn(
    'text-lg font-medium',
    `text-[var(--framework-${framework})]`
  );
}

/**
 * Get framework-specific container classes
 */
export function getFrameworkContainerClasses(): string {
  return 'text-center space-y-4';
}

/**
 * Get framework-specific zone classes
 */
export function getFrameworkZoneClasses(framework: Framework): string {
  return cn(
    'rounded-xl p-6 shadow-lg border-2',
    `border-[var(--framework-${framework})]`,
    `bg-[var(--framework-${framework})]/5`
  );
}
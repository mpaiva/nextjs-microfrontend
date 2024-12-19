import { cn } from '@/lib/utils';
import type { Framework } from '@/lib/types/framework';

export function getZoneWrapperClasses(framework: Framework): string {
  return cn(
    'rounded-xl p-6 shadow-lg border-2',
    `border-[var(--framework-${framework})]`,
    `bg-[var(--framework-${framework})]/5`
  );
}

export function getZoneTitleClasses(framework: Framework): string {
  return cn(
    'text-xl font-semibold mb-4',
    `text-[var(--framework-${framework})]`
  );
}
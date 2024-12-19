import { cn } from '@/lib/utils';

export const buttonStyles = {
  base: cn(
    'inline-flex items-center justify-center',
    'px-4 py-2 rounded-lg',
    'text-[var(--button-font-size)] leading-[var(--button-line-height)]',
    'text-white font-medium',
    'transition-colors duration-200',
    'bg-[var(--framework-svelte)]'
  ),
  hover: 'hover:bg-[var(--framework-svelte-hover)]',
  focus: 'focus:outline-none focus:ring-2 focus:ring-[var(--framework-svelte)] focus:ring-offset-2',
};
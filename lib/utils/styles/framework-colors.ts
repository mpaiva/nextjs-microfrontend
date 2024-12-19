import type { Framework } from '@/lib/types/framework';

export const FRAMEWORK_COLORS = {
  react: {
    base: 'hsl(193, 95%, 40%)',
    hover: 'hsl(193, 95%, 35%)',
    text: 'hsl(193, 95%, 20%)',
  },
  angular: {
    base: 'hsl(358, 75%, 59%)',
    hover: 'hsl(358, 75%, 54%)',
    text: 'hsl(358, 75%, 25%)',
  },
  vue: {
    base: 'hsl(153, 47%, 49%)',
    hover: 'hsl(153, 47%, 44%)',
    text: 'hsl(153, 47%, 25%)',
  },
  web: {
    base: 'hsl(31, 95%, 52%)',
    hover: 'hsl(31, 95%, 47%)',
    text: 'hsl(31, 95%, 25%)',
  },
  htmx: {
    base: 'hsl(265, 89%, 55%)',
    hover: 'hsl(265, 89%, 50%)',
    text: 'hsl(265, 89%, 25%)',
  },
  svelte: {
    base: 'hsl(225, 73%, 57%)',
    hover: 'hsl(225, 73%, 52%)',
    text: 'hsl(225, 73%, 30%)',
  },
} as const;

export function getFrameworkColor(framework: Framework): string {
  return FRAMEWORK_COLORS[framework].base;
}

export function getFrameworkHoverColor(framework: Framework): string {
  return FRAMEWORK_COLORS[framework].hover;
}

export function getFrameworkTextColor(framework: Framework): string {
  return FRAMEWORK_COLORS[framework].text;
}
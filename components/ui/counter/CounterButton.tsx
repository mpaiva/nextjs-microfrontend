import { cn } from '@/lib/utils';

interface CounterButtonProps {
  onClick: () => void;
  framework: 'react' | 'backbone' | 'angular' | 'vue' | 'web';
  children: React.ReactNode;
}

export function CounterButton({ onClick, framework, children }: CounterButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'px-4 py-2 rounded-lg text-white font-medium transition-colors',
        {
          'bg-[var(--framework-react)] hover:bg-[var(--framework-react-hover)]': framework === 'react',
          'bg-[var(--framework-backbone)] hover:bg-[var(--framework-backbone-hover)]': framework === 'backbone',
          'bg-[var(--framework-angular)] hover:bg-[var(--framework-angular-hover)]': framework === 'angular',
          'bg-[var(--framework-vue)] hover:bg-[var(--framework-vue-hover)]': framework === 'vue',
          'bg-[var(--framework-web)] hover:bg-[var(--framework-web-hover)]': framework === 'web',
        }
      )}
    >
      {children}
    </button>
  );
}
'use client';

interface CounterButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export function CounterButton({ children, onClick }: CounterButtonProps) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center justify-center px-4 py-2 rounded-lg 
                text-white font-medium transition-colors duration-200
                bg-[var(--framework-react)] hover:bg-[var(--framework-react-hover)]
                focus:outline-none focus:ring-2 focus:ring-[var(--framework-react)] focus:ring-offset-2"
    >
      {children}
    </button>
  );
}
export const counterTemplate = `
  <div class="text-center space-y-4">
    <button 
      class="backbone-button inline-flex items-center justify-center px-4 py-2 rounded-lg 
             text-white font-medium transition-colors duration-200
             bg-[var(--framework-backbone)] hover:bg-[var(--framework-backbone-hover)]
             focus:outline-none focus:ring-2 focus:ring-[var(--framework-backbone)] focus:ring-offset-2"
      type="button"
      aria-label="Increment counter"
    >
      Increment Counter
    </button>
    <div class="counter-value text-lg font-medium text-[var(--framework-backbone)]">
      Count: 0
    </div>
  </div>
`;
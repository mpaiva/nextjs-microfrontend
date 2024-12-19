# HTMX Counter Implementation

This directory contains an HTMX-based counter implementation that demonstrates HTMX patterns and best practices.

## Structure

```
Counter/
├── components/           # UI Components
│   ├── CounterButton.tsx  # Button component
│   └── CounterDisplay.tsx # Display component
├── hooks/               # Custom hooks
│   └── useHtmxCounter.ts  # Counter logic
└── index.tsx           # Main component
```

## Features

- HTMX integration
- Component composition
- Custom hook for business logic
- Framework-specific styling
- Integration with shared state
- Console message integration

## Implementation Details

1. **State Management**
   - Uses shared counter state via `useCounter` hook
   - Integrates with console messages

2. **Component Architecture**
   - Separates UI components from logic
   - Uses composition for flexibility
   - Framework-specific styling

3. **Event Handling**
   - Centralized in custom hook
   - Memoized callbacks for performance
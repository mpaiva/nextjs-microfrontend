# Library Code Documentation

This directory contains core utilities, types, and shared functionality used across the application.

## Directory Structure

```
lib/
├── store/              # Shared state management
│   ├── index.ts       # Store implementation
│   ├── types.ts       # Store type definitions
│   └── utils.ts       # Store utilities
├── types/             # Global TypeScript types
│   └── framework.ts   # Framework-specific types
└── utils.ts           # General utilities
```

## Store Implementation

The store provides a simple but powerful state management solution:

- Singleton pattern ensures single source of truth
- Event-based state updates
- Type-safe state access and updates
- Framework-agnostic design

### Usage Example

```typescript
import { store } from '@/lib/store';

// Set state
store.setState('counter', 0);

// Get state
const count = store.getState<number>('counter');

// Subscribe to changes
const unsubscribe = store.subscribe<number>('counter', (value) => {
  console.log('Counter updated:', value);
});

// Cleanup
unsubscribe();
```

## Type System

The type system is designed to provide strong typing across the application:

- Framework-specific types
- State management types
- Utility types

### Key Types

- `Framework`: Union type of supported frameworks
- `SharedState`: Type-safe store state
- `StateCallback`: Store subscription callback type

## Utilities

Common utilities used throughout the application:

- Class name merging with `cn()`
- Store event key creation
- Type guards and assertions
## Framework Components

This directory contains counter implementations for different frameworks:

- `/react` - React implementation
- `/backbone` - Backbone.js implementation
- `/angular` - Angular-style implementation
- `/vue` - Vue-style implementation
- `/web` - Web Components implementation

### Structure

Each framework directory follows a similar pattern:

```
framework-name/
├── components/     # Reusable components
├── hooks/         # Framework-specific hooks
├── state/         # State management
└── utils/         # Helper functions
```

### Adding New Frameworks

1. Create a new directory for your framework
2. Implement the counter following the framework's patterns
3. Use shared state from `@/lib/shared/state`
4. Add styling using design tokens from `@/styles/tokens`
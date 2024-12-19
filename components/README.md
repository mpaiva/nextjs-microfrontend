# Components Documentation

This directory contains all React components used in the application.

## Directory Structure

```
components/
├── frameworks/         # Framework-specific implementations
│   ├── react/         # React implementation
│   ├── angular/       # Angular-style implementation
│   ├── vue/           # Vue-style implementation
│   ├── web/           # Web Components implementation
│   └── htmx/         # HTMX implementation
├── shared/            # Shared components
│   ├── counter/       # Counter-specific components
│   └── ConsoleMessages.tsx  # Console output component
└── zones/             # Framework zone components
```

## Framework Implementations

Each framework implementation follows its own patterns while maintaining consistency through shared components.

### React Counter
- Modern hooks-based implementation
- Custom hook for counter logic
- Shared component composition

### Angular-style Counter
- Component-based architecture
- Dependency injection pattern
- Lifecycle management

### Vue-style Counter
- Composition API patterns
- Reactive state management
- Event handling

### Web Components Counter
- Native web standards
- Shadow DOM usage
- Custom element lifecycle

### HTMX Counter
- Hypermedia-driven approach
- Server-side state
- Progressive enhancement

## Shared Components

### Counter Components
- `Button.tsx`: Reusable counter button
- `Display.tsx`: Counter display component

### ConsoleMessages
Interactive console showing framework-specific learning resources and documentation.

## Zone Components

`ZoneWrapper.tsx` provides consistent styling and structure for each framework implementation.

### Features
- Framework-specific styling
- Consistent layout
- Dark mode support
# Technical Documentation

## Architecture Overview

This application follows a clean React architecture with TypeScript for type safety and D3.js for advanced visualization calculations.

### Core Components

#### `App.tsx`

- Main application component
- Manages global state (selected topic)
- Orchestrates data flow between components

#### `useWordCloud` Hook

- Encapsulates D3 word cloud logic
- Handles async layout calculation
- Returns positioned elements for rendering

#### Component Hierarchy

```
App
├── Header (static)
├── WordCloudContainer
│   └── WordCloudButton[] (dynamic list)
└── InfoPanel (conditional)
```

## Data Flow

1. **Data Loading**: `topics.json` → `App` component
2. **Layout Calculation**: `topics` → `useWordCloud` → `positions[]`
3. **Rendering**: `positions` → `WordCloudContainer` → `WordCloudButton[]`
4. **User Interaction**: `click` → `setSelected` → `InfoPanel` update

## Key Algorithms

### Font Size Calculation

- Sorts all volumes to find percentile ranking
- Maps percentiles to 6 font size tiers (15px-40px)
- Ensures visual hierarchy based on topic importance

### Color Mapping

- Green: Positive sentiment (score > 60)
- Red: Negative sentiment (score < 40)
- Grey: Neutral sentiment (40-60)

### D3 Layout Configuration

- Container: 1000x600px
- Padding: 12px between words
- Rotation: 0° (horizontal text only)
- Spiral placement algorithm for collision avoidance

## Performance Considerations

- `useMemo` for volume calculations (prevents recalculation)
- D3 layout runs only when topics change
- Minimal re-renders through proper key props

## Styling Approach

- CSS classes with BEM-like naming convention
- Inline styles for dynamic properties (position, size, color)
- Transform-based positioning for precise placement

## Type Safety

All major data structures are typed:

- `Topic`: Core data model
- `Position`: Rendered element data
- `Word`, `Layout`: D3 integration types
- Component props: Strictly typed interfaces

## Extending the Application

### Adding New Data Sources

1. Ensure data matches `Topic` interface
2. Update `topics.json` or create data loader
3. Font size algorithm will automatically adapt

### Customizing Appearance

- Modify `getColor()` for different color schemes
- Adjust font size ranges in `getFontSizePercentile()`
- Update container dimensions in `useWordCloud`

### Adding Features

- Word filtering/search: Add state to `App`
- Animation: Use React Transition Group
- Export functionality: Add canvas rendering

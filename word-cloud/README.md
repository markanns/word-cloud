# Word Cloud Visualization

An interactive word cloud application built with React, TypeScript, and D3.js that visualizes topic data with sentiment analysis.

## Features

- **Interactive Word Cloud**: Click on topics to view detailed information
- **Sentiment-based Coloring**: Topics are colored based on sentiment scores (green=positive, red=negative, grey=neutral)
- **Dynamic Sizing**: Word size reflects topic volume/popularity
- **Responsive Layout**: Optimized positioning using D3 cloud layout algorithm
- **Detailed Info Panel**: Shows mention counts and sentiment breakdown

## Technologies Used

- **React 19** with TypeScript
- **D3.js** for word cloud layout calculation
- **Vite** for fast development and building
- **ESLint** for code quality

## Getting Started

### Prerequisites

- Node.js (v20.19 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd word-cloud
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # App header with title
│   ├── InfoPanel.tsx   # Topic details panel
│   ├── WordCloudButton.tsx    # Individual word buttons
│   └── WordCloudContainer.tsx # Word cloud wrapper
├── hooks/
│   └── useWordCloud.ts # D3 word cloud logic
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
│   ├── getColor.ts     # Sentiment-based coloring
│   └── getFontSize.ts  # Volume-based font sizing
└── topics.json         # Sample topic data
```

## How It Works

1. **Data Loading**: Topics are loaded from `topics.json` with volume and sentiment data
2. **Layout Calculation**: D3-cloud calculates optimal positioning for each word
3. **Rendering**: React renders positioned words as interactive buttons
4. **Interaction**: Clicking words shows detailed sentiment breakdown

## Data Format

Topics should follow this structure:

```typescript
{
  "topics": [
    {
      "label": "Topic Name",
      "volume": 165,
      "sentimentScore": 65,
      "sentiment": {
        "positive": 29,
        "neutral": 133,
        "negative": 3
      }
    }
  ]
}

```

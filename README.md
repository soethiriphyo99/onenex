# Onenex UI Recreation

A premium landing page recreation of Onenex, featuring smooth animations, responsive design, and dynamic data integration.

## Features

- **Premium Animations**: Built with Framer Motion for high-end UI feel (Hero text, line reveals, card staggered animations).
- **API Integration**: Dynamic project data fetched from [DummyJSON](https://dummyjson.com/).
- **State Management**: Robust state handling using **Zustand**, including loading/error states and local caching.
- **Responsive Design**: Fluid layouts that adapt from desktop to mobile.
- **Clean Architecture**: Modular component structure with TypeScript for type safety.

## Tech Stack

- **React 18** + **Vite**
- **TypeScript**
- **Framer Motion** (Animations)
- **Zustand** (State Management)
- **Vanilla CSS** (Custom properties & Flex/Grid)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

## Key Technical Decisions

- **Zustand vs. Prop Drilling**: Used Zustand for a centralized "Project Store" to manage API data and active category filters across components seamlessly.
- **Framer Motion Layout Animations**: Leveraged the `layout` and `AnimatePresence` features of Framer Motion to create smooth transitions when categories are switched in the project grid.
- **CSS Custom Properties**: Defined a design system in `:root` to ensure consistent branding (purple accents, creamy background) and easy theme maintenance.
- **API Data Mapping**: Transformed raw data from DummyJSON into a custom `Project` schema that fits the specific UI requirements (mapping into E-commerce, Website, and App categories).
# onenex

# AGENTS.md

## Project Overview

Kas Mesjid - SIAM (Sistem Informasi Amanah Muda) - A masjid management admin panel built with React + Vite + TailwindCSS.

## Commands

- `npm run dev` - Start the Vite development server (http://localhost:5173)
- `npm run build` - Build the production bundle
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint on the src directory

## Architecture

### Tech Stack
- **Build Tool**: Vite 5
- **Transpiler**: SWC (via @vitejs/plugin-react-swc)
- **UI**: React 19
- **Styling**: TailwindCSS v3 with custom Material Design 3 color scheme
- **Linting**: ESLint 9 (flat config)

### Directory Structure

```
src/
├── assets/        # Static assets (icons, images)
├── components/      # Reusable UI components
│   ├── layout/      # SideNavBar, TopAppBar, MainLayout
│   ├── calendar/    # Calendar, CalendarDay, CalendarGrid, CalendarHeader
│   ├── events/      # EventList, EventItem, EventDetails
│   ├── ui/          # Button, IconButton, Badge, ThemeToggle, etc.
│   └── icons/       # Material Symbols icon wrapper
├── data/            # Static/mock data (events, prayer times, etc.)
├── hooks/           # Custom React hooks (useCalendar, useEvents, etc.)
├── pages/           # Page-level components (ActivitiesKajian, Finance, etc.)
├── App.jsx          # Root app component with routing
└── main.jsx         # React entry point
```

### Routing

Uses `react-router-dom` for navigation. Routes:

| Route            | Page              |
|------------------|-------------------|
| `/`              | Activities & Kajian |
| `/finance`       | Finance           |
| `/services`      | Services          |
| `/assets`        | Assets            |
| `/settings`      | Settings          |

### Styling Conventions

- All colors use Material Design 3 palette defined in `tailwind.config.cjs`
- Font sizes use semantic naming (`headline-md`, `body-lg`, `label-sm`, etc.)
- `className` strings use the same structure as the original HTML design
- Responsive classes use Tailwind's breakpoint system (e.g., `md:flex`, `lg:col-span-2`)

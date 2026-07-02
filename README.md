# React Admin Max

Admin dashboard built with React 19, Vite 7, and Tailwind CSS 4.

## Tech Stack

- **React 19** — UI library
- **Vite 7** — Build tool
- **Tailwind CSS 4** — Utility-first CSS
- **Recharts** — Charting library
- **Lucide React** — Icons

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Build for production (single JS bundle) |
| `npm run preview` | Preview production build |

## Project Structure

```
src/
├── components/
│   ├── app/          # Layout components (Sidebar, TopNav, BottomNav, etc.)
│   ├── cards/        # Counter card variants
│   └── ui/           # UI primitives (Button, Card, Badge, DataTable, etc.)
├── data/             # Mock data
├── layouts/          # App layout
├── pages/            # Route pages
├── stores/           # React Context state
└── utils/            # Helpers (cn)
```

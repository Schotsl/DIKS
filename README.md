This is a [Next.js](https://nextjs.org) project built with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) and developed using [Bun](https://bun.sh).

## Getting Started

Run the development server:

```bash
bun dev
```

Other scripts:

```bash
bun run build   # production build
bun run lint    # linting
bun run test    # run test suite
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Tech Stack

- **Framework**: Next.js with React
- **Data layer**: React Query with a `localStorage` wrapper simulating a database
- **Validation**: Zod integrated into form inputs
- **Styling**: Plain CSS with a REM-based naming scheme, scoped via CSS modules
- **Testing**: Jest for both business logic (budget library) and user interactions

## Project Structure

- **Components**: Uses the compound component pattern (e.g. `Budgets` + `BudgetsItem`, `Profile` + `ProfileIcon`).
- **Page-specific components**: Placed in a `_components` folder to avoid bloating the main directory and to prevent Next.js from rendering them as routes.
- **CSS**: Each component has its own CSS module for clean scoping.

This structure keeps things organized and makes the codebase easy to scale. Even though this was a small assignment, I wanted to set up a solid foundation that could support a larger application if developed further.

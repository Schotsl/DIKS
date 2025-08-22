## AI Usage

Although the assessment instructions don’t mention it explicitly, I stayed away from AI-assisted chats for scaffolding the project or generating components. The only exception was having GitHub Copilot autocomplete enabled. My reasoning is that the structure, naming, and logic are all mine, while autocomplete just speeds things up. I think this strikes a good balance between efficiency and showing my actual skills.

## Choices

I added a fake login page so the user wouldn’t just get dropped on the overview without context. The input uses Zod validation, which makes it feel more realistic since you need to type a valid email and a long enough password. There’s no real auth behind it, but ideally I would’ve created a fake mutation (`useLogin`) and middleware, so you’d actually need the correct password. I left this for now to prioritize other user interactions that felt more relevant for the assignment.

On the overview page, I show the user’s team, a list of users fetched from the “database,” and a budget list from the same dataset. Mutations (like inserting transactions) update the same database, so the state stays consistent across the site. My goal was to make the first interactions feel like you’re on a somewhat real dashboard, not just clicking through static pages.

## Front-End

I kicked things off with some basic components like inputs and buttons, styled according to the DIKS site. I used plain CSS with a REM-based naming scheme. I like this approach because it avoids bloated HTML/JSX. Normally I’d use a component library to save time, but since this project was small, I set it up myself. On bigger projects I’d use SASS since it integrates better with REM subclasses. Skipping that here saved a few minutes, but I probably overestimated the trade-off.

For structure, I used the **compound component pattern**. For example, `Budgets` with `BudgetsItem`, or `Profile` with `ProfileIcon`. Each component has its own CSS module to keep styles scoped, and related components sit together in their own directories. For page-only components, I made a `_components` folder so Next.js doesn’t render them as routes. This keeps things organized without blowing up the main components folder. Outside of that, I stayed close to the default Next.js setup.

## Data Interactions

I went with a plain Next.js project without a back-end. Normally I’d use Supabase, or maybe Pocketbase as a lighter option. But since this role is front-end focused, I decided to skip external database services.

Instead, I made a `database.ts` wrapper around `localStorage` to fetch, write, and insert mock data. This simulates connecting to an API or database. On top of that, I added query and mutation functions using React Query. This makes sure we have support for cached data fetching, filters, ID lookups, and rollback on optimistic updates. Putting this logic in a separate layer also keeps the project scalable. I added a very small budgets library too, with a function to find the right budget. This keeps the logic reusable, testable and separate.

## Testing

By the 2-hour mark I had the components, layouts, and data structure ready, but no test suite. In hindsight, I should’ve timed things better and maybe focused a bit less on data interactions. Still, I think showing scalability and good architecture was valuable, it demonstrates more than just hardcoding fake data.

Later that evening, I decided tests were still worth showing, so I spent 15 minutes adding a suite (GitHub commits confirm the timing). I tested the budgets library, since it holds the business logic and needs to be validated independently. I also tested user interactions with Jest—things like the header, inputs, Zod validation, and redirects. Jest was the obvious choice since it’s widely used with React/Next.js and I’ve worked with it (and Detox) before. These tests make sure that even after changes to components or logic, the front-end still works as expected.

## Reflection

I feel like I could’ve done a lot more with another hour, as I spent much of my two hours setting things up. I created Zod-integrated inputs, set up the fake database with React Query, styled components, and worked on similar tasks. That said, I’m glad I invested in the setup, even though this was a short assignment. I think it’s important to show how I build a foundation that can be scaled if this application were to be developed further.
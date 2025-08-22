import { Budget, User } from "@/types";

const LOCAL_STORAGE_KEY = "database";

type Database = {
  users: User[];
  budgets: Budget[];
};

export function readDatabase(): Database {
  // Since everything is client side we can just return an empty database during build
  if (typeof window === "undefined") return { users: [], budgets: [] };

  const raw = localStorage.getItem(LOCAL_STORAGE_KEY);

  // If there is data in the database we can use it
  if (raw) return JSON.parse(raw);

  // Otherwise we'll seed the "database" with some data
  const seed: Database = {
    budgets: [
      {
        id: "y2025",
        end: "2025-12-31T23:59:59.999Z",
        start: "2025-01-01T00:00:00.000Z",
        amount: 200,
      },
      {
        id: "summer",
        end: "2025-08-31T23:59:59.999Z",
        start: "2025-06-01T00:00:00.000Z",
        amount: 100,
      },
    ],
    users: [
      {
        id: "u1",
        name: "A. Feather",
        joined: "2025-01-01T00:00:00.000Z",
      },
      {
        id: "u2",
        name: "B. Quack",
        joined: "2025-01-15T00:00:00.000Z",
      },
    ],
  };

  const stringified = JSON.stringify(seed);

  localStorage.setItem(LOCAL_STORAGE_KEY, stringified);

  return seed;
}

export function writeDatabase(database: Database) {
  const stringified = JSON.stringify(database);

  localStorage.setItem(LOCAL_STORAGE_KEY, stringified);
}

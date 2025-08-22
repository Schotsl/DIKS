"use client";

import { Budget, User } from "@/types";

const LOCAL_STORAGE_KEY = "budgetData";

type Database = {
  users: User[];
  budgets: Budget[];
};

export function readDatabase(): Database {
  const raw = localStorage.getItem(LOCAL_STORAGE_KEY);

  // If there is data in the database we can use it
  if (raw) return JSON.parse(raw);

  // Otherwise we'll seed the "database" with some data
  const seed: Database = {
    budgets: [
      {
        id: "y2025",
        end: new Date("2025-12-31"),
        start: new Date("2025-01-01"),
        amount: 20000,
      },
      {
        id: "summer",
        end: new Date("2025-08-31"),
        start: new Date("2025-06-01"),
        amount: 10000,
      },
    ],
    users: [
      {
        id: "u1",
        name: "A. Feather",
        joined: new Date("2025-01-01"),
      },
      {
        id: "u2",
        name: "B. Quack",
        joined: new Date("2025-01-15"),
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

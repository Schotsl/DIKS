import { findBudget } from "@/lib/budgets";
import { Budget } from "@/types";

function createBudget(partial: Partial<Budget> & { id: string }): Budget {
  const now = new Date();
  const time = now.getTime();

  const end = new Date(time + 24 * 60 * 60 * 1000).toISOString();
  const start = new Date(time - 24 * 60 * 60 * 1000).toISOString();

  return {
    id: partial.id,
    end: partial.end ?? end,
    start: partial.start ?? start,
    amount: partial.amount ?? 100,
  };
}

describe("findBudget", () => {
  const fixedNow = new Date("2024-01-15T12:00:00.000Z");

  it("returns null when list is empty", () => {
    expect(findBudget([], fixedNow)).toBeNull();
  });

  it("ignores budgets with invalid dates", () => {
    const budgets = [{ id: "1", start: "invalid", end: "invalid", amount: 10 }];

    expect(findBudget(budgets, fixedNow)).toBeNull();
  });

  it("returns null when no active budgets exist", () => {
    const budgets = [
      createBudget({
        id: "1",
        end: "2023-01-31T23:59:59.999Z",
        start: "2023-01-01T00:00:00.000Z",
      }),
    ];

    expect(findBudget(budgets, fixedNow)).toBeNull();
  });

  it("returns the active budget when exactly one is active", () => {
    const budgets = [
      createBudget({
        id: "1",
        start: "2024-01-01T00:00:00.000Z",
        end: "2024-01-31T23:59:59.999Z",
      }),
      createBudget({
        id: "2",
        start: "2023-12-01T00:00:00.000Z",
        end: "2023-12-31T23:59:59.999Z",
      }),
    ];

    const result = findBudget(budgets, fixedNow);
    expect(result?.id).toBe("1");
  });

  it("returns the most recent active budget when multiple are active", () => {
    const budgets = [
      createBudget({
        id: "old",
        start: "2023-12-01T00:00:00.000Z",
        end: "2024-01-31T23:59:59.999Z",
      }),
      createBudget({
        id: "new",
        start: "2024-01-10T00:00:00.000Z",
        end: "2024-01-20T23:59:59.999Z",
      }),
    ];

    const result = findBudget(budgets, fixedNow);
    expect(result?.id).toBe("new");
  });
});

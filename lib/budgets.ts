import { Budget } from "@/types";

export function findBudget(
  budgets: Budget[],
  now: Date = new Date()
): Budget | null {
  const millisNow = now.getTime();

  // Filter out budgets that are not active at the moment
  const activeBudgets = budgets.filter((budget) => {
    const millisStart = Date.parse(budget.start);
    const millisEnd = Date.parse(budget.end);

    if (Number.isNaN(millisStart) || Number.isNaN(millisEnd)) return false;

    return millisStart <= millisNow && millisNow <= millisEnd;
  });

  if (activeBudgets.length === 0) return null;

  // Sort the active budgets by start date
  activeBudgets.sort((a, b) => Date.parse(b.start) - Date.parse(a.start));

  return activeBudgets[0] ?? null;
}

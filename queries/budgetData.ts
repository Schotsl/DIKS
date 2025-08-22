import { readDatabase } from "@/database";
import { queryOptions } from "@tanstack/react-query";

export default function budgetData() {
  return queryOptions({
    queryKey: ["budgetData"],
    queryFn: () => {
      const database = readDatabase();
      return database.budgets;
    },
  });
}

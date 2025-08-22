import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Transaction } from "@/schema/transactionSchema";
import { readDatabase, writeDatabase } from "@/database";
import { findBudget } from "@/lib/budgets";

type TransactionResult = {
  success: boolean;
  message?: string;
};

export default function useAddTransaction() {
  const queryClient = useQueryClient();

  return useMutation<TransactionResult, Error, Transaction>({
    mutationFn: async (data: Transaction) => {
      const database = readDatabase();
      const budget = findBudget(database.budgets);

      if (!budget) {
        return { success: false, message: "No active budget available" };
      }

      if (budget.amount < data.amount) {
        return { success: false, message: "Not enough money in the budget" };
      }

      const budgetUpdated = database.budgets.map((b) =>
        b.id === budget.id ? { ...b, amount: b.amount - data.amount } : b
      );

      writeDatabase({ ...database, budgets: budgetUpdated });

      return { success: true };
    },
    onSuccess: (result) => {
      if (result.success) {
        queryClient.invalidateQueries({ queryKey: ["budgetData"] });
      }
    },
  });
}

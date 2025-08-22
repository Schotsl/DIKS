import { z } from "zod";

export const transactionSchema = z.object({
  item: z
    .string({ message: "Item must be provided" })
    .trim()
    .min(1, { message: "Item must be provided" }),
  amount: z.coerce
    .number({
      message: "Amount must be a number",
    })
    .min(1, { message: "Amount must be at least 1" }),
});

export type Transaction = z.infer<typeof transactionSchema>;

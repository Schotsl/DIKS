import { z } from "zod";

export const transactionSchema = z.object({
  item: z.string().min(1),
  amount: z.number().min(1),
});

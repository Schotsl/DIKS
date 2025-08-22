import { Budget } from "@/types";

import styles from "./Budgets.module.css";

import BudgetsItem from "./Item";

type BudgetsProps = {
  budgets: Budget[];
};

export default function Budgets({ budgets }: BudgetsProps) {
  return (
    <div className={styles.budgets}>
      <h2>Your budgets</h2>

      <div className={styles.budgets__list}>
        {budgets.map((budget) => (
          <BudgetsItem key={budget.id} {...budget} />
        ))}
      </div>
    </div>
  );
}

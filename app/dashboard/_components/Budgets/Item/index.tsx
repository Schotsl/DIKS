import { Budget } from "@/types";

import styles from "./BudgetsItem.module.css";

export default function BudgetsItem({ end, start, amount }: Budget) {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const startString = startDate.toLocaleDateString();
  const endString = endDate.toLocaleDateString();

  return (
    <div className={styles.item}>
      <h3>€ {amount}</h3>
      <p>
        {startString} tot {endString}
      </p>
    </div>
  );
}

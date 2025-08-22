import { Budget } from "@/types";

import styles from "./BudgetsItem.module.css";

export default function BudgetsItem({ end, start, amount }: Budget) {
  return (
    <div className={styles.item}>
      <h3>€ {amount}</h3>
      <p>
        {start.toLocaleDateString()} tot {end.toLocaleDateString()}
      </p>
    </div>
  );
}

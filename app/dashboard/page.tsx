import Image from "next/image";

import imageBackground from "@/assets/images/background.png";

import styles from "./page.module.css";

import Users from "./_components/Users";
import Budgets from "./_components/Budgets";

export default function Dashboard() {
  return (
    <main className={styles.dashboard}>
      <div className={styles.dashboard__main}>
        <div className={styles.dashboard__main__header}>
          <h2 className={styles.dashboard__main__header__subtitle}>
            Your team
          </h2>

          <h1 className={styles.dashboard__main__header__title}>Rubberduck</h1>
        </div>

        <div className={styles.dashboard__main__columns}>
          <Users
            users={[
              {
                id: "1",
                name: "Scott Wilson",
                joined: new Date(),
              },
              {
                id: "2",
                name: "John Doe",
                joined: new Date(),
              },
            ]}
          />

          <Budgets
            budgets={[
              {
                id: "1",
                amount: 100,
                start: new Date(),
                end: new Date(),
              },
              {
                id: "2",
                amount: 200,
                start: new Date(),
                end: new Date(),
              },
            ]}
          />
        </div>
      </div>

      <Image
        src={imageBackground}
        alt="A image showing Diks Autoverhuur branded cars"
        sizes="100vw"
        className={styles.dashboard__image}
      />
    </main>
  );
}

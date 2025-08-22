"use client";

import { useState } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";

import Image from "next/image";

import imageBackground from "@/assets/images/background.png";

import styles from "./page.module.css";

import Users from "./_components/Users";
import Modal from "./_components/Modal";
import Button from "@/components/Button";
import Budgets from "./_components/Budgets";

import budgetData from "@/queries/budgetData";
import userData from "@/queries/userData";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  const { data: budgets } = useSuspenseQuery(budgetData());
  const { data: users } = useSuspenseQuery(userData());

  return (
    <main className={styles.dashboard}>
      <div className={styles.dashboard__main}>
        <div className={styles.dashboard__main__header}>
          <h2>Your team</h2>

          <h1 className={styles.dashboard__main__header__title}>Rubberduck</h1>
        </div>

        <div className={styles.dashboard__main__columns}>
          <Users users={users} />

          <Budgets budgets={budgets} />
        </div>

        <Button
          className={styles.dashboard__main__button}
          onClick={() => setIsOpen(true)}
        >
          Add new transaction
        </Button>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
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

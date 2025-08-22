"use client";

import { useState } from "react";
import Image from "next/image";

import imageBackground from "@/assets/images/background.png";

import styles from "./page.module.css";

import Users from "./_components/Users";
import Modal from "./_components/Modal";
import Button from "@/components/Button";
import Budgets from "./_components/Budgets";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className={styles.dashboard}>
      <div className={styles.dashboard__main}>
        <div className={styles.dashboard__main__header}>
          <h2>Your team</h2>

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

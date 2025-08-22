"use client";

import Input from "@/components/Input";
import styles from "./Modal.module.css";
import Button from "@/components/Button";

import { useForm } from "react-hook-form";
import { Transaction, transactionSchema } from "@/schema/transactionSchema";
import { zodResolver } from "@hookform/resolvers/zod";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Modal({ isOpen, onClose }: ModalProps) {
  const { control, handleSubmit } = useForm<Transaction>({
    resolver: zodResolver(transactionSchema),
  });

  if (!isOpen) return null;

  return (
    <div className={styles.modal} onClick={onClose}>
      <form
        className={styles.modal__content}
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit(onClose)}
      >
        <div>
          <h2>Transaction</h2>
          <h1>Add new transaction</h1>
        </div>

        <div className={styles.modal__content__inputs}>
          <Input
            label="Item"
            name="item"
            control={control}
            placeholder="Item"
          />

          <Input
            label="Amount"
            name="amount"
            control={control}
            placeholder="100"
          />
        </div>

        <Button>Add transaction</Button>
      </form>
    </div>
  );
}

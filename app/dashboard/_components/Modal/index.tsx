import Input from "@/components/Input";
import styles from "./Modal.module.css";
import Button from "@/components/Button";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Transaction, transactionSchema } from "@/schema/transactionSchema";

import useAddTransaction from "@/mutations/useAddTransaction";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Modal({ isOpen, onClose }: ModalProps) {
  const { control, handleSubmit, setError, reset } = useForm<
    z.input<typeof transactionSchema>,
    unknown,
    Transaction
  >({
    resolver: zodResolver(transactionSchema),
  });

  const addTransition = useAddTransaction();

  const onSubmit: SubmitHandler<Transaction> = async (data) => {
    const result = await addTransition.mutateAsync(data);

    if (!result.success) {
      setError("amount", {
        type: "manual",
        message: result.message ?? "An error occurred",
      });

      return;
    }

    reset();

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modal} onClick={onClose}>
      <form
        className={styles.modal__content}
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit(onSubmit)}
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

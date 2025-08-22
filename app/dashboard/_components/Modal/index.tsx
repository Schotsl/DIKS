import Input from "@/components/Input";
import styles from "./Modal.module.css";
import Button from "@/components/Button";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Modal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modal__content}>
        <div>
          <h2>Transaction</h2>
          <h1>Add new transaction</h1>
        </div>

        <div className={styles.modal__content__inputs}>
          <Input label="Item" placeholder="Item" />
          <Input label="Amount" placeholder="100" />
        </div>

        <Button>Add transaction</Button>
      </div>
    </div>
  );
}

import React from "react";

import styles from "./Input.module.css";
import Link from "next/link";

type InputProps = {
  type?: string;
  label: string;

  placeholder: string;
};

export default function Input({ label, placeholder, type }: InputProps) {
  return (
    <div className={styles.input}>
      <label className={styles.input__label}>{label}</label>
      <input
        className={styles.input__input}
        type={type}
        placeholder={placeholder}
      />

      {type === "password" && (
        <Link href="/forgot-password" className={styles.input__link}>
          Forgot password?
        </Link>
      )}
    </div>
  );
}

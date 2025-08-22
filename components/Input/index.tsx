import Link from "next/link";
import React, { InputHTMLAttributes } from "react";

import { Controller, Control, FieldValues, FieldPath } from "react-hook-form";

import styles from "./Input.module.css";

type InputProps<T extends FieldValues = FieldValues> = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "name"
> & {
  label: string;
  error?: string;
  name: FieldPath<T>;
  control: Control<T>;
};

export default function Input<T extends FieldValues = FieldValues>({
  type,
  error,
  label,
  className,
  name,
  control,
  ...rest
}: InputProps<T>) {
  const inputClassname = `${styles.input} ${className ?? ""}`;

  return (
    <div className={inputClassname}>
      <label className={styles.input__label}>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <>
            <input
              type={type}
              className={styles.input__input}
              {...rest}
              {...field}
            />
            {(error ?? fieldState.error?.message) && (
              <p className={styles.input__error}>
                {error ?? fieldState.error?.message}
              </p>
            )}
          </>
        )}
      />

      {type === "password" && (
        <Link href="/forgot-password" className={styles.input__link}>
          Forgot password?
        </Link>
      )}
    </div>
  );
}

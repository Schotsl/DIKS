import React, { ReactNode } from "react";

import styles from "./Button.module.css";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function Button({ children, className, onClick }: ButtonProps) {
  const buttonClassname = `${styles.button} ${className}`;

  return (
    <button className={buttonClassname} onClick={onClick}>
      {children}
    </button>
  );
}

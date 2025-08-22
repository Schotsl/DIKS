import Image from "next/image";

import imageBackground from "@/assets/images/background.png";

import styles from "./page.module.css";

import Input from "@/components/Input";
import Button from "@/components/Button";

export default function Root() {
  return (
    <main className={styles.root}>
      <nav className={styles.root__nav}>
        <div className={styles.root__nav__header}>
          <h2>Login</h2>

          <h1>Login with your account.</h1>
        </div>

        <div className={styles.root__nav__inputs}>
          <Input label="E-mail" placeholder="john@doe.com" />
          <Input label="Password" placeholder="********" type="password" />
        </div>

        <Button>Login</Button>
      </nav>

      <Image
        src={imageBackground}
        alt="A image showing Diks Autoverhuur branded cars"
        sizes="100vw"
        className={styles.root__image}
      />
    </main>
  );
}

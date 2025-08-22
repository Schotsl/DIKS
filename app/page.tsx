import Image from "next/image";

import imageBackground from "@/assets/images/background.png";

import styles from "./page.module.css";
import Button from "@/components/Button";
import Input from "@/components/Input";

export default function Home() {
  return (
    <main className={styles.main}>
      <nav className={styles.main__nav}>
        <div className={styles.main__nav__header}>
          <h1 className={styles.main__nav__header__title}>Login</h1>
          <p className={styles.main__nav__header__subtitle}>
            Log in with your Diks account.
          </p>
        </div>

        <div className={styles.main__nav__inputs}>
          <Input label="E-mail" placeholder="john@doe.com" />
          <Input label="Password" placeholder="********" type="password" />
        </div>

        <Button>Login</Button>
      </nav>

      <Image
        src={imageBackground}
        alt="Background"
        sizes="100vw"
        className={styles.main__image}
      />
    </main>
  );
}

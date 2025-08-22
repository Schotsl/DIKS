"use client";

import Image from "next/image";

import imageBackground from "@/assets/images/background.png";

import styles from "./page.module.css";

import Input from "@/components/Input";
import Button from "@/components/Button";

import { useForm } from "react-hook-form";
import { redirect } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, Login } from "@/schema/loginSchema";

export default function Root() {
  const { control, handleSubmit } = useForm<Login>({
    resolver: zodResolver(loginSchema),
  });

  const onLogin = (data: Login) => {
    // Just to demonstrate that the form is working
    console.log(data);

    // Normally I would use a mutation here to login the user in but duo to time constraints I'll just redirect to the dashboard
    redirect("/dashboard");
  };

  return (
    <main className={styles.root}>
      <form className={styles.root__nav} onSubmit={handleSubmit(onLogin)}>
        <div className={styles.root__nav__header}>
          <h2>Login</h2>

          <h1>Login with your account.</h1>
        </div>

        <div className={styles.root__nav__inputs}>
          <Input
            label="E-mail"
            name="email"
            control={control}
            placeholder="john@doe.com"
          />

          <Input
            label="Password"
            type="password"
            name="password"
            control={control}
            placeholder="********"
          />
        </div>

        <Button>Login</Button>
      </form>

      <Image
        src={imageBackground}
        alt="A image showing Diks Autoverhuur branded cars"
        sizes="100vw"
        className={styles.root__image}
      />
    </main>
  );
}

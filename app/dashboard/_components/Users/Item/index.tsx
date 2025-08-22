import Image from "next/image";
import styles from "./UsersItem.module.css";

type UsersItemProps = {
  name: string;
  joined: Date;
};

export default function UsersItem({ name, joined }: UsersItemProps) {
  return (
    <div className={styles.item}>
      <Image
        src={`https://avatar.iran.liara.run/username?username=${name}`}
        alt={name}
        width={40}
        height={40}
      />

      <div className={styles.item__info}>
        <h3>{name}</h3>
        <p>Joined {joined.toLocaleDateString()}</p>
      </div>
    </div>
  );
}

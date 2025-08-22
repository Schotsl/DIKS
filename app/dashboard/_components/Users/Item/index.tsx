import Image from "next/image";
import styles from "./UsersItem.module.css";

type UsersItemProps = {
  name: string;
  joined: Date;
};

export default function UsersItem({ name, joined }: UsersItemProps) {
  const joinedDate = new Date(joined);
  const joinedString = joinedDate.toLocaleDateString();

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
        <p>Joined {joinedString}</p>
      </div>
    </div>
  );
}

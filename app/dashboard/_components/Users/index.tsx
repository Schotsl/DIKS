import { User } from "@/types";

import styles from "./Users.module.css";

import UsersItem from "./Item";

type UsersProps = {
  users: User[];
};

export default function Users({ users }: UsersProps) {
  return (
    <div className={styles.users}>
      <h2>Team members</h2>

      <div className={styles.users__list}>
        {users.map((user) => (
          <UsersItem key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
}

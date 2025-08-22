import { readDatabase } from "@/database";
import { queryOptions } from "@tanstack/react-query";

export default function userData() {
  return queryOptions({
    queryKey: ["userData"],
    queryFn: () => {
      const database = readDatabase();
      return database.users;
    },
  });
}


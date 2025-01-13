"use client";

import { User } from "@/app/cabins/page";
import { useState } from "react";

export default function Counter({ users }: { users: User[] }) {
  const [count, setCount] = useState(0);

  console.log(users);

  return <button onClick={() => setCount((c) => c + 1)}>{count}</button>;
}

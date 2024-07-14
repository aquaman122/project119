"use client";

import { useAppSelector } from "@/store/hooks";
import LogInScreen from "@/screens/LogInScreen";

export default function Home() {
  const { username, uid } = useAppSelector((state) => state.authReducer.value);
  return (
    <section>
      <h1 className="text-2xl">UserName : {username}</h1>
      <h1 className="text-2xl">uid : {uid}</h1>
      <LogInScreen name={username} />
    </section>
  );
}

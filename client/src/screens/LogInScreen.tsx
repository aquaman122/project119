"use client";

import { logIn, logOut } from "@/store/slices/auth-slice";
import { AppDispatch } from "@/store/store";
import { useState } from "react";
import { useDispatch } from "react-redux";

type Props = {
  name: string;
}

export default function LogInScreen({ name }: Props) {
  const [username, setUserName] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();
  const style = {
    buttonStyle:
      "px-4 py-2 m-4 text-white bg-blue-400 rounded-[1.1rem] ",
    inputStyle: "m-4 border-2 border-blue-400 ",
  };

  const onClickLogIn = () => {
    dispatch(logIn(username));
  };

  const onClickLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className="flex">
      <input 
        className={style.inputStyle}
        type="text"
        onChange={(e) => setUserName(e.target.value)}
      />
      <button className={style.buttonStyle} onClick={onClickLogIn}>
        Log In
      </button>
      <button className={style.buttonStyle} onClick={onClickLogOut}>
        Log Out
      </button>
    </div>
  );
}

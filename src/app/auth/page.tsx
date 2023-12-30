"use client";
import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Input from "../components/Input/Input";
import Image from "next/image";
import shoppingImage from '../../../public/images/shopping.jpg'


type Props = {};

const page = (props: Props) => {
  const authCtx = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    authCtx?.login({ username, password });
  };

  return (
    <div className="bg-rose-400 flex justify-between gap-6 p-4 rounded-radius-large min-h-[400px]">
      <div className="w-[40%]">
        <div>
          <h2>Login</h2>
          <form>
            <Input
              label="Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="button" onClick={handleLogin}>
              Login
            </button>
          </form>
        </div>
      </div>
      <div className="w-[60%]">
        <div className="relative w-full h-full rounded-radius-main overflow-hidden">
          <Image
            src={shoppingImage}
            alt="login image"
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default page;

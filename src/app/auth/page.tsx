"use client";
import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Input from "../components/Input/Input";
import Image from "next/image";
import shoppingImage from "../../../public/images/shopping.jpg";
import Button from "../components/Button/Button";

type Props = {};

const page = (props: Props) => {
  const authCtx = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    authCtx?.login({ username, password });
  };

  return (
    <div className="bg-light flex justify-between items-center gap-6 p-4 rounded-radius-large mr-3 min-h-[350px]">
      <div className="w-[40%] h-full">
        <div className="flex flex-col gap-6">
          <h5 className="font-bold text-primary-main text-center">Login</h5>
          <form onSubmit={loginHandler} className="flex flex-col gap-6">
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

            <Button type="submit" variant="primary-main" >
              Login
            </Button>
          </form>
        </div>
      </div>
      <div className="w-[60%] h-full">
        <div className="relative w-full h-full min-h-[350px] rounded-radius-main overflow-hidden">
          <Image src={shoppingImage} alt="login image" fill />
        </div>
      </div>
    </div>
  );
};

export default page;

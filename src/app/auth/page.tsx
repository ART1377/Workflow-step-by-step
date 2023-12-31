"use client";
import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Input from "../components/Input/Input";
import Image from "next/image";
import shoppingImage from "../../../public/images/shopping.jpg";
import Button from "../components/Button/Button";
import { FaGoogle, FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa6";

type Props = {};

const page = (props: Props) => {
  const authCtx = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    authCtx?.login({ username, password });
  };

  return (
    <div className="h-screen max-h-[600px]  xl:max-h-[800px] 1800:max-h-[1000px] !ml-auto 1100:m-8">
      <div className="bg-light flex justify-between items-center gap-6 p-4 shadow-md rounded-radius-large ml-3 1100:ml-8 min-h-auto h-[80%]">
        <div className="w-[40%] h-full flex items-center justify-center relative">
          <div className="absolute top-0 left-0">
            <p className="capitalize text-primary-dark font-bold">
              hello again!
            </p>
          </div>
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

              <Button type="submit" variant="primary-main">
                Login
              </Button>
            </form>
            <div className="flex justify-center gap-4">
              <div className="bg-white shadow text-gray-main p-2 hover:text-primary-main rounded-radius-main cursor-pointer transform transition-all duration-300 hover:!scale-110">
                <FaGoogle />
              </div>
              <div className="bg-white shadow text-gray-main p-2 hover:text-primary-main rounded-radius-main cursor-pointer transform transition-all duration-300 hover:!scale-110">
                <FaFacebookF />
              </div>
              <div className="bg-white shadow text-gray-main p-2 hover:text-primary-main rounded-radius-main cursor-pointer transform transition-all duration-300 hover:!scale-110">
                <FaGithub />
              </div>
              <div className="bg-white shadow text-gray-main p-2 hover:text-primary-main rounded-radius-main cursor-pointer transform transition-all duration-300 hover:!scale-110">
                <FaLinkedinIn />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[60%] h-full">
          <div className="relative w-full h-full  rounded-radius-main overflow-hidden">
            <Image src={shoppingImage} alt="login image" fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

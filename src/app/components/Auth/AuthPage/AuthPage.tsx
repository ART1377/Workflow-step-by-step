"use client";
import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import AuthPageLoginForm from "./AuthPageLoginForm/AuthPageLoginForm";
import AuthPageSocialButtons from "./AuthPageSocialButtons/AuthPageSocialButtons";
import AuthPageLoginFormImage from "./AuthPageLoginFormImage/AuthPageLoginFormImage";

const AuthPage = () => {
  const authCtx = useContext(AuthContext);

  const handleLogin = ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    authCtx?.login({ username, password });
  };

  return (
    <div className="h-screen m-auto flex pb-20">
      <div className="bg-light flex justify-between items-center gap-6 p-4 shadow-md rounded-radius-large min-h-auto w-full h-full max-h-[450px] max-w-[900px] m-auto">
        <div className="w-[40%] h-full flex items-center justify-center relative">
          <div className="absolute top-0 left-0">
            <p className="capitalize text-primary-dark font-bold">
              hello again!
            </p>
          </div>
          <div className="flex flex-col gap-6 mt-2">
            <h5 className="font-bold text-primary-main text-center">Login</h5>
            {/* AuthPageLoginForm component */}
            <AuthPageLoginForm onLogin={handleLogin} />
            {/* AuthPageSocialButtons component */}
            <AuthPageSocialButtons />
          </div>
        </div>
        {/* AuthPageLoginFormImage component */}
        <AuthPageLoginFormImage />
      </div>
    </div>
  );
};

export default AuthPage;

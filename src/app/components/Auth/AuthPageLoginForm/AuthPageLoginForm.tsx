import Button from "@/app/components/Gloabal/Button/Button";
import Input from "@/app/components/Gloabal/Input/Input";
import React, { useState } from "react";
import toast from "react-hot-toast";

type Props = {
  onLogin: (data: { username: string; password: string }) => void;
};

const AuthPageLoginForm = ({ onLogin }: Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      toast.error("Fields must be filled!");
      return;
    } else {
      onLogin({ username, password });
    }
  };

  return (
    <form onSubmit={loginHandler} className="flex flex-col gap-4 mt-2">
      <div className="flex flex-col gap-6">
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
      </div>
      <Button type="submit" variant="primary-main" size="large">
        Login
      </Button>
    </form>
  );
};

export default AuthPageLoginForm;

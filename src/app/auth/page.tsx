"use client";
import React, { useState, useContext } from "react";
import style from "./auth.module.css";
import { AuthContext } from "../context/AuthContext";

type Props = {};

const page = (props: Props) => {
  const authCtx = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // Added for the signup page
  const [isFlipped, setIsFlipped] = useState(false);

  const handleLogin = () => {
    authCtx?.login({ username, password });
  };

  const handleSignup = () => {
    authCtx?.login({ name, username, password });
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={style["login-page"]}>
      <div className={`${style["flip-card"]} ${isFlipped && style["flipped"]}`}>
        <div className={style["flip-card-inner"]}>
          {/* Login Side */}
          <div className={style["flip-card-front"]}>
            <h2>Login</h2>
            <form>
              <label>
                Username:
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>
              <label>
                Password:
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <button type="button" onClick={handleLogin}>
                Login
              </button>
              <button type="button" onClick={handleFlip}>
                Sign Up
              </button>
            </form>
          </div>

          {/* Signup Side */}
          <div className={style["flip-card-back"]}>
            <h2>Sign Up</h2>
            <form>
              <label>
                Name:
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label>
                Username:
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>
              <label>
                Password:
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <button type="button" onClick={handleSignup}>
                Sign Up
              </button>
              <button type="button" onClick={handleFlip}>
                Back to Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

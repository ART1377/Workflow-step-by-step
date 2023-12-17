"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { Toaster } from "react-hot-toast";

type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  return (
    <Provider store={store}>
      {children}
      <Toaster position="top-center" reverseOrder={false} />
    </Provider>
  );
};

export default Providers;

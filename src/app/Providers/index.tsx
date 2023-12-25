"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "../context/AuthContext";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  return (
    <AuthProvider>
      <Provider store={store}>
        <Navbar />
        <Sidebar/>
        <main className="mt-8 mr-[200px]">{children}</main>
        <Toaster position="top-center" reverseOrder={false} />
      </Provider>
    </AuthProvider>
  );
};

export default Providers;

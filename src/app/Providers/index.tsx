"use client";
import React, { useContext, useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "../context/AuthContext";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  const pathName = usePathname();
  const isAuthPage = pathName === "/auth";
  

  return (
    <AuthProvider>
      <Provider store={store}>
        {localStorage.getItem("user") && (
          <>
            <Navbar />
            <Sidebar />
          </>
        )}
        <main className={`mt-6 mb-12 ml-3 ${isAuthPage ? "mr-3" : "mr-[212px]"}`}>
          {children}
        </main>
        <Toaster position="top-center" reverseOrder={false} />
      </Provider>
    </AuthProvider>
  );
};

export default Providers;

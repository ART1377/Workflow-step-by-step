"use client";
import React, { useContext, useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { Toaster } from "react-hot-toast";
import { AuthContext, AuthProvider } from "../context/AuthContext";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import { redirect, usePathname, useRouter } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  const authCtx = useContext(AuthContext);
  const user = authCtx?.user;
  const router = useRouter();
  const pathName = usePathname();


  useEffect(() => {
    if (!localStorage.getItem("user")) {
      router.push("/auth", { scroll: false });
    }
  }, [router,pathName]);

  return (
    <AuthProvider>
      <Provider store={store}>
        <Navbar />
        <Sidebar />
        <main className="mt-8 mb-12 mr-[212px]">{children}</main>
        <Toaster position="top-center" reverseOrder={false} />
      </Provider>
    </AuthProvider>
  );
};

export default Providers;

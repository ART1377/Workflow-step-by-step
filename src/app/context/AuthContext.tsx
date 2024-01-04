// AuthContext.tsx
import { usePathname, useRouter } from "next/navigation";
import React, { createContext, useState, useLayoutEffect } from "react";
import toast from "react-hot-toast";

interface User {
  username: string;
  password: string;
  // Add any properties
}

interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  const pathName = usePathname();

  useLayoutEffect(() => {
    // Retrieve user data from local storage
    const storedUser = localStorage.getItem("user");

    // Check if user data is available in local storage
    if (!storedUser) {
      // If not, redirect to the authentication page
      handleUnauthorizedUser();
    } else {
      // If user data is available, set the user in the state
      setUser({ username: JSON.parse(storedUser), password: "" });
    }
  }, [router, pathName]);


  const handleUnauthorizedUser = () => {
    router.push("/auth", { scroll: false });
  };

  const setUserData = (user: string) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem(
      "expireTime",
      (new Date().getTime() + 60 * 60 * 24).toString()
    );
  };

  const removeUserData = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("expireTime");
    // localStorage.clear();
  };

  const login = (userData: User) => {
    setUser(userData);
    setUserData(userData.username);
    router.push("/", { scroll: false });
    toast.success("Successfully Logged in!");
  };

  const logout = () => {
    setUser(null);
    removeUserData();
    router.push("/auth", { scroll: false });
    toast.success("Successfully Logged out!");
  };

  const value: AuthContextType = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

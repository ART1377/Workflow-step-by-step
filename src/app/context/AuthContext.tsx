// AuthContext.tsx
import { useRouter } from "next/navigation";
import React, { createContext, useState, ReactNode } from "react";

interface User {
  username: string;
  password: string;
  name?: string;
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
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();


  // Local Storage Set Item
  const setUserData = (user:string) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem(
      "expireTime",
      (new Date().getTime() + 60 * 60 * 24).toString()
      );
    };
    
    // Local Storage Remove Items
  const removeUserData = () => {
    localStorage.clear()
  };

  const login = (userData: User) => {
    // authentication API call
    setUser(userData);
    setUserData(userData.username)
    router.push("/", { scroll: false });
  };

  const logout = () => {
    // logout logic and clear user data
    setUser(null);
    removeUserData()
    router.push("/auth", { scroll: false });
  };

  const value: AuthContextType = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

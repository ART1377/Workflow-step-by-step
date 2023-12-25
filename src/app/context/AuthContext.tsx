// AuthContext.tsx
import React, { createContext, useState, ReactNode } from "react";

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

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User) => {
    // authentication API call
    setUser(userData);
  };

  const logout = () => {
    // logout logic and clear user data
    setUser(null);
  };

  const value: AuthContextType = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};



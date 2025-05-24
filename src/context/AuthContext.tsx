"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Role = "guest" | "user" | "admin";

interface AuthContextType {
  role: Role;
  isAuthenticated: boolean;
  login: (role: Role) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  role: "guest",
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [role, setRole] = useState<Role>("guest");

  const login = (newRole: Role) => setRole(newRole);
  const logout = () => setRole("guest");

  return (
    <AuthContext.Provider
      value={{ role, isAuthenticated: role !== "guest", login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

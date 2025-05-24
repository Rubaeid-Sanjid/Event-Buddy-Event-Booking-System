"use client";

import React, { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

interface ProtectedRouteProps {
  allowedRoles: string[];
  children: ReactNode;
}

const ProtectedRoute = ({ allowedRoles, children }: ProtectedRouteProps) => {
  const { role } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!allowedRoles.includes(role)) {
      router.replace("/SignIn");
    }
  }, [role, allowedRoles, router]);

  if (!allowedRoles.includes(role)) {
    return <div>Redirecting...</div>;
  }

  return <>{children}</>;
};

export default ProtectedRoute;

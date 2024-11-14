import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

const AuthGuard = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    const parsedUser = userData ? JSON.parse(userData) : null;

    if (parsedUser && parsedUser.email === "user1@gmail.com") {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      router.push("/auth/signin");
    }
  }, [router]);

  if (isAuthenticated === null) return null;
  
  return isAuthenticated ? <>{children}</> : null;
};

export default AuthGuard;

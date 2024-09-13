"use client"; // Add this line at the top of the file

import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import ECommerce from "@/components/Dashboard/E-commerce";
import SignIn from "./auth/signin/page";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import FormLayout from "./forms/form-layout/page";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "job portal",
//   description: "job portal it is",
// };

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(false);
  const [user, setUser] = useState<String | null>("");
  const router = useRouter();

  useEffect(() => {
    // Check localStorage for email value
    const userEmail = localStorage.getItem("email");
    setUser(userEmail)
    // Delay the redirection until after the first render
    const checkAuth = async () => {
      if (user === "shoaibzaki84@gmail.com") {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        router.push("http://localhost:3000/auth/signin");
      }
    };

    checkAuth();
  }, []);

  return (
    <>
      {isAuthenticated===true ? (
        <DefaultLayout>
          <FormLayout />
        </DefaultLayout>
      ) : (
        <SignIn />
      )}
    </>
  );
}

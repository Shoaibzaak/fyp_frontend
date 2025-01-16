"use client"; // Add this line at the top of the file

import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import ECommerce from "@/components/Dashboard/E-commerce";
import SignIn from "./auth/signin/page";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import FormLayout from "./forms/form-layout/page";
import Upload from "./upload/page";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "job portal",
//   description: "job portal it is",
// };

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(false);
  return (
    <>
        {/* <DefaultLayout> */}
          <FormLayout/>
        {/* </DefaultLayout> */}
    </>
  );
}

"use client";

import { appRoutes } from "@/paths.routes";
import { useAppSelector } from "@/store/appHooks";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export const ProtectedPages = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  if (!isAuthenticated) {
    redirect(appRoutes.home);
  }

  return <>{children}</>;
};

// import { getServerSession } from "next-auth";
// import { redirect } from "next/navigation";
// import { authOptions } from "@/lib/auth";
// import { appRoutes } from "@/paths.routes";
// import { ReactNode } from "react";

// export const ProtectedPages = async ({ children }: { children: ReactNode }) => {
//   const session = await getServerSession(authOptions);
//   if (!session) {
//     redirect(appRoutes.home);
//   }
//   return <>{children}</>;
// };

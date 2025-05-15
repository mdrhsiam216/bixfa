"use client";
import { AuthContext } from "@/contexts/auth.context.api";
import { CookieType } from "@/core/cookie";
// 1. import `HeroUIProvider` component
import { HeroUIProvider } from "@heroui/react";
import NextTopLoader from "nextjs-toploader";

export default function HeroUI({
  children,
  cookie,
}: {
  children: React.ReactNode;
  cookie: CookieType;
}) {
  return (
    <AuthContext.Provider value={{ isAuthenticated: false, appCookie: cookie }}>
      <NextTopLoader color="#29d" height={4} />
      <HeroUIProvider>{children}</HeroUIProvider>
    </AuthContext.Provider>
  );
}

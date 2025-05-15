import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "../styles/globals.css";
import { APP_NAME } from "@/core/env";
import { getCookie } from "@/core/cookie";
import { CookieType } from "@/core/cookie";
import HeroUI from "@/components/providers/hero-ui.provider";
import { Toaster } from "react-hot-toast";
import React from "react";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Inter_Tight({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home | " + APP_NAME,
  description: "Travelliyan is a platform for booking flights and hotels",
  icons: {
    icon: "/icons/favicon.png",
    shortcut: "/icons/favicon.png",
    apple: "/icons/favicon.png",
  },
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = "light";
  // get the cookie
  const cookie: CookieType = await getCookie();

  return (
    <html lang="en" className={theme} data-theme={theme}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:text-white-600 h-screen`}
      >
        <React.StrictMode>
          <Toaster
            position="bottom-left"
            toastOptions={{ className: "text-sm" }}
          />
          <HeroUI cookie={cookie} >{children}</HeroUI>
        </React.StrictMode>
      </body>
    </html>
  );
}

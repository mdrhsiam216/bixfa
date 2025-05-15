"use client";

import Footer from "./footer/footer.main";
import Header from "./header/header";

export default function WebLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header/>
      {children}
      <Footer />
    </>
  );
}

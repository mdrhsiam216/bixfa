"use client";

import Header from "@/components/layouts/header/header";
import Footer from "@/components/layouts/footer/footer.main";

export default function WebLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

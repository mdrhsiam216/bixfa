'use client'
import Hero from "@/components/home/hero";
import Services from "@/components/home/services";
import WebLayout from "@/components/layouts/web.layout";
import { Button } from "@heroui/react";
export default function Home() {
  return (
    <>
      <WebLayout>
        <Hero/>
        <Services/>
      </WebLayout>
    </>
  );
}

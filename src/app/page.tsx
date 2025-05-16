'use client'
import Explore from "@/components/home/explore";
import GraphicWebSection from "@/components/home/graphic-web-section";
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
        <GraphicWebSection/>
        <Explore/>
      </WebLayout>
    </>
  );
}

'use client'
import AwardsTimeline from "@/components/home/awards-timeline";
import Blog from "@/components/home/blog";
import Explore from "@/components/home/explore";
import GraphicWebSection from "@/components/home/graphic-web-section";
import Hero from "@/components/home/hero";
import ProjectsSecondSection from "@/components/home/projects-second-section";
import ProjectsShowcase from "@/components/home/ProjectsShowcase";
import Services from "@/components/home/services";
import Testimonials from "@/components/home/testimonials";
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
        <ProjectsShowcase/>
        <ProjectsSecondSection/>
        <AwardsTimeline/>
        <Testimonials/>
        <Blog/>
      </WebLayout>
    </>
  );
}

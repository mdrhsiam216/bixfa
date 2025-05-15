import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export default function Header() {
  return (
    <>
      <nav className="bg-[#060f15] text-white w-full px-7 flex justify-center items-center relative font-sans py-12 gap-2">
        {/* Left Section */}
        <div className="flex-1 flex flex-col items-start">
          <span className="text-base mb-1">Websites with our</span>
          <div className="flex items-center w-[95%] gap-0">
          <div className="h-[1px] bg-white my-2 w-full"></div>
          <ChevronLeft className="ml"/>
          </div>

          <div className="flex justify-between px-7 w-[92%]">
            {["Home", "Portfolio", "About Us"].map((item) => (
              <div
                key={item}
                className="text-base cursor-pointer flex items-center hover:text-[#f0a500] relative"
              >
                {item} <span className="text-xs ml-1"><ChevronDown/></span>
              </div>
            ))}
          </div>
        </div>

        {/* Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 mx-8">
          <img src="/icons/basic/logo.svg" alt="Logo" className="w-36" />
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col items-end">
          <a
            href="#"
            className="text-sm text-white underline-offset-1 hover:underline"
          >
            Download Our Sustainability Report
          </a>
          
          <div className="flex items-center w-[86%] gap-0">
          <div className="bg-amber-100">
          </div>
          <ChevronRight className="mx-0 px-0"/>

          <div className="h-[1px] bg-white my-2 mx-0 w-full"></div>
          </div>

          <div className="flex justify-between px-7 w-[82%]">
            {["Pages", "Blog", "Contact Us"].map((item) => (
              <div
                key={item}
                className="text-base cursor-pointer items-center flex hover:text-[#f0a500] relative"
              >
                {item} <span className="text-xs ml-1"><ChevronDown/></span>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}

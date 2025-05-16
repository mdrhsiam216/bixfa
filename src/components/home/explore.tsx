import React from "react";
import { ChevronRight, MoveUpRight } from "lucide-react";

export default function Explore() {
  return (
    <div className="h-[60%] w-full flex justify-center items-center relative">
      <img
        src="/dist/banners/cat-image.png"
        alt="Cat on car"
        className="object-cover w-full h-full"
      />

      {/* Centered circular text and chevron */}
      <div className="absolute flex items-center justify-center cursor-pointer">
        <div className="relative w-24 h-24 flex items-center justify-center">
          {/* Circular SVG text */}
          <svg
            className="absolute w-[140px] h-[140px]"
            viewBox="0 0 140 140"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <path
                id="textCircle"
                d="M 70, 70 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
                fill="none"
              />
            </defs>
            <text fill="white" fontSize="18" fontWeight="bold">
              <textPath href="#textCircle" startOffset="0">
                EXPLORE MORE - EXPLORE MORE -
              </textPath>
            </text>
          </svg>

          {/* Center chevron */}
            <div className="p-2 bg-transparent border-1 border-white rounded-full ">
          <div className="w-16 h-16 rounded-full bg-violet-600 flex items-center justify-center text-white">

            <MoveUpRight className="w-10 h-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectsSecondSection() {
  return (
    <section className="bg-[#0B0F1A] text-white px-8 pt-16 pb-32">
      <div className="max-w-6xl mx-auto">
        {/* Grid layout */}
        <div className="flex gap-6 justify-center items-center">
          {/* left upper card */}
          <div >
            <div>
              <img
                src="/dist/images/project-images/image2.png"
                alt="SEO Marketing"
                className="w-full object-cover rounded-md"
              />
              <div className="mt-4">
                <p className="text-sm text-gray-300">Graphic Design</p>
                <h3 className="text-lg font-bold border-b border-white inline-block mt-1">
                  SEO Marketing
                </h3>
              </div>
            </div>
          </div>

          {/* right big card */}
          <div className="">
            <img
              src="/dist/images/project-images/image1.png"
              alt="Crafting Personalities"
              className="w-full h-full object-cover rounded-md"
            />
            <div className="mt-4">
              <p className="text-sm text-gray-300">App Development</p>
              <h3 className="text-lg font-bold border-b border-white inline-block mt-1">
                Crafting Personalities
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

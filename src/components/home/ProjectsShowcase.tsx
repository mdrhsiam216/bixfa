import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function ProjectsShowcase() {
  return (
    <section className="bg-[#0B0F1A] text-white px-8 pt-16 pb-32">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-10">
          <h2 className="text-7xl font-semibold leading-tigh font-serif">
            Projects to See<br />Through
          </h2>
          <div className="flex space-x-4 mt-2">
            <button className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center">
              <ChevronLeft className="text-white" />
            </button>
            <button className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center">
              <ChevronRight className="text-white" />
            </button>
          </div>
        </div>

        {/* Grid layout */}
        <div className="flex gap-6 justify-center">
          {/* Left big card */}
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

          {/* Right upper card */}
          <div className="space-y-6">
            <div>
              <div className="mb-4 mt-44">
                <p className="text-sm text-gray-300">Graphic Design</p>
                <h3 className="text-lg font-bold border-b border-white inline-block mt-1">
                  SEO Marketing
                </h3>
              </div>
              <img
                src="/dist/images/project-images/image2.png"
                alt="SEO Marketing"
                className="w-full object-cover rounded-md"
              />
            </div>

            {/* You can add a third card or leave this as future slot */}
            {/* <div>
              <img src="/..." alt="..." className="..." />
              <div className="...">
                ...
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

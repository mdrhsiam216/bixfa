import React from 'react'

const awards = [
  { year: '2023', title: 'Webdesign Award' },
  { year: '2024', title: 'Website of the Year' },
  { year: '2022', title: 'App Design of the Year' },
  { year: '2021', title: 'CSS Award' },
]

export default function AwardsTimeline() {
  return (
    <section className="bg-[#13192b] text-white">
      <div className="flex w-full mx-auto">
        {/* Left vertical timeline */}
        <div className="flex">
          {awards.map((award, index) => (
            <div
              key={index}
              className="flex flex-col justify-between items-center border-r border-white w-20 h-[500px]"
            >
              <span
                className="text-lg font-bold [writing-mode:vertical-rl] rotate-180 py-4"
              >
                {award.year}
              </span>
              <span
                className="mt-4 text-sm font-semibold [writing-mode:vertical-rl] rotate-180 py-4"
              >
                {award.title}
              </span>
            </div>
          ))}
        </div>

        {/* Middle Card */}
        <div className="flex-1 flex flex-col items-center justify-center px-10">
          <img
            src="/dist/images/project-images/image2.png"
            alt="Award"
            className="w-[250px] rounded-md mb-6"
          />
          <h3 className="text-2xl font-bold mb-2">Webdesign Award</h3>
          <p className="text-sm text-gray-300 text-center max-w-md">
            We are committed to excellence, collaboration, and integrity
            in everything we do, ensuring we not only meet but exceed the
            expectations of those we serve.
          </p>
        </div>

        {/* Right Line + Text */}
        <div className="border-l border-white w-12 h-[500px] flex flex-col justify-between items-center">
          <span className="text-lg font-bold [writing-mode:vertical-rl] rotate-180 py-4">
            2020
          </span>
          <span className="mt-4 text-sm font-semibold [writing-mode:vertical-rl] rotate-180 py-4">
            Webdesign Award
          </span>
        </div>
      </div>
    </section>
  )
}

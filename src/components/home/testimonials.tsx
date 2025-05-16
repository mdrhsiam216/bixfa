import { ChevronRight } from "lucide-react";
import React from "react";

const testimonials = [
  {
    name: "Daniyel Karlos",
    title: "Product Designer",
    image: "/dist/images/project-images/image2.png", // Replace with actual image URLs
    feedback:
      "Everyone is always happy to help, speedy and efficient, and friendly. I know I can always contact them if I need something",
  },
  {
    name: "Daniyel Karlos",
    title: "Product Designer",
    image: "/dist/images/project-images/image2.png",
    feedback:
      "Everyone is always happy to help, speedy and efficient, and friendly. I know I can always contact them if I need something",
  },
  {
    name: "Daniyel Karlos",
    title: "Product Designer",
    image: "/dist/images/project-images/image2.png",
    feedback:
      "Everyone is always happy to help, speedy and efficient, and friendly. I know I can always contact them if I need something",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#0a0f17] text-white py-16 px-40">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-8xl font-serif leading-snug">
          What our Clients <br /> & say
        </h2>
        <button className="flex items-center px-4 py-3 bg-white text-black text-sm font-semibold rounded-tl-4xl rounded-br-4xl shadow hover:scale-105 transition">
          <span className="italic font-semibold">All Reviews</span>
          <span className="ml-2 bg-[#802cf2] p-1 text-white">
            <ChevronRight size={16} />
          </span>
        </button>
      </div>

      <hr className="border-gray-700 mb-10" />

      <div className="grid gap-10 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="space-y-4">
            <div className="flex items-center gap-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-40 h-40 object-cover rounded-bl-[50%]"
              />
              <div>
                <h3 className="text-lg font-bold">{testimonial.name}</h3>
                <p className="text-sm text-gray-400">{testimonial.title}</p>
                <hr className="w-40 border-gray-600 mt-1" />
              </div>
            </div>
            <p className="text-sm max-w-72 text-gray-300 leading-relaxed">
              {testimonial.feedback}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

import React from "react";

const blogPosts = [
  {
    date: "March 30. 2025",
    title: "Unleashing Creative Vision in Portrait Photography",
    image: "/dist/images/project-images/image2.png",
  },
  {
    date: "March 30. 2025",
    title: "New technologies in development of products",
    image: "/dist/images/project-images/image2.png",
  },
  {
    date: "March 30. 2025",
    title: "Digital communications in people’s daily lives",
    image: "/dist/images/project-images/image2.png",
  },
];

export default function Blog() {
  return (
    <section className="bg-[#0a0f17] text-white h-screen px-56 py-12 flex flex-col items-center">
      <h2 className="text-5xl md:text-6xl font-serif mb-16 text-center">
        Our Latest Blog
      </h2>

      <div className="grid md:grid-cols-3 gap-10 w-full max-w-[1400px]">
        {blogPosts.map((post, index) => (
          <div key={index} className="flex flex-col items-start">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[350px] object-cover"
            />
            <p className="text-sm text-gray-400 mt-4">{post.date}</p>
            <p className="italic underline text-gray-500 text-lg leading-relaxed mt-2 max-w-[90%] cursor-pointer hover:text-gray-300 transition-all duration-100">
              <em>{post.title}</em>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

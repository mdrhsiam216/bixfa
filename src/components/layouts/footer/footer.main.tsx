import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#2d2d2d] text-white font-sans">
        {/* Email Section */}
        <div className="text-center py-10">
          <div className="w-1/2 h-px bg-white mx-auto opacity-50"></div>
          <p className="text-[80px] font-serif font-bold my-2">
            support@bixfa.com
          </p>
          <div className="w-1/2 h-px bg-white mx-auto opacity-50"></div>
        </div>

        {/* Main Footer */}
        <div className="flex justify-between flex-wrap max-w-[1200px] mx-auto px-5">
          {/* Left */}
          <div className="flex-1 m-2 text-left">
            <h2 className="text-2xl font-serif font-bold mb-2">Bixfa</h2>
            <p className="text-base font-serif text-[#bbb]">
              We can create solutions that elevate growth and sales.
            </p>
          </div>

          {/* Services */}
          <div className="flex-1 m-2 text-left">
            <h3 className="text-xl font-serif mb-2">Services</h3>
            <div className="w-1/2 h-px bg-white my-2 opacity-100"></div>
            <ul className="list-none pl-0">
              {["Email Marketing", "Campaigns", "Branding", "Offline"].map(
                (item) => (
                  <li
                    key={item}
                    className="text-base font-serif text-[#bbb] my-1 hover:text-[#f0a500]"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Links */}
          <div className="flex-1 m-2 text-left">
            <h3 className="text-xl font-serif mb-2">Links</h3>
            <div className="w-1/2 h-px bg-white my-2 opacity-100"></div>
            <ul className="list-none pl-0">
              {[
                "About",
                "Portfolios",
                "Services",
                "Testimonials",
                "Careers",
              ].map((item) => (
                <li
                  key={item}
                  className="text-base font-serif text-[#bbb] my-1 hover:text-[#f0a500]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div className="flex-1 m-2 text-left">
            <h3 className="text-xl font-serif mb-2">Address</h3>
            <div className="w-1/2 h-px bg-white my-2 opacity-100"></div>
            <ul className="list-none pl-0">
              <li className="text-base font-serif text-[#bbb] my-1 hover:text-[#f0a500]">
                785 15th Street, Office 478 Berlin
              </li>
              <li className="text-base font-serif text-[#bbb] my-1 hover:text-[#f0a500]">
                De 81566 (704) 555-0127
              </li>
              <li className="text-base font-serif text-[#bbb] my-1 hover:text-[#f0a500]">
                contact@bixfa.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center mt-5 mb-5">
          <div className="w-full h-px bg-white opacity-30 my-5"></div>
          <p className="text-[12px] text-[#bbb]">
            © Copyright 2025 Green-Touch. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

import { ArrowRight, ChevronRight } from "lucide-react";

export default function Services() {
  return (
    <section className="relative bg-[#060f15] text-white px-6 md:px-10 lg:px-20">
      {/* Heading & CTA */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <h2 className="text-4xl font-extrabold mb-2">
            Our Main Design Services
          </h2>
          <p className="text-4xl font-extrabold">For Customers</p>
        </div>
        <button className="flex items-center px-4 py-3 bg-white text-black text-sm font-semibold rounded-tl-4xl rounded-br-4xl shadow hover:scale-105 transition absolute top-[35%]">
          <span className="italic font-semibold">View All Service</span>
          <span className="ml-2 bg-[#802cf2] p-1 text-white">
            <ChevronRight size={16} />
          </span>
        </button>
      </div>

      {/* Services Grid */}
      <div className="w-full flex justify-end">
        <div className="w-[60%] flex flex-col gap-4">
          <div className="grid grc">

            <div className="flex gap-4">

            {/* Service 1 */}
            <div className="w-[400px] bg-[#0b1a23] border-[#802cf2] hover:border-[#802cf2] transition rounded-sm p-6 shadow-md border-b-1 ml-10">
              <img
                src="/icons/services-icons/branding.svg"
                alt="Branding Design"
                className="h-8 mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Branding Design</h3>
              <img
                src="/icons/services-icons/shape.svg"
                alt="decorative shape"
                className="my-1"
              />
              <p className="text-sm text-white/80">
                We are committed to excellence, collaboration, and integrity in
                everything we do.
              </p>
            </div>

            {/* Service 2 */}
            <div className="w-[400px] bg-[#0b1a23] border-[#802cf2] hover:border-[#802cf2] transition rounded-sm p-6 shadow-md border-b-1">
              <img
                src="/icons/services-icons/marketing.svg"
                alt="Digital Marketing"
                className="h-8 mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Digital Marketing</h3>
              <img
                src="/icons/services-icons/shape.svg"
                alt="decorative shape"
                className="my-1"
              />
              <p className="text-sm text-white/80">
                We are committed to excellence, collaboration, and integrity in
                everything we do.
              </p>
            </div>
            </div>

          </div>
          <div className="flex gap-4">
            {/* Service 3 */}
            <div className="w-[400px] bg-[#0b1a23] border-[#802cf2] hover:border-[#802cf2] transition rounded-sm p-6 shadow-md border-b-1">
              <img
                src="/icons/services-icons/geometric.svg"
                alt="Product Strategy"
                className="h-8 mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Product Strategy</h3>
              <img
                src="/icons/services-icons/shape.svg"
                alt="decorative shape"
                className="my-1"
              />
              <p className="text-sm text-white/80">
                We are committed to excellence, collaboration, and integrity in
                everything we do.
              </p>
            </div>

            {/* Service 4 */}
            <div className="w-[400px] bg-[#0b1a23] border-[#802cf2] hover:border-[#802cf2] transition rounded-sm p-6 shadow-md border-b-1 mr-20">
              <img
                src="/icons/services-icons/development.svg"
                alt="Web Development"
                className="h-8 mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Web Development</h3>
              <img
                src="/icons/services-icons/shape.svg"
                alt="decorative shape"
                className="my-1"
              />
              <p className="text-sm text-white/80">
                We are committed to excellence, collaboration, and integrity in
                everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

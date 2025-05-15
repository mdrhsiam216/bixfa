"use client";

import { Image } from "@heroui/react";
import FooterColumn from "@/components/layouts/footer/footer.column";
import Link from "next/link";
import {
  aboutLinks,
  productLinks,
  resourcesLinks,
  useCaseLinks,
} from "@/dto/common/footer.data";

export default function Footer() {
  return (
    <footer className="flex flex-col h-fit min-w-full bg-dark-700 pt-5  px-10 gap-16 md:pt-20 md:h-[446px] md:px-20">
      {/* top */}
      <div className="w-full grid gap-4 md:grid-cols-5 grid-cols-2 ml-7 md:h-56 md:gap-20">
        <Link href="/" className="w-full h-full grid grid-cols-1 gap-4">
          <Image
            src="/icons/logo_full_white.png"
            alt="Company Logo"
            className="w-40 cursor-pointer "
          />
        </Link>
        <div className="md:hidden"></div>

        <FooterColumn title="Product" links={productLinks} />
        <FooterColumn title="Use Cases" links={useCaseLinks} />
        <FooterColumn title="Resources" links={resourcesLinks} />
        <FooterColumn title="About" links={aboutLinks} />
      </div>

      {/* bottom */}
      <div className="w-full flex flex-col border-t border-white/20 py-4 mx-auto justify-center items-center md:h-[84px] md:flex-row md:justify-between md:py-8 gap-4 md:gap-0">
        <div className="text-sm text-white-600 flex gap-6 cursor-pointer ">
          <div className="hover:text-white transition-all duration-200">
            Terms & Conditions
          </div>
          <div className="hover:text-white transition-all duration-200">
            Cookies
          </div>
          <div className="hover:text-white transition-all duration-200">
            Privacy Policy
          </div>
        </div>

        {/* right side logos */}
        <div className="flex gap-6 sm:mt-6 md:mt-0">
          <Image
            src="/icons/footerIcons/fb.svg"
            alt="Social"
            className="cursor-pointer h-4 rounded-none"
          />
          <Image
            src="/icons/footerIcons/tw.svg"
            alt="Social"
            className="cursor-pointer h-4 rounded-none"
          />
          <Image
            src="/icons/footerIcons/internet.svg"
            alt="Social"
            className="cursor-pointer h-4 rounded-none"
          />
          <Image
            src="/icons/footerIcons/insta.svg"
            alt="Social"
            className="cursor-pointer h-4 rounded-none"
          />
          <Image
            src="/icons/footerIcons/linkedin.svg"
            alt="Social"
            className="cursor-pointer h-4 rounded-none"
          />
          <Image
            src="/icons/footerIcons/yt.svg"
            alt="Social"
            className="cursor-pointer h-4 rounded-none"
          />
        </div>
      </div>
    </footer>
  );
}

"use client";
import FooterLink from "@/components/layouts/footer/footer.link";
import { FooterColumnProps } from "@/dto/types/layout.types";

export default function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className="w-fit h-full grid grid-cols-1 md:gap-2 gap-1">
      <div className="text-xs font-semibold text-white-600">{title}</div>
      {links.map((link, index) => (
        <FooterLink key={index} link={link} />
      ))}
    </div>
  );
}

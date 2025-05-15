"use client";

import Link from "next/link";
import { FooterLinkItem } from "@/dto/types/layout.types";
import { Chip } from "@heroui/react";

export default function FooterLink({ link }: { link: FooterLinkItem }) {
  return (
    <div className="flex items-center gap-2">
      <Link
        href={link.href}
        className="text-sm font-medium text-white-400 hover:text-primary cursor-pointer transition-colors duration-200 w-fit"
      >
        {link.name}
      </Link>
      {link.special && (
        <Chip
          size="sm"
          className="text-tn font-semibold text-primary bg-pink-100 rounded-3xl py-0"
        >
          Special
        </Chip>
      )}
    </div>
  );
}

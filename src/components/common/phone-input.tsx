"use client";

import { useState, useRef } from "react";
import { Input } from "@heroui/react";
import { ChevronDownIcon } from "lucide-react";
import { countryPhoneCodes } from "@/dto/common/country.phone.code";

export default function PhoneInput({classNames, onChange}: {classNames?: any, onChange?: (value: string) => void}) {
  const [selected, setSelected] = useState(countryPhoneCodes[0]);
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  return (
    <Input
      type="tel"
      variant="bordered"
      className="h-12"
      placeholder="1xx xxxxxx"
      classNames={classNames}
      onChange={(e) => onChange?.(e.target.value)}
      startContent={
        <div className="relative flex items-center gap-1">
          <button
            type="button"
            className="bg-transparent outline-none pr-1 text-lg flex items-center"
            onClick={() => setOpen(o => !o)}
            ref={ref}
          >
            {selected.emoji}
            <span className="ml-1">
                <ChevronDownIcon size={16}/>
            </span>
          </button>
          {open && (
            <div className="absolute left-0 top-full bg-white border rounded shadow z-10 w-[200px] max-h-[250px] overflow-y-auto">
              {countryPhoneCodes.map((c, index) => (
                <div
                  key={c.code + '-' + c.country + '-' + index}
                  className="px-2 py-1 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                  onClick={() => {
                    setSelected(c);
                    setOpen(false);
                  }}
                >
                  <span className="text-lg">{c.emoji}</span>
                  <span>{c.country}</span>
                </div>
              ))}
            </div>
          )}
          <span className="text-gray-500 font-medium">{selected.code}</span>
        </div>
      }
    />
  );
}
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import { useCallback, useEffect, useState, ReactNode } from "react";
import { Button } from "@heroui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface EmblaSliderProps {
  children: ReactNode[];
  options?: EmblaOptionsType;
  className?: string;
  showDots?: boolean;
  showArrows?: boolean;
  slideClassName?: string;
  smItem?: number;
  mdItem?: number;
  lgItem?: number;
  slideMarginClass?: string;
  slidesToScroll?: number;
}

export default function EmblaSlider({
  children,
  options = {
    align: "center",
    loop: true,
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  },
  className = "",
  showDots = true,
  showArrows = true,
  slideClassName,
  smItem = 1,
  mdItem = 2,
  lgItem = 4,
  slideMarginClass,
  slidesToScroll,
}: EmblaSliderProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  // Center single item: use keepSnaps if only one child
  const emblaOptions = {
    ...options,
    containScroll: children.length === 1 ? "keepSnaps" : options.containScroll,
  };
  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const getResponsiveFlex = () => {
    const margin = slideMarginClass ?? "mr-[5px] md:mr-[10px]";
    return `min-w-0 flex-[0_0_${100 / smItem}%] ${margin} md:flex-[0_0_calc(${100 / mdItem}% - 20px)] lg:flex-[0_0_calc(${100 / lgItem}% - 20px)]`;
  };

  return (
    <div className={`relative ${className}`}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex embla_container">
          {children.map((child, idx) => (
            <div
              key={idx}
              className={slideClassName ?? getResponsiveFlex()}
            >
              {child}
            </div>
          ))}
        </div>
      </div>
      {showArrows && (
        <>
          <Button
            variant="flat"
            className="absolute -left-2 top-[45%] -translate-y-[50%] bg-white rounded-full shadow-lg z-10"
            isIconOnly
            onPress={scrollPrev}
          >
            <ChevronLeft className="text-primary" />
          </Button>
          <Button
            variant="flat"
            className="absolute -right-2 top-[45%] -translate-y-[50%] bg-white rounded-full shadow-lg z-10"
            isIconOnly
            onPress={scrollNext}
          >
            <ChevronRight className="text-primary" />
          </Button>
        </>
      )}
      {showDots && (
        <div className="flex justify-center items-center gap-2 mt-4 min-h-[8px]">
          {scrollSnaps.map((_, index) => {
            const isSelected = index === selectedIndex;
            const isAdjacent = Math.abs(index - selectedIndex) === 1;
            return (
              <button
                key={index}
                className={`rounded-full transition-all duration-300 ${
                  isSelected
                    ? "w-[8px] h-[8px] bg-primary"
                    : isAdjacent
                    ? "w-[6px] h-[6px] bg-gray-300"
                    : "w-[4px] h-[4px] bg-gray-300"
                }`}
                onClick={() => scrollTo(index)}
              />
            );
          })}
        </div>
      )}
    </div>
  );
} 
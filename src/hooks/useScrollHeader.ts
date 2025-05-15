import { UseScrollHeaderProps } from '@/dto/types/layout.types';
import { useEffect, useState } from 'react';

export const useScrollHeader = ({ 
  isHomePage = false, 
  scrollThreshold = 100 
}: UseScrollHeaderProps = {}) => {
  const [isScrolled, setIsScrolled] = useState(!isHomePage);

  useEffect(() => {
    // If not home page, always show white background
    if (!isHomePage) {
      setIsScrolled(true);
      return;
    }

    const initialScrollCheck = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > scrollThreshold);
    };

    // Run initial check
    initialScrollCheck();

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage, scrollThreshold]);

  return isScrolled;
}; 
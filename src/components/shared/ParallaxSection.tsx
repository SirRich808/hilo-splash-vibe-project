
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface ParallaxSectionProps {
  bgImage: string;
  height?: string;
  children: React.ReactNode;
  className?: string;
  overlayOpacity?: number;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  bgImage,
  height = 'h-[60vh]',
  children,
  className,
  overlayOpacity = 0.5,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      
      const scrollPosition = window.scrollY;
      const sectionPosition = section.offsetTop;
      const offset = scrollPosition - sectionPosition;
      
      // Only apply parallax effect when section is in viewport
      if (offset > -window.innerHeight && offset < section.offsetHeight) {
        const yPos = -offset * 0.2; // Adjust the 0.2 value to control parallax intensity
        section.style.backgroundPositionY = `${yPos}px`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={sectionRef}
      className={cn(
        height,
        'relative flex items-center justify-center bg-cover bg-center',
        className
      )}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div 
        className="absolute inset-0 bg-black z-10"
        style={{ opacity: overlayOpacity }}
      />
      <div className="container mx-auto px-4 lg:px-8 relative z-20">
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;

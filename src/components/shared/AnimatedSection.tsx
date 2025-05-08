
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'fade-in-left' | 'fade-in-right' | 'slide-up' | 'zoom-in';
  delay?: number;
  threshold?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  animation = 'fade-in',
  delay = 0,
  threshold = 0.1,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    
    if (!section) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(section);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -100px 0px', // Trigger slightly before element comes into view
      }
    );
    
    observer.observe(section);
    
    return () => {
      observer.unobserve(section);
    };
  }, [threshold]);

  return (
    <div
      ref={sectionRef}
      className={cn(
        'opacity-0',
        isVisible && `animate-${animation}`,
        className
      )}
      style={{ animationDelay: isVisible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;

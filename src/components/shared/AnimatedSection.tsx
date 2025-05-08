
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'fade-in-left' | 'fade-in-right' | 'slide-up' | 'zoom-in';
  delay?: number;
  threshold?: number;
  forceVisible?: boolean;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  animation = 'fade-in',
  delay = 0,
  threshold = 0.1,
  forceVisible = false,
}) => {
  const [isVisible, setIsVisible] = useState(forceVisible);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Force visibility after a timeout as a fallback
    const timeoutId = setTimeout(() => {
      if (!isVisible) {
        console.log('AnimatedSection: Forcing visibility after timeout');
        setIsVisible(true);
      }
    }, 1000); // 1 second fallback
    
    const section = sectionRef.current;
    
    if (!section) {
      return () => clearTimeout(timeoutId);
    }
    
    if (forceVisible) {
      setIsVisible(true);
      return () => clearTimeout(timeoutId);
    }
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log('AnimatedSection: Element intersecting, making visible');
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
      clearTimeout(timeoutId);
      observer.unobserve(section);
    };
  }, [threshold, forceVisible, isVisible]);

  // Ensure animation class exactly matches what's in Tailwind config
  const animationClass = isVisible ? `animate-${animation}` : '';

  return (
    <div
      ref={sectionRef}
      className={cn(
        'opacity-0',
        isVisible && animationClass,
        isVisible && 'opacity-100 transition-opacity',
        className
      )}
      style={{ animationDelay: isVisible ? `${delay}ms` : '0ms' }}
      data-animated={isVisible ? 'true' : 'false'}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;

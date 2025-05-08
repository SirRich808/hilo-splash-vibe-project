
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
    // Force visibility immediately if forceVisible is true
    if (forceVisible) {
      setIsVisible(true);
      return;
    }
    
    // Force visibility after a timeout as a fallback (reduced from 1000ms to 300ms)
    const timeoutId = setTimeout(() => {
      if (!isVisible) {
        console.log('AnimatedSection: Forcing visibility after timeout');
        setIsVisible(true);
      }
    }, 300); // Shorter timeout for better UX
    
    const section = sectionRef.current;
    
    if (!section) {
      return () => clearTimeout(timeoutId);
    }
    
    try {
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
          rootMargin: '0px 0px -50px 0px', // Adjusted to trigger earlier
        }
      );
      
      observer.observe(section);
      
      return () => {
        clearTimeout(timeoutId);
        observer.unobserve(section);
      };
    } catch (error) {
      console.error('AnimatedSection: Error with IntersectionObserver:', error);
      // If IntersectionObserver fails, make content visible
      setIsVisible(true);
      return () => clearTimeout(timeoutId);
    }
  }, [threshold, forceVisible, isVisible]);

  // Map animation name to the exact class name from Tailwind config
  const getAnimationClass = () => {
    if (!isVisible) return '';
    
    // These must match exactly what's in the tailwind.config.ts file
    switch (animation) {
      case 'fade-in': return 'animate-fade-in';
      case 'fade-in-left': return 'animate-fade-in-left';
      case 'fade-in-right': return 'animate-fade-in-right';
      case 'slide-up': return 'animate-slide-up';
      case 'zoom-in': return 'animate-zoom-in';
      default: return 'animate-fade-in';
    }
  };

  return (
    <div
      ref={sectionRef}
      className={cn(
        'opacity-0',
        isVisible && getAnimationClass(),
        isVisible && 'opacity-100',
        className
      )}
      style={{ 
        animationDelay: isVisible && delay > 0 ? `${delay}ms` : '0ms',
        position: 'relative', // Ensure proper stacking context
        zIndex: 1, // Base z-index for proper layering
      }}
      data-animated={isVisible ? 'true' : 'false'}
      data-animation-type={animation}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;

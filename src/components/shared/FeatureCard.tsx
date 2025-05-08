
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  image?: string;
  className?: string;
  delay?: number;
  ctaText?: string;
  ctaLink?: string;
  children?: React.ReactNode;
  hoverEffect?: 'lift' | 'scale' | 'glow' | 'none';
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  image,
  className,
  delay = 0,
  ctaText,
  ctaLink,
  children,
  hoverEffect = 'lift'
}) => {
  const getHoverClass = () => {
    switch (hoverEffect) {
      case 'lift':
        return 'hover-lift';
      case 'scale':
        return 'transform transition-transform duration-300 hover:scale-105';
      case 'glow':
        return 'transition-all duration-300 hover:shadow-lg hover:shadow-coral/20';
      case 'none':
        return '';
      default:
        return 'hover-lift';
    }
  };

  return (
    <div
      className={cn(
        'bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300',
        getHoverClass(),
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center mb-3">
          {Icon && <Icon className="h-6 w-6 text-coral mr-2" />}
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        {children}
        
        {ctaText && ctaLink && (
          <div className="mt-4">
            <Button 
              variant="ghost" 
              className="p-0 h-auto hover:bg-transparent text-coral hover:text-coral-dark flex items-center gap-1 group"
              asChild
            >
              <a href={ctaLink}>
                {ctaText}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeatureCard;

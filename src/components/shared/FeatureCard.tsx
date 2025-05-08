
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  image?: string;
  className?: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  image,
  className,
  delay = 0,
}) => {
  return (
    <div
      className={cn(
        'bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover-lift',
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {image && (
        <div className="h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      )}
      <div className="p-6">
        {Icon && <Icon className="h-8 w-8 text-coral mb-4" />}
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;


import React from 'react';
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  value: number;
  max: number;
  label?: string;
  showValue?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: 'default' | 'accent';
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max,
  label,
  showValue = false,
  className,
  size = 'md',
  color = 'default'
}) => {
  const percentage = Math.round((value / max) * 100);
  
  const sizeClasses = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3'
  };
  
  const colorClasses = {
    default: 'bg-course-green',
    accent: 'bg-accent'
  };
  
  return (
    <div className={cn('w-full', className)}>
      {(label || showValue) && (
        <div className="flex justify-between items-center mb-2">
          {label && <span className="text-sm font-medium text-muted-foreground">{label}</span>}
          {showValue && <span className="text-sm font-medium text-foreground">{percentage}%</span>}
        </div>
      )}
      <div className={cn('w-full bg-secondary rounded-full overflow-hidden', sizeClasses[size])}>
        <div 
          className={cn('rounded-full transition-all ease-in-out duration-500', colorClasses[color])} 
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;

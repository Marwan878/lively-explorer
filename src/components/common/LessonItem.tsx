
import React from 'react';
import { Lesson } from '@/lib/data';
import { cn } from '@/lib/utils';

interface LessonItemProps {
  lesson: Lesson;
  onClick?: () => void;
  className?: string;
}

const LessonItem: React.FC<LessonItemProps> = ({ lesson, onClick, className }) => {
  const { title, duration, isCompleted, type } = lesson;
  
  // Icons for different lesson types
  const getTypeIcon = () => {
    switch(type) {
      case 'video':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <polygon points="5 3 19 12 5 21 5 3"/>
          </svg>
        );
      case 'quiz':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <circle cx="12" cy="12" r="10"/>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
            <line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
        );
      case 'reading':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
          </svg>
        );
      case 'code':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <polyline points="16 18 22 12 16 6"/>
            <polyline points="8 6 2 12 8 18"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div 
      className={cn(
        'flex items-center justify-between p-3 rounded-lg border transition-all duration-200 ease-in-out cursor-pointer',
        isCompleted ? 'bg-white' : 'bg-white/70',
        isCompleted ? 'border-course-green/20' : 'border-border',
        'hover:border-course-green/40 hover:shadow-subtle',
        className
      )}
      onClick={onClick}
    >
      <div className="flex items-center gap-3">
        <div className={cn(
          'flex items-center justify-center w-6 h-6 rounded-full border flex-shrink-0',
          isCompleted ? 'bg-course-green border-course-green text-white' : 'border-muted-foreground/30 text-muted-foreground'
        )}>
          {isCompleted ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          ) : getTypeIcon()}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-medium text-foreground truncate">{title}</h4>
        </div>
      </div>
      
      {duration && (
        <div className={cn(
          "text-xs font-medium px-2 py-1 rounded-full",
          isCompleted ? "bg-course-green/10 text-course-green" : "bg-muted text-muted-foreground"
        )}>
          {duration}
        </div>
      )}
    </div>
  );
};

export default LessonItem;

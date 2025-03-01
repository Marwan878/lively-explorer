
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface VideoPreviewProps {
  className?: string;
}

const VideoPreview: React.FC<VideoPreviewProps> = ({ className }) => {
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <div 
      className={cn(
        "relative aspect-video overflow-hidden rounded-xl shadow-elevation transition-all duration-300",
        isHovering ? "scale-[1.01]" : "scale-100",
        className
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <img 
        src="https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?q=80&w=2940&auto=format&fit=crop"
        alt="Course preview" 
        className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
        style={{ transform: isHovering ? 'scale(1.03)' : 'scale(1)' }}
      />
      
      <div className="absolute inset-0 bg-black/20 backdrop-blur-xs" />
      
      <button 
        className={cn(
          "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
          "w-12 h-12 md:w-16 md:h-16 bg-white/90 rounded-full flex items-center justify-center",
          "shadow-elevation transition-all duration-300",
          isHovering ? "scale-110" : "scale-100"
        )}
        aria-label="Play video"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="text-course-blue ml-1"
        >
          <polygon points="5 3 19 12 5 21 5 3"/>
        </svg>
      </button>
      
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-2 md:p-4 text-white">
        <div className="text-xs md:text-sm font-medium">12:45</div>
        <div className="flex items-center space-x-2">
          <button 
            className="p-1.5 md:p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
            aria-label="Toggle caption"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="14" 
              height="14" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <rect x="2" y="7" width="20" height="15" rx="2" ry="2"/>
              <polyline points="17 2 12 7 7 2"/>
            </svg>
          </button>
          <button 
            className="p-1.5 md:p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
            aria-label="Toggle fullscreen"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="14" 
              height="14" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <polyline points="15 3 21 3 21 9"/>
              <polyline points="9 21 3 21 3 15"/>
              <line x1="21" y1="3" x2="14" y2="10"/>
              <line x1="3" y1="21" x2="10" y2="14"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPreview;

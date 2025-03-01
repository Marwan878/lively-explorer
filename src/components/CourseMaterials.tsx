
import React from 'react';
import { cn } from '@/lib/utils';

interface StatProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}

interface CourseMaterialsProps {
  duration: string;
  lessons: number;
  enrolled: string | number;
  language: string;
  className?: string;
}

const Stat: React.FC<StatProps> = ({ icon, label, value }) => (
  <div className="flex flex-col items-center text-center">
    <div className="mb-2 text-muted-foreground">
      {icon}
    </div>
    <div className="font-medium">{value}</div>
    <div className="text-xs text-muted-foreground mt-1">{label}</div>
  </div>
);

const CourseMaterials: React.FC<CourseMaterialsProps> = ({ 
  duration, 
  lessons, 
  enrolled, 
  language,
  className 
}) => {
  return (
    <div className={cn("bg-white rounded-xl border p-6 shadow-subtle", className)}>
      <h3 className="heading-sm mb-6">Course Materials</h3>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <Stat 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
          } 
          label="Duration" 
          value={duration}
        />
        
        <Stat 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
          } 
          label="Lessons" 
          value={lessons}
        />
        
        <Stat 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          } 
          label="Enrolled" 
          value={enrolled}
        />
        
        <Stat 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          } 
          label="Language" 
          value={language}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
        <div className="border border-border rounded-lg p-4 bg-muted/30 transition-all hover:border-course-green/20 hover:bg-muted/50">
          <div className="flex items-center mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-course-green">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
            <h4 className="font-medium text-sm">Resource Pack</h4>
          </div>
          <p className="text-xs text-muted-foreground mb-2">All the materials you need to complete the course</p>
          <button className="text-xs text-course-blue font-medium flex items-center">
            Download
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
          </button>
        </div>
        
        <div className="border border-border rounded-lg p-4 bg-muted/30 transition-all hover:border-course-green/20 hover:bg-muted/50">
          <div className="flex items-center mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-course-green">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <line x1="9" y1="3" x2="9" y2="21"/>
            </svg>
            <h4 className="font-medium text-sm">Certificate</h4>
          </div>
          <p className="text-xs text-muted-foreground mb-2">Get certified after completing the course</p>
          <button className="text-xs text-muted-foreground flex items-center">
            Available after completion
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseMaterials;

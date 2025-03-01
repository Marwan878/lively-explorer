
import React, { useState } from 'react';
import { Topic, Lesson } from '@/lib/data';
import ProgressBar from './common/ProgressBar';
import LessonItem from './common/LessonItem';
import { cn } from '@/lib/utils';

interface CourseProgressProps {
  topics: Topic[];
  progress: number;
  className?: string;
}

const CourseProgress: React.FC<CourseProgressProps> = ({ topics, progress, className }) => {
  const [expandedTopics, setExpandedTopics] = useState<number[]>(
    topics.length > 0 ? [0] : []
  );

  const toggleTopic = (index: number) => {
    setExpandedTopics(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };

  return (
    <div className={cn("bg-white rounded-xl border p-4 md:p-6 shadow-subtle", className)}>
      <div className="mb-6">
        <h3 className="heading-sm mb-2">Topics for This Course</h3>
        <ProgressBar value={progress} max={100} showValue size="sm" />
      </div>
      
      <div className="space-y-6">
        {topics.map((topic, index) => (
          <div key={index} className="border-b border-border last:border-0 pb-4 last:pb-0">
            <div 
              className="mb-2 cursor-pointer group" 
              onClick={() => toggleTopic(index)}
            >
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-semibold text-base md:text-lg group-hover:text-course-green transition-colors">
                  {topic.title}
                </h4>
                <div className={`transition-transform duration-200 ${expandedTopics.includes(index) ? 'rotate-0' : '-rotate-90'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </div>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground">{topic.description}</p>
            </div>
            
            {expandedTopics.includes(index) && (
              <div className="space-y-2 mt-3">
                {topic.lessons.map((lesson, lessonIndex) => (
                  <LessonItem key={lessonIndex} lesson={lesson} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseProgress;

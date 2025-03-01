
import React from 'react';
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
  return (
    <div className={cn("bg-white rounded-xl border p-6 shadow-subtle", className)}>
      <div className="mb-6">
        <h3 className="heading-sm mb-2">Topics for This Course</h3>
        <ProgressBar value={progress} max={100} showValue size="sm" />
      </div>
      
      <div className="space-y-8">
        {topics.map((topic, index) => (
          <div key={index}>
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-lg">{topic.title}</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{topic.description}</p>
            </div>
            
            <div className="space-y-2">
              {topic.lessons.map((lesson, lessonIndex) => (
                <LessonItem key={lessonIndex} lesson={lesson} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseProgress;

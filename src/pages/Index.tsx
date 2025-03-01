
import React from 'react';
import Layout from '@/components/Layout';
import CourseHeader from '@/components/CourseHeader';
import VideoPreview from '@/components/VideoPreview';
import CourseProgress from '@/components/CourseProgress';
import CourseMaterials from '@/components/CourseMaterials';
import CourseComments from '@/components/CourseComments';
import { courseData } from '@/lib/data';

const Index = () => {
  return (
    <Layout>
      <CourseHeader title={courseData.title} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-8">
          <VideoPreview />
          
          <CourseMaterials 
            duration={courseData.stats.duration}
            lessons={courseData.stats.lessons}
            enrolled={courseData.stats.enrolled}
            language={courseData.stats.language}
          />
          
          <CourseComments comments={courseData.comments} />
        </div>
        
        <div>
          <CourseProgress topics={courseData.topics} progress={courseData.progress} />
        </div>
      </div>
    </Layout>
  );
};

export default Index;

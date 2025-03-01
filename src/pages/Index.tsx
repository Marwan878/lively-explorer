
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
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 space-y-6">
          <VideoPreview />
          
          <CourseMaterials 
            duration={courseData.stats.duration}
            lessons={courseData.stats.lessons}
            enrolled={courseData.stats.enrolled}
            language={courseData.stats.language}
          />
          
          <CourseComments comments={courseData.comments} />
        </div>
        
        <div className="lg:col-span-5 lg:sticky lg:top-6 lg:self-start">
          <CourseProgress topics={courseData.topics} progress={courseData.progress} />
        </div>
      </div>
    </Layout>
  );
};

export default Index;

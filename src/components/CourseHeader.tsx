
import React from 'react';

interface CourseHeaderProps {
  title: string;
}

const CourseHeader: React.FC<CourseHeaderProps> = ({ title }) => {
  return (
    <div className="mb-8">
      <h1 className="heading-xl text-balance mb-4">{title}</h1>
    </div>
  );
};

export default CourseHeader;

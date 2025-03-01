
import React, { useState } from 'react';
import { Comment } from '@/lib/data';
import Avatar from './common/Avatar';
import { cn } from '@/lib/utils';

interface CourseCommentsProps {
  comments: Comment[];
  className?: string;
}

const CourseComments: React.FC<CourseCommentsProps> = ({ comments, className }) => {
  const [newComment, setNewComment] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      // In a real app, you would submit this to an API
      console.log('Submitting comment:', newComment);
      setNewComment('');
    }
  };
  
  return (
    <div className={cn("bg-white rounded-xl border p-4 md:p-6 shadow-subtle", className)}>
      <h3 className="heading-sm mb-4 md:mb-6">Comments</h3>
      
      <div className="space-y-4 md:space-y-6 mb-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex space-x-3 md:space-x-4">
            <Avatar src={comment.userAvatar} alt={comment.userName} size="sm" className="mt-0.5" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1 flex-wrap gap-1">
                <h4 className="font-medium text-sm">{comment.userName}</h4>
                <span className="text-xs text-muted-foreground">{comment.date}</span>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground break-words">{comment.content}</p>
            </div>
          </div>
        ))}
      </div>
      
      <form onSubmit={handleSubmit} className="mt-4 md:mt-6">
        <div className="flex flex-col space-y-2">
          <textarea
            placeholder="Write a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full min-h-[80px] md:min-h-[100px] p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-course-green/30 focus:border-course-green/50 transition-all text-sm"
          />
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={!newComment.trim()}
              className={cn(
                "px-4 py-2 rounded-lg font-medium text-xs md:text-sm",
                newComment.trim() 
                  ? "bg-course-green text-white hover:bg-course-green/90 transition-colors" 
                  : "bg-muted text-muted-foreground cursor-not-allowed"
              )}
            >
              Submit Review
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CourseComments;

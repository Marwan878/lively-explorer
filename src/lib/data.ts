
// Sample course data
export interface Lesson {
  id: string;
  title: string;
  duration: string;
  isCompleted: boolean;
  type: 'video' | 'quiz' | 'reading' | 'code';
}

export interface Topic {
  title: string;
  lessons: Lesson[];
  weekNumber: number;
  description: string;
}

export interface Comment {
  id: string;
  userName: string;
  userAvatar: string;
  date: string;
  content: string;
}

export interface CourseStats {
  duration: string;
  lessons: number;
  enrolled: number;
  language: string;
}

export const courseData = {
  id: "seo-fundamentals",
  title: "Starting SEO as your Home",
  description: "Advanced entry-level techniques for serious beginners. Checklists & Plans.",
  topics: [
    {
      title: "Week 1-4",
      weekNumber: 1,
      description: "Advanced entry-level techniques for serious beginners. Checklists & Plans.",
      lessons: [
        {
          id: "intro",
          title: "Introduction",
          duration: "",
          isCompleted: false,
          type: "video"
        },
        {
          id: "overview",
          title: "Course Overview",
          duration: "",
          isCompleted: false,
          type: "video"
        },
        {
          id: "syllabus",
          title: "Course Syllabus",
          duration: "10 minutes",
          isCompleted: true,
          type: "reading"
        },
        {
          id: "materials",
          title: "Course Materials / Reference Links",
          duration: "",
          isCompleted: false,
          type: "reading"
        },
        {
          id: "installation",
          title: "Code Editor Installation (Optional if you have one)",
          duration: "",
          isCompleted: false,
          type: "video"
        },
        {
          id: "unboxing",
          title: "Unboxing Part I: UML",
          duration: "",
          isCompleted: false,
          type: "video"
        }
      ]
    },
    {
      title: "Week 5-8",
      weekNumber: 5,
      description: "Advanced entry-level techniques for serious beginners. Checklists & Plans.",
      lessons: [
        {
          id: "getting-started",
          title: "Getting Started",
          duration: "",
          isCompleted: false,
          type: "video"
        },
        {
          id: "foundation",
          title: "Foundation Fundamentals",
          duration: "",
          isCompleted: false,
          type: "video"
        },
        {
          id: "return-values",
          title: "Return Values From Functions",
          duration: "15 minutes",
          isCompleted: false,
          type: "quiz"
        },
        {
          id: "variables",
          title: "Global Variables and Scope",
          duration: "",
          isCompleted: false,
          type: "video"
        },
        {
          id: "seven-step",
          title: "Seven Step of Creating a Contract",
          duration: "",
          isCompleted: false,
          type: "reading"
        },
        {
          id: "concepts",
          title: "Concepts",
          duration: "",
          isCompleted: false,
          type: "reading"
        }
      ]
    },
    {
      title: "Week 9-12",
      weekNumber: 9,
      description: "Advanced entry-level techniques for serious beginners. Checklists & Plans.",
      lessons: [
        {
          id: "defining-functions",
          title: "Defining Functions",
          duration: "",
          isCompleted: false,
          type: "video"
        },
        {
          id: "function-parameters",
          title: "Function Parameters",
          duration: "",
          isCompleted: false,
          type: "video"
        },
        {
          id: "return-values-2",
          title: "Return Values From Functions",
          duration: "15 minutes",
          isCompleted: false,
          type: "quiz"
        },
        {
          id: "variables-2",
          title: "Global Variables and Scope",
          duration: "",
          isCompleted: false,
          type: "video"
        },
        {
          id: "seven-step-2",
          title: "Seven Step of Creating a Contract",
          duration: "",
          isCompleted: false,
          type: "reading"
        },
        {
          id: "concepts-2",
          title: "Concepts",
          duration: "",
          isCompleted: false,
          type: "reading"
        }
      ]
    }
  ],
  comments: [
    {
      id: "1",
      userName: "Student Name Goes Here",
      userAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
      date: "Oct 15, 2023",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: "2",
      userName: "Student Name Goes Here",
      userAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
      date: "Oct 10, 2023",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: "3",
      userName: "Student Name Goes Here",
      userAvatar: "https://randomuser.me/api/portraits/men/67.jpg",
      date: "Oct 05, 2023",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ],
  stats: {
    duration: "3 weeks",
    lessons: 8,
    enrolled: "65 students",
    language: "English"
  },
  progress: 35
};

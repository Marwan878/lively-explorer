
import React from 'react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
  showBreadcrumbs?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, showBreadcrumbs = true }) => {
  return (
    <div className="min-h-screen bg-background">
      <div className="page-container py-4 md:py-6">
        {showBreadcrumbs && (
          <nav aria-label="Breadcrumb" className="mb-4 md:mb-6 fade-in overflow-x-auto whitespace-nowrap pb-2">
            <ol className="flex items-center space-x-2 text-xs md:text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </li>
              <li>
                <Link to="/courses" className="hover:text-foreground transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </li>
              <li>
                <span className="text-foreground">Course Details</span>
              </li>
            </ol>
          </nav>
        )}
        
        <main className="fade-up">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;

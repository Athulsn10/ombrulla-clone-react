// BlogSection.jsx
import React from 'react';
import BlogPost from './BlogPost'; // Import the BlogPost component

const BlogSection = () => {
  return (
    <div className="mb-16 mt-12 pb-20 lg:px-8 lg:pb-0">
      <div className="mx-auto max-w-5xl divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div className="text-center">
          <div className="flex justify-center items-baseline mb-4 md:mb-1">
            <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 md:w-2 md:h-2">
              <path fill="#0000ff" d="m0 4.8q0-1 0.4-1.8 0.3-0.9 1-1.6 0.7-0.7 1.6-1 0.8-0.4 1.8-0.4h14.4q1 0 1.8 0.4 0.9 0.3 1.6 1 0.7 0.7 1 1.6 0.4 0.8 0.4 1.8v14.4q0 1-0.4 1.8-0.3 0.9-1 1.6-0.7 0.7-1.6 1-0.8 0.4-1.8 0.4h-14.4q-1 0-1.8-0.4-0.9-0.3-1.6-1-0.7-0.7-1-1.6-0.4-0.8-0.4-1.8z"></path>
            </svg>
            <h4 className="text-2xl md:text-sm font-medium font-sans mb-2 mx-4">
              BLOG UPDATES
            </h4>
            <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 md:w-2 md:h-2">
              <path fill="#0000ff" d="m0 4.8q0-1 0.4-1.8 0.3-0.9 1-1.6 0.7-0.7 1.6-1 0.8-0.4 1.8-0.4h14.4q1 0 1.8 0.4 0.9 0.3 1.6 1 0.7 0.7 1 1.6 0.4 0.8 0.4 1.8v14.4q0 1-0.4 1.8-0.3 0.9-1 1.6-0.7 0.7-1.6 1-0.8 0.4-1.8 0.4h-14.4q-1 0-1.8-0.4-0.9-0.3-1.6-1-0.7-0.7-1-1.6-0.4-0.8-0.4-1.8z"></path>
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium text-center font-sans tracking-tight mb-4">
            To Read
          </h2>
        </div>

        <div className="mt-12 grid p-5 gap-6 pt-6 md:grid-cols-1 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          {/* Blog Posts go here */}
          <BlogPost
            title="Privacy and security concerns with Artificial Intelligence"
            imageUrl="./Img/blog1.webp"
            authorName="Zara Elizabeth"
            date="Mar 16, 2020"
            readTime="6 min read"
            content="Privacy and security are significant concerns when it comes to AI. AI systems often require access to large amounts of personal data, which can be..."
          />
          <BlogPost
            title="The impact of AI on jobs and the workforce"
            imageUrl="./Img/blog2.webp"
            authorName="Zara Elizabeth"
            date="Mar 10, 2020"
            readTime="4 min read"
            content="The impact of AI on jobs and the workforce is a topic of much debate and speculation. While some argue that AI will create new job opportunities..."
          />
          <BlogPost
            title="Bias and fairness in Artificial Intelligence"
            imageUrl="./Img/blog3.webp"
            authorName="Zara Elizabeth"
            date="Feb 12, 2020"
            readTime="11 min read"
            content="Bias and fairness are important considerations in AI, as they can significantly impact the accuracy and effectiveness of AI systems, as well as the social and ethical implications of their use..."
          />
          {/* Add more BlogPost components for other posts */}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;

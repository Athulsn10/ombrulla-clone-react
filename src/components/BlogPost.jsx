import React from 'react';

const BlogPost = ({ title, imageUrl, authorName, date, readTime, content }) => {
  return (
    <div className="bg-white p-4 md:p-5 rounded-lg">
      <div className="inline-block mb-4">
        <span className="inline-flex items-center px-3 py-0.5 rounded-lg text-xs md:text-sm font-medium">
          <div className="overflow-hidden rounded-lg">
            <img src={imageUrl} alt={title} className="w-full h-full object-cover" loading="lazy" decoding="async" />
          </div>
        </span>
      </div>
      <a href="#" className="block">
        <p className="text-xl md:text-base font-semibold text-gray-900">{title}</p>
        <p className="mt-2 text-xs md:text-sm text-gray-500">{content}</p>
      </a>
      <div className="mt-4 flex items-center">
        <div className="flex-shrink-0">
          <a href="#">
            <span className="sr-only">{authorName}</span>
            <img src="./Img/zara.webp" className="md:h-10 md:w-10 h-10 w-10 rounded-full" alt={authorName} loading="lazy" decoding="async" />
          </a>
        </div>
        <div className="ml-3">
          <p className="text-base text-xs font-medium text-gray-900">
            <a href="#">{authorName}</a>
          </p>
          <div className="flex space-x-1 text-base text-xs text-gray-500">
            <p>{date}</p>
            <span>·</span>
            <span>{readTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;

// NewsHubLogo.jsx
import React from 'react';

const NewsHubLogo = () => {
  return (
    <div className="flex justify-center items-center bg-gray-900 py-4">
      <h1 className="text-4xl font-extrabold text-white shadow-lg">
        News<span className="text-blue-500">Hub</span>
      </h1>
      <p className="text-lg font-semibold text-gray-400 mt-2">Your Source for the Latest News</p>
    </div>
  );
};

export default NewsHubLogo;

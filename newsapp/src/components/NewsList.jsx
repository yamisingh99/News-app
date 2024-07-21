import React from 'react';

const NewsList = ({ news }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {news.map((article, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
          <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover"/>
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">{article.title}</h2>
            <p className="text-gray-600 text-sm mb-4">{new Date(article.publishedAt).toLocaleDateString()}</p>
            <p className="text-gray-800 mb-4">{article.description}</p>
            <a 
              href={article.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-indigo-500 hover:underline"
            >
              Read more
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsList;

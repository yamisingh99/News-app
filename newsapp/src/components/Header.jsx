// Header.jsx
import React, { useState } from 'react';

const Header = ({ category, setCategory, setCountry }) => {
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    setCountry(''); // Reset country when category changes
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const toggleCategoryDropdown = () => {
    setShowCategoryDropdown(!showCategoryDropdown);
  };

  return (
    <header className="bg-blue-800 shadow-lg text-white p-2">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Main Navigation Items */}
          <button
            onClick={() => setCategory('all-news')}
            className="bg-blue-700 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md transition-colors duration-300"
          >
            All News
          </button>
          <button
            onClick={() => setCategory('top-headlines')}
            className="bg-blue-700 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md transition-colors duration-300"
          >
            Top Headlines
          </button>
          <select
            value=""
            onChange={handleCountryChange}
            className="bg-blue-700 text-white border border-gray-300 rounded-md shadow-md p-2 hover:border-blue-500 focus:outline-none focus:border-blue-500 transition-colors duration-300"
          >
            <option value="">Select Country</option>
            <option value="us">United States</option>
            <option value="gb">United Kingdom</option>
            <option value="ca">Canada</option>
            <option value="au">Australia</option>
            <option value="in">India</option>
            {/* Add other countries */}
          </select>

          {/* Dropdown for Categories */}
          <div className="relative">
            <button
              onClick={toggleCategoryDropdown}
              className="bg-blue-700 text-white border border-gray-300 rounded-md shadow-md p-2 hover:border-blue-500 focus:outline-none focus:border-blue-500 transition-colors duration-300"
            >
              Categories
            </button>
            {showCategoryDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 border border-gray-300 rounded-md shadow-md z-50">
                <ul>
                  <li>
                    <button
                      onClick={() => {
                        setCategory('business');
                        setShowCategoryDropdown(false);
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-blue-100"
                    >
                      Business
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setCategory('entertainment');
                        setShowCategoryDropdown(false);
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-blue-100"
                    >
                      Entertainment
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setCategory('general');
                        setShowCategoryDropdown(false);
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-blue-100"
                    >
                      General
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setCategory('health');
                        setShowCategoryDropdown(false);
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-blue-100"
                    >
                      Health
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setCategory('science');
                        setShowCategoryDropdown(false);
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-blue-100"
                    >
                      Science
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setCategory('sports');
                        setShowCategoryDropdown(false);
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-blue-100"
                    >
                      Sports
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setCategory('technology');
                        setShowCategoryDropdown(false);
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-blue-100"
                    >
                      Technology
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
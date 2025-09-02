// src/App.jsx
import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">

      {/* Main Heading */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-indigo-800 mb-8 text-center drop-shadow-lg transition-all duration-300 ease-in-out hover:scale-105">
        Welcome to Tailwind CSS v4!
      </h1>

      {/* Feature Card Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">

        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 ease-in-out border border-gray-200 hover:border-indigo-400">
          <h2 className="text-2xl font-bold text-gray-800 mb-3 flex items-center">
            <span className="material-icons-outlined text-blue-500 mr-2">build</span>
            Utility-First
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Build any design, directly in your markup. No more wrestling with custom CSS.
          </p>
          <button className="mt-4 px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Learn More
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 ease-in-out border border-gray-200 hover:border-green-400">
          <h2 className="text-2xl font-bold text-gray-800 mb-3 flex items-center">
            <span className="material-icons-outlined text-green-500 mr-2">flash_on</span>
            Highly Performant
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Enjoy lightning-fast compile times and tiny file sizes with the new engine.
          </p>
          <button className="mt-4 px-5 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
            Discover
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 ease-in-out border border-gray-200 hover:border-purple-400">
          <h2 className="text-2xl font-bold text-gray-800 mb-3 flex items-center">
            <span className="material-icons-outlined text-purple-500 mr-2">stars</span>
            New Features
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Experience automatic content detection, CSS-first config, and more!
          </p>
          <button className="mt-4 px-5 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
            Explore
          </button>
        </div>
      </div>

      {/* Footer / Dynamic Text */}
      <p className="mt-10 text-gray-700 text-center text-lg italic animate-pulse">
        Built with React and Tailwind CSS v4.1.11
      </p>

    </div>
  );
}

export default App;
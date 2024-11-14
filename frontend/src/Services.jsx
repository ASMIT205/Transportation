import React from 'react';

const ServicesSection = () => {
  return (
    <section className="flex flex-col items-center justify-center h-1/2 bg-white py-4">
      {/* Our Services Tag */}
      <div className="flex items-center space-x-2 text-peach mb-4">
        <div className="flex items-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="currentColor" 
            viewBox="0 0 24 24" 
            className="w-12 h-12 text-peach shadow-lg"
          >
            <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"/>
          </svg>
        </div>
        <span className="text-sm font-medium">OUR SERVICES</span>
        <div className="flex items-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="currentColor" 
            viewBox="0 0 24 24" 
            className="w-12 h-12 text-bg-peach shadow-lg"
          >
            <path d="M8.59 16.59L13.17 12l-4.58-4.59L10 6l6 6-6 6z"/>
          </svg>
        </div>
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
        Moving Your Products Across <br /> All Borders
      </h1>
    </section>
  );
};

export default ServicesSection;

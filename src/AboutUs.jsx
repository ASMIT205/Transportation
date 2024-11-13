import React from 'react';


const HeaderComponent = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-gray-50  mb-10 ">
      {/* Text Content */}
      <div className="md:w-1/3 mb-6 md:mb-0 ">
        <div className='flex'>
        <div className="flex items-center relative font-bold">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="currentColor" 
            viewBox="0 0 24 24" 
            className="w-6 h-6 text-peach "
          >
            <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"/>
          </svg>
        </div>
        <h4 className="text-orange-500 text-lg font-bold">COMPANY</h4>
        <div className="flex items-center font-bold">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="currentColor" 
            viewBox="0 0 24 24" 
            className="w-6 h-6 text-peach "
          >
            <path d="M8.59 16.59L13.17 12l-4.58-4.59L10 6l6 6-6 6z"/>
          </svg>
        </div>
        </div>
        <h1 className="text-4xl font-bold leading-tight mb-4">
          Provide a Reliable Services Since 1998
        </h1>
        <p className="text-gray-600 text-base">
          As premier Service international Freight Forwarders. We rank second to none in Designing Logistics Infrastructure that provides the best compromise.
        </p>
      </div>

      {/* Image */}
      <div className="md:w-1/2 flex justify-center h-200 w-200">
      <img
          src="./images/image.png"  // Replace with your actual image path
          alt="Freight Forwarding Service" 
         
        />
      </div>
    </div>
  );
};

export default HeaderComponent;

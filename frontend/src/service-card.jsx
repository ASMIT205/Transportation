import React from 'react';

const ServiceCard = ({ title, description, color, imageUrl }) => {
  // Dynamically apply the background color
 

  return (
    <div className={`bg-BlueN text-white rounded-lg p-6 shadow-lg h-80 w-100 `}>
      <h3 className="text-green text-2xl font-bold mb-4">{title}</h3>
      <p className="mb-4  text-slate-400">{description}</p>
      <div className="flex items-center justify-between">
        <span className="flex items-center text-red font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-4 h-4 mr-2 text-orange-500"
          >
            <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
          </svg>
          READ MORE
        </span>
        {imageUrl && <img src={imageUrl} alt="Service Icon" className="w-19 h-19" />}
      </div>
    </div>
  );
};

export default ServiceCard;

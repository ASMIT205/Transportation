import React, { useState } from 'react';

const Slider = () => {
  const slides = [
    {
      image: "./images/img1.png",
      heading: "Worldwide International Door To Door Cargo Services",
      text: "Talk to our customer support team and know the latest offers and promotions!",
      bgColor: "bg-green-600",
    },
    {
      image: "https://example.com/slide2.jpg",
      heading: "Fast and Reliable Cargo Services",
      text: "Experience fast and secure delivery services globally.",
      bgColor: "bg-blue-600",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (

    <div className="relative h-screen ">
      {/* Navbar */}
      <nav className={`absolute top-0 left-0 w-full z-10 transition-colors duration-500 text-white`}>
        <div className="container mx-auto flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold">Time Express Cargo</h1>
          <ul className="flex space-x-6 mr-12 text-bold ">
            <li><a href="#" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-blue-300">Home</a></li>
            <li><a href="#" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-blue-300">About </a></li>
            <li><a href="#" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-blue-300">Services</a></li>
            <li><a href="#" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-blue-300">Careers</a></li>
            <li><a href="#" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-blue-300">Contact</a></li>
          </ul>
        </div>
      </nav>
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute  inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={slide.image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
            <h2 className="text-4xl font-bold">{slide.heading}</h2>
            <p className="mt-4">{slide.text}</p>
          </div>
        </div>
      ))}
      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3"
      >
        &#10094;
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Slider;


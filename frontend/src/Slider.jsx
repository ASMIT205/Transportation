import React, { useState, useRef, useEffect } from 'react';

const Slider = ({ onLinkClick }) => {
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
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Prevent body scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="relative h-screen">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 transition-colors duration-500 text-white">
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          <h1 className="text-2xl font-bold">Time Express Cargo</h1>

          {/* Toggle button for mobile */}
          <button
            className="md:hidden px-4 py-2 bg-green-500 text-white rounded focus:outline-none"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 mr-12 text-bold">
            <li>
              <button
                onClick={() => onLinkClick('header')}
                className="px-4 py-2 bg-green-500 text-white font-bold rounded hover:bg-blue-300"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => onLinkClick('serviceSection')}
                className="px-4 py-2 bg-green-500 text-white font-bold rounded hover:bg-blue-300"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => onLinkClick('whyChooseUs')}
                className="px-4 py-2 bg-green-500 text-white font-bold rounded hover:bg-blue-300"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => onLinkClick('enquiryForm')}
                className="px-4 py-2 bg-green-500 text-white font-bold rounded hover:bg-blue-300"
              >
                Book Now
              </button>
            </li>
            <li>
              <button
                onClick={() => onLinkClick('footer')}
                className="px-4 py-2 bg-green-500 text-white font-bold rounded hover:bg-blue-300"
              >
                Contact Us
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-20 flex">
          {/* Overlay */}
          <div className="fixed inset-0 bg-black opacity-50" onClick={() => setMenuOpen(false)}></div>

          {/* Sidebar */}
          <div
            ref={menuRef}
            className="relative bg-black text-white p-8 transform transition-transform duration-300 ease-in-out overflow-y-auto max-h-screen"
            style={{ maxHeight: '50vh' }} // Limit sidebar height to fit content
          >
            <h1 className="text-3xl font-bold mb-8">Time Express Cargo</h1>
            <ul className="space-y-6">
            <li>
              <button
                onClick={() => {onLinkClick('header');setMenuOpen(false);}}
                className="px-4 py-2 bg-green-500 text-white font-bold rounded hover:bg-blue-300"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => {onLinkClick('serviceSection');setMenuOpen(false);}}
                className="px-4 py-2 bg-green-500 text-white font-bold rounded hover:bg-blue-300"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => {onLinkClick('whyChooseUs');setMenuOpen(false);}}
                className="px-4 py-2 bg-green-500 text-white font-bold rounded hover:bg-blue-300"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => {onLinkClick('enquiryForm');setMenuOpen(false);}}
                className="px-4 py-2 bg-green-500 text-white font-bold rounded hover:bg-blue-300"
              >
                Book Now
              </button>
            </li>
            <li>
              <button
                onClick={() => {onLinkClick('footer');setMenuOpen(false);}}
                className="px-4 py-2 bg-green-500 text-white font-bold rounded hover:bg-blue-300"
              >
                Contact Us
              </button>
            </li>
            </ul>

            {/* Social Icons */}
            <div className="mt-8 flex space-x-4">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-skype"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
      )}

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
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

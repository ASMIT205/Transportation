import React, { useState } from 'react';
import './MainPage.css'; // Add your styles in this file
import './mainPage.js';

const Navitem = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle hover over the hamburger menu
  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="App">
      <header className="header">
        <nav className="navbar">
          <div className="logo"></div>

          {/* Hamburger button for mobile with hover functionality */}
          <div
            className="hamburger"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          {/* Navigation links that open on hover */}
          <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
            <li>Home</li>
            <li>Company</li>
            <li>Services</li>
            <li>R&D</li>
            <li>Contact</li>
            <li>Careers</li>
          </ul>

          <div className="call-button">
            📞 <a href="tel:+918434531515">Call us</a>
          </div>
        </nav>

        <div className="header-content"></div>
      </header>

      <div className="overview-container">
        <div className="overview-text">
          <h3>Overview</h3>
          <blockquote>
            “Our services include Road transport, insurance, and value added
            options, with a focus on quality and sustainability, to meet the
            logistics needs of businesses of all sizes and industries”
          </blockquote>
          <p>
            Our company offers a wide range of logistics services that are
            designed to meet the needs of businesses of all sizes and industries.
            Our land transport services ensure reliable and efficient
            transportation of goods, while our insurance options provide peace of
            mind and protection. We also offer value-added services such as
            warehousing, distribution, and packaging solutions. All of our
            services are focused on delivering exceptional quality and
            sustainability to support our clients' growth and success.
          </p>
        </div>

        <div className="overview-stats">
          <div className="stat">
            <h2>250+</h2>
            <p>Customers</p>
          </div>
          <div className="stat">
            <h2>987+</h2>
            <p>Suppliers</p>
          </div>
        </div>
        <div className="overview-stats1">
          <div className="stat">
            <h2>64+</h2>
            <p>Cities</p>
          </div>
          <div className="stat">
            <h2>9+</h2>
            <p>Years of Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navitem;

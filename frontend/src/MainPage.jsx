import React from 'react';
import './MainPage.css'; // Add your styles in this file

const Navitem = () => {
  return (
    <div className="App">
      <header className="header">
        <nav className="navbar">
          <div className="logo"></div>
          <ul className="nav-links">
            <li>Home</li>
            <li>Company</li>
            <li>Services</li>
            <li>R&D</li>
            <li>Contact</li>
            <li>Careers</li>
          </ul>
          <div className="call-button">Call Us: +91 90393 49475</div>
        </nav>

        {/* The image is applied as a background */}
        <div className="header-content">
          {/* Any content you want to display on the image can go here */}
        </div>
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

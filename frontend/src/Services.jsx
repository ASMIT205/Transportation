import React from "react";
import "./Services.css";

const Services = () => {
  const images = [
    { src: "phishing-alert.png", alt: "Phishing Alert" },
    { src: "inventory-management.png", alt: "Inventory Management" },
    { src: "college-building.png", alt: "College Building" },
    { src: "sales-analysis.png", alt: "Sales Analysis" },
    { src: "college-mini-projects.png", alt: "Various College Mini Projects" },
  ];

  return (
    <div>
    <h3 className="servi">Services</h3>
    <div className="grid-container">
     {images.map((image, index) => (
        <div className="grid-item" key={index}>
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
    </div>
  );
};

export default Services;

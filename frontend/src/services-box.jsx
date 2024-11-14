import React from 'react';
import ServiceCard from './service-card'; // Ensure this is the correct path

const Services = () => {
  const services = [
    {
      title: 'Pan India Transport',
      description: 'Time Express has an experienced team of Air Freight Service specialists delivering on your daily priorities...',
      color: 'green',
      imageUrl: './images/logo192.png', // Replace with actual image path
    },
    {
      title: 'Part Load/Full Load',
      description: 'Time Express Cargo are Sea Freight professionals matching frequent sailings and flexible service options...',
      color: 'blue', // Change color to avoid repetition, if desired
      imageUrl: './images/logo192.png', // Replace with actual image path
    },
    {
      title: 'Palbers/Mouns',
      description: 'Jumbo box shipping is an efficient way for transporting large or irregularly shaped items that require robust packaging...',
      color: 'yellow', // Change color to avoid repetition, if desired
      imageUrl: './images/logo192.png', // Replace with actual image path
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-green-600 mb-20">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          color={service.color}
          imageUrl={service.imageUrl}
        />
      ))}
    </div>
  );
};

export default Services;

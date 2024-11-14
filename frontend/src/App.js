import React from 'react';
import ServicesSection from './Services';
import reportWebVitals from './reportWebVitals';
import Servicesbox from './services-box';
import HeaderComponent from './AboutUs';
import WhyChooseUs from './WhyChooseUs1';
import FeatureGrid from './WhyChooseUs2';

function App() {
  return (
    <div >
      <ServicesSection/>
    <Servicesbox/>
    <HeaderComponent/>
    <WhyChooseUs/>
    <FeatureGrid/>
    </div>
  );
}

export default App;

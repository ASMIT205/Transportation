
import React, { useRef } from 'react';
import Header from './Header.jsx'
import Navbar from './Navbar.jsx'
import Slider from './Slider.jsx';
import EnquiryForm from './EnquiryForm.jsx';
import Footer from './Footer.jsx';
import ServicesSection from './Services';
import reportWebVitals from './reportWebVitals';
import Servicesbox from './services-box';
import HeaderComponent from './AboutUs';
import WhyChooseUs from './WhyChooseUs1';
import FeatureGrid from './WhyChooseUs2';

function App() {
  const enquiryFormRef = useRef(null);  // Reference for EnquiryForm

  const scrollToEnquiryForm = () => {
    if (enquiryFormRef.current) {
      enquiryFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
      <Header />
      <Navbar />
      <Slider />
          <ServicesSection/>
    <Servicesbox/>
    <HeaderComponent/>
    <WhyChooseUs/>
    <FeatureGrid/>
      <EnquiryForm />
      <Footer />
    </div>
  );
}

export default App;

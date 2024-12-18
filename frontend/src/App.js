
import React, { useRef } from 'react';
import Header from './Header.jsx'
import Navbar from './Navbar.jsx'
import Slider from './Slider.jsx';
import ServicesSection from './Services';
import Servicesbox from './services-box';
import WhyChooseUs from './WhyChooseUs1';
import FeatureGrid from './WhyChooseUs2';
import EnquiryForm from './EnquiryForm.jsx';
import Footer from './Footer.jsx';

function App() {

  const headerRef = useRef(null);
  const serviceSectionrRef = useRef(null);
  const whyChooseUsRef = useRef(null);
  const enquiryFormRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div ref={headerRef}>
        <Header />
      </div>

      <Navbar
        onLinkClick={(section) => {
          if (section === 'header') scrollToSection(headerRef);
          if (section === 'serviceSection') scrollToSection(serviceSectionrRef);
          if (section === 'whyChooseUs') scrollToSection(whyChooseUsRef);
          if (section === 'enquiryForm') scrollToSection(enquiryFormRef);
          if (section === 'footer') scrollToSection(footerRef);
        }}
      />

      <Slider
        onLinkClick={(section) => {
          if (section === 'header') scrollToSection(headerRef);
          if (section === 'serviceSection') scrollToSection(serviceSectionrRef);
          if (section === 'whyChooseUs') scrollToSection(whyChooseUsRef);
          if (section === 'enquiryForm') scrollToSection(enquiryFormRef);
          if (section === 'footer') scrollToSection(footerRef);
        }}
      />

      <div ref={serviceSectionrRef}>

        <ServicesSection />
        <Servicesbox />
      </div>

      <div ref={whyChooseUsRef}>

        <WhyChooseUs />
        <FeatureGrid />
      </div>

      <div ref={enquiryFormRef}>
        <EnquiryForm />
      </div>

      <div ref={footerRef}>

        <Footer />
      </div>
    </div>
  );
}

export default App;

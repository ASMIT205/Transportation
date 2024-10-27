import React, { useRef } from 'react';
import Header from './Header.jsx'
import Navbar from './Navbar.jsx'
import Slider from './Slider.jsx';
import EnquiryForm from './EnquiryForm.jsx';
import Footer from './Footer.jsx';

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
      <Navbar scrollToEnquiryForm={scrollToEnquiryForm} />
      <Slider />
      <div ref={enquiryFormRef}>  {/* Apply the ref here */}
        <EnquiryForm />
      </div>

      <Footer />
    </div>
  );
}

export default App;

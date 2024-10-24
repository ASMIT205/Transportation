import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import ServicesSection from './services';
import reportWebVitals from './reportWebVitals';
import Servicesbox from './services-box';
import HeaderComponent from './AboutUs';
import WhyChooseUs from './WhyChooseUs1';
import FeatureGrid from './WhyChooseUs2';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <ServicesSection/>
    <Servicesbox/>
    <HeaderComponent/>
    <WhyChooseUs/>
    <FeatureGrid/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

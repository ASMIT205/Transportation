import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Header() {
  return (
    <div>
      <div className="bg-green-600 text-white py-4">
        <div className="container mx-auto flex flex-col md:flex-row md:justify-between items-center">
          <div className="space-x-4 md:ml-8 flex justify-center md:justify-start mb-2 md:mb-0">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-skype"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>

          <div className="hidden md:flex space-x-6 text-sm md:mr-14 font-bold">
            <span><i className="fas fa-phone"></i> +97143496001</span>
            <span><i className="fas fa-envelope"></i> info@mgroupcargo.com</span>
            <span><i className="fas fa-map-marker-alt"></i> HO: Al Khabaizi, Dubai</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

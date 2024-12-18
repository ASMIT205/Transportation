import React, { useState, useEffect, useRef } from 'react';

const Navbar = ({ onLinkClick }) => {
    const [isSticky, setIsSticky] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full bg-white shadow-lg transition-transform duration-300 
            ${isSticky ? 'transform-none' : 'transform -translate-y-full'} z-50 hidden md:flex`}>
            <div className="container mx-auto flex justify-between items-center p-4">
                <div className="text-green-600 font-bold">Time Express Cargo</div>
                <ul className="flex space-x-4">
                    <li>
                        <button
                            onClick={() => onLinkClick('header')}
                            className="px-4 py-2 bg-green-500 text-white font-bold rounded hover:bg-blue-300"
                        >
                            Home
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => onLinkClick('serviceSection')}
                            className="px-4 py-2 bg-green-500 text-white font-bold rounded hover:bg-blue-300"
                        >
                            Services
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => onLinkClick('whyChooseUs')}
                            className="px-4 py-2 bg-green-500 text-white font-bold rounded hover:bg-blue-300"
                        >
                            About
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => onLinkClick('enquiryForm')}
                            className="px-4 py-2 bg-green-500 text-white font-bold rounded hover:bg-blue-300"
                        >
                            Book Now
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => onLinkClick('footer')}
                            className="px-4 py-2 bg-green-500 text-white font-bold rounded hover:bg-blue-300"
                        >
                            Contact Us
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

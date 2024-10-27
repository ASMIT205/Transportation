import React, { useState, useEffect, useRef } from 'react';

const Navbar = ({ scrollToEnquiryForm }) => {
    const [isSticky, setIsSticky] = useState(false);
    const headerRef = useRef(null);
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
        <nav className={`fixed top-0 left-0 w-full bg-white shadow-lg transition-transform duration-300 ${isSticky ? 'transform-none' : 'transform -translate-y-full'} z-50`}>
            <div className="container mx-auto flex justify-between items-center p-4">
                <div className="text green-600 font-bold">Time Express Cargo</div>
                <ul className="flex space-x-4">
                    <li><a href="#" className="px-4 py-2 bg-green-500 text-white text-bold rounded hover:bg-blue-300">Home</a></li>
                    <li><a href="#" className="px-4 py-2 bg-green-500 text-white text-bold rounded hover:bg-blue-300">About</a></li>
                    <li><a href="#" className="px-4 py-2 bg-green-500 text-white text-bold rounded hover:bg-blue-300">Services</a></li>
                    <li><a href="#" className="px-4 py-2 bg-green-500 text-white text-bold rounded hover:bg-blue-300">Careers</a></li>
                    {/* <li><a href="#" className="px-4 py-2 bg-green-500 text-white text-bold rounded hover:bg-blue-300">Contact</a></li> */}
                    <li><a href="#" onClick={scrollToEnquiryForm} className="px-4 py-2 bg-green-500 text-white text-bold rounded hover:bg-blue-300">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

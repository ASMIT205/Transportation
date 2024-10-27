import React from 'react';
import './Footer.css'
import { FaWhatsapp, FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <div >
            <footer className="bg-white py-8 border-t">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                    {/* Left Section: Logo and Description */}
                    <div>
                        <img src="logo.png" alt="Time Express Cargo" className="h-12 mb-4" />
                        <p className="text-gray-700">
                            Time Express Cargo is a Leading freight forwarding company in the
                            Middle East. Offering premium Freight & Logistics Services to
                            Business Worldwide. As premier Service international Freight
                            Forwarders.
                        </p>
                        <p className="mt-4 text-gray-700">
                            With access to excellent and reliable network of quality carriers
                            and carefully selected partners we ensure a trouble-free transport.
                        </p>
                    </div>

                    {/* Middle Section: Tags */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Tags</h3>
                        <div className="flex flex-wrap gap-2">
                            <span className="bg-red-100 text-red-500 text-sm px-2 py-1 rounded">
                                #CargoServices
                            </span>
                            <span className="bg-red-100 text-red-500 text-sm px-2 py-1 rounded">
                                #FreightShipping
                            </span>
                            <span className="bg-red-100 text-red-500 text-sm px-2 py-1 rounded">
                                #LogisticsSolutions
                            </span>
                            {/* Add more tags similarly */}
                        </div>
                    </div>

                    {/* Right Section: Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <p className="text-gray-700">
                            <strong>Phone:</strong>{" "}
                            <a href="tel:+97143496001" className="text-orange-600">
                                +97143496001
                            </a>
                        </p>
                        <p className="text-gray-700 mt-5">
                            <strong>Email:</strong>{" "}
                            <a href="mailto:info@mgroupcargo.com" className="text-orange-600">
                                info@mgroupcargo.com
                            </a>
                        </p>
                        <p className="text-gray-700 mt-4 mb-6">
                            <strong>Working Hours:</strong> Mon - Sun (09:00 am to 10:30 pm)
                        </p>
                        <div className="flex space-x-4 mt-4">
                            {/* Add icons for social media here */}
                            <a href="#" className="text-gray-500 hover:text-gray-700">
                                {/* Font Awesome or any icon for social links */}
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-700">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-700">
                                <i className="fab fa-skype"></i>
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-700">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom section */}
                <div className="bg-green-600 text-white py-4 mt-8">
                    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
                        <p className="text-sm">
                            Copyright © 2024  - Design{" "}
                            <a href="#" className="text-orange-500">
                                {/* Tsssmart.com */}
                            </a>{" "}
                            - All Rights Reserved.
                        </p>
                        <div className="flex space-x-4 text-sm">
                            <a href="#" className="text-white hover:text-gray-300">
                                Terms & Conditions
                            </a>
                            <a href="#" className="text-white hover:text-gray-300">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-white hover:text-gray-300">
                                Sitemap
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

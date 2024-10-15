import React from 'react';
import './Footer.css'
import { FaWhatsapp, FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <div >
            <footer className='footer-container'>
                <div className='left-section'>
                    <img src="/logo.png" alt="BPR Logo" className='logo' /> {/* Replace with your logo */}
                    <p className='company-description'>
                        BPR Network India Private Limited is a leading 'IT' solution provider. The Company has been promoted by highly experienced professionals dedicated to providing total 'IT' solutions under one roof.
                    </p>
                </div>

                {/* Middle Section - Address and Contact Info */}

                <div className='middle-section'>
                    <h2 className='contact-us'>CONTACT US</h2>
                    {/* Clickable phone numbers */}
                    <p >📞 <a href="tel:+918434531515" className='phone-number'>+91-8434531515</a></p> 

                    {/* Clickable email address */}
                    <p>✉️ <a href="mailto:office@bpr.net.in">office@bpr.net.in</a></p>

                    {/* Social Media Icons */}
                    <div className='social-icons'>
                        <a href='https://wa.me/918434531515' target='_blank' rel='noopener noreferrer'>
                            <FaWhatsapp className='icon' />
                        </a>
                        <a href='https://facebook.com/' target='_blank' rel='noopener noreferrer'>
                            <FaFacebook className='icon' />
                        </a>
                        <a href='https://instagram.com/' target='_blank' rel='noopener noreferrer'>
                            <FaInstagram className='icon' />
                        </a>
                        <a href='https://youtube.com/' target='_blank' rel='noopener noreferrer'>
                            <FaYoutube className='icon' />
                        </a>
                        <a href='https://linkedin.com/' target='_blank' rel='noopener noreferrer'>
                            <FaLinkedin className='icon' />
                        </a>
                    </div>
                </div>


                <div className='right-section'>
                    <h2 className='our-address'>OUR ADDRESS</h2>
                    <p>302, 3rd Floor, Gopi Tower</p>
                    <p>Saguna More, Danapur</p>
                    <p> Patna, Bihar, 801503</p>
                </div>
            </footer>
        </div>
    )
}

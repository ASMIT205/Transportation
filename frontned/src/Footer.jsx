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
                    <h2>CONTACT US</h2>
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
                    <h2>OUR ADDRESS</h2>
                    <p>302, 3rd Floor, Gopi Tower</p>
                    <p>Saguna More, Danapur</p>
                    <p> Patna, Bihar, 801503</p>
                </div>
            </footer>
        </div>
    )
}

// const styles = {
//     footerContainer: {
//         display: 'flex',
//         justifyContent: 'space-between',
//         backgroundColor: '#003366',
//         color: '#fff',
//         padding: '40px',
//         fontFamily: 'Arial, sans-serif',
//         fontSize: '14px',
//     },
//     leftSection: {
//         flex: 1,
//         padding: '10px',
//     },
//     middleSection: {
//         flex: 1,
//         padding: '10px',
//         textAlign: 'left',
//     },
//     rightSection: {
//         flex: 1,
//         padding: '10px',
//     },
//     logo: {
//         width: '150px',
//         marginBottom: '10px',
//     },
//     companyDescription: {
//         marginBottom: '20px',
//     },
//     certificationIcons: {
//         display: 'flex',
//         alignItems: 'center',
//     },
//     certIcon: {
//         width: '50px',
//         marginRight: '10px',
//     },
//     inputField: {
//         width: '100%',
//         padding: '10px',
//         marginBottom: '10px',
//         borderRadius: '5px',
//         border: 'none',
//     },
//     textArea: {
//         width: '100%',
//         padding: '10px',
//         marginBottom: '10px',
//         borderRadius: '5px',
//         border: 'none',
//         height: '80px',
//     },
//     submitButton: {
//         backgroundColor: '#FFD700',
//         color: '#003366',
//         padding: '10px 20px',
//         border: 'none',
//         borderRadius: '5px',
//         cursor: 'pointer',
//     },
//     socialIcons: {
//         display: 'flex',
//         justifyContent: 'center',
//         marginTop: '20px',
//     },
//     icon: {
//         fontSize: '24px',
//         marginRight: '15px',
//         cursor: 'pointer',
//         color: '#FFD700',
//     },
// };

// export default Footer;

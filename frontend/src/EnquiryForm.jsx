import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { isValidPhoneNumber } from 'react-phone-number-input';
import './EnquiryForm.css'

const ContactForm = () => {
  // Define state variables for form inputs
  const [name, setName] = useState('');
  const [phone, setPhone] = useState(''); // For phone number input
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(''); // Error state for validation


  // Handle form submission

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isValidPhoneNumber(phone)) {
      setError('Invalid phone number format.');
      return;
    }

    // Clear any previous errors
    setError('');

    // Add your form submission logic here
    console.log({ name, phone, email, message });

    // Reset form after submission (optional)
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
  };



  return (
    <div className='enquiry-body'>
      <h1 className='enquiry-header'>FOR ANY ENQUIRY</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          className='input-field'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        {/* PhoneInput with country code */}
        <PhoneInput
          placeholder="Enter Phone Number"
          className='phone-field'
          value={phone}
          onChange={setPhone}
          defaultCountry="IN"  // Optional: set a default country
          international       // Optional: enable international format
        />
        {/* Display error message if phone number is missing */}
        {error && <p className="error-message">{error}</p>}

        <input
          type="email"
          placeholder="Enter Email"
          className='input-field'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <textarea
          placeholder="Enter Message"
          className='text-area'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button type="submit" className='submit-button'>
          MAIL US
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
